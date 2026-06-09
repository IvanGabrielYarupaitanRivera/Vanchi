<script lang="ts">
	import { useConvexClient } from 'convex-svelte';
	import { api } from '$convex/_generated/api';
	import { tick } from 'svelte';
	import { marked } from 'marked';
	import DOMPurify from 'dompurify';

	// ─── Sanitización con target=_blank ──────────────
	function sanitize(html: string): string {
		return DOMPurify.sanitize(html, {
			ADD_ATTR: ['target'],
			ADD_TAGS: ['a']
		});
	}

	function addTargetBlank(html: string): string {
		return html.replace(/<a\s/g, '<a target="_blank" rel="noopener noreferrer" ');
	}

	function setMarkdown(node: HTMLElement, text: string) {
		const raw = marked.parse(text, { async: false }) as string;
		node.innerHTML = addTargetBlank(sanitize(raw));
		return {
			update(newText: string) {
				const raw = marked.parse(newText, { async: false }) as string;
				node.innerHTML = addTargetBlank(sanitize(raw));
			}
		};
	}

	function setHtml(node: HTMLElement, html: string) {
		node.innerHTML = addTargetBlank(sanitize(html));
		return {
			update(newHtml: string) {
				node.innerHTML = addTargetBlank(sanitize(newHtml));
			}
		};
	}

	function renderPartial(text: string): string {
		if (!text) return '';
		const raw = marked.parse(text, { async: false }) as string;
		return addTargetBlank(sanitize(raw));
	}

	function autoResize(node: HTMLTextAreaElement) {
		const adjust = () => {
			node.style.height = 'auto';
			node.style.height = `${node.scrollHeight}px`;
		};
		node.addEventListener('input', adjust);
		adjust();
		return {
			destroy() {
				node.removeEventListener('input', adjust);
			}
		};
	}

	const LS_KEY = 'vanchi-thread-v2-id';
	const convex = useConvexClient();

	let threadId = $state<string | null>(null);
	let input = $state('');
	let isLoading = $state(false);
	let isTyping = $state(false);
	let messages: { role: string; text: string }[] = $state([]);
	let messagesContainer: HTMLDivElement | undefined = $state();
	let typingHtml = $state('');
	let cursorPhase = $state<'blink' | 'fadeout' | 'hidden'>('hidden');
	let rafId: number | null = $state(null);

	// ─── Recuperar thread al cargar ──────────────────
	$effect(() => {
		try {
			const saved = localStorage.getItem(LS_KEY);
			if (saved) threadId = saved;
		} catch { /* incógnito */ }
	});

	// ─── Auto-scroll ─────────────────────────────────
	$effect(() => {
		if (isTyping && typingHtml && messagesContainer) {
			const { scrollTop, scrollHeight, clientHeight } = messagesContainer;
			if (scrollHeight - scrollTop - clientHeight < 50) {
				messagesContainer.scrollTop = scrollHeight;
			}
		}
	});

	// ─── Typing animation ────────────────────────────
	function startTyping(text: string) {
		typingHtml = '';
		isTyping = true;
		cursorPhase = 'blink';
		isLoading = false;

		if (rafId !== null) cancelAnimationFrame(rafId);

		const totalFrames = Math.min(30, Math.max(10, Math.floor(1800 / text.length)));
		let frame = 0;

		function step() {
			frame++;
			const pct = frame / totalFrames;
			const reveal = Math.floor(text.length * Math.min(pct, 1));
			typingHtml = renderPartial(text.slice(0, reveal));

			if (reveal < text.length) {
				rafId = requestAnimationFrame(step);
			} else {
				typingHtml = renderPartial(text);
				cursorPhase = 'fadeout';
				setTimeout(() => {
					cursorPhase = 'hidden';
					isTyping = false;
					messages = [...messages, { role: 'assistant', text }];
					typingHtml = '';
					setTimeout(() => document.getElementById('chat-input')?.focus(), 50);
				}, 300);
			}
		}

		rafId = requestAnimationFrame(step);
	}

	// ─── LS helpers ──────────────────────────────────
	function setLS(key: string, value: string) {
		try { localStorage.setItem(key, value); } catch { /* incógnito */ }
	}
	function removeLS(key: string) {
		try { localStorage.removeItem(key); } catch { /* incógnito */ }
	}

	// ─── Envío ───────────────────────────────────────
	async function send() {
		const msg = input.trim();
		if (!msg || isLoading || isTyping) return;
		input = '';
		isLoading = true;
		messages = [...messages, { role: 'user', text: msg }];

		await tick();

		if (messagesContainer) {
			messagesContainer.scrollTop = messagesContainer.scrollHeight;
		}

		try {
			let text: string;
			if (!threadId) {
				const result = await convex.action(api.agentV2.conversations.createThread, { prompt: msg });
				threadId = result.threadId!;
				setLS(LS_KEY, result.threadId!);
				text = result.text;
			} else {
				const result = await convex.action(api.agentV2.conversations.continueThread, {
					prompt: msg,
					threadId
				});
				text = result.text;
			}
			startTyping(text);
		} catch (err) {
			console.error('Error:', err);
			messages = [...messages, { role: 'assistant', text: 'Ocurrió un error. Intenta de nuevo.' }];
			isLoading = false;
			setTimeout(() => document.getElementById('chat-input')?.focus(), 50);
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			send();
		}
	}

	function newConversation() {
		removeLS(LS_KEY);
		threadId = null;
		messages = [];
		input = '';
		isLoading = false;
		isTyping = false;
		typingHtml = '';
		cursorPhase = 'hidden';
	}

	function selectSuggestion(text: string) {
		input = text;
		send();
	}
</script>

<svelte:head>
	<title>Chat con el asistente — Vanchi</title>
	<meta name="description" content="Pregúntale al asistente de Vanchi sobre proyectos, tecnologías, servicios y experiencia de Ivan Yarupaitan." />
</svelte:head>

<div class="mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-4 pt-24 pb-6">
	<!-- encabezado -->
	<div class="flex shrink-0 items-center justify-between px-2 pb-4">
		<div>
			<h1 class="font-display text-xl text-base-content">Asistente Vanchi</h1>
			<p class="text-sm text-base-content/40">
				Pregúntame sobre proyectos, tecnologías o servicios
			</p>
		</div>
		<button
			class="cursor-pointer text-xs text-base-content/40 transition-colors hover:text-base-content/60"
			onclick={newConversation}
		>
			Nueva conversación
		</button>
	</div>

	<!-- chat -->
	<div
		class="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-base-100/60 shadow-2xl backdrop-blur-2xl"
	>
		<!-- mensajes -->
		<div
			bind:this={messagesContainer}
			class="min-h-0 flex-1 overflow-y-auto scroll-smooth px-6 py-6"
		>
			<div class="flex min-h-full flex-col space-y-4">
				{#if messages.length === 0 && !isTyping}
					<div class="flex flex-col justify-center py-12">
						<p class="text-sm leading-relaxed text-base-content/60">
							Soy el asistente de <span class="text-primary">Vanchi</span>. Estoy aquí para ayudarte a
							entender mejor lo que Ivan hace, ha hecho y puede hacer por ti.
						</p>
						<div class="space-y-2 pt-6">
							<p class="text-xs tracking-wider text-base-content/30 uppercase">Sugerencias</p>
							<button
								class="block w-full cursor-pointer border-b border-white/5 py-2 text-left text-sm text-base-content/70 transition-all duration-300 hover:border-primary hover:text-base-content"
								onclick={() => selectSuggestion('¿Qué tipo de proyectos has hecho?')}
							>
								¿Qué tipo de proyectos has hecho?
							</button>
							<button
								class="block w-full cursor-pointer border-b border-white/5 py-2 text-left text-sm text-base-content/70 transition-all duration-300 hover:border-primary hover:text-base-content"
								onclick={() => selectSuggestion('¿Puedes construir un CRM o sistema web?')}
							>
								¿Puedes construir un CRM o sistema web?
							</button>
							<button
								class="block w-full cursor-pointer border-b border-white/5 py-2 text-left text-sm text-base-content/70 transition-all duration-300 hover:border-primary hover:text-base-content"
								onclick={() => selectSuggestion('¿Cuánto cuesta un proyecto con Vanchi?')}
							>
								¿Cuánto cuesta un proyecto con Vanchi?
							</button>
						</div>
					</div>
				{/if}

				{#each messages as msg, i (i)}
					<div class="space-y-1">
						{#if msg.role === 'user'}
							<p class="text-sm font-medium text-base-content">{msg.text}</p>
						{:else}
							<div class="prose prose-sm max-w-none border-l border-primary/30 pl-3 prose-invert">
								<div use:setMarkdown={msg.text}></div>
							</div>
						{/if}
					</div>
				{/each}

				{#if isTyping}
					<div class="space-y-1">
						<div class="prose prose-sm max-w-none border-l border-primary/30 pl-3 prose-invert">
							<div use:setHtml={typingHtml}></div>
							{#if cursorPhase === 'blink'}
								<span class="inline-block h-[1.1em] w-0.5 animate-pulse bg-primary align-text-bottom"></span>
							{:else if cursorPhase === 'fadeout'}
								<span class="inline-block h-[1.1em] w-0.5 bg-primary align-text-bottom"></span>
							{/if}
						</div>
					</div>
				{/if}

				{#if isLoading}
					<div class="flex items-center justify-center gap-1.5 py-5">
						<span class="loading-dot"></span>
					</div>
				{/if}
			</div>
		</div>

		<!-- input -->
		<div class="shrink-0 border-t border-white/10 px-6 py-4">
			<textarea
				use:autoResize
				id="chat-input"
				bind:value={input}
				onkeydown={handleKeydown}
				placeholder="Escribe tu pregunta aquí..."
				rows="1"
				class="w-full resize-none rounded-xl border border-white/10 bg-base-200/50 px-4 py-3 text-sm text-base-content transition-all duration-300 outline-none placeholder:text-base-content/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
				disabled={isLoading || isTyping}
			></textarea>
			<p class="mt-2 text-xs text-base-content/30">
				Enter para enviar · Shift+Enter para salto de línea
			</p>
		</div>
	</div>
</div>

<style>
	.loading-dot {
		display: inline-block;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background-color: oklch(74% 0.14 85);
		animation: dot-pulse 1.4s ease-in-out infinite;
	}

	@keyframes dot-pulse {
		0%, 80%, 100% { opacity: 0.2; transform: scale(0.6); }
		40% { opacity: 1; transform: scale(1); }
	}
</style>

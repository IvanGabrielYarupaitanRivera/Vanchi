<script lang="ts">
	import { useConvexClient } from 'convex-svelte';
	import { api } from '$convex/_generated/api';
	import { X } from '@lucide/svelte';
	import { fly, fade } from 'svelte/transition';
	import { tick } from 'svelte';
	import { marked } from 'marked';
	import DOMPurify from 'dompurify';

	function setMarkdown(node: HTMLElement, text: string) {
		const html = marked.parse(text, { async: false }) as string;
		node.innerHTML = DOMPurify.sanitize(html);
		return {
			update(newText: string) {
				node.innerHTML = DOMPurify.sanitize(marked.parse(newText, { async: false }) as string);
			}
		};
	}

	// Para HTML ya sanitizado (typing animation en vivo)
	function setHtml(node: HTMLElement, html: string) {
		node.innerHTML = html;
		return {
			update(newHtml: string) {
				node.innerHTML = newHtml;
			}
		};
	}

	// Renderiza Markdown parcial durante typing
	function renderPartial(text: string): string {
		if (!text) return '';
		return DOMPurify.sanitize(marked.parse(text, { async: false }) as string);
	}

	let { isOpen = false, onToggle = () => {} } = $props();

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

	// ─── Efectos ────────────────────────────────────
	$effect(() => {
		const saved = getLS('vanchi-thread-id');
		if (saved) threadId = saved;
	});

	$effect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); onToggle(); }
			if (e.key === 'Escape' && isOpen) onToggle();
		};
		window.addEventListener('keydown', handleKey);
		return () => window.removeEventListener('keydown', handleKey);
	});

	$effect(() => {
		if (isOpen) document.body.style.overflow = 'hidden';
		else document.body.style.overflow = '';
		return () => (document.body.style.overflow = '');
	});

	$effect(() => {
		if (isOpen) setTimeout(() => document.getElementById('commandbar-input')?.focus(), 100);
	});

	// ─── Typing animation con Markdown en vivo ──────
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
			const partial = text.slice(0, reveal);
			typingHtml = renderPartial(partial);

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
					setTimeout(() => document.getElementById('commandbar-input')?.focus(), 50);
				}, 300);
			}
		}

		rafId = requestAnimationFrame(step);
	}

	// ─── Helpers ────────────────────────────────────
	function getLS(key: string): string | null {
		try { return localStorage.getItem(key); } catch { return null; }
	}
	function setLS(key: string, value: string) {
		try { localStorage.setItem(key, value); } catch { /* incógnito */ }
	}
	function removeLS(key: string) {
		try { localStorage.removeItem(key); } catch { /* incógnito */ }
	}

	// ─── Envío ──────────────────────────────────────
	async function send() {
		const msg = input.trim();
		if (!msg || isLoading || isTyping) return;
		input = '';
		isLoading = true;
		messages = [...messages, { role: 'user', text: msg }];

		// Esperar a que Svelte monte el nuevo mensaje en el DOM
		await tick();

		// Scroll al fondo para mostrar el mensaje enviado
		if (messagesContainer) {
			messagesContainer.scrollTop = messagesContainer.scrollHeight;
		}



		try {
			let text: string;
			if (!threadId) {
				const result = await convex.action(api.agent.conversations.createThread, { prompt: msg });
				threadId = result.threadId!;
				setLS('vanchi-thread-id', result.threadId!);
				text = result.text;
			} else {
				const result = await convex.action(api.agent.conversations.continueThread, { prompt: msg, threadId });
				text = result.text;
			}
			startTyping(text);
		} catch (err) {
			console.error('Error:', err);
			messages = [...messages, { role: 'assistant', text: 'Ocurrió un error. Intenta de nuevo.' }];
			isLoading = false;
			setTimeout(() => document.getElementById('commandbar-input')?.focus(), 50);
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
	}

	function newConversation() {
		removeLS('vanchi-thread-id');
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

{#if isOpen}
	<!-- svelte-ignore a11y_interactive_supports_focus -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
		role="dialog"
		aria-modal="true"
		onclick={(e) => { if (e.target === e.currentTarget) onToggle(); }}
		onkeydown={(e) => { if (e.key === 'Escape') onToggle(); }}
	>
		<div
			transition:fly={{ y: 20, duration: 200 }}
			class="mx-4 flex w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-base-100/80 shadow-2xl backdrop-blur-2xl"
			style="max-height: min(70vh, 600px)"
		>
			<!-- header -->
			<div class="flex shrink-0 items-center justify-between border-b border-white/10 px-6 py-4">
				<div>
					<h2 class="font-display text-lg text-base-content">¿En qué puedo ayudarte?</h2>
					<button class="text-xs text-base-content/40 transition-colors hover:text-base-content/60" onclick={newConversation}>
						Nueva conversación
					</button>
				</div>
				<button
					class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 hover:bg-white/5"
					onclick={() => onToggle()}
					aria-label="Cerrar"
				>
					<X size={16} class="text-base-content/60" />
				</button>
			</div>

			<!-- messages -->
			<div bind:this={messagesContainer} class="min-h-0 flex-1 overflow-y-auto px-6 py-4 scroll-smooth">
				<div class="flex min-h-full flex-col space-y-4">
				{#if messages.length === 0 && !isTyping}
					<div class="flex flex-col justify-center py-8">
						<p class="text-sm leading-relaxed text-base-content/60">
							Soy el asistente de <span class="text-primary">Vanchi</span>. Pregúntame sobre proyectos, tecnologías o servicios.
						</p>
						<div class="space-y-2 pt-4">
							<p class="text-xs tracking-wider text-base-content/30 uppercase">Sugerencias</p>
							<button class="block w-full border-b border-white/5 py-2 text-left text-sm text-base-content/70 transition-all duration-300 hover:border-primary hover:text-base-content" onclick={() => selectSuggestion('¿Qué tipo de proyectos has hecho?')}>
								¿Qué tipo de proyectos has hecho?
							</button>
							<button class="block w-full border-b border-white/5 py-2 text-left text-sm text-base-content/70 transition-all duration-300 hover:border-primary hover:text-base-content" onclick={() => selectSuggestion('¿Puedes construir un CRM o sistema web?')}>
								¿Puedes construir un CRM o sistema web?
							</button>
							<button class="block w-full border-b border-white/5 py-2 text-left text-sm text-base-content/70 transition-all duration-300 hover:border-primary hover:text-base-content" onclick={() => selectSuggestion('¿Cuánto cuesta un proyecto con Vanchi?')}>
								¿Cuánto cuesta un proyecto con Vanchi?
							</button>
						</div>
					</div>
				{/if}

				<!-- Mensajes completados -->
				{#each messages as msg, i (i)}
					<div class="space-y-1">
						{#if msg.role === 'user'}
							<p class="text-sm font-medium text-base-content">{msg.text}</p>
						{:else}
							<div class="border-l border-primary/30 pl-3 prose prose-sm prose-invert max-w-none">
								<div use:setMarkdown={msg.text}></div>
							</div>
						{/if}
						{#if i < messages.length - 1}<div class="border-b border-white/5"></div>{/if}
					</div>
				{/each}

				<!-- Respuesta en typing (sin scroll, el user message ya está arriba) -->
				{#if isTyping}
					<div class="space-y-1">
						<div class="border-l border-primary/30 pl-3 prose prose-sm prose-invert max-w-none">
							<div use:setHtml={typingHtml}></div>
							{#if cursorPhase === 'blink'}
								<span class="inline-block h-[1.1em] w-0.5 animate-pulse bg-primary align-text-bottom"></span>
							{:else if cursorPhase === 'fadeout'}
								<span class="inline-block h-[1.1em] w-0.5 bg-primary align-text-bottom" transition:fade={{ duration: 300 }}></span>
							{/if}
						</div>
					</div>
				{/if}

				<!-- Loading -->
				{#if isLoading}
					<div class="flex items-center justify-center py-4">
						<div class="h-px w-24 overflow-hidden rounded-full bg-white/10">
							<div class="h-full w-full animate-pulse rounded-full bg-primary"></div>
						</div>
					</div>
				{/if}
			</div>
		</div>

			<!-- input -->
			<div class="shrink-0 border-t border-white/10 px-6 py-4">
				<textarea
					id="commandbar-input"
					bind:value={input}
					onkeydown={handleKeydown}
					placeholder="Escribe tu pregunta aquí..."
					rows="1"
					class="w-full resize-none rounded-xl border border-white/10 bg-base-200/50 px-4 py-3 text-sm text-base-content transition-all duration-300 outline-none placeholder:text-base-content/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
					disabled={isLoading || isTyping}
				></textarea>
				<p class="mt-2 text-xs text-base-content/30">Enter para enviar · Shift+Enter para salto de línea · Esc para cerrar</p>
			</div>
		</div>
	</div>
{/if}

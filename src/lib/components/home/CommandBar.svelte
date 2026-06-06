<script lang="ts">
	import { useConvexClient } from 'convex-svelte';
	import { api } from '$convex/_generated/api';
	import { X } from '@lucide/svelte';
	import { fly, fade } from 'svelte/transition';

	let { isOpen = false, onToggle = () => {} } = $props();

	const convex = useConvexClient();

	let threadId = $state<string | null>(null);
	let input = $state('');
	let isLoading = $state(false);
	let isTyping = $state(false);
	let messages: { role: string; text: string }[] = $state([]);
	let messagesContainer: HTMLDivElement | undefined = $state();

	// Estado de la typing animation

	let typingVisible = $state('');
	let cursorPhase = $state<'blink' | 'fadeout' | 'hidden'>('hidden');
	let rafId: number | null = $state(null);

	// ─── Efectos ────────────────────────────────────
	$effect(() => {
		const saved = getLS('vanchi-thread-id');
		if (saved) threadId = saved;
	});

	$effect(() => {
		if (messagesContainer && (messages.length > 0 || isLoading || isTyping)) {
			const raf = requestAnimationFrame(() => {
				messagesContainer!.scrollTop = messagesContainer!.scrollHeight;
			});
			return () => cancelAnimationFrame(raf);
		}
	});

	$effect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
				e.preventDefault();
				onToggle();
			}
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
		if (isOpen) {
			setTimeout(() => document.getElementById('commandbar-input')?.focus(), 100);
		}
	});

	// ─── Typing animation premium ───────────────────
	function startTyping(text: string) {
		typingVisible = '';
		isTyping = true;
		cursorPhase = 'blink';
		isLoading = false;

		// Limpiar RAF anterior si existe
		if (rafId !== null) cancelAnimationFrame(rafId);

		// Determinar velocidad base según longitud del texto
		// Textos cortos (~100 chars) → 5ms por char
		// Textos largos (~1000 chars) → 15ms por char
		const baseDelay = Math.min(15, Math.max(5, text.length / 80));
		let lastTime = 0;
		let charIndex = 0;

		function step(timestamp: number) {
			if (!lastTime) lastTime = timestamp;
			const elapsed = timestamp - lastTime;

			if (elapsed >= baseDelay && charIndex < text.length) {
				// Revelar entre 1-3 caracteres por frame para fluidez
				const charsToReveal = Math.min(
					Math.max(1, Math.floor(elapsed / baseDelay)),
					text.length - charIndex
				);
				typingVisible = text.slice(0, charIndex + charsToReveal);
				charIndex += charsToReveal;
				lastTime = timestamp;
			}

			if (charIndex < text.length) {
				rafId = requestAnimationFrame(step);
			} else {
				// Texto completo mostrado → cursor parpadea y se desvanece
				typingVisible = text;
				cursorPhase = 'fadeout';

				// Después de 600ms, ocultar cursor y marcar fin
				setTimeout(() => {
					cursorPhase = 'hidden';
					isTyping = false;
					messages = [...messages, { role: 'assistant', text }];

					typingVisible = '';
				}, 600);
			}
		}

		rafId = requestAnimationFrame(step);
	}

	// ─── Helpers ────────────────────────────────────
	function getLS(key: string): string | null {
		try {
			return localStorage.getItem(key);
		} catch {
			return null;
		}
	}
	function setLS(key: string, value: string) {
		try {
			localStorage.setItem(key, value);
		} catch {
			/* incógnito */
		}
	}
	function removeLS(key: string) {
		try {
			localStorage.removeItem(key);
		} catch {
			/* incógnito */
		}
	}

	// ─── Envío ──────────────────────────────────────
	async function send() {
		const msg = input.trim();
		if (!msg || isLoading || isTyping) return;
		input = '';
		isLoading = true;
		messages = [...messages, { role: 'user', text: msg }];

		try {
			let text: string;
			if (!threadId) {
				const result = await convex.action(api.agent.conversations.createThread, { prompt: msg });
				threadId = result.threadId!;
				setLS('vanchi-thread-id', result.threadId!);
				text = result.text;
			} else {
				const result = await convex.action(api.agent.conversations.continueThread, {
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
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			send();
		}
	}

	function newConversation() {
		removeLS('vanchi-thread-id');
		threadId = null;
		messages = [];
		input = '';
		isLoading = false;
		isTyping = false;
		typingVisible = '';
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
		onclick={(e) => {
			if (e.target === e.currentTarget) onToggle();
		}}
		onkeydown={(e) => {
			if (e.key === 'Escape') onToggle();
		}}
	>
		<div
			transition:fly={{ y: 20, duration: 200 }}
			class="mx-4 w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-base-100/80 shadow-2xl backdrop-blur-2xl"
		>
			<div class="flex items-center justify-between border-b border-white/10 px-6 py-4">
				<div>
					<h2 class="font-display text-lg text-base-content">¿En qué puedo ayudarte?</h2>
					<button
						class="text-xs text-base-content/40 transition-colors hover:text-base-content/60"
						onclick={newConversation}
					>
						Nueva conversación
					</button>
				</div>
				<button
					class="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-300 hover:bg-white/5"
					onclick={() => onToggle()}
					aria-label="Cerrar"
				>
					<X size={16} class="text-base-content/60" />
				</button>
			</div>

			<div bind:this={messagesContainer} class="max-h-[55vh] space-y-4 overflow-y-auto px-6 py-4">
				{#if messages.length === 0 && !isTyping}
					<p class="text-sm leading-relaxed text-base-content/60">
						Soy el asistente de <span class="text-primary">Vanchi</span>. Pregúntame sobre
						proyectos, tecnologías o servicios.
					</p>
					<div class="space-y-2 pt-4">
						<p class="text-xs tracking-wider text-base-content/30 uppercase">Sugerencias</p>
						<button
							class="block w-full border-b border-white/5 py-2 text-left text-sm text-base-content/70 transition-all duration-300 hover:border-primary hover:text-base-content"
							onclick={() => selectSuggestion('¿Qué tipo de proyectos has hecho?')}
						>
							¿Qué tipo de proyectos has hecho?
						</button>
						<button
							class="block w-full border-b border-white/5 py-2 text-left text-sm text-base-content/70 transition-all duration-300 hover:border-primary hover:text-base-content"
							onclick={() => selectSuggestion('¿Puedes construir un CRM o sistema web?')}
						>
							¿Puedes construir un CRM o sistema web?
						</button>
						<button
							class="block w-full border-b border-white/5 py-2 text-left text-sm text-base-content/70 transition-all duration-300 hover:border-primary hover:text-base-content"
							onclick={() => selectSuggestion('¿Cuánto cuesta un proyecto con Vanchi?')}
						>
							¿Cuánto cuesta un proyecto con Vanchi?
						</button>
					</div>
				{/if}

				<!-- Mensajes ya completados -->
				{#each messages as msg, i (i)}
					<div class="space-y-1">
						{#if msg.role === 'user'}
							<p class="text-sm font-medium text-base-content">{msg.text}</p>
						{:else}
							<div class="border-l border-primary/30 pl-3">
								<p class="text-sm leading-relaxed text-base-content/80">{msg.text}</p>
							</div>
						{/if}
						{#if i < messages.length - 1}
							<div class="border-b border-white/5"></div>
						{/if}
					</div>
				{/each}

				<!-- Mensaje en typing animation -->
				{#if isTyping}
					<div class="space-y-1">
						<div class="border-l border-primary/30 pl-3">
							<span class="text-sm leading-relaxed text-base-content/80">{typingVisible}</span>
							{#if cursorPhase === 'blink'}
								<span
									class="inline-block h-[1.1em] w-0.5 animate-pulse bg-primary align-text-bottom"
								></span>
							{:else if cursorPhase === 'fadeout'}
								<span
									class="inline-block h-[1.1em] w-0.5 bg-primary align-text-bottom"
									transition:fade={{ duration: 600 }}
								></span>
							{/if}
						</div>
						<div class="border-b border-white/5"></div>
					</div>
				{/if}

				<!-- Loading initial (esperando respuesta) -->
				{#if isLoading}
					<div class="h-px w-full overflow-hidden rounded-full bg-white/10">
						<div class="h-full w-full animate-pulse rounded-full bg-primary"></div>
					</div>
				{/if}
			</div>

			<div class="border-t border-white/10 px-6 py-4">
				<textarea
					id="commandbar-input"
					bind:value={input}
					onkeydown={handleKeydown}
					placeholder="Escribe tu pregunta aquí..."
					rows="1"
					class="w-full resize-none rounded-xl border border-white/10 bg-base-200/50 px-4 py-3 text-sm text-base-content transition-all duration-300 outline-none placeholder:text-base-content/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
					disabled={isLoading || isTyping}
				></textarea>
				<p class="mt-2 text-xs text-base-content/30">
					Enter para enviar · Shift+Enter para salto de línea · Esc para cerrar
				</p>
			</div>
		</div>
	</div>
{/if}

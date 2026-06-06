<script lang="ts">
	import { useConvexClient, useQuery } from 'convex-svelte';
	import { api } from '$convex/_generated/api';
	import { X } from '@lucide/svelte';
	import { fly } from 'svelte/transition';
	import { marked } from 'marked';
	import DOMPurify from 'dompurify';
	import type { UIMessage } from '@convex-dev/agent';

	function setMarkdown(node: HTMLElement, text: string) {
		const html = marked.parse(text, { async: false }) as string;
		node.innerHTML = DOMPurify.sanitize(html);

		return {
			update(newText: string) {
				const updatedHtml = marked.parse(newText, { async: false }) as string;
				node.innerHTML = DOMPurify.sanitize(updatedHtml);
			}
		};
	}

	let { isOpen = false, onToggle = () => {} } = $props();

	const convex = useConvexClient();

	let threadId = $state<string | null>(null);
	let input = $state('');
	let isLoading = $state(false);
	let messages: { role: string; text: string }[] = $state([]);
	let messagesContainer: HTMLDivElement | undefined = $state();

	// useQuery retorna { data, isLoading, error }
	let threadMessagesQuery = $derived(
		threadId
			? useQuery(api.messages.read.listThreadMessages, {
					threadId,
					paginationOpts: { cursor: null, numItems: 50 },
					streamArgs: { kind: 'list' } // Lista los streams disponibles
				})
			: null
	);

	// ─── Efectos ────────────────────────────────────
	$effect(() => {
		const saved = getLS('vanchi-thread-id');
		if (saved) threadId = saved;
	});

	$effect(() => {
		const page = threadMessagesQuery?.data?.page;
		if (page) {
			messages = page.map((m: UIMessage) => ({
				role: m.role === 'user' ? 'user' : 'assistant',
				text: m.text || ''
			}));

			// Verificar si el último mensaje del asistente terminó de streamear
			const lastMessage = page[page.length - 1];
			if (lastMessage && lastMessage.role !== 'user' && lastMessage.status === 'success') {
				isLoading = false;
			}
		}
	});

	$effect(() => {
		if (messagesContainer && (messages.length > 0 || isLoading)) {
			setTimeout(() => {
				messagesContainer!.scrollTop = messagesContainer!.scrollHeight;
			}, 50);
		}
	});

	$effect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
				e.preventDefault();
				onToggle();
			}
			if (e.key === 'Escape' && isOpen) {
				onToggle();
			}
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
		if (!msg || isLoading) return;
		input = '';
		isLoading = true;
		messages = [...messages, { role: 'user', text: msg }];

		try {
			if (!threadId) {
				const result = await convex.action(api.agent.conversations.createThread, { prompt: msg });
				threadId = result.threadId!;
				setLS('vanchi-thread-id', result.threadId!);
			} else {
				await convex.action(api.agent.conversations.continueThread, {
					prompt: msg,
					threadId
				});
			}
			// isLoading se desactiva cuando la query detecta status === 'finished'
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
				{#if messages.length === 0}
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
				{:else}
					{#each messages as msg, i (i)}
						<div class="space-y-1">
							{#if msg.role === 'user'}
								<p class="text-sm font-medium text-base-content">{msg.text}</p>
							{:else}
								<div class="prose prose-sm max-w-none border-l border-primary/30 pl-3 prose-invert">
									<div use:setMarkdown={msg.text}></div>
								</div>
							{/if}
							{#if i < messages.length - 1}
								<div class="border-b border-white/5"></div>
							{/if}
						</div>
					{/each}
					{#if isLoading}
						<div class="h-px w-full overflow-hidden rounded-full bg-white/10">
							<div class="h-full w-full animate-pulse rounded-full bg-primary"></div>
						</div>
					{/if}
				{/if}
			</div>

			<div class="border-t border-white/10 px-6 py-4">
				<div class="relative">
					<textarea
						id="commandbar-input"
						bind:value={input}
						onkeydown={handleKeydown}
						placeholder="Escribe tu pregunta aquí..."
						rows="1"
						class="w-full resize-none rounded-xl border border-white/10 bg-base-200/50 px-4 py-3 text-sm text-base-content transition-all duration-300 outline-none placeholder:text-base-content/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
						disabled={isLoading}
					></textarea>
					{#if isLoading}
						<div
							class="absolute bottom-0 left-0 h-px w-full animate-pulse rounded-full bg-primary/50"
						></div>
					{/if}
				</div>
				<p class="mt-2 text-xs text-base-content/30">
					Enter para enviar · Shift+Enter para salto de línea · Esc para cerrar
				</p>
			</div>
		</div>
	</div>
{/if}

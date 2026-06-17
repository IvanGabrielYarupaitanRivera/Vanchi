<script lang="ts">
	import { useConvexClient } from 'convex-svelte';
	import { api } from '$convex/_generated/api';
	import { tick } from 'svelte';
	import { renderMd, setMarkdown, setHtml, getLS, setLS, removeLS } from '$lib/components/chat/chat';
	import ChatHeader from '$lib/components/chat/ChatHeader.svelte';
	import ChatInput from '$lib/components/chat/ChatInput.svelte';
	import ChatSuggestions from '$lib/components/chat/ChatSuggestions.svelte';

	const LS_KEY = 'vanchi-thread-v2-id';
	const convex = useConvexClient();

	let threadId = $state<string | null>(null);
	let input = $state('');
	let isLoading = $state(false);
	let isTyping = $state(false);
	let messages: { role: string; text: string }[] = $state([]);
	let typingHtml = $state('');
	let cursorPhase = $state<'blink' | 'fadeout' | 'hidden'>('hidden');
	let rafId: number | null = $state(null);
	let messagesContainer: HTMLDivElement | undefined = $state();

	$effect(() => {
		const saved = getLS(LS_KEY);
		if (saved) threadId = saved;
	});

	function scrollToBottom() {
		if (!messagesContainer) return;
		messagesContainer.scrollTo({ top: messagesContainer.scrollHeight, behavior: 'smooth' });
	}

	$effect(() => {
		if (isTyping && typingHtml && messagesContainer) {
			scrollToBottom();
		}
	});

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
			typingHtml = renderMd(text.slice(0, reveal));

			if (reveal < text.length) {
				rafId = requestAnimationFrame(step);
			} else {
				typingHtml = renderMd(text);
				cursorPhase = 'fadeout';
				setTimeout(() => {
					cursorPhase = 'hidden';
					isTyping = false;
					messages = [...messages, { role: 'assistant', text }];
					typingHtml = '';
				}, 300);
			}
		}

		rafId = requestAnimationFrame(step);
	}

	async function send() {
		const msg = input.trim();
		if (!msg || isLoading || isTyping) return;
		input = '';
		messages = [...messages, { role: 'user', text: msg }];
		isLoading = true;
		await tick();

		scrollToBottom();

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

<div class="mx-auto flex h-full w-full max-w-5xl flex-col">
	<ChatHeader onNewConversation={newConversation} />

	{#if messages.length === 0 && !isTyping}
		<!-- Zero state: contenido + input centrados verticalmente -->
		<div class="flex min-h-0 flex-1 flex-col items-center justify-center overflow-y-auto px-6">
			<div class="flex w-full max-w-lg flex-col items-center justify-center gap-6 py-8">
				<ChatSuggestions onSelect={selectSuggestion} />
				<ChatInput bind:input={input} disabled={isLoading || isTyping} onSend={send} onKeydown={handleKeydown} zeroState={true} />
			</div>
		</div>
		<div class="px-4 pb-3 sm:px-6 sm:pb-4">
			<p class="text-center text-xs text-base-content/20">
				Este asistente puede tener errores. Verifica la información importante con Ivan directamente.
			</p>
		</div>
	{:else}
		<div bind:this={messagesContainer} class="min-h-0 flex-1 overflow-y-auto scroll-smooth px-6 py-4">
			<div class="space-y-4">
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

		<ChatInput bind:input={input} disabled={isLoading || isTyping} onSend={send} onKeydown={handleKeydown} />
	{/if}
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

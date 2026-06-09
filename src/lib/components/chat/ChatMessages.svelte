<script lang="ts">
	import { setMarkdown, setHtml } from './chat';

	interface Props {
		messages: { role: string; text: string }[];
		isTyping: boolean;
		typingHtml: string;
		cursorPhase: string;
		isLoading: boolean;
	}

	let { messages, isTyping, typingHtml, cursorPhase, isLoading }: Props = $props();
</script>

<div class="min-h-0 flex-1 space-y-4 overflow-y-auto scroll-smooth px-6 py-4">
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
					<span class="inline-block h-[1.1em] w-0.5 animate-pulse bg-primary align-text-bottom"
					></span>
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
		0%,
		80%,
		100% {
			opacity: 0.2;
			transform: scale(0.6);
		}
		40% {
			opacity: 1;
			transform: scale(1);
		}
	}
</style>

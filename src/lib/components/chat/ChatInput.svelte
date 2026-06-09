<script lang="ts">
	import { ArrowUp } from '@lucide/svelte';
	import { autoResize } from './chat';

	interface Props {
		input: string;
		disabled?: boolean;
		onSend: () => void;
		onKeydown: (e: KeyboardEvent) => void;
	}

	let {
		input = $bindable(''),
		disabled = false,
		onSend = () => {},
		onKeydown = () => {}
	}: Props = $props();
</script>

<div class="shrink-0 border-t border-white/10 px-4 py-3 sm:px-6 sm:py-4">
	<div class="relative flex items-end">
		<textarea
			use:autoResize
			id="chat-input"
			bind:value={input}
			onkeydown={onKeydown}
			placeholder="Escribe tu pregunta aquí..."
			rows="1"
			class="textarea w-full pr-12"
			{disabled}
		></textarea>
		{#if input.trim().length > 0}
			<button
				class="btn btn-primary btn-square btn-sm absolute right-2 bottom-2"
				onclick={onSend}
				{disabled}
				aria-label="Enviar"
			>
				<ArrowUp size={16} />
			</button>
		{/if}
	</div>
	<p class="mt-1.5 text-xs text-base-content/30 max-sm:hidden">
		Enter para enviar · Shift+Enter para salto de línea
	</p>
</div>

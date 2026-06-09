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

<div class="shrink-0 border-t border-white/10 px-6 py-4">
	<div class="flex items-end gap-2">
		<textarea
			use:autoResize
			id="chat-input"
			bind:value={input}
			onkeydown={onKeydown}
			placeholder="Escribe tu pregunta aquí..."
			rows="1"
			class="textarea w-full"
			{disabled}
		></textarea>
		{#if input.trim().length > 0}
			<button
				class="btn btn-primary btn-square"
				onclick={onSend}
				{disabled}
				aria-label="Enviar"
			>
				<ArrowUp size={18} />
			</button>
		{/if}
	</div>
	<p class="mt-2 text-xs text-base-content/30">
		Enter para enviar · Shift+Enter para salto de línea
	</p>
</div>

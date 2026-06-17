<script lang="ts">
	import { ArrowUp } from '@lucide/svelte';
	import { autoResize } from './chat';

	interface Props {
		input: string;
		disabled?: boolean;
		onSend: () => void;
		onKeydown: (e: KeyboardEvent) => void;
		zeroState?: boolean;
	}

	let {
		input = $bindable(''),
		disabled = false,
		onSend = () => {},
		onKeydown = () => {},
		zeroState = false
	}: Props = $props();
</script>

<div class="{zeroState ? '' : 'shrink-0 border-t border-white/10'} w-full px-4 py-3 sm:px-6 sm:py-4" style="touch-action: none;">
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
				class="btn absolute right-2 bottom-2 btn-square btn-sm btn-primary"
				onclick={onSend}
				{disabled}
				aria-label="Enviar"
			>
				<ArrowUp size={16} />
			</button>
		{/if}
	</div>
	<div class="mt-2 flex items-center justify-end gap-2">
		<p class="text-xs text-base-content/25 max-sm:hidden">
			Enter para enviar · Shift+Enter para salto de línea
		</p>
	</div>
</div>

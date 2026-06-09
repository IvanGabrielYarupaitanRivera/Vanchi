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
			class="min-h-11 w-full resize-none rounded-xl border border-white/10 bg-base-200/50 px-4 py-3 text-sm text-base-content transition-all duration-300 outline-none placeholder:text-base-content/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
			{disabled}
		></textarea>
		{#if input.trim().length > 0}
			<button
				class="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-primary text-base-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/80 disabled:opacity-30"
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

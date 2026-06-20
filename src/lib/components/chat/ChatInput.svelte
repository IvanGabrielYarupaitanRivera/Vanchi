<script lang="ts">
	import { ArrowUp } from '@lucide/svelte';
	import { browser } from '$app/environment';
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

	let isMobile = $state(false);

	$effect(() => {
		if (!browser) return;
		const mediaQuery = window.matchMedia('(pointer: coarse)');
		isMobile = mediaQuery.matches || 'ontouchstart' in window;
		const handleChange = (e: MediaQueryListEvent) => {
			isMobile = e.matches || 'ontouchstart' in window;
		};
		mediaQuery.addEventListener('change', handleChange);
		return () => mediaQuery.removeEventListener('change', handleChange);
	});
</script>

<div
	class="{zeroState ? '' : 'shrink-0 border-t border-base-300'} w-full px-4 py-3 sm:px-6 sm:py-4"
>
	<div class="relative flex items-end">
		<textarea
			use:autoResize
			id="chat-input"
			bind:value={input}
			onkeydown={onKeydown}
			placeholder="Preguntale lo que quieras al agente..."
			rows="1"
			class="textarea w-full pr-12"
			{disabled}
		></textarea>
		{#if input.trim().length > 0}
			<button
				class="btn absolute right-2 bottom-2 h-8 min-h-0 w-8 border border-base-content bg-base-content p-0 font-mono text-xs text-base-100 duration-100 hover:bg-base-content/90"
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
			{isMobile ? 'Toque el boton para enviar' : 'Enter para enviar · Shift+Enter para salto de linea'}
		</p>
	</div>
</div>

<script lang="ts">
	import { ArrowLeft, RotateCcw } from '@lucide/svelte';
	import { resolve } from '$app/paths';

	interface Props {
		title?: string;
		subtitle?: string;
		onNewConversation?: () => void;
	}

	let {
		title = 'Habla con el agente',
		subtitle = 'Sin demo armada. Sin formulario. Solo el agente que construye sistemas.',
		onNewConversation = () => {}
	}: Props = $props();
</script>

<div class="flex shrink-0 items-start justify-between gap-2 border-b border-base-300 px-4 py-3 sm:items-center sm:gap-3 sm:px-6 sm:py-4">
	<div class="flex min-w-0 items-center gap-2 sm:gap-3">
		<a
			href={resolve('/')}
			class="btn btn-ghost btn-sm gap-1 border border-base-300 px-2 font-mono text-xs text-base-content/50 duration-100 hover:text-base-content sm:px-3"
			aria-label="Volver al inicio"
		>
			<ArrowLeft size={16} />
			<span class="hidden sm:inline">Vanchi</span>
		</a>

		<div class="h-5 w-px shrink-0 bg-base-300" role="separator"></div>

		<div class="min-w-0">
			<h1 class="font-mono text-sm font-bold text-base-content truncate">{title}</h1>
			<p class="mt-0.5 truncate font-mono text-xs text-base-content/40">{subtitle}</p>
		</div>
	</div>

	<button
		class="btn btn-ghost min-h-0 h-8 w-8 border border-base-300 p-0 duration-100 hover:bg-base-300"
		onclick={onNewConversation}
		title="Nueva conversación"
	>
		<RotateCcw size={14} />
	</button>
</div>

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

<div
	class="flex shrink-0 items-start justify-between gap-2 border-b border-white/10 px-4 py-3 sm:items-center sm:gap-3 sm:px-6 sm:py-4"
>
	<div class="flex min-w-0 items-center gap-2 sm:gap-3">
		<!-- Back to home -->
		<a
			href={resolve('/')}
			class="btn btn-ghost btn-sm gap-1 rounded-full px-2 text-base-content/50 hover:text-base-content sm:px-3"
			aria-label="Volver al inicio"
		>
			<ArrowLeft size={18} />
			<span class="hidden text-xs font-medium sm:inline">Vanchi</span>
		</a>

		<!-- Separator -->
		<div class="h-5 w-px shrink-0 bg-white/10" role="separator"></div>

		<!-- Title + subtitle -->
		<div class="min-w-0">
			<h1 class="truncate font-display text-lg text-base-content sm:text-xl">{title}</h1>
			<p class="mt-0.5 truncate text-xs text-base-content/40 sm:text-sm">{subtitle}</p>
		</div>
	</div>

	<!-- New conversation -->
	<button
		class="btn btn-circle btn-sm shrink-0 btn-primary"
		onclick={onNewConversation}
		title="Nueva conversación"
	>
		<RotateCcw size={16} />
	</button>
</div>

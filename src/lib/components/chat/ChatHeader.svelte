<script lang="ts">
	interface Props {
		title?: string;
		subtitle?: string;
		onNewConversation?: () => void;
	}

	let { title = 'Asistente Vanchi', subtitle = 'Pregúntame sobre proyectos, tecnologías o servicios', onNewConversation = () => {} }: Props = $props();
</script>

<div class="flex shrink-0 items-start justify-between gap-3 border-b border-white/10 px-4 py-3 sm:items-center sm:px-6 sm:py-4">
	<div class="min-w-0">
		<h1 class="font-display text-lg text-base-content sm:text-xl">{title}</h1>
		<p class="mt-0.5 truncate text-xs text-base-content/40 sm:text-sm">{subtitle}</p>
	</div>
	<button
		class="btn btn-outline btn-primary btn-sm shrink-0"
		onclick={onNewConversation}
	>
		Nueva
	</button>
</div>

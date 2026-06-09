<script lang="ts">
	interface Props {
		title?: string;
		subtitle?: string;
		onNewConversation?: () => void;
	}

	let { title = 'Asistente Vanchi', subtitle = 'Pregúntame sobre proyectos, tecnologías o servicios', onNewConversation = () => {} }: Props = $props();
</script>

<div class="flex shrink-0 items-center justify-between px-6 py-4">
	<div>
		<h1 class="font-display text-xl text-base-content">{title}</h1>
		<p class="text-sm text-base-content/40">{subtitle}</p>
	</div>
	<button
		class="btn btn-ghost btn-xs"
		onclick={onNewConversation}
	>
		Nueva conversación
	</button>
</div>

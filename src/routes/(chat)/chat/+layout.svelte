<script lang="ts">
	let { children } = $props();

	// Bloquea scroll del html/body para que el unico scroll
	// sea el contenedor de mensajes
	$effect(() => {
		const html = document.documentElement;
		const body = document.body;
		const origHtmlOverflow = html.style.overflow;
		const origBodyOverflow = body.style.overflow;

		html.style.overflow = 'hidden';
		body.style.overflow = 'hidden';

		return () => {
			html.style.overflow = origHtmlOverflow;
			body.style.overflow = origBodyOverflow;
		};
	});
</script>

<div id="chat-root" class="fixed inset-x-0 top-0 h-dvh overflow-hidden bg-base-100">
	{@render children()}
</div>

<script lang="ts">
	let { children } = $props();

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

	// visualViewport API: corrige Brave cuando no respeta dvh
	// Solo se activa en resize/scroll del viewport (teclado abre/cierra)
	$effect(() => {
		const chat = document.getElementById('chat-root');
		const vv = window.visualViewport;
		if (!chat || !vv) return;

		vv.addEventListener('resize', syncHeight);
		vv.addEventListener('scroll', syncHeight);

		return () => {
			vv.removeEventListener('resize', syncHeight);
			vv.removeEventListener('scroll', syncHeight);
		};

		function syncHeight() {
			chat!.style.height = `${vv!.height}px`;
		}
	});
</script>

<div id="chat-root" class="fixed inset-x-0 top-0 h-[100dvh] bg-base-100">
	{@render children()}
</div>

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
	// + evita panning fantasma forzando scroll a (0,0)
	$effect(() => {
		const chat = document.getElementById('chat-root');
		const vv = window.visualViewport;
		if (!chat || !vv) return;

		function syncHeight() {
			chat!.style.height = `${vv!.height}px`;
			window.scrollTo(0, 0);
		}

		vv.addEventListener('resize', syncHeight);
		vv.addEventListener('scroll', syncHeight);

		return () => {
			vv.removeEventListener('resize', syncHeight);
			vv.removeEventListener('scroll', syncHeight);
		};
	});
</script>

<div id="chat-root" class="fixed inset-x-0 top-0 h-dvh overflow-hidden bg-base-100">
	{@render children()}
</div>

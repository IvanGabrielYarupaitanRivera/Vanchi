<script lang="ts">
	import './layout.css';
	import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import { setupConvex } from 'convex-svelte';

	let { children } = $props();

	setupConvex(PUBLIC_CONVEX_URL);
</script>

<svelte:head>
	<!-- Verification Bing Webmaster -->
	<meta name="msvalidate.01" content="212B24E9157CE54B8F464CB7B221FC64" />
</svelte:head>

{@render children()}

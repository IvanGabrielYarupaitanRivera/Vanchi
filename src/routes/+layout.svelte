<script lang="ts">
	import './layout.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import { setupConvex } from 'convex-svelte';

	let { children } = $props();

	setupConvex(PUBLIC_CONVEX_URL);
</script>

<div class="flex min-h-screen flex-col">
	<Header />

	<main class="mx-auto w-full max-w-450 flex-1">
		{@render children()}
	</main>

	<Footer />
</div>

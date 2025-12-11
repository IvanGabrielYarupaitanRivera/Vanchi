<script lang="ts">
	import './layout.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SEO from '$lib/components/SEO.svelte';

	let { children } = $props();
</script>

<SEO />

<div class="flex min-h-screen flex-col">
	<Header />

	<main class="mx-auto w-full max-w-450 flex-1">
		{@render children()}
	</main>

	<Footer />
</div>

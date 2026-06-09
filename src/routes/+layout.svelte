<script lang="ts">
	import './layout.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CommandBar from '$lib/components/home/CommandBar.svelte';
	import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import { setupConvex } from 'convex-svelte';
	import { page } from '$app/stores';

	let { children } = $props();

	setupConvex(PUBLIC_CONVEX_URL);

	let isAssistantOpen = $state(false);

	function toggleAssistant() {
		isAssistantOpen = !isAssistantOpen;
	}

	// Ocultar footer en la ruta /chat (como el Hero que ignora el layout)
	let isChatRoute = $derived($page.url.pathname === '/chat');
</script>

<CommandBar isOpen={isAssistantOpen} onToggle={toggleAssistant} />

<div class="flex min-h-screen flex-col">
	{#if !isChatRoute}
		<Header onOpenAssistant={toggleAssistant} />
	{/if}

	<main class="mx-auto w-full max-w-450 flex-1">
		{@render children()}
	</main>

	{#if !isChatRoute}
		<Footer />
	{/if}
</div>

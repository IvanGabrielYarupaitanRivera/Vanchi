<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CommandBar from '$lib/components/home/CommandBar.svelte';

	let { children } = $props();

	let isAssistantOpen = $state(false);

	function toggleAssistant() {
		isAssistantOpen = !isAssistantOpen;
	}
</script>

<CommandBar isOpen={isAssistantOpen} onToggle={toggleAssistant} />

<div class="flex min-h-dvh flex-col">
	<Header />

	<main class="mx-auto w-full max-w-450 flex-1">
		{@render children()}
	</main>

	<Footer />
</div>

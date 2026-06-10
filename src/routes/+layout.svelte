<script lang="ts">
	import './layout.css';
	import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import { setupConvex } from 'convex-svelte';

	let { children } = $props();

	setupConvex(PUBLIC_CONVEX_URL);
</script>

{@render children()}

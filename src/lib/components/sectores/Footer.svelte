<script lang="ts">
	import type { Snippet } from 'svelte';

	let { author, children }: { author: string; children: Snippet } = $props();
</script>

<footer class="w-full py-16 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
			{@render children()}
		</div>
		<p class="mt-8 font-mono text-xs text-secondary">{author}</p>
	</div>
</footer>

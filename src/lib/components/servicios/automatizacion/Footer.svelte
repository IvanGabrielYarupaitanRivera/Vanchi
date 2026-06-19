<script lang="ts">
	import type { Snippet } from 'svelte';
	import { resolve } from '$app/paths';

	let { author, children }: { author: string; children: Snippet } = $props();
</script>

<footer class="w-full py-16 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="border border-base-300 bg-base-200 p-8 lg:p-10">
			<span class="mb-2 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">¿Tu proceso está listo?</span>
			<p class="font-mono text-sm leading-relaxed text-base-content/70 max-w-xl mb-6">
				Contame qué proceso querés automatizar. En una semana tenés el primer flujo funcionando.
			</p>
			<a
				href={resolve('/(main)/contacto')}
				class="btn min-h-0 h-10 border border-base-content bg-base-content px-5 font-mono text-xs font-bold uppercase tracking-wider text-base-100 duration-100 hover:bg-base-content/90"
			>
				Empezar →
			</a>
		</div>
		<div class="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
			{@render children()}
		</div>
		<p class="mt-8 font-mono text-xs text-secondary">{author}</p>
	</div>
</footer>

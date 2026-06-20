<script lang="ts">
	import type { CaseStudy } from '$lib/types/project';
	import { Globe, Youtube, Github } from '@lucide/svelte';

	let { assets }: { assets: CaseStudy['assets'] } = $props();
</script>

<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">08 // RECURSOS</span>
		</div>

		<div class="flex flex-wrap gap-3">
			{#if assets.liveUrl}
				<a
					href={assets.liveUrl}
					target="_blank"
					rel="external noopener noreferrer"
					class="btn min-h-0 h-10 border border-base-content bg-base-content px-4 font-mono text-xs font-bold uppercase tracking-wider text-base-100 duration-100 hover:bg-base-content/90"
				>
					<Globe class="h-3.5 w-3.5" />
					Sitio web
				</a>
			{/if}
			{#if assets.videoYoutube}
				<a
					href={assets.videoYoutube}
					target="_blank"
					rel="external noopener noreferrer"
					class="btn btn-ghost min-h-0 h-10 border border-base-300 px-4 font-mono text-xs font-bold uppercase tracking-wider text-base-content/80 duration-100 hover:bg-base-300 hover:text-base-content"
				>
					<Youtube class="h-3.5 w-3.5" />
					Video
				</a>
			{/if}
			{#if assets.repoUrl}
				<a
					href={assets.repoUrl}
					target="_blank"
					rel="external noopener noreferrer"
					class="btn btn-ghost min-h-0 h-10 border border-base-300 px-4 font-mono text-xs font-bold uppercase tracking-wider text-base-content/80 duration-100 hover:bg-base-300 hover:text-base-content"
				>
					<Github class="h-3.5 w-3.5" />
					Código
				</a>
			{/if}
		</div>
	</div>
</section>

<script lang="ts">
	import type { CaseStudy } from '$lib/types/project';

	let { ui }: { ui: CaseStudy['ui'] } = $props();
</script>

<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">05 // INTERFAZ</span>
		</div>

		<p class="font-mono text-sm leading-relaxed text-base-content/70 max-w-2xl mb-10">{ui.description}</p>

		<div class="grid grid-cols-1 gap-px lg:grid-cols-2">
			{#each ui.gallery as img (img.src)}
				<div class="border border-base-300 bg-base-200 overflow-hidden">
					<enhanced:img src={img.src} alt={img.alt} class="w-full object-cover" />
					<p class="font-mono text-xs text-base-content/50 p-4">{img.caption}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

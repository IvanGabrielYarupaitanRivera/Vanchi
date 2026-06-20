<script lang="ts">
	import type { CaseStudy } from '$lib/types/project';

	let { tech }: { tech: CaseStudy['tech'] } = $props();
</script>

<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">06 // TECNOLOGÍAS</span>
		</div>

		<div class="border border-base-300 bg-base-200 p-8 lg:p-10 mb-px">
			<p class="font-mono text-sm leading-relaxed text-base-content/70">{tech.stackDetails}</p>
		</div>

		<div class="flex flex-wrap gap-2">
			{#each tech.logos as Logo, i (tech.logosNombres[i])}
				<div class="border border-base-300 bg-base-200 flex items-center gap-2 p-3">
					<Logo size={16} />
					<span class="font-mono text-xs text-base-content/80">{tech.logosNombres[i]}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

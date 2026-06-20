<script lang="ts">
	import type { CaseStudy } from '$lib/types/project';

	let { solution }: { solution: CaseStudy['solution'] } = $props();
</script>

<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">04 // SOLUCIÓN</span>
		</div>

		<div class="border border-base-300 bg-base-200 p-8 lg:p-10 mb-px">
			<h3 class="font-mono text-sm font-medium text-base-content mb-4">Concepto</h3>
			<p class="font-mono text-sm leading-relaxed text-base-content/70">{solution.concept}</p>
		</div>

		<div class="border border-base-300 bg-base-200 p-8 lg:p-10">
			<h3 class="font-mono text-sm font-medium text-base-content mb-4">Decisiones técnicas</h3>
			<ul class="space-y-2">
				{#each solution.decisions as d, i (i)}
					<li class="flex items-start gap-3 font-mono text-sm text-base-content/60">
						<span class="shrink-0 text-base-content/30">{String(i + 1).padStart(2, '0')}</span>
						<span>{d}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

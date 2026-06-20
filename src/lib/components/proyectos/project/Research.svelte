<script lang="ts">
	import type { CaseStudy } from '$lib/types/project';

	let { research }: { research: CaseStudy['research'] } = $props();
</script>

<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">03 // INVESTIGACIÓN</span>
		</div>

		<div class="space-y-px">
			<div class="border border-base-300 bg-base-200 p-8 lg:p-10">
				<h3 class="font-mono text-sm font-medium text-base-content mb-4">Métodos</h3>
				<ul class="space-y-2">
					{#each research.methods as m, i (i)}
						<li class="flex items-start gap-3 font-mono text-sm text-base-content/60">
							<span class="shrink-0 text-base-content/30">{String(i + 1).padStart(2, '0')}</span>
							<span>{m}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="grid grid-cols-1 gap-px lg:grid-cols-2">
				{#each research.findings as f, i (i)}
					<div class="border border-base-300 bg-base-200 p-6 lg:p-8">
						<span class="block font-mono text-xs tracking-[0.15em] text-secondary mb-3 uppercase">{f.title}</span>
						<p class="font-mono text-sm leading-relaxed text-base-content/60">{f.desc}</p>
					</div>
				{/each}
			</div>

			<div class="border border-base-300 bg-base-200 p-8 lg:p-10">
				<h3 class="font-mono text-sm font-medium text-base-content mb-4">Conclusiones</h3>
				<p class="font-mono text-sm leading-relaxed text-base-content/70">{research.insight}</p>
			</div>
		</div>
	</div>
</section>

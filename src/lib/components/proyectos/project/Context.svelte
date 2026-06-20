<script lang="ts">
	import type { CaseStudy } from '$lib/types/project';

	let { context }: { context: CaseStudy['context'] } = $props();
</script>

<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">01 // CONTEXTO</span>
		</div>

		<div class="border border-base-300 bg-base-200 p-8 lg:p-10 mb-px">
			<div class="flex items-start gap-6 mb-6">
				<div class="h-16 w-16 shrink-0 border border-base-300 bg-base-100 p-3">
					<enhanced:img src={context.logo} alt={context.client} class="h-full w-full object-contain" />
				</div>
				<div>
					<span class="block font-mono text-xs tracking-[0.15em] text-secondary mb-1 uppercase">Cliente</span>
					<h2 class="vanchi-display text-3xl font-normal">{context.client}</h2>
				</div>
			</div>

			<h3 class="font-mono text-sm font-medium text-base-content mb-3">Problema</h3>
			<p class="font-mono text-sm leading-relaxed text-base-content/70 mb-6">{context.problem}</p>

			<h3 class="font-mono text-sm font-medium text-base-content mb-3">Restricciones</h3>
			<ul class="space-y-2">
				{#each context.constraints as c, i (i)}
					<li class="flex items-start gap-3 font-mono text-sm text-base-content/60">
						<span class="shrink-0 text-base-content/30">{String(i + 1).padStart(2, '0')}</span>
						<span>{c}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

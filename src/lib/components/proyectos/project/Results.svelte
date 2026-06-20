<script lang="ts">
	import type { CaseStudy } from '$lib/types/project';

	let { results }: { results: CaseStudy['results'] } = $props();
</script>

<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">07 // RESULTADOS</span>
		</div>

		<div class="grid grid-cols-1 gap-px lg:grid-cols-2">
			{#each results.metrics as m (m.label)}
				<div class="border border-base-300 bg-base-200 p-8 lg:p-10">
					<span class="block font-mono text-3xl text-base-content mb-2">{m.value}</span>
					<span class="font-mono text-xs text-secondary uppercase tracking-[0.12em]">{m.label}</span>
				</div>
			{/each}

			<div class="border border-base-300 bg-base-200 p-8 lg:p-10 lg:col-span-2">
				<h3 class="font-mono text-sm font-medium text-base-content mb-4">Feedback</h3>
				<p class="font-mono text-sm leading-relaxed text-base-content/70">{results.feedback}</p>
			</div>
		</div>
	</div>
</section>

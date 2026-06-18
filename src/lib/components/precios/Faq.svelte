<script lang="ts">
	interface FaqItem {
		question: string;
		answer: string;
	}

	let { items }: { items: readonly FaqItem[] } = $props();
</script>

<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<p class="vanchi-eyebrow mb-16">03 // FAQ</p>

		<div class="flex items-center gap-2.5 mb-8 -mt-12">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent">Active</span>
		</div>
		<h2 class="vanchi-display mb-16 text-3xl font-normal lg:text-5xl">
			Preguntas<br /><span class="italic">frecuentes</span>
		</h2>

		<div class="space-y-px">
			{#each items as item (item.question)}
				<div class="collapse collapse-arrow bg-base-200 border border-base-300">
					<input type="checkbox" />
					<div class="collapse-title font-mono text-sm font-medium text-base-content">{item.question}</div>
					<div class="collapse-content">
						<p class="font-mono text-sm leading-relaxed text-base-content/70">{item.answer}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

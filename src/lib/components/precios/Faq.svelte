<script lang="ts">
	interface FaqItem {
		question: string;
		answer: string;
	}

	let { items }: { items: readonly FaqItem[] } = $props();
</script>

<section class="w-full border-t vanchi-hairline py-40">
	<div class="mx-auto max-w-5xl px-4">
		<p class="mb-16 vanchi-eyebrow">03 // FAQ</p>

		<h2 class="mb-16 vanchi-display text-3xl font-normal lg:text-5xl">
			Preguntas<br /><span class="italic">frecuentes</span>
		</h2>

		<div class="space-y-px">
			{#each items as item (item.question)}
				<div class="collapse-arrow collapse border border-base-300 bg-base-200">
					<input type="checkbox" />
					<div class="collapse-title font-mono text-sm font-medium text-base-content">
						{item.question}
					</div>
					<div class="collapse-content">
						<p class="font-mono text-sm leading-relaxed text-base-content/70">{item.answer}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

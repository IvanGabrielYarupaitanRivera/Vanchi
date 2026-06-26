<script lang="ts">
	import Dropdown from '$lib/components/ui/Dropdown/Dropdown.svelte';

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

		<Dropdown
			items={items.map((item) => ({ title: item.question, content: item.answer }))}
		/>
	</div>
</section>

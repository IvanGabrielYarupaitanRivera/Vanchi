<script lang="ts">
	import SecurityBlock from './SecurityBlock.svelte';
	import ComparisonSection from './ComparisonSection.svelte';
	import FaqSection from './FaqSection.svelte';
</script>

<section class="relative z-10 w-full py-24">
	<div class="mx-auto w-full max-w-6xl px-4">
		<div class="mb-14">
			<span class="mb-2 block text-sm font-bold tracking-widest text-primary uppercase"
				>Confianza para decidir</span
			>
			<h2 class="text-4xl font-bold text-base-content lg:text-5xl">
				Tecnología clara, segura<br class="hidden lg:block" /> y pensada para abogados.
			</h2>
		</div>

		<div class="space-y-8">
			<SecurityBlock />
			<ComparisonSection />
			<FaqSection />
		</div>
	</div>
</section>

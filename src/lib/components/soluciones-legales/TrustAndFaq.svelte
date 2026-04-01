<script lang="ts">
	import SecurityBlock from './SecurityBlock.svelte';
	import ComparisonSection from './ComparisonSection.svelte';
	import FaqSection from './FaqSection.svelte';
</script>

<section class="relative z-10 w-full py-24">
	<div class="mx-auto w-full max-w-6xl px-4">
		<div class="mb-14 lg:w-2/3">
			<span class="mb-2 block text-sm font-bold tracking-widest text-primary uppercase"
				>Confianza para decidir</span
			>
			<h2 class="mb-6 text-4xl leading-tight font-bold lg:text-5xl">
				Tecnología clara, segura <br />
				<span class="font-serif text-base-content/50 italic">y pensada para abogados.</span>
			</h2>
			<p class="text-base leading-loose text-base-content/70">
				Cada herramienta que construimos tiene un propósito concreto: que tu estudio funcione mejor,
				crezca más rápido y genere más confianza en tus clientes.
			</p>
		</div>

		<div class="space-y-8">
			<SecurityBlock />
			<ComparisonSection />
			<FaqSection />
		</div>
	</div>
</section>

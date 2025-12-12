<script lang="ts">
	import { fly } from 'svelte/transition';
	import Marquee from './Marquee.svelte';
</script>

<section class="w-full py-20 lg:py-32">
	<div class="container mx-auto px-4">
		<!-- Header de Sección -->
		<div class="mb-8 text-center">
			<h2 in:fly={{ y: 20, duration: 800, delay: 200 }} class="mb-4 text-3xl font-bold lg:text-5xl">
				<span class=" ">Confianza.</span> Modernidad.
				<span
					class="bg-linear-to-r from-primary via-primary to-primary bg-clip-text font-serif text-transparent italic"
				>
					Resultados.
				</span>
			</h2>
			<p
				in:fly={{ y: 20, duration: 800, delay: 400 }}
				class="mx-auto max-w-2xl text-base text-base-content/60 lg:text-lg"
			>
				Instituciones que confiaron en nosotros y nuestras soluciones modernas.
			</p>
		</div>

		<!-- Marquee -->
		<Marquee />
	</div>
</section>

<script lang="ts">
	import { fly } from 'svelte/transition';
	import peraltaAsociadosLogo from '$lib/assets/icons/logos/peralta-asociados.svg';
	import goreJuninLogo from '$lib/assets/icons/logos/gore-junin.svg';
	import colegioEducereLogo from '$lib/assets/icons/logos/colegio-educere.svg';
	import universidadRooseveltLogo from '$lib/assets/icons/logos/universidad-roosevelt.svg';

	// Datos de Clientes
	const clients = [
		{ name: 'Peralta Asociados', id: 1, logo: peraltaAsociadosLogo },
		{ name: 'GORE Junín', id: 2, logo: goreJuninLogo },
		{ name: 'Colegio Educere', id: 3, logo: colegioEducereLogo },
		{ name: 'Universidad Roosevelt', id: 4, logo: universidadRooseveltLogo }
	];
</script>

<section class="w-full py-20 lg:py-32">
	<div class="container mx-auto px-4">
		<!-- Header de Sección -->
		<div class="mb-16 text-center">
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
				Colaborando con instituciones líderes para definir el futuro de sus productos digitales.
			</p>
		</div>
		<!-- Marquee Container -->
		<!-- mask-image crea el desvanecimiento en los bordes izquierdo y derecho -->
		<div
			in:fly={{ y: 20, duration: 800, delay: 600 }}
			class="group relative flex w-full overflow-hidden mask-r-from-60% mask-l-from-60%"
		>
			<!-- Bloque 1 -->
			<div class="animate-marquee flex min-w-full shrink-0 items-center justify-around">
				{#each clients as client}
					<div
						class="flex h-24 items-center justify-center opacity-60 transition-opacity duration-300 hover:opacity-100"
					>
						<!-- 2. Reemplazo del SVG por IMG con estilos Vanchi -->
						<img
							src={client.logo}
							alt={client.name}
							class="h-8 w-auto object-contain grayscale transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:grayscale-0 lg:h-12"
							draggable="false"
							loading="lazy"
						/>
					</div>
				{/each}
			</div>

			<!-- Bloque 2 (Duplicado para loop infinito) -->
			<div
				class="animate-marquee flex min-w-full shrink-0 items-center justify-around"
				aria-hidden="true"
			>
				{#each clients as client}
					<div
						class="flex h-24 items-center justify-center opacity-60 transition-opacity duration-300 hover:opacity-100"
					>
						<img
							src={client.logo}
							alt={client.name}
							class="h-8 w-auto object-contain grayscale transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:grayscale-0 lg:h-12"
							draggable="false"
							loading="lazy"
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}
	.animate-marquee {
		animation: marquee 30s linear infinite;
	}
	/* Pausar animación al hacer hover para mejorar UX */
	.group:hover .animate-marquee {
		animation-play-state: paused;
	}
</style>

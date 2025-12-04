<script lang="ts">
	import { fly } from 'svelte/transition';
	import peraltaAsociadosLogo from '$lib/assets/icons/logos/peralta-asociados.svg';
	import goreJuninLogo from '$lib/assets/icons/logos/gore-junin.svg';
	import colegioEducereLogo from '$lib/assets/icons/logos/colegio-educere.svg';
	import universidadRooseveltLogo from '$lib/assets/icons/logos/universidad-roosevelt.svg';
	import diapisLogo from '$lib/assets/icons/logos/diapis.svg';

	// Datos de Clientes enriquecidos con Categoría para el estilo "Asset Card"
	const clients = [
		{
			name: 'Peralta Asociados',
			id: 1,
			logo: peraltaAsociadosLogo,
			category: 'Legal Tech'
		},
		{
			name: 'GORE Junín',
			id: 2,
			logo: goreJuninLogo,
			category: 'Government'
		},
		{
			name: 'Colegio Educere',
			id: 3,
			logo: colegioEducereLogo,
			category: 'EdTech'
		},
		{
			name: 'Univ. Roosevelt',
			id: 4,
			logo: universidadRooseveltLogo,
			category: 'Higher Ed'
		},
		{
			name: 'Diapis',
			id: 5,
			logo: diapisLogo,
			category: 'EdTech'
		}
	];
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
				Arquitectura digital desplegada en instituciones de alto impacto.
			</p>
		</div>

		<!-- Marquee Container -->
		<div
			in:fly={{ y: 20, duration: 800, delay: 600 }}
			class="group relative flex w-full overflow-hidden mask-r-from-80% mask-l-from-80% py-8"
		>
			<!-- Bloque 1 -->
			<div class="animate-marquee flex min-w-full shrink-0 items-center gap-8 px-4">
				{#each clients as client}
					<!-- Card: Holographic Asset Style -->
					<div
						class="group/card relative flex h-24 w-72 shrink-0 items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/5 px-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:border-primary/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
					>
						<!-- Logo Container: Centrado perfecto -->
						<div class="relative flex h-10 w-24 items-center justify-center">
							<img
								src={client.logo}
								alt={client.name}
								class="max-h-full max-w-full object-contain opacity-50 grayscale transition-all duration-500 group-hover/card:scale-110 group-hover/card:opacity-100 group-hover/card:grayscale-0"
								draggable="false"
								loading="lazy"
							/>
						</div>

						<!-- Vertical Separator: Gradiente sutil -->
						<div
							class="h-12 w-px bg-linear-to-b from-transparent via-white/10 to-transparent transition-all duration-300 group-hover/card:via-primary/40"
						></div>

						<!-- Category Tag -->
						<div class="flex flex-1 flex-col items-end justify-center gap-0.5">
							<span
								class="text-xs font-bold text-base-content/30 uppercase transition-all duration-300 group-hover/card:text-primary"
							>
								Sector
							</span>
							<span
								class="text-sm font-medium text-base-content/70 transition-colors duration-300 group-hover/card:text-base-content"
							>
								{client.category}
							</span>
						</div>
					</div>
				{/each}
			</div>

			<!-- Bloque 2 (Duplicado para loop infinito) -->
			<div class="animate-marquee flex min-w-full shrink-0 items-center gap-8 px-4">
				{#each clients as client}
					<!-- Card: Holographic Asset Style -->
					<div
						class="group/card relative flex h-24 w-72 shrink-0 items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/5 px-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:border-primary/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
					>
						<!-- Logo Container: Centrado perfecto -->
						<div class="relative flex h-10 w-24 items-center justify-center">
							<img
								src={client.logo}
								alt={client.name}
								class="max-h-full max-w-full object-contain opacity-50 grayscale transition-all duration-500 group-hover/card:scale-110 group-hover/card:opacity-100 group-hover/card:grayscale-0"
								draggable="false"
								loading="lazy"
							/>
						</div>

						<!-- Vertical Separator: Gradiente sutil -->
						<div
							class="h-12 w-px bg-linear-to-b from-transparent via-white/10 to-transparent transition-all duration-300 group-hover/card:via-primary/40"
						></div>

						<!-- Category Tag -->
						<div class="flex flex-1 flex-col items-end justify-center gap-0.5">
							<span
								class="text-xs font-bold text-base-content/30 uppercase transition-all duration-300 group-hover/card:text-primary"
							>
								Sector
							</span>
							<span
								class="text-sm font-medium text-base-content/70 transition-colors duration-300 group-hover/card:text-base-content"
							>
								{client.category}
							</span>
						</div>
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
		animation: marquee 30s linear infinite; /* Más lento para apreciar los detalles */
	}
	/* Pausar animación al hacer hover para mejorar UX */
	.group:hover .animate-marquee {
		animation-play-state: paused;
	}
</style>

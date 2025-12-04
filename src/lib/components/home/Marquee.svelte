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

<!-- Marquee Container -->
<div
	in:fly={{ y: 20, duration: 800, delay: 600 }}
	class="group flex w-full overflow-hidden mask-r-from-60% mask-l-from-60% py-8"
>
	<!-- Bloque 1 -->
	<div class="animate-marquee flex items-center gap-8 px-4">
		{#each clients as client}
			<!-- Card: Vertical Holographic Style -->
			<div
				class="group/card flex h-50 w-44 shrink-0 flex-col items-center justify-center gap-5 rounded-2xl border border-white/5 bg-white/5 px-4 py-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:border-primary/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
			>
				<!-- Logo Container -->
				<div class="flex h-12 w-full items-center justify-center">
					<img
						src={client.logo}
						alt={client.name}
						class="max-h-full max-w-full object-contain opacity-50 grayscale transition-all duration-500 group-hover/card:scale-110 group-hover/card:opacity-100 group-hover/card:grayscale-0"
						draggable="false"
						loading="lazy"
					/>
				</div>

				<!-- Horizontal Separator -->
				<div
					class="h-px w-12 bg-linear-to-r from-transparent via-white/10 to-transparent transition-all duration-300 group-hover/card:w-24 group-hover/card:via-primary/40"
				></div>

				<!-- Category Tag -->
				<div class="flex flex-col items-center justify-center gap-1 text-center">
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

	<!-- Bloque 2  -->
	<div class="animate-marquee flex items-center gap-8 px-4">
		{#each clients as client}
			<!-- Card: Vertical Holographic Style -->
			<div
				class="group/card flex h-50 w-44 shrink-0 flex-col items-center justify-center gap-5 rounded-2xl border border-white/5 bg-white/5 px-4 py-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:border-primary/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
			>
				<!-- Logo Container -->
				<div class="flex h-12 w-full items-center justify-center">
					<img
						src={client.logo}
						alt={client.name}
						class="max-h-full max-w-full object-contain opacity-50 grayscale transition-all duration-500 group-hover/card:scale-110 group-hover/card:opacity-100 group-hover/card:grayscale-0"
						draggable="false"
						loading="lazy"
					/>
				</div>

				<!-- Horizontal Separator -->
				<div
					class="h-px w-12 bg-linear-to-r from-transparent via-white/10 to-transparent transition-all duration-300 group-hover/card:w-24 group-hover/card:via-primary/40"
				></div>

				<!-- Category Tag -->
				<div class="flex flex-col items-center justify-center gap-1 text-center">
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

	<!-- Bloque 3  -->
	<div class="animate-marquee flex items-center gap-8 px-4">
		{#each clients as client}
			<!-- Card: Vertical Holographic Style -->
			<div
				class="group/card flex h-50 w-44 shrink-0 flex-col items-center justify-center gap-5 rounded-2xl border border-white/5 bg-white/5 px-4 py-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:border-primary/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
			>
				<!-- Logo Container -->
				<div class="flex h-12 w-full items-center justify-center">
					<img
						src={client.logo}
						alt={client.name}
						class="max-h-full max-w-full object-contain opacity-50 grayscale transition-all duration-500 group-hover/card:scale-110 group-hover/card:opacity-100 group-hover/card:grayscale-0"
						draggable="false"
						loading="lazy"
					/>
				</div>

				<!-- Horizontal Separator -->
				<div
					class="h-px w-12 bg-linear-to-r from-transparent via-white/10 to-transparent transition-all duration-300 group-hover/card:w-24 group-hover/card:via-primary/40"
				></div>

				<!-- Category Tag -->
				<div class="flex flex-col items-center justify-center gap-1 text-center">
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
		animation: marquee 20s linear infinite; /* Más lento para apreciar los detalles */
	}
	/* Pausar animación al hacer hover para mejorar UX */
	.group:hover .animate-marquee {
		animation-play-state: paused;
	}
</style>

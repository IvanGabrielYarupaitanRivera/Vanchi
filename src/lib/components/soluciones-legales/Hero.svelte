<script lang="ts">
	import bgHero from '$lib/assets/images/soluciones/legales/bgHero.webp';
	import { resolve } from '$app/paths';
	import { fly } from 'svelte/transition';
	import { ArrowRight } from '@lucide/svelte';

	// Fases del plan — cada tarjeta en el clothesline
	const phases = [
		{
			id: '01',
			title: 'Auditoría',
			desc: 'Diagnóstico de infraestructura actual',
			img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80'
		},
		{
			id: '02',
			title: 'Procesos',
			desc: 'Mapeo y optimización de flujos',
			img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80'
		},
		{
			id: '03',
			title: 'Adopción',
			desc: 'Implementación de IA y herramientas',
			img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80'
		},
		{
			id: '04',
			title: 'Automatización',
			desc: 'Flujos inteligentes en producción',
			img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80'
		},
		{
			id: '05',
			title: 'Escalado',
			desc: 'Captación de clientes de alto valor',
			img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80'
		}
	];

	// Transform CSS inline por tarjeta: rotación + Y offset para el arco clothesline
	// Centro (i=2) es el punto más bajo (máximo translateY), extremos más altos
	const cardTransforms = [
		'rotate(-7deg) translateY(0px)',
		'rotate(-3deg) translateY(14px)',
		'rotate(0deg) translateY(28px)',
		'rotate(3deg) translateY(14px)',
		'rotate(7deg) translateY(0px)'
	];
</script>

<section
	class="relative -mt-24 flex min-h-screen w-full flex-col items-center justify-start overflow-hidden pt-40 lg:pt-48"
>
	<!-- Imagen de fondo (igual al Hero principal) -->
	<enhanced:img
		src={bgHero}
		alt="Fondo para el Hero de Soluciones Legales"
		fetchpriority="high"
		loading="eager"
		class="absolute inset-0 h-full w-full mask-r-from-80% mask-b-from-50% mask-l-from-80% object-cover object-center opacity-5"
	/>

	<!-- ── Texto superior centrado ── -->
	<div class="relative z-10 flex w-full flex-col items-center px-6 text-center">
		<!-- Badge animado (igual al Hero principal) -->
		<div
			in:fly={{ y: 30, duration: 1000, delay: 200 }}
			class="relative mb-8 inline-flex overflow-hidden rounded-full p-px"
		>
			<span
				class="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#C5A059_50%,transparent_100%)]"
			></span>
			<div
				class="inline-flex h-full w-full items-center gap-2 rounded-full bg-base-100/90 px-4 py-1.5 backdrop-blur-3xl"
			>
				<div class="inline-grid *:[grid-area:1/1]">
					<div class="status animate-ping status-primary"></div>
					<div class="status status-primary"></div>
				</div>
				<span class="flex gap-1 text-xs font-medium tracking-widest text-base-content uppercase">
					Plan integral
					<span class="hidden lg:inline"> · 5 fases </span>
				</span>
			</div>
		</div>

		<!-- H1: estilo billboard — uppercase, ultra-bold, gran escala -->
		<h1 in:fly={{ y: 30, duration: 1000, delay: 400 }} class="mb-8 text-5xl font-bold lg:text-7xl">
			Digitaliza tu
			<br />
			Despacho
			<br />
			<span
				class="bg-linear-to-r from-primary via-primary to-primary bg-clip-text px-4 font-serif text-transparent italic"
			>
				Legal
			</span>
		</h1>

		<!-- CTA único -->
		<nav in:fly={{ y: 30, duration: 1000, delay: 700 }} aria-label="Acciones principales">
			<a
				href={resolve('/#contacto')}
				aria-label="Agendar una consulta sobre Legal Tech con Vanchi"
				class="btn transition-all duration-300 btn-primary hover:-translate-y-1"
			>
				Agendar consulta
				<ArrowRight size={18} aria-hidden="true" />
			</a>
		</nav>
	</div>

	<!-- ── Clothesline: tarjetas de fases colgadas ── -->
	<div
		in:fly={{ y: 60, duration: 1200, delay: 900 }}
		class="relative z-10 mt-16 w-full max-w-5xl px-4"
	>
		<!-- Cuerda SVG (arco que combada hacia abajo) -->
		<div class="pointer-events-none absolute inset-x-8 top-0" aria-hidden="true">
			<svg width="100%" height="32" viewBox="0 0 1000 32" preserveAspectRatio="none" fill="none">
				<path
					d="M 0 6 Q 500 36 1000 6"
					stroke="rgba(197,160,89,0.35)"
					stroke-width="1.5"
					stroke-dasharray="5 4"
				/>
			</svg>
		</div>

		<!-- Tarjetas colgadas del arco -->
		<ul
			class="flex w-full items-end justify-center gap-2 pt-1 lg:gap-4"
			role="list"
			aria-label="Fases del plan Legal Tech"
		>
			{#each phases as phase, i (phase.id)}
				<li
					role="listitem"
					style="transform: {cardTransforms[i]}; transform-origin: top center;"
					class="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-base-100/85 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(197,160,89,0.25)] {i ===
					2
						? 'w-44 lg:w-52'
						: 'w-32 lg:w-44'}"
				>
					<!-- Pin dorado en la parte superior -->
					<div
						class="absolute -top-3 left-1/2 z-20 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-primary shadow-lg ring-2 ring-base-100"
						aria-hidden="true"
					>
						<div class="h-2 w-2 rounded-full bg-base-100/70"></div>
					</div>

					<!-- Imagen de la fase -->
					<div class="{i === 2 ? 'h-40 lg:h-48' : 'h-28 lg:h-36'} overflow-hidden">
						<img
							src={phase.img}
							alt={phase.title}
							loading="lazy"
							class="h-full w-full object-cover opacity-70 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
						/>
					</div>

					<!-- Detalle -->
					<div class={i === 2 ? 'p-4' : 'p-3'}>
						<p class="mb-0.5 text-[0.55rem] font-black tracking-widest text-primary uppercase">
							Fase {phase.id}
						</p>
						<h2
							class="leading-tight font-bold text-base-content/90 {i === 2 ? 'text-sm' : 'text-xs'}"
						>
							{phase.title}
						</h2>
						<p
							class="mt-1 text-[0.6rem] leading-relaxed text-base-content/50 {i === 2
								? ''
								: 'hidden lg:block'}"
						>
							{phase.desc}
						</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

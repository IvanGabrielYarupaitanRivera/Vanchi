<script lang="ts">
	import bgHero from '$lib/assets/images/soluciones/legales/bgHero.webp';
	import { resolve } from '$app/paths';
	import { fly } from 'svelte/transition';
	import { ArrowRight } from '@lucide/svelte';
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
</section>

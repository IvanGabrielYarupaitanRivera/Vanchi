<script lang="ts">
	import bgHero from '$lib/assets/images/bg-hero.webp';
	import { ArrowRight, Play } from '@lucide/svelte';
	import { fly } from 'svelte/transition';
</script>

<section class="hero -mt-24 min-h-screen w-full" style="background-image: url({bgHero});">
	<!-- Overlay: Gradiente oscuro para asegurar legibilidad sobre la imagen -->
	<div class="hero-overlay bg-linear-to-b from-base-300"></div>

	<div class="hero-content text-center text-base-content">
		<div class="max-w-4xl">
			<!-- Badge: Magic Border Effect -->
			<div
				in:fly={{ y: 30, duration: 1000, delay: 200 }}
				class="relative mb-8 inline-flex overflow-hidden rounded-full p-px"
			>
				<span
					class="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#C5A059_50%,transparent_100%)]"
				></span>
				<div
					class="inline-flex h-full w-full items-center gap-2 rounded-full bg-base-100/90 px-4 py-1.5 backdrop-blur-3xl"
				>
					<span class="h-2 w-2 animate-pulse rounded-full bg-primary"></span>
					<span
						class="flex gap-1 text-xs font-medium tracking-widest text-base-content/80 uppercase"
					>
						Disponible
						<span class="hidden lg:inline">para nuevos proyectos</span>
					</span>
				</div>
			</div>

			<!-- H1: Mezcla de Sans (Tech) y Serif (Lujo) -->
			<h1
				in:fly={{ y: 30, duration: 1000, delay: 400 }}
				class="mb-6 text-5xl font-bold lg:text-7xl"
			>
				Construyendo el futuro
				<br />
				<span
					class="bg-linear-to-r from-primary via-yellow-200 to-primary bg-clip-text font-serif text-transparent italic"
				>
					Pieza por Pieza
				</span>
			</h1>

			<!-- P: Leading loose para elegancia -->
			<p
				in:fly={{ y: 30, duration: 1000, delay: 600 }}
				class="mx-auto mb-10 max-w-2xl text-lg text-base-content lg:text-xl"
			>
				Sistemas y aplicaciones web diseñados para impresionar y mejorar tus procesos de negocio.
			</p>

			<!-- Buttons: CTA Principal + Secundario -->
			<div
				in:fly={{ y: 30, duration: 1000, delay: 800 }}
				class="flex flex-col items-center justify-center gap-4 lg:flex-row"
			>
				<button
					class="btn h-12 min-h-12 rounded-full px-8 text-base font-semibold shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all duration-300 btn-primary hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(197,160,89,0.5)]"
				>
					Start a Project
					<ArrowRight size={18} />
				</button>

				<button
					class="btn h-12 min-h-12 rounded-full border border-white/10 px-8 text-base font-medium btn-ghost transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-white"
				>
					<Play size={18} class="fill-current" />
					Showreel
				</button>
			</div>
		</div>
	</div>
</section>

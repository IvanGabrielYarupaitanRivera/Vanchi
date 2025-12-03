<script lang="ts">
	import bgHero from '$lib/assets/images/bg-hero.webp';
	import { ArrowRight, Play } from '@lucide/svelte';
	import { fly } from 'svelte/transition';
</script>

<section class="relative -mt-24 flex min-h-screen w-full items-center justify-center">
	<!-- 1. Imagen de Fondo con Máscara de Desvanecimiento -->
	<!-- Se usa un div absoluto para aplicar la máscara SOLO a la imagen, no al texto -->
	<div
		class="absolute inset-0 h-full w-full mask-r-from-80% mask-b-from-70% mask-l-from-80% bg-cover bg-center opacity-50"
		style="background-image: url({bgHero});"
	></div>

	<!-- 3. Contenido (z-10 para asegurar interactividad) -->
	<div class="relative hero-content z-10 text-center text-base-content">
		<div class="max-w-4xl">
			<!-- Badge: Magic Border Effect -->
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
					<span class="h-2 w-2 animate-pulse rounded-full bg-primary"></span>
					<span class="flex gap-1 text-xs font-medium tracking-widest text-base-content uppercase">
						Disponible
						<span class="hidden lg:inline">para nuevos proyectos</span>
					</span>
				</div>
			</div>

			<!-- H1: Mezcla de Sans (Tech) y Serif (Lujo) -->
			<h1
				in:fly={{ y: 30, duration: 1000, delay: 400 }}
				class="mb-10 text-5xl font-bold lg:text-7xl"
			>
				Construyendo sistemas
				<br />
				<span
					class="bg-linear-to-r from-primary via-primary to-primary bg-clip-text px-1 font-serif text-transparent italic"
				>
					modernos
				</span>
			</h1>

			<!-- P: Leading loose para elegancia -->
			<p
				in:fly={{ y: 30, duration: 1000, delay: 600 }}
				class="mx-auto mb-10 max-w-2xl text-lg text-base-content/80 lg:text-xl"
			>
				Diseño y desarrollo de sistemas modernos y robustos con tecnologías de vanguardia y
				arquitecturas escalables. Integración nativa de IA para automatizar flujos, optimizar
				decisiones y potenciar el valor del negocio.
			</p>

			<!-- Buttons: CTA Principal + Secundario -->
			<nav in:fly={{ y: 30, duration: 1000, delay: 800 }} aria-label="Acciones principales">
				<ul class="flex flex-col items-center justify-center gap-4 lg:flex-row" role="list">
					<li role="listitem">
						<button
							type="button"
							aria-label="Iniciar un proyecto con Vanchi"
							class="btn transition-all duration-300 btn-primary hover:-translate-y-1"
						>
							Iniciar proyecto
							<ArrowRight size={18} aria-hidden="true" class="ml-2" />
						</button>
					</li>

					<li role="listitem">
						<button
							type="button"
							aria-label="Ver showreel — video de trabajos"
							class="btn transition-all duration-300 btn-neutral hover:-translate-y-1"
						>
							Ver showreel
							<Play size={18} aria-hidden="true" class="ml-2" />
						</button>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</section>

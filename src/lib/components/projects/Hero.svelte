<script lang="ts">
	import bgProjects from '$lib/assets/images/projects/bg-projects.webp';
	import { ArrowDown } from '@lucide/svelte';
	import { fly } from 'svelte/transition';
</script>

<section class="relative -mt-24 flex min-h-screen w-full items-center justify-center">
	<enhanced:img
		src={bgProjects}
		alt="Fondo Hero de Proyectos"
		fetchpriority="high"
		loading="eager"
		class="absolute inset-0 h-full w-full mask-r-from-80% mask-b-from-50% mask-l-from-80% object-cover object-center opacity-10"
	/>

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
					<div class="inline-grid *:[grid-area:1/1]">
						<div class="status animate-ping status-primary"></div>
						<div class="status status-primary"></div>
					</div>
					<span class="flex gap-1 text-xs font-medium tracking-widest text-base-content uppercase">
						Disponible
						<span class="hidden lg:inline">para nuevos proyectos</span>
					</span>
				</div>
			</div>

			<!-- H1: Mezcla de Sans (Tech) y Serif (Lujo) -->
			<h1
				in:fly={{ y: 30, duration: 1000, delay: 400 }}
				class="mb-8 text-5xl font-bold lg:text-7xl"
			>
				Proyectos
				<br />
				<span
					class="bg-linear-to-r from-primary via-primary to-primary bg-clip-text px-1 font-serif text-transparent italic"
				>
					realizados
				</span>
			</h1>

			<p
				in:fly={{ y: 30, duration: 1000, delay: 600 }}
				class="mx-auto mb-10 max-w-2xl px-4 text-sm text-pretty text-base-content/80 lg:text-lg"
			>
				Explora los proyectos que hemos realizado y que reflejan nuestra pasión por la innovación y
				la calidad en cada línea de código.
			</p>

			<!-- Buttons: CTA Principal -->
			<nav in:fly={{ y: 30, duration: 1000, delay: 800 }} aria-label="Acciones principales">
				<ul class="flex flex-col items-center justify-center gap-4 lg:flex-row" role="list">
					<li role="listitem">
						<a
							href="/proyectos#proyectos-destacados"
							type="button"
							aria-label="Ver proyectos destacados"
							class="btn transition-all duration-300 btn-primary hover:-translate-y-1"
						>
							Ver proyectos destacados
							<ArrowDown size={18} aria-hidden="true" />
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</section>

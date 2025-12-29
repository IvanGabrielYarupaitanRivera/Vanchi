<script lang="ts">
	import { Code, Codesandbox, SquareCode } from '@lucide/svelte';
	import type { Component } from 'svelte';
	import { fly } from 'svelte/transition';

	interface Tech {
		stackDetails: string;
		logos: Component[];
		logosNombres: string[];
	}

	let { tech }: { tech: Tech } = $props();
</script>

<!-- Componente para mostrar las tecnologías utilizadas en un proyecto específico. -->
<section class="w-full py-20 lg:py-32">
	<div class="container mx-auto px-4">
		<!-- Header de Sección -->
		<div class="mb-8 text-center">
			<div in:fly={{ y: 30, duration: 800, delay: 200 }} class="mb-4 badge badge-soft">
				<Code size={14} />
				Tecnologías Utilizadas
			</div>
			<h2
				in:fly={{ y: 30, duration: 1000, delay: 400 }}
				class="mb-4 text-3xl font-bold lg:text-5xl"
			>
				Stack Tecnológico
				<span class="font-serif text-primary italic"> Usado </span>
			</h2>
		</div>

		<div class="flex flex-col gap-8">
			<!-- Card: Detalles del Stack Tecnológico Usado -->
			<article
				in:fly={{ y: 40, duration: 1000, delay: 600 }}
				class="group card border border-white/5 bg-base-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
			>
				<div class="card-body p-8">
					<div class="mb-4 flex items-center gap-3">
						<SquareCode size={24} class="text-primary" />
						<h4 class="text-sm font-bold tracking-widest uppercase">Detalles</h4>
					</div>

					<p class="text-lg text-pretty text-base-content/80">
						{tech.stackDetails}
					</p>
				</div>
			</article>

			<!-- Card: Mostrar los logos de las tecnologías utilizadas -->
			<article
				in:fly={{ y: 40, duration: 1000, delay: 800 }}
				class="group card border border-white/5 bg-base-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
			>
				<div class="card-body p-8">
					<div class="mb-4 flex items-center gap-3">
						<Codesandbox size={24} class="text-primary" />
						<h4 class="text-sm font-bold tracking-widest uppercase">Tecnologías Usadas</h4>
					</div>

					<!-- Grid de Logos -->
					<div class="flex flex-wrap justify-between gap-4">
						{#each tech.logos as Logo, i}
							<div
								in:fly={{ y: 20, duration: 800, delay: 1000 + i * 100 }}
								class="group flex flex-col items-center gap-3"
							>
								<!-- Contenedor del Logo con Glassmorphism -->
								<div
									class="flex h-24 w-24 items-center justify-center rounded-2xl border border-white/5 bg-white/5 p-2 opacity-60 grayscale transition-all duration-500 ease-out hover:scale-110 hover:border-primary/30 hover:bg-white/10 hover:opacity-100 hover:shadow-[0_0_20px_rgba(197,160,89,0.15)] hover:grayscale-0"
								>
									<Logo size={48} />
								</div>

								<!-- Nombre de la Tecnología (Visible en Hover) -->
								<span
									class="text-xs font-medium tracking-wide text-base-content/50 duration-300 hover:text-base-content/80"
								>
									{tech.logosNombres[i]}
								</span>
							</div>
						{/each}
					</div>
				</div>
			</article>
		</div>
	</div>
</section>

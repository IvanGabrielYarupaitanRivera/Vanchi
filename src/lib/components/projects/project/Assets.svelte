<script lang="ts">
	import { ExternalLink, Github, Link, Network, PanelTop, Youtube } from '@lucide/svelte';
	import { fly } from 'svelte/transition';

	interface Assets {
		liveUrl?: string;
		videoYoutube?: string;
		repoUrl?: string;
	}

	let { assets }: { assets: Assets } = $props();
</script>

<section class="w-full py-20 lg:py-32">
	<div class="container mx-auto px-4">
		<!-- Header de Sección -->
		<div class="mb-8 text-center">
			<div in:fly={{ y: 30, duration: 800, delay: 200 }} class="mb-4 badge badge-soft">
				<PanelTop size={14} />
				Recursos
			</div>
			<h2
				in:fly={{ y: 30, duration: 1000, delay: 400 }}
				class="mb-4 text-3xl font-bold lg:text-5xl"
			>
				Los <span class="font-serif text-primary italic">Recursos</span>
			</h2>
		</div>

		<div class="flex flex-col gap-8">
			<!-- Card: Para mostrar recursos como la página en vivo, video de youtube, repositorios, etc -->
			<article
				in:fly={{ y: 40, duration: 1000, delay: 600 }}
				class="group card border border-white/5 bg-base-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
			>
				<div class="card-body p-8">
					<div class="mb-4 flex items-center gap-3">
						<Link size={24} class="text-primary" />
						<h4 class="text-sm font-bold tracking-widest uppercase">Enlaces</h4>
					</div>

					<!-- Grid de enlaces con glassmorphism -->
					<div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
						{#if assets.liveUrl}
							<a
								href={assets.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="group/link flex flex-col items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 grayscale transition-all duration-500 ease-out hover:scale-[102%] hover:border-primary/30 hover:bg-white/10 hover:opacity-100 hover:shadow-[0_0_20px_rgba(197,160,89,0.15)] hover:grayscale-0"
								aria-label="Visitar sitio web en vivo"
							>
								<div
									class="flex size-10 items-center justify-center rounded-full bg-primary/20 transition-transform duration-300 group-hover/link:scale-110"
								>
									<ExternalLink size={18} class="text-primary" />
								</div>
								<div class="flex flex-col gap-1">
									<span class="text-xs font-bold tracking-widest text-primary uppercase">
										Sitio en Vivo
									</span>
									<span class="text-sm leading-loose text-base-content/60">
										Explora el proyecto desplegado
									</span>
								</div>
							</a>
						{/if}

						{#if assets.videoYoutube}
							<a
								href={assets.videoYoutube}
								target="_blank"
								rel="noopener noreferrer"
								class="group/link flex flex-col items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 grayscale transition-all duration-500 ease-out hover:scale-[102%] hover:border-primary/30 hover:bg-white/10 hover:opacity-100 hover:shadow-[0_0_20px_rgba(197,160,89,0.15)] hover:grayscale-0"
								aria-label="Ver demostración en video"
							>
								<div
									class="flex size-10 items-center justify-center rounded-full bg-primary/20 transition-transform duration-300 group-hover/link:scale-110"
								>
									<Youtube size={18} class="text-primary" />
								</div>
								<div class="flex flex-col gap-1">
									<span class="text-xs font-bold tracking-widest text-primary uppercase">
										Ver Demo
									</span>
									<span class="text-sm leading-loose text-base-content/60">
										Mira el proyecto en acción
									</span>
								</div>
							</a>
						{/if}

						{#if assets.repoUrl}
							<a
								href={assets.repoUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="group/link flex flex-col items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 grayscale transition-all duration-500 ease-out hover:scale-[102%] hover:border-primary/30 hover:bg-white/10 hover:opacity-100 hover:shadow-[0_0_20px_rgba(197,160,89,0.15)] hover:grayscale-0"
								aria-label="Ver código fuente en GitHub"
							>
								<div
									class="flex size-10 items-center justify-center rounded-full bg-primary/20 transition-transform duration-300 group-hover/link:scale-110"
								>
									<Github size={18} class="text-primary" />
								</div>
								<div class="flex flex-col gap-1">
									<span class="text-xs font-bold tracking-widest text-primary uppercase">
										Repositorio
									</span>
									<span class="text-sm leading-loose text-base-content/60">
										Revisa el código fuente
									</span>
								</div>
							</a>
						{/if}
					</div>
				</div>
			</article>
		</div>
	</div>
</section>

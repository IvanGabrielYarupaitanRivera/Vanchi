<script lang="ts">
	import { ExternalLink, Github, PanelTop, Youtube, ArrowUpRight } from '@lucide/svelte';
	import { fly } from 'svelte/transition';
	import type { ProjectAssets } from '$lib/types/project';

	let { assets }: { assets: ProjectAssets } = $props();

	function openExternal(url: string) {
		window.open(url, '_blank', 'noopener,noreferrer');
	}
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

		<div class="flex flex-col gap-4">
			<!-- Enlace: Sitio en Vivo -->
			{#if assets.liveUrl}
				<button
					in:fly={{ y: 30, duration: 800, delay: 600 }}
					type="button"
					onclick={() => openExternal(assets.liveUrl!)}
					aria-label="Visitar sitio web en vivo"
					class="group relative w-full overflow-hidden rounded-2xl border border-white/5 bg-base-200/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-base-200/80 hover:shadow-[0_0_30px_rgba(197,160,89,0.12)]"
				>
					<!-- Accent bar izquierda -->
					<div
						class="absolute top-0 left-0 h-full w-0.5 bg-primary/0 transition-all duration-500 group-hover:bg-primary/60"
					></div>

					<div class="flex items-center gap-6 p-6 lg:p-8">
						<!-- Número + Icono -->
						<div class="flex shrink-0 flex-col items-center gap-2">
							<span
								class="font-mono text-xs font-bold text-base-content/20 transition-colors duration-300 group-hover:text-primary/40"
								>01</span
							>
							<div
								class="flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20"
							>
								<ExternalLink size={22} class="text-primary" />
							</div>
						</div>

						<!-- Contenido central -->
						<div class="flex flex-1 flex-col items-start gap-1 text-left">
							<span class="text-xs font-bold tracking-widest text-primary/70 uppercase"
								>Sitio en Vivo</span
							>
							<p class="text-base font-semibold text-base-content">
								Explora el proyecto desplegado
							</p>
							<p class="text-sm text-base-content/50">Versión de producción activa</p>
						</div>

						<!-- Flecha CTA -->
						<div
							class="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-base-100/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:bg-primary/10"
						>
							<ArrowUpRight
								size={18}
								class="text-base-content/40 transition-colors duration-300 group-hover:text-primary"
							/>
						</div>
					</div>
				</button>
			{/if}

			<!-- Enlace: Demo en Video -->
			{#if assets.videoYoutube}
				<button
					in:fly={{ y: 30, duration: 800, delay: 700 }}
					type="button"
					onclick={() => openExternal(assets.videoYoutube!)}
					aria-label="Ver demostración en video"
					class="group relative w-full overflow-hidden rounded-2xl border border-white/5 bg-base-200/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-base-200/80 hover:shadow-[0_0_30px_rgba(197,160,89,0.12)]"
				>
					<div
						class="absolute top-0 left-0 h-full w-0.5 bg-primary/0 transition-all duration-500 group-hover:bg-primary/60"
					></div>

					<div class="flex items-center gap-6 p-6 lg:p-8">
						<div class="flex shrink-0 flex-col items-center gap-2">
							<span
								class="font-mono text-xs font-bold text-base-content/20 transition-colors duration-300 group-hover:text-primary/40"
								>02</span
							>
							<div
								class="flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20"
							>
								<Youtube size={22} class="text-primary" />
							</div>
						</div>

						<div class="flex flex-1 flex-col items-start gap-1 text-left">
							<span class="text-xs font-bold tracking-widest text-primary/70 uppercase"
								>Demo en Video</span
							>
							<p class="text-base font-semibold text-base-content">Mira el proyecto en acción</p>
							<p class="text-sm text-base-content/50">Demostración completa en YouTube</p>
						</div>

						<div
							class="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-base-100/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:bg-primary/10"
						>
							<ArrowUpRight
								size={18}
								class="text-base-content/40 transition-colors duration-300 group-hover:text-primary"
							/>
						</div>
					</div>
				</button>
			{/if}

			<!-- Enlace: Repositorio -->
			{#if assets.repoUrl}
				<button
					in:fly={{ y: 30, duration: 800, delay: 800 }}
					type="button"
					onclick={() => openExternal(assets.repoUrl!)}
					aria-label="Ver código fuente en GitHub"
					class="group relative w-full overflow-hidden rounded-2xl border border-white/5 bg-base-200/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-base-200/80 hover:shadow-[0_0_30px_rgba(197,160,89,0.12)]"
				>
					<div
						class="absolute top-0 left-0 h-full w-0.5 bg-primary/0 transition-all duration-500 group-hover:bg-primary/60"
					></div>

					<div class="flex items-center gap-6 p-6 lg:p-8">
						<div class="flex shrink-0 flex-col items-center gap-2">
							<span
								class="font-mono text-xs font-bold text-base-content/20 transition-colors duration-300 group-hover:text-primary/40"
								>03</span
							>
							<div
								class="flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20"
							>
								<Github size={22} class="text-primary" />
							</div>
						</div>

						<div class="flex flex-1 flex-col items-start gap-1 text-left">
							<span class="text-xs font-bold tracking-widest text-primary/70 uppercase"
								>Repositorio</span
							>
							<p class="text-base font-semibold text-base-content">Revisa el código fuente</p>
							<p class="text-sm text-base-content/50">Repositorio abierto en GitHub</p>
						</div>

						<div
							class="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-base-100/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:bg-primary/10"
						>
							<ArrowUpRight
								size={18}
								class="text-base-content/40 transition-colors duration-300 group-hover:text-primary"
							/>
						</div>
					</div>
				</button>
			{/if}
		</div>
	</div>
</section>

<script lang="ts">
	import { Layers, X, ZoomIn } from '@lucide/svelte';
	import { fade, fly, scale } from 'svelte/transition';

	interface GalleryImage {
		src: string;
		alt: string;
		caption: string;
	}

	interface UI {
		description: string;
		gallery: GalleryImage[];
	}

	// Estado reactivo para el Lightbox (Opción 1 KISS)
	let selectedImage = $state<GalleryImage | null>(null);

	let { ui }: { ui: UI } = $props();
</script>

<section class="w-full py-20 lg:py-32">
	<div class="container mx-auto px-4">
		<!-- Header de Sección -->
		<div class="mb-8 text-center">
			<div in:fly={{ y: 30, duration: 800, delay: 200 }} class="mb-4 badge badge-soft">
				<Layers size={14} />
				User Interface (UI)
			</div>
			<h2
				in:fly={{ y: 30, duration: 1000, delay: 400 }}
				class="mb-4 text-3xl font-bold lg:text-5xl"
			>
				Definiendo la
				<span class="font-serif text-primary italic"> Interfaz de Usuario </span>
			</h2>
		</div>

		<div class="flex flex-col gap-8">
			<!-- Descripción de la UI -->
			<article
				in:fly={{ y: 40, duration: 1000, delay: 600 }}
				class="card border border-white/5 bg-base-300 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
			>
				<div class="card-body p-8">
					<div class="mb-4 flex items-center gap-3">
						<Layers size={24} class="text-primary" />
						<h4 class="text-sm font-bold tracking-widest uppercase">Descripción de la UI</h4>
					</div>
					<p class="text-lg text-pretty text-base-content/80">
						{ui.description}
					</p>
				</div>
			</article>

			<!-- Galería de Imágenes de la UI -->
			<article
				in:fly={{ y: 40, duration: 1000, delay: 600 }}
				class="card border border-white/5 bg-base-300 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
			>
				<div class="card-body p-8">
					<div class="mb-4 flex items-center gap-3">
						<Layers size={24} class="text-primary" />
						<h4 class="text-sm font-bold tracking-widest uppercase">Galería de UI</h4>
					</div>

					<div class="grid gap-8 lg:grid-cols-2">
						{#each ui.gallery as image}
							<button
								class="group relative flex flex-col items-center text-left focus:outline-none"
								onclick={() => (selectedImage = image)}
								aria-label="Ampliar imagen"
							>
								<div class="relative w-full overflow-hidden rounded-xl">
									<!-- Overlay Hover con Icono -->
									<div
										class="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-base-300/40 opacity-0 backdrop-blur-lg transition-opacity duration-300 group-hover:opacity-100"
									>
										<ZoomIn class="text-white" size={32} />
									</div>

									<enhanced:img
										src={image.src}
										alt={image.alt}
										class="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
									/>
								</div>
								{#if image.caption}
									<span
										class="mt-3 text-sm text-base-content/60 transition-colors group-hover:text-primary/80"
									>
										{image.caption}
									</span>
								{/if}
							</button>
						{/each}
					</div>
				</div>
			</article>
		</div>
	</div>
</section>

<!-- Lightbox Modal (Global Overlay) -->
{#if selectedImage}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-base-100/50 backdrop-blur-xl focus:outline-none"
		transition:fade
		onclick={() => (selectedImage = null)}
		onkeydown={(e) => {
			if (e.key === 'Escape') selectedImage = null;
		}}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
	>
		<!-- Botón Cerrar -->
		<button
			class="btn absolute top-4 right-4 z-50 btn-circle text-base-content btn-ghost hover:bg-white/10 hover:text-primary"
			onclick={() => (selectedImage = null)}
			aria-label="Cerrar"
		>
			<X size={32} />
		</button>

		<!-- Contenedor Imagen -->
		<figure
			class="relative flex max-h-[75vh] max-w-7xl flex-col overflow-hidden rounded-2xl lg:max-h-[85vh]"
			transition:scale={{ duration: 300, start: 0.95 }}
		>
			<enhanced:img
				src={selectedImage.src}
				alt={selectedImage.alt}
				class="h-full w-full object-contain"
			/>
			{#if selectedImage.caption}
				<figcaption class="w-full bg-base-300 p-4 text-center text-base-content">
					<p class="text-sm font-medium lg:text-base">{selectedImage.caption}</p>
				</figcaption>
			{/if}
		</figure>
	</div>
{/if}

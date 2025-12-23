<script lang="ts">
	import { Layers } from '@lucide/svelte';
	import { fly } from 'svelte/transition';

	interface GalleryImage {
		src: string;
		alt: string;
		caption: string;
	}

	interface UI {
		description: string;
		gallery: GalleryImage[];
	}

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
							<figure class="flex flex-col items-center">
								<enhanced:img
									src={image.src}
									alt={image.alt}
									class="mb-4 w-full rounded-lg object-cover shadow-lg"
								/>
								{#if image.caption}
									<figcaption class="text-sm text-base-content/60">
										{image.caption}
									</figcaption>
								{/if}
							</figure>
						{/each}
					</div>
				</div>
			</article>
		</div>
	</div>
</section>

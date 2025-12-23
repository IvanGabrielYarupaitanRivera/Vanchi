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
	</div>
</section>

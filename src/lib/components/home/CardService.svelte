<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import { fly } from 'svelte/transition';

	type Service = {
		id: number;
		title: string;
		description: string;
		image?: string;
		span?: string; // Propiedad para controlar el tamaño en la grilla
	};

	let { service, i }: { service: Service; i: number } = $props();

	// Formato editorial para el número (01, 02, etc.)
	const num = (i + 1).toString().padStart(2, '0');
</script>

<article
	in:fly={{ y: 30, duration: 800, delay: 600 + i * 100 }}
	class="group relative flex min-h-80 flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-base-300 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
>
	<!-- Fondo: Número Editorial Gigante -->
	<span
		class="absolute -top-8 -right-2 font-serif text-9xl text-white/5 transition-colors duration-500 group-hover:text-primary/5"
	>
		{num}
	</span>

	<!-- Contenido Principal -->
	<div class="relative z-10">
		<!-- Icono / Imagen en contenedor de cristal -->
		<div
			class="mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-white/5 transition-transform duration-500 group-hover:scale-110"
		>
			{#if service.image}
				<img
					src={service.image}
					alt={service.title}
					class="h-full w-full object-cover opacity-80 grayscale transition-all duration-500 group-hover:grayscale-0"
				/>
			{/if}
		</div>

		<h3
			class="mb-3 font-serif text-3xl font-bold text-white transition-colors duration-300 group-hover:text-primary"
		>
			{service.title}
		</h3>

		<p class="max-w-md text-sm leading-relaxed text-base-content/70 lg:text-base">
			{service.description}
		</p>
	</div>

	<!-- Acción: Visible en móvil (opacity-100), Hover en Desktop (lg:opacity-0) -->
	<div class="mt-6 card-actions justify-start">
		<a
			href="/"
			class="btn opacity-100 transition-all duration-500 btn-primary lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
			aria-label={`Ver detalles de ${service.title}`}
		>
			<span>Descubrir</span>
			<ArrowUpRight size={16} />
		</a>
	</div>
</article>

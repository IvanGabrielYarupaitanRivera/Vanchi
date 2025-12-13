<script lang="ts">
	import { CirclePlay, Globe, Play } from '@lucide/svelte';
	import { fly } from 'svelte/transition';

	type Project = {
		id: number;
		title: string;
		category: string;
		description: string;
		image: string;
		tags: string[];
		href: string;
		link?: string;
		video?: string;
	};

	let { project, i }: { project: Project; i: number } = $props();
</script>

<article
	in:fly={{ y: 30, duration: 800, delay: 600 + i * 100 }}
	class="group relative h-[750px] w-full rounded-2xl border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
>
	<!-- 1. Background Image (Full Cover) -->
	<div class="absolute inset-0 h-full w-full overflow-hidden rounded-2xl">
		<enhanced:img
			src={project.image}
			alt={project.title}
			class="h-full w-full object-cover grayscale transition-all duration-1000 will-change-transform group-hover:scale-105 group-hover:grayscale-0"
			loading="lazy"
		/>
		<!-- Gradient Overlay: Fade from black at bottom to transparent top -->
		<div
			class="absolute inset-0 bg-linear-to-t from-base-300 via-base-300/70 to-transparent duration-500"
		></div>
	</div>

	<!-- 2. Floating Tags (Top Left - HUD Style) -->
	<div class="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
		{#each project.tags as tag}
			<span class="badge badge-soft badge-sm badge-accent">
				{tag}
			</span>
		{/each}
	</div>

	<!-- 3. Content (Bottom Aligned) -->
	<div class="absolute bottom-0 left-0 z-20 flex w-full flex-col p-8">
		<!-- Category Label (Reveals on hover) -->
		<span
			class="mb-2 translate-y-1 text-xs font-bold tracking-widest text-accent/70 uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
		>
			{project.category}
		</span>

		<h3 class="mb-3 font-serif text-3xl font-bold">
			<a href={project.link} class="transition-colors duration-300 hover:text-primary">
				{project.title}
			</a>
		</h3>

		<p class="line-clamp-3 text-sm leading-relaxed text-base-content/70 lg:text-base">
			{project.description}
		</p>

		<div class="divider"></div>

		<!-- Control Deck: Diseño unificado y minimalista -->
		<div class="flex items-center gap-2 pt-2">
			<!-- 1. Acción Principal: Botón extendido con etiqueta -->
			<div class="tooltip tooltip-primary" data-tip="Leer Estudio de Caso">
				<a
					href={project.href}
					class="  btn btn-soft btn-primary"
					aria-label={`Ver Estudio de Caso ${project.title}`}
				>
					<span>Caso de Estudio</span>
				</a>
			</div>

			<!-- Separador vertical sutil (opcional, para agrupar visualmente) -->
			{#if project.link || project.video}
				<div class="divider divider-horizontal"></div>
			{/if}

			<!-- 2. Acciones Secundarias: Botones circulares 'Glass' -->
			{#if project.link}
				<div class="tooltip tooltip-accent" data-tip="Visitar Web">
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-circle btn-soft btn-accent"
						aria-label={`Visitar Sitio Web ${project.title}`}
					>
						<Globe size={18} />
					</a>
				</div>
			{/if}

			{#if project.video}
				<div class="tooltip tooltip-accent" data-tip="Ver Demo">
					<a
						href={project.video}
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-circle btn-soft btn-accent"
						aria-label={`Ver Video del Proyecto ${project.title}`}
					>
						<Play size={18} />
					</a>
				</div>
			{/if}
		</div>
	</div>
</article>

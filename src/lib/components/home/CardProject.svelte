<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import { fly } from 'svelte/transition';

	type Project = {
		id: number;
		title: string;
		category: string;
		description: string;
		image: string;
		tags: string[];
		href: string;
	};

	let { project, i }: { project: Project; i: number } = $props();
</script>

<article
	in:fly={{ y: 30, duration: 800, delay: 600 + i * 100 }}
	class="group relative h-[600px] w-full overflow-hidden rounded-2xl border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
>
	<!-- 1. Background Image (Full Cover) -->
	<div class="absolute inset-0 h-full w-full overflow-hidden">
		<img
			src={project.image}
			alt={project.title}
			class="h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
			loading="lazy"
		/>
		<!-- Gradient Overlay: Fade from black at bottom to transparent top -->
		<div
			class="absolute inset-0 bg-linear-to-t from-base-300 via-base-300/80 to-transparent duration-500"
		></div>
	</div>

	<!-- 2. Floating Tags (Top Left - HUD Style) -->
	<div class="absolute top-4 left-4 flex flex-wrap gap-2">
		{#each project.tags as tag}
			<span class="badge badge-soft badge-sm badge-accent">
				{tag}
			</span>
		{/each}
	</div>

	<!-- 3. Content (Bottom Aligned) -->
	<div class="absolute bottom-0 left-0 flex w-full flex-col p-8">
		<!-- Category Label (Reveals on hover) -->
		<span
			class="mb-2 -translate-y-2 text-xs font-bold tracking-widest text-primary uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
		>
			{project.category}
		</span>

		<h3 class="mb-3 font-serif text-3xl font-bold text-white">
			{project.title}
		</h3>

		<p class="mb-6 line-clamp-3 text-sm leading-relaxed text-white/70">
			{project.description}
		</p>

		<div>
			<a href={project.href} class="btn btn-primary" aria-label={`Ver proyecto ${project.title}`}>
				Ver Proyecto
				<ArrowUpRight size={18} />
			</a>
		</div>
	</div>
</article>

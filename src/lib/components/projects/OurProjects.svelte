<script lang="ts">
	import { fly } from 'svelte/transition';
	import StatsProjects from '$lib/components/projects/StatsProjects.svelte';
	import CardProject from '$lib/components/projects/CardProject.svelte';
	import { PROJECTS, type Project } from '$lib/constants/projects';
	import ProjectsFilter from './ProjectsFilter.svelte';

	let selectedCategory = $state<string>('Todos');
	const categories = $derived.by<string[]>(() => [
		'Todos',
		...new Set(PROJECTS.map((p) => p.category))
	]);

	const filteredProjects = $derived.by<Project[]>(() =>
		selectedCategory === 'Todos'
			? PROJECTS
			: PROJECTS.filter((project) => project.category === selectedCategory)
	);
</script>

<section class="w-full py-20 lg:py-32" id="proyectos-destacados">
	<div class="container mx-auto px-4">
		<!-- Header de Sección -->
		<div class="mb-8 text-center">
			<h2 in:fly={{ y: 30, duration: 800, delay: 200 }} class="mb-4 text-3xl font-bold lg:text-5xl">
				Lista de Proyectos <span
					class="bg-linear-to-r from-primary via-primary to-primary bg-clip-text font-serif text-transparent italic"
					>Realizados.</span
				>
			</h2>
			<p
				in:fly={{ y: 30, duration: 800, delay: 400 }}
				class="mx-auto max-w-2xl text-base text-base-content/60 lg:text-lg"
			>
				Explora nuestra lista de completa de proyectos que realizamos con tecnologías de vanguardia,
				incluyendo IA y arquitectura moderna. Cada proyecto es un ejemplo de innovación y eficiencia
				en su campo.
			</p>
		</div>

		<!-- Estadísticas de Proyectos -->
		<StatsProjects />

		<!-- Filtro de Proyectos -->
		<div class="mt-10">
			<ProjectsFilter
				{categories}
				activeCategory={selectedCategory}
				onCategoryChange={(category) => (selectedCategory = category)}
			/>
		</div>

		<!-- Grid de Proyectos -->
		<div class="grid grid-cols-1 gap-8 py-8 lg:grid-cols-3">
			{#each filteredProjects as project, i (project.id)}
				<CardProject {project} {i} />
			{/each}
		</div>
	</div>
</section>

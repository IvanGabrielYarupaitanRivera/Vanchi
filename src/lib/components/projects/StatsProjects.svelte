<script lang="ts">
	import { PROJECTS } from '$lib/constants/projects';
	import { Award, Zap } from '@lucide/svelte';

	const totalProjects = PROJECTS.length;
	const uniqueCategories = new Set(PROJECTS.map((p) => p.category)).size;
	const totalTechnologies = new Set(PROJECTS.flatMap((p) => p.tags)).size;

	const stats = [
		{
			label: 'Proyectos Totales',
			value: totalProjects,
			icon: Zap,
			color: 'text-primary'
		},
		{
			label: 'Categorías Únicas',
			value: uniqueCategories,
			icon: Award,
			color: 'text-yellow-300'
		},
		{
			label: 'Tecnologías Dominadas',
			value: totalTechnologies,
			icon: Zap,
			color: 'text-blue-400'
		}
	];
</script>

<section class="flex flex-col gap-12 py-12 lg:py-16">
	<!-- Grid de Estadísticas -->
	<div class="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
		{#each stats as stat (stat.label)}
			<article class="group">
				<div class="flex items-center justify-between gap-4 rounded-2xl bg-base-200 p-8 shadow-2xl">
					<div class="flex flex-col gap-2">
						<p
							class="text-5xl leading-none font-bold text-base-content transition-colors duration-300 group-hover:text-primary"
						>
							{stat.value}
						</p>
						<p
							class="text-xs font-bold tracking-widest text-base-content/60 uppercase transition-colors duration-300 group-hover:text-primary/60"
						>
							{stat.label}
						</p>
					</div>

					<div
						class="shrink-0 text-base-content/60 transition-colors duration-300 group-hover:text-primary"
					>
						<stat.icon size={40} />
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>

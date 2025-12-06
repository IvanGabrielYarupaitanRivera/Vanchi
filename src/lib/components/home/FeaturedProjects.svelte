<script lang="ts">
	import { fly } from 'svelte/transition';
	import CardProject from './CardProject.svelte';
	import junin360 from '$lib/assets/images/projects/junin360.webp';
	import mediroosevelt from '$lib/assets/images/projects/mediroosevelt.webp';
	import farmape from '$lib/assets/images/projects/farmape.webp';

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

	// Mock Data: Proyectos seleccionados para mostrar nicho (IA + Arquitectura)
	const projects: Project[] = [
		{
			id: 1,
			title: 'Junin360',
			category: 'Optimización de Procesos',
			description:
				'Sistema de gestión de informes de control para el GORE Junín. Organiza los datos de cada informe y envía notificaciones a los responsables de cada informe de control para no llegar a responsabbilidades legales.',
			image: junin360,
			tags: ['SvelteKit', 'Supabase', 'OpenRouter'],
			href: '/proyectos/junin360',
			link: 'https://junin360.com/'
		},
		{
			id: 2,
			title: 'MediRoosevelt',
			category: 'HealthTech Innovation',
			description:
				'Plataforma de gestión de activos digitales con seguridad de grado militar, sincronización de estado global instantánea y latencia sub-100ms.',
			image: mediroosevelt,
			tags: ['Convex', 'TypeScript', 'Gemini API'],
			href: '/proyectos/mediroosevelt',
			link: 'https://mediroosevelt.com/',
			video: 'https://www.youtube.com/watch?v=2RlIn3JFajc'
		},
		{
			id: 3,
			title: 'Farmape',
			category: 'HealthTech Innovation',
			description:
				'Sistema escalable multi-tenant diseñado para orquestar flujos de trabajo complejos en corporaciones multinacionales, reduciendo la carga operativa un 40%.',
			image: farmape,
			tags: ['Convex', 'TypeScript', 'Gemini API'],
			href: '/proyectos/farmape',
			link: 'https://www.farmape.net/',
			video: 'https://www.youtube.com/watch?v=6-3bhIxR4-k'
		}
	];
</script>

<section class="w-full py-20 lg:py-32" id="proyectos">
	<div class="container mx-auto px-4">
		<!-- Header de Sección -->
		<div class="mb-8 text-center">
			<h2 in:fly={{ y: 30, duration: 800, delay: 200 }} class="mb-4 text-3xl font-bold lg:text-5xl">
				Arquitectura en <span
					class="bg-linear-to-r from-primary via-primary to-primary bg-clip-text font-serif text-transparent italic"
					>Acción.</span
				>
			</h2>
			<p
				in:fly={{ y: 30, duration: 800, delay: 400 }}
				class="mx-auto max-w-2xl text-base text-base-content/60 lg:text-lg"
			>
				Ingeniería Svelte e Inteligencia Artificial aplicadas a resultados de negocio tangibles.
				Menos teoría, más despliegue.
			</p>
		</div>

		<!-- Grid de Proyectos -->
		<div class="grid grid-cols-1 gap-8 py-8 lg:grid-cols-3">
			{#each projects as project, i}
				<CardProject {project} {i} />
			{/each}
		</div>
	</div>
</section>

<script lang="ts">
	import { fly } from 'svelte/transition';
	import CardProject from './CardProject.svelte';
	import junin360 from '$lib/assets/images/projects/junin360.webp';
	import mediroosevelt from '$lib/assets/images/projects/mediroosevelt.webp';
	import farmape from '$lib/assets/images/projects/farmape.webp';
	import obstetraconecta from '$lib/assets/images/projects/obstetraconecta.webp';
	import diapis from '$lib/assets/images/projects/diapis.webp';
	import peraltaasociados from '$lib/assets/images/projects/peraltaasociados.webp';
	import { ArrowRight } from '@lucide/svelte';

	type Project = {
		id: number;
		title: string;
		category: string;
		description: string;
		image: string;
		tags: string[];
		href: string;
	};

	const projects: Project[] = [
		{
			id: 1,
			title: 'Junin360',
			category: 'Optimización de Procesos',
			description:
				'Plataforma de control de informes de control para el GORE Junín utilizando tecnologías modernas e IA para alertar a los responsables y eliminar el riesgo de responsabilidades legales.',
			image: junin360,
			tags: ['SvelteKit', 'Supabase', 'OpenRouter', 'N8N'],
			href: '/proyectos/junin360'
		},
		{
			id: 2,
			title: 'MediRoosevelt',
			category: 'HealthTech Innovation',
			description:
				'Proyecto para los alumnos de la escuela profesional de Medicina Humana de la Universidad Roosevelt, ganó el primer puesto en la Expociencia 2025 - II.',
			image: mediroosevelt,
			tags: ['Svelte', 'Convex', 'TypeScript', 'Gemini API'],
			href: '/proyectos/mediroosevelt'
		},

		{
			id: 3,
			title: 'Diapis',
			category: 'EduTech Innovation',
			description:
				'Sistema de IA que revoluciona el aprendizaje en el aula. Genera rondas de preguntas y respuestas personalizadas a partir del material de clase para impulsar la atención y la participación estudiantil.',
			image: diapis,
			tags: ['SvelteKit', 'Convex', 'Livekit', 'Gemini API'],
			href: '/proyectos/diapis'
		}
	];
</script>

<section class="w-full py-20 lg:py-32" id="proyectos">
	<div class="container mx-auto px-4">
		<!-- Header de Sección -->
		<div class="mb-8 text-center">
			<h2 in:fly={{ y: 30, duration: 800, delay: 200 }} class="mb-4 text-3xl font-bold lg:text-5xl">
				Soluciones <span
					class="bg-linear-to-r from-primary via-primary to-primary bg-clip-text font-serif text-transparent italic"
					>Realizadas.</span
				>
			</h2>
			<p
				in:fly={{ y: 30, duration: 800, delay: 400 }}
				class="mx-auto max-w-2xl text-base text-base-content/60 lg:text-lg"
			>
				Lista de proyectos realizados con tecnologías de vanguardia, incluyendo IA y arquitectura
				moderna. Cada proyecto es un ejemplo de innovación y eficiencia en su campo.
			</p>
		</div>

		<!-- Grid de Proyectos -->
		<div class="grid grid-cols-1 gap-8 py-8 lg:grid-cols-3">
			{#each projects as project, i}
				<CardProject {project} {i} />
			{/each}
		</div>

		<!-- Botón para ver todos los proyectos -->
		<div class="mt-10 text-center">
			<a
				href="/proyectos#proyectos-destacados"
				type="button"
				aria-label="Ver todos los proyectos"
				class="btn transition-all duration-300 btn-primary hover:-translate-y-1"
				in:fly={{ y: 30, duration: 800, delay: 600 }}
			>
				Ver todos los proyectos
				<ArrowRight size={18} aria-hidden="true" />
			</a>
		</div>
	</div>
</section>

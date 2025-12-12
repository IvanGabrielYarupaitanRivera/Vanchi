<script lang="ts">
	import { fly } from 'svelte/transition';
	import CardProject from './CardProject.svelte';
	import junin360 from '$lib/assets/images/projects/junin360.webp';
	import mediroosevelt from '$lib/assets/images/projects/mediroosevelt.webp';
	import farmape from '$lib/assets/images/projects/farmape.webp';
	import obstetraconecta from '$lib/assets/images/projects/obstetraconecta.webp';
	import diapis from '$lib/assets/images/projects/diapis.webp';
	import peraltaasociados from '$lib/assets/images/projects/peraltaasociados.webp';

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
				'Plataforma de control de informes de control para el GORE Junín utilizando tecnologías modernas e IA para alertar a los responsables y eliminar el riesgo de responsabilidades legales.',
			image: junin360,
			tags: ['SvelteKit', 'Supabase', 'OpenRouter', 'N8N'],
			href: '/proyectos/junin360',
			link: 'https://junin360.com/'
		},
		{
			id: 2,
			title: 'MediRoosevelt',
			category: 'HealthTech Innovation',
			description:
				'Proyecto para los alumnos de la escuela profesional de Medicina Humana de la Universidad Roosevelt, ganó el primer puesto en la Expociencia 2025 - II.',
			image: mediroosevelt,
			tags: ['Svelte', 'Convex', 'TypeScript', 'Gemini API'],
			href: '/proyectos/mediroosevelt',
			link: 'https://mediroosevelt.com/',
			video: 'https://www.youtube.com/watch?v=2RlIn3JFajc'
		},
		{
			id: 3,
			title: 'Farmape',
			category: 'HealthTech Innovation',
			description:
				'Proyecto para los alumnos de la escuela profesional de Farmacia de la Universidad Roosevelt, ganó el primer puesto en la Expociencia 2025 - II.',
			image: farmape,
			tags: ['Svelte', 'Convex', 'TypeScript', 'Gemini API'],
			href: '/proyectos/farmape',
			link: 'https://www.farmape.net/',
			video: 'https://www.youtube.com/watch?v=6-3bhIxR4-k'
		},
		{
			id: 4,
			title: 'Obstetra Conecta',
			category: 'HealthTech Innovation',
			description:
				'Proyecto para las alumnas de la escuela profesional de Obstetricia de la Universidad Roosevelt, ganó el segundo puesto en la Expociencia 2025 - II.',
			image: obstetraconecta,
			tags: ['Svelte', 'Convex', 'TypeScript', 'Gemini API'],
			href: '/proyectos/obstetraconecta',
			link: 'https://www.obstetraconecta.com/',
			video: 'https://www.youtube.com/watch?v=tVvpd5Wp98k'
		},
		{
			id: 5,
			title: 'Diapis',
			category: 'EduTech Innovation',
			description:
				'Sistema de IA que revoluciona el aprendizaje en el aula. Genera rondas de preguntas y respuestas personalizadas a partir del material de clase para impulsar la atención y la participación estudiantil.',
			image: diapis,
			tags: ['SvelteKit', 'Convex', 'Livekit', 'Gemini API'],
			href: '/proyectos/diapis',
			link: 'https://diapis.vercel.app/',
			video: 'https://www.youtube.com/watch?v=nHPqMsQJLFw'
		},
		{
			id: 6,
			title: 'Peralta Asociados',
			category: 'LegalTech',
			description:
				'Construcción de identidad digital de alto impacto para el estudio jurídico. Sitio web diseñado con la arquitectura más moderna (Astro/Tailwind) para garantizar la máxima velocidad, posicionamiento SEO y la atracción de nuevos clientes.',
			image: peraltaasociados,
			tags: ['Astro', 'Tailwind', 'Netlify Forms'],
			href: '/proyectos/peralta-asociados',
			link: 'https://peraltaasociados.com/'
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
	</div>
</section>

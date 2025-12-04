<script lang="ts">
	import { fly } from 'svelte/transition';
	import { ArrowUpRight } from '@lucide/svelte';
	import CardProject from './CardProject.svelte';

	type Project = {
		id: number;
		title: string;
		category: string;
		description: string;
		image: string;
		tags: string[];
		href: string;
	};

	// Mock Data: Proyectos seleccionados para mostrar nicho (IA + Arquitectura)
	const projects: Project[] = [
		{
			id: 1,
			title: 'Nexus AI Analytics',
			category: 'Inteligencia Artificial',
			description:
				'Dashboard de procesamiento de datos en tiempo real capaz de analizar 1M+ de registros por segundo utilizando modelos predictivos para la toma de decisiones.',
			image:
				'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
			tags: ['SvelteKit', 'Python', 'TensorFlow'],
			href: '/proyectos/nexus'
		},
		{
			id: 2,
			title: 'Vault Financial',
			category: 'Fintech',
			description:
				'Plataforma de gestión de activos digitales con seguridad de grado militar, sincronización de estado global instantánea y latencia sub-100ms.',
			image:
				'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop',
			tags: ['Convex', 'TypeScript', 'Web3'],
			href: '/proyectos/vault'
		},
		{
			id: 3,
			title: 'Orbital SaaS',
			category: 'Enterprise Architecture',
			description:
				'Sistema escalable multi-tenant diseñado para orquestar flujos de trabajo complejos en corporaciones multinacionales, reduciendo la carga operativa un 40%.',
			image:
				'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
			tags: ['Bun', 'Tailwind', 'PostgreSQL'],
			href: '/proyectos/orbital'
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

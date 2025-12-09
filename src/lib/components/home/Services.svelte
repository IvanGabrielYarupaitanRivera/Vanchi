<script lang="ts">
	import { fly } from 'svelte/transition';
	import CardService from './CardService.svelte';
	import computer from '$lib/assets/images/icons/computer.png';
	import cerebro from '$lib/assets/images/icons/cerebro.png';

	type Service = {
		id: number;
		title: string;
		description: string;
		image?: string;
	};

	const services: Service[] = [
		{
			id: 1,
			title: 'Consultoría en IA',
			description:
				'Asesoramos a empresas sobre cómo integrar soluciones de inteligencia artificial para optimizar procesos y mejorar la toma de decisiones.',
			image: computer
		},
		{
			id: 2,
			title: 'Desarrollo de Aplicaciones',
			description:
				'Creamos aplicaciones web y móviles a medida que se adaptan a las necesidades específicas de tu negocio.',
			image: cerebro
		}
	];
</script>

<section class="w-full py-20 lg:py-32" id="servicios">
	<div class="container mx-auto px-4">
		<!-- Header de Sección -->
		<div class="mb-8 text-center">
			<h2 in:fly={{ y: 30, duration: 800, delay: 200 }} class="mb-4 text-3xl font-bold lg:text-5xl">
				Servicios que <span
					class="bg-linear-to-r from-primary via-primary to-primary bg-clip-text font-serif text-transparent italic"
					>Ofrecemos.</span
				>
			</h2>
			<p
				in:fly={{ y: 30, duration: 800, delay: 400 }}
				class="mx-auto max-w-2xl text-base text-base-content/60 lg:text-lg"
			>
				Desde consultoría en IA hasta desarrollo de aplicaciones modernas personalizadas, ofrecemos
				soluciones integrales para transformar tu negocio y potenciar tu presencia digital.
			</p>
		</div>

		<!-- Grid de Servicios -->
		<div class="grid grid-cols-1 gap-8 py-8 lg:grid-cols-2">
			{#each services as service, i}
				<CardService {service} {i} />
			{/each}
		</div>
	</div>
</section>

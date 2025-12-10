<script lang="ts">
	import { fly } from 'svelte/transition';
	import CardService from './CardService.svelte';
	import computer from '$lib/assets/images/icons/2.jpg';
	import cerebro from '$lib/assets/images/icons/1.jpg';
	import ia from '$lib/assets/images/icons/3.jpg';
	import cloud from '$lib/assets/images/icons/4.jpg';

	type Service = {
		id: number;
		title: string;
		description: string;
		image?: string;
		span?: string;
	};

	const services: Service[] = [
		{
			id: 1,
			title: 'Consultoría Estratégica IA',
			description:
				'Arquitectura de sistemas inteligentes y optimización de procesos mediante algoritmos de vanguardia.',
			image: cerebro,
			span: 'lg:col-span-2' // Destacado ancho
		},
		{
			id: 2,
			title: 'Desarrollo Full-Stack',
			description: 'Aplicaciones web reactivas y escalables con arquitectura moderna.',
			image: computer,
			span: 'lg:col-span-1'
		},
		{
			id: 3,
			title: 'Diseño UI/UX Premium',
			description: 'Interfaces inmersivas que fusionan arte digital con funcionalidad intuitiva.',
			image: ia,
			span: 'lg:col-span-1'
		},
		{
			id: 4,
			title: 'Infraestructura Cloud',
			description:
				'Despliegue robusto y escalable para asegurar que tu negocio opere sin interrupciones.',
			image: cloud,
			span: 'lg:col-span-2' // Destacado ancho
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

<script lang="ts">
	import { fly } from 'svelte/transition';
	import CardService from './CardService.svelte';
	import estrella from '$lib/assets/images/services/estrella.webp';
	import cursor from '$lib/assets/images/services/cursor.webp';
	import pincel from '$lib/assets/images/services/pincel.webp';
	import nube from '$lib/assets/images/services/nube.webp';

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
			title: 'Inteligencia Artificial',
			description:
				'Implementamos herramientas de IA para automatizar tareas repetitivas, analizar grandes volúmenes de información y ayudarle a tomar mejores decisiones para que su negocio crezca más rápido.',
			image: estrella,
			span: 'lg:col-span-2'
		},
		{
			id: 2,
			title: 'Desarrollo de Sistemas',
			description:
				'Construimos plataformas digitales a la medida, seguras y sencillas de usar, que organizan y controlan los procesos internos de su empresa para maximizar la eficiencia.',
			image: cursor,
			span: 'lg:col-span-1'
		},
		{
			id: 3,
			title: 'Sitios Web de Alto Impacto',
			description:
				'Creamos páginas web ultrarrápidas, diseñadas para aparecer en los primeros lugares de Google y enfocadas en atraer y convertir a sus clientes ideales.',
			image: pincel,
			span: 'lg:col-span-1'
		},
		{
			id: 4,
			title: 'Infraestructura y Soporte',
			description:
				'Nos encargamos de que sus sistemas digitales funcionen siempre sin fallos, con la capacidad de crecer y manejar picos de tráfico sin interrupciones o costos innecesarios.',
			image: nube,
			span: 'lg:col-span-2'
		}
	];
</script>

<section class="w-full py-20 lg:py-32" id="servicios">
	<div class="container mx-auto px-4">
		<!-- Header de Sección -->
		<div class="mb-8 text-center">
			<h2 in:fly={{ y: 30, duration: 800, delay: 200 }} class="mb-4 text-3xl font-bold lg:text-5xl">
				Servicios que
				<span
					class="bg-linear-to-r from-primary via-primary to-primary bg-clip-text font-serif text-transparent italic"
				>
					Ofrecemos.
				</span>
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

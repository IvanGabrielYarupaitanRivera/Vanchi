<script lang="ts">
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/servicios/consultoria/Hero.svelte';
	import Body from '$lib/components/servicios/consultoria/Body.svelte';
	import PageFooter from '$lib/components/servicios/consultoria/Footer.svelte';
	import type { ConsultingProject } from '$lib/components/servicios/consultoria/Body.svelte';

	const projects: readonly ConsultingProject[] = [
		{
			slug: 'peralta-asociados',
			client: 'Peralta Asociados',
			name: 'Consultoría digital para estudio de abogados en Huancavelica',
			result: 'Análisis completo de presencia digital. Implementación de sitio web profesional con Astro. Optimización SEO. Integración de Google My Business. 80 % de incremento en captación de clientes online.'
		},
		{
			slug: 'junin360',
			client: 'Gobierno Regional de Junín',
			name: 'Consultoría de automatización para gestión de informes',
			result: 'Diagnóstico de procesos manuales en la gestión de informes de control. Identificación de cuellos de botella. Hoja de ruta para digitalización. Implementación de sistema completo con notificaciones automáticas.'
		}
	] as const;

	const author = 'Ivan Yarupaitan Rivera';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Consultoría de automatización con IA para empresas | Vanchi',
		description:
			'Consultoría de inteligencia artificial para empresas en Huancayo, Junín y Perú. Análisis de operación, detección de cuellos de botella y hoja de ruta concreta. Primera consulta sin costo.',
		url: 'https://www.vanchi.pro/servicios/consultoria',
		provider: {
			'@type': 'Person',
			'@id': 'https://www.vanchi.pro/#person',
			name: 'Ivan Yarupaitan'
		}
	};

	const structuredDataJson = JSON.stringify(structuredData).replace(/</g, '\\u003c');
</script>

<SEO
	title="Consultoría de IA y automatización para empresas en Huancayo y Perú | Vanchi"
	description="Sabes que necesitas automatizar pero no sabes por donde empezar. Te ayudo a identificar que procesos automatizar primero. Analisis de operacion, deteccion de cuellos de botella y hoja de ruta concreta. Primera consulta sin costo."
	keywords="consultoria de automatizacion para empresas, que procesos automatizar en mi negocio, consultoria ia huancayo, diagnostico de automatizacion peru, roadmap automatizacion procesos"
	url="https://www.vanchi.pro/servicios/consultoria"
/>

<svelte:head>
	<svelte:element this={'script'} type="application/ld+json">
		{structuredDataJson}
	</svelte:element>
</svelte:head>

<Hero />

<Body {projects} />

<PageFooter {author}>
	<a href={resolve('/(main)/sectores')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Sectores</a>
	<a href={resolve('/(main)/precios')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Precios</a>
	<a href={resolve('/(main)/proyectos')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Proyectos</a>
	<a href={resolve('/(main)/contacto')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Contacto</a>
</PageFooter>

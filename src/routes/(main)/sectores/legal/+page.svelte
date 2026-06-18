<script lang="ts">
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/sectores/legal/Hero.svelte';
	import Body from '$lib/components/sectores/legal/Body.svelte';
	import PageFooter from '$lib/components/sectores/legal/Footer.svelte';
	import type { LegalProject } from '$lib/components/sectores/legal/Body.svelte';

	const projects: readonly LegalProject[] = [
		{
			slug: 'junin360',
			id: '001',
			name: 'Sistema de gestión de informes de control',
			client: 'Gobierno Regional de Junín',
			result: '50% reducción en tiempo de gestión. Notificaciones automatizadas por WhatsApp y email. Generación de PDFs sin intervención manual. Desplegado en easypanel con n8n.'
		},
		{
			slug: 'peralta-asociados',
			id: '002',
			name: 'Sitio web profesional para estudio jurídico',
			client: 'Peralta Asociados',
			result: 'Presencia digital 100%. 80% incremento en captación de clientes. SEO optimizado. Primera experiencia profesional con cliente real en Huancavelica.'
		}
	] as const;

	const author = 'Ivan Yarupaitan Rivera';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: 'Automatización con IA para el sector Legal en Perú | Vanchi',
		description:
			'Implementación de agentes de IA para estudios jurídicos en Huancayo, Junín y Perú. Indexación de expedientes, notificaciones automáticas y gestión de plazos procesales con GaaS.',
		url: 'https://www.vanchi.pro/sectores/legal',
		about: {
			'@type': 'Thing',
			name: 'Automatización de procesos legales con IA',
			description:
				'Agentes de IA autónomos para el sector legal: indexación semántica de expedientes, seguimiento automatizado de plazos procesales y notificaciones multicanal.'
		},
		provider: {
			'@type': 'Person',
			'@id': 'https://www.vanchi.pro/#person',
			name: 'Ivan Yarupaitan'
		}
	};

	const structuredDataJson = JSON.stringify(structuredData).replace(/</g, '\\u003c');
</script>

<SEO
	title="Automatización de expedientes legales con IA en Junín | Vanchi"
	description="¿Plazos procesales vencidos? Agentes de IA que indexan, notifican y hacen seguimiento automático de cada expediente. Implementación GaaS para estudios jurídicos en Huancayo y Perú."
	keywords="gestion de expedientes legales con ia, automatizar seguimiento de casos legales, reducir errores en documentos juridicos, software legal para estudios en junin, evitar que venzan plazos procesales"
	url="https://www.vanchi.pro/sectores/legal"
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

<script lang="ts">
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/sectores/Hero.svelte';
	import SectorCards from '$lib/components/sectores/SectorCards.svelte';
	import PageFooter from '$lib/components/sectores/Footer.svelte';
	import type { Sector } from '$lib/components/sectores/SectorCards.svelte';

	const sectors: readonly Sector[] = [
		{
			slug: 'salud',
			id: '01',
			label: 'Clínico',
			title: 'Salud ',
			pain: 'Cuellos de botella en admisión y desabastecimiento farmacéutico. Intervenciones enfocadas en reducir la carga administrativa del personal médico.',
			activeCount: '03 Sistemas Activos',
			interventions: [
				{ id: '001', name: 'Recursos médicos + chatbot IA', client: 'MediRoosevelt' },
				{ id: '002', name: 'Recursos farmacéuticos + chatbot IA', client: 'Farmape' },
				{ id: '003', name: 'Obstetricia + calculadora gestacional', client: 'Obstetra Conecta' }
			]
		},
		{
			slug: 'legal',
			id: '02',
			label: 'Jurídico',
			title: 'Legal ',
			pain: 'Riesgo de pérdida de plazos procesales por búsqueda manual en miles de folios físicos y digitales.',
			activeCount: '02 Sistemas Activos',
			interventions: [
				{
					id: '001',
					name: 'Gestión de informes  ',
					client: 'Gobierno Regional de Junín'
				},
				{ id: '002', name: 'Sitio web para estudio jurídico', client: 'Peralta Asociados' }
			]
		},
		{
			slug: 'educacion',
			id: '03',
			label: 'Académico',
			title: 'Educación',
			pain: 'Desbordamiento de tutorías por alta demanda estudiantil en plataformas virtuales.',
			activeCount: 'Agente 24/7',
			interventions: [
				{ id: '001', name: 'Tutor AI en plataforma educativa', client: 'ENCAP ' },
				{ id: '002', name: 'Sitio web institucional', client: 'Colegio Educere' },
				{ id: '003', name: 'Preguntas interactivas con IA', client: 'Diapis' }
			]
		}
	] as const;

	const author = 'Ivan Yarupaitan Rivera';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: 'Sectores donde implemento Inteligencia Artificial | Vanchi',
		description:
			'Agentes de IA para salud, legal y educación en Perú. Automatización de procesos específicos por industria con GaaS (Generative Agent as a Service).',
		url: 'https://www.vanchi.pro/sectores',
		about: {
			'@type': 'Thing',
			name: 'GaaS — Generative Agent as a Service',
			description:
				'Metodología de implementación de agentes de IA autónomos orientados a resultados. Outcome-based, goal-driven, con reasoning loop, tool use y human-in-the-loop.'
		},
		hasPart: sectors.map((s) => ({
			'@type': 'WebPage',
			name: `Automatización con IA para el sector ${s.title} en Perú`,
			url: `https://www.vanchi.pro/sectores/${s.slug}`
		}))
	};

	const structuredDataJson = JSON.stringify(structuredData).replace(/</g, '\\u003c');
</script>

<SEO
	title="Automatización con IA por sector: Salud, Legal y Educación | Vanchi"
	description="¿Tu sector pierde plata por procesos manuales? Agentes de IA para clínicas, estudios jurídicos y colegios en Huancayo, Junín y Perú. Implementación GaaS orientada a resultados."
	keywords="automatizacion ia por sector, agentes ia salud huancayo, automatizacion legal ia junin, ia para colegios peru, sectores automatizacion inteligente"
	url="https://www.vanchi.pro/sectores"
/>

<svelte:head>
	<svelte:element this={'script'} type="application/ld+json">
		{structuredDataJson}
	</svelte:element>
</svelte:head>

<Hero />

<SectorCards {sectors} />

<PageFooter {author}>
	<a
		href={resolve('/(main)/precios')}
		class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Precios</a
	>
	<a
		href={resolve('/(main)/proyectos')}
		class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Proyectos</a
	>
	<a
		href={resolve('/(main)/contacto')}
		class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Contacto</a
	>
	<a
		href={resolve('/(main)/ivan-yarupaitan-rivera')}
		class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Sobre mí</a
	>
</PageFooter>

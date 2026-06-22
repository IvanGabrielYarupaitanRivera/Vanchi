<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/ui/Hero/Hero.svelte';
	import ServiceCards from '$lib/components/servicios/ServiceCards.svelte';
	import PageFooter from '$lib/components/servicios/Footer.svelte';
	import type { Service } from '$lib/components/servicios/ServiceCards.svelte';

	const services: readonly Service[] = [
		{
			slug: 'agentes-ia',
			id: '01',
			title: 'Agentes IA',
			pain: '¿Tu personal pierde horas en tareas repetitivas?',
			desc: 'Agentes autónomos que responden clientes, agendan citas, procesan datos y gestionan flujos completos. Sin que nadie tenga que operarlos.',
			proof: 'Caso real: ENCAP — Tutor AI 24/7 con 95% de satisfacción.'
		},
		{
			slug: 'automatizacion',
			id: '02',
			title: 'Automatización',
			pain: '¿Tus sistemas actuales no se comunican entre sí?',
			desc: 'Conecto tus herramientas existentes para que trabajen solas. WhatsApp + Google Calendar + base de datos + notificaciones. Todo orquestado.',
			proof: 'Caso real: Junín360 — 50% menos tiempo de gestión con notificaciones automáticas.'
		},
		{
			slug: 'consultoria',
			id: '03',
			title: 'Consultoría',
			pain: '¿No sabés por dónde empezar a automatizar?',
			desc: 'Te ayudo a identificar qué procesos automatizar primero. Análisis de tu operación, detección de cuellos de botella y hoja de ruta concreta.',
			proof: 'Sin compromiso. Primera consulta sin costo.'
		}
	] as const;

	const author = 'Ivan Yarupaitan Rivera';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Servicios de implementación de agentes de IA para empresas | Vanchi',
		description:
			'Agentes de IA autónomos, automatización de procesos y consultoría de inteligencia artificial para empresas en Huancayo, Junín y Perú. Implementación GaaS orientada a resultados.',
		url: 'https://www.vanchi.pro/servicios',
		provider: {
			'@type': 'Person',
			'@id': 'https://www.vanchi.pro/#person',
			name: 'Ivan Yarupaitan',
			url: 'https://www.vanchi.pro'
		},
		offers: services.map((s) => ({
			'@type': 'Offer',
			name: s.title,
			description: s.desc,
			url: `https://www.vanchi.pro/servicios/${s.slug}`
		}))
	};

	const structuredDataJson = JSON.stringify(structuredData).replace(/</g, '\\u003c');
</script>

<SEO
	title="Agentes de IA, Automatización y Consultoría para empresas | Vanchi"
	description="¿Tu personal pierde horas en tareas repetitivas? Agentes de IA autónomos, automatización de procesos y consultoría de inteligencia artificial. Implementación GaaS en Huancayo, Junín y Perú."
	keywords="servicios de automatizacion inteligente para empresas, como automatizar procesos repetitivos de mi negocio, soluciones de ia para pymes huancayo, que procesos de mi empresa puedo automatizar"
	url="https://www.vanchi.pro/servicios"
/>

<svelte:head>
	<svelte:element this={'script'} type="application/ld+json">
		{structuredDataJson}
	</svelte:element>
</svelte:head>

<Hero
	level="secondary"
	title="Deja de operar software. Empeza a recibir resultados"
	subtitle="No vendo licencias. Construyo agentes de IA que ejecutan procesos completos sin que nadie tenga que hacer clic. Tu defines el objetivo. El agente lo completa."
	action_label="Conversemos"
	action_onclick={() => goto(resolve('/(main)/contacto'))}
/>

<ServiceCards {services} />

<PageFooter {author}>
	<a href={resolve('/(main)/sectores')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Sectores</a>
	<a href={resolve('/(main)/precios')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Precios</a>
	<a href={resolve('/(main)/proyectos')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Proyectos</a>
	<a href={resolve('/(main)/contacto')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Contacto</a>
</PageFooter>

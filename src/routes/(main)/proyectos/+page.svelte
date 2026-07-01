<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/ui/Hero/Hero.svelte';
	import Body from '$lib/components/proyectos/Body.svelte';
	import PageFooter from '$lib/components/proyectos/Footer.svelte';
	import { PROJECTS } from '$lib/constants/projects';
	import type { ProjectItem } from '$lib/components/proyectos/Body.svelte';

	const projects: readonly ProjectItem[] = PROJECTS.map((p) => ({
		id: p.id,
		title: p.title,
		category: p.category,
		description: p.description,
		tags: p.tags,
		slug: p.href.replace('/proyectos/', ''),
		date: p.date
	}));

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: 'Casos de éxito en automatización con IA | Vanchi',
		description:
			'9 casos de exito reales de automatizacion con IA en Huancayo, Junin y Peru. Agentes inteligentes, automatización de procesos y desarrollo web implementados con GaaS.',
		url: 'https://www.vanchi.pro/proyectos',
		mainEntity: {
			'@type': 'ItemList',
			itemListElement: projects.map((p, i) => ({
				'@type': 'ListItem',
				position: i + 1,
				item: {
					'@type': 'CreativeWork',
					name: p.title,
					url: `https://www.vanchi.pro/proyectos/${p.slug}`
				}
			}))
		}
	};

	const structuredDataJson = JSON.stringify(structuredData).replace(/</g, '\\u003c');
</script>

<SEO
	title="Casos de exito en automatizacion con IA | Vanchi"
	description="9 casos de exito reales de automatizacion con IA en Huancayo, Junin y Peru. Agentes inteligentes, automatización de procesos y desarrollo web. Proyectos implementados con metodologia GaaS."
	keywords="casos de exito automatizacion con ia, empresas que usan inteligencia artificial en peru, proyectos de ia implementados, sistema de gestion clinica molaric, automatizacion de estudios juridicos junin360"
	url="https://www.vanchi.pro/proyectos"
	breadcrumbs={[
		{ name: 'Proyectos', item: '/proyectos' }
	]}
/>

<svelte:head>
	<svelte:element this={'script'} type="application/ld+json">
		{structuredDataJson}
	</svelte:element>
</svelte:head>

<Hero
	level="secondary"
	title="Casos de éxito en automatización con IA"
	subtitle="{projects.length} proyectos reales de agentes de IA, automatización de procesos y desarrollo web. Implementación GaaS para empresas en salud, legal y educación en Huancayo, Junín y Peru."
	action_label="Proponer un proyecto"
	action_onclick={() => goto(resolve('/(main)/contacto'))}
/>

<Body {projects} />

<PageFooter />

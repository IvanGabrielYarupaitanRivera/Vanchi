<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/ui/Hero/Hero.svelte';
	import Body from '$lib/components/metodologia/Body.svelte';
	import PageFooter from '$lib/components/metodologia/Footer.svelte';

	const author = 'Ivan Yarupaitan Rivera';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'TechArticle',
		name: 'GaaS — Generative Agent as a Service: Metodología de implementación de agentes de IA autónomos',
		description:
			'Metodología de implementación de agentes de IA autónomos orientados a resultados. Outcome-Based, Goal-Driven, Reasoning Loop, Tool Use, Persistent Memory, Self-Improvement, Multi-Agent, Proactive, Guardrails y Human-in-the-Loop.',
		url: 'https://www.vanchi.pro/metodologia',
		author: {
			'@type': 'Person',
			'@id': 'https://www.vanchi.pro/#person',
			name: 'Ivan Yarupaitan Rivera',
			url: 'https://www.vanchi.pro'
		},
		about: {
			'@type': 'Thing',
			name: 'Generative Agent as a Service (GaaS)',
			description:
				'Paradigma de implementación de software donde agentes de IA autónomos ejecutan procesos completos orientados a resultados medibles, sin intervención humana constante. Definido por 10 características: Outcome-Based, Goal-Driven, Reasoning Loop, Tool Use, Persistent Memory, Self-Improvement, Multi-Agent, Proactive, Guardrails y Human-in-the-Loop.'
		}
	};

	const structuredDataJson = JSON.stringify(structuredData).replace(/</g, '\\u003c');
</script>

<SEO
	title="GaaS: Metodologia de agentes IA autonomos | Vanchi"
	description="El software no debería necesitarte para funcionar. GaaS (Generative Agent as a Service) es la metodología de agentes IA que ejecutan procesos completos sin intervención humana. Outcome-Based, Goal-Driven, 10 características."
	keywords="software que trabaja solo, que es gaas, software sin intervencion humana, automatizacion real vs dashboard, diferencia entre saas y agentes ia, metodologia agentes autonomos"
	url="https://www.vanchi.pro/metodologia"
/>

<svelte:head>
	<svelte:element this={'script'} type="application/ld+json">
		{structuredDataJson}
	</svelte:element>
</svelte:head>

<Hero
	level="secondary"
	title="El software no debería necesitarte para funcionar"
	subtitle="Compraste un SaaS. Capacitaste a tu equipo. Y aún así todo depende de que alguien haga clic. GaaS es software que recibe un objetivo y lo ejecuta solo."
	action_label="Conocer GaaS"
	action_onclick={() => goto(resolve('/(main)/contacto'))}
/>

<Body />

<PageFooter {author}>
	<a href={resolve('/(main)/sectores')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Sectores</a>
	<a href={resolve('/(main)/precios')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Precios</a>
	<a href={resolve('/(main)/proyectos')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Proyectos</a>
	<a href={resolve('/(main)/contacto')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Contacto</a>
</PageFooter>

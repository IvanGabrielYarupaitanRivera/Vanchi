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
		'@graph': [
			{
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
			},
			{
				'@type': 'FAQPage',
				mainEntity: [
					{
						'@type': 'Question',
						name: '¿Qué es GaaS?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'GaaS (Generative Agent as a Service) es una metodología de software donde agentes de IA autónomos ejecutan procesos completos sin intervención humana. A diferencia del SaaS tradicional, no entregas una herramienta que alguien debe operar: entregas un objetivo y el agente lo completa solo.'
						}
					},
					{
						'@type': 'Question',
						name: '¿Cuál es la diferencia entre SaaS y GaaS?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'SaaS entrega software que alguien debe operar (un dashboard, una interfaz, clics). GaaS entrega resultados: defines un objetivo y un agente de IA lo ejecuta de principio a fin. SaaS es una herramienta; GaaS es un trabajador autónomo.'
						}
					},
					{
						'@type': 'Question',
						name: '¿Cómo funciona GaaS?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'Un agente GaaS recibe un objetivo de negocio (ej: gestionar citas médicas), analiza el contexto, genera sus propios pasos, usa herramientas externas (WhatsApp, Google Calendar, base de datos) y ejecuta el proceso completo. Solo pide intervención humana cuando es estrictamente necesario.'
						}
					},
					{
						'@type': 'Question',
						name: '¿Qué industrias pueden usar GaaS?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'GaaS es especialmente efectivo en salud (gestión de citas, recordatorios), legal (seguimiento de expedientes, plazos procesales) y educación (tutores IA, automatización de matrículas). Cualquier industria con procesos repetitivos y alta carga administrativa puede beneficiarse.'
						}
					},
					{
						'@type': 'Question',
						name: '¿Cuánto cuesta implementar GaaS?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'Los precios son outcome-based (por resultados), no por horas. Los rangos van desde USD 2,000 para agentes simples hasta USD 15,000+ para orquestaciones multi-agente. Cada proyecto se estructura en hitos de resultado medible.'
						}
					}
				]
			}
		]
	};

	const structuredDataJson = JSON.stringify(structuredData).replace(/</g, '\\u003c');
</script>

<SEO
	title="GaaS: Metodologia de agentes IA autonomos | Vanchi"
	description="El software no debería necesitarte para funcionar. GaaS (Generative Agent as a Service) es la metodología de agentes IA que ejecutan procesos completos sin intervención humana. Outcome-Based, Goal-Driven, 10 características."
	keywords="software que trabaja solo, que es gaas, software sin intervencion humana, automatizacion real vs dashboard, diferencia entre saas y agentes ia, metodologia agentes autonomos"
	url="https://www.vanchi.pro/metodologia"
	breadcrumbs={[
		{ name: 'Metodologia', item: '/metodologia' }
	]}
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

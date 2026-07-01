<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/ui/Hero/Hero.svelte';
	import Body from '$lib/components/servicios/agentes-ia/Body.svelte';
	import PageFooter from '$lib/components/servicios/agentes-ia/Footer.svelte';
	import type { AgentProject } from '$lib/components/servicios/agentes-ia/Body.svelte';

	const projects: readonly AgentProject[] = [
		{
			slug: 'encap',
			client: 'ENCAP',
			name: 'Tutor AI para plataforma educativa',
			result: 'Widget de chat con inteligencia artificial integrado en la plataforma ENCAP. 95 % de satisfacción en estudiantes. 80 % menos tiempo de respuesta a preguntas. El agente conoce cada curso y responde con el contexto específico de la materia.'
		},
		{
			slug: 'molaric',
			client: 'Molaric',
			name: 'Agente IA 24/7 para clínicas dentales vía WhatsApp',
			result: 'Agente conversacional multi-tenant que agenda, reprograma y cancela citas mediante conversaciones naturales. Sincronización automática con Google Calendar. Recordatorios inteligentes con confirmación. Transcripción de voz para audios de WhatsApp.'
		},
		{
			slug: 'mediroosevelt',
			client: 'MediRoosevelt',
			name: 'Plataforma de recursos médicos + chatbot IA',
			result: '1er puesto Expociencia 2025-II. Chatbot con acceso a información médica validada por la Escuela de Medicina Humana. Los estudiantes y docentes consultan recursos académicos en lenguaje natural.'
		},
		{
			slug: 'obstetraconecta',
			client: 'Obstetra Conecta',
			name: 'Plataforma de obstetricia + chatbot gestacional',
			result: '2do puesto Expociencia 2025-II. Calculadora gestacional y chatbot obstétrico con IA. Recursos educativos para madres gestantes. Validación académica de todas las respuestas.'
		}
	] as const;

	const author = 'Ivan Yarupaitan Rivera';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Desarrollo de Agentes de IA autónomos para empresas | Vanchi',
		description:
			'Agentes de IA goal-oriented que ejecutan procesos completos sin intervención humana. Implementación GaaS para empresas en Huancayo, Junín y Perú. Casos reales: ENCAP, Molaric, MediRoosevelt.',
		url: 'https://www.vanchi.pro/servicios/agentes-ia',
		provider: {
			'@type': 'Person',
			'@id': 'https://www.vanchi.pro/#person',
			name: 'Ivan Yarupaitan'
		}
	};

	const structuredDataJson = JSON.stringify(structuredData).replace(/</g, '\\u003c');
</script>

<SEO
	title="Agentes de IA autonomos para tu empresa | Vanchi"
	description="¿Tu equipo pierde horas en tareas repetitivas? Implemento agentes de IA que trabajan solos: responden clientes, agendan citas, procesan datos. Goal-oriented, sin dashboards. Metodología GaaS en Huancayo, Junín y Perú."
	keywords="agente ia autonomo para empresas, automatizar procesos con agentes de inteligencia artificial, agente virtual para negocio huancayo, implementar agente ia peru, outsourcing de ia para pymes"
	url="https://www.vanchi.pro/servicios/agentes-ia"
/>

<svelte:head>
	<svelte:element this={'script'} type="application/ld+json">
		{structuredDataJson}
	</svelte:element>
</svelte:head>

<Hero
	level="secondary"
	title="Tu equipo pierde horas en tareas que un agente podría hacer solo"
	subtitle="No es un chatbot. Es un agente autónomo que recibe un objetivo, ejecuta las acciones necesarias y reporta resultados. Sin clics. Sin dashboards."
	action_label="Implementar un agente"
	action_onclick={() => goto(resolve("/(main)/contacto"))}
	action_secondary_label="Ver casos por sector"
	action_secondary_onclick={() => goto(resolve("/(main)/sectores"))}
/>

<Body {projects} />

<PageFooter {author}>
	<a href={resolve('/(main)/sectores')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Sectores</a>
	<a href={resolve('/(main)/precios')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Precios</a>
	<a href={resolve('/(main)/proyectos')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Proyectos</a>
	<a href={resolve('/(main)/contacto')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Contacto</a>
</PageFooter>

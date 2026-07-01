<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/ui/Hero/Hero.svelte';
	import Body from '$lib/components/servicios/automatizacion/Body.svelte';
	import PageFooter from '$lib/components/servicios/automatizacion/Footer.svelte';
	import type { AutomationProject } from '$lib/components/servicios/automatizacion/Body.svelte';

	const projects: readonly AutomationProject[] = [
		{
			slug: 'junin360',
			client: 'Gobierno Regional de Junín',
			name: 'Automatización de notificaciones y gestión de informes',
			result: 'Sistema que asigna informes de control a responsables, genera notificaciones automáticas por WhatsApp y correo, y da seguimiento hasta la subsanación. 50 % menos tiempo de gestión. 80 % de satisfacción del usuario.'
		},
		{
			slug: 'molaric',
			client: 'Molaric',
			name: 'Sincronización bidireccional con Google Calendar',
			result: 'Cada cita agendada vía WhatsApp se sincroniza automáticamente con Google Calendar de la clínica. Recordatorios automáticos 24h antes con confirmación vía WhatsApp. Eliminación de errores de doble reserva.'
		},
		{
			slug: 'farmape',
			client: 'Farmape',
			name: 'Plataforma farmacéutica con calculadora de dosis',
			result: 'Sistema que integra información de medicamentos, calculadora de dosis automatizada y chatbot para consultas. Automatización del acceso a información farmacéutica validada.'
		}
	] as const;

	const author = 'Ivan Yarupaitan Rivera';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Automatización de procesos empresariales con IA | Vanchi',
		description:
			'Automatización de flujos de trabajo, notificaciones multicanal, sincronización de calendarios e integración de herramientas. Implementación GaaS para empresas en Huancayo, Junín y Perú.',
		url: 'https://www.vanchi.pro/servicios/automatizacion',
		provider: {
			'@type': 'Person',
			'@id': 'https://www.vanchi.pro/#person',
			name: 'Ivan Yarupaitan'
		}
	};

	const structuredDataJson = JSON.stringify(structuredData).replace(/</g, '\\u003c');
</script>

<SEO
	title="Automatizacion de procesos con IA para empresas | Vanchi"
	description="¿Tus sistemas no se comunican entre sí? Automatizo flujos completos: WhatsApp, Google Calendar, correo, base de datos. Todo orquestado para que trabaje solo. Metodología GaaS en Junín y Perú."
	keywords="automatizar procesos de mi empresa con ia, integracion whatsapp google calendar automatizada, automatizacion de procesos en junin, workflow automation peru, orquestacion de herramientas ia"
	url="https://www.vanchi.pro/servicios/automatizacion"
/>

<svelte:head>
	<svelte:element this={'script'} type="application/ld+json">
		{structuredDataJson}
	</svelte:element>
</svelte:head>

<Hero
	level="secondary"
	title="Tus herramientas no se hablan. Tus procesos se atoran"
	subtitle="Conecto tus sistemas existentes para que trabajen solos. WhatsApp, Google Calendar, correo electrónico, base de datos, APIs. Todo orquestado."
	action_label="Automatizar mi proceso"
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

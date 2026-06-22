<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/ui/Hero/Hero.svelte';
	import Body from '$lib/components/sectores/educacion/Body.svelte';
	import PageFooter from '$lib/components/sectores/educacion/Footer.svelte';
	import type { EducationProject } from '$lib/components/sectores/educacion/Body.svelte';

	const projects: readonly EducationProject[] = [
		{
			slug: 'encap',
			id: '001',
			name: 'Tutor AI integrado en plataforma educativa',
			client: 'ENCAP',
			result: 'Agente conversacional 24/7. 95% satisfacción de estudiantes. 80% reducción en tiempo de respuesta. 70% más participación en la plataforma. Cliente real, en uso activo.'
		},
		{
			slug: 'colegio-educere',
			id: '002',
			name: 'Sitio web institucional + formularios de admisión',
			client: 'Colegio Educere',
			result: '50% incremento en consultas de admisión. 70% reducción en tasa de rebote. Sitio 100% disponible. Cliente real en Huancayo.'
		},
		{
			slug: 'diapis',
			id: '003',
			name: 'Plataforma de preguntas interactivas con IA',
			client: 'Diapis',
			result: 'Generación de preguntas 5x más rápida. 90% reducción de tiempos muertos en clase. Identificación de áreas de mejora en tiempo real. Usado por estudiantes de la Univ. Roosevelt.'
		}
	] as const;

	const author = 'Ivan Yarupaitan Rivera';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: 'Automatización con IA para el sector Educación en Perú | Vanchi',
		description:
			'Implementación de agentes de IA para colegios y plataformas educativas en Huancayo, Junín y Perú. Tutores IA 24/7, generación automática de preguntas y automatización de matrículas con GaaS.',
		url: 'https://www.vanchi.pro/sectores/educacion',
		about: {
			'@type': 'EducationalOrganization',
			name: 'Automatización de procesos educativos con IA',
			description:
				'Agentes de IA autónomos para el sector educación: tutores inteligentes 24/7, plataformas de preguntas interactivas y gestión automatizada de admisiones.'
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
	title="Automatización de procesos educativos con IA en Huancayo | Vanchi"
	description="¿Tus docentes saturados de consultas repetitivas? Agentes de IA que responden dudas 24/7, generan preguntas automáticas y gestionan matrículas. Implementación GaaS para colegios en Perú."
	keywords="atencion a padres de familia automatizada, reducir carga administrativa en colegios, automatizar matricula y calificaciones, gestion escolar con ia huancayo, tutor ia para plataformas educativas"
	url="https://www.vanchi.pro/sectores/educacion"
/>

<svelte:head>
	<svelte:element this={'script'} type="application/ld+json">
		{structuredDataJson}
	</svelte:element>
</svelte:head>

<Hero
	level="secondary"
	title="Tus administrativos pasan mas tiempo llenando planillas que ayudando alumnos"
	subtitle="Cada hora que un administrativo invierte en papeleo es una hora que un alumno no recibe atencion. Agentes que responden dudas 24/7, gestionan matriculas y liberan a tus docentes."
	action_label="Ver casos"
	action_onclick={() => goto(resolve("/(main)/proyectos"))}
/>

<Body {projects} />

<PageFooter {author}>
	<a href={resolve('/(main)/sectores')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Sectores</a>
	<a href={resolve('/(main)/precios')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Precios</a>
	<a href={resolve('/(main)/proyectos')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Proyectos</a>
	<a href={resolve('/(main)/contacto')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Contacto</a>
</PageFooter>

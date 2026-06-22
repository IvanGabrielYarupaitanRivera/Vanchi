<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/ui/Hero/Hero.svelte';
	import Body from '$lib/components/sectores/salud/Body.svelte';
	import PageFooter from '$lib/components/sectores/salud/Footer.svelte';
	import type { HealthProject } from '$lib/components/sectores/salud/Body.svelte';

	const projects: readonly HealthProject[] = [
		{
			slug: 'mediroosevelt',
			id: '001',
			name: 'Plataforma de recursos médicos + chatbot IA',
			client: 'MediRoosevelt',
			result: '1° puesto Expociencia 2025-II. Acceso 100% a información médica en cualquier momento. Uso responsable de IA validado por la Escuela de Medicina Humana de la Univ. Roosevelt.'
		},
		{
			slug: 'farmape',
			id: '002',
			name: 'Plataforma de recursos farmacéuticos + chatbot IA',
			client: 'Farmape',
			result: '1° puesto Expociencia 2025-II. Calculadora de dosis, información de medicamentos y chatbot para consultas farmacéuticas con IA responsable.'
		},
		{
			slug: 'obstetraconecta',
			id: '003',
			name: 'Plataforma de obstetricia + calculadora gestacional',
			client: 'Obstetra Conecta',
			result: '2° puesto Expociencia 2025-II. Calculadora gestacional, chatbot obstétrico y recursos para madres gestantes con IA validada.'
		},
		{
			slug: 'molaric',
			id: '004',
			name: 'Agente IA 24/7 para clínicas dentales vía WhatsApp',
			client: 'Molaric',
			result: 'Agente conversacional multi-tenant con Google Calendar. Agendamiento 24/7, recordatorios automáticos, transcripción de voz. El fracaso comercial que definió GaaS.'
		}
	] as const;

	const author = 'Ivan Yarupaitan Rivera';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: 'Automatización con IA para el sector Salud en Perú | Vanchi',
		description:
			'Implementación de agentes de IA para clínicas, farmacias y telemedicina en Huancayo, Junín y Perú. Reducción de ausentismo, confirmación de citas 24/7 y automatización de procesos médicos con GaaS.',
		url: 'https://www.vanchi.pro/sectores/salud',
		about: {
			'@type': 'MedicalBusiness',
			name: 'Automatización de procesos médicos con IA',
			description:
				'Agentes de IA autónomos para el sector salud: confirmación de citas, gestión de inventario farmacéutico, chatbots de consulta médica y telemedicina asistida.'
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
	title="Automatización de citas médicas con IA en Huancayo y Perú | Vanchi"
	description="¿Tu clínica pierde plata por pacientes que faltan a sus citas? Agentes de IA que confirman, reagendan y responden consultas 24/7. Implementación GaaS para el sector salud en Junín y Perú."
	keywords="automatizar citas medicas con ia, reducir ausentismo pacientes clinica, agente virtual para consultorios huancayo, confirmar citas por whatsapp automatico, gestion de citas multi sede, ia sector salud peru"
	url="https://www.vanchi.pro/sectores/salud"
/>

<svelte:head>
	<svelte:element this={'script'} type="application/ld+json">
		{structuredDataJson}
	</svelte:element>
</svelte:head>

<Hero
	level="secondary"
	title="Tu clínica pierde plata cada vez que un paciente falta a su cita"
	subtitle="El 30 por ciento de las citas médicas en Perú terminan en ausentismo. Cada una es una hora facturable perdida. Agentes que confirman, reagendan y reducen ese número sin intervención humana."
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

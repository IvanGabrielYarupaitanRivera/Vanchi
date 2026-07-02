import type { CaseStudy } from '$lib/types/project';
import bgMolaric from '$lib/assets/images/projects/bg-molaric.webp';

import dashboardPrincipal from '$lib/assets/images/projects/molaric/dashboardPrincipal.webp';
import gestionPacientes from '$lib/assets/images/projects/molaric/gestionPacientes.webp';
import gestionCitas from '$lib/assets/images/projects/molaric/gestionCitas.webp';
import gestionHorarios from '$lib/assets/images/projects/molaric/gestionHorarios.webp';
import gestionProcedimientos from '$lib/assets/images/projects/molaric/gestionProcedimientos.webp';
import gestionSucursales from '$lib/assets/images/projects/molaric/gestionSucursales.webp';
import conversacionWhatsapp from '$lib/assets/images/projects/molaric/conversacionWhatsapp.webp';
import clinicaDentalLogo from '$lib/assets/icons/logos/clinica-dental.svg';

import SvelteKitLogo from '$lib/assets/icons/technologies/SvelteKitLogo.svelte';
import ConvexLogo from '$lib/assets/icons/technologies/ConvexLogo.svelte';
import TailwindLogo from '$lib/assets/icons/technologies/TailwindLogo.svelte';
import BetterAuthLogo from '$lib/assets/icons/technologies/BetterAuthLogo.svelte';
import TypeScriptLogo from '$lib/assets/icons/technologies/TypeScriptLogo.svelte';
import VercelLogo from '$lib/assets/icons/technologies/VercelLogo.svelte';
import GoogleCalendarLogo from '$lib/assets/icons/technologies/GoogleCalendarLogo.svelte';
import DeepgramLogo from '$lib/assets/icons/technologies/DeepgramLogo.svelte';

export const molaric: CaseStudy = {
	id: 'molaric',
	meta: {
		title: 'Molaric',
		description:
			'Molaric fue mi intento de crear un agente de IA para clínicas dentales que funcionara 24/7 vía WhatsApp: agendaba citas, las sincronizaba con Google Calendar, enviaba recordatorios automáticos y transcribía audios. No consiguió clientes. Pero fue el proyecto donde aprendí cómo un agente puede integrarse con sistemas externos, interactuar con bases de datos y reemplazar procesos humanos completos. El fracaso comercial que definió mi metodología GaaS.',
		tagline: 'El fracaso comercial que me enseñó a construir agentes',
		date: 'Abril 2026',
		role: 'Full-Stack Developer & AI Engineer',
		keywords: [
			'Molaric',
			'Agente IA',
			'Clínicas Dentales',
			'WhatsApp',
			'Google Calendar',
			'Inteligencia Artificial',
			'Caso de aprendizaje',
			'Fracaso comercial'
		],
		stack: ['SvelteKit', 'Convex', 'Vercel AI Gateway', 'Google Calendar', 'TailwindCSS', 'Better Auth'],
		bgHero: {
			src: bgMolaric,
			alt: 'Fondo hero de Molaric'
		},
		ogImage: {
			src: 'https://www.vanchi.pro/images/proyectos/og-molaric.webp',
			alt: 'Imagen OG de Molaric'
		}
	},
	context: {
		client: 'Clínicas Dentales',
		logo: clinicaDentalLogo,
		problem:
			'Las clínicas dentales enfrentan desafíos significativos en la gestión de citas: llamadas telefónicas constantes, pacientes que olvidan sus citas, disponibilidad limitada del personal para atender fuera del horario laboral, y errores en la sincronización del calendario. Los pacientes necesitan una forma rápida y sencilla de agendar citas 24/7, mientras que los doctores requieren un sistema que centralice toda la gestión sin aumentar su carga operativa.',
		constraints: [
			'Atención a pacientes 24/7 sin intervención humana',
			'Sincronización bidireccional automática con Google Calendar',
			'Recordatorios inteligentes con confirmación vía WhatsApp',
			'Interfaz natural vía WhatsApp para pacientes de todas las edades',
			'Dashboard web para que el doctor gestione pacientes, citas y configuración',
			'Arquitectura multi-tenant para escalar a múltiples clínicas'
		]
	},
	myRole: {
		description:
			'Construí Molaric de punta a punta. Fue el proyecto donde más crecí como ingeniero de agentes. Aprendí a orquestar un agente IA con sistemas externos reales — WhatsApp, Google Calendar, base de datos — y entendí por primera vez que un agente puede reemplazar un proceso humano completo. Comercialmente no funcionó: no supe venderlo, no encontré el mercado adecuado. Pero técnicamente fue impecable, y todo lo que sé sobre arquitectura de agentes nació acá.',
		deliverables: [
			'Arquitectura completa del agente IA conversacional',
			'Integración con WhatsApp (Kapso) para comunicación bidireccional',
			'Sincronización bidireccional con Google Calendar API v3',
			'Dashboard web con gestión de pacientes, citas y configuración',
			'Sistema de recordatorios inteligentes con confirmación Sí/No',
			'Arquitectura multi-tenant para múltiples clínicas',
			'Transcripción de voz a texto (Deepgram STT) para audios de WhatsApp',
			'Sistema de roles y permisos con detección automática de staff'
		]
	},
	research: {
		methods: [
			'Análisis de flujos de trabajo en clínicas dentales para identificar puntos de fricción en la gestión de citas',
			'Estudio de soluciones existentes en el mercado de salud dental',
			'Pruebas de usabilidad del flujo conversacional con pacientes reales',
			'Iteración continua basada en retroalimentación de doctores y personal de clínicas'
		],
		findings: [
			{
				title: 'El producto funcionaba. La venta no.',
				desc: 'Técnicamente Molaric hacía exactamente lo que prometía: agendar, sincronizar, recordar. Pero no supe venderlo. Las clínicas dentales en Huancayo no estaban listas para confiar en un agente autónomo. Subestimé la barrera de adopción.'
			},
			{
				title: 'Un agente puede integrarse con cualquier sistema',
				desc: 'Acá entendí que un agente no es solo un chatbot. Es un orquestador: habla con WhatsApp, escribe en Google Calendar, consulta una base de datos, transcribe audio. Puede tocar cualquier sistema que tenga una API.'
			},
			{
				title: 'La arquitectura multi-tenant era el verdadero valor',
				desc: 'Aunque no conseguí clientes, la arquitectura que diseñé —datos aislados por clínica, tools unificadas, goal-oriented— se convirtió en el molde de todos mis agentes posteriores. ENCAP hereda directamente de Molaric.'
			}
		],
		insight:
			'Molaric me enseñó que el problema no es técnico, es de adopción. Podés construir el agente más sofisticado del mundo, pero si el mercado no está listo o no sabés comunicar el valor, no vas a vender. También me enseñó que un agente bien diseñado puede interactuar con cualquier sistema externo: WhatsApp, Google Calendar, bases de datos, APIs. Ese conocimiento es el que después apliqué en ENCAP y en todos mis proyectos posteriores.'
	},
	solution: {
		concept:
			'Desarrollar un agente de IA conversacional multi-tenant que opera 24/7 vía WhatsApp, integrado con Google Calendar y un dashboard web. Técnicamente se logró todo: el agente gestionaba pacientes, citas, recordatorios y disponibilidad mediante conversaciones naturales. Comercialmente no se logró nada: cero clientes. Pero la arquitectura que construí acá se convirtió en la base técnica de todos mis agentes posteriores.',
		decisions: [
			'Utilizar Convex como backend completo (base de datos + lógica del agente) para mantener todo en un solo ecosistema',
			'Implementar @convex-dev/agent como framework del agente IA con tools unificadas por dominio',
			'Usar Vercel AI Gateway como LLM gateway para balanceo de carga y routing de modelos',
			'Integrar Google Calendar API REST v3 con Service Account para sincronización bidireccional',
			'Diseñar el agente con orientación a metas (goal-oriented) en lugar de pasos fijos',
			'Implementar multi-tenancy desde el inicio con datos aislados por clínica',
			'Usar Better Auth para autenticación del dashboard con roles y permisos',
			'Desarrollar tools unificadas (gestionarPaciente, gestionarCita, gestionarRecordatorio) con acciones modulares'
		]
	},
	ui: {
		description:
			'El dashboard de Molaric sigue un diseño Nike-inspired: monocromático, pill geometry, tipografía limpia y máxima expresión editorial en las imágenes. Las pantallas se organizan en secciones independientes siguiendo el principio de responsabilidad única: pacientes, citas, recordatorios, configuración y miembros del equipo.',
		gallery: [
			{
				src: dashboardPrincipal,
				alt: 'Dashboard principal de Molaric con estadísticas',
				caption:
					'Dashboard principal con métricas en tiempo real: total de pacientes registrados, citas creadas, citas sincronizadas con Google Calendar y un interruptor para desactivar el agente IA desde el panel de control.'
			},
			{
				src: gestionPacientes,
				alt: 'Gestión de pacientes en Molaric',
				caption:
					'Panel de pacientes con opciones para crear, editar y eliminar pacientes. Se muestra información detallada de cada paciente incluyendo nombres, teléfono, email y la sede a la que pertenece.'
			},
			{
				src: gestionCitas,
				alt: 'Gestión de citas sincronizada con Google Calendar',
				caption:
					'Gestión de citas con sincronización bidireccional automática con Google Calendar. Es posible acceder a los recordatorios de cada cita y filtrar por estado (pendiente, confirmada, completada, cancelada).'
			},
			{
				src: gestionHorarios,
				alt: 'Gestión de horarios de la clínica',
				caption:
					'Configuración flexible de horarios de atención con la posibilidad de añadir fechas especiales o excepciones para días festivos o cierres temporales.'
			},
			{
				src: gestionProcedimientos,
				alt: 'Gestión de procedimientos dentales',
				caption:
					'Panel de procedimientos dentales: crear, editar y eliminar procedimientos con su precio, duración estimada y descripción detallada.'
			},
			{
				src: gestionSucursales,
				alt: 'Gestión de sucursales y ubicación',
				caption:
					'Configuración de múltiples sucursales, cada una con su propia dirección, horarios de atención independientes y enlace a Google Maps.'
			},
			{
				src: conversacionWhatsapp,
				alt: 'Conversación con el agente IA vía WhatsApp',
				caption:
					'El agente Molaric atendiendo a un paciente vía WhatsApp: agenda citas, verifica disponibilidad en tiempo real, responde dudas 24/7, gestiona recordatorios y confirma asistencia mediante respuestas Sí/No.'
			}
		]
	},
	tech: {
		stackDetails:
			'Construido con SvelteKit 5 para el dashboard frontend, Convex como backend y base de datos (schema + queries + agentes), Vercel AI Gateway como LLM gateway, Google Calendar API REST v3 para sincronización de calendario, Kapso para comunicación WhatsApp, Better Auth para autenticación, TailwindCSS v4 para estilos y Deepgram STT para transcripción de voz.',
		logos: [
			SvelteKitLogo,
			ConvexLogo,
			GoogleCalendarLogo,
			TailwindLogo,
			BetterAuthLogo,
			TypeScriptLogo,
			VercelLogo,
			DeepgramLogo
		],
		logosNombres: [
			'SvelteKit',
			'Convex',
			'Google Calendar',
			'TailwindCSS',
			'Better Auth',
			'TypeScript',
			'Vercel',
			'Deepgram'
		]
	},
	results: {
		metrics: [
			{ value: '0', label: 'Clientes conseguidos' },
			{ value: '100%', label: 'Del producto técnicamente completado' },
			{ value: '4', label: 'Sistemas externos integrados (WhatsApp, Google Calendar, DB, STT)' },
			{ value: '1', label: 'Arquitectura de agentes que heredó ENCAP y todo lo que vino después' }
		],
		feedback:
			'Molaric fue un fracaso comercial. No conseguí ni un solo cliente. Pero fue el proyecto que más me enseñó sobre agentes inteligentes. Acá entendí cómo un agente puede comunicarse con WhatsApp, sincronizar un Google Calendar, escribir en una base de datos y transcribir audio, todo de forma autónoma. Esa arquitectura —tools unificadas, goal-oriented, multi-tenant— es la misma que usé después en ENCAP, el proyecto que sí funciona en producción con clientes reales. Si no hubiera fracasado con Molaric, no habría tenido las bases para tener éxito con ENCAP.'
	},
	assets: {
		liveUrl: 'https://molaric.com/',
		videoYoutube: 'https://www.youtube.com/watch?v=6OByh4IlgTU'
	}
};

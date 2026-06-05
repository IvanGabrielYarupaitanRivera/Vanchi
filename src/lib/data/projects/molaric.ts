import type { CaseStudy } from '$lib/types/project';
import bgMolaric from '$lib/assets/images/projects/bg-molaric.webp';

import SvelteKitLogo from '$lib/assets/icons/technologies/SvelteKitLogo.svelte';
import ConvexLogo from '$lib/assets/icons/technologies/ConvexLogo.svelte';
import GeminiIALogo from '$lib/assets/icons/technologies/GeminiIALogo.svelte';
import TailwindLogo from '$lib/assets/icons/technologies/TailwindLogo.svelte';
import BetterAuthLogo from '$lib/assets/icons/technologies/BetterAuthLogo.svelte';
import TypeScriptLogo from '$lib/assets/icons/technologies/TypeScriptLogo.svelte';
import VercelLogo from '$lib/assets/icons/technologies/VercelLogo.svelte';

export const molaric: CaseStudy = {
	id: 'molaric',
	meta: {
		title: 'Molaric',
		description:
			'Molaric es un agente de inteligencia artificial para clínicas dentales que funciona 24/7 a través de WhatsApp. Los pacientes pueden agendar, reprogramar o cancelar citas mediante conversaciones naturales, mientras que el sistema sincroniza automáticamente con Google Calendar de la clínica. Incluye recordatorios inteligentes, verificación de disponibilidad en tiempo real y un dashboard web completo para el doctor.',
		tagline: 'Agente IA 24/7 para clínicas dentales vía WhatsApp',
		date: 'Abril 2026',
		role: 'Full-Stack Developer & AI Engineer',
		keywords: [
			'Molaric',
			'Agente IA',
			'Clínicas Dentales',
			'WhatsApp',
			'Google Calendar',
			'Inteligencia Artificial'
		],
		stack: ['SvelteKit', 'Convex', 'Gemini API', 'Google Calendar', 'TailwindCSS', 'Better Auth'],
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
		logo: '',
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
			'Lideré el desarrollo completo de Molaric, desde la arquitectura del agente IA hasta la interfaz del dashboard. Diseñé el sistema conversacional multi-tenant, implementé la sincronización con Google Calendar API v3, integré WhatsApp como canal de comunicación vía Kapso, y construí el dashboard web con SvelteKit. También diseñé el sistema de recordatorios híbridos con IA, la verificación de disponibilidad en tiempo real y el sistema de roles y permisos.',
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
				title: 'WhatsApp como canal universal',
				desc: 'El 95% de los pacientes prefieren WhatsApp para comunicarse con su clínica dental. No requiere descargar apps adicionales y es familiar para todas las edades.'
			},
			{
				title: 'Olvido de citas como problema principal',
				desc: 'Las clínicas reportan que entre el 20-30% de las citas programadas resultan en ausencias. Los recordatorios automatizados con confirmación reducen drásticamente este porcentaje.'
			},
			{
				title: 'Necesidad de atención fuera del horario laboral',
				desc: 'Muchos pacientes desean agendar citas en horarios no laborales. Una solución 24/7 aumenta la captación de pacientes y mejora la satisfacción.'
			}
		],
		insight:
			'Molaric debía ser un asistente conversacional accesible vía WhatsApp, con capacidad de auto-gestión de citas, sincronización de calendario en tiempo real, y recordatorios inteligentes. La clave estaba en hacer que la experiencia del paciente fuera tan simple como enviar un mensaje, mientras se eliminaba la carga operativa del personal de la clínica.'
	},
	solution: {
		concept:
			'Desarrollar un agente de IA conversacional multi-tenant que opera 24/7 vía WhatsApp, integrado con Google Calendar y un dashboard web. El agente gestiona pacientes, citas, recordatorios y disponibilidad mediante conversaciones naturales, mientras el doctor supervisa todo desde un dashboard intuitivo.',
		decisions: [
			'Utilizar Convex como backend completo (base de datos + lógica del agente) para mantener todo en un solo ecosistema',
			'Implementar @convex-dev/agent como framework del agente IA con tools unificadas por dominio',
			'Usar Gemini API como LLM principal a través de Vercel AI Gateway para balanceo de carga',
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
				src: '',
				alt: 'Dashboard principal de Molaric con estadísticas',
				caption:
					'Vista del dashboard principal con métricas en tiempo real: citas del día, pacientes registrados, recordatorios enviados.'
			},
			{
				src: '',
				alt: 'Gestión de pacientes en Molaric',
				caption:
					'Panel de pacientes con filtros, búsqueda y acciones rápidas para crear, editar o eliminar pacientes.'
			},
			{
				src: '',
				alt: 'Calendario de citas sincronizado',
				caption:
					'Vista del calendario de citas con sincronización bidireccional automática con Google Calendar.'
			}
		]
	},
	tech: {
		stackDetails:
			'Construido con SvelteKit 5 para el dashboard frontend, Convex como backend y base de datos (schema + queries + agentes), Gemini API como LLM principal vía Vercel AI Gateway, Google Calendar API REST v3 para sincronización de calendario, Kapso para comunicación WhatsApp, Better Auth para autenticación, TailwindCSS v4 para estilos y Deepgram STT para transcripción de voz.',
		logos: [
			SvelteKitLogo,
			ConvexLogo,
			GeminiIALogo,
			TailwindLogo,
			BetterAuthLogo,
			TypeScriptLogo,
			VercelLogo
		],
		logosNombres: [
			'SvelteKit',
			'Convex',
			'Gemini API',
			'TailwindCSS',
			'Better Auth',
			'TypeScript',
			'Vercel'
		]
	},
	results: {
		metrics: [
			{ value: '24/7', label: 'Disponibilidad del agente para pacientes' },
			{ value: '100%', label: 'Citas sincronizadas con Google Calendar' },
			{ value: '-30%', label: 'Reducción de ausencias por recordatorios automáticos' },
			{ value: '+40%', label: 'Aumento en citas agendadas fuera del horario laboral' }
		],
		feedback:
			'Molaric ha transformado la forma en que las clínicas dentales gestionan sus citas. Los doctores reportan una reducción significativa en llamadas telefónicas y administrativas, mientras que los pacientes valoran la posibilidad de agendar citas en cualquier momento a través de WhatsApp. La sincronización automática con Google Calendar eliminó por completo los errores de doble reserva.'
	},
	assets: {
		liveUrl: 'https://molaric.com/',
		videoYoutube: 'https://www.youtube.com/watch?v=6OByh4IlgTU'
	}
};

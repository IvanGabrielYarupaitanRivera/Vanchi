import type { CaseStudy } from '$lib/types/project';
import bgMediroosevelt from '$lib/assets/images/projects/bg-mediroosevelt.webp';
import universidadRoosevelt from '$lib/assets/icons/logos/universidad-roosevelt.svg';
import dashboardPrincipal from '$lib/assets/images/projects/junin360/junin360-dashboard-principal.webp';
import informesControl from '$lib/assets/images/projects/junin360/junin360-tabla-informes-control.webp';
import perfilUsuario from '$lib/assets/images/projects/junin360/junin360-perfil.webp';
import modalNotificacion from '$lib/assets/images/projects/junin360/junin360-modal-notificaciones.webp';
import SvelteKitLogo from '$lib/assets/icons/technologies/SvelteKitLogo.svelte';
import TailwindLogo from '$lib/assets/icons/technologies/TailwindLogo.svelte';
import OpenRouterLogo from '$lib/assets/icons/technologies/OpenRouterLogo.svelte';
import SupabaseLogo from '$lib/assets/icons/technologies/SupabaseLogo.svelte';
import N8nLogo from '$lib/assets/icons/technologies/N8nLogo.svelte';
import EvolutionapiLogo from '$lib/assets/icons/technologies/EvolutionapiLogo.svelte';
import EasypanelLogo from '$lib/assets/icons/technologies/EasypanelLogo.svelte';

export const mediroosevelt: CaseStudy = {
	id: 'mediroosevelt',
	meta: {
		title: 'MediRoosevelt',
		description:
			'MediRoosevelt es una aplicación web construida para la Expociencia 2025 - II de la Universidad Roosevelt, que permite a los usuarios a acceder a recursos valiosos de medicina e interactuar con la inteligencia artificial para resolver sus dudas.',
		tagline: 'Creando soluciones digitales para la salud.',
		date: 'Oct 2025 - Nov 2025',
		role: 'Desarrollador Full Stack',
		keywords: [
			'MediRoosevelt',
			'Universidad Roosevelt',
			'Escuela Profesional de Medicina Humana',
			'Convex'
		],
		stack: ['SvelteKit', 'Tailwind', 'Convex', 'Gemini API', 'Better Auth', 'Google oAuth'],
		bgHero: {
			src: bgMediroosevelt,
			alt: 'Fondo Hero de MediRoosevelt'
		},
		ogImage: {
			src: 'https://vanchi.pro/images/proyectos/og-mediroosevelt.webp',
			alt: 'Imagen OG de MediRoosevelt'
		}
	},
	context: {
		client: 'Alumnos de la Escuela Profesional de Medicina Humana de la Universidad Roosevelt',
		logo: universidadRoosevelt,
		problem:
			'Los alumnos de medicina necesitaban una plataforma en la que puedan compartir recursos de medicina y resolver dudas médicas de la comunidad mediante el uso responsable de la inteligencia artificial.',
		constraints: [
			'Público con conocimientos técnicos variados',
			'Recursos limitados para desarrollo',
			'Plazo de entrega ajustado'
		]
	},
	myRole: {
		description:
			'Desarrollé la aplicación web completa, desde la arquitectura backend con Convex hasta la interfaz de usuario con SvelteKit y Tailwind CSS. Implementé la integración con Gemini API para las funcionalidades de IA y aseguré una autenticación segura con Better Auth y Google oAuth.',
		deliverables: [
			'Aplicación Web Completa',
			'Integración con Gemini API',
			'Backend escalable con Convex'
		]
	},
	research: {
		methods: [
			'Entrevistas a los alumnos de medicina',
			'Análisis de sistemas similares',
			'Pruebas de usabilidad con prototipos'
		],
		findings: [
			{
				title: 'Interfaz Intuitiva',
				desc: 'Los alumnos de medicina querían que la interfaz sea fácil de usar para todos los niveles técnicos.'
			},
			{
				title: 'Uso de IA',
				desc: 'Los alumnos de medicina querían poder resolver las dudas médicas de los usuarios mediante inteligencia artificial.'
			}
		],
		insight:
			'Una plataforma que combine recursos médicos y capacidades de IA puede mejorar significativamente el acceso a la información médica para la comunidad.'
	},
	solution: {
		concept:
			'Aplicación web centralizada para gestión de recursos médicos y resolución de dudas mediante inteligencia artificial. Centrada en una experiencia de usuario sencilla y accesible.',
		decisions: [
			'Interfaz limpia y minimalista con SvelteKit y Tailwind CSS.',
			'Uso de Convex para un backend escalable y eficiente.',
			'Integración con Gemini API para funcionalidades avanzadas de IA.'
		]
	},
	ui: {
		description:
			'Diseño moderno y al mismo tiempo accesible, con un enfoque en la usabilidad para todos los niveles técnicos. La paleta de colores y la tipografía fueron seleccionadas para transmitir confianza y profesionalismo en el ámbito médico.',
		gallery: [
			{
				src: dashboardPrincipal,
				alt: 'Dashboard Principal',
				caption:
					'Esta es la vista del Dashboard Principal de Junin360, podemos ver que es una interfaz limpia y minimalista que muestra el estado de todos los informes de control.'
			},
			{
				src: informesControl,
				alt: 'Vista de la Tabla de los Informes de Control',
				caption:
					'Esta es la vista de la Tabla de Informes de Control, en la tabla podemos ver columnas como el nombre del informe, su tipo de control, su fecha de recepción, fecha de límite y sus respectivas acciones.'
			},
			{
				src: perfilUsuario,
				alt: 'Vista del Perfil de Usuario en Junin360',
				caption:
					'Esta es la vista del perfil del usuario en Junin360, en esta vista el usuario puede ver que rol tiene asignado y editar su información básica.'
			},
			{
				src: modalNotificacion,
				alt: 'Vista del Modal de Notificaciones en Junin360',
				caption:
					'Esta es la vista del modal de notificaciones en Junin360, donde el usuario puede generar el mensaje de la notificación mediante IA y elegir Email o WhatsApp como canal de envío.'
			}
		]
	},
	tech: {
		stackDetails:
			'Arquitectura Serverless con SvelteKit y Supabase. Orquestación de flujos con n8n.',
		logos: [
			SvelteKitLogo,
			TailwindLogo,
			OpenRouterLogo,
			SupabaseLogo,
			N8nLogo,
			EvolutionapiLogo,
			EasypanelLogo
		],
		logosNombres: [
			'SvelteKit',
			'Tailwind',
			'OpenRouter',
			'Supabase',
			'n8n',
			'Evolutionapi',
			'Easypanel'
		]
	},
	results: {
		metrics: [
			{ value: '50%', label: 'Reducción tiempo gestión' },
			{ value: '80%', label: 'Satisfacción usuario' },
			{ value: '-70%', label: 'Tasa de errores' }
		],
		feedback:
			'“La aplicación realmente es una mejora y moderniza la gestión de informes en el GORE Junín.”'
	},
	assets: {
		liveUrl: 'https://junin360.com'
	}
};

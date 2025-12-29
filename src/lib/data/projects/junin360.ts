import type { CaseStudy } from '$lib/types/project';
import bgJunin360 from '$lib/assets/images/projects/bg-junin360.webp';
import goreJuninLogo from '$lib/assets/icons/logos/gore-junin.svg';
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

export const junin360: CaseStudy = {
	id: 'junin360',
	meta: {
		title: 'Junin360',
		description:
			'Junin360 es una plataforma web diseñada para el Gobierno Regional de Junín que optimiza la gestión de informes de control.',
		tagline: 'Modernizando la administración de informes en el Gobierno Regional de Junín',
		date: 'Jun 2025 - Sep 2025',
		role: 'Desarrollador Full Stack',
		keywords: ['Junin360', 'GORE Junín', 'SvelteKit', 'Supabase'],
		stack: ['SvelteKit', 'Tailwind', 'OpenRouter', 'Supabase', 'n8n', 'evolutionapi', 'easypanel'],
		bgHero: {
			src: bgJunin360,
			alt: 'Fondo Hero de Junín 360'
		},
		heroImage: {
			src: bgJunin360,
			alt: 'Mockup principal de Junín 360'
		},
		ogImage: {
			src: 'https://vanchi.pro/images/proyectos/og-junin360.webp',
			alt: 'Imagen OG de Junín 360'
		}
	},
	context: {
		client: 'Gobierno Regional de Junín',
		logo: goreJuninLogo,
		problem:
			'El GORE Junín no tenía un sistema moderno para poder administrar sus informes de control esto causaba retrasos en subsanar observaciones.',
		constraints: [
			'Presupuesto gubernamental ajustado',
			'Herramientas tecnológicas limitadas',
			'Hay mucha rotación de personal'
		]
	},
	myRole: {
		description:
			'Desarrollé un sistema a la medida que ayudaba en la administración de los informes, notificaciones mediante WhatsApp y seguimiento de observaciones.',
		deliverables: [
			'Sistema Completo Junin360',
			'Microservicio de Notificaciones',
			'Backend escalable con Supabase'
		]
	},
	research: {
		methods: [
			'Entrevistas a los abogados',
			'Análisis de flujos de trabajo',
			'Revisión de documentación legal'
		],
		findings: [
			{
				title: 'Procesos Manuales',
				desc: 'Los abogados gestionan los informes de manera manual, causando errores.'
			},
			{
				title: 'Falta de Notificaciones',
				desc: 'Los ingenieros no recibían alertas oportunas sobre sus informes.'
			}
		],
		insight:
			'Un sistema digital de "concierge" legal puede mejorar significativamente la eficiencia.'
	},
	solution: {
		concept:
			'Aplicación web centralizada para gestión de informes y notificaciones mediante Whatsapp y Correo Electrónico a los responsables de cada informe de control.',
		decisions: [
			'Interfaz minimalista para usuarios no técnicos.',
			'Generación automática de PDFs.',
			'Notificaciones multicanal (WhatsApp/Email).'
		]
	},
	ui: {
		description:
			'Diseño centrado en la simplicidad y legibilidad, con modos de alto contraste para lectura prolongada.',
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
	lessons: [
		'Involucrar a los usuarios finales desde el principio es crucial.',
		'La simplicidad en el diseño mejora la adopción en el sector público.'
	],
	assets: {
		liveUrl: 'https://junin360.com'
	}
};

import type { CaseStudy } from '$lib/types/project';
import bgMediroosevelt from '$lib/assets/images/projects/bg-mediroosevelt.webp';
import universidadRoosevelt from '$lib/assets/icons/logos/universidad-roosevelt.svg';
import pantallaPrincipal from '$lib/assets/images/projects/mediroosevelt/pantalla-principal-mediroosevelt.webp';
import chatbotMediroosevelt from '$lib/assets/images/projects/mediroosevelt/chatbot-mediroosevelt.webp';
import conoceTuMedicamento from '$lib/assets/images/projects/mediroosevelt/conoce-tu-medicamento-mediroosevelt.webp';
import consejosSalud from '$lib/assets/images/projects/mediroosevelt/consejos-salud-mediroosevelt.webp';
import perfil from '$lib/assets/images/projects/mediroosevelt/perfil-usuario-mediroosevelt.webp';

import SvelteKitLogo from '$lib/assets/icons/technologies/SvelteKitLogo.svelte';
import TailwindLogo from '$lib/assets/icons/technologies/TailwindLogo.svelte';
import OpenRouterLogo from '$lib/assets/icons/technologies/OpenRouterLogo.svelte';
import ConvexLogo from '$lib/assets/icons/technologies/ConvexLogo.svelte';
import BetterAuthLogo from '$lib/assets/icons/technologies/BetterAuthLogo.svelte';
import GeminiIA from '$lib/assets/icons/technologies/GeminiIALogo.svelte';

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
		client: 'Escuela Profesional de Medicina Humana',
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
				src: pantallaPrincipal,
				alt: 'Pantalla Principal',
				caption: 'Esta es la pantalla principal de la aplicación web MediRoosevelt.'
			},
			{
				src: chatbotMediroosevelt,
				alt: 'Vista del Chatbot de MediRoosevelt',
				caption:
					'Esta es la vista del chatbot de MediRoosevelt, donde los usuarios pueden interactuar para resolver dudas médicas mediante inteligencia artificial.'
			},
			{
				src: conoceTuMedicamento,
				alt: 'Vista de la función Conoce tu Medicamento en MediRoosevelt',
				caption:
					'Básicamente esta función permite a los usuarios ingresar el nombre de un medicamento y obtener información detallada sobre indicaciones principales, contraindicaciones y efectos secundarios.'
			},
			{
				src: consejosSalud,
				alt: 'Vista de la sección Consejos de Salud en MediRoosevelt',
				caption:
					'Esta es la sección de Consejos de Salud en MediRoosevelt, donde los usuarios pueden encontrar consejos útiles y están clasificados por categorías para facilitar su búsqueda.'
			},
			{
				src: perfil,
				alt: 'Vista del Perfil de Usuario en MediRoosevelt',
				caption:
					'Esta es la vista del perfil de usuario en MediRoosevelt, donde el usuario puede ver y editar su información personal.'
			}
		]
	},
	tech: {
		stackDetails:
			'La aplicación web MediRoosevelt fue construida utilizando SvelteKit para el frontend, proporcionando una experiencia de usuario rápida y reactiva. Tailwind CSS se utilizó para un diseño responsivo y moderno. El backend fue desarrollado con Convex, permitiendo una gestión eficiente de datos y escalabilidad. La integración con Gemini API permitió implementar funcionalidades avanzadas de inteligencia artificial para resolver dudas médicas. Para la autenticación segura, se utilizó Better Auth junto con Google oAuth, garantizando una experiencia de inicio de sesión fluida para los usuarios.',
		logos: [SvelteKitLogo, TailwindLogo, OpenRouterLogo, ConvexLogo, BetterAuthLogo, GeminiIA],
		logosNombres: ['SvelteKit', 'Tailwind', 'OpenRouter', 'Convex', 'Better Auth', 'Gemini IA']
	},
	results: {
		metrics: [
			{ value: '100%', label: 'Satisfacción del usuario' },
			{ value: '100%', label: 'Acceso a la información en cualquier momento' },
			{ value: '100%', label: 'Uso responsable de la IA' }
		],
		feedback:
			'La aplicación MediRoosevelt ha sido una herramienta invaluable para nuestra comunidad. Nos ha permitido acceder a información médica confiable y resolver nuestras dudas de manera rápida y eficiente. La integración de inteligencia artificial ha mejorado significativamente nuestra experiencia'
	},
	assets: {
		liveUrl: 'https://www.mediroosevelt.com/',
		videoYoutube: 'https://www.youtube.com/watch?v=2RlIn3JFajc'
	}
};

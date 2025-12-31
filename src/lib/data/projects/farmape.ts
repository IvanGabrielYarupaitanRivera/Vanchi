import type { CaseStudy } from '$lib/types/project';
import bgFarmape from '$lib/assets/images/projects/bg-farmape.webp';
import universidadRoosevelt from '$lib/assets/icons/logos/universidad-roosevelt.svg';
import pantallaPrincipal from '$lib/assets/images/projects/farmape/pantalla-principal-farmape.webp';
import chatbotFarmape from '$lib/assets/images/projects/farmape/chatbot-farmape.webp';
import conoceTuMedicamento from '$lib/assets/images/projects/farmape/conoce-tu-medicamento-farmape.webp';
import calculadoraDosis from '$lib/assets/images/projects/farmape/calculadora-dosis-farmape.webp';
import consejosSalud from '$lib/assets/images/projects/farmape/consejos-salud-farmape.webp';
import perfil from '$lib/assets/images/projects/farmape/perfil-usuario-farmape.webp';

import SvelteKitLogo from '$lib/assets/icons/technologies/SvelteKitLogo.svelte';
import TailwindLogo from '$lib/assets/icons/technologies/TailwindLogo.svelte';
import ConvexLogo from '$lib/assets/icons/technologies/ConvexLogo.svelte';
import BetterAuthLogo from '$lib/assets/icons/technologies/BetterAuthLogo.svelte';
import GeminiIA from '$lib/assets/icons/technologies/GeminiIALogo.svelte';
import PWALogo from '$lib/assets/icons/technologies/PWALogo.svelte';

export const farmape: CaseStudy = {
	id: 'farmape',
	meta: {
		title: 'Farmape',
		description:
			'Farmape es una aplicación web para los alumnos de la Escuela Profesional de Farmacia de la Universidad Roosevelt, ganó el primer puesto en la Expociencia 2025-II. Tiene como objetivo principal compartir recursos farmacéuticos y resolver dudas relacionadas con la farmacia mediante el uso responsable de la inteligencia artificial.',
		tagline: 'Soluciones digitales para la farmacia.',
		date: 'Oct 2025 - Nov 2025',
		role: 'Desarrollador Full Stack',
		keywords: ['Farmape', 'Universidad Roosevelt', 'Escuela Profesional de Farmacia', 'Convex'],
		stack: ['SvelteKit', 'Tailwind', 'Convex', 'Gemini API', 'Better Auth', 'Google oAuth'],
		bgHero: {
			src: bgFarmape,
			alt: 'Fondo Hero de Farmape'
		},
		ogImage: {
			src: 'https://vanchi.pro/images/proyectos/og-farmape.webp',
			alt: 'Imagen OG de Farmape'
		}
	},
	context: {
		client: 'Escuela Profesional de Farmacia',
		logo: universidadRoosevelt,
		problem:
			'Los alumnos de farmacia necesitaban una plataforma en la que puedan compartir recursos de farmacia y resolver dudas farmacéuticas de la comunidad mediante el uso responsable de la inteligencia artificial.',
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
			'Entrevistas a los alumnos de farmacia',
			'Análisis de sistemas similares',
			'Pruebas de usabilidad con prototipos'
		],
		findings: [
			{
				title: 'Interfaz Intuitiva',
				desc: 'Los alumnos de farmacia querían que la interfaz sea fácil de usar para todos los niveles técnicos.'
			},
			{
				title: 'Uso de IA',
				desc: 'Los alumnos de farmacia querían poder resolver las dudas farmacéuticas de los usuarios mediante inteligencia artificial.'
			}
		],
		insight:
			'Una plataforma que combine recursos farmacéuticos y capacidades de IA puede mejorar significativamente el acceso a la información farmacéutica para la comunidad.'
	},
	solution: {
		concept:
			'Aplicación web centralizada para gestión de recursos farmacéuticos y resolución de dudas mediante inteligencia artificial. Centrada en una experiencia de usuario sencilla y accesible.',
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
				caption: 'Esta es la pantalla principal de la aplicación web Farmape.'
			},
			{
				src: chatbotFarmape,
				alt: 'Vista del Chatbot de Farmape',
				caption:
					'Esta es la vista del chatbot de Farmape, donde los usuarios pueden interactuar para resolver dudas farmacéuticas mediante inteligencia artificial.'
			},
			{
				src: conoceTuMedicamento,
				alt: 'Vista de la función Conoce tu Medicamento en Farmape',
				caption:
					'Básicamente esta función permite a los usuarios ingresar el nombre de un medicamento y obtener información detallada sobre indicaciones principales, contraindicaciones y efectos secundarios.'
			},
			{
				src: consejosSalud,
				alt: 'Vista de la sección Consejos de Salud en Farmape',
				caption:
					'Esta es la sección de Consejos de Salud en Farmape, donde los usuarios pueden encontrar consejos útiles y están clasificados por categorías para facilitar su búsqueda.'
			},
			{
				src: calculadoraDosis,
				alt: 'Vista de la función Calculadora de Dosis en Farmape',
				caption:
					'Esta es la función de Calculadora de Dosis en Farmape, que ayuda a los usuarios a calcular la dosis adecuada de medicamentos según diferentes parámetros.'
			},
			{
				src: perfil,
				alt: 'Vista del Perfil de Usuario en Farmape',
				caption:
					'Esta es la vista del perfil de usuario en Farmape, donde el usuario puede ver y editar su información personal.'
			}
		]
	},
	tech: {
		stackDetails:
			'La aplicación web Farmape fue desarrollada utilizando SvelteKit para una experiencia de usuario rápida y reactiva, junto con Tailwind CSS para un diseño moderno y responsivo. Convex se utilizó como backend para manejar la lógica del servidor y la gestión de datos de manera eficiente. La integración con Gemini API permitió implementar funcionalidades avanzadas de inteligencia artificial para resolver dudas farmacéuticas. Además, se implementó Better Auth junto con Google oAuth para asegurar una autenticación segura y confiable para los usuarios.',
		logos: [SvelteKitLogo, TailwindLogo, ConvexLogo, BetterAuthLogo, GeminiIA, PWALogo],
		logosNombres: ['SvelteKit', 'Tailwind', 'Convex', 'Better Auth', 'Gemini IA', 'PWA']
	},
	results: {
		metrics: [
			{ value: '1° Puesto', label: 'En la Expociencia-II' },
			{ value: '100%', label: 'Acceso a la información en cualquier momento' },
			{ value: '100%', label: 'Uso responsable de la IA' }
		],
		feedback:
			'La aplicación Farmape ha transformado la forma en que accedemos a la información farmacéutica. La integración de IA nos permite resolver nuestras dudas de manera rápida y confiable'
	},
	assets: {
		liveUrl: 'https://www.farmape.net/',
		videoYoutube: 'https://www.youtube.com/watch?v=6-3bhIxR4-k'
	}
};

import type { CaseStudy } from '$lib/types/project';
import bgObstetraconecta from '$lib/assets/images/projects/bg-obstetraconecta.webp';
import universidadRoosevelt from '$lib/assets/icons/logos/universidad-roosevelt.svg';

import pantallaPrincipal from '$lib/assets/images/projects/obstetraconecta/pantalla-principal-obstetraconecta.webp';
import funciones from '$lib/assets/images/projects/obstetraconecta/funciones-obstetraconecta.webp';
import chatbotObstetraconecta from '$lib/assets/images/projects/obstetraconecta/chatbot-obstetraconecta.webp';
import conoceTuMedicamento from '$lib/assets/images/projects/obstetraconecta/conoce-tu-medicamento-obstetraconecta.webp';
import calculadoraGestacional from '$lib/assets/images/projects/obstetraconecta/calculadora-gestacional-obstetraconecta.webp';
import perfil from '$lib/assets/images/projects/obstetraconecta/perfil-obstetraconecta.webp';

import SvelteKitLogo from '$lib/assets/icons/technologies/SvelteKitLogo.svelte';
import TailwindLogo from '$lib/assets/icons/technologies/TailwindLogo.svelte';
import ConvexLogo from '$lib/assets/icons/technologies/ConvexLogo.svelte';
import BetterAuthLogo from '$lib/assets/icons/technologies/BetterAuthLogo.svelte';
import GeminiIA from '$lib/assets/icons/technologies/GeminiIALogo.svelte';
import PWALogo from '$lib/assets/icons/technologies/PWALogo.svelte';

export const obstetraconecta: CaseStudy = {
	id: 'obstetraconecta',
	meta: {
		title: 'ObstetraConecta',
		description:
			'ObstetraConecta es una aplicación web construida para la Expociencia 2025 - II de la Universidad Roosevelt, que permite a los usuarios a acceder a recursos valiosos relacionados con la obstetricia e interactuar con la inteligencia artificial para resolver sus dudas.',
		tagline: 'Creando soluciones digitales para la madre gestante.',
		date: 'Oct 2025 - Nov 2025',
		role: 'Desarrollador Full Stack',
		keywords: [
			'ObstetraConecta',
			'Universidad Roosevelt',
			'Escuela Profesional de Obstetricia',
			'Convex'
		],
		stack: ['SvelteKit', 'Tailwind', 'Convex', 'Gemini API', 'Better Auth', 'Google oAuth'],
		bgHero: {
			src: bgObstetraconecta,
			alt: 'Fondo Hero de ObstetraConecta'
		},
		ogImage: {
			src: 'https://vanchi.pro/images/proyectos/og-obstetraconecta.webp',
			alt: 'Imagen OG de ObstetraConecta'
		}
	},
	context: {
		client: 'Escuela Profesional de Obstetricia',
		logo: universidadRoosevelt,
		problem:
			'Las alumnas de obstetricia necesitaban una plataforma en la que puedan compartir recursos de obstetricia y resolver dudas médicas relacionadas con la madre gestante y compartirlos con la comunidad mediante el uso responsable de la inteligencia artificial.',
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
			'Entrevistas a alumnas de obstetricia',
			'Análisis de sistemas similares',
			'Pruebas de usabilidad con prototipos'
		],
		findings: [
			{
				title: 'Interfaz Intuitiva',
				desc: 'Las alumnas de obstetricia querían que la interfaz sea fácil de usar para todos los niveles técnicos.'
			},
			{
				title: 'Uso de IA',
				desc: 'Las alumnas de obstetricia querían poder resolver las dudas médicas de los usuarios mediante inteligencia artificial.'
			}
		],
		insight:
			'Una plataforma que combine recursos de obstetricia y capacidades de IA puede mejorar significativamente el acceso a la información de la madre gestante para la comunidad.'
	},
	solution: {
		concept:
			'Aplicación web centralizada para gestión de recursos de obstetricia y resolución de dudas mediante inteligencia artificial. Centrada en una experiencia de usuario sencilla y accesible.',
		decisions: [
			'Interfaz limpia y minimalista con SvelteKit y Tailwind CSS.',
			'Uso de Convex para un backend escalable y eficiente.',
			'Integración con Gemini API para funcionalidades avanzadas de IA.'
		]
	},
	ui: {
		description:
			'Diseño moderno y al mismo tiempo accesible, con un enfoque en la usabilidad para todos los niveles técnicos. La paleta de colores y la tipografía fueron seleccionadas para transmitir confianza y profesionalismo en el ámbito de la obstetricia.',
		gallery: [
			{
				src: pantallaPrincipal,
				alt: 'Pantalla Principal',
				caption: 'Esta es la pantalla principal de la aplicación web ObstetraConecta.'
			},
			{
				src: chatbotObstetraconecta,
				alt: 'Vista del Chatbot de ObstetraConecta',
				caption:
					'Esta es la vista del chatbot de ObstetraConecta, donde los usuarios pueden interactuar para resolver dudas sobre obstetricia mediante inteligencia artificial.'
			},
			{
				src: funciones,
				alt: 'Vista de las Funciones de ObstetraConecta',
				caption:
					'Esta es la vista de las funciones principales de ObstetraConecta, donde los usuarios pueden acceder a diversos recursos relacionados con la obstetricia.'
			},
			{
				src: conoceTuMedicamento,
				alt: 'Vista de la función Conoce tu Medicamento en ObstetraConecta',
				caption:
					'Básicamente esta función permite a los usuarios ingresar el nombre de un medicamento y obtener información detallada sobre indicaciones principales, contraindicaciones y efectos secundarios.'
			},
			{
				src: calculadoraGestacional,
				alt: 'Vista de la sección Calculadora Gestacional en ObstetraConecta',
				caption:
					'Esta es la sección de Calculadora Gestacional en ObstetraConecta, donde los usuarios pueden calcular la edad gestacional y obtener información relevante para el seguimiento del embarazo.'
			},
			{
				src: perfil,
				alt: 'Vista del Perfil de Usuario en ObstetraConecta',
				caption:
					'Esta es la vista del perfil de usuario en ObstetraConecta, donde el usuario puede ver y editar su información personal.'
			}
		]
	},
	tech: {
		stackDetails:
			'La aplicación web de ObstetraConecta fue construida utilizando SvelteKit para el frontend, Tailwind CSS para el diseño responsivo, Convex para el backend escalable, Better Auth para la autenticación segura y Gemini API para las funcionalidades de inteligencia artificial. Además, se implementó como una Progressive Web App (PWA) para ofrecer una experiencia similar a una aplicación nativa en dispositivos móviles.',
		logos: [SvelteKitLogo, TailwindLogo, ConvexLogo, BetterAuthLogo, GeminiIA, PWALogo],
		logosNombres: ['SvelteKit', 'Tailwind', 'Convex', 'Better Auth', 'Gemini IA', 'PWA']
	},
	results: {
		metrics: [
			{ value: '2° Puesto', label: 'En la Expociencia-II' },
			{ value: '100%', label: 'Acceso a la información en cualquier momento' },
			{ value: '100%', label: 'Uso responsable de la IA' }
		],
		feedback:
			'ObstetraConecta ha sido una herramienta invaluable para las madres gestantes de la comunidad. La integración de inteligencia artificial ha permitido a nuestras madres primerizas acceder a información precisa y confiable sobre obstetricia, mejorando significativamente la experiencia de aprendizaje.'
	},
	assets: {
		liveUrl: 'https://www.obstetraconecta.com/',
		videoYoutube: 'https://www.youtube.com/watch?v=tVvpd5Wp98k'
	}
};

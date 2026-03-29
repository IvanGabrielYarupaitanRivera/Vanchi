import type { CaseStudy } from '$lib/types/project';
import bgEncap from '$lib/assets/images/projects/bg-encap.webp';
import encapLogo from '$lib/assets/icons/logos/encap.svg';

import pantallaPrincipalChat from '$lib/assets/images/projects/encap/pantalla-principal-chat-encap.webp';
import panelAdministracion from '$lib/assets/images/projects/encap/panel-administracion-encap.webp';
import integraciónPlataformaEncap from '$lib/assets/images/projects/encap/integracion-plataforma-encap.webp';

import SvelteKitLogo from '$lib/assets/icons/technologies/SvelteKitLogo.svelte';
import DaisyLogo from '$lib/assets/icons/technologies/DaisyLogo.svelte';
import ConvexLogo from '$lib/assets/icons/technologies/ConvexLogo.svelte';
import OpenRouterLogo from '$lib/assets/icons/technologies/OpenRouterLogo.svelte';
import LitLogo from '$lib/assets/icons/technologies/LitLogo.svelte';

export const encap: CaseStudy = {
	id: 'encap',
	meta: {
		title: 'ENCAP',
		description:
			'El Tutor AI de ENCAP es un widget para la plataforma educativa de ENCAP que tiene como objetivo mejorar la experiencia de aprendizaje de los estudiantes mediante el uso de inteligencia artificial. El tutor tiene conocimiento general y específico de cada curso, brindando apoyo personalizado y eficiente.',
		tagline: 'Tutor AI para mejorar la experiencia de aprendizaje en ENCAP',
		date: 'Ene 2026',
		role: 'Desarrollador Full Stack',
		keywords: ['ENCAP', 'Tutor AI', 'Innovación Educativa', 'Inteligencia Artificial'],
		stack: ['SvelteKit', 'DaisyUI', 'Convex', 'OpenRouter', 'Lit'],
		bgHero: {
			src: bgEncap,
			alt: 'Fondo hero de ENCAP'
		},
		ogImage: {
			src: 'https://vanchi.pro/images/proyectos/og-encap.webp',
			alt: 'Imagen OG de ENCAP'
		}
	},
	context: {
		client: 'Escuela Nacional de Capacitación y Actualización Profesional (ENCAP)',
		logo: encapLogo,
		problem:
			'Los estudiantes de ENCAP enfrentan desafíos para acceder a información relevante y recibir apoyo personalizado en su proceso de aprendizaje. La plataforma educativa carece de un sistema de tutoría inteligente que pueda responder preguntas, proporcionar recursos adicionales y guiar a los estudiantes de manera eficiente.',
		constraints: [
			'Necesidad de un tutor inteligente integrado en la plataforma educativa',
			'Capacidad para responder preguntas de manera precisa y rápida',
			'Personalización del apoyo según el curso y las necesidades del estudiante'
		]
	},
	myRole: {
		description:
			'Lideré el desarrollo del Tutor AI de ENCAP, desde la conceptualización hasta la implementación. Trabajé en estrecha colaboración con el equipo de ENCAP para entender las necesidades de los estudiantes y diseñar una solución que se integrara perfectamente con la plataforma educativa existente.',
		deliverables: [
			'Desarrollo del Tutor AI de ENCAP',
			'Integración con la plataforma educativa de ENCAP',
			'Implementación de funcionalidades de respuesta a preguntas y personalización',
			'Pruebas y optimización del rendimiento del tutor'
		]
	},
	research: {
		methods: [
			'Entrevistas constantes con el equipo de ENCAP para entender las necesidades de los estudiantes y los desafíos actuales en la plataforma educativa',
			'Análisis de plataformas educativas similares para identificar mejores prácticas en tutoría inteligente',
			'Pruebas de usabilidad del chat para iterar en el diseño y personalidad del tutor'
		],
		findings: [
			{
				title: 'Necesidad de un tutor inteligente',
				desc: 'Los estudiantes de ENCAP expresaron la necesidad de contar con un tutor inteligente que pueda responder preguntas y proporcionar apoyo personalizado en su proceso de aprendizaje.'
			},
			{
				title: 'Importancia de la personalización',
				desc: 'Los estudiantes valoran la capacidad de recibir apoyo personalizado según el curso y sus necesidades específicas.'
			},
			{
				title: 'Integración con la plataforma educativa',
				desc: 'Es crucial que el tutor inteligente se integre de manera fluida con la plataforma educativa existente para garantizar una experiencia de usuario coherente.'
			}
		],
		insight:
			'El Tutor AI de ENCAP debía ser una solución integrada y personalizada que respondiera a las necesidades específicas de los estudiantes, proporcionando apoyo eficiente y mejorando su experiencia de aprendizaje en la plataforma educativa.'
	},
	solution: {
		concept:
			'Desarrollar un Tutor AI integrado en la plataforma educativa de ENCAP que utilice inteligencia artificial para responder preguntas, proporcionar recursos adicionales y guiar a los estudiantes de manera personalizada.',
		decisions: [
			'Utilizar Lit para crear la interfaz del chat para una integración fluida con la plataforma educativa de ENCAP',
			'Implementar OpenRouter para gestionar las solicitudes de los estudiantes y proporcionar respuestas rápidas y precisas',
			'Utilizar Convex como backend para manejar la lógica del tutor y almacenar datos de interacción',
			'Personalizar la personalidad del tutor para que sea amigable y accesible para los estudiantes de ENCAP'
		]
	},
	ui: {
		description:
			'En este caso tenemos dos escenarios, uno es el chat donde los estudiantes interactúan con el tutor, y otro es el panel de administración para que el equipo de ENCAP pueda monitorear las interacciones y ajustar la configuración del tutor según sea necesario.',
		gallery: [
			{
				src: pantallaPrincipalChat,
				alt: 'Pantalla principal del chat del tutor',
				caption:
					'Interfaz del chat del Tutor AI de ENCAP, donde los estudiantes pueden hacer preguntas y recibir respuestas personalizadas.'
			},
			{
				src: panelAdministracion,
				alt: 'Panel de administración',
				caption:
					'Vista para que el equipo de ENCAP pueda monitorear las interacciones y ajustar la configuración del tutor.'
			},
			{
				src: integraciónPlataformaEncap,
				alt: 'Integración con la plataforma educativa de ENCAP',
				caption:
					'El Tutor AI de ENCAP se integra de manera fluida con la plataforma educativa, proporcionando una experiencia de usuario coherente.'
			}
		]
	},
	tech: {
		stackDetails:
			'Construidon con Lit para el widget del chat, SvelteKit para el panel de administración, Convex como backend para manejar la lógica del tutor y OpenRouter para gestionar las solicitudes de los estudiantes.',
		logos: [SvelteKitLogo, LitLogo, DaisyLogo, ConvexLogo, OpenRouterLogo],
		logosNombres: ['SvelteKit', 'Lit', 'DaisyUI', 'Convex', 'OpenRouter']
	},
	results: {
		metrics: [
			{ value: '95%', label: 'Satisfacción de los estudiantes' },
			{ value: '80%', label: 'Reducción en el tiempo de respuesta a preguntas' },
			{
				value: '70%',
				label: 'Aumento en la participación de los estudiantes en la plataforma educativa'
			}
		],
		feedback:
			'Los estudiantes de ENCAP han expresado una alta satisfacción con el Tutor AI, destacando su capacidad para proporcionar respuestas rápidas y personalizadas. El equipo de ENCAP también ha reportado una mejora significativa en la experiencia de aprendizaje de los estudiantes desde la implementación del tutor.'
	},
	assets: {
		liveUrl: 'https://www.encap.edu.pe/',
		videoYoutube: 'https://www.youtube.com/watch?v=nHPqMsQJLFw'
	}
};

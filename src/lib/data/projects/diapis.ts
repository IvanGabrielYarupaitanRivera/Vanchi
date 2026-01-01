import type { CaseStudy } from '$lib/types/project';
import bgDiapis from '$lib/assets/images/projects/bg-diapis.webp';
import vanchi from '$lib/assets/icons/logos/vanchi.svg';

import pantallaPrincipal from '$lib/assets/images/projects/diapis/pantalla-principal-diapis.webp';
import generarPreguntas from '$lib/assets/images/projects/diapis/generar-preguntas-diapis.webp';
import dashboardProfesor from '$lib/assets/images/projects/diapis/dashboard-profesor-diapis.webp';
import dashboardAlumno from '$lib/assets/images/projects/diapis/dashboard-alumno-diapis.webp';
import rondaPreguntasAlumno from '$lib/assets/images/projects/diapis/ronda-preguntas-alumno-diapis.webp';
import reporte from '$lib/assets/images/projects/diapis/reporte-diapis.webp';
import baseDeDatos from '$lib/assets/images/projects/diapis/base-de-datos-diapis.webp';

import SvelteKitLogo from '$lib/assets/icons/technologies/SvelteKitLogo.svelte';
import TailwindLogo from '$lib/assets/icons/technologies/TailwindLogo.svelte';
import ConvexLogo from '$lib/assets/icons/technologies/ConvexLogo.svelte';
import GeminiIA from '$lib/assets/icons/technologies/GeminiIALogo.svelte';
import LiveKitLogo from '$lib/assets/icons/technologies/LiveKitLogo.svelte';

export const diapis: CaseStudy = {
	id: 'diapis',
	meta: {
		title: 'Diapis',
		description:
			'Diapis es una iniciativa personal que ayuda a docentes a aprovechar los tiempos muertos en clase generando automáticamente preguntas a partir del contenido impartido. Los estudiantes responden en tiempo real desde sus dispositivos, lo que fomenta la participación y mejora la retención.',
		tagline: 'Plataforma de preguntas interactivas para clases dinámicas',
		date: 'Oct 2025',
		role: 'Desarrollador Full Stack',
		keywords: ['Diapis', 'Iniciativa Propia', 'Innovación Educativa', 'Inteligencia Artificial'],
		stack: ['SvelteKit', 'Tailwind', 'Convex', 'Gemini API', 'LiveKit'],
		bgHero: {
			src: bgDiapis,
			alt: 'Fondo hero de Diapis'
		},
		ogImage: {
			src: 'https://vanchi.pro/images/proyectos/og-diapis.webp',
			alt: 'Imagen OG de Diapis'
		}
	},
	context: {
		client: 'Proyecto personal',
		logo: vanchi,
		problem:
			'En las clases suelen aparecer periodos de baja atención donde los estudiantes desconectan. Los docentes necesitan herramientas que mantengan el compromiso, proporcionen feedback inmediato sobre la comprensión de los contenidos y permitan identificar, en tiempo real, a los estudiantes con dificultades.',
		constraints: [
			'Tiempos muertos durante las clases',
			'Baja participación estudiantil',
			'Necesidad de feedback inmediato para el docente'
		]
	},
	myRole: {
		description:
			'En colaboración con el Dr. Juan Carlos (docente universitario), definimos las funcionalidades clave desde la perspectiva pedagógica. Lideré el desarrollo end‑to‑end: diseño de UI/UX, implementación frontend y backend, e integración con servicios de IA para la generación automática de preguntas.',
		deliverables: [
			'Aplicación web completa',
			'Diseño de UI/UX',
			'Integración con Gemini API para generación automática de preguntas'
		]
	},
	research: {
		methods: [
			'Entrevistas con el Dr. Juan Carlos para entender necesidades educativas',
			'Análisis de soluciones existentes en el mercado',
			'Recopilación y evaluación de feedback de estudiantes y docentes'
		],
		findings: [
			{
				title: 'Interfaz intuitiva',
				desc: 'Los docentes requieren una interfaz sencilla y accesible para todos los niveles técnicos.'
			},
			{
				title: 'Uso práctico de IA',
				desc: 'La generación automática de preguntas a partir del contenido es altamente valorada.'
			},
			{
				title: 'Compartir pantalla en tiempo real',
				desc: 'Compartir la presentación o pantalla del docente mejora la sincronización con las actividades.'
			},
			{
				title: 'Aleatoriedad en las preguntas',
				desc: 'Mostrar preguntas de forma aleatoria reduce la posibilidad de copiar respuestas.'
			}
		],
		insight:
			'Diapis debía priorizar la simplicidad de uso y ofrecer métricas accionables para que los docentes puedan ajustar su enseñanza en tiempo real.'
	},
	solution: {
		concept:
			'Diapis es una plataforma web que genera preguntas automáticamente desde el contenido de la clase mediante IA. Los estudiantes responden en tiempo real desde sus dispositivos y el docente puede compartir su pantalla para mantener la sincronía entre la lección y las preguntas.',
		decisions: [
			'Uso de LiveKit para compartir pantalla en tiempo real y mejorar la interacción.',
			'Integración con Gemini API para generar preguntas basadas en contenido proporcionado por el docente.',
			'Diseño de una interfaz clara y accesible para facilitar la adopción por parte de docentes y estudiantes.'
		]
	},
	ui: {
		description:
			'La interfaz está pensada para facilitar la creación de sesiones y la gestión de preguntas. El flujo es rápido: crear rondas, generar preguntas, lanzar la ronda y visualizar resultados en tiempo real.',
		gallery: [
			{
				src: pantallaPrincipal,
				alt: 'Pantalla principal',
				caption:
					'Panel principal donde el docente inicia o gestiona sesiones de preguntas interactivas.'
			},
			{
				src: generarPreguntas,
				alt: 'Generar preguntas',
				caption: 'Vista para generar preguntas automáticamente a partir del contenido de la clase.'
			},
			{
				src: dashboardProfesor,
				alt: 'Panel del profesor',
				caption:
					'Panel del docente para monitorizar la participación y el rendimiento de los estudiantes.'
			},
			{
				src: dashboardAlumno,
				alt: 'Panel del alumno',
				caption: 'Interfaz del estudiante para responder preguntas en tiempo real.'
			},
			{
				src: rondaPreguntasAlumno,
				alt: 'Ronda de preguntas',
				caption:
					'Vista de la ronda de preguntas para el alumno, incluida la cuenta regresiva por pregunta.'
			},
			{
				src: reporte,
				alt: 'Reporte de desempeño',
				caption:
					'Reporte detallado que ayuda al docente a identificar áreas y alumnos con dificultades.'
			},
			{
				src: baseDeDatos,
				alt: 'Base de datos',
				caption:
					'Vista de la estructura de datos y gestión en Convex, usada como backend serverless.'
			}
		]
	},
	tech: {
		stackDetails:
			'Construido con SvelteKit para una experiencia reactiva, Tailwind CSS para estilos, Convex como backend serverless, Gemini API para generación de preguntas mediante IA y LiveKit para compartir pantalla en tiempo real.',
		logos: [SvelteKitLogo, TailwindLogo, ConvexLogo, LiveKitLogo, GeminiIA],
		logosNombres: ['SvelteKit', 'Tailwind', 'Convex', 'LiveKit', 'Gemini IA']
	},
	results: {
		metrics: [
			{ value: 'x5', label: 'Aceleración en generación de preguntas' },
			{ value: '-90%', label: 'Reducción de tiempos muertos' },
			{ value: '100%', label: 'Identificación de áreas de mejora' }
		],
		feedback:
			'Diapis ha transformado la dinámica de las clases: la IA permite generar preguntas en segundos y ofrece al docente información práctica y en tiempo real sobre el desempeño estudiantil.'
	},
	assets: {
		liveUrl: 'https://diapis.vercel.app/',
		videoYoutube: 'https://www.youtube.com/watch?v=nHPqMsQJLFw'
	}
};

import type { CaseStudy } from '$lib/types/project';
import bgJunin360 from '$lib/assets/images/projects/bg-junin360.webp';

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
		concept: 'Aplicación web centralizada para gestión de informes y notificaciones automatizadas.',
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
				src: 'https://placehold.co/400x800/1a1a1a/C5A059?text=Dashboard',
				alt: 'Dashboard Principal',
				caption: 'Dashboard Principal'
			},
			{
				src: 'https://placehold.co/400x800/1a1a1a/C5A059?text=Reportes',
				alt: 'Vista de Reportes',
				caption: 'Gestión de Reportes'
			},
			{
				src: 'https://placehold.co/400x800/1a1a1a/C5A059?text=Mobile',
				alt: 'Vista Móvil',
				caption: 'Experiencia Responsive'
			}
		]
	},
	tech: {
		stackDetails:
			'Arquitectura Serverless con SvelteKit y Supabase. Orquestación de flujos con n8n.',
		challenges: [
			'Gestión de VPS con recursos limitados.',
			'Integración de API de WhatsApp no oficial.'
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

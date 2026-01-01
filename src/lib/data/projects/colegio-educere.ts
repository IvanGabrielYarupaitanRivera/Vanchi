import type { CaseStudy } from '$lib/types/project';
import bgColegioEducere from '$lib/assets/images/projects/bg-colegio-educere.webp';
import colegioEducereLogo from '$lib/assets/icons/logos/colegio-educere.svg';

import paginaPrincipal from '$lib/assets/images/projects/colegioEducere/pagina-principal-colegio-educere.webp';
import vacaciones2026 from '$lib/assets/images/projects/colegioEducere/vacaciones-2026-colegio-educere.webp';
import admision2026 from '$lib/assets/images/projects/colegioEducere/admision-2026-colegio-educere.webp';
import contacto from '$lib/assets/images/projects/colegioEducere/contacto-colegio-educere.webp';
import nivelesEducativos from '$lib/assets/images/projects/colegioEducere/niveles-educativos-colegio-educere.webp';

import SvelteKitLogo from '$lib/assets/icons/technologies/SvelteKitLogo.svelte';
import TailwindLogo from '$lib/assets/icons/technologies/TailwindLogo.svelte';
import DaisyLogo from '$lib/assets/icons/technologies/DaisyLogo.svelte';
import VercelLogo from '$lib/assets/icons/technologies/VercelLogo.svelte';

export const colegioEducere: CaseStudy = {
	id: 'colegio-educere',
	meta: {
		title: 'Colegio Educere',
		description:
			'Caso de estudio del desarrollo del sitio web institucional del Colegio Educere (Huancayo). El objetivo fue modernizar su presencia digital y facilitar la comunicación y los procesos de admisión.',
		tagline: 'Sitio web institucional',
		date: 'Nov 2025 - Dic 2025',
		role: 'Desarrollador Full Stack',
		keywords: ['Desarrollo web', 'SvelteKit', 'Tailwind CSS', 'Colegio Educere', 'Huancayo'],
		stack: ['SvelteKit', 'Tailwind CSS', 'DaisyUI', 'Vercel'],
		bgHero: {
			src: bgColegioEducere,
			alt: 'Fondo hero del Colegio Educere'
		},
		ogImage: {
			src: 'https://vanchi.pro/images/proyectos/og-colegio-educere.webp',
			alt: 'Imagen OG del Colegio Educere'
		}
	},
	context: {
		client: 'Colegio Educere',
		logo: colegioEducereLogo,
		problem:
			'El colegio necesitaba una plataforma digital moderna para atraer a las familias, presentar sus programas educativos y simplificar el proceso de admisión.',
		constraints: [
			'Diseño atractivo y fácil de navegar.',
			'Optimización prioritaria para dispositivos móviles.',
			'Integración de formularios de contacto y admisión funcionales.'
		]
	},
	myRole: {
		description:
			'Responsable del desarrollo full stack utilizando SvelteKit y Tailwind CSS. Implementé un diseño responsivo, optimicé el rendimiento y aseguré una experiencia de usuario accesible y coherente en todos los dispositivos.',
		deliverables: [
			'Sitio web completo',
			'Versión móvil optimizada',
			'Formularios de contacto y admisión funcionales'
		]
	},
	research: {
		methods: [
			'Entrevistas con el director y el equipo administrativo',
			'Análisis comparativo de sitios web de colegios',
			'Revisión de tendencias en diseño web educativo'
		],
		findings: [
			{
				title: 'Interfaz intuitiva',
				desc: 'El sitio debía ser fácilmente navegable para padres y estudiantes de distintas edades.'
			},
			{
				title: 'Funcionalidades esenciales',
				desc: 'Priorizar formularios de contacto y admisión claros para reducir fricción en la comunicación.'
			},
			{
				title: 'Impacto en la percepción',
				desc: 'Un diseño profesional y confiable mejora la imagen del colegio y facilita la captación de nuevas matrículas.'
			}
		],
		insight:
			'Una interfaz clara, accesible y orientada a la conversión es determinante para mejorar la comunicación y atraer nuevas inscripciones.'
	},
	solution: {
		concept:
			'Crear un sitio moderno, accesible y responsivo que refleje la identidad del colegio y simplifique la interacción con familias y futuros estudiantes.',
		decisions: [
			'Diseño mobile‑first y responsivo',
			'Optimización de rendimiento y accesibilidad',
			'Formularios integrados y fáciles de usar',
			'Uso de DaisyUI para componentes accesibles y consistentes'
		]
	},
	ui: {
		description:
			'El diseño priorizó la simplicidad y la claridad. Seleccioné una paleta coherente con la identidad institucional y aseguré que las secciones clave fueran accesibles desde cualquier dispositivo.',
		gallery: [
			{
				src: paginaPrincipal,
				alt: 'Página principal del Colegio Educere',
				caption:
					'Vista principal del sitio, con la bienvenida y la navegación a las secciones más relevantes.'
			},
			{
				src: vacaciones2026,
				alt: 'Sección Vacaciones 2026 del Colegio Educere',
				caption:
					'Detalle de la sección de actividades vacacionales 2026, con información dirigida a padres y estudiantes.'
			},
			{
				src: admision2026,
				alt: 'Sección Admisión 2026 del Colegio Educere',
				caption:
					'Página dedicada al proceso de admisión 2026, con formularios y pasos claros para los postulantes.'
			},
			{
				src: contacto,
				alt: 'Sección de contacto del Colegio Educere',
				caption:
					'Sección de contacto que facilita la comunicación directa vía WhatsApp y formularios de consulta.'
			},
			{
				src: nivelesEducativos,
				alt: 'Sección Niveles Educativos del Colegio Educere',
				caption:
					'Presentación de los niveles educativos (inicial y primaria) con información y beneficios para las familias.'
			}
		]
	},
	tech: {
		stackDetails:
			'Desarrollo con SvelteKit para una experiencia rápida e interactiva, maquetación con Tailwind CSS y DaisyUI para una implementación eficiente, y despliegue en Vercel para un hosting confiable.',
		logos: [SvelteKitLogo, TailwindLogo, DaisyLogo, VercelLogo],
		logosNombres: ['SvelteKit', 'Tailwind CSS', 'DaisyUI', 'Vercel']
	},
	results: {
		metrics: [
			{ value: '50%', label: 'Incremento en consultas de admisión' },
			{ value: '70%', label: 'Reducción en la tasa de rebote' },
			{ value: '100%', label: 'Disponibilidad del sitio web' }
		],
		feedback:
			'El sitio mejoró notablemente la presencia digital del Colegio Educere, facilitando la comunicación con las familias y aumentando las consultas de admisión.'
	},
	assets: {
		liveUrl: 'https://www.colegioeducere.edu.pe/'
	}
};

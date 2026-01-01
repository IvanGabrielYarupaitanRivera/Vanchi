import type { CaseStudy } from '$lib/types/project';
import bgPeraltaAsociados from '$lib/assets/images/projects/bg-peralta-asociados.webp';
import peraltaAsociadosLogo from '$lib/assets/icons/logos/peralta-asociados.svg';

import paginaPrincipal from '$lib/assets/images/projects/peraltaAsociados/pagina-principal-peralta-asociados.webp';
import servicios from '$lib/assets/images/projects/peraltaAsociados/servicios-peralta-asociados.webp';
import equipoLegal from '$lib/assets/images/projects/peraltaAsociados/equipo-legal-peralta-asociados.webp';
import contacto from '$lib/assets/images/projects/peraltaAsociados/contacto-peralta-asociados.webp';
import formularioContacto from '$lib/assets/images/projects/peraltaAsociados/formulario-contacto-peralta-asociados.webp';
import perfilGoogleMyBusiness from '$lib/assets/images/projects/peraltaAsociados/perfil-google-my-business-peralta-asociados.webp';

import TailwindLogo from '$lib/assets/icons/technologies/TailwindLogo.svelte';
import AstroLogo from '$lib/assets/icons/technologies/AstroLogo.svelte';
import NetlifyLogo from '$lib/assets/icons/technologies/NetlifyLogo.svelte';
import SEOLogo from '$lib/assets/icons/technologies/SEOLogo.svelte';

export const peraltaAsociados: CaseStudy = {
	id: 'peralta-asociados',
	meta: {
		title: 'Peralta Asociados',
		description:
			'Desarrollo del sitio web para el estudio de abogados Peralta Asociados. Proyecto orientado a fortalecer la presencia online del despacho en Huancavelica, destacar su experiencia legal y facilitar el contacto con clientes potenciales.',
		tagline: 'Diseño y desarrollo de sitio web profesional',
		date: 'Ene 2025 - Mar 2025',
		role: 'Desarrollador Frontend',
		keywords: ['Desarrollo web', 'Astro', 'Tailwind CSS', 'Estudio de abogados', 'Huancavelica'],
		stack: ['Astro', 'Tailwind CSS', 'JavaScript', 'Netlify'],
		bgHero: {
			src: bgPeraltaAsociados,
			alt: 'Fondo hero de Peralta Asociados'
		},
		ogImage: {
			src: 'https://vanchi.pro/images/proyectos/og-peralta-asociados.webp',
			alt: 'Imagen OG — Peralta Asociados'
		}
	},
	context: {
		client: 'Peralta Asociados',
		logo: peraltaAsociadosLogo,
		problem:
			'El estudio necesitaba una presencia digital profesional que transmitiera confianza y facilitara la captación de clientes. Requerían un sitio rápido, optimizado para SEO y accesible desde dispositivos móviles.',
		constraints: [
			'Un sitio profesional y optimizado para SEO con tiempos de carga reducidos.',
			'Interfaz clara y navegación intuitiva en dispositivos móviles.',
			'Diseño sobrio que refleje la seriedad del despacho.'
		]
	},
	myRole: {
		description:
			'Responsable del desarrollo frontend con Astro y Tailwind CSS. Colaboré con el cliente para materializar el diseño, asegurar la accesibilidad, optimizar rendimiento y poner en marcha un formulario de contacto funcional.',
		deliverables: [
			'Sitio responsivo y optimizado para SEO',
			'Mejoras de rendimiento y velocidad de carga',
			'Formulario de contacto integrado y funcional'
		]
	},
	research: {
		methods: [
			'Entrevistas con el cliente',
			'Análisis de referencias de estudios jurídicos',
			'Pruebas de rendimiento con Lighthouse y ajustes SEO'
		],
		findings: [
			{
				title: 'Interfaz accesible',
				desc: 'El cliente requería una experiencia sencilla y fácil de usar para todo el público.'
			},
			{
				title: 'Alto rendimiento',
				desc: 'Prioridad en tiempos de carga rápidos y experiencia fluida en dispositivos móviles.'
			},
			{
				title: 'Tonalidad profesional',
				desc: 'Diseño sobrio que transmita confianza y autoridad legal.'
			}
		],
		insight:
			'Una interfaz cuidada y optimizada mejora la credibilidad del despacho y facilita la conversión de visitantes en clientes.'
	},
	solution: {
		concept: 'Sitio web profesional, accesible y optimizado para estudios de abogados',
		decisions: [
			'Elegir Astro para lograr tiempos de carga y SEO óptimos.',
			'Utilizar Tailwind CSS para una implementación rápida y coherente del diseño.',
			'Diseño orientado a usabilidad y accesibilidad en móviles.',
			'Aplicar prácticas SEO para mejorar visibilidad en buscadores.'
		]
	},
	ui: {
		description:
			'El diseño privilegia la claridad y la elegancia: paleta sobria, tipografía legible y una jerarquía visual que facilita la lectura. La navegación se estructuró para que los usuarios encuentren servicios, equipo y contacto de forma inmediata, tanto en móvil como en escritorio.',
		gallery: [
			{
				src: paginaPrincipal,
				alt: 'Página principal',
				caption: 'Vista principal del sitio, con enfoque en presentación institucional y servicios.'
			},
			{
				src: servicios,
				alt: 'Sección de servicios',
				caption: 'Listado de áreas legales y descripciones claras para cada servicio ofrecido.'
			},
			{
				src: equipoLegal,
				alt: 'Equipo legal',
				caption: 'Perfil del equipo profesional que integra el estudio.'
			},
			{
				src: contacto,
				alt: 'Sección de contacto',
				caption: 'Información de contacto y accesos rápidos para comunicarse con el despacho.'
			},
			{
				src: formularioContacto,
				alt: 'Formulario de contacto',
				caption: 'Formulario diseñado para facilitar consultas y solicitudes de asesoría.'
			},
			{
				src: perfilGoogleMyBusiness,
				alt: 'Perfil Google My Business',
				caption: 'Gestión de la presencia local del despacho en Google.'
			}
		]
	},
	tech: {
		stackDetails:
			'Desarrollo con Astro para rendimiento y SEO, maquetación con Tailwind CSS para consistencia y velocidad de implementación, y despliegue en Netlify para un hosting estable. Se incorporaron prácticas SEO durante todo el proceso.',
		logos: [AstroLogo, TailwindLogo, NetlifyLogo, SEOLogo],
		logosNombres: ['Astro', 'Tailwind', 'Netlify', 'SEO']
	},
	results: {
		metrics: [
			{ value: '100%', label: 'Presencia digital' },
			{ value: '80%', label: 'Incremento en captación' },
			{ value: '24H', label: 'Disponibilidad del servicio' }
		],
		feedback:
			'El sitio superó las expectativas del cliente: es estético, funcional y ha mejorado su visibilidad en línea y la captación de nuevos clientes.'
	},
	assets: {
		liveUrl: 'https://peraltaasociados.com/'
	}
};

import junin360 from '$lib/assets/images/projects/junin360.webp';
import mediroosevelt from '$lib/assets/images/projects/mediroosevelt.webp';
import farmape from '$lib/assets/images/projects/farmape.webp';
import obstetraconecta from '$lib/assets/images/projects/obstetraconecta.webp';
import diapis from '$lib/assets/images/projects/diapis.webp';
import peraltaasociados from '$lib/assets/images/projects/peraltaasociados.webp';
import colegioeducere from '$lib/assets/images/projects/colegioeducere.webp';

export interface Project {
	id: number;
	title: string;
	category: string;
	description: string;
	image: string;
	tags: string[];
	href: string;
	link: string;
	video?: string;
	date: string;
}

export const PROJECTS: Project[] = [
	{
		id: 1,
		title: 'Junin360',
		category: 'Optimización de Procesos',
		description:
			'Plataforma de control de informes de control para el GORE Junín utilizando tecnologías modernas e IA para alertar a los responsables y eliminar el riesgo de responsabilidades legales.',
		image: junin360,
		tags: ['SvelteKit', 'Supabase', 'OpenRouter', 'N8N'],
		href: '/proyectos/junin360',
		link: 'https://junin360.com/',
		date: 'Setiembre 2025'
	},
	{
		id: 2,
		title: 'MediRoosevelt',
		category: 'HealthTech',
		description:
			'Proyecto para los alumnos de la escuela profesional de Medicina Humana de la Universidad Roosevelt, ganó el primer puesto en la Expociencia 2025 - II.',
		image: mediroosevelt,
		tags: ['Svelte', 'Convex', 'TypeScript', 'Gemini API'],
		href: '/proyectos/mediroosevelt',
		link: 'https://mediroosevelt.com/',
		video: 'https://www.youtube.com/watch?v=2RlIn3JFajc',
		date: 'Noviembre 2025'
	},
	{
		id: 3,
		title: 'Farmape',
		category: 'HealthTech',
		description:
			'Proyecto para los alumnos de la escuela profesional de Farmacia de la Universidad Roosevelt, ganó el primer puesto en la Expociencia 2025 - II.',
		image: farmape,
		tags: ['Svelte', 'Convex', 'TypeScript', 'Gemini API'],
		href: '/proyectos/farmape',
		link: 'https://www.farmape.net/',
		video: 'https://www.youtube.com/watch?v=6-3bhIxR4-k',
		date: 'Noviembre 2025'
	},
	{
		id: 4,
		title: 'Obstetra Conecta',
		category: 'HealthTech',
		description:
			'Proyecto para las alumnas de la escuela profesional de Obstetricia de la Universidad Roosevelt, ganó el segundo puesto en la Expociencia 2025 - II.',
		image: obstetraconecta,
		tags: ['Svelte', 'Convex', 'TypeScript', 'Gemini API'],
		href: '/proyectos/obstetraconecta',
		link: 'https://www.obstetraconecta.com/',
		video: 'https://www.youtube.com/watch?v=tVvpd5Wp98k',
		date: 'Noviembre 2025'
	},
	{
		id: 5,
		title: 'Diapis',
		category: 'EduTech',
		description:
			'Sistema de IA que revoluciona el aprendizaje en el aula. Genera rondas de preguntas y respuestas personalizadas a partir del material de clase para impulsar la atención y la participación estudiantil.',
		image: diapis,
		tags: ['SvelteKit', 'Convex', 'Livekit', 'Gemini API'],
		href: '/proyectos/diapis',
		link: 'https://diapis.vercel.app/',
		video: 'https://www.youtube.com/watch?v=nHPqMsQJLFw',
		date: 'Octubre 2025'
	},
	{
		id: 6,
		title: 'Peralta Asociados',
		category: 'LegalTech',
		description:
			'Construcción de identidad digital de alto impacto para el estudio jurídico. Sitio web diseñado con la arquitectura más moderna (Astro/Tailwind) para garantizar la máxima velocidad, posicionamiento SEO y la atracción de nuevos clientes.',
		image: peraltaasociados,
		tags: ['Astro', 'Tailwind', 'Netlify Forms'],
		href: '/proyectos/peralta-asociados',
		link: 'https://peraltaasociados.com/',
		date: 'Enero 2025'
	},
	{
		id: 7,
		title: 'Colegio Educere',
		category: 'EduTech',
		description:
			'Desarrollo del Sitio Web del Colegio Educere, una institución educativa en Huancayo. El sitio web está diseñado para proporcionar información clara y accesible sobre los programas académicos, actividades extracurriculares, facilitando la comunicación entre padres, estudiantes y el personal educativo.',
		image: colegioeducere,
		tags: ['Astro', 'Tailwind'],
		href: '/proyectos/colegio-educere',
		link: 'https://colegioeducere.edu.pe/',
		date: 'Diciembre 2025'
	}
];

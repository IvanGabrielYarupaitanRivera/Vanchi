import { projectsData } from '$lib/data/projects';
import type { CaseStudy } from '$lib/types/project';

export const ProjectService = {
	/**
	 * Busca un proyecto por su ID (slug).
	 * Retorna undefined si no existe.
	 */
	getById: (id: string): CaseStudy | undefined => {
		return projectsData[id];
	},

	/**
	 * Retorna todos los proyectos.
	 * Útil para listados o sitemaps.
	 */
	getAll: (): CaseStudy[] => {
		return Object.values(projectsData);
	}
};

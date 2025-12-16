import { error } from '@sveltejs/kit';
import { ProjectService } from '$lib/services/projects.service';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	// 1. Obtenemos el ID de la URL
	const { projectId } = params;

	// 2. Pedimos el proyecto al servicio
	const project = ProjectService.getById(projectId);

	// 3. Si no existe, lanzamos un 404 nativo de SvelteKit
	if (!project) {
		throw error(404, {
			message: 'El proyecto que buscas no existe o ha sido movido.'
		});
	}

	// 4. Retornamos la data a la vista (+page.svelte)
	return {
		project
	};
};

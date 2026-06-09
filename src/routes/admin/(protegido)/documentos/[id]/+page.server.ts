import { convexServer } from '$lib/server/convex';
import { api } from '$convex/_generated/api';
import type { PageServerLoad } from './$types';
import type { Id } from '$convex/_generated/dataModel';

export const load: PageServerLoad = async ({ params }) => {
	const id = params.id as Id<'documentosV2'>;
	const documento = await convexServer.query(api.entidades.documentosV2.queries.obtener, { id });

	return {
		id,
		documento,
	};
};

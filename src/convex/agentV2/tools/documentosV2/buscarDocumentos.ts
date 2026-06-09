import { createTool } from '@convex-dev/agent';
import { api } from '../../../_generated/api';
import { z } from 'zod';

/**
 * Tool: buscarDocumentos
 *
 * Busca documentos del portafolio por categoría, subcategoría y/o etiquetas.
 * El agente usa esta tool cuando necesita información sobre proyectos, servicios,
 * stack, precios o cualquier tema del portafolio de Ivan.
 *
 * Todos los filtros son opcionales. Si no se pasa ninguno, devuelve todos.
 */
export const buscarDocumentos = createTool({
	description:
		'Busca información estructurada del portafolio de Vanchi. ' +
		'Úsala cuando el usuario pregunte sobre proyectos, servicios, stack tecnológico, precios, ' +
		'experiencia o cualquier tema relacionado con Ivan Yarupaitan y su trabajo. ' +
		'Puedes filtrar por categoría (sobre-mi, stack, servicio, precios, proyecto, legal), ' +
		'subcategoría (frontend, backend, ia, salud, educacion, legal, web, agentes, waas, personal) ' +
		'o etiquetas específicas (sveltekit, convex, molaric, etc.).',
	inputSchema: z.object({
		categoria: z
			.enum(['sobre-mi', 'stack', 'servicio', 'precios', 'proyecto', 'legal'])
			.optional()
			.describe('Filtro opcional por categoría del documento'),
		subcategoria: z
			.enum(['frontend', 'backend', 'ia', 'salud', 'educacion', 'legal', 'web', 'agentes', 'waas', 'personal'])
			.optional()
			.describe('Filtro opcional por subcategoría del documento'),
		etiquetas: z
			.array(z.string())
			.optional()
			.describe('Filtro opcional por etiquetas del documento'),
	}),
	execute: async (ctx, { categoria, subcategoria, etiquetas }): Promise<string> => {
		console.log(`[buscarDocumentos] Consultando: cat=${categoria ?? '-'}, sub=${subcategoria ?? '-'}, etq=${etiquetas?.length ?? 0}`);

		const results = await ctx.runQuery(api.entidades.documentosV2.queries.buscar, {
			categoria,
			subcategoria,
			etiquetas,
		});

		console.log(`[buscarDocumentos] ${results.length} documento(s) encontrados`);

		// Devolvemos solo los campos útiles para el agente (sin ruido)
		const simplificado = results.map((doc) => ({
			titulo: doc.titulo,
			categoria: doc.categoria,
			subcategoria: doc.subcategoria,
			contenido: doc.contenido,
			url: doc.url,
			etiquetas: doc.etiquetas,
		}));

		return JSON.stringify(simplificado);
	},
});

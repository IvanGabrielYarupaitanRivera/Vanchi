import { internalAction } from "../_generated/server";
import { v } from "convex/values";

/**
 * Búsqueda vectorial: busca chunks por similitud semántica.
 * Se llama desde la tool searchKnowledgeBase del agente.
 */
export const searchChunks = internalAction({
	args: { query: v.string() },
	handler: async (ctx, { query }) => {
		// TODO: Paso futuro — generar embedding de query + vectorSearch
		// Por ahora retorna array vacío
		return [];
	},
});

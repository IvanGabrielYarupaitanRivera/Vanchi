import { createTool } from '@convex-dev/agent';
import { internal } from '../_generated/api';
import { z } from 'zod';

/**
 * Tool de búsqueda en la knowledge base del portafolio.
 * El agente la invoca cuando necesita información sobre proyectos,
 * tecnologías, servicios o experiencia de Ivan.
 */
export const searchKnowledgeBase = createTool({
	description:
		'Busca información en la base de conocimiento del portafolio de Vanchi. ' +
		'Úsala cuando el usuario pregunte sobre proyectos, tecnologías, servicios, precios o experiencia.',
	inputSchema: z.object({
		query: z.string().describe('La consulta del usuario para buscar en la base de conocimiento')
	}),
	execute: async (ctx, { query }): Promise<string> => {
		const results = await ctx.runAction(internal.rag.search.searchChunks, { query });
		return JSON.stringify(results);
	}
});

/**
 * Todas las tools del agente exportadas como objeto para config.ts
 */
export const agentTools = {
	searchKnowledgeBase
};

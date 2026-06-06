import { internalAction } from '../_generated/server';
import { v } from 'convex/values';
import { embed } from 'ai';
import { internal } from '../_generated/api';

/**
 * Búsqueda vectorial: busca chunks por similitud semántica.
 */
export const searchChunks = internalAction({
	args: { query: v.string() },
	handler: async (ctx, { query }): Promise<string[]> => {
		console.log(`[searchChunks] Generando embedding para: "${query.slice(0, 80)}..."`);

		const { embedding } = await embed({
			model: 'openai/text-embedding-3-small',
			value: query
		});

		console.log(`[searchChunks] Embedding generado (${embedding.length} dimensiones)`);

		const results = await ctx.vectorSearch('embeddings', 'byEmbedding', {
			vector: embedding,
			limit: 5
		});

		console.log(`[searchChunks] Vector search: ${results.length} resultados`);

		if (results.length === 0) {
			return [];
		}

		const textos: string[] = [];

		for (const result of results) {
			const chunk = await ctx.runQuery(internal.rag.chunks.getChunkByEmbeddingId, {
				embeddingId: result._id
			});
			if (chunk) {
				textos.push(chunk.text);
			}
		}

		console.log(`[searchChunks] ${textos.length} chunks relevantes encontrados`);
		return textos;
	}
});

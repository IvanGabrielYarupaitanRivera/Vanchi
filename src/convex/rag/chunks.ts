import { internalMutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Inserta un chunk en la tabla chunks.
 */
export const insertChunk = internalMutation({
	args: {
		documentId: v.id("documentos"),
		text: v.string(),
		embeddingId: v.union(v.id("embeddings"), v.null()),
	},
	handler: async (ctx, args) => {
		return await ctx.db.insert("chunks", args);
	},
});

/**
 * Inserta un embedding en la tabla embeddings.
 */
export const insertEmbedding = internalMutation({
	args: {
		embedding: v.array(v.float64()),
		chunkId: v.id("chunks"),
	},
	handler: async (ctx, args) => {
		return await ctx.db.insert("embeddings", args);
	},
});

/**
 * Actualiza el embeddingId de un chunk.
 */
export const patchChunkEmbedding = internalMutation({
	args: {
		chunkId: v.id("chunks"),
		embeddingId: v.id("embeddings"),
	},
	handler: async (ctx, args) => {
		await ctx.db.patch(args.chunkId, { embeddingId: args.embeddingId });
	},
});

import { internalMutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Inserta un documento en la tabla documentos.
 * Devuelve el Id del documento insertado.
 */
export const insertDocument = internalMutation({
	args: {
		title: v.string(),
		slug: v.string(),
		category: v.string(),
	},
	handler: async (ctx, args) => {
		return await ctx.db.insert("documentos", args);
	},
});

/**
 * Inserta un chunk en la tabla chunks.
 * Devuelve el Id del chunk insertado.
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
 * Devuelve el Id del embedding insertado.
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

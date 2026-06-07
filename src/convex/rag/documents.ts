import { internalMutation, internalQuery } from "../_generated/server";
import { v } from "convex/values";

/**
 * Inserta un documento en la tabla documentos.
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
 * Verifica si un documento existe por su slug.
 */
export const getDocumentBySlug = internalQuery({
	args: { slug: v.string() },
	handler: async (ctx, { slug }) => {
		return await ctx.db
			.query("documentos")
			.withIndex("bySlug", (q) => q.eq("slug", slug))
			.first();
	},
});

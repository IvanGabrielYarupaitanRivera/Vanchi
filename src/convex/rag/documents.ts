import { internalMutation } from "../_generated/server";
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

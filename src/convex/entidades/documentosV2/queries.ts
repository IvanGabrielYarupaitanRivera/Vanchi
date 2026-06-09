import { query } from "../../_generated/server";
import { v } from "convex/values";

/**
 * Lista todos los documentos de documentosV2.
 */
export const listar = query({
	args: {},
	handler: async (ctx) => {
		return await ctx.db.query("documentosV2").collect();
	},
});

/**
 * Obtiene un documento por su ID.
 */
export const obtener = query({
	args: { id: v.id("documentosV2") },
	handler: async (ctx, { id }) => {
		return await ctx.db.get(id);
	},
});

/**
 * Busca documentos por categoría, subcategoría y/o etiquetas.
 * Todos los filtros son opcionales.
 */
export const buscar = query({
	args: {
		categoria: v.optional(
			v.union(
				v.literal("sobre-mi"), v.literal("stack"), v.literal("servicio"),
				v.literal("precios"), v.literal("proyecto"), v.literal("legal")
			)
		),
		subcategoria: v.optional(
			v.union(
				v.literal("frontend"), v.literal("backend"), v.literal("ia"),
				v.literal("salud"), v.literal("educacion"), v.literal("legal"),
				v.literal("web"), v.literal("agentes"), v.literal("waas")
			)
		),
		etiquetas: v.optional(v.array(v.string())),
	},
	handler: async (ctx, { categoria, subcategoria, etiquetas }) => {
		let docs = await ctx.db.query("documentosV2").collect();

		if (categoria) {
			docs = docs.filter((d) => d.categoria === categoria);
		}
		if (subcategoria) {
			docs = docs.filter((d) => d.subcategoria === subcategoria);
		}
		if (etiquetas && etiquetas.length > 0) {
			docs = docs.filter((d) =>
				etiquetas.some((etq) => (d.etiquetas as readonly string[]).includes(etq))
			);
		}

		return docs;
	},
});

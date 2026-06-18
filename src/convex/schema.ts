import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import {
	categoriaValidator,
	subcategoriaValidator,
	etiquetaValidator,
} from "./entidades/documentosV2/literals";

export default defineSchema({
	documentosV2: defineTable({
		titulo: v.string(),
		categoria: categoriaValidator,
		subcategoria: v.optional(subcategoriaValidator),
		contenido: v.string(),
		url: v.optional(v.string()),
		etiquetas: v.array(etiquetaValidator),
	})
		.index("byCategoria", ["categoria"])
		.index("bySubcategoria", ["subcategoria"]),
});

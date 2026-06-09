import { mutation } from "../../_generated/server";
import { v } from "convex/values";
import { validarPassword } from "../../admin";

const categorias = v.union(
	v.literal("sobre-mi"), v.literal("stack"), v.literal("servicio"),
	v.literal("precios"), v.literal("proyecto"), v.literal("legal")
);

const subcategorias = v.union(
	v.literal("frontend"), v.literal("backend"), v.literal("ia"),
	v.literal("salud"), v.literal("educacion"), v.literal("legal"),
	v.literal("web"), v.literal("agentes"), v.literal("waas"),
	v.literal("personal")
);

const etiquetasValidas = v.union(
	v.literal("sveltekit"), v.literal("convex"), v.literal("tailwindcss"),
	v.literal("typescript"), v.literal("astro"), v.literal("openrouter"),
	v.literal("vercel-ai-gateway"), v.literal("whatsapp"), v.literal("deepgram"),
	v.literal("livekit"), v.literal("supabase"), v.literal("n8n"),
	v.literal("gemini-api"), v.literal("google-calendar"), v.literal("better-auth"),
	v.literal("netlify"), v.literal("lit"),
	v.literal("molaric"), v.literal("encap"), v.literal("junin360"),
	v.literal("mediroosevelt"), v.literal("farmape"), v.literal("obstetraconecta"),
	v.literal("diapis"), v.literal("colegio-educere"), v.literal("peralta-asociados"),
	v.literal("experiencia"), v.literal("desarrollo-web"), v.literal("agentes-ia"),
	v.literal("precios"), v.literal("redes-sociales"), v.literal("soluciones-legales"),
	v.literal("rutas"), v.literal("asistente")
);

/**
 * Crea un nuevo documento en documentosV2.
 */
export const crear = mutation({
	args: {
		password: v.string(),
		titulo: v.string(),
		categoria: categorias,
		subcategoria: v.optional(subcategorias),
		contenido: v.string(),
		url: v.optional(v.string()),
		etiquetas: v.array(etiquetasValidas),
	},
	handler: async (ctx, args) => {
		validarPassword(args.password);
		return await ctx.db.insert("documentosV2", {
			titulo: args.titulo,
			categoria: args.categoria,
			subcategoria: args.subcategoria ?? undefined,
			contenido: args.contenido,
			url: args.url ?? undefined,
			etiquetas: args.etiquetas,
		});
	},
});

/**
 * Actualiza un documento existente en documentosV2.
 */
export const actualizar = mutation({
	args: {
		password: v.string(),
		id: v.id("documentosV2"),
		titulo: v.optional(v.string()),
		categoria: v.optional(categorias),
		subcategoria: v.optional(v.union(subcategorias, v.literal("eliminar"))),
		contenido: v.optional(v.string()),
		url: v.optional(v.union(v.string(), v.literal("eliminar"))),
		etiquetas: v.optional(v.array(etiquetasValidas)),
	},
	handler: async (ctx, args) => {
		validarPassword(args.password);

		const patch: Record<string, string | string[] | undefined> = {};

		if (args.titulo !== undefined) patch.titulo = args.titulo;
		if (args.categoria !== undefined) patch.categoria = args.categoria;
		if (args.contenido !== undefined) patch.contenido = args.contenido;
		if (args.etiquetas !== undefined) patch.etiquetas = args.etiquetas;
		if (args.subcategoria !== undefined) {
			patch.subcategoria = args.subcategoria === "eliminar" ? undefined : args.subcategoria;
		}
		if (args.url !== undefined) {
			patch.url = args.url === "eliminar" ? undefined : args.url;
		}

		await ctx.db.patch(args.id, patch);
	},
});

/**
 * Elimina un documento de documentosV2.
 */
export const eliminar = mutation({
	args: {
		password: v.string(),
		id: v.id("documentosV2"),
	},
	handler: async (ctx, { password, id }) => {
		validarPassword(password);
		await ctx.db.delete(id);
	},
});

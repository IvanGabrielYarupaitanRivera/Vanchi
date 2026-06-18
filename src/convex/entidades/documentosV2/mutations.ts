import { mutation } from "../../_generated/server";
import { v } from "convex/values";
import { validarPassword } from "../../admin";
import {
	categoriaValidator,
	subcategoriaValidator,
	etiquetaValidator,
} from "./literals";

/**
 * Sentinel usado en mutations opcionales para indicar que el cliente
 * quiere borrar el campo (establecerlo a `undefined`).
 * Centralizado aqui para que queries, mutations y tipos compartan el mismo valor.
 */
export const ELIMINAR = "eliminar" as const;

/**
 * Helper: toma un patch parcial y elimina cualquier valor que sea `ELIMINAR`,
 * dejandolo como `undefined` (lo que Convex interpreta como unset).
 * Asi el cliente puede decir "borra este campo" sin tener que saber del backend.
 */
function aplicarSentinels(patch: Record<string, string | string[] | undefined>): void {
	for (const key of Object.keys(patch)) {
		if (patch[key] === ELIMINAR) {
			patch[key] = undefined;
		}
	}
}

/**
 * Crea un nuevo documento en documentosV2.
 */
export const crear = mutation({
	args: {
		password: v.string(),
		titulo: v.string(),
		categoria: categoriaValidator,
		subcategoria: v.optional(subcategoriaValidator),
		contenido: v.string(),
		url: v.optional(v.string()),
		etiquetas: v.array(etiquetaValidator),
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
 * Para borrar un campo opcional, envia el valor `ELIMINAR`.
 */
export const actualizar = mutation({
	args: {
		password: v.string(),
		id: v.id("documentosV2"),
		titulo: v.optional(v.string()),
		categoria: v.optional(categoriaValidator),
		subcategoria: v.optional(v.union(subcategoriaValidator, v.literal(ELIMINAR))),
		contenido: v.optional(v.string()),
		url: v.optional(v.union(v.string(), v.literal(ELIMINAR))),
		etiquetas: v.optional(v.array(etiquetaValidator)),
	},
	handler: async (ctx, args) => {
		validarPassword(args.password);

		const patch: Record<string, string | string[] | undefined> = {};

		if (args.titulo !== undefined) patch.titulo = args.titulo;
		if (args.categoria !== undefined) patch.categoria = args.categoria;
		if (args.contenido !== undefined) patch.contenido = args.contenido;
		if (args.etiquetas !== undefined) patch.etiquetas = args.etiquetas;
		if (args.subcategoria !== undefined) patch.subcategoria = args.subcategoria;
		if (args.url !== undefined) patch.url = args.url;

		aplicarSentinels(patch);

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

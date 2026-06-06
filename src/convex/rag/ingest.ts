import { internalAction } from "../_generated/server";
import { embed } from "ai";

/**
 * Genera embeddings para chunks que aún no tienen embeddingId.
 * Se puede llamar manualmente después del seed o cuando se agreguen nuevos documentos.
 */
export const generateMissingEmbeddings = internalAction({
	args: {},
	handler: async (ctx) => {
		// TODO: Paso futuro — query chunks sin embedding, generar y guardar
		console.log("generateMissingEmbeddings: pendiente de implementación");
	},
});

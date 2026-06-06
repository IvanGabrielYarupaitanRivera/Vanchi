import { action } from "../_generated/server";
import { v } from "convex/values";
import { vanchiAgent } from "./config";

/**
 * Crea un nuevo thread de conversación e inicia streaming de la respuesta.
 */
export const createThread = action({
	args: { prompt: v.string() },
	handler: async (ctx, { prompt }) => {
		console.log(`[createThread] Iniciando thread para prompt: "${prompt.slice(0, 100)}..."`);

		const { threadId } = await vanchiAgent.createThread(ctx);
		console.log(`[createThread] Thread creado: ${threadId}`);

		// Streaming: la respuesta se guarda en Convex como deltas
		// El frontend la recibe vía useQuery reactiva
		await vanchiAgent.streamText(
			ctx,
			{ threadId },
			{ prompt },
			{ saveStreamDeltas: true },
		);

		console.log(`[createThread] Stream completado`);
		return { threadId };
	},
});

/**
 * Continúa un thread existente con un nuevo mensaje (streaming).
 */
export const continueThread = action({
	args: { prompt: v.string(), threadId: v.string() },
	handler: async (ctx, { prompt, threadId }) => {
		console.log(`[continueThread] Continuando thread ${threadId}`);

		await vanchiAgent.streamText(
			ctx,
			{ threadId },
			{ prompt },
			{ saveStreamDeltas: true },
		);

		console.log(`[continueThread] Stream completado`);
		return { success: true };
	},
});

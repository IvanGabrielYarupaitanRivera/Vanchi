import { action } from "../_generated/server";
import { v } from "convex/values";
import { vanchiAgent } from "./config";

/**
 * Crea un nuevo thread de conversación y genera la primera respuesta.
 */
export const createThread = action({
	args: { prompt: v.string() },
	handler: async (ctx, { prompt }) => {
		console.log(`[createThread] Iniciando thread para prompt: "${prompt.slice(0, 100)}..."`);

		const { threadId, thread } = await vanchiAgent.createThread(ctx);
		console.log(`[createThread] Thread creado: ${threadId}`);

		console.log(`[createThread] Generando respuesta...`);
		const result = await thread.generateText({ prompt });
		console.log(`[createThread] Respuesta recibida: ${result.text.slice(0, 100)}...`);

		return { threadId, text: result.text };
	},
});

/**
 * Continúa un thread existente con un nuevo mensaje.
 */
export const continueThread = action({
	args: { prompt: v.string(), threadId: v.string() },
	handler: async (ctx, { prompt, threadId }) => {
		console.log(`[continueThread] Continuando thread ${threadId} con prompt: "${prompt.slice(0, 100)}..."`);

		const { thread } = await vanchiAgent.continueThread(ctx, { threadId });
		console.log(`[continueThread] Thread recuperado, generando respuesta...`);

		const result = await thread.generateText({ prompt });
		console.log(`[continueThread] Respuesta recibida: ${result.text.slice(0, 100)}...`);

		return { text: result.text };
	},
});

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
		console.log(`[createThread] Result keys: ${Object.keys(result)}`);
		console.log(`[createThread] result.text type: ${typeof result.text}`);
		console.log(`[createThread] result.text length: ${result.text?.length}`);
		console.log(`[createThread] result.text raw: ${JSON.stringify(result.text)}`);
		console.log(`[createThread] result full: ${JSON.stringify(result).slice(0, 500)}`);

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
		console.log(`[continueThread] Result keys: ${Object.keys(result)}`);
		console.log(`[continueThread] result.text type: ${typeof result.text}`);
		console.log(`[continueThread] result.text length: ${result.text?.length}`);
		console.log(`[continueThread] result.text raw: ${JSON.stringify(result.text)}`);

		return { text: result.text };
	},
});

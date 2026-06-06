import { action } from "../_generated/server";
import { v } from "convex/values";
import { vanchiAgent } from "./config";

/**
 * Crea un nuevo thread de conversación y genera la primera respuesta.
 */
export const createThread = action({
	args: { prompt: v.string() },
	handler: async (ctx, { prompt }) => {
		const { threadId, thread } = await vanchiAgent.createThread(ctx);
		const result = await thread.generateText({ prompt });
		return { threadId, text: result.text };
	},
});

/**
 * Continúa un thread existente con un nuevo mensaje.
 */
export const continueThread = action({
	args: { prompt: v.string(), threadId: v.string() },
	handler: async (ctx, { prompt, threadId }) => {
		const { thread } = await vanchiAgent.continueThread(ctx, { threadId });
		const result = await thread.generateText({ prompt });
		return { text: result.text };
	},
});

import { action } from "../_generated/server";
import { v } from "convex/values";
import { vanchiAgent } from "./config";

/**
 * Crea un nuevo thread de conversación y genera la primera respuesta.
 */
export const createThread = action({
	args: { prompt: v.string() },
	handler: async (ctx, { prompt }) => {
		console.log(`[vanchiAgent] Creando thread. Prompt: "${prompt.slice(0, 120)}..."`);

		try {
			const { threadId, thread } = await vanchiAgent.createThread(ctx);
			console.log(`[vanchiAgent] ✅ Thread creado: ${threadId}`);

			const result = await thread.generateText({ prompt });
			const text = result.text ?? '(sin respuesta)';

			console.log(`[vanchiAgent] ✅ Respuesta generada (${text.length} chars): ${text.slice(0, 200)}...`);
			return { threadId, text };
		} catch (error) {
			console.error(`[vanchiAgent] ❌ Error en createThread:`, error);
			throw error;
		}
	},
});

/**
 * Continúa un thread existente con un nuevo mensaje.
 */
export const continueThread = action({
	args: { prompt: v.string(), threadId: v.string() },
	handler: async (ctx, { prompt, threadId }) => {
		console.log(`[vanchiAgent] Continuando thread ${threadId}. Prompt: "${prompt.slice(0, 120)}..."`);

		try {
			const { thread } = await vanchiAgent.continueThread(ctx, { threadId });
			const result = await thread.generateText({ prompt });
			const text = result.text ?? '(sin respuesta)';

			console.log(`[vanchiAgent] ✅ Respuesta continua (${text.length} chars): ${text.slice(0, 200)}...`);
			return { text };
		} catch (error) {
			console.error(`[vanchiAgent] ❌ Error en continueThread (${threadId}):`, error);
			throw error;
		}
	},
});

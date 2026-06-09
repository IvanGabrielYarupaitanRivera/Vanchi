import { action } from "../_generated/server";
import { v } from "convex/values";
import { vanchiAgentV2 } from "./config/config";

/**
 * Crea un nuevo thread de conversación con el agente v2 y genera la primera respuesta.
 */
export const createThread = action({
	args: { prompt: v.string() },
	handler: async (ctx, { prompt }) => {
		console.log(`[vanchiAgentV2] Creando thread. Prompt: "${prompt.slice(0, 120)}..."`);

		try {
			const { threadId, thread } = await vanchiAgentV2.createThread(ctx);
			console.log(`[vanchiAgentV2] Thread creado: ${threadId}`);

			const result = await thread.generateText({ prompt });
			const text = result.text ?? "(sin respuesta)";

			console.log(`[vanchiAgentV2] Respuesta generada (${text.length} chars): ${text.slice(0, 200)}...`);
			return { threadId, text };
		} catch (error) {
			console.error(`[vanchiAgentV2] Error en createThread:`, error);
			throw error;
		}
	},
});

/**
 * Continúa un thread existente del agente v2.
 */
export const continueThread = action({
	args: { prompt: v.string(), threadId: v.string() },
	handler: async (ctx, { prompt, threadId }) => {
		console.log(`[vanchiAgentV2] Continuando thread ${threadId}. Prompt: "${prompt.slice(0, 120)}..."`);

		try {
			const { thread } = await vanchiAgentV2.continueThread(ctx, { threadId });
			const result = await thread.generateText({ prompt });
			const text = result.text ?? "(sin respuesta)";

			console.log(`[vanchiAgentV2] Respuesta continua (${text.length} chars): ${text.slice(0, 200)}...`);
			return { text };
		} catch (error) {
			console.error(`[vanchiAgentV2] Error en continueThread (${threadId}):`, error);
			throw error;
		}
	},
});

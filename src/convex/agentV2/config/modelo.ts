import { createOpenAI } from '@ai-sdk/openai';

/**
 * Cliente OpenAI configurado para apuntar a Vercel AI Gateway.
 * AI_GATEWAY_API_KEY está declarada en convex.config.ts
 * y configurada en Convex dashboard.
 */
const openaiGateway = createOpenAI({
	apiKey: process.env.AI_GATEWAY_API_KEY,
	baseURL: 'https://ai-gateway.vercel.sh/v1'
});

/**
 * Modelo de lenguaje del agente v2.
 */
export const languageModel = openaiGateway.chat('inception/mercury-2');

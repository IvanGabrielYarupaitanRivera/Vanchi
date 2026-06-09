import { components } from '../../_generated/api';
import { Agent } from '@convex-dev/agent';
import { stepCountIs } from 'ai';
import { languageModel } from './modelo';
import { systemPrompt } from './prompt';
import { agentV2Tools } from '../tools';

/**
 * Agente Vanchi v2: arquitectura minimalista.
 * - Sin RAG, sin embeddings.
 * - Búsqueda textual sobre tabla documentosV2 (categorías, subcategorías, etiquetas).
 * - Una sola tool: buscarDocumentos.
 */
export const vanchiAgentV2 = new Agent(components.agent, {
	name: 'Vanchi Assistant v2',
	languageModel,
	tools: agentV2Tools,
	stopWhen: stepCountIs(5),
	instructions: systemPrompt,
});

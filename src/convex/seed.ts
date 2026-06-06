import { internalAction } from "./_generated/server";
import { internal } from "./_generated/api";
import type { Id } from "./_generated/dataModel";
import { embed } from "ai";

/**
 * Divide texto en chunks con superposición.
 */
function splitText(text: string, chunkSize = 2000, overlap = 100): string[] {
	if (text.length <= chunkSize) return [text];
	const chunks: string[] = [];
	let i = 0;
	while (i < text.length) {
		chunks.push(text.slice(i, i + chunkSize));
		i += chunkSize - overlap;
	}
	return chunks;
}

/**
 * Genera el embedding de un texto usando OpenAI vía Vercel AI Gateway.
 * AI_GATEWAY_API_KEY se auto-detecta del entorno de Convex.
 */
async function generateEmbedding(text: string): Promise<number[]> {
	const { embedding } = await embed({
		model: "openai/text-embedding-3-small",
		value: text,
	});
	return embedding;
}

/**
 * Seed de prueba: inserta un proyecto (Molaric) con sus chunks y embeddings.
 * Ejecutar: npx convex run --dev src/convex/seed.ts:seedKnowledgeBase
 */
export const seedKnowledgeBase = internalAction({
	args: {},
	handler: async (ctx) => {
		// ─── Documento de prueba ─────────────────────────
		const docId = await ctx.runMutation(internal.rag.documents.insertDocument, {
			title: "Molaric",
			slug: "proyecto-molaric",
			category: "proyecto",
		});

		console.log(`✅ Documento insertado: ${docId}`);

		// ─── Contenido del documento ─────────────────────
		const content = `Molaric es un agente de inteligencia artificial para clínicas dentales que funciona 24/7 a través de WhatsApp. Los pacientes pueden agendar, reprogramar o cancelar citas mediante conversaciones naturales, mientras que el sistema sincroniza automáticamente con Google Calendar de la clínica.

Tecnologías: SvelteKit, Convex, Vercel AI Gateway, Google Calendar API, TailwindCSS, Better Auth, TypeScript, Deepgram STT, Kapso WhatsApp.
Fecha: Abril 2026.
Rol de Iván: Full-Stack Developer & AI Engineer.

Características principales:
- Pacientes interactúan vía WhatsApp para agendar, reprogramar o cancelar citas
- Sincronización bidireccional automática con Google Calendar
- Recordatorios inteligentes con confirmación Sí/No vía WhatsApp
- Dashboard web con métricas en tiempo real
- Gestión de pacientes, citas, horarios y procedimientos
- Arquitectura multi-tenant con datos aislados por clínica
- Transcripción de voz para audios de WhatsApp (Deepgram)

Impacto: Disponibilidad 24/7 del agente, 100% de citas sincronizadas con Google Calendar, reducción del 30% de ausencias por recordatorios automáticos, aumento del 40% en citas agendadas fuera del horario laboral.

URL: https://molaric.com/`;

		// ─── Chunking ────────────────────────────────────
		const chunks = splitText(content, 2000, 100);
		const chunkIds: Id<"chunks">[] = [];

		for (const text of chunks) {
			const chunkId = await ctx.runMutation(internal.rag.chunks.insertChunk, {
				documentId: docId,
				text,
				embeddingId: null,
			}) as Id<"chunks">;
			chunkIds.push(chunkId);
		}

		console.log(`✅ ${chunks.length} chunk(s) insertados`);

		// ─── Embeddings ──────────────────────────────────
		for (let i = 0; i < chunks.length; i++) {
			const embedding = await generateEmbedding(chunks[i]);

			const embeddingId = await ctx.runMutation(internal.rag.chunks.insertEmbedding, {
				embedding,
				chunkId: chunkIds[i],
			});

			await ctx.runMutation(internal.rag.chunks.patchChunkEmbedding, {
				chunkId: chunkIds[i],
				embeddingId,
			});

			console.log(`✅ Embedding generado para chunk ${i + 1}/${chunks.length}`);
		}

		console.log("🎉 Seed completado exitosamente");
	},
});

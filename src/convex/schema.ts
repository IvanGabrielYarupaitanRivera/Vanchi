import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// ─── LITERALS ─────────────────────────────────────────────

const categoria = v.union(
  v.literal("sobre-mi"),
  v.literal("stack"),
  v.literal("servicio"),
  v.literal("precios"),
  v.literal("proyecto"),
  v.literal("legal")
);

const subcategoria = v.union(
  v.literal("frontend"),
  v.literal("backend"),
  v.literal("ia"),
  v.literal("salud"),
  v.literal("educacion"),
  v.literal("legal"),
  v.literal("web"),
  v.literal("agentes"),
  v.literal("waas"),
  v.literal("personal")
);

const etiqueta = v.union(
  // Tecnologías
  v.literal("sveltekit"),
  v.literal("convex"),
  v.literal("tailwindcss"),
  v.literal("typescript"),
  v.literal("astro"),
  v.literal("openrouter"),
  v.literal("vercel-ai-gateway"),
  v.literal("whatsapp"),
  v.literal("deepgram"),
  v.literal("livekit"),
  v.literal("supabase"),
  v.literal("n8n"),
  v.literal("gemini-api"),
  v.literal("google-calendar"),
  v.literal("better-auth"),
  v.literal("netlify"),
  v.literal("lit"),
  // Proyectos
  v.literal("molaric"),
  v.literal("encap"),
  v.literal("junin360"),
  v.literal("mediroosevelt"),
  v.literal("farmape"),
  v.literal("obstetraconecta"),
  v.literal("diapis"),
  v.literal("colegio-educere"),
  v.literal("peralta-asociados"),
  // Conceptos
  v.literal("experiencia"),
  v.literal("desarrollo-web"),
  v.literal("agentes-ia"),
  v.literal("precios"),
  v.literal("redes-sociales"),
  v.literal("soluciones-legales"),
  v.literal("rutas"),
  v.literal("asistente"),
  v.literal("waas")
);

export default defineSchema({
	// ─── V1 (AGENTE ACTUAL — RAG) ──────────────────────────

	// 📄 Documentos fuente: el contenido original del portafolio
	// Cada fila es un documento atómico (proyecto, servicio, etc.)
	documentos: defineTable({
		title: v.string(),
		slug: v.string(),
		category: v.string(),
	}).index("bySlug", ["slug"]),

	// 🧩 Chunks: fragmentos de cada documento para búsqueda semántica
	chunks: defineTable({
		documentId: v.id("documentos"),
		text: v.string(),
		embeddingId: v.union(v.id("embeddings"), v.null()),
	})
		.index("byDocumentId", ["documentId"])
		.index("byEmbeddingId", ["embeddingId"]),

	// 📐 Embeddings: vectores numéricos separados del texto
	embeddings: defineTable({
		embedding: v.array(v.float64()),
		chunkId: v.id("chunks"),
	})
		.index("byChunkId", ["chunkId"])
		.vectorIndex("byEmbedding", {
			vectorField: "embedding",
			dimensions: 1536,
		}),

	// ─── V2 (AGENTE MINIMALISTA) ───────────────────────────

	// 📄 Documentos estructurados con campos tipados
	// El agente busca por categoría, subcategoría o etiquetas
	documentosV2: defineTable({
		titulo: v.string(),
		categoria,
		subcategoria: v.optional(subcategoria),
		contenido: v.string(),
		url: v.optional(v.string()),
		etiquetas: v.array(etiqueta),
	})
		.index("byCategoria", ["categoria"])
		.index("bySubcategoria", ["subcategoria"]),
});

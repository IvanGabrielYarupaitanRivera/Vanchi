import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	// 📄 Documentos fuente: el contenido original del portafolio
	// Cada fila es un documento atómico (proyecto, servicio, etc.)
	documentos: defineTable({
		title: v.string(), // "Molaric"
		slug: v.string(), // "proyecto-molaric"
		category: v.string(), // "proyecto" | "stack" | "servicio" | "about" | "pricing"
	}).index("bySlug", ["slug"]),

	// 🧩 Chunks: fragmentos de cada documento para búsqueda semántica
	// Almacenan el texto real que se busca
	chunks: defineTable({
		documentId: v.id("documentos"),
		text: v.string(),
		embeddingId: v.union(v.id("embeddings"), v.null()),
	})
		.index("byDocumentId", ["documentId"])
		.index("byEmbeddingId", ["embeddingId"]),

	// 📐 Embeddings: vectores numéricos separados del texto
	// Separarlos evita cargar vectores pesados en lecturas normales
	embeddings: defineTable({
		embedding: v.array(v.float64()),
		chunkId: v.id("chunks"),
	})
		.index("byChunkId", ["chunkId"])
		.vectorIndex("byEmbedding", {
			vectorField: "embedding",
			dimensions: 1536, // text-embedding-3-small
		}),
});

/**
 * Literales compartidos de la entidad documentosV2.
 *
 * Fuente única de verdad para categorías, subcategorías y etiquetas.
 * Todos los archivos (schema, mutations, queries, tools, formularios)
 * importan de aquí. Un solo lugar para modificar.
 */
import { v } from "convex/values";

// ─── CATEGORÍAS ───────────────────────────────────────────

export const CATEGORIAS = [
	"sobre-mi",
	"stack",
	"servicio",
	"precios",
	"proyecto",
	"legal",
] as const;

export type Categoria = (typeof CATEGORIAS)[number];

export const categoriaValidator = v.union(
	...CATEGORIAS.map((c) => v.literal(c)),
);

// ─── SUBCATEGORÍAS ────────────────────────────────────────

export const SUBCATEGORIAS = [
	"frontend",
	"backend",
	"ia",
	"salud",
	"educacion",
	"legal",
	"web",
	"agentes",
	"gaas",
	"waas",
	"personal",
] as const;

export type Subcategoria = (typeof SUBCATEGORIAS)[number];

export const subcategoriaValidator = v.union(
	...SUBCATEGORIAS.map((s) => v.literal(s)),
);

// ─── ETIQUETAS ────────────────────────────────────────────

/**
 * Etiquetas agrupadas por tematica para uso en UI y system prompts.
 * Las listas de abajo NO se usan en el schema, solo como ayuda visual.
 */
export const ETIQUETAS_TECNOLOGIAS = [
	"sveltekit",
	"convex",
	"tailwindcss",
	"typescript",
	"astro",
	"openrouter",
	"vercel-ai-gateway",
	"whatsapp",
	"deepgram",
	"livekit",
	"supabase",
	"n8n",
	"gemini-api",
	"google-calendar",
	"better-auth",
	"netlify",
	"lit",
] as const;

export const ETIQUETAS_PROYECTOS = [
	"molaric",
	"encap",
	"junin360",
	"mediroosevelt",
	"farmape",
	"obstetraconecta",
	"diapis",
	"colegio-educere",
	"peralta-asociados",
] as const;

export const ETIQUETAS_CONCEPTOS = [
	"experiencia",
	"desarrollo-web",
	"agentes-ia",
	"precios",
	"redes-sociales",
	"soluciones-legales",
	"rutas",
	"asistente",
	"gaas",
	"waas",
] as const;

export const ETIQUETAS = [
	...ETIQUETAS_TECNOLOGIAS,
	...ETIQUETAS_PROYECTOS,
	...ETIQUETAS_CONCEPTOS,
] as const;

export type Etiqueta = (typeof ETIQUETAS)[number];

export const etiquetaValidator = v.union(
	...ETIQUETAS.map((e) => v.literal(e)),
);

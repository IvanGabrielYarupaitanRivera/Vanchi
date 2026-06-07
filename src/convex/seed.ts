import { internalAction } from './_generated/server';
import { internal } from './_generated/api';
import type { Id } from './_generated/dataModel';
import { embed } from 'ai';

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
 */
async function generateEmbedding(text: string): Promise<number[]> {
	const { embedding } = await embed({
		model: 'openai/text-embedding-3-small',
		value: text
	});
	return embedding;
}

interface KnowledgeDocument {
	title: string;
	slug: string;
	category: string;
	content: string;
}

const docUrls: Record<string, string> = {
	'about': 'https://www.vanchi.pro/',
	'experiencia': 'https://www.vanchi.pro/',
	'stack-frontend': 'https://www.vanchi.pro/',
	'stack-backend': 'https://www.vanchi.pro/',
	'stack-ia': 'https://www.vanchi.pro/',
	'servicio-web': 'https://www.vanchi.pro/#servicios',
	'servicio-ia': 'https://www.vanchi.pro/#servicios',
	'servicio-waas': 'https://www.vanchi.pro/precios',
	'precios': 'https://www.vanchi.pro/precios',
	'proyecto-molaric': 'https://molaric.com/',
	'proyecto-encap': 'https://www.encap.edu.pe/',
	'proyecto-junin360': 'https://junin360.com/',
	'proyecto-mediroosevelt': 'https://mediroosevelt.com/',
	'proyecto-farmape': 'https://www.farmape.net/',
	'proyecto-obstetraconecta': 'https://www.obstetraconecta.com/',
	'proyecto-diapis': 'https://diapis.vercel.app/',
	'proyecto-colegio-educere': 'https://colegioeducere.edu.pe/',
	'proyecto-peralta-asociados': 'https://peraltaasociados.com/',
	'rutas-vanchi': 'https://www.vanchi.pro/'
};

const documents: KnowledgeDocument[] = [
	{
		title: 'Ivan Yarupaitan — Quién es',
		slug: 'about',
		category: 'about',
		content: `Ivan Yarupaitan Rivera es un desarrollador full-stack y consultor tecnológico especializado en inteligencia artificial, con sede en Perú. Su trabajo combina precisión técnica con un enfoque en diseño premium.

Su filosofía: tecnología bien ejecutada, diseño con propósito y comunicación clara. Prefiere proyectos donde pueda tomar decisiones arquitectónicas completas, desde la base de datos hasta la interfaz de usuario.

Ivan se describe como un "socio tecnológico" más que un proveedor de servicios. Entiende el negocio del cliente y propone soluciones que resuelven problemas reales.

Su stack principal: SvelteKit, Convex, TailwindCSS, TypeScript y herramientas de IA. También experiencia con Astro, Supabase, OpenRouter, Vercel AI Gateway.`
	},
	{
		title: 'Ivan Yarupaitan — Experiencia y enfoque',
		slug: 'experiencia',
		category: 'about',
		content: `Ivan ha desarrollado proyectos en healthtech, edutech, legaltech y optimización de procesos gubernamentales. Sus proyectos han ganado primeros puestos en ferias de ciencia.

Su enfoque: "premium pero práctico". Usa Svelte 5 con runes, Convex, TailwindCSS v4. Prefiere Convex antes que backend tradicional.`
	},
	{
		title: 'Stack Tecnológico — Frontend',
		slug: 'stack-frontend',
		category: 'stack',
		content: `Ivan domina SvelteKit 5 (runes, snippets) como framework principal, TailwindCSS v4 con DaisyUI v5, TypeScript en todo el proyecto, Lucide Svelte para íconos y Astro para sitios estáticos.`
	},
	{
		title: 'Stack Tecnológico — Backend y Base de Datos',
		slug: 'stack-backend',
		category: 'stack',
		content: `Ivan usa Convex como plataforma backend principal: base de datos serverless, queries reactivas, actions para APIs externas, componentes (@convex-dev/agent, @convex-dev/auth), búsqueda vectorial para RAG. También Better Auth para autenticación y Supabase en proyectos anteriores.`
	},
	{
		title: 'Stack Tecnológico — Inteligencia Artificial',
		slug: 'stack-ia',
		category: 'stack',
		content: `Ivan usa Vercel AI Gateway como LLM gateway, OpenRouter como alternativa, @convex-dev/agent para agentes conversacionales con RAG, Gemini API en proyectos académicos, Deepgram STT para transcripción de voz, Livekit para comunicaciones en tiempo real, Kapso para WhatsApp Business API.`
	},
	{
		title: 'Servicios — Desarrollo Web',
		slug: 'servicio-web',
		category: 'servicio',
		content: `Ivan ofrece desarrollo web completo: landing pages premium, dashboards, sistemas con autenticación, apps en tiempo real, plataformas multi-tenant, integraciones con APIs externas.

Stack típico: SvelteKit + Convex + TailwindCSS + TypeScript. Despliegue en Vercel.`
	},
	{
		title: 'Servicios — Inteligencia Artificial y Agentes',
		slug: 'servicio-ia',
		category: 'servicio',
		content: `Ivan construye agentes de IA conversacionales: vía WhatsApp para agendar citas, asistentes virtuales con RAG, transcripción de voz, tutores IA, automatización de procesos.

Stack típico: Convex Agent + Vercel AI Gateway + WhatsApp (Kapso) + Deepgram STT.`
	},
	{
		title: 'Servicios — WaaS (Web as a Service)',
		slug: 'servicio-waas',
		category: 'servicio',
		content: `WaaS es suscripción mensual donde Ivan actúa como socio tecnológico: desarrollo, hosting, dominio, mantenimiento, soporte y optimización SEO.

Diseñado para estudios jurídicos, clínicas y pequeñas empresas que necesitan presencia digital profesional sin gestionar tecnología internamente.`
	},
	{
		title: 'Modelo de Precios y Colaboración',
		slug: 'precios',
		category: 'pricing',
		content: `Ivan ofrece dos modelos:

WaaS: desde S/ 30/mes, incluye desarrollo, hosting, dominio, mantenimiento y soporte.

Proyecto: cotización según alcance, incluye análisis, diseño, desarrollo, testing, deployment y código fuente.

Ambos incluyen consultoría inicial gratuita. Pagos en soles o dólares.`
	},
	{
		title: 'Proyecto: Molaric',
		slug: 'proyecto-molaric',
		category: 'proyecto',
		content: `Molaric es un agente de IA para clínicas dentales que funciona 24/7 vía WhatsApp. Los pacientes agendan, reprograman o cancelan citas mediante conversaciones naturales, sincronizando con Google Calendar.

Tecnologías: SvelteKit, Convex, Vercel AI Gateway, Google Calendar API, TailwindCSS, Better Auth, TypeScript, Deepgram STT, Kapso WhatsApp.
Fecha: Abril 2026.
Rol: Full-Stack Developer & AI Engineer.

Características: WhatsApp para citas, sincronización bidireccional con Google Calendar, recordatorios con confirmación Sí/No, dashboard con métricas en tiempo real, gestión de pacientes/citas/horarios/procedimientos, multi-tenant, transcripción de voz.

Impacto: 24/7 de disponibilidad, 100% citas sincronizadas, -30% ausencias, +40% citas fuera del horario laboral.
URL: https://molaric.com/`
	},
	{
		title: 'Proyecto: ENCAP',
		slug: 'proyecto-encap',
		category: 'proyecto',
		content: `ENCAP es un tutor con IA para mejorar la experiencia de aprendizaje. Tiene conocimiento general y específico de cada curso.

Tecnologías: SvelteKit, Lit, OpenRouter, Convex.
Fecha: Enero 2026.

URL: https://www.encap.edu.pe/`
	},
	{
		title: 'Proyecto: Junin360',
		slug: 'proyecto-junin360',
		category: 'proyecto',
		content: `Junin360 es una plataforma de control de informes para el GORE Junín. Usa IA para alertar a responsables y eliminar riesgos legales.

Tecnologías: SvelteKit, Supabase, OpenRouter, n8n.
Fecha: Setiembre 2025.

URL: https://junin360.com/`
	},
	{
		title: 'Proyecto: MediRoosevelt',
		slug: 'proyecto-mediroosevelt',
		category: 'proyecto',
		content: `Proyecto para Medicina Humana de la Universidad Roosevelt. Primer puesto en Expociencia 2025 - II.

Tecnologías: Svelte, Convex, TypeScript, Gemini API.
Fecha: Noviembre 2025.
URL: https://mediroosevelt.com/`
	},
	{
		title: 'Proyecto: Farmape',
		slug: 'proyecto-farmape',
		category: 'proyecto',
		content: `Proyecto para Farmacia de la Universidad Roosevelt. Primer puesto en Expociencia 2025 - II.

Tecnologías: Svelte, Convex, TypeScript, Gemini API.
Fecha: Noviembre 2025.
URL: https://www.farmape.net/`
	},
	{
		title: 'Proyecto: Obstetra Conecta',
		slug: 'proyecto-obstetraconecta',
		category: 'proyecto',
		content: `Proyecto para Obstetricia de la Universidad Roosevelt. Segundo puesto en Expociencia 2025 - II.

Tecnologías: Svelte, Convex, TypeScript, Gemini API.
Fecha: Noviembre 2025.
URL: https://www.obstetraconecta.com/`
	},
	{
		title: 'Proyecto: Diapis',
		slug: 'proyecto-diapis',
		category: 'proyecto',
		content: `Diapis genera rondas de preguntas personalizadas a partir del material de clase para impulsar la participación estudiantil.

Tecnologías: SvelteKit, Convex, Livekit, Gemini API.
Fecha: Octubre 2025.
URL: https://diapis.vercel.app/`
	},
	{
		title: 'Proyecto: Colegio Educere',
		slug: 'proyecto-colegio-educere',
		category: 'proyecto',
		content: `Sitio web del Colegio Educere en Huancayo. Información académica, actividades extracurriculares y comunicación con padres.

Tecnologías: Astro, TailwindCSS.
Fecha: Diciembre 2025.
URL: https://colegioeducere.edu.pe/`
	},
	{
		title: 'Proyecto: Peralta & Asociados',
		slug: 'proyecto-peralta-asociados',
		category: 'proyecto',
		content: `Identidad digital para estudio jurídico. Sitio web con máxima velocidad y posicionamiento SEO.

Tecnologías: Astro, TailwindCSS, Netlify Forms.
Fecha: Enero 2025.
URL: https://peraltaasociados.com/`
	},

	// ─── RUTAS DEL PORTAFOLIO ───────────────────────
	{
		title: 'Rutas del portafolio Vanchi',
		slug: 'rutas-vanchi',
		category: 'about',
		content: `Vanchi es el portafolio profesional de Ivan Yarupaitan. Estas son sus rutas principales:

- Inicio: https://www.vanchi.pro/
- Proyectos: https://www.vanchi.pro/proyectos
- Precios WaaS: https://www.vanchi.pro/precios
- Soluciones Legales: https://www.vanchi.pro/soluciones-legales
- Politica de Privacidad: https://www.vanchi.pro/politica-de-privacidad
- Condiciones del Servicio: https://www.vanchi.pro/condiciones-del-servicio
- Eliminacion de Datos: https://www.vanchi.pro/eliminacion-de-datos-de-usuario
- Asistente IA: accesible desde cualquier pagina con Ctrl+K o Cmd+K, o desde el boton "Asistente IA" en la barra de navegacion`
	}
];

/**
 * Seed completo de la knowledge base.
 * Inserta todos los documentos, los chunkea y genera embeddings.
 * Ejecutar: npx convex run src/convex/seed.ts:seedKnowledgeBase
 */
export const seedKnowledgeBase = internalAction({
	args: {},
	handler: async (ctx) => {
		let totalDocs = 0;
		let totalChunks = 0;
		let skippedDocs = 0;

		for (const doc of documents) {
			// Agregar URL al contenido si existe
			const url = docUrls[doc.slug];
			const fullContent = url ? `${doc.content}

Mas informacion en: ${url}` : doc.content;

			// Verificar si el documento ya existe por slug
			const existing = await ctx.runQuery(internal.rag.documents.getDocumentBySlug, {
				slug: doc.slug
			});

			if (existing) {
				console.log(`⏭️ ${doc.title} — ya existe, saltando`);
				skippedDocs++;
				continue;
			}

			// Insertar documento
			const docId = await ctx.runMutation(internal.rag.documents.insertDocument, {
				title: doc.title,
				slug: doc.slug,
				category: doc.category
			});
			totalDocs++;

			// Chunkear
			const chunks = splitText(fullContent, 2000, 100);
			const chunkIds: Id<'chunks'>[] = [];

			for (const text of chunks) {
				const chunkId = (await ctx.runMutation(internal.rag.chunks.insertChunk, {
					documentId: docId,
					text,
					embeddingId: null
				})) as Id<'chunks'>;
				chunkIds.push(chunkId);
			}
			totalChunks += chunks.length;

			// Embeddings
			for (let i = 0; i < chunks.length; i++) {
				const embedding = await generateEmbedding(chunks[i]);

				const embeddingId = await ctx.runMutation(internal.rag.chunks.insertEmbedding, {
					embedding,
					chunkId: chunkIds[i]
				});

				await ctx.runMutation(internal.rag.chunks.patchChunkEmbedding, {
					chunkId: chunkIds[i],
					embeddingId
				});
			}

			console.log(`✅ ${doc.title} — ${chunks.length} chunk(s), embeddings generados`);
		}

		console.log(`🎉 Seed completado: ${totalDocs} nuevos, ${skippedDocs} saltados, ${totalChunks} chunks`);
	}
});

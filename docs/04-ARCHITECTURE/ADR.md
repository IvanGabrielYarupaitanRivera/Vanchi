# 📋 ADR — Architecture Decision Records

> Registro de decisiones arquitectónicas significativas.
> Cada ADR documenta el contexto, la decisión y las alternativas consideradas.

---

## ADR-001: SvelteKit como framework

**Fecha:** 2025-11-26

**Contexto:** Se necesitaba un framework para construir un portafolio web profesional que fuera rápido, SEO-friendly y con buena experiencia de desarrollo.

**Decisión:** Usar **SvelteKit** como framework principal.

**Alternativas consideradas:**
- **Next.js** (React) — Más ecosistema, pero más complejidad y bundle size mayor
- **Astro** — Bueno para contenido estático, pero menos flexible para interactividad
- **Nuxt** (Vue) — Buena opción, pero el equipo prefirió Svelte por su sintaxis más limpia

**Razones:**
- SSR nativo para SEO
- Bundle size reducido comparado con React/Next.js
- Svelte 5 con runes ofrece reactividad más limpia
- Experiencia de desarrollo rápida con Vite

---

## ADR-002: Tailwind CSS v4 + DaisyUI v5

**Fecha:** 2025-11-26

**Contexto:** Se necesitaba un sistema de estilos que permitiera desarrollo rápido, consistente y con una identidad visual premium dark-only.

**Decisión:** Usar **Tailwind CSS v4** con **DaisyUI v5**.

**Alternativas consideradas:**
- **CSS Modules + Bootstrap** — Bootstrap es difícil de personalizar para un diseño oscuro premium
- **Styled Components** — Demasiado runtime JS para un portafolio
- **Vanilla CSS** — Menos productivo para desarrollo rápido

**Razones:**
- DaisyUI provee tokens semánticos (`base-100`, `primary`, etc.) que encajan con la identidad Vanchi
- Tailwind v4 es más rápido y tiene mejor integración con Vite
- DaisyUI v5 funciona nativamente con Tailwind v4
- Sistema de temas oscuros nativo

---

## ADR-003: Dark mode como único modo

**Fecha:** 2025-11-26

**Contexto:** Se decidió el esquema de color del portafolio.

**Decisión:** **Dark mode exclusivo.** No hay modo claro ni toggle.

**Razones:**
- Refuerza la identidad "luxury tech" del proyecto
- Elimina la complejidad de mantener dos temas visuales
- El diseño oscuro con acentos dorados es la marca del proyecto
- Consistente con referencias de diseño (Vercel, BMW, Lamborghini)

---

## ADR-004: Datos estáticos (sin backend)

**Fecha:** 2025-11-26

**Contexto:** Se necesitaba una fuente de datos para los proyectos del portafolio.

**Decisión:** Usar **datos estáticos en TypeScript** en lugar de una base de datos o CMS.

**Alternativas consideradas:**
- **CMS headless** (Sanity, Strapi) — Overkill para un portafolio personal
- **Base de datos** (Supabase, Convex) — Complejidad innecesaria
- **Markdown / MDX** — Menos tipado seguro que TypeScript

**Razones:**
- Los proyectos cambian con poca frecuencia
- TypeScript provee type-safety completo
- Zero latency en carga de datos (están en el bundle)
- Sin costos de infraestructura de backend
- Fácil de mantener: solo editar un archivo `.ts`

---

## ADR-005: Bun como runtime

**Fecha:** 2025-11-26

**Contexto:** Se necesitaba un runtime y package manager para el proyecto.

**Decisión:** Usar **Bun**.

**Alternativas consideradas:**
- **Node.js + npm/pnpm** — Estándar de la industria, pero más lento
- **Deno** — Buen runtime, pero menos compatible con ecosistema SvelteKit

**Razones:**
- Instalación de dependencias hasta 10x más rápida que npm/pnpm
- Compatibilidad nativa con TypeScript sin configuración extra
- Integración directa con el ecosistema SvelteKit y Vite

---

## ADR-006: Despliegue en Vercel

**Fecha:** 2025-11-26

**Contexto:** Se necesitaba un hosting para el portafolio.

**Decisión:** Usar **Vercel** con `@sveltejs/adapter-vercel`.

**Alternativas consideradas:**
- **Netlify** — Similar, pero Vercel tiene mejor integración con SvelteKit
- **Cloudflare Pages** — Bueno, pero requiere adapter específico
- **Servidor propio** — Overkill para un portafolio

**Razones:**
- Integración nativa con SvelteKit (adapter oficial)
- Edge network global
- Deploy automático desde GitHub
- Plan gratuito generoso
- SSR y prerendering sin configuración extra

---

## ADR-007: Lucide Svelte para íconos

**Fecha:** 2025-11-26

**Contexto:** Se necesitaba una librería de íconos consistente y premium.

**Decisión:** Usar **`@lucide/svelte`**.

**Alternativas consideradas:**
- **Heroicons** — Buenos pero menos variedad
- **Font Awesome** — Pesado, requiere configuración CSS
- **SVGs inline** — Menos consistente, más trabajo manual

**Razones:**
- Librería limpia, moderna, de código abierto
- Integración nativa como componentes Svelte
- Estilo consistente que combina con el diseño premium
- Tree-shakeable (solo importas los que usas)

---

## ADR-008: Convex como backend serverless

**Fecha:** 2026-05-30

**Contexto:** Se necesitaba un backend para el asistente IA (base de conocimiento + agente) sin salir del free tier de Vercel.

**Decisión:** Usar **Convex Cloud** como backend serverless.

**Alternativas consideradas:**
- **API routes de SvelteKit** — Consumen ancho de banda de Vercel (free tier limitado a 100GB/mes)
- **Supabase** — Más pesado, no tiene agente IA nativo
- **Firebase** — Vendor lock-in fuerte, menos flexible

**Razones:**
- Base de datos + funciones + WebSockets en un solo servicio
- Componente `@convex-dev/agent` para agentes IA con herramientas
- Tipo generado automáticamente extremo a extremo
- Free tier generoso (sin límite de ancho de banda de funciones)
- No consume ancho de banda de Vercel

---

## ADR-009: Agent V2 — tabla única sin RAG

**Fecha:** 2026-06-08

**Contexto:** La versión 1 del agente usaba 3 tablas (documentos + chunks + embeddings) con RAG vectorial. Era compleja de mantener y el pipeline de embeddings era frágil.

**Decisión:** Reemplazar con **una sola tabla `documentosV2`** con búsqueda por categorías/subcategorías/etiquetas. Sin embeddings, sin vector search.

**Alternativas consideradas:**
- **RAG v1 (3 tablas)** — Complejidad innecesaria para un portafolio con pocos documentos
- **pgvector** — Overkill, no se justifica para 26 documentos
- **Búsqueda full-text** — No filtra por estructura; el agente obtiene documentos sin contexto

**Razones:**
- Con 26 documentos, la búsqueda estructurada es más predecible que RAG
- Sin embeddings: cero mantenimiento de pipelines de vectores
- Las categorías literales (`v.literal`) dan tipado estricto
- El agente construye filtros precisos usando el mapa de conocimiento en el prompt
- Mucho más fácil de poblar y mantener

---

## ADR-010: Vercel AI Gateway (no OpenAI directo)

**Fecha:** 2026-06-08

**Contexto:** Se necesitaba llamar a un LLM desde Convex sin exponer API keys en el frontend y sin rate limits restrictivos.

**Decisión:** Usar **Vercel AI Gateway** con URL `https://ai-gateway.vercel.sh/v1`.

**Alternativas consideradas:**
- **OpenAI directo** — API key expuesta o necesidad de proxy, rate limits por IP
- **OpenRouter** — Tercero no oficial, latencia variable

**Razones:**
- Gateway unificado: cache, rate limiting, failover
- La API key se configura en Convex Dashboard, nunca llega al cliente
- Modelo `inception/mercury-2` disponible con buena latencia
- `createOpenAI({ apiKey, baseURL })` desde Convex action — setup mínimo

---

## ADR-011: Route groups para aislar layouts

**Fecha:** 2026-06-09

**Contexto:** El chat heredaba el layout global (Header, Footer, `min-h-dvh`, `flex-1`), rompiendo la UI en móvil cuando el teclado se abría.

**Decisión:** Separar en **route groups** de SvelteKit:
- `(main)/` — Portfolio + Admin (Header, Footer, 100dvh)
- `(chat)/chat/` — Chat (fixed, sin Header/Footer)
- `(protegido)/` — Guard de sesión admin

**Alternativas consideradas:**
- **Layout condicional** (if en +layout raíz) — Funciona pero mezcla responsabilidades
- **Una sola página SPA** — Pierde SSR y SEO

**Razones:**
- Aislamiento total: el chat no hereda nada del layout global
- `(chat)/chat/+layout.svelte` puede usar `fixed inset-x-0 top-0 h-[100dvh]` sin interferencias
- `resolve()` con prefijo del route group para navegación interna
- Sin condicionales en el layout raíz

---

## ADR-012: localStorage sobre sessionStorage para admin

**Fecha:** 2026-06-08

**Contexto:** El panel admin necesita recordar la contraseña para mutaciones (crear/editar/eliminar). `sessionStorage` se perdía en navegaciones.

**Decisión:** Usar **`localStorage`** en vez de `sessionStorage`.

**Alternativas consideradas:**
- **sessionStorage** — Se perdía al navegar (race condition entre $effect y goto)
- **Cookie** — Funciona para la sesión (cookie httpOnly admin_session), pero no para el password de mutación (necesario en cada write)

**Razones:**
- localStorage persiste entre navegaciones de página
- El login devuelve la contraseña desde el form action (IIFE para evitar `state_referenced_locally`)
- El usuario la guarda en localStorage para pasarla en cada mutación
- Simple y directo (KISS)

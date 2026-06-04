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
- Instalación de dependencias más rápida que npm/pnpm
- Compatibilidad nativa con TypeScript
- Bun es el runtime recomendado por la skill de Bun del agente

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

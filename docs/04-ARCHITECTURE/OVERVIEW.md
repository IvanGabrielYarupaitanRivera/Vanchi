# 🏗️ OVERVIEW — Diagrama general del sistema

> Visión panorámica de la arquitectura de Vanchi.
> Proyecto híbrido: frontend SvelteKit SSR + backend serverless Convex + LLM vía Vercel AI Gateway.

---

## Diagrama de componentes

```
┌────────────────────────────────────────────────────────────┐
│                     USUARIO                                 │
│                      (Navegador web)                        │
└────────┬───────────────────────────────────────────────────┘
         │
         ├──────────────────────────────────────────────┐
         ▼                                              ▼
┌─────────────────────────┐             ┌──────────────────────────┐
│   SVELTEKIT (Vercel)    │             │   CONVEX CLOUD            │
│                         │             │                           │
│  SSR + Hydration        │  WebSocket  │  Agent (@convex-dev/agent)│
│  useQuery reactivo ◄────┼─────────────┤  Schema documentosV2      │
│  Mutations via API      ──────────────►  CRUD admin               │
│                         │  HTTP       │  BuscarDocumentos tool    │
│  Routes:                │             │                           │
│   (main)/ +layout       │             │  LLM: inception/mercury-2 │
│   (chat)/chat +layout   │             │  vía Vercel AI Gateway    │
│   admin/(protegido)     │             │                           │
└─────────┬───────────────┘             └──────────────────────────┘
          │
          ▼
┌──────────────────────────────────────────────────────────┐
│               STATIC ASSETS + DATA LAYER                  │
│                                                          │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────┐  │
│  │  WebP       │  │  SVGs        │  │  proyectos .ts │  │
│  │  (images/)  │  │  (icons/)    │  │  (estáticos)   │  │
│  └─────────────┘  └──────────────┘  └────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

---

## Modos de renderizado

| Ruta | Modo | Detalle |
|------|------|---------|
| `/` (Home) | SSR | Datos estáticos + componentes de landing |
| `/proyectos` | SSR | Listado desde data layer TypeScript |
| `/proyectos/[projectId]` | SSR | Carga dinámica vía `+page.ts` + `load()` |
| `/precios` | SSR | Contenido estático |
| `/soluciones-legales` | SSR | Contenido estático |
| `/waas` | SSR | Contenido estático |
| `/chat` | SSR + WebSocket | Layout aislado `(chat)/chat`. Convex Agent vía `useQuery` reactivo + typing animation |
| `/admin/login` | SSR | Formulario login + cookie `admin_session` |
| `/admin/documentos` | SSR + WebSocket | CRUD con `useQuery` reactivo para listado, form actions para crear/editar |
| `/sitemap.xml` | Prerendered | XML generado en build |
| Páginas legales | SSR | Contenido estático |
| `/llms.txt`, `/llms-full.txt` | Static | Archivos GEO/SEO para crawlers de IA |

---

## Capas del sistema

### Capa 1 — Frontend (SvelteKit + Vercel Edge)

```
Routes (route groups)
├── +layout.svelte (raíz)    → Convex setup + {@render children()}
├── +error.svelte             → Error 404/500
├── (main)/+layout.svelte     → Portfolio: Header + Footer + CommandBar
├── (main)/+page.svelte       → Home
├── (main)/proyectos/         → Listado + detalle dinámico
├── (main)/admin/login/       → Login con cookie httpOnly
├── (main)/admin/(protegido)/ → CRUD documentos (requiere sesión)
└── (chat)/chat/+layout.svelte → Chat layout aislado
    └── +page.svelte          → Chat con typing animation

Components
├── lib/components/Header.svelte      → Nav pill premium
├── lib/components/Footer.svelte      → Footer con links + redes
├── lib/components/SEO.svelte         → Meta tags por página
├── lib/components/chat/              → ChatHeader, ChatInput, ChatMessages, ChatSuggestions
├── lib/components/home/              → Hero, Services, FeaturedProjects, AboutMe, etc.
├── lib/components/proyectos/         → CardProject, OurProjects, StatsProjects
└── lib/components/soluciones-legales/ → PhaseBentoGrid, FAQ, etc.
```

### Capa 2 — Backend Serverless (Convex Cloud)

```
Schema
├── documentosV2     → Tabla única de conocimiento (categoría, subcategoría, etiquetas, contenido)
├── documents (v1)   → Legacy (RAG original, sin uso activo)
├── chunks (v1)      → Legacy
└── embeddings (v1)  → Legacy

Agent (@convex-dev/agent)
├── agentV2/
│   ├── config/modelo.ts      → createOpenAI (Vercel AI Gateway)
│   ├── config/prompt.ts      → System prompt con mapa de conocimiento
│   ├── config/config.ts      → Agent con stopWhen(stepCountIs(5))
│   ├── conversations.ts      → chat() action (input → agent.run → response)
│   └── tools/
│       └── documentosV2/buscarDocumentos.ts
│           ├── zod schema: { categoria?, subcategoria?, etiquetas? }
│           └── execute: api.entidades.documentosV2.queries.buscar

Admin
├── admin.ts                   → validarPassword() + verificarPassword action
├── entidades/documentosV2/
│   ├── queries.ts             → listar, obtener, buscar
│   └── mutations.ts           → crear, actualizar, eliminar

Client
├── convex.config.ts           → env vars: AI_GATEWAY_API_KEY, ADMIN_PASSWORD
└── _generated/                → Tipos y API generados automáticamente
```

### Capa 3 — Data Layer Estático (TypeScript)

```
lib/data/projects/     → 9 proyectos en archivos .ts individuales
lib/services/          → ProjectService.getById(slug)
lib/types/             → Interface Project
lib/constants/         → projects.ts, services.ts
```

---

## Conexión Frontend ↔ Convex

### Reactiva (WebSocket)
```svelte
<script lang="ts">
	import { useQuery } from 'convex-svelte';
	import { api } from '$lib/convex/_generated/api';

	let documentos = useQuery(api.entidades.documentosV2.queries.listar);
</script>
```

### Mutaciones (HTTP)
```svelte
<script lang="ts">
	import { useMutation } from 'convex-svelte';

	let crear = useMutation(api.entidades.documentosV2.mutations.crear);
</script>
```

### SSR (desde server load)
```ts
// +page.server.ts
import { getConvexClient } from '$lib/server/convex';

export const load = async () => {
	const convex = getConvexClient();
	const doc = await convex.query(api.entidades.documentosV2.queries.obtener, { id });
	return { doc };
};
```

---

## Configuración del build

```
Vite (vite.config.ts)
├── @tailwindcss/vite          → Procesa Tailwind v4
├── @sveltejs/kit/vite         → Plugin SvelteKit
└── @sveltejs/enhanced-img     → Optimización de imágenes

SvelteKit (svelte.config.js)
├── adapter: @sveltejs/adapter-vercel  → Vercel Edge
└── preprocess: vitePreprocess         → TS

Convex
├── npx convex dev             → Dev local
├── npx convex deploy          → Producción
├── npx convex import          → Importar datos
└── npx convex export          → Exportar datos
```

# 🏗️ OVERVIEW — Diagrama general del sistema

> Visión panorámica de la arquitectura de Vanchi.
> Proyecto frontend-only con SvelteKit, renderizado SSR + estático, desplegado en Vercel.

---

## Diagrama de componentes

```
┌──────────────────────────────────────────────────────────┐
│                     VERIFICANTE / USUARIO                 │
│                      (Navegador web)                      │
└──────────────────────────┬───────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────┐
│                    SVELTEKIT (Vercel Edge)                │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │   Routes     │  │  Layout      │  │  Error        │  │
│  │  (+page/*)   │  │  (+layout)   │  │  (+error)     │  │
│  └──────┬───────┘  └──────┬───────┘  └───────────────┘  │
│         │                 │                               │
│         ▼                 ▼                               │
│  ┌──────────────────────────────────────────────────┐    │
│  │           Componentes Svelte 5 (lib/components/)  │    │
│  │   home/    proyectos/    precios/    legales/     │    │
│  └──────────────────────┬───────────────────────────┘    │
│                         │                                  │
│                         ▼                                  │
│  ┌──────────────────────────────────────────────────┐    │
│  │   Data Layer (lib/data/ + lib/services/)         │    │
│  │   Datos estáticos en TypeScript                  │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │   Vite Plugins                                   │    │
│  │   tailwindcss() + sveltekit() + enhancedImages() │    │
│  └──────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────┐
│                    STATIC ASSETS                          │
│                                                          │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────┐  │
│  │  WebP       │  │  SVGs        │  │  Favicon       │  │
│  │  (images/)  │  │  (icons/)    │  │  (static/)     │  │
│  └─────────────┘  └──────────────┘  └────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

---

## Modos de renderizado

| Ruta | Modo | Detalle |
|------|------|---------|
| `/` (Home) | SSR | Renderizado en servidor, datos estáticos |
| `/proyectos` | SSR | Listado desde data layer |
| `/proyectos/[projectId]` | SSR | Carga dinámica vía `+page.ts` + `load()` |
| `/precios` | SSR | Datos estáticos |
| `/soluciones-legales` | SSR | Datos estáticos |
| `/waas` | SSR | Datos estáticos |
| `/chat` | SSR + WebSocket | Asistente IA v2 con Convex Agent (conexión reactiva) |
| `/admin/login` | SSR | Formulario de login |
| `/admin/documentos` | SSR + WebSocket | CRUD con `useQuery` reactivo |
| `/sitemap.xml` | Prerendered | Generado en build, sirve XML estático |
| Páginas legales | SSR | Contenido estático |

---

## Estructura en capas

```
Capa 1 — Routes (SvelteKit)
├── +layout.svelte      → Layout global (Header + Footer + children)
├── +error.svelte       → Página de error 404/500
└── [ruta]/+page.svelte → Página específica

Capa 2 — Components (Svelte 5)
├── lib/components/     → Componentes reutilizables
│   ├── Header.svelte   → Navegación
│   ├── Footer.svelte   → Footer
│   ├── SEO.svelte      → Meta tags
│   └── [seccion]/      → Componentes agrupados por sección

Capa 3 — Data Layer (TypeScript)
├── lib/data/projects/  → Datos de proyectos (estáticos)
├── lib/services/       → Servicios que consultan los datos
├── lib/types/          → Interfaces y tipos
└── lib/constants/      → Constantes del proyecto

Capa 4 — Assets
├── lib/assets/images/  → Imágenes WebP
├── lib/assets/icons/   → SVGs (network, technologies, logos)
└── static/             → Favicon, archivos estáticos
```

---

## Configuración del build

```
Vite (vite.config.ts)
├── @tailwindcss/vite          → Procesa Tailwind v4
├── @sveltejs/kit/vite         → Plugin SvelteKit
└── @sveltejs/enhanced-img     → Optimización de imágenes

SvelteKit (svelte.config.js)
├── adapter: @sveltejs/adapter-vercel  → Despliegue en Vercel
└── preprocess: vitePreprocess         → Procesa TS/SCSS
```

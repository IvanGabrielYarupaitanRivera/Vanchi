# CONTEXT — Contexto del proyecto

> **LECTURA OBLIGATORIA — LEER PRIMERO ANTES DE CUALQUIER TAREA**

---

## Identidad

**Vanchi** es un portafolio web profesional de **Ivan Yarupaitan Rivera**, desarrollador full-stack y consultor tecnologico. El sitio funciona como carta de presentacion, vitrina de proyectos y canal de contacto, e incluye un asistente IA con base de conocimiento propia.

---

## Stack tecnologico

| Capa                 | Tecnologia               | Version               |
| -------------------- | ------------------------ | --------------------- |
| Framework            | SvelteKit                | 2 (Svelte 5)          |
| Lenguaje             | TypeScript               | 5.x                   |
| UI runtime           | Svelte                   | 5.x (runes, snippets) |
| Estilos              | Tailwind CSS             | v4                    |
| Componentes UI       | DaisyUI                  | v5                    |
| UI Component Library | `src/lib/components/ui/` | Dual-Layer Architecture |
| Iconos               | Lucide Svelte            | 0.577.x               |
| Runtime              | Bun                      | 1.3.x                 |
| Base de datos        | Convex Cloud             | —                     |
| Agente IA            | `@convex-dev/agent`      | v0.6+                 |
| LLM Gateway          | Vercel AI Gateway        | —                     |
| Modelo LLM           | inception/mercury-2      | —                     |
| Hosting Frontend     | Vercel                   | Adapter               |
| Hosting Backend      | Convex Cloud             | —                     |
| SEO/GEO              | llms.txt / llms-full.txt | Estatico en `static/` |
| Imagenes optimizadas | `@sveltejs/enhanced-img` | —                     |

---

## Estructura del proyecto

```
Vanchi/
├── src/
│   ├── convex/                 # Backend Convex (agentes, schema, entidades)
│   │   ├── schema.ts           # documentosV2 + tablas v1 legacy
│   │   ├── admin.ts            # validarPassword, verificarPassword
│   │   ├── agentV2/            # Agent minimalista (config, tools, conversations)
│   │   ├── entidades/documentosV2/  # CRUD queries + mutations
│   │   ├── agent/              # V1 legacy (RAG, intacto)
│   │   └── convex.config.ts    # Env vars declaradas
│   ├── lib/
│   │   ├── assets/
│   │   │   ├── icons/          # SVGs: network, technologies, logos
│   │   │   └── images/         # WebP (hero, projects, pricing, etc.)
│   │   ├── components/
│   │   │   ├── Header.svelte   # Navegacion principal
│   │   │   ├── Footer.svelte   # Footer del sitio
│   │   │   ├── SEO.svelte      # Meta tags y SEO head
│   │   │   ├── chat/           # ChatHeader, ChatInput, ChatSuggestions
│   │   │   ├── home/           # AboutMe, FeaturedProjects, Services, etc.
│   │   │   ├── proyectos/      # Body, Footer, project/ (Context, Role, etc.)
│   │   │   ├── contacto/       # Canales, Expectativas, Redes, Footer
│   │   │   ├── servicios/      # ServiceCards, Footer, subdirectorios (agentes-ia, automatizacion, consultoria)
│   │   │   ├── sectores/       # SectorCards, Footer, subdirectorios (educacion, legal, salud)
│   │   │   ├── precios/        # EntryPlan, Faq, PaymentModel, PriceSheet, Footer
│   │   │   ├── metodologia/    # Body, Footer
│   │   │   ├── ivan-yarupaitan-rivera/  # Cta, Stack, Story, Footer
│   │   │   ├── soluciones-legales/  # ComparisonSection, FaqSection, PhaseBentoGrid, etc.
│   │   │   └── ui/             # ← COMPONENT LIBRARY (Dual-Layer Architecture)
│   │   │       ├── README.md        # Documentacion para agentes IA
│   │   │       ├── Hero/            # Hero.svelte + Hero.agent.md (4 niveles)
│   │   │       ├── SystemStatus/    # SystemStatus.svelte + SystemStatus.agent.md
│   │   │       ├── CommandAction/   # CommandAction.svelte + CommandAction.agent.md
│   │   │       ├── DataBlock/       # DataBlock.svelte + DataBlock.agent.md (contenedor universal de cards)
│   │   │       └── SectionLayout/   # SectionLayout.svelte + SectionLayout.agent.md (esqueleto de seccion)
│   │   ├── server/convex.ts    # Cliente Convex para SSR
│   │   └── chat/               # chat.ts (markdown, LS, helpers)
│   ├── routes/
│   │   ├── +layout.svelte      # Layout raiz (Convex setup)
│   │   ├── +error.svelte       # Error 404/500
│   │   ├── layout.css          # Tokens CSS globales
│   │   ├── (main)/             # Portfolio + Admin (Header + Footer + CommandBar)
│   │   │   ├── +layout.svelte  # Header + CommandBar + Footer
│   │   │   ├── +page.svelte    # Home
│   │   │   ├── proyectos/      # Listado + detalle dinamico
│   │   │   ├── servicios/      # Listado + subrutas (agentes-ia, automatizacion, consultoria)
│   │   │   ├── sectores/       # Listado + subrutas (educacion, legal, salud)
│   │   │   ├── precios/        # Modelos de colaboracion
│   │   │   ├── soluciones-legales/
│   │   │   ├── metodologia/    # Metodologia GaaS
│   │   │   ├── contacto/       # Contacto y canales
│   │   │   ├── ivan-yarupaitan-rivera/  # Pagina personal
│   │   │   ├── waas/           # WhatsApp as a Service
│   │   │   ├── admin/
│   │   │   │   ├── login/      # Login administrativo
│   │   │   │   └── (protegido)/# Guard de sesion
│   │   │   │       └── documentos/  # CRUD de documentos
│   │   │   ├── dev/            # Dev routes para UI components
│   │   │   │   ├── +page.svelte        # Index
│   │   │   │   ├── heroes/            # Hero X1 definitive
│   │   │   │   ├── system-status/     # SystemStatus S6 definitive
│   │   │   │   └── command-action/    # CommandAction winning variants
│   │   │   └── ...             # Politicas, sitemap, paginas estaticas
│   │   └── (chat)/             # Asistente IA (sin Header/Footer)
│   │       └── chat/
│   │           ├── +layout.svelte   # Layout aislado (h-[100dvh])
│   │           └── +page.svelte     # Chat con typing animation
├── static/
│   ├── llms.txt                # Mapa GEO para crawlers de IA
│   └── llms-full.txt           # Contenido completo de conocimiento
├── docs/                       # Hub de documentacion
├── tasks/                      # Especificaciones activas / archivadas
├── .agents/                    # Skills de IA para pi
├── DESIGN.md                   # Design system (source of truth visual)
├── package.json
├── svelte.config.js
├── vite.config.ts
├── vercel.json
└── tsconfig.json
```

---

## Identidad visual (resumen)

| Token              | Valor                  | Uso                            |
| ------------------ | ---------------------- | ------------------------------ |
| `base-100`         | `oklch(11% 0.005 260)` | Fondo charcoal ink solido      |
| `base-content`     | `oklch(94% 0.005 90)`  | Texto chalk white              |
| `accent`           | `oklch(72% 0.22 165)`  | Phosphor green (solo indicadores) |
| Tipografia UI      | JetBrains Mono         | Body, nav, botones, labels     |
| Tipografia display | Newsreader             | Titulos editoriales H1/H2      |

> **Fuente de verdad completa:** [`/DESIGN.md`](../../DESIGN.md) en la raiz.

---

## Estado actual del proyecto

El proyecto esta **en produccion activa**, desplegado en Vercel + Convex Cloud.

**Completado:**
- Landing page, proyectos, precios, waas, soluciones-legales, paginas legales
- Metodologia GaaS, contacto, ivan-yarupaitan-rivera
- Servicios (agentes-ia, automatizacion, consultoria), sectores (educacion, legal, salud)
- Asistente IA v2 con ruta `/chat` (Convex Agent, tabla unica `documentosV2`, Vercel AI Gateway, typing animation, scroll suave)
- CRUD admin protegido (`/admin/documentos`) — listar, crear, editar, eliminar
- Base de conocimiento poblada con 26 documentos (sobre-mi, stack, servicios, precios, proyectos, legal)
- Hub de documentacion completo (`docs/`) con 39 archivos
- Route groups: `(main)/` portfolio, `(chat)/chat/` asistente, `(protegido)/` admin guard
- SEO/GEO: `llms.txt` y `llms-full.txt` en produccion
- **UI Component Library**: `src/lib/components/ui/` con Dual-Layer Architecture (Componente importable + `.agent.md` con anti-patrones)
- **Hero**: 4 niveles (primary, secondary, profile, tertiary) — migradas las 15 rutas del portafolio
- **SystemStatus**: Componente S6 con DaisyUI status
- **CommandAction**: 4 niveles (primary, outline-primary, ghost, secondary). Soporta `href` (link) y `onclick` (button). Auto-detecta links externos → `target="_blank"` + `rel="noopener noreferrer"`. Props `target`/`rel` override.
- **Hero profile**: Estructura identica a primary con columna de imagen
- **DataBlock**: Contenedor universal de cards (default, compact, elevated) — reemplaza ~20 cards manuales
- **SectionLayout**: Esqueleto de seccion con eyebrow + grid 5/7 (primary) o 1 columna (secondary) — unifica las 5 secciones de la home
- **Chat redesign**: Estados de carga neutros, diferenciacion visual user/agent, mobile detection coarse pointer
- **Footer & Header**: Editorial Gemini rewrite con indices numerados, E-E-A-T badge

**Pendiente:**
- (Opcional) Eliminar tablas v1 legacy (documents, chunks, embeddings) sin regresion
- Home sections refactorizadas con SectionLayout + DataBlock + CommandAction (5 secciones).
- IndexList, GridTwo components (especificados en `todo-ui-components.md`)

---

## Enlaces de navegacion

| Si necesitas...                 | Ve a...                                                 |
| ----------------------------- | ----------------------------------------------------- |
| Entender el proyecto          | Este documento                                        |
| Arrancar rapido como agente   | [`/docs/AGENT-QUICKSTART.md`](../AGENT-QUICKSTART.md) |
| Saber que leer segun tu tarea | [`NAVIGATION.md`](./NAVIGATION.md)                    |
| El ciclo de trabajo           | [`WORKFLOW.md`](./WORKFLOW.md)                        |
| Reglas del stack              | [`STACK-PATTERNS.md`](./STACK-PATTERNS.md)            |
| Comandos rapidos              | [`/docs/CHEATSHEET.md`](../CHEATSHEET.md)             |
| Skills / aliados IA           | [`/docs/ALIADAS.md`](../ALIADAS.md)                   |
| Historial de cambios          | [`/docs/CHANGELOG.md`](../CHANGELOG.md)               |
| Design system completo        | [`/DESIGN.md`](../../DESIGN.md)                       |
| UI Component Library          | [`/src/lib/components/ui/README.md`](../../src/lib/components/ui/README.md) |
| Filosofia del agente          | [`08-FILOSOFIA-AGENTE/README.md`](../08-FILOSOFIA-AGENTE/README.md) |
| Especificaciones archivadas   | [`/tasks/archived/`](../../tasks/archived/)           |

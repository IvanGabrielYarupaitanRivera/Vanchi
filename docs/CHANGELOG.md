# 📜 CHANGELOG — Historial de cambios

> Registro cronológico de cambios significativos en el proyecto.

## ✍️ Cómo agregar una entrada

Copia y pega este bloque al inicio de la lista (después de esta sección) y complétalo:

```markdown
## YYYY-MM-DD

**Qué cambió:** [Descripción breve del cambio]

**Por qué:** [Razón del cambio]

**Archivos afectados:**
- `ruta/al/archivo` — [Propósito]
```

---

## Formato de cada entrada

| Campo | Qué escribir |
|-------|-------------|
| **Qué cambió** | Descripción en 1 línea, presente simple |
| **Por qué** | Contexto: problema que resolvía o decisión que se tomó |
| **Archivos afectados** | Lista de archivos con ruta relativa desde la raíz del proyecto. Incluir `tasks/*` si la spec se archivó |

## 2026-06-09

**Que cambio:** Refactorizacion de rutas con Route Groups + Chat mobile fix con visualViewport API.

**Por que:** El chat rompia el layout en movil porque heredaba el layout global con min-h-dvh flex-1. Se separo en un grupo aislado (chat)/chat con layout propio (fixed inset-x-0 top-0 h-[100dvh] + visualViewport API). Se movio el portfolio a (main)/ con su layout (Header + Footer).

**Route Groups:**
- (main)/ - Portfolio + Admin: Header, CommandBar, Footer, min-h-dvh
- (chat)/chat/ - Chat layout aislado: fixed inset-x-0 top-0 h-[100dvh], sin Header/Footer
- (protegido)/ - Guard de sesion admin (dentro de (main)/admin/)

**Chat mobile fix:**
- CSS h-[100dvh] para render inicial sin saltos
- visualViewport API para corregir Brave (no respeta dvh)
- overflow: hidden en <html> y <body> via JS
- Header (shrink-0) se queda arriba, mensajes (min-h-0 flex-1) se comprimen, input (shrink-0) pegado al teclado

## 2026-06-08

**Qué cambió:** Implementado Asistente IA v2 (CommandBar ⌘K + ruta /chat) con Convex Agent, RAG simplificado, CRUD admin y base de conocimiento poblada.

**Por qué:** Se reemplazó la arquitectura RAG con embeddings por una tabla única `documentosV2` con búsqueda por categorías/subcategorías/etiquetas. Se creó un agente v2 minimalista, autónomo y consciente de su entorno, con ruta pública /chat y panel admin protegido.

**Arquitectura:**
- Tabla `documentosV2` con literals (categoría, subcategoría, etiquetas)
- Agent `@convex-dev/agent` con tool única `buscarDocumentos` (filtros, no texto libre)
- Modelo `inception/mercury-2` vía Vercel AI Gateway
- Prompt con mapa de conocimiento (categorías, subcategorías, etiquetas disponibles)
- Sin RAG, sin embeddings, sin vector search
- Patrón `useQuery` reactivo (WebSocket) en vez de `$effect` + `.then()`

**Rutas nuevas:**
- `/chat` — Página completa del asistente v2 (sin Header, sin Footer)
- `app/login` — Login administrativo con contraseña
- `/admin/documentos` — CRUD completo de documentos
- `/admin/documentos/crear` — Formulario de creación
- `/admin/documentos/[id]` — Formulario de edición

**Docs:**
- `08-FILOSOFIA-AGENTE/README.md` — 5 principios del agente (meta, autónomo, proactivo, consciente, herramienta)
- Skill `sveltekit-convex-integration` — Patrones correctos SvelteKit 5 + Convex
- 3 lecciones aprendidas (interacción Pi+Convex, patrones SvelteKit+Convex, deploy prod)

**Base de conocimiento:** 23 documentos poblados (4 sobre mí, 3 stack, 4 servicios, 1 precios, 9 proyectos, 1 legal, 1 soluciones legales)

**Archivos afectados:**
- `src/convex/schema.ts` — +tabla documentosV2 con literals
- `src/convex/admin.ts` — verificarPassword
- `src/convex/entidades/documentosV2/` — queries + mutations
- `src/convex/agentV2/` — config, tools, conversations
- `src/routes/chat/+page.svelte` — Nueva ruta pública
- `src/routes/admin/` — Login + layout protector + CRUD completo
- `src/routes/+layout.svelte` — Header/Footer condicional por ruta
- `src/routes/admin/(protegido)/+layout.server.ts` — Guardián de cookie
- `src/lib/components/chat/` — chat.ts, ChatHeader, ChatInput, ChatSuggestions
- `src/lib/server/convex.ts` — Cliente Convex para servidor
- `docs/08-FILOSOFIA-AGENTE/README.md` — Nueva carpeta de filosofía
- `docs/00-GUIDE/LECCIONES-APRENDIDAS/` — 3 nuevas lecciones
- `.agents/skills/sveltekit-convex-integration/SKILL.md` — Nueva skill
- `docs/ALIADAS.md` — Skill referenciada
- `tasks/todo-v2-agent.md` — Especificación creada

---

## 2026-06-04

**Qué cambió:** Archivada la especificación TASK-001 (hub de documentación `docs/`).

**Por qué:** El hub fue completado con 27 archivos, 0 broken links, mapa de relaciones, quickstart agéntico, y todas las correcciones de coherencia aplicadas.

**Archivos afectados:**
- `tasks/archived/todo-docs-hub.md` — Spec archivada

---

## 2026-06-04

**Qué cambió:** Creación del hub de documentación `docs/` con estructura completa.

**Por qué:** La documentación estaba dispersa (solo `DESIGN.md` + `README.md` genérico). Se necesitaba un hub estructurado para que el agente pi y desarrolladores humanos accedan rápido al contexto del proyecto.

**Archivos afectados:**
- `docs/README.md` — Portal de entrada
- `docs/ALIADAS.md` — Skills y aliados IA
- `docs/CHEATSHEET.md` — Referencia rápida
- `docs/00-GUIDE/` — Guía principal (CONTEXT, NAVIGATION, WORKFLOW, STACK-PATTERNS, LECCIONES-APRENDIDAS)
- `docs/01-PROJECT/` — Visión, roadmap y changelog
- `tasks/todo-docs-hub.md` — Especificación completada

---

## 2026-06-04

**Qué cambió:** Creación de la carpeta `tasks/` como brazo operativo de especificaciones.

**Por qué:** Se necesitaba un lugar para documentar especificaciones con pasos secuenciales, separado de la documentación permanente.

**Archivos afectados:**
- `tasks/README.md` — Propósito de la carpeta
- `tasks/todo-TEMPLATE.md` — Template para nuevas specs
- `tasks/todo-docs-hub.md` — Primera especificación
- `tasks/archived/` — Subcarpeta para specs completadas

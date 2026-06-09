# 🤖 Aliados IA — Skills disponibles

> Referencia rápida de skills instaladas y cuándo usarlas.
> Carga las skills según el problema que estés resolviendo.

## 📦 Skills instaladas

| Skill | Cuándo usarla |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`accessibility`](../.agents/skills/accessibility/SKILL.md) | Auditar o mejorar accesibilidad WCAG 2.2, screen readers, keyboard nav |
| [`Bun`](../.agents/skills/bun/SKILL.md) | Ejecutar scripts, manejar paquetes, testear o empaquetar con Bun |
| [`convex`](../.agents/skills/convex/SKILL.md) | Backend Convex en general, routing a skills Convex específicas |
| [`convex-create-component`](../.agents/skills/convex-create-component/SKILL.md) | Crear componentes reutilizables Convex con tablas aisladas |
| [`convex-migration-helper`](../.agents/skills/convex-migration-helper/SKILL.md) | Migraciones de schema y datos Convex (widen-migrate-narrow) |
| [`convex-performance-audit`](../.agents/skills/convex-performance-audit/SKILL.md) | Auditar rendimiento: reads, writes, OCC conflicts, suscripciones |
| [`convex-quickstart`](../.agents/skills/convex-quickstart/SKILL.md) | Nuevos proyectos Convex, agregar Convex a una app existente |
| [`convex-setup-auth`](../.agents/skills/convex-setup-auth/SKILL.md) | Autenticación en Convex: providers, users, roles |
| [`daisyui`](../.agents/skills/daisyui/SKILL.md) | Usar componentes DaisyUI con Tailwind v4 |
| [`design-taste-frontend`](../.agents/skills/design-taste-frontend/SKILL.md) | UI engineering, métricas visuales, CSS hardware acceleration |
| [`frontend-design`](../.agents/skills/frontend-design/SKILL.md) | Crear interfaces de alta calidad de diseño |
| [`full-output-enforcement`](../.agents/skills/full-output-enforcement/SKILL.md) | Evitar truncamiento en outputs largos (código completo) |
| [`gpt-taste`](../.agents/skills/gpt-taste/SKILL.md) | Motion design con GSAP, bento grids, layouts editoriales |
| [`redesign-existing-projects`](../.agents/skills/redesign-existing-projects/SKILL.md) | Rediseñar sitios existentes a calidad premium |
| [`seo`](../.agents/skills/seo/SKILL.md) | Optimizar SEO, meta tags, structured data, sitemaps |
| [`svelte-code-writer`](../.agents/skills/svelte-code-writer/SKILL.md) | Consultar docs Svelte 5 al crear/editar `.svelte` |
| [`svelte-core-bestpractices`](../.agents/skills/svelte-core-bestpractices/SKILL.md) | Buenas prácticas Svelte: reactividad, eventos, estilos |
| [`svelte5-best-practices`](../.agents/skills/svelte5-best-practices/SKILL.md) | Runes, snippets, SvelteKit patterns, migración Svelte 4 → 5 |
| [`tailwind-best-practices`](../.agents/skills/tailwind-best-practices/SKILL.md) | Guías de Tailwind CSS para el proyecto |
| [`tailwind-css-patterns`](../.agents/skills/tailwind-css-patterns/SKILL.md) | Patrones responsive, layout, flexbox, grid, spacing |
| [`typescript-advanced-types`](../.agents/skills/typescript-advanced-types/SKILL.md) | Tipos avanzados: genéricos, condicionales, mapped types |
| [`vanchi-design-system`](../.agents/skills/vanchi-design-system/SKILL.md) | **Skill específica de Vanchi** — aplicar DESIGN.md |
| [`vite`](../.agents/skills/vite/SKILL.md) | Configuración de Vite, plugins, SSR |

## 🧠 Aliadas externas para consultas

Además de las skills instaladas, podemos consultar a **IA externa** (Gemini, ChatGPT, Claude, etc.) cuando el agente necesite:
- Sintaxis correcta de APIs que no tenemos cubiertas
- Decisiones arquitectónicas
- Depuración de bugs complejos

### Aliadas disponibles

| 🧠 Aliada externa | Para qué consultarla | Cómo acceder |
|--------|---------------------|--------------|
| **Gemini** | Opiniones de diseño UX, edge cases, decisiones de arquitectura general, filosofía de agentes | El usuario copia el mensaje y lo pega en Gemini |
| **Convex AI** | Dudas sobre `@convex-dev/agent` (tools, threads), `schema` (literals con `v.literal`), `internalQuery`/`internalMutation` vs `query`/`mutation`, migraciones, variables de entorno por deployment, CRUD con autenticación simple | El usuario copia el mensaje y lo consulta |
| **Vercel AI Gateway** | Dudas sobre AI SDK, `createOpenAI()` vs `openai.chat()`, configuración del Gateway, modelos (`inception/mercury-2`), failover, rate limits | El usuario copia el mensaje y lo consulta |

### Flujo para consultar a una aliada

1. El agente detecta una duda que no puede resolver con skills o docs
2. **Se detiene** (no gasta tokens en código incorrecto)
3. Prepara un mensaje estructurado con:
   - Contexto del proyecto
   - Stack relevante
   - El problema concreto
   - Código / archivos involucrados
   - Lo que se intentó y por qué no funcionó
4. El usuario lleva el mensaje a la aliada correspondiente
5. El usuario trae la respuesta
6. El agente la incorpora

## 🧠 Flujo recomendado

1. **Lee `00-GUIDE/CONTEXT.md`** primero (contexto del proyecto)
2. **Revisa `00-GUIDE/NAVIGATION.md`** para saber qué docs cargar según tu tarea
3. **Carga la(s) skill(s)** relevantes de la tabla de arriba
4. **Revisa `docs/08-FILOSOFIA-AGENTE/README.md`** si trabajas en el agente (principios: autonomía, minimalismo, proactividad)
5. **Implementa** siguiendo `00-GUIDE/WORKFLOW.md`

---

## 🤝 Opinión de una IA externa

Si el agente (pi) se queda atascado en un problema —por ejemplo, duda sobre sintaxis correcta de Svelte 5 runes, un patrón de TypeScript complejo, o una decisión de diseño— **puede consultar a una IA externa** (Gemini, OpenAI, Claude, etc.) para obtener una segunda opinión.

### Cómo funciona

1. **El agente redacta un mensaje** con el problema, el contexto relevante y enlaces a los docs de Vanchi.
2. **El usuario copia ese mensaje** y se lo envía a la IA externa (Gemini, ChatGPT, etc.).
3. **El usuario trae la respuesta** y el agente la incorpora para resolver el problema.

### Cuándo pedir opinión externa

- No encuentras la sintaxis correcta de una rune de Svelte 5
- El stack actual no tiene una skill que cubra el problema
- Necesitas una perspectiva distinta sobre una decisión arquitectónica
- Hay un bug que no logras identificar con las herramientas actuales

### Formato del mensaje

Cuando el agente necesite ayuda externa, preparará un mensaje estructurado así:

```markdown
---
**Proyecto:** Vanchi
**Stack:** SvelteKit 2 + Svelte 5 + Tailwind v4 + DaisyUI v5 + Bun
**Docs de contexto:** docs/00-GUIDE/CONTEXT.md
docs/00-GUIDE/STACK-PATTERNS.md
---

[Descripción clara del problema]

[Código relevante o archivos involucrados]

[Lo que se intentó y por qué no funcionó]

[Duda concreta que resolver]
```

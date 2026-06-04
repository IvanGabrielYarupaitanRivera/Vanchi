# 🧭 NAVIGATION — GPS documental

> ¿Qué leer según la tarea que vas a realizar?

---

## Tarea 1: Crear una nueva página / ruta

**Secuencia de lectura:**

1. [`CONTEXT.md`](./CONTEXT.md) — entender el proyecto (si no lo has hecho)
2. [`STACK-PATTERNS.md`](./STACK-PATTERNS.md) — reglas del stack
3. [`/docs/07-DESIGN/README.md`](../07-DESIGN/README.md) — tokens visuales
4. [`/docs/02-FRONTEND/README.md`](../02-FRONTEND/README.md) — rutas existentes, patrones

**Skills a cargar:**
- `svelte5-best-practices` — runes, snippets, SvelteKit
- `vanchi-design-system` — aplicar DESIGN.md
- `tailwind-best-practices` — estilos consistentes

**Referencias externas:**
- `/src/routes/` — ejemplos de rutas existentes

---

## Tarea 2: Modificar diseño visual (colores, tipografía, layout)

**Secuencia de lectura:**

1. [`/DESIGN.md`](../../DESIGN.md) — fuente de verdad del design system
2. [`/docs/07-DESIGN/README.md`](../07-DESIGN/README.md) — tokens extraídos
3. [`/docs/00-GUIDE/STACK-PATTERNS.md`](./STACK-PATTERNS.md) — cómo aplicar estilos

**Skills a cargar:**
- `vanchi-design-system` — aplicar identidad Vanchi
- `daisyui` — componentes DaisyUI
- `tailwind-css-patterns` — layout responsive
- `design-taste-frontend` — calidad de UI

**Referencias externas:**
- `/src/routes/layout.css` — tokens reales del proyecto

---

## Tarea 3: Agregar una feature o especificación nueva

**Secuencia de lectura:**

1. [`WORKFLOW.md`](./WORKFLOW.md) — ciclo Spec → Code → Verify
2. [`CONTEXT.md`](./CONTEXT.md) — contexto del proyecto
3. [`NAVIGATION.md`](./NAVIGATION.md) — este documento (para encontrar más docs)
4. [`/tasks/todo-TEMPLATE.md`](../../tasks/todo-TEMPLATE.md) — template para crear la spec
5. Los docs relevantes según la feature

**Skills a cargar:**
- Las que apliquen según la naturaleza de la feature
- `full-output-enforcement` — si se genera código largo

---

## Tarea 4: Debuggear o entender código existente

**Secuencia de lectura:**

1. [`CONTEXT.md`](./CONTEXT.md) — entender estructura
2. [`/docs/04-ARCHITECTURE/README.md`](../04-ARCHITECTURE/README.md) — flujos de datos y decisiones
3. [`/docs/00-GUIDE/LECCIONES-APRENDIDAS/`](./LECCIONES-APRENDIDAS/) — errores pasados

**Skills a cargar:**
- `svelte-core-bestpractices` — entender patrones Svelte
- `typescript-advanced-types` — si hay tipos complejos

---

## Tarea 5: Mejorar SEO del portafolio

**Secuencia de lectura:**

1. [`STACK-PATTERNS.md`](./STACK-PATTERNS.md) — reglas del stack (rendimiento, imágenes)
2. [`/docs/02-FRONTEND/README.md`](../02-FRONTEND/README.md) — SEO.svelte, sitemap, meta tags
3. [`/docs/04-ARCHITECTURE/DATA-FLOW.md`](../04-ARCHITECTURE/DATA-FLOW.md) — flujo del sitemap dinámico
4. [`/docs/05-SETUP/INTEGRATIONS.md`](../05-SETUP/INTEGRATIONS.md) — headers de seguridad Vercel
5. [`/docs/06-BUSINESS-RULES/CORE-PRINCIPLES.md`](../06-BUSINESS-RULES/CORE-PRINCIPLES.md) — rendimiento como feature
6. [`/docs/CHEATSHEET.md`](../CHEATSHEET.md) — sección SEO con checklist rápido

**Skills a cargar:**
- `seo` — optimizar meta tags, structured data, sitemaps
- `vanchi-design-system` — mantener coherencia visual

**Referencias externas:**
- `/src/lib/components/SEO.svelte` — componente de meta tags
- `/src/routes/sitemap.xml/+server.ts` — generación de sitemap
- `/DESIGN.md` — coherencia visual en OG images
- `vercel.json` — headers de seguridad

---

## Tarea 6: Agregar / modificar documentación

**Secuencia de lectura:**

1. [`/docs/README.md`](../README.md) — estructura del hub
2. El archivo específico que se va a modificar
3. [`/docs/00-GUIDE/WORKFLOW.md`](./WORKFLOW.md) — ciclo de trabajo

**Nota:** Documentar en el mismo estilo que los archivos existentes. Markdown, enlaces relativos, español, nombres de archivo en MAYÚSCULA.

---

## Tarea 7: Agregar un nuevo documento al hub `docs/`

**Secuencia de lectura:**

1. [`/docs/README.md`](../README.md) — entender la estructura actual del hub
2. [`/docs/CHANGELOG.md`](../CHANGELOG.md) — ver el historial de cambios recientes

**Pasos para agregar un nuevo archivo:**

1. Identificar la carpeta temática correcta según el contenido:
   - ¿Es una guía general? → `00-GUIDE/`
   - ¿Es del frontend? → `02-FRONTEND/`
   - ¿Es arquitectura? → `04-ARCHITECTURE/`
   - ¿Es setup/infra? → `05-SETUP/`
   - ¿Es regla de negocio? → `06-BUSINESS-RULES/`
   - ¿Es diseño? → `07-DESIGN/`
2. Nombrar el archivo en MAYÚSCULA (ej: `SEO.md`, `ANALYTICS.md`)
3. Agregar un README.md en la carpeta (si no existe) que enumere los archivos
4. Actualizar el árbol de [`/docs/README.md`](../README.md) con el nuevo archivo
5. Agregar una entrada en [`/docs/CHANGELOG.md`](../CHANGELOG.md)
6. Si el documento se relaciona con otras carpetas, actualizar la sección "🔗 Relaciones con otras carpetas" en los READMEs afectados
7. Verificar que todos los enlaces relativos funcionan

**Skills a cargar:**
- `vanchi-design-system` — mantener consistencia visual

**Referencias externas:**
- `/docs/README.md` — árbol maestro del hub
- `/docs/CHANGELOG.md` — registro de cambios

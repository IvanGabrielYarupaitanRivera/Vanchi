# 📐 Sistema de Componentes para Agente — Vanchi UI

> **Propósito:** Biblioteca de componentes reutilizables diseñada para que un agente de IA (pi) los consuma. Cada componente tiene 3 niveles de profundidad, props estrictamente tipadas y un archivo `.agent.md` con reglas.
> 
> **Filosofía:** Variabilidad controlada. No un solo Hero, sino 3 variaciones según la importancia de la ruta. La riqueza visual está en la variación, no en la complejidad de un solo componente.

---

## ✅ Estado actual (2026-06-23)

| Paso | Componente | Estado |
|------|-----------|--------|
| 1 | `Hero.svelte` + `Hero.agent.md` | ✅ Completado |
| 2 | `SystemStatus.svelte` + `SystemStatus.agent.md` | ✅ Completado |
| 3 | `DataBlock.svelte` + `DataBlock.agent.md` | ✅ Completado |
| 4 | `CommandAction.svelte` + `CommandAction.agent.md` | ✅ Completado |
| 5 | `SectionLayout.svelte` + `SectionLayout.agent.md` | ✅ Completado |
| 6 | `DataBlock.svelte` + `DataBlock.agent.md` | ✅ Completado |
| 7 | `IndexList.svelte` + `IndexList.agent.md` | ⬜ Pendiente |
| 8 | `GridTwo.svelte` + `GridTwo.agent.md` | ⬜ Pendiente |
| 9 | Refactorizar páginas existentes | ✅ Home completada (5 secciones con SectionLayout + DataBlock + CommandAction) |

---

## Paso 5: ✅ `SectionLayout.svelte` + `SectionLayout.agent.md` — COMPLETADO

**Esqueleto de seccion unificado.** Unifica las 5 secciones de la home con eyebrow + grid 5/7.

### Archivos
- `src/lib/components/ui/SectionLayout/SectionLayout.svelte`
- `src/lib/components/ui/SectionLayout/SectionLayout.agent.md`

---

## Paso 1: ✅ `Hero.svelte` + `Hero.agent.md` — COMPLETADO

**El encabezado de expediente.** Primer componente porque es el más visible y el que más variaciones tiene.

### Niveles

| Nivel | Composición | Props clave | Rutas de ejemplo |
|---|---|---|---|
| `primary` | Asimétrica, dot verde `SystemStatus`, título grande Newsreader, subtítulo, CTA chalk | `title`, `subtitle`, `action_label`, `action_href`, `status_active`, `italic_word` | `/` (Home) |
| `secondary` | Grid 2-col, título a izquierda, subtítulo + CTA ghost a derecha | `title`, `subtitle`, `action_label`, `action_href` | `/servicios`, `/sectores`, `/proyectos`, `/metodologia`, `/precios` |
| `tertiary` | Barra horizontal, título mono en bold, subtítulo opcional a derecha | `title`, `subtitle?` | Sub-rutas, legales, páginas de detalle |

### Anti-patrones (documentar en `.agent.md`)
- ❌ NUNCA pasar colores fijos (usa tokens: `base-content`, `base-100`, etc.)
- ❌ NUNCA `rounded-full` o `rounded-lg`. El componente define el radius (4px).
- ❌ Si `level="tertiary"`, NO pasar `action_label` ni `status_active`. Se ignoran.
- ❌ No inyectar HTML crudo en `title`. Usar `italic_word` prop en su lugar.

### Archivos
- `src/lib/components/ui/Hero/Hero.svelte`
- `src/lib/components/ui/Hero/Hero.agent.md`

---

## Paso 2: ✅ `SystemStatus.svelte` + `SystemStatus.agent.md` — COMPLETADO

**El único componente autorizado para el dot verde phosphor.** Separarlo garantiza que el green nunca se use en otro contexto.

### Props
- `status: 'active' | 'idle' | 'error'` (default: `'active'`)
- `label?: string` (texto opcional al lado del dot, ej. "SYSTEM // ONLINE")

### Anti-patrones
- ❌ NO usar `bg-accent` o `bg-[#00C288]` fuera de este componente.
- ❌ NO agrandar el dot (6px fijo, `w-1.5 h-1.5`).
- ❌ NO agregar glow, shadow o blur al dot.

### Archivos
- `src/lib/components/ui/SystemStatus/SystemStatus.svelte`
- `src/lib/components/ui/SystemStatus/SystemStatus.agent.md`

---

## Paso 3: `DataBlock.svelte` + `DataBlock.agent.md`

**Contenedor universal.** Reemplaza todas las variaciones de "card" en el proyecto.

### Niveles

| Nivel | Estilo | Uso |
|---|---|---|
| `default` | `border border-base-300 bg-base-200 p-8 lg:p-10` | Cards estándar |
| `compact` | `border border-base-300 bg-base-200 p-6 lg:p-8` | Cards en grids densos |
| `elevated` | `border border-base-300 bg-neutral p-8 lg:p-10` | Solo 1 por página |

### Props
- `level: 'default' | 'compact' | 'elevated'`
- `padding?: boolean` (permite contenido sin padding interno)
- `hover?: boolean` (si aplica `hover:border-base-content hover:-translate-y-0.5`)

### Archivos
- `src/lib/components/ui/DataBlock/DataBlock.svelte`
- `src/lib/components/ui/DataBlock/DataBlock.agent.md`

---

## Paso 4: ✅ `CommandAction.svelte` + `CommandAction.agent.md` — COMPLETADO

**Botón/link CTA.** 4 niveles + auto-detect de links externos.

### Niveles

| Nivel | Estilo | Uso |
|---|---|---|
| `primary` | `btn btn-primary uppercase` | CTA principal |
| `outline-primary` | `btn btn-outline btn-primary uppercase` | CTA secundario con borde |
| `ghost` | `btn btn-ghost text-base-content uppercase` | Acción sutil |
| `secondary` | `btn btn-neutral uppercase` | CTA secundario relleno |

### Props
- `level: ActionLevel` (primary | outline-primary | ghost | secondary)
- `label: string`
- `href?: string` → renderiza `<a>`
- `onclick?: () => void` → renderiza `<button>`
- `icon?: Component` (Lucide icon opcional)
- `target?: string` (override del auto-detect)
- `rel?: string` (override del auto-detect)

### Auto-detect
- Links que empiezan con `http` → `target="_blank"` + `rel="external noopener noreferrer"`
- Links internos (`resolve(...)`) → misma pestaña

### Archivos
- `src/lib/components/ui/CommandAction/CommandAction.svelte`
- `src/lib/components/ui/CommandAction/CommandAction.agent.md`

---

## Paso 5: `IndexList.svelte` + `IndexList.agent.md`

**Lista numerada editorial.** El patrón `01 // Texto` que se repite en todo el proyecto.

### Props
- `items: string[]`
- `start?: number` (default: 1)
- `dense?: boolean` (menos gap entre items)

### Archivos
- `src/lib/components/ui/IndexList/IndexList.svelte`
- `src/lib/components/ui/IndexList/IndexList.agent.md`

---

## Paso 6: `GridTwo.svelte` + `GridTwo.agent.md`

**Grid asimétrico de 2 columnas.** Se repite ~10 veces en el proyecto.

### Props
- `cols?: '1-1' | '7-5' | '8-4'` (proporciones de columna)
- `gap?: 'sm' | 'md'` (gap-px o gap-4)

### Archivos
- `src/lib/components/ui/GridTwo/GridTwo.svelte`
- `src/lib/components/ui/GridTwo/GridTwo.agent.md`

---

## Paso 7: Refactorizar páginas existentes

Una vez creados los componentes base, reemplazar patrones repetitivos en todas las rutas:

| Ruta | Hero actual | Nuevo Hero |
|---|---|---|
| `/` | Hero personalizado | `Hero level="primary"` |
| `/servicios` | Hero personalizado | `Hero level="secondary"` |
| `/sectores` | Hero personalizado | `Hero level="secondary"` |
| `/proyectos` | Hero personalizado | `Hero level="secondary"` |
| `/metodologia` | Hero personalizado | `Hero level="secondary"` |
| `/precios` | Hero personalizado | `Hero level="secondary"` |
| `/contacto` | Hero personalizado | `Hero level="secondary"` |
| `/sectores/salud` | Hero personalizado | `Hero level="secondary"` |
| `/sectores/legal` | Hero personalizado | `Hero level="secondary"` |
| `/sectores/educacion` | Hero personalizado | `Hero level="secondary"` |
| `/servicios/agentes-ia` | Hero personalizado | `Hero level="secondary"` |
| `/servicios/automatizacion` | Hero personalizado | `Hero level="secondary"` |
| `/servicios/consultoria` | Hero personalizado | `Hero level="secondary"` |
| `/proyectos/[projectId]` | Hero personalizado | `Hero level="secondary"` |
| `/ivan-yarupaitan-rivera` | Hero personalizado | `Hero level="secondary"` |
| `/admin/documentos` | — | No aplica |

---

## Orden de implementación (pendiente)

```
Paso 1 → Hero — ✅ COMPLETADO
Paso 2 → SystemStatus — ✅ COMPLETADO
Paso 3 → CommandAction — ✅ COMPLETADO (target, rel, auto-detect externos)
Paso 4 → DataBlock — ✅ COMPLETADO
Paso 5 → SectionLayout — ✅ COMPLETADO
Paso 6 → IndexList — SIGUIENTE
Paso 7 → GridTwo
Paso 8 → Refactorizar páginas existentes con Hero + SectionLayout + DataBlock + CommandAction + GridTwo (home ✅)
```

# 📐 Sistema de Componentes para Agente — Vanchi UI

> **Propósito:** Biblioteca de componentes reutilizables diseñada para que un agente de IA (pi) los consuma. Cada componente tiene 3 niveles de profundidad, props estrictamente tipadas y un archivo `.agent.md` con reglas.
> 
> **Filosofía:** Variabilidad controlada. No un solo Hero, sino 3 variaciones según la importancia de la ruta. La riqueza visual está en la variación, no en la complejidad de un solo componente.

---

## Paso 1: `Hero.svelte` + `Hero.agent.md`

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

## Paso 2: `SystemStatus.svelte` + `SystemStatus.agent.md`

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

## Paso 4: `CommandAction.svelte` + `CommandAction.agent.md`

**Botón CTA.** Dos variantes que cubren todos los casos de uso.

### Niveles

| Nivel | Estilo | Uso |
|---|---|---|
| `primary` | `border border-base-content bg-base-content text-base-100` | CTA principal de cada página |
| `ghost` | `btn-ghost border border-base-300 text-base-content/80` | Acción secundaria |

### Props
- `level: 'primary' | 'ghost'`
- `label: string`
- `href: string` (usa `resolve()` internamente)
- `icon?: Component` (Lucide icon opcional)
- `external?: boolean` (si es link externo, agrega `rel="external"`)

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

## Orden de implementación

```
Paso 1 → Hero (el más complejo, define el estándar)
Paso 2 → SystemStatus (dependencia de Hero primary)
Paso 3 → DataBlock (reemplaza ~20 cards manuales)
Paso 4 → CommandAction (reemplaza ~30 botones manuales)
Paso 5 → IndexList (reemplaza ~8 listas manuales)
Paso 6 → GridTwo (reemplaza ~10 grids manuales)
Paso 7 → Refactorizar páginas existentes
```

¿Arrancamos con el **Paso 1: Hero**?

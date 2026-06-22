# 🧠 Vanchi UI — Sistema de Componentes para Agentes

> **¿Qué es esto?** Una biblioteca de componentes Svelte 5 diseñada para ser consumida por un agente de IA (pi). Cada componente tiene reglas explícitas, props estrictas y anti-patrones documentados en archivos `.agent.md`.
>
> **Filosofía:** Variabilidad controlada. 3 niveles de profundidad visual según la importancia de la ruta. La riqueza está en la variación, no en la complejidad.

---

## 📋 Inventario de componentes

| Componente | Propósito | Niveles |
|---|---|---|
| `Hero/` | Encabezado de expediente | `primary` (home), `secondary` (secciones), `tertiary` (sub-páginas) |
| `SystemStatus/` | Dot indicador de estado (phosphor green) | `active`, `idle`, `error` |
| `DataBlock/` | Contenedor tipo card | *(pendiente)* |
| `CommandAction/` | Botón CTA (chalk o ghost) | *(pendiente)* |
| `IndexList/` | Lista numerada editorial | *(pendiente)* |
| `GridTwo/` | Grid asimétrico 2 columnas | *(pendiente)* |

---

## 🎯 Reglas globales (NUNCA romper)

Estas reglas aplican a TODOS los componentes. No importa qué estés construyendo:

- ✅ **Dark mode solo.** Sin light mode, sin toggle.
- ✅ **Tipografía:** JetBrains Mono para TODO. Newsreader solo para H1/H2 (`vanchi-display`).
- ✅ **Superficies SÓLIDAS.** `bg-base-200` para cards, `bg-base-100` para fondo de página.
- ✅ **Separación:** solo bordes de 1px `border-base-300`. NUNCA sombras.
- ✅ **border-radius:** máximo 4px (`rounded`). NUNCA `rounded-full`, `rounded-2xl`, etc.
- ✅ **Sin gold, sin gradientes, sin glass, sin blur.**
- ✅ **Phosphor green (`accent` / `#00C288`):** solo como dot de 6px vía `SystemStatus`.
- ✅ **Motion mínimo:** `duration-100`, `hover:-translate-y-0.5` (2px). Sin `fly`, `fade`, parallax.
- ✅ **Composición asimétrica.** Nunca 3 elementos visuales iguales en fila.
- ✅ **Tokens DaisyUI:** usar `base-content`, `base-100`, `base-200`, `base-300`, `secondary`, `accent`. NUNCA colores fijos.

---

## 🔍 Cómo usar un componente

1. Leer el `Componente.agent.md` primero (contiene anti-patrones + ejemplos)
2. Importar desde `$lib/components/ui/<Componente>/<Componente>.svelte`
3. Pasar props según la tabla de props del `.agent.md`
4. No inventar clases Tailwind que rompan las reglas globales

```svelte
<!-- ✅ Correcto -->
<script lang="ts">
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';
  import Hero from '$lib/components/ui/Hero/Hero.svelte';
</script>

<Hero
  level="secondary"
  title="Servicios"
  subtitle="Automatización de procesos para empresas en Junín."
  action_label="Ver casos"
  action_onclick={() => goto(resolve('/(main)/proyectos'))}
/>
```

---

## 📐 Niveles de profundidad

Cada componente tiene 3 niveles. Esta tabla te ayuda a decidir cuál usar según la ruta:

| Nivel | Cuándo usarlo | Rutas de ejemplo |
|---|---|---|
| `primary` | Landing principal, máxima elaboración visual | `/` (Home) |
| `secondary` | Páginas de sección, funcionales pero con identidad | `/servicios`, `/sectores`, `/proyectos`, `/metodologia`, `/precios`, `/contacto`, cada sub-ruta de sectores y servicios, cada proyecto individual |
| `tertiary` | Páginas de baja prioridad visual, minimalistas | Legales, políticas, páginas de detalle sin marketing |

---

## 🚫 Anti-patrones comunes (el agente falla en esto)

1. **Poner `rounded-full` en botones o cards.** El máximo es `rounded` (4px).
2. **Usar `shadow-*` para dar profundidad.** Usar `border-base-300` de 1px.
3. **Poner `text-primary` como decoración.** `text-primary` es chalk blanco (`#EBEDF0`), no es un "acento".
4. **Usar `bg-accent` o `bg-[#00C288]` fuera de `SystemStatus`.** Ese color es solo para el dot de 6px.
5. **Pasar colores fijos (`#xxxxxx`, `text-blue-500`, etc.).** Usar tokens: `base-content`, `secondary`, etc.
6. **Usar `fly`, `fade`, `scale` en transiciones.** Prohibido. Solo `duration-100` en hovers.
7. **Tres cards idénticas en fila.** Usar grid asimétrico (1 card dominante + grid 2 columnas).
8. **Olvidar que `action_onclick` es callback.** El caller debe usar `goto(resolve(...))`.

---

## 📁 Estructura

```
src/lib/components/ui/
├── README.md                  ← Este archivo. LEER primero.
├── Hero/
│   ├── Hero.svelte            ← Componente
│   └── Hero.agent.md          ← Reglas para el agente
├── SystemStatus/
│   ├── SystemStatus.svelte
│   └── SystemStatus.agent.md
├── DataBlock/                 ← (próximamente)
├── CommandAction/             ← (próximamente)
├── IndexList/                 ← (próximamente)
└── GridTwo/                   ← (próximamente)
```

---

## 📌 Estado actual de la refactorización

| Ruta | Hero actual | Hero nuevo | Estado |
|---|---|---|---|
| `/` (Home) | `home/Hero.svelte` | `level="primary"` | ❌ Pendiente |
| `/servicios` | `servicios/Hero.svelte` | `level="secondary"` | ❌ Pendiente |
| `/sectores` | `sectores/Hero.svelte` | `level="secondary"` | ❌ Pendiente |
| `/proyectos` | `proyectos/Hero.svelte` | `level="secondary"` | ❌ Pendiente |
| `/metodologia` | `metodologia/Hero.svelte` | `level="secondary"` | ❌ Pendiente |
| `/precios` | `precios/Hero.svelte` | `level="secondary"` | ❌ Pendiente |
| `/contacto` | `contacto/Hero.svelte` | `level="secondary"` | ❌ Pendiente |
| `/ivan-yarupaitan-rivera` | `ivan-yarupaitan-rivera/Hero.svelte` | `level="secondary"` | ❌ Pendiente |
| Sub-rutas (sectores/*, servicios/*, proyectos/*) | Cada una con su Hero | `level="secondary"` o `"tertiary"` | ❌ Pendiente |

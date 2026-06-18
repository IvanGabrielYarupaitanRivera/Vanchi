# Vanchi - System Instructions

## Rol

Actua como un **Senior Frontend Engineer & UI/UX Designer** especializado en interfaces "High-End" y "Luxury Tech". Tu objetivo es construir el portafolio personal de "Vanchi" combinando ingenieria de software robusta con estetica de arte digital.

## Stack Tecnologico

- **Framework:** SvelteKit (Svelte 5).
- **Lenguaje:** TypeScript (Obligatorio).
- **Estilos:** Tailwind CSS v4 + DaisyUI v5.
- **Backend/Data:** Convex Cloud (agente IA, base de datos, CRUD admin).
- **Runtime:** Bun.
- **Iconos:** `@lucide/svelte`.

## Lectura obligatoria antes de codificar

- Lee `DESIGN.md` antes de proponer, editar o refactorizar cualquier UI.
- Lee `docs/00-GUIDE/CONTEXT.md` para entender el contexto del proyecto, el stack, la estructura de rutas (route groups) y el estado actual.
- Si trabajas en el chat o admin, lee `docs/04-ARCHITECTURE/OVERVIEW.md` para entender la capa Convex.
- `DESIGN.md` es la **fuente de verdad visual** del proyecto.
- Usa `src/routes/layout.css` como traduccion operativa del sistema visual: tokens DaisyUI, tipografia y utilidades reutilizables.
- Si un cambio visual requiere nuevas reglas recurrentes, primero actualiza `DESIGN.md` o las utilidades del tema antes de repetir clases manualmente por todo el proyecto.

## 1. Principios de Codigo (KISS & Clean Code)

- **Simplicidad:** Sigue el principio KISS estrictamente. Si una solucion requiere 3 archivos para algo que se puede hacer en 1 con la misma eficiencia, elige la opcion de 1.
- **Svelte Idiomatico:**
  - Usa `<script lang="ts">`.
  - Aprovecha las transiciones nativas de Svelte (`import { fade, fly } from 'svelte/transition'`) en lugar de escribir CSS keyframes manuales cuando sea posible.
  - Componentizacion: Crea componentes pequenos y reutilizables.
- **Legibilidad:** Variables descriptivas en ingles. Comentarios solo cuando la logica de negocio sea compleja.
- Para usar los iconos de Lucide, importa desde `@lucide/svelte` y no desde `lucide-svelte`.

## 2. Reglas especificas del proyecto

### Route groups

El proyecto usa route groups de SvelteKit:
- `(main)/` — Portfolio + Admin (Header, Footer, CommandBar)
- `(chat)/chat/` — Chat layout aislado (fixed, sin Header/Footer)
- `(protegido)/` — Guard de sesion admin

Usa `resolve()` de `$app/paths` con el prefijo correcto: `resolve('/(main)/ruta')` o `resolve('/(chat)/chat/ruta')`.

### Patrones Convex

- Para queries reactivas usa `useQuery` importado de `convex-svelte` (NO `$effect` + `.then()`).
- Para SSR usa `+page.server.ts` con `getConvexClient()`.
- Para mutaciones usa `useMutation` de `convex-svelte`.

## 3. Generacion de HTML (Semantica y SEO)

- **Estructura Semantica:** Prohibido el "div soup". Usa `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- **Accesibilidad (a11y):**
  - Todos los botones/links deben tener `aria-label` si son solo iconos.
  - Las imagenes decorativas deben tener `alt=""`, las informativas deben tener descripcion.
  - Respeta la jerarquia de encabezados (`h1` -> `h2` -> `h3`).

## 4. Sistema de Diseno (Vanchi — The Invisible Ledger)

### Configuracion Global

- **Modo:** Dark Mode Only (sin light mode, sin toggle).
- **Direccion visual:** "The Invisible Ledger" — archivo editorial monocromo, no dashboard.
- **Tipografia:**
  - **Newsreader** (serif) para **H1 y H2** — titulos editoriales.
  - **JetBrains Mono** (monospace) para **cuerpo y UI** — codigo, automatizacion, precision.
  - H3: JetBrains Mono, uppercase, tracking ancho. Etiqueta mecanica estilo indice.
- **Densidad visual:** Baja. Una declaracion fuerte por viewport. Tipografia lleva el peso, no las superficies.
- **Superficies:** Solidas, opacas. Sin vidrio, sin blur, sin opacidad. Bordes de 1px para separar.
- **Acentos:** El unico color fuera del monocromo es **phosphor green** (`accent`). Se usa exclusivamente como indicador 6x6px de estado de ejecucion del agente. Nunca decorativo.

### Estrategia de Breakpoints (Mobile First Strict)

- **Regla de Oro:** Escribe estilos para movil por defecto.
- **Escalado:** Usa **unicamente** el breakpoint `lg:` para escritorio.
  - _Incorrecto:_ `w-full md:w-1/2 lg:w-1/3`
  - _Correcto:_ `w-full lg:w-1/3` (Salto directo para mantener simplicidad y consistencia).

### Paleta de Colores (DaisyUI Variables)

NO uses valores Hex o nombres de colores de Tailwind fijos (`bg-black`, `text-yellow-500`). Usa las variables semanticas:

- **Fondo:** `bg-base-100` (Charcoal Ink — negro tinta).
- **Contenedores:** `bg-base-200` (Limestone — gris piedra solido).
- **Bordes:** `border-base-300` (Stone — 1px solido).
- **Texto Principal:** `text-base-content` (Chalk White).
- **Metadatos:** `text-secondary` (Muted Grey).
- **Indicador de agente:** `bg-accent` (Phosphor Green — solo puntito 6px).
- **Superficies:** `vanchi-container` (bg-base-200 + border-base-300). NUNCA `vanchi-glass` ni `vanchi-panel`.

### DaisyUI con criterio

- Usa DaisyUI por su semantica (`btn`, `navbar`, `input`, `card`, etc.), no por su apariencia por defecto.
- Toda pieza DaisyUI debe sentirse propia de `Vanchi`: mas editorial, mas sobria y mas premium.
- Personaliza con utilidades de Tailwind y con el sistema del tema; evita que algo se vea como "demo default de DaisyUI".
- Prefiere `base-*`, `primary` y transparencias controladas frente a colores ruidosos.
- Si una card no aporta jerarquia real, eliminela y resuelve con spacing, bordes o separacion tonal.

## 5. Estrategia Estetica (The Invisible Ledger)

Aplica estas reglas para lograr una interfaz de archivo editorial de alta fidelidad:

1.  **Superficies solidas, no vidrio:**
    `vanchi-container` (`bg-base-200` + border 1px `base-300`). Prohibido: `vanchi-glass`, `vanchi-panel`, `vanchi-panel-hero`, `backdrop-blur`, opacidad.
2.  **Separacion por bordes, no por sombras:**
    Todos los contenedores usan `border-base-300` (1px solido). Prohibido: `shadow-2xl`, `shadow-lg`, `shadow-md`, `shadow-sm`.
3.  **Interacciones minimas:**
    `transition-all duration-200 ease-out`. Hover: `hover:-translate-y-0.5`. Sin glow, sin resplandor.
4.  **Tipografia como jerarquia:**
    Newsreader serif para titulares. JetBrains Mono para todo lo demas. H3 en uppercase + tracking ancho como etiquetas de archivo.
5.  **El verde es una senal, no un color:**
    `bg-accent` solo en el indicador de ejecucion del agente (6x6px). Nunca en botones, fondos, titulos o decoracion.
6.  **Composicion asimetrica editorial:**
    Evitar tres cards iguales en fila. Una idea dominante por seccion. Espacio vacio como elemento de diseno.

## 6. Skills internas recomendadas

- Si el trabajo es principalmente visual/UI, consulta tambien `.agents/skills/vanchi-design-system/SKILL.md`.
- Si trabajas con Convex, lee primero `src/convex/_generated/ai/guidelines.md`.
- Si trabajas con el chat o admin, revisa `docs/04-ARCHITECTURE/OVERVIEW.md` y `docs/04-ARCHITECTURE/DATA-FLOW.md`.

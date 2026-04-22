# Vanchi - System Instructions

## Rol

Actúa como un **Senior Frontend Engineer & UI/UX Designer** especializado en interfaces "High-End" y "Luxury Tech". Tu objetivo es construir el portafolio personal de "Vanchi" combinando ingeniería de software robusta con estética de arte digital.

## Stack Tecnológico

- **Framework:** SvelteKit.
- **Lenguaje:** TypeScript (Obligatorio).
- **Estilos:** Tailwind CSS v4 + DaisyUI.
- **Backend/Data:** Convex.
- **Runtime:** Bun.
- **Iconos:** `@lucide/svelte`.

## Fuente visual obligatoria

- Antes de proponer, editar o refactorizar cualquier UI, lee `DESIGN.md`.
- `DESIGN.md` es la **fuente de verdad visual** del proyecto.
- Si una preferencia visual genérica entra en conflicto con `DESIGN.md`, gana `DESIGN.md`.
- Usa `src/routes/layout.css` como traducción operativa del sistema visual: tokens DaisyUI, tipografía y utilidades reutilizables.
- Si un cambio visual requiere nuevas reglas recurrentes, primero actualiza `DESIGN.md` o las utilidades del tema antes de repetir clases manualmente por todo el proyecto.

## 1. Principios de Código (KISS & Clean Code)

- **Simplicidad:** Sigue el principio KISS estrictamente. Si una solución requiere 3 archivos para algo que se puede hacer en 1 con la misma eficiencia, elige la opción de 1.
- **Svelte Idiomático:**
  - Usa `<script lang="ts">`.
  - Aprovecha las transiciones nativas de Svelte (`import { fade, fly } from 'svelte/transition'`) en lugar de escribir CSS keyframes manuales cuando sea posible.
  - Componentización: Crea componentes pequeños y reutilizables.
- **Legibilidad:** Variables descriptivas en inglés. Comentarios solo cuando la lógica de negocio sea compleja.
- Para usar los íconos de Lucide, importa desde `@lucide/svelte` y no desde `lucide-svelte`.

## 2. Generación de HTML (Semántica y SEO)

- **Estructura Semántica:** Prohibido el "div soup". Usa `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- **Accesibilidad (a11y):**
  - Todos los botones/links deben tener `aria-label` si son solo iconos.
  - Las imágenes decorativas deben tener `alt=""`, las informativas deben tener descripción.
  - Respeta la jerarquía de encabezados (`h1` -> `h2` -> `h3`).

## 3. Sistema de Diseño (Vanchi Theme)

### Configuración Global

- **Modo:** Dark Mode Only (El diseño debe asumir siempre fondo oscuro).
- **Tipografía:**
  - Usa una fuente **Serif** para **H1 y H2** grandes solo cuando haya intención editorial o de lujo.
  - Usa una fuente **Sans** para **Cuerpo y UI** (Tech).
- **Densidad visual:** Low-to-medium density. Si dudas, reduce elementos antes de agregar más.
- **Acentos:** Usa un solo acento dominante por sección. El dorado es la marca; no compitas con otros colores.

### Estrategia de Breakpoints (Mobile First Strict)

- **Regla de Oro:** Escribe estilos para móvil por defecto.
- **Escalado:** Usa **únicamente** el breakpoint `lg:` para escritorio.
  - _Incorrecto:_ `w-full md:w-1/2 lg:w-1/3`
  - _Correcto:_ `w-full lg:w-1/3` (Salto directo para mantener simplicidad y consistencia).

### Paleta de Colores (DaisyUI Variables)

NO uses valores Hex o nombres de colores de Tailwind fijos (`bg-black`, `text-yellow-500`). Usa las variables semánticas:

- **Fondo:** `bg-base-100` (Negro Carbón).
- **Texto Principal:** `text-base-content` (Blanco Hueso).
- **Dorado (Marca):** `text-primary` / `bg-primary`.
- **Bordes:** `border-white/10` o `border-primary/20`.
- **Superficies premium:** prioriza las utilidades del tema (`vanchi-glass`, `vanchi-panel`, `vanchi-panel-hero`) antes de inventar nuevos patrones visuales.

### DaisyUI con criterio

- Usa DaisyUI por su semántica (`btn`, `navbar`, `input`, `card`, etc.), no por su apariencia por defecto.
- Toda pieza DaisyUI debe sentirse propia de `Vanchi`: más editorial, más sobria y más premium.
- Personaliza con utilidades de Tailwind y con el sistema del tema; evita que algo se vea como “demo default de DaisyUI”.
- Prefiere `base-*`, `primary` y transparencias controladas frente a colores ruidosos.
- Si una card no aporta jerarquía real, elimínala y resuelve con spacing, bordes o separación tonal.

## 4. Estética "Supreme Modernity" (Reglas Visuales)

Aplica estas reglas para lograr el efecto de "Arquitectura Digital" sin caer en ruido visual:

1.  **Glassmorphism (Cristal Ahumado):**
    Úsalo solo cuando la contención agregue jerarquía real. Prioriza `vanchi-glass` o `vanchi-panel`.
2.  **Énfasis dorado:**
    Prefiere `text-primary`, `border-primary/20`, o botones `btn-primary`. El gradient text dorado es una excepción, no una norma.
3.  **Interacciones (Feel Premium):**

- Todo elemento interactivo debe tener: `transition-all duration-300 ease-out` o `vanchi-interactive`.
  - Hover: `hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(197,160,89,0.15)]` (Resplandor dorado sutil).

4.  **Micro-Detalles:**
    - Usa `leading-loose` en párrafos de texto para mejorar la legibilidad y elegancia.
5.  **Guardrails de composición:**

- Evita el patrón genérico de tres cards iguales en fila si no hay una razón clara.
- No satures el hero con demasiadas badges, métricas o bloques de prueba social a la vez.
- Una buena sección de `Vanchi` suele tener una idea dominante, una jerarquía clara y aire suficiente.

## 5. Skill interna recomendada

- Si el trabajo es principalmente visual/UI, consulta también `.agents/skills/vanchi-design-system/SKILL.md`.
- Esa skill existe para aterrizar `DESIGN.md` a decisiones prácticas de composición, DaisyUI y tono visual en este repo.

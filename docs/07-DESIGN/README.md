# 🎨 07-DESIGN — Design System (The Invisible Ledger)

> Referencia rápida del design system de Vanchi.
> El **source of truth** completo está en [`/DESIGN.md`](../../DESIGN.md) en la raíz del proyecto.
> Este documento extrae los tokens clave para consulta rápida del agente.

---

## 🎯 Propósito

Vanchi es un portafolio **dark-only archival tech**. La dirección actual es **"The Invisible Ledger"**: una interfaz que parece un archivo de alta fidelidad, no un dashboard. Agentes que trabajan en background, tipografía que lleva el peso visual, color que es señal, nunca decoración.

**Atmósfera:** sobrio, de archivo, preciso, engineered, atemporal.
**Nunca:** brillante, vidrioso, deportivo, crypto, AI-gradient, dashboard-denso.

---

## 🎨 Tokens de color

| Token | Valor | Uso |
|-------|-------|-----|
| `base-100` | `oklch(11% 0.005 260)` | Fondo principal — charcoal ink sólido |
| `base-200` | `oklch(15% 0.005 260)` | Contenedores sólidos — limestone |
| `base-300` | `oklch(19% 0.005 260)` | Bordes 1px — stone |
| `base-content` | `oklch(94% 0.005 90)` | Texto principal — chalk white |
| `primary` | `oklch(92% 0.005 90)` | Chalk white (monocromo intencional) |
| `secondary` | `oklch(60% 0.01 260)` | Metadatos y labels — muted grey |
| `accent` | `oklch(72% 0.22 165)` | **Phosphor green** — SOLO indicadores de ejecución |
| `neutral` | `oklch(20% 0.005 260)` | Superficies contenidas |

### Guardrails de color

- ❌ Prohibido: dorado, amarillo, colores cálidos metálicos
- ❌ Prohibido: superficies de vidrio, blur, opacidad
- ❌ Prohibido: gradientes en fondos, texto o bordes
- ❌ Prohibido: colores raw de Tailwind
- ✅ El accent (verde fósforo) solo se usa como indicador 6×6px de estado de agente
- ✅ Separación visual solo con bordes sólidos de 1px, nunca con sombras

---

## 🖋️ Tipografía

| Uso | Fuente | Clase |
|-----|--------|-------|
| Títulos editoriales (H1, H2) | **Newsreader** (serif) | `font-serif` |
| UI / body / labels / código | **JetBrains Mono** (monospace) | `font-mono`, `font-sans` |

### Jerarquía

| Elemento | Mobile | Desktop (lg:) |
|----------|--------|---------------|
| H1 | `text-5xl` | `lg:text-7xl` |
| H2 | `text-3xl` | `lg:text-5xl` |
| H3 | `text-xl` | `text-2xl` |
| Body | `text-sm` | `lg:text-base` |

### Reglas tipográficas

- Newsreader solo en H1/H2. Puede usar itálica en una palabra de énfasis.
- JetBrains Mono para todo lo demás: body, nav, botones, cards, labels, forms.
- H3: JetBrains Mono, uppercase, tracking ancho (`0.15em`). Etiqueta mecánica tipo índice de archivo.
- Body: ancho de lectura 60ch–68ch máximo.
- ❌ Prohibido: texto con gradiente.
- ❌ Prohibido: Inter, Geist, Playfair Display.

---

## 🪟 Superficies y elevación

### Superficie default (sólida, opaca)

```css
bg-base-200
border border-base-300
/* Sin blur, sin opacidad, sin sombras */
```

### Niveles de elevación

| Nivel | Uso | Receta |
|-------|-----|--------|
| **0** — Flat canvas | Fondos de página | `bg-base-100`, sin borde |
| **1** — Quiet container | Cards, bloques de código | `bg-base-200` + border 1px `base-300` |
| **2** — Elevated block | Máximo 1 por página | `bg-neutral` + border 1px `base-300` |

### Guardrails

- ❌ Prohibido: `backdrop-blur`, `bg-opacity`, `bg-white/10`, vidrio, transparencias.
- ✅ Separación solo con bordes sólidos de 1px.
- ❌ Prohibido: `shadow-2xl`, `shadow-lg`, cualquier sombra.
- ❌ Prohibido: border-radius > 4px.

---

## 🧩 Componentes clave

### Navegación
- Sticky bar sólida. `bg-base-200`.
- Borde inferior 1px.
- Sin blur, sin vidrio, sin sombra.
- Active state: cambio de weight, sin highlight de fondo.

### Botones

| Tipo | Estilo |
|------|--------|
| **Primary CTA** | Sólido `bg-base-content`, `text-base-100`. Chalk on charcoal. |
| **Secondary CTA** | `bg-transparent`, borde 1px, `text-base-content`. |

### Interacciones

```css
transition-all duration-200 ease-out
hover:-translate-y-0.5
```

### Indicador de agente
- 6×6px círculo.
- `bg-accent` (verde) = ejecutándose.
- `bg-secondary` (gris) = inactivo.
- Sin glow, sin animación salvo pulso de opacidad.

---

## 📐 Layout

- **Mobile-first** siempre
- Solo `lg:` como breakpoint de escritorio
- Contenedor centrado: `max-w-5xl` a `max-w-6xl`
- Hero: `min-h-[100dvh]`
- Espaciado base: 160px vertical entre secciones
- Una idea fuerte por viewport
- Composición asimétrica cuando aporta tensión, centrada cuando calma

---

## 📁 Referencias

| Recurso | Ubicación |
|---------|-----------|
| Design System completo | [`/DESIGN.md`](../../DESIGN.md) |
| Tokens CSS reales | [`/src/routes/layout.css`](../../src/routes/layout.css) |
| Stack y patrones | [`/docs/00-GUIDE/STACK-PATTERNS.md`](../00-GUIDE/STACK-PATTERNS.md) |

---

## 🔗 Relaciones con otras carpetas

| Documento relacionado | ¿Por qué? |
|-----------------------|-----------|
| [`02-FRONTEND/README.md`](../02-FRONTEND/README.md) | Los componentes del frontend usan estos tokens |
| [`00-GUIDE/STACK-PATTERNS.md`](../00-GUIDE/STACK-PATTERNS.md) | Reglas de Tailwind + DaisyUI que implementan el diseño |
| [`06-BUSINESS-RULES/CORE-PRINCIPLES.md`](../06-BUSINESS-RULES/CORE-PRINCIPLES.md) | Principios de diseño que guían la identidad visual |
| [`/DESIGN.md`](../../DESIGN.md) | Source of truth completo del design system |

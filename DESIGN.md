---
theme: 'The Invisible Ledger'
colors:
  base-100: '#14191E'
  base-200: '#1A2127'
  base-300: '#242B33'
  base-content: '#EBEDF0'
  primary: '#EBEDF0'
  primary-content: '#14191E'
  secondary: '#8892A0'
  secondary-content: '#FFFFFF'
  accent: '#00C288'
  accent-content: '#0A1A14'
  neutral: '#2A313A'
  neutral-content: '#D4D8DD'
  info: '#6EA8D9'
  info-content: '#0D1B2A'
  success: '#00C288'
  success-content: '#0A1A14'
  warning: '#D4A843'
  warning-content: '#1A140D'
  error: '#C74B4B'
  error-content: '#FFFFFF'
spacing:
  base: '8px'
  section: '160px'
  gap: '24px'
rounded:
  box: '4px'
  btn: '4px'
  field: '4px'
typography:
  headings: 'Newsreader'
  body: 'JetBrains Mono'
  ui: 'JetBrains Mono'
---

## Overview

Vanchi projects the identity of an invisible automation laboratory.
We do not design software for humans to operate.
We design agents that execute silently in the background and log their actions with precision.

The interface must feel like a high-fidelity archive, not a dashboard.
Typography carries the visual weight. Space is the luxury. Color is a signal, never decoration.

**Atmosphere:** sober, archival, precise, engineered, timeless.
**Target:** business owners in health, legal, and education in Peru.
**Emotional response:** "This is serious. This is engineered. I trust this."

## Colors

- **base-100 (`#14191E`):** Charcoal ink — the sole page background. Solid, opaque, never textured or gradient-filled.
- **base-200 (`#1A2127`):** Limestone solid — for cards, containers, and code blocks. No transparency, no glass effects.
- **base-300 (`#242B33`):** Stone border — used exclusively for 1px solid separators between containers.
- **base-content (`#EBEDF0`):** Chalk white — primary reading text. High contrast against base-100.
- **primary (`#EBEDF0`):** Intentional monochrome. Mirrors base-content to reinforce the archive aesthetic. Used on primary buttons and key interactive surfaces.
- **primary-content (`#14191E`):** Dark text on primary surfaces (e.g., button labels).
- **secondary (`#8892A0`):** Muted grey — metadata, timestamps, helper text. Always supporting, never leading.
- **accent (`#00C288`):** Phosphor green. Reserved exclusively for agent execution state indicators. A 6px dot. An active status marker. Never decorative. Never on text. Never on backgrounds.
- **accent-content (`#0A1A14`):** Dark green — text on accent surfaces.
- **neutral (`#2A313A`):** Quiet contained surfaces. Slightly lighter than base-200 for subtle hierarchy.
- **info (`#6EA8D9`):** Informational states. Calm blue, never neon.
- **success (`#00C288`):** Success states. Same phosphor green as accent.
- **warning (`#D4A843`):** Warning states. Warm amber, restrained.
- **error (`#C74B4B`):** Error states. Deep red, not bright.

## Typography

| Role             | Font           | Weight   | Style                                                                      |
| ---------------- | -------------- | -------- | -------------------------------------------------------------------------- |
| H1, H2           | Newsreader     | 400, 500 | Serif. Italic allowed for one-word emphasis per heading.                   |
| H3               | JetBrains Mono | 500      | Monospace. Uppercase. Wide tracking (`0.15em`). Mechanical section labels. |
| Body, labels, UI | JetBrains Mono | 400, 500 | Monospace. All reading text, buttons, forms, navigation.                   |

**Scale:**

| Level | Mobile     | Desktop        | Line-height | Tracking  |
| ----- | ---------- | -------------- | ----------- | --------- |
| H1    | `text-5xl` | `lg:text-7xl`  | tight       | `-0.02em` |
| H2    | `text-3xl` | `lg:text-5xl`  | normal      | `-0.01em` |
| H3    | `text-xl`  | `text-2xl`     | normal      | `0.15em`  |
| Body  | `text-sm`  | `lg:text-base` | `1.7`       | normal    |
| Label | `text-xs`  | `text-xs`      | normal      | `0.18em`  |

**Rules:**

- Serif only on H1/H2. Never on body.
- No gradient text. No multiple decorative treatments in one heading.
- Body reading width: 60ch–68ch maximum.
- Upper-case labels only for short metadata strings. Never for sentences.

## Layout

**Grid:** Single-column mobile. Desktop breakpoint `lg:` only.
**Container:** `max-w-5xl` to `max-w-6xl`, centered.
**Spacing scale:** All spacing is a multiple of `8px`. Base section padding: `160px` vertical.

**Section rhythm:**

```
Hero statement
    ↓ 160px empty
Proof block (one visual, one caption)
    ↓ 120px empty
CTA cluster (one primary, one secondary)
```

**Structural rules:**

- One strong statement per viewport.
- Typography leads. Surfaces support.
- Asymmetric layout when it creates tension. Centered when it calms.
- Never stack three equal feature cards in a row.
- Never use dashboard-style grids with metrics, counters, badges.
- Never use Bento Grid patterns.

## Elevation & Depth

**Surface model:** Solid. Opaque. Border-separated. No transparency effects.

| Level | Name            | Recipe                                  | Usage              |
| ----- | --------------- | --------------------------------------- | ------------------ |
| 0     | Flat canvas     | `bg-base-100`, no border                | Page backgrounds   |
| 1     | Quiet container | `bg-base-200` + `border-base-300` (1px) | Cards, code blocks |
| 2     | Elevated block  | `bg-neutral` + `border-base-300` (1px)  | Max one per page   |

**Guardrails:**

- Prohibited: `backdrop-blur`, `bg-opacity`, `bg-white/10`, glass effects, shadow-based elevation.
- Separation MUST come from borders (1px solid), never from shadows.
- No `shadow-2xl`, `shadow-lg`, `shadow-md`, `shadow-sm`. No custom shadow arrays.

## Shapes

- **Box (`4px`):** All container elements (cards, panels, code blocks). Maximum 4px border radius.
- **Button (`4px`):** All interactive triggers. Same 4px maximum.
- **Field (`4px`):** Input, select, textarea. Same 4px maximum.
- **Indicator:** 6px circular dot for agent execution state. Fully rounded (`border-radius: 50%`).

**Guardrails:**

- Prohibited: border radius above 4px on any element except the agent indicator dot.
- Prohibited: fully rounded pill shapes on buttons, nav items, or badges.
- Prohibited: `rounded-full`, `rounded-2xl`, `rounded-3xl`, `rounded-box`, `rounded-field`.

## Components

**Navigation:**

- Sticky top bar. `bg-base-200`, solid.
- 1px `base-300` bottom border. No blur, no glass, no shadow.
- Active state: `text-base-content` weight change. No background highlight.

**Primary CTA button:**

- `bg-base-content`, `text-base-100`. Solid chalk white on dark backgrounds.
- 4px border radius. No shadow. No glow.
- Hover: `-translate-y-0.5` (0.125rem lift).

**Secondary CTA button:**

- `bg-transparent`, 1px `base-300` border, `text-base-content`.
- Hover: border becomes `base-content`.

**Cards:**

- `bg-base-200`, 1px `base-300` border, 4px border radius.
- Ample internal padding. One card per conceptual unit.
- Never three identical cards in a row.

**Agent execution indicator:**

- 6×6px circle. `bg-accent` (phosphor green) = running. `bg-secondary` = idle. `bg-error` = error.
- No glow, no animation beyond opacity pulse.

**Forms:**

- Label: JetBrains Mono, uppercase, `text-xs`, `text-secondary`. Above input.
- Input: `bg-base-200`, 1px `base-300` border, 4px radius.
- Focus: border becomes `base-content`.

**Footer:**

- `bg-base-200`, solid. Minimal typography. Legal links only. No decorative elements.

## Do's and Don'ts

**Do:**

- Use semantic color tokens exclusively. Never Tailwind fixed colors.
- Use Newsreader for H1/H2, JetBrains Mono for everything else.
- Separate sections with massive vertical space (`160px` minimum).
- Separate containers with 1px solid borders (`base-300`).
- Use phosphor green exclusively for agent state indicators (6px dot).
- Let typography carry the visual weight of the page.

**Don't:**

- Prohibited: gold, yellow, warm metallic colors anywhere.
- Prohibited: glass surfaces (`backdrop-blur`, opacity overlays, `bg-white/10`).
- Prohibited: border radius above 4px on any element.
- Prohibited: gradients on backgrounds, text, or borders.
- Prohibited: three identical cards in a horizontal row.
- Prohibited: shadow-based elevation. Use borders instead.
- Prohibited: scroll-triggered animations, fade sequences, parallax.
- Prohibited: purple, blue, cyan AI-themed gradients.
- Prohibited: Bento Grid layouts.
- Prohibited: light mode sections or light-to-dark transitions.

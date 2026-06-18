# DESIGN.md

Design system and visual guidance for AI agents working on `Vanchi`.
This document defines how the project should look and feel.
It is the visual counterpart to implementation instructions.

---

## Overview

### Brand identity

`Vanchi` is now **The Invisible Ledger** — a laboratory of invisible automation.

We don't build software for humans to operate.
We build agents that work silently in the background and log their actions with precision.

The interface should feel like:

- A high-fidelity archive of automated processes
- A terminal that records, not a dashboard that screams
- Raw, editorial, archival — never decorative
- Typographic-driven, not surface-driven

### Why this direction

Our product is GaaS (Generative Agent as a Service). Agents work autonomously.
A flashy gold-on-black luxury dashboard contradicts this value proposition.
Instead, the interface mirrors what the agent actually does: **silent execution,
meticulous logging, zero fluff.**

### Desired feeling

- sober
- archival
- precise
- calm
- engineered
- timeless

**Never:** shiny, glowing, glassy, sporty, crypto-bro, AI-gradient, dashboard-dense.

### Abandoned aesthetics (anti-patterns)

| Cliché | Why dropped |
|---|---|
| Gold on black with glass surfaces | AI-generated luxury tech template. Meaningless now. |
| Bento grids everywhere | Eliminates editorial hierarchy. Default AI layout. |
| Border glow / cosmic gradients | Crypto/startup energy. Wrong audience. |
| Grid line backgrounds with light bursts | Another AI default. |
| Multiple accent colors competing | Noise over signal. |

---

## Colors

### Core tokens

```
base-100:  oklch(11% 0.005 260)    # Charcoal ink — page background
base-200:  oklch(15% 0.005 260)    # Limestone grey — solid containers
base-300:  oklch(19% 0.005 260)    # Darker stone — borders and depth
base-content: oklch(94% 0.005 90)  # Chalk white — primary text

primary:   oklch(92% 0.005 90)     # Same chalk — reinforces the monochrome archive feel
primary-content: oklch(12% 0.005 260)  # Dark text on primary surfaces

secondary: oklch(60% 0.01 260)     # Muted grey — metadata and labels
secondary-content: oklch(98% 0 0)

accent:    oklch(72% 0.22 165)     # Phosphor green — used ONLY for execution indicators
accent-content: oklch(10% 0.01 165)

neutral:   oklch(20% 0.005 260)    # Quiet contained surfaces
neutral-content: oklch(85% 0.005 90)
```

### Semantic use

- **Primary / chalk white**: All reading text, headings, key information
- **Secondary / muted grey**: Metadata, timestamps, labels, helper text
- **Accent / phosphor green**: **Only** for agent-execution indicators (a 6×6px dot, a status marker)
- **base-100 / charcoal ink**: Page background
- **base-200 / limestone**: Cards, containers, code blocks (solid, no glass)
- **base-300 / stone**: 1px borders, subtle separators

### Color guardrails

- Do not use the accent color for anything other than execution-state indicators.
- Do not use glass effects, backdrop-blur, or opacity overlays.
- Do not use gradients on text, backgrounds, or borders.
- Do not use Tailwind fixed colors (`bg-black`, `text-gray-*`).
- Do not introduce a second accent color. One dot is enough.
- Do not use pure `#000000` or `#ffffff`.

---

## Typography

### Font pairing

| Role | Font | Source |
|---|---|---|
| Headings / editorial | **Newsreader** (serif) | Google Fonts |
| UI / body / code | **JetBrains Mono** (monospace) | Google Fonts |

### Why this pairing

Newsreader is a literary serif with sharp, dramatic character — it evokes printed archives,
legal documents, and editorial authority. JetBrains Mono is a monospace designed for code:
it signals automation, structure, and technical precision without feeling cold.

The contrast between a humanist serif headline and a monospace body creates a unique
tension that no generic SaaS template can replicate.

### Hierarchy

#### H1

- mobile: `text-5xl`
- desktop: `lg:text-7xl`
- font: Newsreader, italic weight for emphasis, regular for structure
- tracking: tight (`-0.02em`)
- short lines, never verbose

#### H2

- mobile: `text-3xl`
- desktop: `lg:text-5xl`
- font: Newsreader
- one word or phrase in italic for editorial accent

#### H3

- `text-xl` to `text-2xl`
- JetBrains Mono, uppercase, wide tracking (`0.15em`)
- Mechanical, labels the section like a file index

#### Body

- JetBrains Mono, `text-sm` to `lg:text-base`
- `leading-relaxed` for paragraphs
- Reading width around **60ch–68ch**

#### Labels / metadata

- JetBrains Mono, uppercase, `text-xs`
- `tracking-wider`
- Muted grey (`secondary`), never loud

### Typography guardrails

- No gradient text. Ever.
- No giant all-caps headlines.
- No multiple decorative treatments in one heading.
- Serif only on H1/H2. Body is always monospace.
- Monospace text should never feel "terminal green". It should feel "typeset archive."

---

## Layout principles

### Global layout

- Dark mode only
- Mobile-first always
- Desktop breakpoint: `lg:` only
- Container: `max-w-5xl` to `max-w-6xl`
- Massive breathing room between sections (`py-28 lg:py-40`)

### Composition style

The layout language is **archival-editorial**:

- Asymmetric when it creates tension
- Centered when it calms the eye
- Large empty blocks are intentional — they signal luxury
- Sections should feel like pages in a printed report, not cards in a dashboard

### Section rhythm

```
Hero (one statement, one line of context)
    ↓  empty space (160px+)
Proof block (one visual, one caption)
    ↓  empty space (120px+)
CTA cluster (one primary, one secondary)
    ↓  empty space
```

Each section breathes. Nothing competes for attention.

### Anti-patterns

- ❌ Three equal feature cards in a row
- ❌ Stacking dense subsections without visual pause
- ❌ Dashboard-landing-page syndrome (metrics, counters, badges, pills)
- ❌ "Bento grid" feature showcases

---

## Surfaces & depth

### Surface language

**Solid. Opaque. Typographic.**

Primary recipe for containers:
- `bg-base-200`
- `border border-base-300` (1px, hard edge, no blur)
- No rounded corners (0px or 4px max for interactive elements)
- No glass, no backdrop-blur, no transparency tricks

### Elevation model

#### Level 0 — Flat canvas

Page backgrounds. No containment. Just the base-100 surface.
The background has a flat, solid color — **no radial gradients, no glow, no noise.**

#### Level 1 — Quiet container

For cards, code blocks, grouped content.
- `bg-base-200`
- 1px solid border using base-300
- 4px border radius maximum
- No shadow. Borders provide separation.

#### Level 2 — Elevated block

Rare. One per page maximum.
- `bg-base-200` with slightly lighter variant
- Same 1px border
- Subtle warm shadow only if strictly necessary

### Elevation guardrails

- Prefer borders over shadows for separation
- No glass surfaces anywhere
- No `backdrop-blur`, no `bg-opacity`, no transparency
- No inset shadows
- If in doubt: flat > elevated

---

## Component styling

### Navigation

- Sticky top bar
- Solid `bg-base-200`, no blur
- 1px bottom border
- Active state: subtle text weight change or underline
- No pill shape, no glass, no gold

### Buttons

#### Primary CTA

- Solid `bg-base-content` (chalk white)
- `text-base-100` (charcoal ink)
- 4px border radius
- Subtle lift on hover (`-translate-y-0.5`)
- No glow, no gradient

#### Secondary CTA

- `bg-base-200`
- 1px solid border
- `text-base-content`
- Hover: border brightens slightly

#### Interaction

All interactive elements:
- `transition-all duration-200 ease-out`
- `hover:-translate-y-0.5`
- Focus: visible outline, not glow
- No `shadow-lg` or `shadow-2xl` on buttons

### Cards

- Solid surfaces (`bg-base-200`)
- 1px border
- 4px border radius max
- Ample internal padding
- One card per conceptual unit. Never three identical cards in a row.
- Card titles: JetBrains Mono, uppercase, wide tracking

### Code blocks / data displays

- `bg-base-200`, solid
- Monospace naturally
- 1px border
- Line numbers optional
- Syntax highlighting: minimal. Prefer `base-content` and `secondary` only.

### Indicators (the only place for accent color)

- Agent running: 6×6px dot in `accent` green
- Agent idle: 6×6px dot in `secondary` grey
- Agent error: 6×6px dot in error red
- No pulsating, no glowing, no animation beyond a subtle opacity pulse

### Forms

- Label above input, JetBrains Mono, uppercase, `text-xs`
- Input: solid `bg-base-200`, 1px border, 4px radius
- Focus: border becomes `base-content`
- Helper text: muted, `secondary`

### Footer

- Contained in `bg-base-200`
- Minimal typography
- Only essential links (legal, contact)
- No decorative elements

---

## Imagery & media

- Images should be desaturated, high-contrast, almost archival
- Avoid stock-photo energy entirely
- If a photo is used, treat it like a document scan: flat, bordered, captioned
- No hero images with overlays and gradient masks
- No glowing tech illustrations

---

## Motion & interaction

### Motion profile

- Minimal. Almost invisible.
- Page sections: no entrance animations. Content appears instantly.
- Hover states: subtle lift and border change.
- No scroll-triggered animations.
- No fade-in sequences.
- No parallax.

### Allowed motion

- Subtle `hover:-translate-y-0.5` on interactive elements
- Opacity pulse on the green indicator dot (agent running)
- Instant page transitions (no SPA fade effects)

### Avoid

- Fly/fade entrance animations
- Scroll-triggered reveals
- Marquee text
- Particle effects
- Parallax scrolling
- Bouncy transitions

---

## Responsive behavior

- Mobile: single column, amplified whitespace, serif headings slightly smaller
- Desktop: `lg:` breakpoint only for grid changes
- Hero: `min-h-[100dvh]` or equivalent
- Buttons may stack vertically on mobile
- Decorative content collapses early on mobile
- Typography scales gracefully, never cramped

---

## Do's and don'ts

### Do

- Use semantic color tokens exclusively
- Keep copy concrete and business-oriented
- Use Newsreader for headings, JetBrains Mono for everything else
- Keep layouts breathable with massive empty space
- Prefer one hero statement, one proof block, one CTA
- Let typography carry the visual weight
- Use borders for separation, never shadows
- Use the green phosphor accent ONLY for execution indicators

### Don't

- Do not use gold, yellow, or warm metallics anywhere
- Do not use glass surfaces (`backdrop-blur`, opacity overlays)
- Do not use rounded corners above 4px
- Do not use gradients on backgrounds or text
- Do not create three equal feature cards in a row
- Do not stack badges, pills, counters, and stats together
- Do not use light mode or light sections
- Do not use purple/blue/cyan AI gradients
- Do not use `md:` as the main responsive breakpoint
- Do not animate page content on scroll
- Do not use shadow-based elevation (use borders instead)

---

## Agent prompt guide

Use this prompt when generating UI for Vanchi:

> "Design this page in Vanchi 'Invisible Ledger' mode: solid dark charcoal surfaces (no glass, no transparency), Newsreader serif for headlines, JetBrains Mono for body and UI, chalk white as primary text, muted grey for metadata, phosphor green used ONLY as a 6px dot for agent execution state indicators. 1px solid borders, no rounded corners above 4px, no gradients, no shadows, no scroll animations. Massive breathing room between sections. Asymmetric editorial layout. One strong statement per viewport. Typography carries the design. Make it feel like a printed archive of automated processes, not a SaaS dashboard."
>
> "Make it more archival, less decorative."
> "Remove the glass. Remove the glow. Solid surfaces only."
> "Fewer cards, more typography."
> "The accent color is not decorative. It is a signal."

### Fallback rule

If unsure between two options, choose the one with:

- Less decoration
- Fewer components
- More whitespace
- Clearer typographic hierarchy
- Solid surfaces over transparent ones
- Straight edges over rounded ones

---

## Implementation alignment for this repo

- Framework: `SvelteKit`
- Language: `TypeScript`
- Styling: `Tailwind CSS v4` + `DaisyUI`
- Runtime: `Bun`
- Icons: `@lucide/svelte` (use sparingly, prefer typographic solutions)

Design agents should:

- Use DaisyUI semantic variables (`base-100`, `base-content`, `primary`, etc.)
- Dark mode is the **only** mode
- Use Newsreader + JetBrains Mono
- Remove all glass utilities (`vanchi-glass`, `vanchi-panel-hero`)
- Remove all gold references from the codebase
- Replace Playfair Display font files with Newsreader
- Replace Geist font files with JetBrains Mono

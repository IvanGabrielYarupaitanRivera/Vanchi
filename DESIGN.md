# DESIGN.md

Design system and visual guidance for AI agents working on `Vanchi`.

This document defines how the project should look and feel.
It is the visual counterpart to implementation instructions.

## 1. Visual theme & atmosphere

### Core identity

`Vanchi` is a **dark-only luxury tech portfolio**.
It should feel like a mix of:

- **Vercel** for technical precision and clean developer confidence
- **BMW** for premium engineered darkness and controlled hierarchy
- **Lamborghini** for the singular gold accent on deep dark surfaces
- **Notion** for editorial restraint and selective serif emphasis

These are **reference directions only**, not brands to imitate literally.

### Desired feeling

The UI should feel:

- premium
- calm
- precise
- modern
- restrained
- trustworthy

The interface should never feel noisy, playful, neon, overloaded, or trend-chasing.

### Density & composition

Default to **low-to-medium visual density**.
When in doubt, choose **subtraction over addition**.

Rules:

- one strong message per viewport
- few visual layers at a time
- large breathing room between sections
- restrained use of cards
- only one accent color in standard UI

## 2. Color palette & roles

Use the current project tokens from `src/routes/layout.css` as the source of truth.
Favor semantic usage over raw color picking.

### Core tokens

- `base-100` — `oklch(15% 0.005 85)` — primary canvas, charcoal black
- `base-200` — `oklch(12% 0.005 85)` — secondary surface
- `base-300` — `oklch(10% 0.005 85)` — deepest panel surface
- `base-content` — `oklch(92% 0.005 90)` — main text, bone white
- `primary` — `oklch(74% 0.14 85)` — antique gold, only brand accent
- `secondary` — `oklch(45% 0.02 85)` — stone neutral, subdued support tone
- `accent` — `oklch(98% 0 0)` — bright tech white for rare highlights
- `neutral` — `oklch(25% 0.01 85)` — quieter contained surfaces

### Semantic use

Use color intentionally:

- **Primary / gold**: CTA buttons, active nav states, emphasis words, subtle highlights
- **Base content**: all main reading text
- **White opacity layers**: borders, separators, glass surfaces
- **Neutral / secondary**: contained supporting surfaces, not hero accents

### Color guardrails

- do not use fixed Tailwind core colors like `bg-black`, `text-yellow-500`, `text-gray-500` for primary UI language
- do not introduce purple gradients or blue/purple AI aesthetics
- do not add multiple competing accent colors in the same section
- do not use pure black `#000000` for normal surfaces
- do not oversaturate gold

## 3. Typography rules

### Font pairing

- **Serif display**: `Playfair Display`
- **Sans UI/body**: `Geist`

### Usage rules

- Use **Playfair Display** for selected `h1` / `h2` emphasis and luxury moments
- Use **Geist** for body copy, nav, buttons, cards, labels, forms, metadata
- Do not use serif across dense UI blocks, forms, or dashboards
- Do not use Inter

### Hierarchy

#### H1

- mobile: `text-5xl`
- desktop: up to `lg:text-7xl`
- tight tracking
- short lines
- high impact, never verbose

#### H2

- mobile: `text-3xl`
- desktop: `lg:text-5xl`
- serif emphasis can appear on one word or phrase only

#### H3

- `text-xl` to `text-3xl`
- mostly Geist unless the section is intentionally editorial

#### Body

- default `text-sm` to `lg:text-lg`
- use `leading-loose` for long-form marketing paragraphs
- keep reading width around **58ch–65ch**

#### Labels / microcopy

- uppercase only for short labels
- use wider tracking sparingly
- metadata should be quiet, not shouty

### Typography guardrails

- avoid giant all-caps headlines everywhere
- avoid multiple decorative treatments in the same heading
- avoid gradient text except for a rare premium emphasis moment
- avoid long paragraphs directly under giant headings

## 4. Layout principles

### Global layout

- dark mode only
- mobile-first always
- use **only `lg:`** as the desktop breakpoint for main layout changes
- keep content inside a centered container, generally `max-w-5xl` to `max-w-6xl`

### Composition style

The layout language should be:

- editorial
- clean
- slightly architectural
- premium but not theatrical

Use asymmetry carefully, but do not force it.
If a centered composition is cleaner, prefer it.

### Section rhythm

- sections should breathe vertically
- avoid stacking many dense subsections without pause
- prefer one hero statement, one proof block, one CTA cluster
- avoid “dashboard landing page syndrome”

### Structural rules

- use semantic HTML sections
- avoid div soup
- avoid three equal feature cards on landing pages when a more curated layout is possible
- prefer a single strong visual area over many competing mini-panels

## 5. Surfaces, depth & elevation

### Surface language

The default surface style is **smoked glass on charcoal**.

Primary recipe:

- `bg-base-100/60`
- `backdrop-blur-lg`
- `border border-white/10`
- `shadow-2xl`

Use this only when containment is necessary.
Do not wrap every piece of content in glass.

### Elevation model

#### Level 0 — Flat canvas

Use for page backgrounds and open sections.
No extra containment.

#### Level 1 — Quiet containment

Use for nav bars, subtle panels, or grouped content.
Border first, shadow second.

#### Level 2 — Premium card

Use only when hierarchy needs emphasis.
Rounded corners, glass panel, subtle tinted shadow.

#### Level 3 — Hero surface

Use sparingly for a single focal panel per section.
Should feel deliberate and cinematic, never multiplied everywhere.

### Elevation guardrails

- prefer borders and tonal separation over aggressive shadows
- shadows must feel warm and soft, not blue, purple, or neon
- avoid layering many elevated boxes in the same viewport

## 6. Component styling

### Navigation

- sticky premium pill on desktop
- rounded full shape
- blurred smoked background
- white/10 border
- active state can use white/10 fill or gold text

### Buttons

#### Primary CTA

- gold background or gold-led emphasis
- solid, confident, premium
- subtle lift on hover
- never bulky or cartoonish

#### Secondary CTA

- ghost or smoked outline
- white/10 border
- slightly more muted text

#### Interaction

All interactive elements should have:

- `transition-all duration-300 ease-out`
- `hover:-translate-y-1`
- subtle shadow lift if justified
- tactile pressed state when appropriate

### Cards

- use rounded corners generously, generally soft not sharp
- avoid over-carding entire pages
- use cards for hierarchy, not as a default layout crutch
- card internals should feel spacious

### Forms

- label above input
- rounded fields are acceptable and aligned with current theme
- helper text should be subdued
- focus states must feel premium and visible
- no noisy validation chrome unless needed

### Footer

- should feel contained, polished, and legally complete
- use one main surface block if needed
- maintain quiet typography and controlled spacing

### Social proof

- prefer logo bands, restrained trust rows, or clean capability lines
- avoid loud testimonials, fake numbers, or overbuilt proof dashboards

## 7. Imagery & media

- imagery should be dark, cinematic, and subtle
- use low-opacity overlays and masking to integrate visuals into the charcoal base
- avoid overly bright stock-photo energy
- visuals should support atmosphere, not dominate copy

## 8. Motion & interaction

### Motion profile

Motion should feel:

- smooth
- premium
- restrained
- intentional

### Allowed motion

- fade / fly entrance transitions
- subtle hover lift
- low-intensity marquees when useful
- gentle status pulse

### Avoid

- constant busy motion
- exaggerated parallax
- particle effects
- flashy scroll tricks
- bouncy startup-style animations

## 9. Responsive behavior

- default mobile layout is single-column
- desktop jumps happen at `lg:` only
- hero sections must use `min-h-[100dvh]` or equivalent safe viewport patterns
- avoid complex intermediate responsive states
- decorative content should collapse early on mobile
- buttons may stack vertically on mobile if that keeps the layout calmer

## 10. Do’s and don’ts

### Do

- use semantic color tokens
- keep copy concrete and business-oriented
- use serif emphasis selectively
- keep layouts breathable
- build trust through restraint
- let whitespace do part of the design work
- prefer one strong visual idea over many small tricks

### Don’t

- do not add purple/blue AI gradients
- do not create dense dashboards inside landing sections
- do not use many badges, pills, counters, and stats together
- do not overload hero sections with multiple proof systems at once
- do not use generic SaaS cliches everywhere
- do not use multiple accent colors unless a semantic state requires it
- do not switch to a light section randomly
- do not use `md:` as the main breakpoint for composition changes

## 11. Agent prompt guide

Use prompts in this style when generating UI for `Vanchi`:

- "Design this page in Vanchi mode: dark-only luxury tech, Geist for UI, Playfair Display for selective editorial emphasis, antique gold as the only brand accent, low visual density, calm premium spacing, glass surfaces only where hierarchy requires them."
- "Make it feel more restrained, more editorial, and less SaaS-dense."
- "Use fewer boxes, fewer pills, fewer competing highlights."
- "Prefer one hero statement, one trust block, and one clear CTA cluster."

### Final fallback rule

If unsure between two options, choose the one with:

- less noise
- fewer components
- more spacing
- clearer hierarchy

That is the correct direction for `Vanchi`.

## 12. Implementation alignment for this repo

For this specific codebase:

- framework: `SvelteKit`
- language: `TypeScript`
- styling: `Tailwind CSS v4` + `DaisyUI`
- runtime: `Bun`
- icons: `@lucide/svelte`

Design agents should align with the existing project conventions:

- use DaisyUI semantic variables (`base-100`, `base-content`, `primary`, etc.)
- keep dark mode as the default and only mode
- use `Playfair Display` + `Geist`
- preserve the premium gold-accented identity already established in `layout.css`
- respect the project’s mobile-first, `lg:`-only desktop scaling philosophy

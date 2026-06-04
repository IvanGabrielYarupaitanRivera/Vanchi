# 🎨 07-DESIGN — Design System

> Referencia rápida del design system de Vanchi.
> El **source of truth** completo está en [`/DESIGN.md`](../../DESIGN.md) en la raíz del proyecto.
> Este documento extrae los tokens clave para consulta rápida del agente.

---

## 🎯 Propósito

Vanchi es un portafolio **dark-only luxury tech**. Su diseño debe sentirse premium, calmado, preciso, moderno, restringido y confiable. Nunca ruidoso, juguetón, neón o sobrecargado.

---

## 🎨 Tokens de color

| Token | Valor | Uso |
|-------|-------|-----|
| `base-100` | `oklch(15% 0.005 85)` | Fondo principal, carbón oscuro |
| `base-200` | `oklch(12% 0.005 85)` | Superficie secundaria |
| `base-300` | `oklch(10% 0.005 85)` | Panel más profundo |
| `base-content` | `oklch(92% 0.005 90)` | Texto principal, bone white |
| `primary` | `oklch(74% 0.14 85)` | **Dorado antiguo** — único acento de marca |
| `secondary` | `oklch(45% 0.02 85)` | Tono piedra neutro de apoyo |
| `accent` | `oklch(98% 0 0)` | Blanco tech para highlights raros |
| `neutral` | `oklch(25% 0.01 85)` | Superficies secundarias contenidas |

### Guardrails de color

- ❌ No usar colores raw de Tailwind (`bg-black`, `text-yellow-500`, `text-gray-500`)
- ❌ No introducir morados, azules o gradientes (estética AI genérica)
- ❌ No usar más de un color de acento por sección
- ❌ No usar negro puro `#000000` en superficies normales
- ❌ No sobresaturar el dorado

---

## 🖋️ Tipografía

| Uso | Fuente | Clase |
|-----|--------|-------|
| Display / títulos editoriales | **Playfair Display** | `font-serif` |
| UI / body / nav / botones | **Geist** | `font-sans` |

### Jerarquía

| Elemento | Mobile | Desktop (lg:) |
|----------|--------|---------------|
| H1 (display) | `text-5xl` | `lg:text-7xl` |
| H2 | `text-3xl` | `lg:text-5xl` |
| H3 | `text-xl` a `text-3xl` | — |
| Body | `text-sm` | `lg:text-lg` |

### Reglas tipográficas

- Serif solo para títulos editoriales selectivos (1 palabra o frase corta)
- Geist para todo lo demás: body, nav, botones, cards, labels, forms
- Body: `leading-loose` para párrafos largos, ancho de lectura `58ch` a `65ch`
- Labels en mayúscula solo para textos muy cortos
- ❌ No usar Inter

---

## 🪟 Superficies y elevación

### Superficie default (vidrio ahumado)

```css
bg-base-100/60
backdrop-blur-lg
border border-white/10
shadow-2xl
```

### Niveles de elevación

| Nivel | Uso | Características |
|-------|-----|-----------------|
| **0** — Flat canvas | Fondos de página | Sin contenedor extra |
| **1** — Quiet containment | Nav, paneles sutiles | Borde primero, sombra después |
| **2** — Premium card | Elementos que necesitan énfasis | Bordes redondeados, vidrio, sombra tintada |
| **3** — Hero surface | Panel focal único (1 por sección) | Cinematográfico, deliberado |

### Guardrails

- Preferir bordes y separación tonal sobre sombras agresivas
- Sombras cálidas y suaves, nunca azules, moradas o neón
- No apilar muchas cajas elevadas en el mismo viewport

---

## 🧩 Componentes clave

### Navegación
- Sticky pill en desktop
- Forma redondeada completa
- Fondo smoked blur
- Borde white/10
- Active state: white/10 fill o gold text

### Botones

| Tipo | Estilo |
|------|--------|
| **Primary CTA** | Fondo dorado, sólido, lift en hover |
| **Secondary CTA** | Ghost o smoked outline, borde white/10 |

### Interacciones

```css
transition-all duration-300 ease-out
hover:-translate-y-1
```

### Cards
- Esquinas redondeadas generosas
- No sobrecargar páginas con cards
- Espaciado interno amplio

---

## 📐 Layout

- **Mobile-first** siempre
- Solo `lg:` como breakpoint de escritorio
- Contenedor centrado: `max-w-5xl` a `max-w-6xl`
- Hero: `min-h-[100dvh]`
- Secciones con gran respiración vertical
- Una idea fuerte por viewport

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

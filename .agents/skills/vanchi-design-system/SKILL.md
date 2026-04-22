---
name: vanchi-design-system
description: Sistema visual oficial de Vanchi. Úsalo al diseñar, refactorizar o evaluar UI dentro de este repositorio para aplicar DESIGN.md con DaisyUI, Tailwind v4 y la identidad luxury tech del proyecto.
---

# Vanchi Design System Skill

Usa esta skill cuando el trabajo implique:

- editar componentes visuales
- ajustar `layout.css`
- redefinir secciones del home o landing pages
- crear nuevas superficies, CTAs, grids o bloques de prueba social
- revisar si una interfaz “se siente Vanchi”

## 1. Orden de lectura obligatorio

Antes de tocar UI en este repo, lee en este orden:

1. `DESIGN.md`
2. `src/routes/layout.css`
3. `.github/copilot-instructions.md`

Si detectas conflicto entre estilos genéricos y estas fuentes, gana este orden.

## 2. Qué significa “verse como Vanchi”

La interfaz debe sentirse como una mezcla controlada de:

- precisión técnica tipo Vercel
- oscuridad premium tipo BMW
- acento dorado singular tipo Lamborghini
- contención editorial tipo Notion

Nunca copies marcas literalmente.
Solo usa la dirección estética como brújula.

## 3. Reglas visuales no negociables

- dark mode only
- `Geist` para UI y cuerpo
- `Playfair Display` solo para énfasis editorial selectivo
- un único acento dominante por sección
- baja o media densidad visual
- menos cajas, menos pills, menos adornos simultáneos
- más jerarquía, más espacio, más claridad

## 4. DaisyUI en modo Vanchi

DaisyUI es la base semántica, no la apariencia final.

### Haz esto

- usa `btn`, `navbar`, `input`, `card`, `menu`, `badge` solo cuando aporten claridad
- compón con `base-*`, `primary` y transparencias controladas
- reutiliza las utilidades del tema cuando existan (`vanchi-glass`, `vanchi-panel`, `vanchi-panel-hero`, `vanchi-display`, `vanchi-reading`, `vanchi-interactive`)
- personaliza spacing, bordes y elevación para evitar look de preset

### No hagas esto

- no dejes componentes DaisyUI en estado default visual
- no metas colores Tailwind arbitrarios (`text-yellow-500`, `bg-black`, `text-gray-400`) como lenguaje principal
- no conviertas cada bloque en una card
- no combines demasiados acentos, sombras o brillos en un mismo viewport

## 5. Patrones de composición preferidos

### Hero

- una sola idea dominante
- uno o dos CTAs como máximo
- prueba social muy contenida
- fondo oscuro integrado con overlays sutiles

### Secciones

- respiración vertical generosa
- máximo uno o dos focos visuales por sección
- evita dashboards falsos o grids de métricas innecesarias

### Social proof

- logos, líneas de capacidad o evidencia concreta
- no testimonials falsos ni estadísticas infladas

## 6. Motion

- usa transiciones suaves y discretas
- `fade` y `fly` son preferibles a motion exagerado
- hover lift sutil sí
- parallax dramático, partículas y ruido constante no

## 7. Checklist antes de terminar

- ¿Respeta `DESIGN.md` de forma explícita?
- ¿Se ve más editorial y menos SaaS genérico?
- ¿La sección tiene suficiente aire?
- ¿Se puede simplificar quitando uno o dos elementos?
- ¿El dorado está usado como acento, no como decoración excesiva?
- ¿DaisyUI sigue siendo semántico pero ya no parece una demo?

Si alguna respuesta es “no”, todavía no está listo.

---
name: vanchi-design-system
description: Sistema visual oficial de Vanchi — "The Invisible Ledger". Úsalo al diseñar, refactorizar o evaluar UI dentro de este repositorio para aplicar DESIGN.md con DaisyUI, Tailwind v4 y la identidad editorial-archivo del proyecto.
---

# Vanchi Design System Skill — The Invisible Ledger

Usa esta skill cuando el trabajo implique:

- editar componentes visuales
- ajustar `layout.css`
- redefinir secciones del home o landing pages
- crear nuevas superficies, CTAs, grids o bloques de prueba social
- revisar si una interfaz "se siente Vanchi"

## 1. Orden de lectura obligatorio

Antes de tocar UI en este repo, lee en este orden:

1. `DESIGN.md`
2. `src/routes/layout.css`
3. `.github/copilot-instructions.md`

Si detectas conflicto entre estilos genéricos y estas fuentes, gana este orden.

## 2. Qué significa "verse como Vanchi" ahora

La dirección actual es **"The Invisible Ledger"**: un archivo editorial de alta fidelidad. La interfaz debe sentirse como:

- Un registro impreso de procesos automatizados
- Un terminal que documenta, no un dashboard que grita
- Tipografía cruda, superficies sólidas, espacio como lujo

**Referencias direccionales (no copiar literal):**
- Documentación de Linear (vistas de archivo)
- Identidad editorial de A24
- Diseño industrial de productos técnicos (manuales, especificaciones)

**Abandonado:** Vercel, BMW, Lamborghini, Notion. Gold-on-black, glass surfaces, luxury tech.

## 3. Reglas visuales no negociables

- dark mode only (sin light mode, sin toggle)
- **Newsreader** (serif) para H1/H2 — titulares editoriales
- **JetBrains Mono** (monospace) para TODO lo demás: body, nav, botones, labels, forms
- H3: JetBrains Mono, uppercase, tracking ancho (0.15em) — etiqueta mecánica
- superficies SÓLIDAS y OPACAS — sin vidrio, sin blur, sin transparencias
- separación solo con bordes de 1px (`base-300`) — nunca con sombras
- único acento: **phosphor green** — solo como indicador 6×6px de estado de agente
- border-radius: 4px máximo en todo
- gradientes: prohibidos en cualquier elemento
- baja densidad visual — tipografía lleva el peso, no las superficies
- composición editorial asimétrica — nunca tres cards iguales en fila

## 4. DaisyUI en modo Invisible Ledger

DaisyUI es la base semántica, no la apariencia final.

### Haz esto

- usa `btn`, `card`, `collapse`, `badge`, `input`, `navbar` con moderación
- superficies: `vanchi-container` (bg-base-200 + border 1px base-300)
- indicador de agente: `vanchi-agent-dot` (6px circle, accent green)
- texto editorial: `vanchi-display` (Newsreader, tracking tight)
- lectura: `vanchi-reading` (max-width 65ch, line-height 1.9)
- etiquetas: `vanchi-eyebrow` (mono, uppercase, tracking, secondary)
- bordes: `vanchi-hairline` (border-color: base-300)

### No hagas esto

- ❌ no uses `vanchi-glass`, `vanchi-panel`, `vanchi-panel-hero` — fueron eliminados
- ❌ no uses `backdrop-blur`, `bg-opacity`, `bg-white/10` ni ningún efecto de vidrio
- ❌ no uses sombras (`shadow-*`) en ningún elemento
- ❌ no uses border-radius > 4px
- ❌ no uses gradientes en texto, fondos o bordes
- ❌ no uses colores Tailwind fijos (`bg-black`, `text-yellow-500`)
- ❌ no uses dorado, amarillo, ni colores metálicos cálidos
- ❌ no uses el accent green fuera del indicador de agente

## 5. Patrones de composición preferidos

### Hero

- una declaración fuerte
- H1 en Newsreader, posible itálica en una palabra
- subtítulo en JetBrains Mono, una línea
- 160px de espacio vacío debajo

### Secciones

- respiración vertical masiva (160px entre secciones)
- máximo un foco visual por sección
- asimetría cuando crea tensión, centro cuando calma
- nunca tres cards iguales en fila
- nunca dashboards ni grids de métricas

### Social proof

- evidencia concreta: nombres de clientes reales, enlaces a proyectos
- sin testimonios falsos ni estadísticas infladas

## 6. Motion

- mínimo, casi invisible
- hover: `-translate-y-0.5` (0.125rem, sutil)
- transiciones: `duration-200`, no 300
- sin animaciones de entrada (fly, fade)
- sin animaciones de scroll
- sin parallax, sin partículas
- indicador de agente: pulso de opacidad sutil

## 7. Checklist antes de terminar

- ¿Respeta `DESIGN.md` de forma explícita?
- ¿Parece un archivo editorial, no un SaaS genérico?
- ¿Las superficies son sólidas y opacas? ¿Sin vidrio, sin blur?
- ¿La separación es con bordes, no con sombras?
- ¿El verde fósforo aparece SOLO como indicador de ejecución?
- ¿La sección tiene suficiente aire (160px+)?
- ¿Se puede simplificar quitando uno o dos elementos?
- ¿Hay tres cards iguales en fila? Si sí, reformular.
- ¿H3 usa JetBrains Mono uppercase con tracking ancho?

Si alguna respuesta es "no", todavía no está listo.

---
name: gemini-ui-ux-review
description: Flujo hibrido para mejora de UI/UX usando Gemini como generador creativo y pi como ejecutor con restricciones. Usalo cuando el usuario pida mejorar el diseno de un componente, seccion o pagina del portafolio Vanchi.
---

# Gemini UI/UX Review Skill

Flujo colaborativo de diseno donde **Gemini propone creatividad editorial** y **pi ejecuta con restricciones precisas** (The Invisible Ledger + DaisyUI + Svelte 5).

## 1. Cuando usar este skill

- El usuario pide "mejorar el diseno de X componente/seccion"
- El diseno actual se siente generico, simetrico, o generado por LLM
- Se necesita una variacion editorial fresca que cumpla The Invisible Ledger

## 2. Flujo de trabajo (5 pasos)

### Paso 1 — Leer contexto de diseno

Antes de cualquier prompt, leer en orden:

1. `DESIGN.md` — sistema visual completo
2. `src/routes/layout.css` — utilidades Vanchi activas
3. `.agents/skills/vanchi-design-system/SKILL.md` — reglas no negociables
4. El componente/seccion que se va a mejorar

### Paso 2 — Preparar prompt para Gemini

Formato estandar del prompt:

```
Actua como disenador editorial senior. Necesito tu mejor iteracion para esta seccion
de un portafolio de inteligencia artificial.

RESTRICCIONES DE DISENO (OBLIGATORIAS)

[Extraer de DESIGN.md y vanchi-design-system SKILL.md:
- dark mode only
- Newsreader para H1/H2, JetBrains Mono para todo lo demas
- superficies SOLIDAS, sin vidrio/blur/sombras/gradientes
- border-radius max 4px
- unico accent: phosphor green como indicador 6px
- composicion ASIMETRICA, nunca 3 cards iguales en fila
- motion minimo, sin animaciones de entrada
- separacion con bordes 1px, no sombras
- tipografia lleva el peso visual, no las superficies]

CONTEXTO DE NEGOCIO

[Quien es Ivan, que es Vanchi, proposito de la pagina/seccion]

SECCION A MEJORAR

Nombre de la seccion: [nombre]
Proposito: [que debe comunicar]
Contenido actual: [datos, textos, elementos]

ESTRUCTURA ACTUAL

[Describir la estructura HTML/DaisyUI actual:
- tipo de grid
- componentes DaisyUI usados
- espaciado
- jerarquia visual]

LO QUE QUIERO DE TI

Dame UNA sola variacion de esta seccion que se sienta como un archivo editorial impreso.
Tratala como si fuera un registro de procedimiento, no una landing page.
Se especifico con la composicion (que va en cada columna/fila), no generico.
No uses glass, no uses sombras, no uses gradientes.
No uses mas de 3 elementos visuales distintos en toda la seccion.
```

### Paso 3 — Usuario pasa el prompt a Gemini

El usuario copia el prompt, lo pega en Gemini, y devuelve la respuesta a pi.

### Paso 4 — Checklist de validacion

Cuando el usuario devuelve la respuesta de Gemini, ejecutar este checklist:

```
CHECKLIST THE INVISIBLE LEDGER

[ ] Dark mode only — sin referencias a light mode
[ ] Newsreader para titulares, JetBrains Mono para cuerpo
[ ] Superficies solidas — sin vidrio, blur, transparencias
[ ] Sin sombras — separacion solo con bordes 1px
[ ] Sin gradientes en texto, fondo o bordes
[ ] Border-radius ≤ 4px
[ ] Phosphor green solo como indicador de estado (6px)
[ ] Composicion asimetrica — nunca 3 cards iguales en fila
[ ] Motion minimo — hover sutil, sin animaciones de entrada
[ ] Sin gold, yellow, purple, blue AI gradients
[ ] Baja densidad visual — tipografia lleva el peso
[ ] Se puede implementar con DaisyUI (btn, card, collapse, badge, hero)
[ ] Se puede implementar en Svelte 5 con $props() tipados
[ ] No requiere librerias externas no instaladas
[ ] Respiracion vertical ≥ 160px entre secciones
```

Marcar cada item:
- ✅ Cumple
- ❌ Viola — [explicar que y por que]
- ⚠️ Adaptable — [que ajuste se necesita]

### Paso 5 — Aplicar diseno

Solo aplicar los cambios que pasen el checklist. Si algun elemento viola las reglas:

1. **Descartar** lo que viole reglas no negociables (glass, sombras, gradientes, 3 cards iguales)
2. **Adaptar** lo que sea ajustable (cambiar un color por base-content, convertir una metrica en texto)
3. **Implementar** en Svelte 5 con DaisyUI como base semantica

Reglas de implementacion:
- Usar componentes DaisyUI (`card`, `collapse`, `hero`, `btn`) como base
- No mezclar dos componentes DaisyUI en el mismo div (ej: `card` + `collapse`)
- Svelte 5: `$props()` tipados, `{#each}` con keys, `{@render children()}`
- Sin `{@html}` — usar SVG inline si se necesitan iconos de redes
- Sin animaciones de entrada (`fly`, `fade`, `transition:in`)
- Hover maximo: `hover:-translate-y-0.5` (0.125rem)

## 3. Notas importantes

- **Gemini es creativo pero no conoce las restricciones.** El valor de este skill es el filtro.
- **No todas las ideas de Gemini se implementan.** Algunas seran descartadas por violar reglas. Eso es esperado.
- **El usuario puede iterar.** Si la respuesta de Gemini es debil, se prepara un nuevo prompt pidiendo variacion.
- **Nunca hacer commit sin permiso explicito del usuario.**

## 4. Ejemplo de uso

```
Usuario: "Mejora el diseno de Canales.svelte"

pi:
1. Lee DESIGN.md, layout.css, vanchi-design-system SKILL
2. Lee Canales.svelte actual
3. Genera prompt para Gemini con contexto completo
4. Usuario copia → pega en Gemini → devuelve respuesta
5. pi ejecuta checklist:
   - "Gemini propone cards con bg-white/10" → ❌ viola regla de vidrio
   - "Gemini propone grid 7/5 asimetrico" → ✅ cumple
6. pi implementa solo el grid 7/5, ignora el vidrio
```

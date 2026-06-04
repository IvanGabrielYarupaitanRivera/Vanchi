# 🤖 AGENT-QUICKSTART — Reglas de oro para el agente

> 5 reglas que **todo agente debe saber** antes de escribir UNA sola línea de código en Vanchi.
> Lee esto primero si no tienes tiempo para leer todo `CONTEXT.md`.

---

## 🔴 Regla 1 — Contexto obligatorio

**Antes de cualquier tarea, lee [`00-GUIDE/CONTEXT.md`](./00-GUIDE/CONTEXT.md).**
Ahí está el stack, la estructura del proyecto y la identidad visual.

---

## 🔴 Regla 2 — Código Svelte 5 con runes

✅ Usar `$props()`, `$state()`, `$derived()`, `$effect()`
✅ Eventos directos: `onclick`, `oninput`, `onsubmit`
❌ No usar `export let`, `$:`, stores, `on:click`

Ver [`00-GUIDE/STACK-PATTERNS.md`](./00-GUIDE/STACK-PATTERNS.md) para reglas completas.

---

## 🔴 Regla 3 — Solo tokens DaisyUI, sin colores raw

✅ `bg-base-100`, `text-primary`, `border-white/10`
❌ No usar `bg-black`, `text-yellow-500`, `text-gray-500`

Ver [`07-DESIGN/README.md`](./07-DESIGN/README.md) para tokens completos.

---

## 🔴 Regla 4 — Layout mobile-first, solo `lg:`

- Base = mobile. `lg:` = desktop.
- Contenido centrado: `max-w-5xl` a `max-w-6xl`
- Hero: `min-h-[100dvh]`

---

## 🔴 Regla 5 — Usa `NAVIGATION.md` como GPS

Antes de empezar, revisa [`00-GUIDE/NAVIGATION.md`](./00-GUIDE/NAVIGATION.md) para saber exactamente qué documentos leer según tu tarea.

---

## 📋 Checklist pre-código

- [ ] Leí `CONTEXT.md`?
- [ ] Revisé `NAVIGATION.md` para mi tarea?
- [ ] Cargué las skills relevantes (ver `ALIADAS.md`)?
- [ ] Seguí el ciclo `WORKFLOW.md` (Spec → Code → Verify)?
- [ ] Registré el cambio en `CHANGELOG.md`?

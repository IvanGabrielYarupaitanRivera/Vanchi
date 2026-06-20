# 🧠 Lección: `$derived` vs `$state` + `$effect` en Svelte 5

> **Fecha:** 2026-06-19
> **Fuente:** Gemini UI/UX Review + svelte-mcp (`prefer-writable-derived`)
> **Archivos involucrados:** `src/routes/(chat)/chat/+page.svelte`, `src/lib/components/chat/ChatInput.svelte`
> **Contexto:** Detección de dispositivo táctil (`isMobile`) en el chat.

---

## El problema

Quería detectar si el dispositivo es táctil para cambiar el comportamiento del Enter
(desktop: enviar mensaje, móvil: salto de línea).

**Código incorrecto (primera iteración):**

```ts
let isMobile = $state(false);

$effect(() => {
    isMobile = 'ontouchstart' in window || window.matchMedia('(pointer: coarse)').matches;
});
```

svelte-mcp lanzó: `prefer-writable-derived` — sugería usar `$derived`.

**Segunda iteración (incorrecta):**

```ts
let isMobile = $derived(
    browser && ('ontouchstart' in window || window.matchMedia('(pointer: coarse)').matches)
);
```

`$derived` solo reacciona a cambios en **runes Svelte**. `window.matchMedia` no es un rune,
así que `isMobile` se evalúa **una sola vez** y nunca se actualiza si el viewport cambia
(ej: rotar tablet, abrir devtools responsivo).

---

## La regla de oro

| Patrón | ¿Cuándo usarlo? |
|---|---|
| `$derived` | El valor se calcula a partir de **otros runes Svelte** (`$state`, `$derived`, `$props`) |
| `$state` + `$effect` + cleanup | El valor depende de una **fuente externa al grafo de Svelte** (APIs del navegador, timers, observers, Convex queries no-reactivas) |

## El patrón correcto

```ts
let isMobile = $state(false);

$effect(() => {
    if (!browser) return;  // ← seguro para SSR

    const mediaQuery = window.matchMedia('(pointer: coarse)');
    isMobile = mediaQuery.matches || 'ontouchstart' in window;

    const handleChange = (e: MediaQueryListEvent) => {
        isMobile = e.matches || 'ontouchstart' in window;
    };
    mediaQuery.addEventListener('change', handleChange);

    // ← Svelte 5 ejecuta esta función al desmontar el componente
    return () => mediaQuery.removeEventListener('change', handleChange);
});
```

**Por qué funciona:**
1. `$effect` solo corre en el cliente (después de hidratación)
2. El listener escucha cambios en tiempo real (orientación, viewport)
3. La función de cleanup evita fugas de memoria
4. `browser` guard protege contra SSR

---

## Referencias

- [`docs/00-GUIDE/LECCIONES-APRENDIDAS/README.md`](./README.md)
- [Svelte 5 docs: $effect](https://svelte.dev/docs/svelte/$effect)
- [Svelte 5 docs: $derived](https://svelte.dev/docs/svelte/$derived)
- [MDN: matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)

# ⚡ Svelte 5 + SvelteKit — Lecciones Aprendidas

> Errores cometidos durante la implementación del asistente IA y cómo evitarlos.
> Basado en errores reales de compilación y advertencias de `svelte-check`.

---

## 1. Los `{#each}` siempre necesitan key (Svelte 5)

**Error:** `require keyed {#each} block` (regla `svelte/require-each-key`)

**Contexto:** Renderizar listas de mensajes sin key.

```svelte
<!-- ❌ MAL -->
{#each messages as msg}
  <p>{msg.text}</p>
{/each}

<!-- ✅ BIEN -->
{#each messages as msg (msg.id)}
  <p>{msg.text}</p>
{/each}
```

**Regla:** Todo `{#each}` debe tener un `(key)` para que Svelte pueda trackear los elementos y no re-renderizar todo cuando cambia un solo ítem.

---

## 2. `$state()` no va en destructuring de `$props()`

**Error:** `$state(...) can only be used as a variable declaration initializer`

**Contexto:** Intenté usar `$state()` dentro de un destructuring de `$props()`.

```svelte
<script lang="ts">
  let {
    isOpen = $state(false),    // ❌ MAL
    onToggle = $state(() => {}) // ❌ MAL
  } = $props();
</script>
```

**Solución:** Los defaults de `$props()` son valores planos, no reactivos con `$state()`:

```svelte
<script lang="ts">
  let {
    isOpen = false,       // ✅ BIEN — valor plano
    onToggle = () => {}    // ✅ BIEN — función plana
  } = $props();
</script>
```

---

## 3. Import de `@lucide/svelte`, no `lucide-svelte`

**Error:** `Cannot find module 'lucide-svelte'`

**Contexto:** En Vanchi, los íconos Lucide se importan de `@lucide/svelte`, no de `lucide-svelte`.

```ts
import { X } from 'lucide-svelte';     // ❌ MAL
import { X } from '@lucide/svelte';    // ✅ BIEN
```

---

## 4. Path alias `$convex` para imports de Convex

**Error:** `Cannot find module '../../../../convex/_generated/api'`

**Contexto:** Desde componentes anidados, la ruta relativa se vuelve ilegible y frágil.

```ts
import { api } from '../../../../convex/_generated/api';  // ❌ MAL — frágil y feo
import { api } from '$convex/_generated/api';              // ✅ BIEN — usa alias
```

El alias `$convex` ya está configurado en `svelte.config.js`:

```ts
kit: {
  alias: {
    $convex: './src/convex'
  }
}
```

---

## 5. Event handlers deben ser funciones, no propiedades de objeto

**Error:** `Type 'Function' is not assignable to type 'MouseEventHandler'`

**Contexto:** Pasar `onToggle` directamente (que es una función desde `$props()`) a `onclick` sin envolverla.

```svelte
<!-- ❌ MAL — Svelte 5 se queja del tipo -->
<button onclick={onToggle}>

<!-- ✅ BIEN — envolver en arrow function -->
<button onclick={() => onToggle()}>
```

---

## 6. Dialog `role="dialog"` necesita `tabindex` o supresión de advertencia

**Advertencia:** `Elements with the 'dialog' interactive role must have a tabindex value`

**Contexto:** El overlay del CommandBar tiene `role="dialog"` pero no `tabindex`.

**Solución:** Agregar `tabindex="-1"` al div con role="dialog", o usar el comentario `<!-- svelte-ignore a11y_interactive_supports_focus -->` si no es necesario.

```svelte
<!-- svelte-ignore a11y_interactive_supports_focus -->
<div role="dialog" aria-modal="true" ...>
```

---

## 7. `useQuery` de `convex-svelte` retorna `.data`, no `.value`

**Error:** `Property 'value' does not exist on type 'UseQueryReturn'`

**Contexto:** Confundí la API de `convex-svelte` con otros hooks.

```ts
if (threadMessagesQuery?.value?.page)   // ❌ MAL — .value no existe
if (threadMessagesQuery?.data?.page)    // ✅ BIEN — usar .data
```

`useQuery()` retorna `{ data, error, isLoading, isStale }`, no `{ value }`.

---

## 8. Funciones de Convex expuestas al frontend deben ser `query`, no `internalQuery`

**Error:** `Property 'messages' does not exist on type`

**Contexto:** Definí `listThreadMessages` como `internalQuery`, que solo es accesible desde `internal`, no desde `api`. El frontend usa `api.messages.read.listThreadMessages`, que requiere que la función sea pública (`query`).

```ts
export const listThreadMessages = internalQuery({ ... });  // ❌ MAL — no aparece en api
export const listThreadMessages = query({ ... });           // ✅ BIEN — aparece en api
```

---

## 9. `convex-svelte` no exporta `useMutation` — usar `useConvexClient()`

**Error:** No existe `useMutation` en `convex-svelte`.

**Solución:** Usar el cliente Convex directamente:

```ts
import { useConvexClient } from 'convex-svelte';

const convex = useConvexClient();

// Para llamar actions:
const result = await convex.action(api.agent.conversations.createThread, { prompt: msg });

// Para llamar mutations:
await convex.mutation(api.module.myMutation, { arg: value });
```

---

## 11. `no-explicit-any` — prohibido rotundamente

**Error:** `Unexpected any. Specify a different type.` (regla `@typescript-eslint/no-explicit-any`)

**Contexto:** Usar `any` en mapeos de datos porque "no sabía el tipo exacto".

```ts
// ❌ MAL — cualquier cosa menos any
messages = data.page.map((m: any) => ({

// ✅ BIEN — importar el tipo correcto
import type { UIMessage } from '@convex-dev/agent';

messages = data.page.map((m: UIMessage) => ({
```

**Regla:** `any` desactiva todo el sistema de tipos de TypeScript. Si no sabes el tipo:
1. Detente y busca el tipo correcto en las definiciones de la librería
2. Si es muy complejo, usa `unknown` + cast explícito
3. Si literalmente no existe, pregúntale a las aliadas

**Cast como alternativa válida (pero no `any`):**

```ts
// ⚠️ Aceptable solo como último recurso
const data = something as SomeType;

// ❌ Pero esto NUNCA:
const data = something as any;
```

**Contexto:** Cuando un archivo está en `convex/messages/read.ts`, el path de API es `api.messages.read.listThreadMessages`. El `/` se convierte en `.` en el objeto `api` de TypeScript.

```ts
// Archivo: src/convex/messages/read.ts
export const listThreadMessages = query({ ... });

// Acceso: api.messages.read.listThreadMessages  ✅
// No:      api.messages.listThreadMessages       ❌
```

---

**Archivos relacionados:**
- `src/lib/components/home/CommandBar.svelte` — Donde se cometieron la mayoría de estos errores
- `src/convex/messages/read.ts` — Query pública para listar mensajes
- `svelte.config.js` — Alias `$convex`
- `package.json` — Dependencia `@lucide/svelte`

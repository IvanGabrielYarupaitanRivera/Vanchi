---
name: sveltekit-convex-integration
description: "Patrones avanzados de integración entre SvelteKit 5 y Convex. Use when working with: (1) Queries reactivas con useQuery y WebSockets, (2) SSR con +page.server.ts para carga inicial, (3) Mutaciones desde el cliente, (4) Tipado estricto de extremo a extremo (Doc, Id, PageProps, PageServerLoad), (5) Eliminación de $effect + .then() como anti-patrón, (6) Manejo de estados isLoading/error/data en tiempo real, (7) Formularios de edición con IIFE para evitar state_referenced_locally."
license: MIT
---

# SvelteKit 5 + Convex — Integración Avanzada

## Arquitectura Ideal

```
1. SvelteKit (SSR) → +page.server.ts
   ├── Valida cookies/sesión
   └── Precarga datos iniciales (opcional)

2. Convex (WebSocket) → useQuery en el cliente
   ├── Suscripción reactiva en tiempo real
   └── Datos se actualizan sin recargar

3. Mutaciones → convex.mutation()
   └── Se disparan directamente desde el cliente
```

## Regla de Oro

| Escenario | Patrón |
|---|---|
| Datos que cambian frecuentemente (chat, notificaciones, dashboards) | `useQuery` reactivo |
| Datos estáticos o carga inicial SEO | SSR con `+page.server.ts` |
| Formularios (crear/editar) | Mutation directa desde el cliente |
| Validación crítica en servidor | Action de SvelteKit + `convexLoad` |

## ❌ Prohibido

- `useConvexClient()` para queries de solo lectura
- `$effect` + `.then()` para cargar datos de Convex
- Promesas manuales que compiten con el ciclo de vida del componente

## ✅ Patrón Correcto para Listados en Tiempo Real

```svelte
<script lang="ts">
  import { useQuery } from 'convex-svelte';  // ← importación directa
  import { api } from '$convex/_generated/api';

  const query = useQuery(api.modulo.ruta.query, {});
</script>

{#if query.isLoading}
  <p>Cargando...</p>
{:else if query.error}
  <p>Error: {query.error.toString()}</p>
{:else}
  {#each query.data as item (item._id)}
    ...
  {:else}
    <p>No hay datos.</p>
  {/each}
{/if}
```

## ✅ Patrón Correcto para SSR + Tiempo Real (Sin Flash de Carga)

```ts
// +page.server.ts
import { createConvexHttpClient } from "@mmailaender/convex-better-auth-svelte/sveltekit";
import { api } from "$convex/_generated/api";
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const client = createConvexHttpClient();
  const docs = await client.query(api.modulo.ruta.query, {});
  return { docs };
};
```

O usando `convexLoad` en `+page.ts` (no `.server.ts`):

```ts
// +page.ts
import { convexLoad } from "@mmailaender/convex-svelte/sveltekit";
import { api } from "$convex/_generated/api";

export const load = async () => ({
  docs: await convexLoad(api.modulo.ruta.query, {})
});
```

```svelte
<!-- +page.svelte -->
<script lang="ts">
  import { useQuery } from 'convex-svelte';
  let { data }: PageProps = $props();

  const query = useQuery(api.modulo.ruta.query, {},
    () => ({ initialData: data.docs ?? null, keepPreviousData: true })
  );
</script>
```

## ✅ Patrón Correcto para Formularios de Edición

```svelte
<script lang="ts">
  let { data }: PageProps = $props();

  // Capturar valor inicial SIN warning state_referenced_locally
  let titulo = $state((() => data.documento?.titulo ?? '')());
  guardar();
</script>
```

## API de `useQuery`

`useQuery(query, args, options?)` retorna un objeto con:

| Propiedad | Tipo | Descripción |
|---|---|---|
| `.isLoading` | `boolean` | `true` mientras carga |
| `.error` | `Error \| undefined` | Error si la query falla |
| `.data` | `T \| undefined` | Datos tipados de la query |

> `.isStale` no está verificado en los docs oficiales de Convex. Verificar antes de usar.

## Recursos

- [`docs/00-GUIDE/LECCIONES-APRENDIDAS/2026-06-08-SVELTEKIT-CONVEX-PATRONES.md`](../../docs/00-GUIDE/LECCIONES-APRENDIDAS/2026-06-08-SVELTEKIT-CONVEX-PATRONES.md)
- [`docs/00-GUIDE/LECCIONES-APRENDIDAS/2026-06-08-PI-CONVEX-INTERACCION.md`](../../docs/00-GUIDE/LECCIONES-APRENDIDAS/2026-06-08-PI-CONVEX-INTERACCION.md)
- [Convex Svelte Quickstart](https://docs.convex.dev/quickstart/svelte)
- [Convex Svelte Client](https://docs.convex.dev/client/svelte)
- [SSR SvelteKit + Convex](https://labs.convex.dev/better-auth/framework-guides/sveltekit#ssr-optional)

# 🔌 SvelteKit 5 + Convex — Patrones correctos de integración

> **Fecha:** 2026-06-08
> **Fuente:** Gemini + Convex AI (revisión de código del admin CRUD)
> **Versión:** 2 — Correcciones post-revisión

---

## El problema original

```svelte
<!-- ❌ MAL: pérdida de reactividad, race conditions, parpadeo -->
<script lang="ts">
	let documentos = $state<Doc<'documentosV2'>[]>([]);
	let loading = $state(true);

	$effect(() => {
		convex.query(api.entidades.documentosV2.queries.listar, {}).then((docs) => {
			documentos = docs;
			loading = false;
		});
	});
</script>
```

**Problemas:**
1. **Pérdida de reactividad WebSocket:** `convex.query()` es una petición HTTP única.
2. **`$effect` incorrecto:** Los `$effect` son para sincronizar con DOM, no para fetching.
3. **Race conditions:** Si el componente se desmonta, actualiza estado en un componente muerto.

---

## La solución correcta

### `useQuery` — importación directa, no método del cliente

❌ `convex.useQuery(...)`  
✅ `useQuery(...)` importado directamente de `convex-svelte`

```svelte
<script lang="ts">
	import { useQuery } from 'convex-svelte';
	import { api } from '$convex/_generated/api';

	const query = useQuery(api.entidades.documentosV2.queries.listar, {});
</script>

{#if query.isLoading}
	<p>Cargando...</p>
{:else if query.error}
	<p>Error: {query.error.toString()}</p>
{:else}
	{#each query.data as doc (doc._id)}
		<p>{doc.titulo}</p>
	{/each}
{/if}
```

### Propiedades de `useQuery`

| Propiedad | Tipo | Descripción |
|---|---|---|
| `.isLoading` | `boolean` | `true` mientras carga |
| `.error` | `Error \| undefined` | Error si la query falla |
| `.data` | `T \| undefined` | Datos tipados |

> `.isStale` no está verificado en los docs oficiales de Convex. No usarlo.

### SSR + Tiempo Real (sin flash de carga)

**Opción A — `createConvexHttpClient`:**
```ts
// +page.server.ts
import { createConvexHttpClient } from "@mmailaender/convex-better-auth-svelte/sveltekit";
import { api } from "$convex/_generated/api";

export const load: PageServerLoad = async () => {
  const client = createConvexHttpClient();
  const docs = await client.query(api.modulo.ruta.query, {});
  return { docs };
};
```

**Opción B — `convexLoad` (en `+page.ts`, no `.server.ts`):**
```ts
// +page.ts
import { convexLoad } from "@mmailaender/convex-svelte/sveltekit";

export const load = async () => ({
  docs: await convexLoad(api.modulo.ruta.query, {})
});
```

**En el cliente con `initialData`:**
```svelte
<script lang="ts">
	import { useQuery } from 'convex-svelte';
	let { data }: PageProps = $props();

	const query = useQuery(api.modulo.ruta.query, {},
		() => ({ initialData: data.docs ?? null, keepPreviousData: true })
	);
</script>
```

---

## Regla de oro

| Escenario | Patrón |
|---|---|
| Datos que cambian frecuentemente (chat, notificaciones) | `useQuery` reactivo |
| Datos estáticos o carga inicial SEO | SSR con `+page.server.ts` |
| Formularios (crear/editar) | Mutation directa desde el cliente |

## Prohibido

- `useConvexClient()` para queries de solo lectura
- `$effect` + `.then()` para cargar datos de Convex
- `convexServer.query` sin el import correcto (`createConvexHttpClient` o `convexLoad`)

---

## Skill asociada

Se creó la skill `sveltekit-convex-integration` en `.agents/skills/` con todos estos patrones documentados formalmente.

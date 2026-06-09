# 🔌 SvelteKit 5 + Convex — Patrones correctos de integración

> **Fecha:** 2026-06-08
> **Fuente:** Gemini (revisión de código del admin CRUD)
> **Contexto:** Estaba usando `$effect` + `.then()` para cargar datos de Convex, lo cual rompe la reactividad en tiempo real y es anti-patrón en Svelte 5.

---

## El problema

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
1. **Pérdida de reactividad WebSocket:** `convex.query()` es una petición HTTP única. Si otro usuario crea/edita/elimina un documento, la pantalla **no se actualiza**.
2. **`$effect` incorrecto:** Los `$effect` son para sincronizar con sistemas externos (DOM, librerías no-Svelte), no para fetching.
3. **Race conditions:** Si el componente se desmonta antes de que la promesa termine, Svelte actualiza estado en un componente muerto.

---

## La solución correcta

### Opción A: Queries reactivas con `useQuery` (recomendada para SPAs / dashboards)

```svelte
<!-- ✅ BIEN: suscripción reactiva por WebSocket -->
<script lang="ts">
	import { useQuery } from 'convex-svelte';
	import { api } from '$convex/_generated/api';

	const documentos = useQuery(api.entidades.documentosV2.queries.listar, {});
</script>

{#if documentos === undefined}
	<p>Cargando...</p>
{:else if documentos.length === 0}
	<p>No hay documentos.</p>
{:else}
	{#each documentos as doc (doc._id)}
		<p>{doc.titulo}</p>
	{/each}
{/if}
```

**Ventajas:**
- `documentos` es `undefined` mientras carga (sin estado `loading` manual)
- Se actualiza en tiempo real vía WebSocket
- Sin race conditions (la suscripción se limpia automáticamente al desmontar)

### Opción B: SSR con `+page.server.ts` (recomendada para SvelteKit)

Cuando la reactividad en tiempo real no es crítica:

```ts
// +page.server.ts
export const load: PageServerLoad = async () => {
	const docs = await convexServer.query(api.entidades.documentosV2.queries.listar, {});
	return { docs };
};
```

```svelte
<!-- +page.svelte -->
<script lang="ts">
	let { data }: PageProps = $props();
</script>

{#each data.docs as doc}
	<p>{doc.titulo}</p>
{/each}
```

**Ventajas:**
- Carga inicial instantánea (SSR, HTML ya renderizado)
- Sin parpadeo ni estado `loading`
- Código más limpio

---

## Regla de oro

| Escenario | Patrón |
|---|---|
| Datos que cambian frecuentemente (chat, notificaciones) | Opción A: `useQuery` reactivo |
| Datos estáticos o que solo lee el admin | Opción B: SSR con `+page.server.ts` |
| Formularios (crear/editar) | Sin query, solo mutations |

**NUNCA** uses `$effect` + `.then()` para cargar datos de Convex.

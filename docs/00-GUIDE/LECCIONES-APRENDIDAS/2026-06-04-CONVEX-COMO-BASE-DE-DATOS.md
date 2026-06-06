# 🗄️ Convex como Base de Datos — Lecciones Aprendidas

> Basado en skills: `convex`, `convex-quickstart`, `convex-migration-helper`, `convex-performance-audit`, `convex-create-component`

---

## 1. Ruta de los archivos Convex

Con SvelteKit, las funciones de Convex deben vivir dentro de `src/` porque SvelteKit no permite imports fuera de esa carpeta. Se configura en `convex.json`:

```json
{ "functions": "src/convex/" }
```

Sin esto, los imports desde `$lib/` o cualquier carpeta de SvelteKit no funcionarán.

## 2. Schema escalable: separar texto de vectores

**Decisión:** Usar tres tablas en vez de una sola para la knowledge base.

| Tabla | Propósito | Índices |
|-------|-----------|---------|
| `documentos` | Metadatos del documento fuente (title, slug, category) | `bySlug` |
| `chunks` | Fragmentos de texto para búsqueda semántica | `byDocumentId`, `byEmbeddingId` |
| `embeddings` | Vectores numéricos (separados para no ralentizar lecturas) | `byChunkId`, `byEmbedding` (vector) |

**Por qué:** Los embeddings son arrays grandes (~1536 floats). Si crecen a cientos de documentos, cargar vectores en lecturas normales es desperdicio. Separarlos permite devolver solo texto sin tocar vectores, y re-embeder sin tocar el texto original.

**Referencia:** [Vector search – advanced patterns](https://docs.convex.dev/search/vector-search#advanced-patterns)

## 3. Vector search solo en actions

`ctx.vectorSearch` solo está disponible dentro de **actions**, no en queries ni mutations. Esto es una limitación de Convex.

**Implicancia:** La tool `searchKnowledgeBase` del Agent debe llamar una action (no una query), porque necesita hacer `ctx.vectorSearch`.

## 4. Sin chunking para documentos pequeños, pero preparados para escalar

Para el portafolio actual (~15 documentos atómicos), un chunk por documento es suficiente. Pero el schema ya soporta chunking con `RecursiveCharacterTextSplitter` para cuando los documentos crezcan.

**Parámetros recomendados:** `chunkSize: 2000`, `chunkOverlap: 100` (del ejemplo oficial de AI Chat de Convex).

## 5. Seed de embeddings dentro de una action

El patrón oficial es generar embeddings en una `internalAction` de Convex que:
1. Inserta documentos y chunks
2. Llama al modelo de embeddings (text-embedding-3-small vía Vercel AI Gateway)
3. Guarda los vectores en la tabla `embeddings`
4. Actualiza cada chunk con su `embeddingId`

**Ventaja:** El proceso puede re-ejecutarse sin re-embeder chunks que ya tienen embedding.

## 6. Migraciones: widen-migrate-narrow

Si en el futuro hay que cambiar el schema, el patrón es:
1. **Widen:** Agregar campos opcionales
2. **Migrate:** Backfillear datos con `@convex-dev/migrations`
3. **Narrow:** Endurecer el schema quitando lo opcional

No se puede desplegar un schema que no coincida con los datos existentes.

## 7. Componentes: el Agent es un componente

El `@convex-dev/agent` se registra como componente en `convex.config.ts`:

```ts
app.use(agent);  // from "@convex-dev/agent/convex.config"
```

Esto le da sus propias tablas internas (threads, messages) aisladas de las tablas de la app. No hay conflicto de nombres.

## 8. Performance: medir antes de optimizar

Convex recomienda no optimizar prematuramente. Usar `npx convex insights --details` antes de hacer cambios estructurales. Una tabla pequeña escaneada directamente puede ser perfectamente aceptable.

## 9. `internalMutation` devuelve `Id<T>` automáticamente

Cuando una `internalMutation` (o `mutation`) hace `return await ctx.db.insert("tabla", ...)`, Convex infiere automáticamente que el tipo de retorno es `Id<"tabla">`. Al llamarla desde una action con `ctx.runMutation(internal.db.insertChunk, ...)`, el tipo se preserva. **Esto evita tener que castear manualmente.**

```ts
// ✅ Así se tipa bien el seed:
const chunkId: Id<"chunks"> = await ctx.runMutation(internal.db.insertChunk, {
  documentId: docId,
  text,
  embeddingId: null,
});
```

## 10. `internalAction` no tiene `ctx.db`

En actions (`action` e `internalAction`), no existe `ctx.db`. Solo se puede escribir en DB mediante `ctx.runMutation(...)` y leer mediante `ctx.runQuery(...)`. [[Action context](https://docs.convex.dev/functions/actions#action-context)]

Esto es intencional: las actions están hechas para operaciones que pueden tomar tiempo (llamadas externas como embeddings, APIs) y necesitan escribir en DB de forma transaccional a través de mutations.

## 11. Usar `internal` en vez de `api` desde `internalAction`

Desde una `internalAction`, las funciones internas (como las mutations de `db.ts`) se llaman usando `internal.db.insertChunk` (el generador `internal`), no `api.db.insertChunk`. El `internal` preserva el tipado de los IDs. `api` es para funciones públicas que los clientes pueden llamar.

---

**Archivos relacionados:**
- `src/convex/schema.ts` — Schema de tres tablas
- `src/convex/convex.config.ts` — Registro de componentes
- `src/convex/seed.ts` — Seed de knowledge base
- `src/convex/agent.ts` — Tool de búsqueda

# 📝 LECCIONES APRENDIDAS

> **Índice de lecciones aprendidas.**
> Cada archivo aquí documenta una decisión clave, un error evitado o un aprendizaje importante.
> La estructura permite ir directo a la lección específica sin leer un documento gigante.

## ¿Por qué existe esta carpeta?

Para no repetir errores del pasado. Cada vez que se toma una decisión significativa o se aprende algo que vale la pena recordar, se crea un archivo aquí con fecha y contexto.

## Formato de los archivos

Cada lección sigue esta estructura:

```
YYYY-MM-DD-TITULO-BREVE.md
```

### Contenido de cada lección

- **Fecha** — Cuándo ocurrió
- **Contexto** — Qué estábamos haciendo
- **Problema / Decisión** — Qué pasó o qué decidimos
- **Solución / Resolución** — Cómo lo resolvimos
- **Lección** — Qué aprendimos para no repetirlo
- **Archivos afectados** — Rutas del proyecto relacionadas

## Lecciones registradas

### 2026-06-04

- [`2026-06-04-CONVEX-COMO-BASE-DE-DATOS.md`](./2026-06-04-CONVEX-COMO-BASE-DE-DATOS.md) — Schema escalable (documentos, chunks, embeddings), vector search solo en actions, seed de embeddings, migraciones widen-migrate-narrow.
- [`2026-06-04-CONVEX-COMO-AGENTE.md`](./2026-06-04-CONVEX-COMO-AGENTE.md) — Component Agent, tools con createTool + zod, listUIMessages, Vercel AI Gateway con openai.chat(), env vars correctas, rate limiting, seguridad.

### 2026-06-06

- [`2026-06-06-CONVEX-DEPLOY-PRODUCCION.md`](./2026-06-06-CONVEX-DEPLOY-PRODUCCION.md) — Deploy a producción con Vercel: `PUBLIC_CONVEX_URL` la inyecta `convex deploy`, `CONVEX_DEPLOY_KEY` en Vercel, `AI_GATEWAY_API_KEY` en Convex Dashboard (producción).

### 2026-06-08

- [`2026-06-08-PI-CONVEX-INTERACCION.md`](./2026-06-08-PI-CONVEX-INTERACCION.md) — Pi puede ejecutar `npx convex run` desde bash sin MCP, sintaxis correcta, alternativas para volumen.

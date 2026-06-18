# 🔄 Convex — Sincronizar datos de dev a prod (export/import canónico)

> **Fecha:** 2026-06-17
> **Contexto:** Necesitábamos sincronizar 36 documentos de `documentosV2` del deployment de desarrollo (`combative-jay-244`) al de producción (`effervescent-bird-69`) después de agregar el literal `"gaas"` al schema.

---

## El flujo canónico

```bash
# 1. Deploy del código a prod (schema + functions)
npx convex deploy --yes

# 2. Exportar datos de dev como JSONL
npx convex data documentosV2 --format jsonLines > docs_dev.jsonl

# 3. Importar a prod reemplazando atómicamente
npx convex import --table documentosV2 --prod --replace --yes docs_dev.jsonl
```

---

## ❌ Lo que NO hacer

### No usar `npx convex export` para una sola tabla

```bash
# ❌ Exporta TODO el deployment como ZIP. No soporta --table.
# Hay que extraer manualmente, buscar el .jsonl correcto, etc.
npx convex export --path ./export_dev/
```

`npx convex export` exporta el snapshot completo (todas las tablas, componentes, schemas). Para una sola tabla es overkill.

### No usar `--append` si hay IDs duplicados

```bash
# ❌ Falla si dev y prod comparten _id (documentos creados con las mismas mutations)
npx convex import --table documentosV2 --prod --append docs.jsonl
```

Error: `Cannot create document with _id X that already exists`.

---

## ✅ El camino correcto

### `npx convex data` para exportar

```bash
npx convex data <tabla> --format jsonLines > archivo.jsonl
```

- Exporta **solo una tabla**, en **formato JSONL** directamente.
- No requiere extraer ZIPs ni buscar directorios.
- Los documentos conservan `_id` y `_creationTime` (se pueden limpiar manualmente si es necesario).

### `npx convex import --replace --yes` para importar

```bash
npx convex import --table <tabla> --prod --replace --yes archivo.jsonl
```

- `--replace`: Borra todos los registros existentes y los reemplaza con los del archivo.
- `--yes`: Omite la confirmación interactiva (necesario en CI/scripts).
- **Atómico**: Las queries/mutations no ven estados intermedios. Si falla a mitad, la tabla no queda corrupta.

### Si necesitás append sin conflicto de IDs

Limpiar `_id` y `_creationTime` del JSONL para que prod genere nuevos IDs:

```bash
python -c "
import json, sys
for line in sys.stdin:
    doc = json.loads(line)
    doc.pop('_id', None)
    doc.pop('_creationTime', None)
    print(json.dumps(doc, ensure_ascii=False))
" < docs_dev.jsonl > docs_clean.jsonl
```

---

## Orden obligatorio

1. **Primero** `convex deploy` a prod (si el schema cambió)
2. **Después** `convex import` a prod

Si el schema de prod no tiene los nuevos valores (ej. `v.literal("gaas")`), el import falla con:

```
Value does not match validator.
Path: .etiquetas[0]
Value: "gaas"
```

---

## Comandos relacionados

| Comando | Para qué |
|---|---|
| `npx convex data <tabla> --format jsonLines` | Exportar una tabla como JSONL |
| `npx convex export --path ./dir/` | Exportar snapshot completo como ZIP |
| `npx convex import --table <t> --prod --replace --yes` | Importar reemplazando tabla en prod |
| `npx convex import --table <t> --prod --append --yes` | Importar agregando sin borrar (requiere IDs únicos) |
| `npx convex deploy --yes` | Deploy de código (schema + functions) a prod |

---

## Lección

> `npx convex data` es la herramienta correcta para exportar una tabla individual. No usar `npx convex export` cuando solo necesitás una tabla. Y siempre deployar el schema a prod antes de importar datos que dependan de nuevos validadores.

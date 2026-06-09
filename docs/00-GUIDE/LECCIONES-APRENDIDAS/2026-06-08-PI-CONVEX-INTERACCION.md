# 🤖 Pi + Convex — Cómo interactuar con la base de datos desde el agente

> **Fecha:** 2026-06-08
> **Contexto:** Necesitaba insertar registros en `documentosV2` desde el agente pi sin tener un MCP instalado.

---

## 1. Pi puede ejecutar `npx convex run` directamente

No necesito MCP de Convex para operaciones básicas. Desde bash puedo ejecutar:

```bash
npx convex run entidades/documentosV2/mutations:crear '{"password":"12345","titulo":"...","categoria":"...","contenido":"...","etiquetas":["..."]}'
```

Esto funciona porque:
- El proyecto ya tiene `npx convex dev` ejecutado (credenciales cacheadas en `.env.local`)
- Las credenciales persisten entre sesiones de terminal
- No requiere login interactivo

## 2. Sintaxis correcta

```bash
npx convex run <path/modulo>:<funcion> '<json_args>'
```

- El path usa `/` como separador de carpetas
- El separador entre módulo y función es `:`
- Los argumentos van como un **único string JSON** (con comillas simples envolviendo el JSON)
- Las `"` dentro del JSON se escapan con `\"` o se usa `'` para el wrapper y `"` para el JSON
- Ejemplo real:
  ```bash
  npx convex run entidades/documentosV2/mutations:crear '{"password":"12345","titulo":"Mi título","categoria":"sobre-mi","contenido":"Texto con\nsaltos de línea","etiquetas":["experiencia"]}'
  ```

## 3. Limitaciones

- Para strings con caracteres especiales (comillas dentro del contenido), hay que escaparlas manualmente
- Los saltos de línea en el contenido van como `\n` dentro del JSON
- `npx convex run` corre contra el **dev deployment** por defecto

## 4. Alternativa para volumen: `npx convex import`

Si hubiera que insertar 20+ documentos de golpe, usar:

```bash
npx convex import --table documentosV2 archivo.jsonl
```

Donde `archivo.jsonl` tiene un objeto JSON por línea (sin password, porque es import directo a tabla).

## 6. Cómo clonar datos de dev a producción

Para llevar los registros del deployment de desarrollo al de producción:

```bash
# Paso 1: Exportar datos de dev a directorio
npx convex export --path ./export_dev/

# Paso 2: Importar solo documentosV2 a producción (append = agrega sin borrar)
npx convex import --table documentosV2 --prod --append ./export_dev/documentosV2/documents.jsonl
```

**Detalles importantes:**
- `npx convex export` no soporta `--table` ni `--format`. Exporta siempre a ZIP o directorio completo.
- Los `_id` y `_creationTime` se preservan al importar desde un archivo exportado.
- `--append` agrega datos sin borrar los existentes. Usar `--replace` para reemplazar.
- En máquina local con sesión activa, basta añadir `--prod` al comando.
- En CI/entorno sin login, usar `CONVEX_DEPLOY_KEY` como variable de entorno.

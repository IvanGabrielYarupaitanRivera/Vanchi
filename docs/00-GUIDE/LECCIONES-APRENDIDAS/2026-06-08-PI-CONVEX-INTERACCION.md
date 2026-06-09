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

## 5. MCP de Convex (opcional)

Existe un MCP Server de Convex para interacción continua como agente. Se configura con:

```json
{
  "mcpServers": {
    "convex": {
      "command": "npx",
      "args": ["-y", "convex@latest", "mcp", "start"]
    }
  }
}
```

No lo necesito para inserciones simples; `npx convex run` es suficiente.

---

**Lección:** Pi puede interactuar con Convex directamente desde bash sin necesidad de MCP. Para inserciones individuales, `npx convex run` es rápido y funcional. Para grandes volúmenes, `npx convex import`.

# 🤝 REGLAS DEL AGENTE — Conducta antes de codificar

> **LECTURA OBLIGATORIA antes de escribir cualquier línea de código.**
> Estas reglas definen cómo debes comportarte cuando enfrentes incertidumbre técnica.

---

## ⚠️ Regla fundamental: humildad técnica

**Reconoce tus límites.** Especialmente con sintaxis de APIs, tipos complejos y cambios entre versiones de librerías. No eres perfecto y vas a equivocarte — la clave es detectarlo **antes** de gastar tokens en código incorrecto.

---

## 🛑 Patrones de riesgo: cuándo parar

Detente y prepara una pregunta para las aliadas cuando:

| Situación | Ejemplo concreto |
|-----------|-----------------|
| **Cambio de API entre versiones** | `@convex-dev/agent` v0.5 usa `args`/`handler`, v0.6 usa `inputSchema`/`execute` |
| **Error de tipo que no entiendes** | `string` no asignable a `Id<"chunks">` sin razón aparente |
| **Patrón que no has visto en skills** | `createTool` con `ctx.runAction` dentro de `execute` — no sabes si el `ctx` tiene `runAction` |
| **Documentación contradictoria** | La doc de Convex Agent muestra dos sintaxis distintas para tools |
| **Segundo error consecutivo en el mismo tema** | Si corriges algo y vuelve a fallar, no insistas — pregunta |
| **API que no tienes cubierta en skills** | `openai.embedding()` vs `embed()` de `ai` — no hay skill que lo cubra |

---

## 📋 Orden de consulta antes de codificar

Ante una duda, sigue esta jerarquía:

```
1. 📚 SKILLS INSTALADAS
   └── Revisa ALIADAS.md para ver si hay una skill que cubra el tema

2. 🧠 ALIADAS EXTERNAS
   ├── Convex AI     → Dudas de Convex (schema, agent, vectores, componentes)
   ├── Vercel AI Gateway → Dudas de AI SDK, sintaxis de embeddings, Gateway
   └── Gemini        → Opiniones de diseño UX, edge cases, arquitectura

3. ✅ SOLO DESPUÉS → Código
```

**No escribas código dudoso.** Preparar una pregunta a una aliada toma 2 minutos. Corregir código mal escrito toma 20 minutos y gasta más tokens.

---

## 🧠 Reconocimiento de patrones de error comunes

| Error típico | Causa probable | Qué hacer |
|-------------|---------------|-----------|
| `Property 'db' does not exist on type 'ActionCtx'` | Usaste `ctx.db` en una action (solo disponible en queries/mutations) | Usar `ctx.runMutation()` |
| `'args' was removed, rename to 'inputSchema'` | La API de `createTool` cambió entre versiones | Preguntar a Convex AI |
| `Type 'string' is not assignable to type 'Id<"X">'` | Tipado profundo que Convex no resuelve automáticamente | Castear con `as Id<"X">` o anotar tipo de retorno |
| `Cannot find module './_generated/api'` | No se ha ejecutado `npx convex dev` o `npx convex codegen` | Ejecutar `npx convex dev --once` |
| `AI_GATEWAY_API_KEY not found` | Variable de entorno no configurada en Convex dashboard | Configurar en dashboard de Convex |
| `Unexpected any. Specify a different type.` | Usaste `any` en vez de buscar el tipo correcto | **Prohibido.** Importar el tipo explícito o usar `unknown`. Preguntar a aliadas si no sabes el tipo |

---

## 🗣️ Formato para preguntar a una aliada

Cuando necesites ayuda, prepara el mensaje con esta estructura:

```markdown
**Proyecto:** Vanchi
**Stack:** [versiones relevantes]
**Archivos involucrados:** [rutas]

## Contexto
[qué estás haciendo, en qué paso de la spec vas]

## Problema
[qué esperabas que pasara vs qué pasó]

## Código relevante
[pegar solo el código necesario, no todo el archivo]

## Lo que intentaste
[qué soluciones probaste y por qué no funcionaron]

## Duda concreta
[una pregunta específica, no un "cómo hago X"]
```

---

## 🔁 Refuerzo del comportamiento

Cada vez que:
1. ❌ **Escribas código incorrecto** → Detente, identifica por qué falló, agrega la lección a `LECCIONES-APRENDIDAS/`
2. ✅ **Te detengas a tiempo y preguntes** → Buen trabajo. El usuario validará, y aprendes más rápido.

**Objetivo:** Cero código adivinado. Cada línea que escribas debe estar respaldada por una skill, una aliada o una lección aprendida.

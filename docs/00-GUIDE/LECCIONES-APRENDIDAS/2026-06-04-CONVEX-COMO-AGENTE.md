# 🤖 Convex como Agente IA — Lecciones Aprendidas

> Basado en skills: `convex`, `convex-create-component`, documentación de `@convex-dev/agent`

---

## 1. El componente Agent es un componente de Convex

`@convex-dev/agent` se registra como componente en `convex.config.ts`:

```ts
import agent from "@convex-dev/agent/convex.config";
const app = defineApp();
app.use(agent);
```

Al ejecutar `npx convex dev`, se genera `components.agent` en `_generated/api`. Sin este paso, no se puede usar el Agent.

## 2. Threads y mensajes: gestionados por el Agent

El componente Agent maneja automáticamente:
- Creación de threads (`createThread`)
- Continuación de threads (`continueThread`)
- Almacenamiento de mensajes
- Contexto de conversación

No necesitas definir tablas para threads ni mensajes en tu schema — el Agent lo hace internamente.

## 3. Acceder al historial con `listUIMessages`

Para mostrar el historial de una conversación en la UI, NO necesitas cachear mensajes en localStorage. El Agent expone:

```ts
import { listUIMessages } from "@convex-dev/agent";

const paginated = await listUIMessages(ctx, components.agent, {
  threadId,
  paginationOpts: { cursor: null, numItems: 50 },
});
```

`listUIMessages` retorna `UIMessage[]`, un formato listo para renderizar (agrupa tool calls + respuestas). Se puede exponer como una **query** de Convex y suscribirse desde el frontend con `useQuery`.

## 4. Tools con `createTool` y zod

Las tools se definen con `createTool` y `zod` para los argumentos:

```ts
const searchKnowledgeBase = createTool({
  description: "Busca en la base de conocimiento",
  args: z.object({
    query: z.string().describe("Texto a buscar"),
  }),
  handler: async (ctx, { query }) => {
    return await ctx.runQuery(api.chunks.searchChunks, { query });
  },
});
```

**Puntos clave:**
- El `ctx` dentro del handler tiene acceso completo a `runQuery`, `runMutation`, `runAction` de la app
- La tool no está limitada al componente Agent — puede llamar funciones de la app
- Se registra en el constructor del Agent o se pasa por llamada en `generateText`

## 5. Regla de resolución de tools

```ts
args.tools ?? thread.tools ?? agent.options.tools
```

Si defines tools en el constructor del Agent, están disponibles en todas las conversaciones. Si necesitas tools específicas por llamada, pásalas en `generateText`.

## 6. Actions, no mutations

Las funciones que interactúan con el Agent (`createThread`, `continueThread`) deben ser **actions**, no mutations. El Agent hace llamadas externas (LLM), y eso solo es válido dentro de acciones.

```ts
export const createThread = action({
  args: { prompt: v.string() },
  handler: async (ctx, { prompt }) => {
    const { threadId, thread } = await vanchiAgent.createThread(ctx);
    const result = await thread.generateText({ prompt });
    return { threadId, text: result.text };
  },
});
```

## 7. Vercel AI Gateway: usar `openai.chat()` directamente

El AI SDK de Vercel auto-detecta `AI_GATEWAY_API_KEY` del entorno. No necesitas configurar baseURL ni apiKey explícitamente:

```ts
import { openai } from "@ai-sdk/openai";

const vanchiAgent = new Agent(components.agent, {
  languageModel: openai.chat("gpt-4o-mini"),
  // El SDK busca automáticamente AI_GATEWAY_API_KEY
});
```

**No uses `createOpenAICompatibleLanguageModel` ni `createOpenAI` —** `openai.chat()` funciona directo con el Gateway.

## 8. Env vars correctas

| Variable | Dónde se usa |
|----------|-------------|
| `AI_GATEWAY_API_KEY` | En Convex dashboard (env vars). El AI SDK la detecta automáticamente |
| `PUBLIC_CONVEX_URL` | En `.env.local` y Vercel dashboard. Generada por `npx convex dev` |

No se necesita `VERCEL_AI_GATEWAY_KEY` ni `VERCEL_AI_GATEWAY_TOKEN`. El AI SDK usa `AI_GATEWAY_API_KEY` por defecto.

## 9. Rate limiting para Agents públicos

Como el portafolio es público (sin autenticación), se debe implementar:
- **Throttle client-side:** mínimo 1 segundo entre requests
- **usageHandler:** para registrar uso por thread y detectar abusos
- Convex tiene docs específicas de rate limiting para Agents (enlace en overview)

## 10. Seguridad: system prompt y sanitización

- **Prompt injection:** Incluir instrucción explícita de no aceptar cambios de rol ni ignorar reglas previas
- **XSS:** No usar `{@html}` directamente en Svelte. Sanitizar con DOMPurify o similar
- **Filtro de relevancia:** En la tool de RAG, umbral de similitud > 0.75 para evitar respuestas con ruido

## 11. Embeddings vía Vercel AI Gateway: usar string model, no `openai.embedding()`

Para generar embeddings desde una `internalAction` de Convex usando Vercel AI Gateway:

```ts
import { embed } from "ai";

const { embedding } = await embed({
  model: "openai/text-embedding-3-small",  // ← string model, pasa por Gateway
  value: "texto a embeber",
});
```

**Errores que evitar:**
- ❌ `openai.embedding("text-embedding-3-small")` — **No pasa por el Gateway**, usa OpenAI directo
- ❌ `createOpenAI` con baseURL — Innecesario, el AI SDK auto-detecta `AI_GATEWAY_API_KEY`
- ✅ `"openai/text-embedding-3-small"` (string) — El AI SDK rutear automáticamente por el Gateway

**Auto-detección de API key:**
El AI SDK busca `AI_GATEWAY_API_KEY` en este orden:
1. Variable de entorno (en Convex dashboard)
2. Fallback a `VERCEL_OIDC_TOKEN` (si está en Vercel)

No necesita `@ai-sdk/gateway` ni configuración extra.

## 12. `npx convex dev --once` para validar TypeScript

Este comando sube el código al deployment dev, hace typecheck y regenera tipos. Es el feedback loop principal del agente mientras el usuario no tiene `npx convex dev` corriendo en foreground.

Para evitar prompts interactivos en el agente:
```bash
npx convex dev --once
```

---

**Archivos relacionados:**
- `src/convex/convex.config.ts` — Registro del componente Agent
- `src/convex/agent.ts` — Definición del agente + tools
- `src/convex/agentActions.ts` — Actions createThread / continueThread
- `src/convex/messages.ts` — Query listThreadMessages

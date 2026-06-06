# 📋 Asistente IA Vanchi — Command Bar (⌘K) + Convex Agent + RAG

> **ID:** TASK-003
> **Estado:** Pendiente
> **Creada:** 2026-06-04
> **Completada:** —

---

## 1. Objetivo

Agregar un **asistente inteligente** a Vanchi que permita a los visitantes preguntar sobre el portafolio, servicios, stack y experiencia del autor **sin necesidad de navegar** por la página. El asistente se activa mediante **Command Bar (⌘K)** — un modal smoked glass que emerge sin romper la experiencia de la landing page.

---

## 2. Contexto

Actualmente el home muestra el portafolio en una sola vista (Hero, proyectos, servicios, about me, contacto). Un visitante debe navegar manualmente y leer cada sección para entender qué hace Iván y si puede resolver su problema.

El autor quiere que cualquier persona pueda simplemente preguntar:

> *"¿Puedes construir un sistema de biblioteca?"*

Y el asistente responda:

> *"Sí, Vanchi puede construir ese sistema. Usaría SvelteKit para el frontend, Convex como backend, implementaría un sistema de autenticación con Better Auth, búsqueda con índices de Convex y desplegaría en Vercel. También tengo experiencia en proyectos similares como..."*

El asistente debe conocer **todo** sobre:
- Iván Yarupaitán (quién es, su experiencia)
- Stack tecnológico que domina
- Los 9 proyectos del portafolio (descripción, tecnologías, resultados)
- Servicios que ofrece (WaaS, desarrollo web, consultoría IA)
- Modelo de precios y colaboración
- Filosofía de diseño y trabajo

### Decisión de UX: Command Bar (⌘K)

En lugar de tabs (que fragmentan la UI, rechazados por Gemini y por el autor), se implementa **Command Bar**:

- Inspirado en Vercel, Raycast, Linear
- No compite con el contenido del home
- Se siente como un gesto de poder, no como un widget de soporte
- El landing se mantiene intacto y fluido

---

## 3. 🎨 Reglas de diseño anti-AI-genérica

> Estas reglas son **obligatorias** para todo el código generado del asistente.
> El diseño de Vanchi prohíbe explícitamente la estética AI genérica.

### ❌ Prohibido

| Elemento | Motivo |
|----------|--------|
| Gradientes azules, morados o neón | Rompe la paleta monocromática carbón + dorado |
| Sparkles / estrellas / brillos | Estética startup ruidosa |
| Burbujas de chat flotantes | Aspecto de "soporte técnico", no premium |
| Avatar de robot o IA | Rompe la identidad humana del portafolio |
| Tres puntitos saltando (loading) | Patrón genérico y sobreutilizado |
| Animaciones bouncy o elásticas | Choca con el tono calmado y arquitectónico |
| Efectos de partículas | Prohibido explícitamente en DESIGN.md |
| Múltiples colores acento | Solo dorado antiguo como acento |

### ✅ Permitido

| Elemento | Detalle |
|----------|---------|
| Monocromático carbón + bone white | La base visual de todo |
| Dorado antiguo | Único acento: bordes activos, cursor, enlaces recomendados |
| Superficies smoked glass | `bg-base-100/60` + `backdrop-blur-lg` + `border-white/10` |
| Tipografía Geist | UI, body, mensajes |
| Playfair Display solo para títulos editoriales selectivos | No en el chat |
| Líneas finas de 1px | Separadores, bordes de input |
| Texto sin caja contenedora | Los mensajes son tipografía pura, no burbujas |

### Indicador de carga (streaming)

En lugar de tres puntitos:
- **Barra horizontal dorada de 1px** que se desplaza de izquierda a derecha en el borde inferior del input
- O un **cursor parpadeante** tipo máquina de escribir (`|`)

### Estructura del mensaje

- **Usuario:** texto limpio, sin caja, sin fondo, sin avatar — solo el texto en bone white, peso semibold
- **Asistente:** texto en bone white, peso normal, con un sutil sangrado izquierdo o un separador de 1px `border-white/10` entre mensajes
- No hay burbujas, no hay globos, no hay avatares

---

## 4. Stack propuesto

| Capa | Tecnología | Razón |
|------|-----------|-------|
| Backend IA | Convex + `@convex-dev/agent` | Sin serverless en Vercel, persistencia nativa, RAG integrable |
| LLM Gateway | Vercel AI Gateway | Ya lo usa en Molaric, consistente |
| Modelo | `gpt-4o-mini` | Rápido, barato, suficiente para el caso de uso |
| RAG | Convex con vectores (embeddings) | Búsqueda semántica sobre documentos del portafolio |
| Respuesta | `generateText` + typing animation client-side | Sin streaming server-side, typing visual en cliente |
| Frontend | SvelteKit + Modal ⌘K | Modal smoked glass central con shortcut de teclado |

---

## 5. Flujo de usuario

```
1. Usuario está en la landing page de Vanchi
2. Ve un indicador sutil en el nav o footer: "Presiona ⌘K para preguntar" (texto pequeño, opacidad baja)
3. Presiona ⌘K (Mac) / Ctrl+K (Windows/Linux)
4. Se abre un modal central flotante con:
   ┌──────────────────────────────────────┐
   │  ¿En qué puedo ayudarte?             │ ← título sutil
   │  ┌────────────────────────────────┐  │
   │  │ Escribe tu pregunta...         │  │ ← input limpio, sin iconos
   │  └────────────────────────────────┘  │
   │                                      │
   │  Sugerencias:                        │ ← 3 preguntas fijas con líneas finas
   │  ────────────────────────────────    │
   │  ¿Qué tipo de proyectos haces?      │
   │  ────────────────────────────────    │
   │  ¿Puedes construir un CRM?          │
   │  ────────────────────────────────    │
   │  ¿Cuánto cuesta un proyecto web?    │
   │                                      │
   └──────────────────────────────────────┘
5. Usuario escribe o hace clic en una sugerencia
6. Aparece el historial de mensajes (tipografía pura, sin burbujas)
7. Mientras el agente responde: barra dorada de 1px animada en borde inferior del input
8. La respuesta aparece con typing animation (letra por letra)
9. Usuario puede seguir conversando o presionar Escape para cerrar
10. Al cerrar, el thread se mantiene en Convex — al reabrir, la conversación continúa
```

---

## 6. Criterios de verificación

- [ ] El home se mantiene **exactamente igual** que hoy (sin tabs, sin cambios visuales)
- [ ] Hay un indicador sutil "⌘K" en la navegación
- [ ] Al presionar ⌘K o Ctrl+K se abre el modal
- [ ] Al presionar Escape se cierra el modal
- [ ] El modal tiene estilo smoked glass (`bg-base-100/60`, backdrop-blur, border-white/10)
- [ ] El diseño cumple TODAS las reglas anti-AI-genérica (sin burbujas, sin sparkles, sin avatar)
- [ ] El asistente responde preguntas sobre proyectos, stack, servicios y experiencia
- [ ] El asistente usa RAG para buscar en la knowledge base del portafolio
- [ ] Las conversaciones son persistentes (threads en Convex)
- [ ] Al recargar la página y reabrir el modal, la conversación continúa desde donde quedó
- [ ] La opción "Nueva conversación" resetea el thread sin recargar la página
- [ ] `bun run check` pasa sin errores
- [ ] `bun run build` pasa sin errores

---

## 7. Persistencia de conversaciones

Las sesiones de conversación se manejan con un enfoque híbrido:

| Dato | Dónde se guarda | Propósito |
|------|----------------|-----------|
| **Thread completo** | Convex (componente Agent) | Historial permanente de mensajes por thread |
| **threadId** | `localStorage` (`vanchi-thread-id`) | Reanudar la misma conversación al recargar |
| **Últimos mensajes** | `localStorage` (`vanchi-messages`) | Render instantáneo al reabrir el modal (cache opcional) |

### Flujo de persistencia

```
1. Usuario abre modal (⌘K)
2. Lee localStorage:
   ├── threadId existe → carga mensajes del cache local
   │   └── muestra historial instantáneamente (sin tiempo de carga)
   └── threadId no existe → muestra pantalla de bienvenida + sugerencias
3. Usuario escribe y envía
4. Si no hay threadId → convex.action(api.createThread, { prompt })
   └── Guarda el nuevo threadId en localStorage
5. Si hay threadId → convex.action(api.continueThread, { threadId, prompt })
6. Cachea la respuesta en localStorage (vanchi-messages)
7. Renderiza con typing animation
8. Al cerrar el modal → no pasa nada (thread sigue vivo en Convex)
9. Al recargar la página y reabrir → se recupera el threadId y los mensajes
```

### "Nueva conversación"

En la interfaz del modal, un texto pequeño y sutil al lado del título:

```
¿En qué puedo ayudarte?    [Nueva conversación]
```

Al hacer clic:
1. Borra `threadId` de localStorage
2. Limpia los mensajes del estado local
3. Muestra la pantalla de bienvenida con sugerencias
4. El thread anterior sigue existiendo en Convex (no se elimina)

### Keys de localStorage

```ts
localStorage.setItem('vanchi-thread-id', threadId);       // string
localStorage.setItem('vanchi-messages', JSON.stringify([  // Message[]
  { role: 'user', text: '...' },
  { role: 'assistant', text: '...' }
]));
```

---

## 8. Pasos de implementación

### Paso 0 — Configurar Convex en el proyecto

Inicializar Convex en la raíz del proyecto Vanchi y registrar el componente Agent.

**Archivos involucrados:** `convex/convex.config.ts`, `package.json`, `.env.local`

**Detalle:**
- Ejecutar `npx convex init` en la raíz (esto crea `convex/` y agrega dependencias)
- Instalar `@convex-dev/agent`
- Crear `convex/convex.config.ts` registrando el componente Agent
- Agregar `VITE_CONVEX_URL` y `VERCEL_AI_GATEWAY_TOKEN` a `.env.local`

---

### Paso 1 — Crear el schema de la knowledge base (RAG)

Crear el schema de Convex con las tablas necesarias para almacenar los documentos del portafolio con embeddings.

**Archivos involucrados:** `convex/schema.ts`

**Detalle:**
- Tabla `documents`: `title`, `slug`, `content`, `category`, `embedding` (vector field)
- Tabla `threads`: manejada automáticamente por el componente Agent
- Tabla `messages`: manejada automáticamente por el componente Agent

```ts
// convex/schema.ts
import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  documents: defineTable({
    title: v.string(),
    slug: v.string(),
    content: v.string(),
    category: v.string(),
    embedding: v.array(v.float64()),
  }).vectorIndex('byEmbedding', {
    vectorField: 'embedding',
    dimensions: 1536, // Dimensiones de text-embedding-3-small
  }),
});
```

---

### Paso 2 — Crear el seed de la knowledge base

Generar el contenido completo del portafolio como documentos estructurados para el RAG.

**Archivos involucrados:** `convex/seed.ts`, `src/lib/data/assistant-context.ts`

**Detalle:**
- Crear `src/lib/data/assistant-context.ts` con **todo el texto del portafolio** estructurado por secciones:
  - `about`: Quién es Iván, experiencia, filosofía
  - `stack`: Tecnologías que domina con descripción de cada una
  - `projects`: Los 9 proyectos con descripción completa, stack, resultados
  - `services`: WaaS, desarrollo web, consultoría IA
  - `pricing`: Modelos de colaboración, precios
- Crear `convex/seed.ts` con una action que:
  - Toma el contenido de `assistant-context.ts`
  - Genera embeddings con OpenAI (vía Vercel AI Gateway)
  - Almacena los documentos en la tabla `documents`
- La action `seedKnowledgeBase` se ejecuta manualmente una vez

---

### Paso 3 — Definir el agente Vanchi

Crear la configuración del agente con instrucciones, tools de RAG y modelo.

**Archivos involucrados:** `convex/agent.ts`

**Detalle:**
- Configurar el modelo vía Vercel AI Gateway usando `createOpenAI` de `@ai-sdk/openai` con base URL del gateway
- Definir las instrucciones del agente (system prompt breve con personalidad y reglas)
- Registrar la tool `searchKnowledgeBase` que:
  - Recibe una consulta del usuario
  - Genera embedding de la consulta
  - Busca en `documents` por similitud coseno
  - Retorna los fragmentos más relevantes como contexto

---

### Paso 4 — Crear las actions del agente

Crear las actions que el frontend llamará: crear thread, continuar thread, y buscar en knowledge base.

**Archivos involucrados:** `convex/actions.ts`

**Detalle:**
- `createThread` (action):
  - Crea un nuevo thread con el agente
  - Recibe el primer mensaje del usuario
  - Ejecuta `generateText` con la consulta
  - Retorna `{ threadId, response }`
- `continueThread` (action):
  - Continúa un thread existente
  - Recibe `{ threadId, prompt }`
  - Ejecuta `generateText` con la consulta
  - Retorna `{ response }`
- `searchKnowledgeBase` (action para tool):
  - Recibe `{ query }`
  - Genera embedding
  - Busca en `documents` por similitud
  - Retorna documentos relevantes
- `seedKnowledgeBase` (action):
  - Lee los documentos de `assistant-context.ts`
  - Genera embeddings y los guarda
  - Se ejecuta una sola vez en setup

---

### Paso 5 — Crear el cliente Convex en el frontend

**Archivos involucrados:** `src/lib/convex.ts`

**Detalle:**
- Crear un cliente Convex que se conecte a `VITE_CONVEX_URL`
- Exportar `convex` (instancia de `ConvexClient`) y `api` (generado)

```ts
// src/lib/convex.ts
import { ConvexClient } from 'convex/browser';
import { api } from '../../convex/_generated/api';

export const convex = new ConvexClient(import.meta.env.VITE_CONVEX_URL!);
export { api };
```

---

### Paso 6 — Crear el modal de Command Bar (Chat)

Crear el modal central que contiene el asistente. Este modal:
- Se abre con ⌘K / Ctrl+K
- Se cierra con Escape o click fuera
- Es un modal central flotante con estilo smoked glass

**Archivos involucrados:** `src/lib/components/home/CommandBar.svelte`

**Detalle:**

**Estado:** `isOpen`, `messages: Message[]`, `threadId: string | null`, `isLoading`, `input`

**Anatomía del modal:**
```
┌────────────────────────────────────────────┐
│  ¿En qué puedo ayudarte?                   │ ← título, Playfair Display opcional, sutil
│                                            │
│  ┌──────────────────────────────────────┐  │
│  │ Escribe tu pregunta aquí...          │  │ ← input: sin iconos, sin decoración
│  └──────────────────────────────────────┘  │    borde dorado al hacer focus
│                                            │
│  ──────────────────────────────────────    │ ← separador de 1px
│  Sugerencias                               │ ← label sutil, opacidad baja
│                                            │
│  ¿Qué tipo de proyectos has hecho?         │ ← líneas clickeables, sin bullet
│  ¿Puedes construir un CRM o sistema web?   │
│  ¿Cuánto cuesta un proyecto con Vanchi?    │
│                                            │
│  ──── historial de mensajes (si existe) ── │
│                                            │
│  [Usuario] ¿Puedes construir...           │ ← texto limpio, sin burbuja
│                                            │
│  [Vanchi] Sí, he construido proyectos...   │ ← texto con typing animation
│                                            │
└────────────────────────────────────────────┘
```

**Reglas de diseño del modal:**
- Fondo: `bg-base-100/80 backdrop-blur-2xl` (smoked glass)
- Borde: `border border-white/10`
- Border-radius: suave (rounded-2xl)
- Sombra: `shadow-2xl` pero cálida (sin tonos azules/purpura)
- Ancho máximo: `max-w-xl` (contenido centrado, no ancho completo)
- Altura máxima: `max-h-[70vh]` con scroll interno
- Overlay exterior: `bg-black/40 backdrop-blur-sm`

**Comportamiento:**
- Al abrir: animación fade-in + scale muy sutil
- Al cerrar: fade-out
- El input recibe focus automáticamente al abrir
- Enter envía, Shift+Enter nueva línea
- Escape cierra el modal (sin perder el thread)

**Flujo de mensajes (con persistencia):**
1. Leer `localStorage`: si existe `vanchi-thread-id`, restaurar mensajes del cache local
2. Sin threadId → llama a `convex.action(api.createThread, { prompt })`
   └── Guarda el nuevo threadId en localStorage (`vanchi-thread-id`)
3. Con threadId → llama a `convex.action(api.continueThread, { prompt, threadId })`
4. Loading: barra dorada de 1px en borde inferior del input
5. Respuesta: typing animation (caracter por caracter con delay de ~20ms)
6. Cachear la respuesta en localStorage (`vanchi-messages`)
7. Scroll automático al último mensaje
8. Cerrar con Escape: el thread sigue vivo en Convex

---

### Paso 7 — Agregar el indicador ⌘K en el nav y el modal al layout

**Archivos involucrados:** `src/lib/components/Header.svelte`, `src/routes/+layout.svelte`, `src/routes/+page.svelte`

**Detalle:**

En **Header.svelte**:
- Agregar un indicador sutil en el nav, al final: `⌘K` o `Ctrl+K` en texto pequeño (`text-xs`), opacidad baja (`text-base-content/40`)
- Sin badge, sin pill, sin adornos — solo texto. Algo como:

```
[Proyectos] [Servicios] [Sobre mí]     ⌘K
```

- Al hacer clic en `⌘K` también abre el modal
- Tooltip opcional: "Presiona ⌘K para consultar al asistente"

En **+layout.svelte**:
- Importar y renderizar `CommandBar.svelte` (está siempre montado, controlado por `isOpen`)
- El modal es global — accesible desde cualquier página del sitio, no solo el home

En **+page.svelte**:
- No necesita cambios (el modal vive en el layout, la página sigue igual)

**Keyboard event listener:**
- Escuchar `keydown` para ⌘K / Ctrl+K a nivel de `window`
- Escuchar Escape para cerrar
- El event listener se monta en `+layout.svelte`

---

### Paso 8 — Verificar integración y builds

**Archivos involucrados:** Todos los anteriores

**Detalle:**
- `bun run check` — debe pasar sin errores
- Verificar que el home se ve exactamente igual que antes (sin cambios visuales)
- Verificar que ⌘K abre/cierra el modal
- Verificar que el modal tiene el diseño correcto (smoked glass, sin burbujas, sin sparkles)
- Verificar que las sugerencias funcionan
- Verificar que la conversación persiste al cerrar/reabrir

---

### Paso 9 — Setup de Convex y seed de datos

Pasos manuales posteriores a la implementación del código:

**Archivos involucrados:** `convex/` (todo)

**Detalle:**
- `npx convex dev` — Iniciar el backend local
- Configurar `VERCEL_AI_GATEWAY_TOKEN` en Convex dashboard (environment variables)
- Ejecutar `seedKnowledgeBase` desde el playground de Convex o mediante una acción programática
- Verificar que los documentos se hayan indexado correctamente

---

## 8. Diagrama de flujo de datos

```
Usuario presiona ⌘K
         │
         ▼
┌─────────────────────────────────┐
│  CommandBar modal se abre       │
│  (smoked glass, fade-in)        │
│  ├─ Lee localStorage:           │
│  │   ├── vanchi-thread-id       │
│  │   └── vanchi-messages        │
│  └─ input recibe focus          │
└─────────┬───────────────────────┘
          │
          ▼
Usuario escribe: "¿Puedes construir un sistema de biblioteca?"
         │
         ▼
┌─────────────────────────────────────────────┐
│  ¿Hay threadId en localStorage?            │
│  ├── Sí → convex.action(api.continueThread)│
│  └── No  → convex.action(api.createThread) │
│              └── Guarda threadId en LS      │
└───────────────────┬─────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│  Convex Action                              │
│  └─ vanchiAgent.generateText({ prompt })     │
│     ├─ tool: searchKnowledgeBase(query)      │
│     │   └─ embedding → vector search         │
│     │      └─ top 3 documentos relevantes    │
│     │         └─ contexto inyectado al LLM   │
│     └─ response ← texto generado             │
└───────────────────┬─────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│  CommandBar.svelte recibe respuesta      │
│  ├─ Guarda en localStorage (vanchi-messages)│
│  ├─ Oculta barra dorada de loading          │
│  └─ Muestra texto con typing animation      │
│     (caracter por caracter, ~20ms delay)    │
└─────────────────────────────────────────────┘
```

---

## 9. Estructura final de archivos

```
Vanchi/
├── convex/                          ← NUEVO
│   ├── convex.config.ts             ─ Registrar Agent component
│   ├── schema.ts                    ─ Tabla documents con vector index
│   ├── agent.ts                     ─ Definición del vanchiAgent
│   ├── actions.ts                   ─ createThread, continueThread, seed
│   └── seed.ts                      ─ Seed de knowledge base
├── src/
│   ├── lib/
│   │   ├── convex.ts                ─ NUEVO: Cliente Convex
│   │   ├── data/
│   │   │   └── assistant-context.ts ─ NUEVO: Texto completo del portafolio
│   │   └── components/
│   │       └── home/
│   │           └── CommandBar.svelte ─ NUEVO: Modal del asistente (⌘K)
│   ├── lib/components/
│   │   └── Header.svelte            ─ MODIFICAR: + indicador ⌘K
│   └── routes/
│       └── +layout.svelte           ─ MODIFICAR: + CommandBar + keyboard listener
├── convex.json                       ─ Generado por npx convex init
├── .env.local                        ─ VITE_CONVEX_URL, VERCEL_AI_GATEWAY_TOKEN
└── package.json                      ─ MODIFICAR: + @convex-dev/agent, convex
```

---

## 10. Checklist de cierre

- [ ] Convex inicializado (`npx convex init`)
- [ ] `convex/convex.config.ts` con Agent registrado
- [ ] `convex/schema.ts` con tabla documents + vector index
- [ ] `convex/agent.ts` con vanchiAgent, modelo vía Vercel AI Gateway, tools
- [ ] `convex/actions.ts` con createThread, continueThread, searchKB
- [ ] `convex/seed.ts` con seedKnowledgeBase
- [ ] `src/lib/convex.ts` con cliente Convex
- [ ] `src/lib/data/assistant-context.ts` con contenido completo del portafolio
- [ ] `src/lib/components/home/CommandBar.svelte` con modal smoked glass
- [ ] `src/lib/components/Header.svelte` modificado con indicador ⌘K
- [ ] `src/routes/+layout.svelte` modificado con CommandBar + keyboard listener
- [ ] Diseño cumple reglas anti-AI-genérica (sin burbujas, sin sparkles, sin avatar, sin gradientes)
- [ ] El home se mantiene exactamente igual que antes (sin tabs)
- [ ] Al recargar la página y reabrir, la conversación continúa desde donde quedó
- [ ] La opción "Nueva conversación" resetea el thread sin recargar la página
- [ ] `bun run check` pasa
- [ ] `bun run build` pasa
- [ ] Knowledge base seedeada y verificada
- [ ] El agente responde preguntas sobre proyectos, stack y servicios
- [ ] Mover a `tasks/archived/` al finalizar
- [ ] Registrar en `CHANGELOG.md`

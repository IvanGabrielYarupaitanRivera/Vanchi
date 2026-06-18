# 🤖 GaaS — Generative Agent-as-a-Service

> **Fecha:** 2026-06-17
> **Contexto:** Redefiniendo el posicionamiento de Vanchi. La metodología anterior (WaaS — Website as a Service) ya no refleja hacia dónde va la industria ni lo que Ivan quiere construir.

---

## El cambio de paradigma

```
WAAS (Website as a Service)     →     GaaS (Generative Agent-as-a-Service)
Software administrado            →     Software autónomo
Suscripción mensual              →     Outcome-based pricing
Dashboard web                    →     Zero-UI / lenguaje natural
Ejecución request-response       →     Ejecución asíncrona event-driven
```

---

## Las 10 características de validación GaaS

1. **Outcome-Based:** Facturación por métricas de éxito (tareas resueltas), no por licencias ni tiempo.
2. **Goal-Driven:** El software recibe un objetivo global y genera subpasos dinámicamente; no depende de árboles `if/else`.
3. **Reasoning Loop:** Bucle de evaluación continua que analiza contexto, desglosa problemas y corrige su rumbo.
4. **Tool Use:** Ejecuta funciones, mutaciones y APIs de terceros de forma autónoma (lectura/escritura externa).
5. **Persistent Memory:** Indexación persistente de interacciones previas para heredar contexto sin reentrenar.
6. **Self-Improvement:** Optimización de prompts basándose en logs de ejecuciones pasadas.
7. **Multi-Agent Orchestration:** Diferentes agentes especializados heredan estados y se transfieren subtareas.
8. **Proactive Interaction:** Guiado por eventos de fondo; inicia flujos ante anomalías sin esperar un clic humano.
9. **Guardrails & Alignment:** Tipado estricto del lado servidor como escudo de seguridad.
10. **Human-in-the-Loop:** Flujos que pausan ejecución para confirmación humana en decisiones críticas.

---

## Quién impulsa esto

- **Jensen Huang (NVIDIA CEO)** en GTC 2026: *"Cada empresa de SaaS se convertirá en una empresa de GaaS."*
- Frameworks: **OpenClaw**, **NemoClaw** (NVIDIA) + persistencia en **Convex**.
- Centros de datos como "fábricas de inteligencia y tokens" autónomos.

---

## Implicaciones para Vanchi

- El stack actual (Convex Agent + Vercel AI Gateway + SvelteKit) ya es una base GaaS.
- Convex ya maneja workflows duraderos, tool use autónomo, estado persistente y tipado estricto.
- Lo que falta construir (multi-agente, self-improvement, HITL) es roadmap futuro.
- El knowledge base debe reflejar GaaS como la metodología principal a partir de hoy.

---

## Archivos afectados

- `src/convex/entidades/documentosV2/literals.ts` → agregar `"gaas"` a `ETIQUETAS_CONCEPTOS`
- `src/convex/agentV2/config/prompt.ts` → el agente debe conocer GaaS
- Docs de servicios, precios, sobre-mi → actualizar referencias de WAAS a GaaS
- Nuevos documentos en `documentosV2` explicando la metodología

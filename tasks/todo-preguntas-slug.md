# 🌐 Sistema `/preguntas/[slug]` — SEO indexable desde la Knowledge Base

> **Fecha:** 2026-06-23
> **Versión:** 1.0
> **Dependencias:** Ninguna (independiente del agente, puede construirse sin tocar `/chat`)
> **Impacto SEO:** Muy alto
> **Esfuerzo estimado:** Medio (2-3 días hábiles)

---

## 1. Problema que resuelve

El agente de `/chat` responde preguntas en tiempo real sobre proyectos, metodología GaaS, precios y sectores. Pero **Google no indexa contenido JavaScript**. Todo lo que el agente responde es invisible para Googlebot.

**Síntoma:** Si alguien googlea *"qué es gaas"*, *"cuánto cuesta un agente de ia en peru"* o *"caso encap vanchi"*, las respuestas del chat no aparecen en la SERP. Solo aparece la página del chat con un H1 y un input vacío.

**Solución:** Duplicar las respuestas del agente en páginas SSR estáticas con ruta `/preguntas/[slug]`. Cada página responde una pregunta concreta con contenido estático, indexable y linkeable.

---

## 2. Arquitectura propuesta

```
src/
├── routes/
│   └── (main)/
│       └── preguntas/
│           ├── +page.svelte              ← Listado de todas las preguntas (FAQ index)
│           ├── +page.ts                  ← Loader que lista todas las preguntas
│           └── [slug]/
│               ├── +page.svelte          ← Página individual de pregunta-respuesta
│               └── +page.server.ts       ← Loader que busca el slug en la KB
└── lib/
    ├── data/
    │   └── preguntas/
    │       ├── index.ts                  ← Exporta el mapa { [slug]: Pregunta }
    │       └── *.ts                      ← Un archivo por cada pregunta (o grupo de preguntas)
    └── types/
        └── pregunta.ts                   ← Tipo Pregunta
```

---

## 3. Modelo de datos — `Pregunta`

```typescript
interface Pregunta {
	slug: string;           // 'que-es-gaas', 'cuanto-cuesta-agente-ia', 'caso-encap'
	question: string;       // '¿Qué es GaaS?'
	shortAnswer: string;    // Resumen de 1-2 líneas (para meta description y listados)
	longAnswer: string;     // Respuesta completa renderizada como markdown (para la página)
	category: string;       // 'metodologia' | 'precios' | 'proyectos' | 'sectores' | 'general'
	relatedSlugs: string[]; // Preguntas relacionadas para navegación interna
	seo: {
		title: string;       // <title> específico para esta página
		description: string; // <meta description>
		keywords: string[];  // Keywords específicas
	};
	date: string;           // Fecha de creación/actualización
	updatedAt?: string;     // Última actualización
}
```

---

## 4. Ejemplos de preguntas (priorizadas)

### Fase 1 — Esencial (9 preguntas, impacto inmediato)

| # | slug | category | question |
|---|------|----------|----------|
| 1 | `que-es-gaas` | metodologia | ¿Qué es GaaS y cómo se diferencia de SaaS? |
| 2 | `cuanto-cuesta-implementar-ia` | precios | ¿Cuánto cuesta implementar un agente de IA en Perú? |
| 3 | `caso-encap` | proyectos | Caso ENCAP: Tutor AI 24/7 para educación |
| 4 | `caso-molaric` | proyectos | Caso Molaric: Fracaso comercial que definió GaaS |
| 5 | `automatizar-citas-medicas` | sectores | ¿Cómo automatizar citas médicas con IA? |
| 6 | `agente-ia-whatsapp` | general | ¿Cómo funciona un agente de IA por WhatsApp? |
| 7 | `diferencia-entre-chatbot-y-agente-ia` | general | ¿Cuál es la diferencia entre un chatbot y un agente de IA? |
| 8 | `vanchi-que-hace` | general | ¿Qué hace Vanchi y quién es Ivan Yarupaitan? |
| 9 | `en-que-sectores-trabajas` | sectores | ¿En qué sectores trabajas? (Salud, Legal, Educación) |

### Fase 2 — Profundización (8 preguntas)

| # | slug | category | question |
|---|------|----------|----------|
| 10 | `que-procesos-automatizar` | precios | ¿Qué procesos de mi empresa puedo automatizar primero? |
| 11 | `caso-junin360` | proyectos | Caso Junín360: Automatización legal para el GORE Junín |
| 12 | `caso-mediroosevelt` | proyectos | Caso MediRoosevelt: Plataforma médica con IA |
| 13 | `como-funciona-outcome-based` | metodologia | ¿Cómo funciona el modelo de pago por resultados (Outcome-Based)? |
| 14 | `multi-tenant-agentes-ia` | metodologia | ¿Qué es multi-tenancy y por qué importa en agentes de IA? |
| 15 | `human-in-the-loop-que-es` | metodologia | ¿Qué es Human-in-the-Loop y cómo protege mi negocio? |
| 16 | `crear-pagina-web-landing-page` | general | ¿Hacés páginas web además de agentes de IA? |
| 17 | `contactar-ivan-yarupaitan` | general | ¿Cómo contacto a Ivan Yarupaitan para un proyecto? |

> La Fase 2 se implementa después de validar que la Fase 1 genera tráfico indexado.

---

## 5. Rutas y comportamiento

### 5a. Listado `/preguntas`

- **URL:** `https://www.vanchi.pro/preguntas`
- **Propósito:** Página índice que lista todas las preguntas agrupadas por categoría
- **Contenido SSR:** Título + descripción + lista de preguntas con links a cada una
- **JSON-LD:** `FAQPage` con todas las preguntas y respuestas cortas
- **Estado:** Indexable por Google, cada link es crawlable
- **Sitemap:** Incluir en `sitemap.xml`

### 5b. Página individual `/preguntas/[slug]`

- **URL:** `https://www.vanchi.pro/preguntas/que-es-gaas`
- **Propósito:** Responder una pregunta concreta con contenido profundo
- **Contenido SSR:**
  - `<h1>` con la pregunta exacta
  - Respuesta larga renderizada con markdown
  - Breadcrumbs: Inicio > Preguntas > {Pregunta}
  - Navegación a preguntas relacionadas
  - CTA al final: "¿Tenés otra pregunta? Hablá con el agente" → `/chat`
- **JSON-LD:** `FAQPage` con la pregunta individual (para rich snippet)
- **Estado:** Indexable, ideal para Featured Snippets

---

## 6. Sitemap dinámico

Extender el sitemap actual para incluir todas las URLs de `/preguntas/[slug]`:

```typescript
// En src/routes/(main)/sitemap.xml/+server.ts
const preguntas = getAllPreguntas().map(p => ({
	url: `https://www.vanchi.pro/preguntas/${p.slug}`,
	lastmod: p.updatedAt ?? p.date,
	changefreq: 'monthly',
	priority: 0.7
}));
```

---

## 7. Estrategia de contenido

### Cada pregunta debe incluir:

1. **Respuesta directa** (2-3 líneas): para el Featured Snippet y la meta description
2. **Desarrollo completo** (2-4 párrafos): con contexto, ejemplos reales y datos concretos
3. **Enlaces internos** a otras preguntas, páginas de proyecto o sectores
4. **CTA contextual**: según el tema, llevar a `/contacto`, `/chat`, o una página de proyecto

### Reglas de redacción:

- **Tono:** Pain-point SEO. Empezar con el problema, no con la definición.
  - ❌ "GaaS significa Generative Agent as a Service..."
  - ✅ "El software no debería necesitarte para funcionar. GaaS es..."
- **Longitud:** 300-600 palabras por respuesta larga
- **Data real:** Cada afirmación debe respaldarse con un proyecto concreto
- **Ejemplo siempre:** Si hablás de automatización de citas, mencioná Molaric o MediRoosevelt

---

## 8. Integración futura con el agente (post-MVP)

Una vez que el sistema esté funcionando, se puede conectar con el agente de `/chat`:

1. El agente detecta que la pregunta del usuario tiene un slug en la KB
2. En lugar de generar la respuesta desde cero, responde: *"Acá tenés una página dedicada con toda la info:"* + link a `/preguntas/[slug]`
3. Esto genera backlinks internos desde el chat hacia páginas indexables

**Esto NO se hace en la primera fase.** Primero se construye el sistema estático, se mide el impacto SEO, y luego se conecta.

---

## 9. Métricas de éxito

| Indicador | Objetivo | Plazo |
|-----------|----------|-------|
| URLs indexadas de `/preguntas/[slug]` | 9/9 | 1 semana post-deploy |
| Featured Snippets capturados | ≥ 2 | 3 meses |
| Tráfico orgánico a `/preguntas/*` | ≥ 100 visitas/mes | 3 meses |
| Posición Google para `que es gaas` en Perú | Top 5 | 3 meses |
| Posición Google para `cuanto cuesta agente ia peru` | Top 10 | 3 meses |

---

## 10. Prioridades de implementación

| # | Acción | Esfuerzo | Dependencia |
|---|--------|----------|-------------|
| 1 | Crear tipos (`Pregunta`) y estructura de carpetas | 30 min | — |
| 2 | Crear las 9 preguntas de Fase 1 como archivos de datos | 2-3 horas | #1 |
| 3 | Ruta `/preguntas/+page.svelte` con listado indexable | 1 hora | #2 |
| 4 | Ruta dinámica `/preguntas/[slug]/+page.server.ts` | 1 hora | #2 |
| 5 | Ruta dinámica `/preguntas/[slug]/+page.svelte` (respuesta + JSON-LD FAQPage) | 2 horas | #4 |
| 6 | Extender sitemap.xml con URLs de preguntas | 30 min | #4 |
| 7 | Breadcrumbs y navegación entre preguntas relacionadas | 1 hora | #4 |
| 8 | **Fase 2:** Crear 8 preguntas adicionales | 2 horas | #7 |

**Total estimado Fase 1:** ~7-8 horas

---

## 11. Anti-patrones (lo que NO se hace)

| ❌ No | ✅ Sí |
|-------|-------|
| Generar las preguntas automáticamente desde la knowledge base del agente (IA genera contenido no controlado) | Cada pregunta es un archivo estático con contenido revisado |
| Meter 50 preguntas de una sin validar | 9 en Fase 1, 8 en Fase 2, medir y escalar |
| Duplicar contenido idéntico al de otras páginas | Cada pregunta ofrece profundidad adicional, no un resumen de otra página |
| Poner links a `/chat` como único CTA | CTA contextual: a proyectos, contacto o chat según la pregunta |

---

## 12. Preguntas abiertas (para decidir antes de implementar)

1. **¿Markdown o TS?** — Las respuestas se escriben como template strings en TS (como los proyectos actuales) o como archivos `.md` que se renderizan con `marked`?
2. **¿Categorías visibles?** — El listado de `/preguntas` agrupa por categoría visible (con badges) o solo es un flat list?
3. **¿Quién escribe las respuestas?** — Las redacta Ivan directamente o se usa el agente como borrador y luego se edita manualmente?

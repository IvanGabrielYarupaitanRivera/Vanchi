# 🔗 INTEGRATIONS — Servicios externos

> Servicios externos con los que el proyecto Vanchi está integrado.

---

## Vercel (Hosting frontend)

| Ítem | Detalle |
|------|---------|
| **Propósito** | Hosting del frontend SvelteKit, SSR, CDN, deploys automáticos |
| **Adapter** | `@sveltejs/adapter-vercel` |
| **Plan** | Gratuito (Hobby) |
| **Deploy** | Automático desde GitHub (push a main) |

### URL del sitio

```
https://www.vanchi.pro
```

---

## Convex (Backend IA + Base de datos)

| Ítem | Detalle |
|------|---------|
| **Propósito** | Backend serverless: agente IA, tabla documentosV2, autenticación admin |
| **Componentes** | `@convex-dev/agent` v0.6+ |
| **Plan** | Gratuito (Generoso tier gratis) |
| **Dashboard** | `dashboard.convex.dev` (proyecto: personal-ivan/vanchi) |

### Variables de entorno en Convex Dashboard

| Variable | Propósito |
|----------|-----------|
| `AI_GATEWAY_API_KEY` | API key para Vercel AI Gateway (LLM calls) |
| `ADMIN_PASSWORD` | Contraseña maestra para el panel admin |

---

## Vercel AI Gateway (LLM Gateway)

| Ítem | Detalle |
|------|---------|
| **Propósito** | Gateway unificado para modelos de IA (reemplaza API keys directas) |
| **Modelo principal** | `inception/mercury-2` |
| **URL base** | `https://ai-gateway.vercel.sh/v1` |
| **Configuración** | `createOpenAI({ apiKey, baseURL })` en Convex action |

---

## GitHub (Control de versiones)

| Ítem | Detalle |
|------|---------|
| **Propósito** | Repositorio del código fuente |
| **Branch principal** | `main` |

---

## Servicios NO integrados (a propósito)

| Servicio | Razón |
|----------|-------|
| Base de datos tradicional | Convex reemplaza DB + backend |
| CMS | Contenido gestionado en código + CRUD admin |
| Auth externo | Autenticación simple por contraseña maestra |

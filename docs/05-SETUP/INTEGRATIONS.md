# 🔗 INTEGRATIONS — Servicios externos

> Servicios externos con los que el proyecto Vanchi está integrado.

---

## Vercel (Hosting y despliegue)

| Ítem | Detalle |
|------|---------|
| **Propósito** | Hosting principal del sitio, SSR, CDN, deploys automáticos |
| **Adapter** | `@sveltejs/adapter-vercel` v6.3.3 |
| **Plan** | Gratuito (Hobby) |
| **Deploy** | Automático desde GitHub (push a main/master) |

### Características habilitadas

- **SSR** — Para la mayoría de rutas
- **Prerendering** — Para sitemap.xml (`prerender = true`)
- **Edge Network** — Distribución global del contenido

### Headers de seguridad (desde `vercel.json`)

| Header | Valor |
|--------|-------|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |

### URL del sitio

```
https://www.vanchi.pro
```

---

## GitHub (Control de versiones)

| Ítem | Detalle |
|------|---------|
| **Propósito** | Repositorio del código fuente, CI (si aplica), Copilot instructions |
| **Branch principal** | `main` |

### GitHub Copilot Instructions

El proyecto incluye instrucciones para GitHub Copilot en `.github/`:

- `.github/copilot-instructions.md` — Instrucciones generales
- `.github/instructions/daisyui.md` — Instrucciones específicas de DaisyUI
- `.github/instructions/svelte-eslint-rules.instructions.md` — Reglas ESLint para Svelte

---

## Servicios NO integrados (a propósito)

| Servicio | Razón |
|----------|-------|
| Base de datos | No necesaria — datos estáticos en TypeScript |
| CMS | No necesario — contenido gestionado directamente en código |
| Analytics | No implementado aún — opcional a futuro |
| Email service | No implementado — el contacto es vía WhatsApp / formulario simple |
| Auth / Login | No necesario — sitio público informativo |

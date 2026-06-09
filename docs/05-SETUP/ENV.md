# 🔐 ENV — Variables de entorno

> Variables de entorno necesarias para el proyecto Vanchi.

---

## Backend Convex (en Convex Dashboard)

Estas variables se configuran en `dashboard.convex.dev` → Settings → Environment Variables.
Se declaran en `src/convex/convex.config.ts` con `v.string()`.

| Variable | Propósito | ¿Obligatoria? |
|----------|-----------|---------------|
| `AI_GATEWAY_API_KEY` | API key para Vercel AI Gateway (llamadas LLM) | Sí |
| `ADMIN_PASSWORD` | Contraseña maestra para el panel `/admin` | Sí |

### Configurar en Convex Dashboard

1. Ir a [dashboard.convex.dev](https://dashboard.convex.dev)
2. Seleccionar proyecto `personal-ivan/vanchi`
3. Elegir deployment (dev o prod)
4. Settings → Environment Variables → agregar cada variable

> Cada deployment (dev y prod) tiene sus propias variables de entorno. Configurar ambas.

---

## Frontend SvelteKit (en Vercel + `.env.local`)

| Variable | Propósito | ¿Dónde va? | ¿Obligatoria? |
|----------|-----------|------------|---------------|
| `PUBLIC_CONVEX_URL` | URL del deployment de Convex | Vercel env vars + `.env.local` | Sí |
| `CONVEX_DEPLOY_KEY` | Deploy key para CI/CD | Vercel env vars (solo Production) | Solo para CI |

### Desarrollo local

```bash
# .env.local (generado automáticamente por npx convex dev)
PUBLIC_CONVEX_URL=https://<tu-deployment>.convex.cloud
```

### Producción

En Vercel, configurar:
- `PUBLIC_CONVEX_URL` → la URL del deployment de producción de Convex
- Opcional: `CONVEX_DEPLOY_KEY` para deploys automáticos desde Vercel

El Build Command en Vercel debe ser:
```bash
npx convex deploy --cmd-url-env-var-name PUBLIC_CONVEX_URL --cmd 'npm run build'
```

---

## Archivos `.env`

```
Vanchi/
├── .env.local          # Variables locales (NO versionar)
├── .env.example        # Template con valores vacíos (versionar)
```

El `.gitignore` ya tiene configurado:

```gitignore
.env
.env.*
!.env.example
.env.local
```

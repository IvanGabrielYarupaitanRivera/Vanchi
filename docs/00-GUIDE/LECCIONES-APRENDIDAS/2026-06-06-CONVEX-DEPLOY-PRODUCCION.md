# 🚀 Convex — Deploy a producción con Vercel

> **Fecha:** 2026-06-06
> **Contexto:** Configurar deployment de producción de Convex para SvelteKit + Vercel, con `PUBLIC_CONVEX_URL` en frontend y `AI_GATEWAY_API_KEY` en backend.

---

## 1. No hay deployments separados dev/prod manuales

Cada proyecto Convex tiene **un deployment de producción único**, separado de los deployments dev personales. No necesitas "crear" uno nuevo — `npx convex deploy` lo provisiona automáticamente la primera vez.

## 2. La URL de producción NO se copia a mano

No hay que copiar una URL del dashboard de Convex y pegarla en Vercel. `npx convex deploy` **inyecta automáticamente** la URL de producción como variable de entorno durante el build.

El comando correcto en el Build Command de Vercel:

```bash
npx convex deploy --cmd-url-env-var-name PUBLIC_CONVEX_URL --cmd 'npm run build'
```

Esto hace que durante el build, `PUBLIC_CONVEX_URL` contenga la URL del deployment de producción.

## 3. `CONVEX_DEPLOY_KEY` es la única llave que va en Vercel

En Vercel solo se configura **una** variable de entorno de Convex: `CONVEX_DEPLOY_KEY`.

- Se genera desde el Convex Dashboard → producción → Settings → Deploy Keys
- Se pone en Vercel solo para el entorno **Production**
- `npx convex deploy` la usa para autenticarse y determinar a qué deployment subir

## 4. `AI_GATEWAY_API_KEY` va en Convex Dashboard, no en Vercel

Cada deployment (dev y prod) tiene sus propias environment variables en Convex.

- En el Dashboard, seleccionar el deployment de **producción** (no el dev)
- Settings → Environment Variables → agregar `AI_GATEWAY_API_KEY`
- `convex.config.ts` ya la declara con `v.string()`, así que Convex la valida automáticamente

## 5. Flujo completo resumido

```
1. Vercel: Build Command = npx convex deploy --cmd-url-env-var-name PUBLIC_CONVEX_URL --cmd 'npm run build'
2. Vercel: CONVEX_DEPLOY_KEY en env vars (solo Production)
3. Convex Dashboard (producción): AI_GATEWAY_API_KEY en environment variables
4. SvelteKit usa setupConvex(PUBLIC_CONVEX_URL) — la URL la inyecta convex deploy
```

## 6. No hay "autorización de dominios"

Convex no requiere autorizar dominios para producción. Solo aplica para proveedores de auth externos (Clerk, Auth0, etc.) que sí necesitan configurar el dominio de producción.

## 7. Sincronizar datos dev → prod

Para migrar datos de una tabla específica del deployment dev al de producción,
ver la lección dedicada:
[`2026-06-17-CONVEX-SYNC-DEV-TO-PROD.md`](./2026-06-17-CONVEX-SYNC-DEV-TO-PROD.md)

---

**Lecciones aprendidas del error:**

- ❌ No asumir que la URL de dev (`.env.local`) sirve para producción
- ❌ No confundir las env vars de Convex Dashboard con las de Vercel — viven en sitios distintos
- ❌ No pensar que `PUBLIC_CONVEX_URL` se copia manualmente — `convex deploy` la inyecta sola

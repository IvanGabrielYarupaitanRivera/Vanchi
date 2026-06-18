# 🔄 Vercel — Redirecciones 301 y limpieza de 404 en GSC

> **Fecha:** 2026-06-17
> **Contexto:** Google Search Console reportaba 9 páginas 404 heredadas de una versión anterior del portafolio. Eran URLs tipo `/sitio-web-huancayo`, `/desarrollo-web-huancavelica` que ya no existían.

---

## El problema

Las páginas 404 NO estaban en el sitemap actual. Google las seguía pidiendo porque:
- Las conoció en el pasado (historial de rastreo)
- Posibles backlinks externos que apuntaban a esas URLs
- Google no "olvida" URLs automáticamente

Tener 404 acumulados gasta presupuesto de rastreo y daña la señal de calidad del sitio.

---

## La solución: `redirects` en `vercel.json`

```json
{
  "redirects": [
    { "source": "/sitio-web-huancavelica", "destination": "/", "statusCode": 301 },
    { "source": "/sitio-web-huancayo", "destination": "/", "statusCode": 301 }
  ]
}
```

### Datos clave

- Las redirecciones en `vercel.json` se procesan a nivel de CDN/proxy, **antes** de que la request llegue a SvelteKit. No hay conflicto.
- `"statusCode": 301` es preferible a `"permanent": true` (que genera 308).
- Límite de 2,048 redirecciones en el plan Hobby. Con 9 estamos sobrados.
- Se puede mantener `headers` y `redirects` en el mismo archivo sin conflicto.

---

## Lo que NO funciona

- ❌ **Eliminar URLs de GSC manualmente.** La herramienta de "eliminación temporal" solo las oculta ~6 meses. Vuelven.
- ❌ **Esperar que Google "se olvide" solo.** Sin redirección, Google sigue rastreando 404s indefinidamente.
- ❌ **No hacer nada.** Cada 404 es una señal negativa acumulada.

---

## Lo que SÍ funciona

- ✅ Redirección 301: Google transfiere autoridad y eventualmente deja de reportarlas como error.
- ✅ Después del deploy, validar manualmente visitando las URLs (deben redirigir con código 301).
- ✅ Una vez que Vercel deploya, en GSC los errores 404 pasan a "Página con redirección".

---

## Flujo completo

```
1. Identificar URLs 404 en GSC → Indexación → Páginas → Filtrar "No encontrada (404)"
2. Agregar redirects en vercel.json
3. Deploy a Vercel (git push)
4. Validar: visitar cada URL, verificar redirección 301 en DevTools
5. Esperar que Google re-rastree (días)
```

---

## Archivos afectados

- `vercel.json` → sección `redirects`

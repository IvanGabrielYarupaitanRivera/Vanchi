# 🧭 resolve() con rutas dinamicas en SvelteKit 5

> **Fecha:** 2026-06-17
> **Contexto:** Al linkear desde `/precios` a `/proyectos/encap` (ruta dinamica `[projectId]`), `svelte-check` rechazaba `resolve('/(main)/proyectos/encap')` y `svelte-mcp` rechazaba `href="/proyectos/encap"`. Ninguna de las dos opciones pasaba ambos linters.

---

## La solucion canonica

Pasar el **patron de la ruta** (con `[param]`) y los **valores en un objeto separado**:

```svelte
<script lang="ts">
  import { resolve } from '$app/paths';
</script>

<!-- ✅ Correcto: patron + params -->
<a href={resolve('/(main)/proyectos/[projectId]', { projectId: 'encap' })}>
  Caso ENCAP
</a>
```

### Por que esto funciona

1. **`svelte-check`** reconoce `/(main)/proyectos/[projectId]` como el literal exacto que existe en el filesystem. Valida que `{ projectId: string }` es correcto.
2. **`svelte-mcp`** detecta el uso de la funcion `resolve()` y la regla `svelte/no-navigation-without-resolve` se satisface.

---

## Lo que NO funciona

```svelte
<!-- ❌ String con parametro ya resuelto -->
<a href={resolve('/(main)/proyectos/encap')}>
<!-- svelte-check ERROR: no reconoce 'encap' como ruta literal -->

<!-- ❌ href sin resolve() -->
<a href="/proyectos/encap">
<!-- svelte-mcp ERROR: Unexpected href link without resolve() -->

<!-- ❌ base + string -->
<a href={base + '/proyectos/encap'}>
<!-- svelte-mcp ERROR: no detecta resolve(). Riesgo: si renombras [projectId] a [slug], nadie te avisa -->
```

---

## Leccion

> En SvelteKit 5, `resolve()` **siempre** recibe el patron de ruta (con `[param]`) y los valores como objeto separado. Nunca el string ya resuelto. Esto mantiene el tipado estricto extremo a extremo y satisface tanto al type-checker oficial como al MCP.

- ✅ Usar `resolve('/ruta/[param]', { param: valor })` para rutas dinamicas
- ✅ Usar `resolve('/ruta')` solo para rutas estaticas
- ❌ Nunca concatenar `base + '/ruta'` ni `href="/ruta"` para rutas internas si el proyecto tiene la regla `svelte/no-navigation-without-resolve`

---

## Herramientas involucradas

- `svelte-check` (oficial): type-checking de SvelteKit
- `@sveltejs/mcp` (`svelte-mcp svelte-autofixer`): analisis estatico AST, mas estricto que svelte-check en reglas de navegacion

---

## Archivos afectados

- `src/routes/(main)/precios/+page.svelte`

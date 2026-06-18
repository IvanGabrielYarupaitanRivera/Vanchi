# ⚙️ STACK-PATTERNS — Reglas obligatorias del stack

> Reglas que **todo código** escrito en Vanchi debe seguir.
> Ignorarlas puede romper consistencia, rendimiento o despliegue.

---

## 1. SvelteKit 5 — Runes mode

El proyecto usa **Svelte 5 con runes** (`$state`, `$derived`, `$effect`, `$props`).

✅ **Siempre usar:**

```svelte
<script lang="ts">
	let { name = "default" } = $props();
	let count = $state(0);
	let doubled = $derived(count * 2);
</script>
```

❌ **No usar (legacy Svelte 4):**
- `export let` para props
- `$:` reactive statements
- Stores de Svelte (`writable`, `derived`) — salvo casos justificados
- Slots de Svelte 4 — usar `{@render children()}` snippets

### Eventos
✅ Usar atributos de evento directamente: `onclick`, `oninput`, `onsubmit`
❌ No usar `on:click`, `on:input`

---

## 2. Tailwind CSS v4

✅ **Reglas:**
- Usar **solo tokens DaisyUI** para colores (`bg-base-100`, `text-primary`, etc.)
- No usar colores raw de Tailwind como `bg-black`, `text-yellow-500`, `text-gray-500`
- Breakpoint único para escritorio: **solo `lg:`**
- Mobile-first: escribir estilos base (mobile) y añadir `lg:` para desktop
- Contenido centrado: `max-w-5xl` o `max-w-6xl` con `mx-auto`
- Animaciones: `transition-all duration-300 ease-out`

❌ **No usar:**
- `md:` como breakpoint de composición
- `@apply` en archivos CSS (preferir clases en el template)
- Colores hardcodeados

---

## 3. DaisyUI v5

✅ **Siempre usar los tokens semánticos:**
- `base-100`, `base-200`, `base-300` — superficies
- `base-content` — texto principal
- `primary` — chalk white (monocromo intencional)
- `secondary` — tono piedra neutro
- `neutral` — superficies secundarias
- `accent` — blanco tech para highlights raros

✅ **Componentes preferidos:** `btn`, `card`, `input`, `navbar`, `footer`

❌ **No usar:** componentes con estilos por defecto que choquen con el design system de Vanchi

---

## 4. TypeScript — Tipado estricto

✅ **Siempre:**
- Tipar props de componentes con interfaces
- Usar `lang="ts"` en todos los `<script>`
- Preferir `interface` sobre `type` para props de componentes
- Usar tipos explícitos en server endpoints

---

## 5. Layout — Mobile-first, lg: only

| Regla | Detalle |
|-------|---------|
| Mobile first | El layout base es para mobile. `lg:` añade columnas / espaciado |
| Breakpoint único | Solo `lg:` (1024px) para cambios de composición |
| Hero sections | `min-h-[100dvh]` en pantallas grandes |
| Contenedor | `max-w-5xl` o `max-w-6xl` con `mx-auto` |

---

## 6. Imágenes

- Usar formato **WebP** para imágenes raster
- Usar `@sveltejs/enhanced-img` para optimización cuando aplique
- Imágenes en `/src/lib/assets/images/` organizadas por sección

---

## 7. Despliegue — Vercel

- El adapter configurado es `@sveltejs/adapter-vercel`
- No usar funcionalidades de node que no corran en edge / serverless
- Sitemap generado dinámicamente en `src/routes/sitemap.xml/+server.ts`

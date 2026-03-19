---
applyTo: '**/*.svelte'
---

# Reglas ESLint para Svelte 5 (eslint-plugin-svelte)

## 1. svelte/require-each-key — Clave obligatoria en `{#each}`

Todo bloque `{#each}` **debe** tener una clave única entre paréntesis. Svelte la usa para reconciliar el DOM eficientemente y evitar bugs de renderizado.

```svelte
<!-- ✅ CORRECTO -->
{#each items as item (item.id)}
	<MyComponent name={item.name} />
{/each}

<!-- Con índice como fallback (cuando no hay id único) -->
{#each items as item, i (i)}
	<MyComponent name={item.name} />
{/each}

<!-- ❌ INCORRECTO -->
{#each items as item}
	<MyComponent name={item.name} />
{/each}
```

### Estrategia de claves según el tipo de dato

| Tipo de item       | Clave recomendada  | Ejemplo                                |
| ------------------ | ------------------ | -------------------------------------- |
| Objeto con `id`    | `(item.id)`        | `{#each projects as p (p.id)}`         |
| Objeto con `label` | `(item.label)`     | `{#each socials as s (s.label)}`       |
| Objeto con `href`  | `(item.href)`      | `{#each navItems as item (item.href)}` |
| Objeto con `title` | `(item.title)`     | `{#each findings as f (f.title)}`      |
| String             | `(item)`           | `{#each tags as tag (tag)}`            |
| Componente/índice  | `(i)` (con índice) | `{#each logos as Logo, i (i)}`         |

---

## 2. svelte/valid-each-key — La clave debe usar variables del bloque `{#each}`

La clave debe referenciar **únicamente** las variables definidas dentro del propio bloque `{#each}`, no variables externas.

```svelte
<!-- ✅ CORRECTO: usa la variable del bloque -->
{#each things as thing (thing.id)}
	<Thing name={thing.name} />
{/each}

<!-- ❌ INCORRECTO: usa una variable externa (foo) -->
{#each things as thing (foo)}
	<Thing name={thing.name} />
{/each}
```

---

## 3. svelte/no-target-blank — Seguridad en `target="_blank"`

Todo enlace con `target="_blank"` **debe** incluir `rel="noopener noreferrer"` para prevenir la vulnerabilidad de `window.opener` en navegadores legacy.

```svelte
<!-- ✅ CORRECTO -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer"> Enlace externo </a>

<!-- ❌ INCORRECTO: falta rel completo -->
<a href="https://example.com" target="_blank">Enlace externo</a>
<a href="https://example.com" target="_blank" rel="noopener">Enlace externo</a>
<a href="https://example.com" target="_blank" rel="noreferrer">Enlace externo</a>
```

> **Regla:** `rel` debe contener **ambos** valores: `noopener` y `noreferrer`.

---

## 4. svelte/no-navigation-without-resolve — Navegación interna con `resolve()`

Toda navegación interna debe usar `resolve()` de `$app/paths` para que SvelteKit prefije correctamente el `base path` y los enlaces sean verificados en tiempo de compilación.

**Excepciones que NO requieren `resolve()`:**

- URLs absolutas (`https://...`)
- Anclas (`#top`, `#seccion`)
- `<a rel="external">` (navegación externa explícita)
- Shallow routing con string vacío (`pushState('', {})`)

```svelte
<!-- ✅ CORRECTO -->
<script lang="ts">
  import { goto, pushState, replaceState } from '$app/navigation';
  import { resolve } from '$app/paths';

  goto(resolve('/proyectos'));
  pushState(resolve('/proyectos'), {});
  replaceState(resolve('/proyectos'), {});

  // Shallow routing (string vacío = sin cambio de URL real)
  pushState('', {});
  replaceState('', {});
</script>

<a href={resolve('/proyectos')}>Proyectos</a>
<a href="https://github.com/vanchi">GitHub</a>   <!-- URL absoluta: OK -->
<a href={someURL} rel="external">Externo</a>     <!-- rel=external: OK -->
<a href="#contacto">Contacto</a>                 <!-- Ancla: OK -->

<!-- ❌ INCORRECTO: string literal interno sin resolve() -->
<a href="/proyectos">Proyectos</a>
<a href={'/proyectos'}>Proyectos</a>

<script lang="ts">
  goto('/proyectos');                            // ❌
  goto('/foo' + resolve('/bar'));                 // ❌ concatenación parcial
  pushState('/proyectos', {});                   // ❌
  replaceState('/proyectos', {});                // ❌
</script>
```

> **Nota práctica para este proyecto:** Usa siempre `href={resolve('/ruta')}` en los `<a>` de navegación interna (Header, Footer, botones CTA). Para enlaces a secciones de la misma página (`/#servicios`), usa anclas con `href="#servicios"` cuando ya estés en la raíz, o `resolve('/#servicios')` si navegas desde otra ruta.

### Aprendizajes prácticos de este proyecto

#### 4.1 `resolve()` exige rutas tipadas, no `string` genérico

Si un `href` interno está tipado como `string`, TypeScript puede rechazar `resolve(...)`.
En esos casos, tipa la ruta como literal o template literal.

```ts
type NavHref = '/' | '/#servicios' | '/precios' | '/proyectos';

type ProjectHref = `/proyectos/${string}`;
```

```svelte
<a href={resolve('/proyectos')}>Proyectos</a>
<a href={resolve(project.href)}>Ver proyecto</a>
```

> **Regla interna:** para rutas internas del proyecto, evita `href: string`; prefiere tipos literales como `'/' | '/precios'` o template literals como `` `/proyectos/${string}` ``.

#### 4.2 URLs externas literales sí suelen pasar sin problemas

Cuando la URL externa está definida de forma literal en el mismo archivo o dentro de un array `as const`, el linter suele reconocerla correctamente como externa.

```svelte
<a href="https://example.com" target="_blank" rel="external noopener noreferrer"> Externo </a>
```

```ts
const systems = [
  { href: 'https://example.com', label: 'Sistema externo' }
] as const;
```

#### 4.3 URLs externas dinámicas pueden dar falso positivo

Si una URL externa viene por props o por datos tipados como `string`, por ejemplo:

```ts
interface Assets {
  liveUrl?: string;
  repoUrl?: string;
}
```

el rule `svelte/no-navigation-without-resolve` puede marcarla incorrectamente como si fuera navegación interna, incluso usando `rel="external noopener noreferrer"`.

En ese caso, la estrategia recomendada es:

1. Mantener el enlace como `<a>` si semánticamente es un link externo.
2. Usar `rel="external noopener noreferrer"`.
3. Si el valor es opcional dentro de un `{#if ...}`, afirmar no-null con `!`.
4. Si el linter sigue fallando, desactivar **solo localmente** esa regla alrededor del bloque.

```svelte
<!-- eslint-disable svelte/no-navigation-without-resolve -->
{#if assets.liveUrl}
  <a
    href={assets.liveUrl!}
    target="_blank"
    rel="external noopener noreferrer"
  >
    Sitio en vivo
  </a>
{/if}
<!-- eslint-enable svelte/no-navigation-without-resolve -->
```

> **Regla interna:** desactiva `svelte/no-navigation-without-resolve` **solo** para enlaces externos dinámicos que el linter no pueda inferir correctamente. No lo uses para rutas internas.

#### 4.4 Si no quieres usar `eslint-disable`, usa navegación externa programática

En este proyecto comprobamos que hay casos donde ni el tipado como `ExternalUrl` ni `rel="external noopener noreferrer"` eliminan el falso positivo del linter cuando el `href` viene por props dinámicas.

Si no quieres usar comentarios `eslint-disable`, la alternativa más estable es **no renderizar un `<a href={...}>` dinámico**, sino usar un `<button>` que abra la URL externamente.

```svelte
<script lang="ts">
	function openExternal(url: string) {
		window.open(url, '_blank', 'noopener,noreferrer');
	}
</script>

{#if assets.liveUrl}
	<button
		type="button"
		onclick={() => openExternal(assets.liveUrl!)}
		aria-label="Visitar sitio web en vivo"
	>
		Sitio en vivo
	</button>
{/if}
```

> **Regla interna:** si un enlace externo dinámico sigue generando `Unexpected href link without resolve()` y no quieres usar `eslint-disable`, cambia ese caso puntual a navegación programática con `window.open(...)`.

---

## Resumen rápido

```svelte
<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<!-- ✅ Patrón correcto completo -->
{#each items as item (item.id)}
	<a href={resolve(item.url)} target="_blank" rel="noopener noreferrer">
		{item.label}
	</a>
{/each}

<!-- Anclas y URLs absolutas: sin resolve() -->
<a href="#contacto">Contacto</a>
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Externo</a>
```

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

## Resumen rápido

```svelte
<!-- ✅ Patrón correcto completo -->
{#each items as item (item.id)}
	<a href={item.url} target="_blank" rel="noopener noreferrer">
		{item.label}
	</a>
{/each}
```

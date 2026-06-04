# 💻 LOCAL-DEV — Desarrollo local paso a paso

> Cómo clonar, configurar y ejecutar Vanchi en tu máquina local.
> Tiempo estimado: **< 5 minutos**.

---

## Requisitos

| Herramienta | Versión mínima | Cómo verificar |
|-------------|---------------|----------------|
| [Bun](https://bun.sh/) | 1.3.x | `bun --version` |
| Git | Cualquier reciente | `git --version` |

---

## Pasos

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd Vanchi
```

### 2. Instalar dependencias

```bash
bun install
```

Esto instala todas las dependencias de `package.json`:
- **Dependencias:** `@lucide/svelte` (íconos)
- **DevDependencies:** SvelteKit, Tailwind v4, DaisyUI v5, TypeScript, ESLint, Prettier, Vite, etc.

### 3. Sincronizar SvelteKit

```bash
bun run prepare
```

Esto ejecuta `svelte-kit sync` para generar los tipos internos de SvelteKit.

### 4. Iniciar servidor de desarrollo

```bash
bun dev
```

Esto inicia Vite en modo desarrollo. Por defecto en `http://localhost:5173`.

Para abrir automáticamente en el navegador:

```bash
bun dev -- --open
```

### 5. Verificar que todo funciona

```bash
bun run check    # Type-check + lint
```

---

## Comandos útiles

```bash
bun dev                 # Servidor de desarrollo
bun build               # Build de producción
bun preview             # Previsualizar build localmente
bun run check           # Type-check (svelte-check)
bun run lint            # ESLint + Prettier check
bun run format          # Prettier --write
```

---

## Build de producción

```bash
bun run build
```

Esto genera la carpeta `.svelte-kit/output/` y `.vercel/` con el build listo para deploy.

Para previsualizarlo localmente:

```bash
bun run preview
```

---

## Notas

- El proyecto usa **engine-strict=true** en `.npmrc`, así que solo Bun puede usarse (no npm/pnpm/yarn).
- No es necesario tener Node.js instalado; Bun es suficiente.
- El build de producción usa el adapter de Vercel, por lo que genera artefactos específicos para ese entorno.

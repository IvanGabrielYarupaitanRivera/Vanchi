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

### 3. Iniciar backend Convex

```bash
npx convex dev
```

Esto:
- Te pide login en Convex (primera vez)
- Crea un proyecto en Convex Cloud
- Genera el folder `src/convex/_generated/` con tipos
- Inicia el backend local

### 4. Sincronizar SvelteKit

```bash
bun run prepare
```

### 5. Iniciar servidor de desarrollo

```bash
bun dev
```

Esto inicia Vite en modo desarrollo. Por defecto en `http://localhost:5173`.

### 6. Verificar que todo funciona

```bash
bun run check    # Type-check + lint
```

---

## Variables de entorno

El archivo `.env.local` se genera automáticamente al ejecutar `npx convex dev`.
Si no existe, créalo con:

```env
PUBLIC_CONVEX_URL=https://<tu-deployment>.convex.cloud
```

Para el panel admin, se debe configurar `ADMIN_PASSWORD` en Convex Dashboard:

```bash
npx convex env set ADMIN_PASSWORD 12345
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
npx convex dev          # Iniciar backend Convex local
npx convex deploy       # Desplegar funciones a producción
npx convex run <path> '<args>'  # Ejecutar función desde CLI
npx convex import       # Importar datos a tabla
npx convex export       # Exportar datos
```

---

## Build de producción

```bash
bun run build
```

---

## Notas

- El proyecto usa **engine-strict=true** en `.npmrc`, así que solo Bun puede usarse.
- No es necesario tener Node.js instalado.
- El build de producción usa el adapter de Vercel.

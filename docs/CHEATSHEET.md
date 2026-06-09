# ⚡ CHEATSHEET — Referencia rápida

> Comandos, helpers y convenciones del proyecto Vanchi en una sola página.

---

## 🧰 Comandos básicos

```bash
bun dev             # Iniciar servidor de desarrollo
bun build           # Build de producción
bun preview         # Previsualizar build localmente
bun run check       # Type-check + lint
bun run prepare     # Sincronizar SvelteKit (svelte-kit sync)
bun add <pkg>       # Instalar dependencia
bun remove <pkg>    # Eliminar dependencia
bunx <cmd>          # Ejecutar comando sin instalar
```

---

## 🐙 Git

```bash
git status                    # Ver estado del working tree
git add -A                    # Agregar todos los cambios
git commit -m "mensaje"       # Crear commit
git push origin main          # Subir cambios a main
git pull origin main          # Traer cambios remotos
git log --oneline             # Ver historial resumido
git diff                      # Ver cambios sin staged
git checkout -b feature/xxx   # Crear y cambiar a nueva rama
git branch                    # Listar ramas
git merge feature/xxx         # Fusionar rama a la actual
git stash                     # Guardar cambios temporalmente
git stash pop                 # Recuperar cambios guardados
```

> **Nota:** El proyecto usa `.prettierrc` y `.prettierignore`. Siempre ejecuta `bun run format` antes de commitear para mantener el estilo consistente.

---

## 🧪 Testing & calidad

```bash
bun run check        # SvelteKit sync + svelte-check
bun run lint         # Prettier + ESLint
bun run format       # Prettier --write
npx convex dev       # Iniciar backend Convex local
npx convex deploy    # Desplegar funciones Convex a producción
npx convex run       # Ejecutar función Convex desde CLI
npx convex import    # Importar datos a tabla Convex
npx convex export    # Exportar datos de Convex
```

---

## 🗂️ Estructura del proyecto

```
Vanchi/
├── src/
│   ├── lib/
│   │   ├── assets/       # Íconos, imágenes, SVGs
│   │   ├── components/   # Componentes Svelte reutilizables
│   │   │   ├── chat/     # Componentes del asistente IA v2
│   │   │   └── ...
│   │   └── server/       # Cliente Convex para SSR
│   ├── convex/           # Backend Convex (agentes, schema, entidades)
│   └── routes/           # Páginas y endpoints de SvelteKit
│       ├── +layout.svelte
│       ├── +page.svelte
│       ├── chat/         # Asistente IA v2
│       ├── admin/        # Login + CRUD protegido
│       ├── proyectos/
│       ├── precios/
│       └── ...
├── static/               # Archivos estáticos
├── docs/                 # 📚 Hub de documentación
├── tasks/                # 📋 Especificaciones activas / archivadas
├── .agents/              # Skills de IA para el agente pi
├── DESIGN.md             # Design system (source of truth visual)
├── package.json
├── svelte.config.js
├── vite.config.ts
└── vercel.json
```

---

## 🎨 Estilo rápido

> ⚠️ **Las reglas completas del stack están en [`00-GUIDE/STACK-PATTERNS.md`](./00-GUIDE/STACK-PATTERNS.md).**
> Aquí solo un recordatorio mínimo.

| Concepto    | Regla                                             |
| ----------- | ------------------------------------------------- |
| Colores     | Solo tokens DaisyUI (`base-100`, `primary`, etc.) |
| Breakpoint  | Solo `lg:` para escritorio                        |
| Layout      | Mobile-first, `max-w-5xl` a `max-w-6xl` centrado  |
| Animaciones | `transition-all duration-300 ease-out`            |

### Tipografía

| Uso       | Font             |
| --------- | ---------------- |
| Display   | Playfair Display |
| UI / body | Geist            |

---

## 🔍 SEO — Checklist rápido

### Meta tags esenciales

Cada página debe tener:

```html
<!-- SEO.svelte se encarga de esto -->
<title>Vanchi — Portafolio Profesional</title>
<meta
	name="description"
	content="Portafolio de Ivan Yarupaitan Rivera, desarrollador full-stack."
/>
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.vanchi.pro/ruta" />
```

### Rendimiento (Core Web Vitals)

- Imágenes en **WebP** optimizadas
- `@sveltejs/enhanced-img` para lazy loading automático
- Sin librerías JS pesadas
- Animaciones solo `transition-all duration-300 ease-out`

### Estructura

- Sitemap dinámico en `/sitemap.xml` (generado en build)
- Headers de seguridad desde `vercel.json` (HSTS, X-Frame-Options, etc.)
- URLs limpias (sin `.html`, sin query params)
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`)

---

## 🔗 Enlaces útiles

| Recurso                    | Ruta                             |
| -------------------------- | -------------------------------- |
| Documentación del proyecto | [`/docs/README.md`](./README.md) |
| Design System completo     | [`/DESIGN.md`](../DESIGN.md)     |
| Especificaciones activas   | [`/tasks/`](../tasks/)           |
| Aliados IA / Skills        | [`ALIADAS.md`](./ALIADAS.md)     |

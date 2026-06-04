# ⚡ CHEATSHEET — Referencia rápida

> Comandos, helpers y convenciones del proyecto Vanchi en una sola página.

---

## 🧰 Comandos básicos

```bash
bun dev             # Iniciar servidor de desarrollo
bun build           # Build de producción
bun preview         # Previsualizar build
bun run check       # Type-check + lint
bun add <pkg>       # Instalar dependencia
bun remove <pkg>    # Eliminar dependencia
bunx <cmd>          # Ejecutar comando sin instalar
```

---

## 🧪 Testing & calidad

```bash
bun run check        # SvelteKit sync + svelte-check
bun run lint         # Prettier + ESLint
bun run format       # Prettier --write
```

---

## 🗂️ Estructura del proyecto

```
Vanchi/
├── src/
│   ├── lib/
│   │   ├── assets/       # Íconos, imágenes, SVGs
│   │   └── components/   # Componentes Svelte reutilizables
│   └── routes/           # Páginas y endpoints de SvelteKit
│       ├── +layout.svelte
│       ├── +page.svelte
│       ├── proyectos/
│       ├── precios/
│       └── ...
├── static/               # Archivos estáticos
├── docs/                 # 📚 Hub de documentación
├── tasks/                # 📋 Especificaciones activas / archivadas
├── DESIGN.md             # Design system (source of truth visual)
├── package.json
├── svelte.config.js
├── vite.config.ts
└── vercel.json
```

---

## 🎨 Convenciones de estilo (Tailwind v4 + DaisyUI)

```css
/* Usar tokens DaisyUI, NO colores raw */
bg-base-100       /* Fondo carbón */
text-base-content /* Texto bone white */
text-primary      /* Dorado antiguo (solo acento) */
border-white/10   /* Bordes sutiles */
backdrop-blur-lg  /* Vidrio ahumado */
```

### Layout

- `mobile-first` siempre
- Solo `lg:` como breakpoint de escritorio
- Contenido centrado: `max-w-5xl` a `max-w-6xl`
- Hero: `min-h-[100dvh]`

### Animaciones

```css
transition-all duration-300 ease-out
hover:-translate-y-1
```

---

## 🖋️ Tipografía

| Uso                           | Font             |
| ----------------------------- | ---------------- |
| Display / títulos editoriales | Playfair Display |
| UI / body / nav / botones     | Geist            |

---

## 🔗 Enlaces útiles

| Recurso                    | Ruta                             |
| -------------------------- | -------------------------------- |
| Documentación del proyecto | [`/docs/README.md`](./README.md) |
| Design System completo     | [`/DESIGN.md`](../DESIGN.md)     |
| Especificaciones activas   | [`/tasks/`](../tasks/)           |
| Aliados IA / Skills        | [`ALIADAS.md`](./ALIADAS.md)     |

# 📌 CONTEXT — Contexto del proyecto

> **⬅️ LECTURA OBLIGATORIA — LEER PRIMERO ANTES DE CUALQUIER TAREA**

---

## 🆔 Identidad

**Vanchi** es un portafolio web profesional de **Ivan Yarupaitan Rivera**, desarrollador full-stack y consultor tecnológico. El sitio funciona como carta de presentación, vitrina de proyectos y canal de contacto.

---

## 🧱 Stack tecnológico

| Capa                 | Tecnología               | Versión               |
| -------------------- | ------------------------ | --------------------- |
| Framework            | SvelteKit                | 2.x                   |
| Lenguaje             | TypeScript               | 5.x                   |
| UI runtime           | Svelte                   | 5.x (runes, snippets) |
| Estilos              | Tailwind CSS             | v4                    |
| Componentes UI       | DaisyUI                  | v5                    |
| Íconos               | Lucide Svelte            | 0.577.x               |
| Runtime              | Bun                      | 1.3.x                 |
| Backend IA           | Convex + @convex-dev/agent | v0.6+               |
| LLM Gateway          | Vercel AI Gateway        | —                     |
| Modelo LLM           | inception/mercury-2       | —                     |
| Hosting Frontend     | Vercel                   | Adapter               |
| Hosting Backend      | Convex Cloud             | —                     |
| Imágenes optimizadas | `@sveltejs/enhanced-img` | —                     |

---

## 📁 Estructura del proyecto

```
Vanchi/
├── src/
│   ├── lib/
│   │   ├── assets/
│   │   │   ├── icons/          # SVGs: network, technologies, logos
│   │   │   └── images/         # WebP (hero, projects, pricing, etc.)
│   │   └── components/
│   │       ├── Header.svelte   # Navegación principal
│   │       ├── Footer.svelte   # Footer del sitio
│   │       ├── home/           # Componentes de la landing page
│   │       ├── proyectos/      # Componentes de proyectos
│   │       └── precios/        # Componentes de precios
│   └── routes/
│       ├── +layout.svelte      # Layout raíz (Convex setup)
│       ├── +error.svelte       # Error 404/500
│       ├── layout.css          # Tokens CSS globales
│       ├── (main)/             # Grupo: Portfolio + Admin (Header + Footer)
│       │   ├── +layout.svelte  # Header + CommandBar + Footer
│       │   ├── +page.svelte    # Home
│       │   ├── proyectos/      # Listado + detalle dinámico
│       │   ├── precios/        # Modelos de colaboración
│       │   ├── soluciones-legales/
│       │   ├── waas/
│       │   ├── admin/
│       │   │   ├── login/      # Login administrativo
│       │   │   └── (protegido)/# Guard de sesión
│       │   │       └── documentos/  # CRUD de documentos
│       │   └── ...             # Políticas, sitemap, páginas estáticas
│       └── (chat)/             # Grupo: Asistente IA (sin Header/Footer)
│           └── chat/
│               ├── +layout.svelte   # Layout aislado (h-[100dvh])
│               └── +page.svelte     # Chat completo
├── static/                     # Archivos estáticos (favicon, etc.)
├── docs/                       # 📚 Hub de documentación (estás aquí)
├── tasks/                      # 📋 Especificaciones activas / archivadas
├── DESIGN.md                   # Design system (source of truth visual)
├── package.json
├── svelte.config.js
├── vite.config.ts
├── vercel.json
└── tsconfig.json
```

---

## 🎨 Identidad visual (resumen)

| Token              | Valor                 | Uso                            |
| ------------------ | --------------------- | ------------------------------ |
| `base-100`         | `oklch(15% 0.005 85)` | Fondo carbón                   |
| `base-content`     | `oklch(92% 0.005 90)` | Texto bone white               |
| `primary`          | `oklch(74% 0.14 85)`  | Dorado antiguo (único acento)  |
| Tipografía UI      | Geist                 | Body, nav, botones             |
| Tipografía display | Playfair Display      | Títulos editoriales selectivos |

> **Fuente de verdad completa:** [`/DESIGN.md`](../../DESIGN.md) en la raíz.

---

## 🚦 Estado actual del proyecto

El proyecto está **en producción activa**, desplegado en Vercel. Las páginas principales (home, proyectos, precios, legales) ya están construidas. La documentación (`docs/`) está completa con estructura de hub documental. Cada carpeta sigue una numeración por prioridad de lectura y todas están interconectadas mediante enlaces relativos y mapas de relaciones.

---

## 🔗 Enlaces de navegación

| Si necesitas…                 | Ve a…                                                 |
| ----------------------------- | ----------------------------------------------------- |
| Entender el proyecto          | Este documento ✅                                     |
| Arrancar rápido como agente   | [`/docs/AGENT-QUICKSTART.md`](../AGENT-QUICKSTART.md) |
| Saber qué leer según tu tarea | [`NAVIGATION.md`](./NAVIGATION.md)                    |
| El ciclo de trabajo           | [`WORKFLOW.md`](./WORKFLOW.md)                        |
| Reglas del stack              | [`STACK-PATTERNS.md`](./STACK-PATTERNS.md)            |
| Comandos rápidos              | [`/docs/CHEATSHEET.md`](../CHEATSHEET.md)             |
| Skills / aliados IA           | [`/docs/ALIADAS.md`](../ALIADAS.md)                   |
| Historial de cambios          | [`/docs/CHANGELOG.md`](../CHANGELOG.md)               |
| Design system completo        | [`/DESIGN.md`](../../DESIGN.md)                       |
| Especificaciones archivadas   | [`/tasks/archived/`](../../tasks/archived/)           |

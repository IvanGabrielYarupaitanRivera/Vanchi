# 🎨 02-FRONTEND — Frontend

> Documentación de las rutas, componentes y patrones UI del frontend de Vanchi.

---

## 🧱 Stack del frontend

| Capa | Tecnología |
|------|------------|
| Framework | SvelteKit 2 |
| UI runtime | Svelte 5 (runes) |
| Estilos | Tailwind CSS v4 + DaisyUI v5 |
| Íconos | Lucide Svelte |
| Imágenes | `@sveltejs/enhanced-img` |

---

## 📄 Rutas existentes

| Ruta | Archivo | Descripción |
|------|---------|-------------|
| `/` | `+page.svelte` | Home / Landing page |
| `/chat` | `(chat)/chat/+page.svelte` | Asistente IA v2 (agente minimalista) |
| `/admin/login` | `(main)/admin/login/+page.svelte` | Login administrativo |
| `/admin/documentos` | `(main)/admin/(protegido)/documentos/+page.svelte` | CRUD de documentos |
| `/admin/documentos/crear` | `(main)/admin/(protegido)/documentos/crear/+page.svelte` | Crear documento |
| `/admin/documentos/[id]` | `(main)/admin/(protegido)/documentos/[id]/+page.svelte` | Editar documento |
| `/proyectos` | `(main)/proyectos/+page.svelte` | Listado de proyectos |
| `/proyectos/[projectId]` | `(main)/proyectos/[projectId]/+page.svelte` | Detalle dinámico de proyecto |
| `/precios` | `(main)/precios/+page.svelte` | Modelos de colaboración y precios |
| `/soluciones-legales` | `(main)/soluciones-legales/+page.svelte` | Servicios legales tech |
| `/waas` | `(main)/waas/+page.svelte` | WhatsApp as a Service |
| `/ivan-yarupaitan-rivera` | `(main)/ivan-yarupaitan-rivera/+page.svelte` | Página personal del autor |
| `/politica-de-privacidad` | `(main)/politica-de-privacidad/+page.svelte` | Política de privacidad |
| `/condiciones-del-servicio` | `(main)/condiciones-del-servicio/+page.svelte` | Términos y condiciones |
| `/eliminacion-de-datos-de-usuario` | `(main)/eliminacion-de-datos-de-usuario/+page.svelte` | Eliminación de datos |
| `/sitemap.xml` | `(main)/sitemap.xml/+server.ts` | Sitemap dinámico (server endpoint) |

### Layouts (Route Groups)

Los layouts usan **route groups** de SvelteKit (carpetas entre paréntesis, invisibles en la URL):

| Archivo | Propósito |
|---------|-----------|
| `+layout.svelte` (raíz) | Layout raíz: solo inicializa Convex. Renderiza `{@render children()}` |
| `(main)/+layout.svelte` | Portfolio + Admin: Header, CommandBar, Footer, `min-h-dvh flex-col` |
| `(chat)/chat/+layout.svelte` | Asistente IA: `fixed inset-x-0 top-0 h-[100dvh]`, sin Header/Footer, maneja teclado móvil con `visualViewport` API |
| `+error.svelte` | Página de error personalizada |
| `layout.css` | Tokens CSS globales del design system |

---

## 🧩 Componentes globales

| Componente | Ruta | Propósito |
|------------|------|-----------|
| `Header.svelte` | `lib/components/` | Navegación principal |
| `Footer.svelte` | `lib/components/` | Footer del sitio |
| `SEO.svelte` | `lib/components/` | Meta tags y SEO head |

---

## 🏠 Componentes del Home

| Componente | Ruta | Propósito |
|------------|------|-----------|
| `Hero.svelte` | `lib/components/home/` | Hero principal con imagen de fondo |
| `Me.svelte` | `lib/components/home/` | Sección "Sobre mí" |
| `AboutMe.svelte` | `lib/components/home/` | Detalle extendido del autor |
| `Services.svelte` | `lib/components/home/` | Servicios ofrecidos |
| `CardService.svelte` | `lib/components/home/` | Tarjeta individual de servicio |
| `FeaturedProjects.svelte` | `lib/components/home/` | Proyectos destacados |
| `CardProject.svelte` | `lib/components/home/` | Tarjeta individual de proyecto |
| `Marquee.svelte` | `lib/components/home/` | Carrusel / marquee de logos |
| `SocialProof.svelte` | `lib/components/home/` | Prueba social (logros, clientes) |
| `WhatsappContact.svelte` | `lib/components/home/` | Botón / sección de contacto WhatsApp |

---

## 📁 Componentes de Proyectos

### Listado (`lib/components/projects/`)

| Componente | Propósito |
|------------|-----------|
| `Hero.svelte` | Hero de la página de proyectos |
| `OurProjects.svelte` | Grid de proyectos |
| `CardProject.svelte` | Tarjeta de proyecto en el grid |
| `ProjectsFilter.svelte` | Filtros de proyectos |
| `StatsProjects.svelte` | Estadísticas de proyectos |

### Detalle (`lib/components/projects/project/`)

| Componente | Propósito |
|------------|-----------|
| `Hero.svelte` | Hero del detalle de proyecto |
| `Context.svelte` | Contexto del proyecto |
| `Role.svelte` | Rol del autor en el proyecto |
| `Solution.svelte` | Solución técnica implementada |
| `UI.svelte` | Diseño UI / UX del proyecto |
| `Tech.svelte` | Tecnologías utilizadas |
| `Research.svelte` | Investigación previa |
| `Results.svelte` | Resultados e impacto |
| `Assets.svelte` | Assets visuales del proyecto |

---

## 💰 Componentes de Precios

| Componente | Ruta | Propósito |
|------------|------|-----------|
| `CollaborationModels.svelte` | `lib/components/precios/` | Modelos de colaboración |

---

## ⚖️ Componentes de Soluciones Legales

| Componente | Ruta | Propósito |
|------------|------|-----------|
| `Hero.svelte` | `lib/components/soluciones-legales/` | Hero de la página |
| `ComparisonSection.svelte` | `lib/components/soluciones-legales/` | Comparativa antes/después |
| `PhaseBentoGrid.svelte` | `lib/components/soluciones-legales/` | Grid bento de fases |
| `PhaseDetails.svelte` | `lib/components/soluciones-legales/` | Detalle de cada fase |
| `SecurityBlock.svelte` | `lib/components/soluciones-legales/` | Bloque de seguridad |
| `FaqSection.svelte` | `lib/components/soluciones-legales/` | Sección de FAQ |
| `TrustAndFaq.svelte` | `lib/components/soluciones-legales/` | Confianza + FAQ combinados |

---

## 🧭 Patrones de UI

### Layout de página estándar

```svelte
<script lang="ts">
	// Runes mode
	let { ... } = $props();
</script>

<div class="bg-base-100">
	<div class="mx-auto max-w-5xl">
		<!-- contenido -->
	</div>
</div>
```

### Navegación

- `Header.svelte` se renderiza en `+layout.svelte`
- Nav pill con vidrio ahumado en desktop
- Menú responsive que colapsa en mobile

### SEO

- `SEO.svelte` es un componente que se usa en cada página para inyectar meta tags
- Sitemap generado dinámicamente en `sitemap.xml/+server.ts`

---

## 🎨 Design System

El proyecto usa el design system definido en [`/DESIGN.md`](../../DESIGN.md) en la raíz del proyecto.

Para consulta rápida de tokens:

| Token | Valor | Uso |
|-------|-------|-----|
| `base-100` | `oklch(15% 0.005 85)` | Fondo carbón |
| `base-content` | `oklch(92% 0.005 90)` | Texto bone white |
| `primary` | `oklch(74% 0.14 85)` | Dorado antiguo (único acento) |
| Tipografía UI | Geist | Body, nav, botones |
| Tipografía display | Playfair Display | Títulos editoriales |

> 📖 **Documentación completa:** [`/docs/07-DESIGN/README.md`](../07-DESIGN/README.md) y [`/DESIGN.md`](../../DESIGN.md).

---

## 📎 Nota sobre la numeración

No existe `03-BACKEND` porque Vanchi no tiene un backend tradicional separado. El backend de IA y base de datos vive en **Convex** (`src/convex/`) como parte del mismo repositorio. El salto de `02-FRONTEND` a `04-ARCHITECTURE` es intencional para mantener consistencia con el framework numerado del hub.

---

## 🔗 Relaciones con otras carpetas

| Documento relacionado | ¿Por qué? |
|-----------------------|-----------|
| [`00-GUIDE/STACK-PATTERNS.md`](../00-GUIDE/STACK-PATTERNS.md) | Reglas que el frontend debe seguir |
| [`07-DESIGN/README.md`](../07-DESIGN/README.md) | Tokens visuales que los componentes usan |
| [`04-ARCHITECTURE/DATA-FLOW.md`](../04-ARCHITECTURE/DATA-FLOW.md) | Cómo fluyen los datos a los componentes |
| [`04-ARCHITECTURE/OVERVIEW.md`](../04-ARCHITECTURE/OVERVIEW.md) | Diagrama general del sistema |

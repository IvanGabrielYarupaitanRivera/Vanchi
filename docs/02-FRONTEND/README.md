# 02-FRONTEND — Frontend

> Documentacion de las rutas, componentes y patrones UI del frontend de Vanchi.

---

## Stack del frontend

| Capa | Tecnologia |
|------|------------|
| Framework | SvelteKit 2 |
| UI runtime | Svelte 5 (runes) |
| Estilos | Tailwind CSS v4 + DaisyUI v5 |
| Iconos | Lucide Svelte |
| Imagenes | `@sveltejs/enhanced-img` |

---

## Rutas existentes

| Ruta | Archivo | Descripcion |
|------|---------|-------------|
| `/` | `(main)/+page.svelte` | Home / Landing page |
| `/chat` | `(chat)/chat/+page.svelte` | Asistente IA v2 (agente minimalista) |
| `/admin/login` | `(main)/admin/login/+page.svelte` | Login administrativo |
| `/admin/documentos` | `(main)/admin/(protegido)/documentos/+page.svelte` | CRUD de documentos |
| `/admin/documentos/crear` | `(main)/admin/(protegido)/documentos/crear/+page.svelte` | Crear documento |
| `/admin/documentos/[id]` | `(main)/admin/(protegido)/documentos/[id]/+page.svelte` | Editar documento |
| `/proyectos` | `(main)/proyectos/+page.svelte` | Listado de proyectos |
| `/proyectos/[projectId]` | `(main)/proyectos/[projectId]/+page.svelte` | Detalle dinamico de proyecto |
| `/precios` | `(main)/precios/+page.svelte` | Modelos de colaboracion y precios |
| `/soluciones-legales` | `(main)/soluciones-legales/+page.svelte` | Servicios legales tech |
| `/waas` | `(main)/waas/+page.svelte` | WhatsApp as a Service |
| `/ivan-yarupaitan-rivera` | `(main)/ivan-yarupaitan-rivera/+page.svelte` | Pagina personal del autor |
| `/politica-de-privacidad` | `(main)/politica-de-privacidad/+page.svelte` | Politica de privacidad |
| `/condiciones-del-servicio` | `(main)/condiciones-del-servicio/+page.svelte` | Terminos y condiciones |
| `/eliminacion-de-datos-de-usuario` | `(main)/eliminacion-de-datos-de-usuario/+page.svelte` | Eliminacion de datos |
| `/sitemap.xml` | `(main)/sitemap.xml/+server.ts` | Sitemap dinamico (server endpoint) |
| `/llms.txt` | `static/llms.txt` | Mapa GEO para crawlers de IA |
| `/llms-full.txt` | `static/llms-full.txt` | Contenido completo de conocimiento |

### Layouts (Route Groups)

Los layouts usan **route groups** de SvelteKit (carpetas entre parentesis, invisibles en la URL):

| Archivo | Proposito |
|---------|-----------|
| `+layout.svelte` (raiz) | Layout raiz: solo inicializa Convex. Renderiza `{@render children()}` |
| `(main)/+layout.svelte` | Portfolio + Admin: Header, CommandBar, Footer, `min-h-dvh flex-col` |
| `(chat)/chat/+layout.svelte` | Asistente IA: `fixed inset-x-0 top-0 h-[100dvh]`, sin Header/Footer, maneja teclado movil |
| `+error.svelte` | Pagina de error personalizada |
| `layout.css` | Tokens CSS globales del design system |

---

## Componentes globales

| Componente | Ruta | Proposito |
|------------|------|-----------|
| `Header.svelte` | `lib/components/` | Navegacion principal |
| `Footer.svelte` | `lib/components/` | Footer del sitio |
| `SEO.svelte` | `lib/components/` | Meta tags y SEO head |

---

## Componentes del Home

| Componente | Ruta | Proposito |
|------------|------|-----------|
| `Hero.svelte` | `lib/components/home/` | Hero principal con imagen de fondo |
| `Me.svelte` | `lib/components/home/` | Seccion "Sobre mi" |
| `AboutMe.svelte` | `lib/components/home/` | Detalle extendido del autor |
| `Services.svelte` | `lib/components/home/` | Servicios ofrecidos |
| `CardService.svelte` | `lib/components/home/` | Tarjeta individual de servicio |
| `FeaturedProjects.svelte` | `lib/components/home/` | Proyectos destacados |
| `CardProject.svelte` | `lib/components/home/` | Tarjeta individual de proyecto |
| `Marquee.svelte` | `lib/components/home/` | Carrusel / marquee de logos |
| `SocialProof.svelte` | `lib/components/home/` | Prueba social (logros, clientes) |
| `WhatsappContact.svelte` | `lib/components/home/` | Boton / seccion de contacto WhatsApp |

---

## Componentes de Proyectos

### Listado (`lib/components/projects/`)

| Componente | Proposito |
|------------|-----------|
| `Hero.svelte` | Hero de la pagina de proyectos |
| `OurProjects.svelte` | Grid de proyectos |
| `CardProject.svelte` | Tarjeta de proyecto en el grid |
| `StatsProjects.svelte` | Estadisticas de proyectos |

### Detalle (`lib/components/projects/project/`)

| Componente | Proposito |
|------------|-----------|
| `Hero.svelte` | Hero del detalle de proyecto |
| `Context.svelte` | Contexto del proyecto |
| `Role.svelte` | Rol del autor en el proyecto |
| `Solution.svelte` | Solucion tecnica implementada |
| `UI.svelte` | Diseno UI / UX del proyecto |
| `Tech.svelte` | Tecnologias utilizadas |
| `Research.svelte` | Investigacion previa |
| `Results.svelte` | Resultados e impacto |
| `Assets.svelte` | Assets visuales del proyecto |

---

## Componentes de Precios

| Componente | Ruta | Proposito |
|------------|------|-----------|
| `CollaborationModels.svelte` | `lib/components/precios/` | Modelos de colaboracion |

---

## Componentes de Soluciones Legales

| Componente | Ruta | Proposito |
|------------|------|-----------|
| `Hero.svelte` | `lib/components/soluciones-legales/` | Hero de la pagina |
| `ComparisonSection.svelte` | `lib/components/soluciones-legales/` | Comparativa antes/despues |
| `PhaseBentoGrid.svelte` | `lib/components/soluciones-legales/` | Grid bento de fases |
| `PhaseDetails.svelte` | `lib/components/soluciones-legales/` | Detalle de cada fase |
| `SecurityBlock.svelte` | `lib/components/soluciones-legales/` | Bloque de seguridad |
| `FaqSection.svelte` | `lib/components/soluciones-legales/` | Seccion de FAQ |
| `TrustAndFaq.svelte` | `lib/components/soluciones-legales/` | Confianza + FAQ combinados |

---

## Patrones de UI

### Layout de pagina estandar

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

### Navegacion

- `Header.svelte` se renderiza en `+layout.svelte`
- Nav pill con vidrio ahumado en desktop
- Menu responsive que colapsa en mobile

### SEO

- `SEO.svelte` es un componente que se usa en cada pagina para inyectar meta tags
- Sitemap generado dinamicamente en `sitemap.xml/+server.ts`

---

## Design System

El proyecto usa el design system definido en [`/DESIGN.md`](../../DESIGN.md) en la raiz del proyecto.

Para consulta rapida de tokens:

| Token | Valor | Uso |
|-------|-------|-----|
| `base-100` | `oklch(15% 0.005 85)` | Fondo carbon |
| `base-content` | `oklch(92% 0.005 90)` | Texto bone white |
| `primary` | `oklch(74% 0.14 85)` | Dorado antiguo (unico acento) |
| Tipografia UI | Geist | Body, nav, botones |
| Tipografia display | Playfair Display | Titulos editoriales |

> Documentacion completa: [`07-DESIGN/README.md`](../07-DESIGN/README.md) y [`/DESIGN.md`](../../DESIGN.md).

---

## Nota sobre la numeracion

No existe `03-BACKEND` porque Vanchi no tiene un backend tradicional separado. El backend de IA y base de datos vive en **Convex** (`src/convex/`) como parte del mismo repositorio. El salto de `02-FRONTEND` a `04-ARCHITECTURE` es intencional para mantener consistencia con el framework numerado del hub.

---

## Relaciones con otras carpetas

| Documento relacionado | Por que? |
|-----------------------|----------|
| [`00-GUIDE/STACK-PATTERNS.md`](../00-GUIDE/STACK-PATTERNS.md) | Reglas que el frontend debe seguir |
| [`07-DESIGN/README.md`](../07-DESIGN/README.md) | Tokens visuales que los componentes usan |
| [`04-ARCHITECTURE/DATA-FLOW.md`](../04-ARCHITECTURE/DATA-FLOW.md) | Como fluyen los datos a los componentes |
| [`04-ARCHITECTURE/OVERVIEW.md`](../04-ARCHITECTURE/OVERVIEW.md) | Diagrama general del sistema |

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
| `/proyectos` | `proyectos/+page.svelte` | Listado de proyectos |
| `/proyectos/[projectId]` | `proyectos/[projectId]/+page.svelte` | Detalle dinámico de proyecto |
| `/precios` | `precios/+page.svelte` | Modelos de colaboración y precios |
| `/soluciones-legales` | `soluciones-legales/+page.svelte` | Servicios legales tech |
| `/waas` | `waas/+page.svelte` | WhatsApp as a Service |
| `/ivan-yarupaitan-rivera` | `ivan-yarupaitan-rivera/+page.svelte` | Página personal del autor |
| `/politica-de-privacidad` | `politica-de-privacidad/+page.svelte` | Política de privacidad |
| `/condiciones-del-servicio` | `condiciones-del-servicio/+page.svelte` | Términos y condiciones |
| `/eliminacion-de-datos-de-usuario` | `eliminacion-de-datos-de-usuario/+page.svelte` | Eliminación de datos |
| `/sitemap.xml` | `sitemap.xml/+server.ts` | Sitemap dinámico (server endpoint) |

### Layouts globales

| Archivo | Propósito |
|---------|-----------|
| `+layout.svelte` | Layout global (Header + Footer + SEO) |
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

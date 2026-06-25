# 02-FRONTEND — Frontend

> Documentacion de las rutas, componentes y patrones UI del frontend de Vanchi.

---

## Stack del frontend

| Capa                 | Tecnologia                                         |
| -------------------- | -------------------------------------------------- |
| Framework            | SvelteKit 2                                        |
| UI runtime           | Svelte 5 (runes)                                   |
| Estilos              | Tailwind CSS v4 + DaisyUI v5                       |
| UI Component Library | `src/lib/components/ui/` (Dual-Layer Architecture) |
| Iconos               | Lucide Svelte                                      |
| Imagenes             | `@sveltejs/enhanced-img`                           |

---

## Rutas existentes

| Ruta                               | Archivo                                                  | Descripcion                          |
| ---------------------------------- | -------------------------------------------------------- | ------------------------------------ |
| `/`                                | `(main)/+page.svelte`                                    | Home / Landing page                  |
| `/chat`                            | `(chat)/chat/+page.svelte`                               | Asistente IA v2 (agente minimalista) |
| `/admin/login`                     | `(main)/admin/login/+page.svelte`                        | Login administrativo                 |
| `/admin/documentos`                | `(main)/admin/(protegido)/documentos/+page.svelte`       | CRUD de documentos                   |
| `/admin/documentos/crear`          | `(main)/admin/(protegido)/documentos/crear/+page.svelte` | Crear documento                      |
| `/admin/documentos/[id]`           | `(main)/admin/(protegido)/documentos/[id]/+page.svelte`  | Editar documento                     |
| `/proyectos`                       | `(main)/proyectos/+page.svelte`                          | Listado de proyectos                 |
| `/proyectos/[projectId]`           | `(main)/proyectos/[projectId]/+page.svelte`              | Detalle dinamico de proyecto         |
| `/servicios`                       | `(main)/servicios/+page.svelte`                          | Listado de servicios                 |
| `/servicios/agentes-ia`            | `(main)/servicios/agentes-ia/+page.svelte`               | Servicio de Agentes IA               |
| `/servicios/automatizacion`        | `(main)/servicios/automatizacion/+page.svelte`           | Servicio de Automatizacion           |
| `/servicios/consultoria`           | `(main)/servicios/consultoria/+page.svelte`              | Servicio de Consultoria              |
| `/sectores`                        | `(main)/sectores/+page.svelte`                           | Listado de sectores                  |
| `/sectores/[sector]`               | `(main)/sectores/[sector]/+page.svelte`                  | Detalle dinamico de sector           |
| `/sectores/educacion`              | `(main)/sectores/educacion/+page.svelte`                 | Sector Educacion                     |
| `/sectores/legal`                  | `(main)/sectores/legal/+page.svelte`                     | Sector Legal                         |
| `/sectores/salud`                  | `(main)/sectores/salud/+page.svelte`                     | Sector Salud                         |
| `/precios`                         | `(main)/precios/+page.svelte`                            | Modelos de colaboracion y precios    |
| `/soluciones-legales`              | `(main)/soluciones-legales/+page.svelte`                 | Servicios legales tech               |
| `/metodologia`                     | `(main)/metodologia/+page.svelte`                        | Metodologia GaaS                     |
| `/contacto`                        | `(main)/contacto/+page.svelte`                           | Contacto y canales                   |
| `/ivan-yarupaitan-rivera`          | `(main)/ivan-yarupaitan-rivera/+page.svelte`             | Pagina personal del autor            |
| `/dev`                             | `(main)/dev/+page.svelte`                                | Dev index: UI component labs         |
| `/dev/heroes`                      | `(main)/dev/heroes/+page.svelte`                         | Hero X1 definitive                   |
| `/dev/system-status`               | `(main)/dev/system-status/+page.svelte`                  | SystemStatus S6 definitive           |
| `/dev/command-action`              | `(main)/dev/command-action/+page.svelte`                 | CommandAction winning variants       |
| `/politica-de-privacidad`          | `(main)/politica-de-privacidad/+page.svelte`             | Politica de privacidad               |
| `/condiciones-del-servicio`        | `(main)/condiciones-del-servicio/+page.svelte`           | Terminos y condiciones               |
| `/eliminacion-de-datos-de-usuario` | `(main)/eliminacion-de-datos-de-usuario/+page.svelte`    | Eliminacion de datos                 |
| `/sitemap.xml`                     | `(main)/sitemap.xml/+server.ts`                          | Sitemap dinamico (server endpoint)   |
| `/llms.txt`                        | `static/llms.txt`                                        | Mapa GEO para crawlers de IA         |
| `/llms-full.txt`                   | `static/llms-full.txt`                                   | Contenido completo de conocimiento   |

### Layouts (Route Groups)

Los layouts usan **route groups** de SvelteKit (carpetas entre parentesis, invisibles en la URL):

| Archivo                      | Proposito                                                                                 |
| ---------------------------- | ----------------------------------------------------------------------------------------- |
| `+layout.svelte` (raiz)      | Layout raiz: solo inicializa Convex. Renderiza `{@render children()}`                     |
| `(main)/+layout.svelte`      | Portfolio + Admin: Header, CommandBar, Footer, `min-h-dvh flex-col`                       |
| `(chat)/chat/+layout.svelte` | Asistente IA: `fixed inset-x-0 top-0 h-[100dvh]`, sin Header/Footer, maneja teclado movil |
| `+error.svelte`              | Pagina de error personalizada                                                             |
| `layout.css`                 | Tokens CSS globales del design system                                                     |

---

## Componentes globales

| Componente      | Ruta              | Proposito                                       |
| --------------- | ----------------- | ----------------------------------------------- |
| `Header.svelte` | `lib/components/` | Navegacion principal (Gemini editorial rewrite) |
| `Footer.svelte` | `lib/components/` | Footer del sitio (Gemini editorial rewrite)     |
| `SEO.svelte`    | `lib/components/` | Meta tags y SEO head                            |

---

## UI Component Library (`src/lib/components/ui/`)

Componentes reutilizables del sistema de diseno, bajo el esquema **Dual-Layer Component Architecture**: cada componente en su propia carpeta con un `.agent.md` que documenta anti-patrones para el agente IA.

| Componente             | Ruta                               | Props principales                                                                                                   | Niveles / Variants                         |
| ---------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `Hero.svelte`          | `lib/components/ui/Hero/`          | `level`, `title`, `subtitle`, `italic_word`, `action_label`, `action_onclick`, `status_active`, `image`, `children` | primary, secondary, profile, tertiary      |
| `SystemStatus.svelte`  | `lib/components/ui/SystemStatus/`  | `status`, `label`                                                                                                   | active, idle, error                        |
| `CommandAction.svelte` | `lib/components/ui/CommandAction/` | `level`, `label`, `href` (link), `onclick` (button), `icon`, `target`, `rel`. Auto-detect externos                  | primary, outline-primary, ghost, secondary |
| `DataBlock.svelte`     | `lib/components/ui/DataBlock/`     | `level`, `padding`, `hover`, `children`                                                                             | default, compact, elevated                 |
| `SectionLayout.svelte` | `lib/components/ui/SectionLayout/` | `variant`, `number`, `label`, `title`, `italic_word`, `description`, `children`, `children_left`                    | primary (grid 5/7), secondary (1 columna)  |

### Reglas de la UI Component Library

- **Importar**, nunca reescribir el componente
- Cada componente tiene `.agent.md` con ejemplos y anti-patrones
- Usar snippets (`{#snippet children()}`) para contenido flexible
- `action_onclick` callback para navegacion (con `goto(resolve(...))`)
- Solo tokens DaisyUI para colores

---

## Componentes del Home

| Componente                | Ruta                   | Proposito                                     | Componentes UI que usa    |
| ------------------------- | ---------------------- | --------------------------------------------- | ------------------------- |
| `Hero`                    | —                      | Usa `ui/Hero/` directamente en `+page.svelte` | Hero (primary)            |
| `SocialProof.svelte`      | `lib/components/home/` | Prueba social (logros, clientes)              | SectionLayout + DataBlock |
| `FeaturedProjects.svelte` | `lib/components/home/` | Proyectos destacados                          | SectionLayout + DataBlock |
| `Services.svelte`         | `lib/components/home/` | Servicios ofrecidos                           | SectionLayout + DataBlock |
| `AboutMe.svelte`          | `lib/components/home/` | Seccion "Sobre mi"                            | SectionLayout + DataBlock |
| `WhatsappContact.svelte`  | `lib/components/home/` | Seccion de contacto WhatsApp                  | SectionLayout + DataBlock |
| `Marquee.svelte`          | `lib/components/home/` | Carrusel / marquee de logos                   | —                         |

---

## Componentes de Proyectos

### Listado (`lib/components/proyectos/`)

| Componente      | Proposito                     |
| --------------- | ----------------------------- |
| `Body.svelte`   | Cuerpo de la pagina proyectos |
| `Footer.svelte` | Footer de la pagina proyectos |

### Detalle (`lib/components/proyectos/project/`)

| Componente        | Proposito                     |
| ----------------- | ----------------------------- |
| `Context.svelte`  | Contexto del proyecto         |
| `Role.svelte`     | Rol del autor en el proyecto  |
| `Solution.svelte` | Solucion tecnica implementada |
| `UI.svelte`       | Diseno UI / UX del proyecto   |
| `Tech.svelte`     | Tecnologias utilizadas        |
| `Research.svelte` | Investigacion previa          |
| `Results.svelte`  | Resultados e impacto          |
| `Assets.svelte`   | Assets visuales del proyecto  |

> **Nota:** El Hero del detalle fue migrado a `ui/Hero/` con `level="secondary"` + children snippet. El Hero legacy fue eliminado.

---

## Componentes de Servicios

| Componente            | Ruta                                                                      | Proposito                                          |
| --------------------- | ------------------------------------------------------------------------- | -------------------------------------------------- |
| `ServiceCards.svelte` | `lib/components/servicios/`                                               | Grid de servicios                                  |
| `Footer.svelte`       | `lib/components/servicios/`                                               | Footer de servicios                                |
| `Hero.svelte`         | `lib/components/servicios/agentes-ia/`, `automatizacion/`, `consultoria/` | Heroes legados de subrutas (migrados a `ui/Hero/`) |

---

## Componentes de Sectores

| Componente           | Ruta                                                     | Proposito                                          |
| -------------------- | -------------------------------------------------------- | -------------------------------------------------- |
| `SectorCards.svelte` | `lib/components/sectores/`                               | Grid de sectores                                   |
| `Footer.svelte`      | `lib/components/sectores/`                               | Footer de sectores                                 |
| `Hero.svelte`        | `lib/components/sectores/educacion/`, `legal/`, `salud/` | Heroes legados de subrutas (migrados a `ui/Hero/`) |

---

## Componentes de Precios

| Componente            | Ruta                      | Proposito            |
| --------------------- | ------------------------- | -------------------- |
| `EntryPlan.svelte`    | `lib/components/precios/` | Plan de entrada      |
| `Faq.svelte`          | `lib/components/precios/` | Preguntas frecuentes |
| `PaymentModel.svelte` | `lib/components/precios/` | Modelo de pago       |
| `PriceSheet.svelte`   | `lib/components/precios/` | Tabla de precios     |
| `Footer.svelte`       | `lib/components/precios/` | Footer de precios    |

---

## Componentes de Contacto

| Componente            | Ruta                       | Proposito                |
| --------------------- | -------------------------- | ------------------------ |
| `Canales.svelte`      | `lib/components/contacto/` | Canales de contacto      |
| `Expectativas.svelte` | `lib/components/contacto/` | Expectativas del cliente |
| `Redes.svelte`        | `lib/components/contacto/` | Redes sociales           |
| `Footer.svelte`       | `lib/components/contacto/` | Footer de contacto       |

---

## Componentes de Metodologia

| Componente      | Ruta                          | Proposito             |
| --------------- | ----------------------------- | --------------------- |
| `Body.svelte`   | `lib/components/metodologia/` | Cuerpo de la pagina   |
| `Footer.svelte` | `lib/components/metodologia/` | Footer de metodologia |

---

## Componentes de Ivan Yarupaitan Rivera

| Componente      | Ruta                                     | Proposito           |
| --------------- | ---------------------------------------- | ------------------- |
| `Cta.svelte`    | `lib/components/ivan-yarupaitan-rivera/` | Llamado a la accion |
| `Stack.svelte`  | `lib/components/ivan-yarupaitan-rivera/` | Stack tecnologico   |
| `Story.svelte`  | `lib/components/ivan-yarupaitan-rivera/` | Historia personal   |
| `Footer.svelte` | `lib/components/ivan-yarupaitan-rivera/` | Footer personal     |

> **Nota:** El Hero fue migrado a `ui/Hero/` con `level="profile"`. Hero legacy eliminado.

---

## Componentes de Chat

| Componente               | Ruta                   | Proposito                                    |
| ------------------------ | ---------------------- | -------------------------------------------- |
| `ChatHeader.svelte`      | `lib/components/chat/` | Cabecera del chat                            |
| `ChatInput.svelte`       | `lib/components/chat/` | Input de mensajes (coarse pointer detection) |
| `ChatSuggestions.svelte` | `lib/components/chat/` | Sugerencias de mensajes                      |

> **Nota:** `ChatMessages.svelte` fue eliminado (no usado). La logica de mensajes esta inline en `+page.svelte`.

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

### Layout de seccion unificado

Todas las secciones de la home usan `SectionLayout` + `DataBlock`:

```svelte
<SectionLayout
	variant="primary"
	number="01"
	label="EVIDENCIA"
	title="Seis proyectos pagados por clientes reales"
	italic_word="pagados"
	description="..."
>
	<DataBlock level="compact" hover={true}>
		<!-- contenido -->
	</DataBlock>
</SectionLayout>
```

### Hero unificado

Todas las paginas del portafolio usan el componente `ui/Hero/Hero.svelte` con el nivel adecuado:

```svelte
<Hero
	level="secondary"
	title="Servicios"
	subtitle="Automatizacion de procesos."
	action_label="Ver casos"
	action_onclick={() => goto(resolve('/(main)/proyectos'))}
/>
```

Ver [`ui/README.md`](../../src/lib/components/ui/README.md) para documentacion completa.

### Navegacion

- `Header.svelte` se renderiza en `+layout.svelte`
- Solid navbar con bg-base-200, 1px border inferior base-300
- Active state con vanchi-agent-dot verde

### SEO

- `SEO.svelte` es un componente que se usa en cada pagina para inyectar meta tags
- Sitemap generado dinamicamente en `sitemap.xml/+server.ts`

---

## Design System

El proyecto usa el design system definido en [`/DESIGN.md`](../../DESIGN.md) en la raiz del proyecto.

Para consulta rapida de tokens:

| Token              | Valor                  | Uso                                 |
| ------------------ | ---------------------- | ----------------------------------- |
| `base-100`         | `oklch(11% 0.005 260)` | Fondo charcoal ink solido           |
| `base-content`     | `oklch(94% 0.005 90)`  | Texto chalk white                   |
| `primary`          | `oklch(92% 0.005 90)`  | Chalk white (monocromo intencional) |
| `secondary`        | `oklch(60% 0.01 260)`  | Metadatos, labels                   |
| `accent`           | `oklch(72% 0.22 165)`  | Phosphor green (solo indicadores)   |
| Tipografia UI      | JetBrains Mono         | Body, nav, botones, labels          |
| Tipografia display | Newsreader             | Titulos editoriales H1/H2           |

> Documentacion completa: [`07-DESIGN/README.md`](../07-DESIGN/README.md) y [`/DESIGN.md`](../../DESIGN.md).

---

## Nota sobre la numeracion

No existe `03-BACKEND` porque Vanchi no tiene un backend tradicional separado. El backend de IA y base de datos vive en **Convex** (`src/convex/`) como parte del mismo repositorio. El salto de `02-FRONTEND` a `04-ARCHITECTURE` es intencional para mantener consistencia con el framework numerado del hub.

---

## Relaciones con otras carpetas

| Documento relacionado                                             | Por que?                                 |
| ----------------------------------------------------------------- | ---------------------------------------- |
| [`00-GUIDE/STACK-PATTERNS.md`](../00-GUIDE/STACK-PATTERNS.md)     | Reglas que el frontend debe seguir       |
| [`07-DESIGN/README.md`](../07-DESIGN/README.md)                   | Tokens visuales que los componentes usan |
| [`04-ARCHITECTURE/DATA-FLOW.md`](../04-ARCHITECTURE/DATA-FLOW.md) | Como fluyen los datos a los componentes  |
| [`04-ARCHITECTURE/OVERVIEW.md`](../04-ARCHITECTURE/OVERVIEW.md)   | Diagrama general del sistema             |

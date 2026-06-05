# 🔄 DATA-FLOW — Flujos de datos

> Cómo viajan los datos desde que el usuario hace un request hasta que ve el resultado renderizado.

---

## Flujo general (SSR)

```
1. NAVEGADOR                 2. SVELTEKIT SERVER
   hace request                  recibe la petición
   GET /proyectos/encap     →   identifica la ruta
                                  │
                                  ▼
                             3. +PAGE.TS (load)
                                ProjectService.getById("encap")
                                  │
                                  ▼
                             4. DATA LAYER
                                lib/data/projects/encap.ts
                                Retorna: { project }
                                  │
                                  ▼
                             5. +PAGE.SVELTE
                                Recibe data via $props()
                                Renderiza componentes
                                  │
                                  ▼
                             6. HTML + CSS
                                Enviado al navegador
                                  │
                                  ▼
                             7. NAVEGADOR
                                Renderiza (SSR)
                                Hidrata (interactividad)
```

---

## Flujo de datos por ruta

### Home (`/`)

```
+page.svelte
├── Hero.svelte         → Datos: estáticos en el componente
├── Me.svelte           → Datos: estáticos en el componente
├── AboutMe.svelte      → Datos: estáticos en el componente
├── Services.svelte     → Datos: lib/constants/services.ts
├── CardService.svelte  → Datos: de Services (map loop)
├── FeaturedProjects.svelte → Datos: lib/constants/projects.ts
├── CardProject.svelte  → Datos: de FeaturedProjects (map loop)
├── Marquee.svelte      → Datos: logos estáticos
├── SocialProof.svelte  → Datos: estáticos en el componente
└── WhatsappContact.svelte → Datos: estáticos en el componente
```

### Proyectos - Detalle (`/proyectos/[projectId]`)

```
1. URL: /proyectos/encap
2. +page.ts (load)
   ├── params.projectId = "encap"
   ├── ProjectService.getById("encap")
   │   └── Busca en lib/data/projects/index.ts
   │       └── Retorna objeto del proyecto
   └── Retorna { project }
3. +page.svelte recibe { data }
   └── Pasa data.project a subcomponentes:
       ├── Context.svelte     → project.context
       ├── Role.svelte        → project.role
       ├── Solution.svelte    → project.solution
       ├── UI.svelte          → project.ui
       ├── Tech.svelte        → project.tech
       ├── Research.svelte    → project.research
       ├── Results.svelte     → project.results
       └── Assets.svelte      → project.assets
```

### Sitemap (`/sitemap.xml`)

```
1. Ruta prerendered (prerender = true)
2. +server.ts (GET)
   ├── Combina rutas estáticas + slugs de projectsData
   ├── Genera XML con <url>, <loc>, <lastmod>, <changefreq>, <priority>
   └── Retorna Response con Content-Type: application/xml
```

### Otras rutas estáticas

Todas las siguientes rutas tienen datos estáticos definidos directamente en sus componentes o páginas. No requieren `load()` ni data layer:

| Ruta | Archivo | Tipo de datos |
|------|---------|---------------|
| `/waas` | `waas/+page.svelte` | Contenido estático en el componente |
| `/soluciones-legales` | `soluciones-legales/+page.svelte` | Contenido estático + componentes específicos |
| `/ivan-yarupaitan-rivera` | `ivan-yarupaitan-rivera/+page.svelte` | Contenido estático en el componente |
| `/precios` | `precios/+page.svelte` | Contenido estático + CollaborationModels.svelte |
| `/politica-de-privacidad` | `politica-de-privacidad/+page.svelte` | Contenido estático |
| `/condiciones-del-servicio` | `condiciones-del-servicio/+page.svelte` | Contenido estático |
| `/eliminacion-de-datos-de-usuario` | `eliminacion-de-datos-de-usuario/+page.svelte` | Contenido estático |

---

## Data layer interno

```
lib/
├── data/
│   └── projects/
│       ├── index.ts                → Exporta projectsData (Record<string, Project>)
│       ├── encap.ts                → Proyecto: Encap
│       ├── colegio-educere.ts      → Proyecto: Colegio Educere
│       ├── diapis.ts               → Proyecto: Diapis
│       ├── farmape.ts              → Proyecto: Farmape
│       ├── junin360.ts             → Proyecto: Junín360
│       ├── mediroosevelt.ts        → Proyecto: Med Roosevelt
│       ├── molaric.ts              → Proyecto: Molaric
│       ├── obstetraconecta.ts      → Proyecto: ObstetraConecta
│       └── peralta-asociados.ts    → Proyecto: Peralta & Asociados
├── services/
│   └── projects.service.ts         → ProjectService.getById(slug)
├── types/
│   └── project.ts                  → Interfaz Project
└── constants/
    ├── projects.ts                 → Constantes de proyectos (para home)
    └── services.ts                 → Constantes de servicios
```

---

## Flujo de error

```
1. URL inválida o proyecto inexistente
2. +page.ts detecta !project
3. throw error(404, { message })
4. SvelteKit renderiza +error.svelte
5. Usuario ve página de error personalizada
```

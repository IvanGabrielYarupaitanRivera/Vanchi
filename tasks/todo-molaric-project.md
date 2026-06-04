# 📋 Agregar proyecto Molaric (Agente IA para clínicas dentales)

> **ID:** TASK-002
> **Estado:** Pendiente
> **Creada:** 2026-06-04
> **Completada:** —

---

## 1. Objetivo

Agregar **Molaric** al portafolio Vanchi: reemplazar MediRoosevelt en la sección "Soluciones Realizadas" del home y agregarlo como proyecto completo con caso de estudio en `/proyectos/molaric`.

---

## 2. Contexto

Actualmente la landing page muestra 3 proyectos destacados en `FeaturedProjects.svelte`: ENCAP, Junin360 y MediRoosevelt. El autor quiere mostrar Molaric en lugar de MediRoosevelt. Además, Molaric debe aparecer en la lista completa de proyectos (`/proyectos`) con su caso de estudio detallado en `/proyectos/molaric`.

### ¿Qué es Molaric?

Molaric es un **agente de IA para clínicas dentales** que funciona 24/7 vía WhatsApp. Los pacientes interactúan con él para agendar, reprogramar o cancelar citas, y el agente sincroniza automáticamente con el Google Calendar de la clínica. También gestiona recordatorios automáticos, verifica disponibilidad, administra pacientes y procedimientos, y proporciona un dashboard web para el doctor.

### Stack tecnológico real de Molaric

| Capa | Tecnología |
|------|------------|
| Frontend | SvelteKit 5 + TailwindCSS v4 |
| Backend / DB | Convex |
| Agente IA | `@convex-dev/agent` (nativo Convex) |
| LLM Gateway | Vercel AI Gateway (`createGateway`) |
| Comunicación | WhatsApp vía Kapso |
| Auth | Better Auth |
| Calendar | Google Calendar API REST v3 (Service Account) |
| STT | Deepgram Nova-2 (español) |
| Design | Nike-inspired (tokens: ink, canvas, soft-cloud) |
| Tests | Bun test (19+ tests unitarios) |
| Deployment | Vercel |

### ¿Qué hace Molaric?

- **Gestión de pacientes**: CRUD completo multi-tenant
- **Gestión de citas**: Agendar, reprogramar, cancelar, completar + Google Calendar sync bidireccional
- **Verificación de disponibilidad**: Consulta Google Calendar `freebusy/query` antes de agendar
- **Recordatorios automáticos**: Híbridos con IA, scheduler, respuestas Sí/No vía WhatsApp
- **Horarios de clínica**: Configuración con excepciones, simulador
- **Ubicación de clínica**: Dirección estructurada, Google Maps
- **Procedimientos**: Gestión de tratamientos dentales
- **Multi-tenancy**: Cada clínica tiene su propio WhatsApp + Google Calendar + datos aislados
- **Roles y permisos**: Staff detectado por WhatsApp, system prompt dinámico
- **Transcripción de voz**: Deepgram STT para audios de WhatsApp

---

## 3. Criterios de verificación

- [ ] MediRoosevelt ya no aparece en "Soluciones Realizadas" del home
- [ ] Molaric aparece en "Soluciones Realizadas" del home (FeaturedProjects)
- [ ] Molaric aparece en la lista de proyectos `/proyectos`
- [ ] `/proyectos/molaric` existe y carga el caso de estudio completo
- [ ] Molaric aparece en el sitemap dinámico `/sitemap.xml`
- [ ] `bun run check` pasa sin errores
- [ ] `bun run build` pasa sin errores

---

## 4. Pasos de implementación

### Paso 1 — Actualizar `FeaturedProjects.svelte` (sección home)

Reemplazar MediRoosevelt por Molaric en el array hardcodeado de proyectos destacados.

**Archivos involucrados:** `src/lib/components/home/FeaturedProjects.svelte`

**Detalle:**
- Cambiar el import de `mediroosevelt.webp` por `molaric.webp`
- Reemplazar el objeto `{ id: 3, title: 'MediRoosevelt', ... }` por:

```ts
{
    id: 3,
    title: 'Molaric',
    category: 'HealthTech',
    description:
        'Agente de IA para clínicas dentales que atiende pacientes 24/7 vía WhatsApp. Gestiona citas, sincroniza con Google Calendar, envía recordatorios automáticos y proporciona un dashboard web para el doctor.',
    image: molaric,
    tags: ['SvelteKit', 'Convex', 'Gemini API', 'Google Calendar'],
    href: '/proyectos/molaric'
}
```

---

### Paso 2 — Agregar Molaric a `constants/projects.ts`

Agregar la entrada de Molaric al array `PROJECTS` y extender los tipos union.

**Archivos involucrados:** `src/lib/constants/projects.ts`

**Detalle:**
- Agregar `import molaric from '$lib/assets/images/projects/molaric.webp';`
- Extender `ProjectLinkUrl` con `'https://molaric.app/'`
- No extender `ProjectVideoUrl` a menos que haya video demo
- Agregar objeto Molaric al array `PROJECTS` con `id: 9`, datos reales de stack y URL

---

### Paso 3 — Crear imagen thumbnail `molaric.webp`

**Archivos involucrados:** `src/lib/assets/images/projects/molaric.webp`

**Detalle:**
- Imagen en formato WebP representativa del proyecto Molaric
- Tamaño similar a las existentes (1200x630 para OG)

---

### Paso 4 — Crear el caso de estudio `molaric.ts`

Crear el archivo de datos completo siguiendo la interfaz `CaseStudy` de `src/lib/types/project.ts`.

**Archivos involucrados:** `src/lib/data/projects/molaric.ts`

**Detalle:**
- `id: 'molaric'`
- `meta:` title "Molaric", tagline sobre agente IA dental 24/7, role "Full-Stack Developer & AI Engineer", stack real: Convex, SvelteKit, Google Calendar API, Gemini API, Kapso, Better Auth, Deepgram, Tailwind
- `context:` Cliente "Clínicas Dentales", problema de gestión de citas y comunicación con pacientes
- `myRole:` Desarrollo completo full-stack + arquitectura del agente IA + integraciones
- `solution:` Agente conversacional vía WhatsApp con sincronización de calendario
- `tech:` Stack real de Molaric (logos tecnológicos reales de los disponibles en `lib/assets/icons/technologies/`)
- `results:` Métricas como citas gestionadas, tiempo de respuesta, disponibilidad 24/7

---

### Paso 5 — Registrar Molaric en `data/projects/index.ts`

**Archivos involucrados:** `src/lib/data/projects/index.ts`

**Detalle:**
- Agregar `import { molaric } from './molaric';`
- Agregar `molaric` al objeto `projectsData`

---

### Paso 6 — Crear imagen de fondo `bg-molaric.webp`

**Archivos involucrados:** `src/lib/assets/images/projects/bg-molaric.webp`

**Detalle:**
- Imagen de fondo para el hero del caso de estudio

---

### Paso 7 — Actualizar sitemap

**Archivos involucrados:** `src/routes/sitemap.xml/+server.ts`

**Detalle:**
- Agregar `molaric: '2026-06-04'` a `projectLastmodBySlug`

---

### Paso 8 — Verificar integración automática

Confirmar que los componentes que usan `PROJECTS` y `projectsData` detectan Molaric sin cambios adicionales.

**Archivos involucrados:** (solo verificación)

**Detalle:**
- `OurProjects.svelte` usa `PROJECTS` → incluirá Molaric automáticamente
- `StatsProjects.svelte` usa `PROJECTS.length` → stats se recalculan
- `[projectId]/+page.ts` usa `ProjectService.getById()` → `/proyectos/molaric` funciona
- `ProjectsFilter.svelte` usa categorías de `PROJECTS` → "HealthTech" ya existe como categoría

---

### Paso 9 — Build y verificación final

**Archivos involucrados:** Todos los anteriores

**Detalle:**
- Ejecutar `bun run check` — debe pasar sin errores
- Ejecutar `bun run build` — debe compilar correctamente
- Verificar visualmente en `bun dev`:
  - Home → "Soluciones Realizadas" muestra Molaric, NO MediRoosevelt
  - `/proyectos` → Molaric aparece en el listado completo
  - `/proyectos/molaric` → caso de estudio carga correctamente
  - MediRoosevelt sigue accesible en `/proyectos/mediroosevelt` (solo se quitó del home)

---

## 5. Checklist de cierre

- [ ] FeaturedProjects.svelte actualizado (MediRoosevelt reemplazado por Molaric)
- [ ] constants/projects.ts con Molaric en PROJECTS (id: 9)
- [ ] molaric.webp creado (thumbnail)
- [ ] data/projects/molaric.ts creado (caso de estudio con stack real)
- [ ] data/projects/index.ts registra molaric
- [ ] bg-molaric.webp creado (fondo hero)
- [ ] sitemap.xml actualizado con molaric
- [ ] `bun run check` pasa
- [ ] `bun run build` pasa
- [ ] Verificación visual: home, /proyectos, /proyectos/molaric
- [ ] Mover a `tasks/archived/` al finalizar
- [ ] Registrar en `CHANGELOG.md`

# 📋 Crear Hub de Documentación `docs/`

> **ID:** TASK-001
> **Estado:** Completada
> **Creada:** 2026-06-04
> **Completada:** 2026-06-04

---

## 1. Objetivo

Crear la carpeta `docs/` en la raíz del proyecto como hub documental estructurado para que el agente de codificación (pi) y desarrolladores humanos accedan rápidamente a todo el contexto del proyecto Vanchi.

---

## 2. Contexto

Actualmente el proyecto tiene documentación dispersa:
- `DESIGN.md` en la raíz (design system)
- `README.md` genérico de SvelteKit (sin personalizar)
- Sin estructura documental para el agente

Se necesita un framework organizado con secciones numeradas por prioridad de lectura, una guía de navegación para el agente, y un lugar para registrar decisiones y cambios.

---

## 3. Criterios de verificación

- [ ] `docs/README.md` existe y enlaza a `00-GUIDE/CONTEXT.md`
- [ ] `docs/00-GUIDE/CONTEXT.md` existe con stack, estado actual y estructura del proyecto
- [ ] `docs/00-GUIDE/CONTEXT.md` enlaza a `NAVIGATION.md`
- [ ] `docs/00-GUIDE/NAVIGATION.md` cubre al menos 3 tareas típicas del agente
- [ ] `docs/CHEATSHEET.md` existe con comandos útiles (bun, sveltekit, tailwind, git)
- [ ] `docs/ALIADAS.md` existe con referencias a skills y aliados IA
- [ ] `docs/01-PROJECT/CHANGELOG.md` existe como bitácora
- [ ] `docs/05-SETUP/LOCAL-DEV.md` permite a alguien nuevo levantar el proyecto en <5 min
- [ ] `docs/00-GUIDE/LECCIONES-APRENDIDAS/` es una carpeta con archivos individuales por lección
- [ ] Todos los nombres de archivo en `docs/` están en MAYÚSCULA (excepto `README.md` por convención)
- [ ] Todas las carpetas numeradas tienen su `README.md` explicativo
- [ ] Los enlaces entre documentos son relativos y funcionales

---

## 4. Pasos de implementación

### Paso 1 — Portal de entrada (`docs/README.md`)
Crear el archivo raíz que presenta el hub, explica su propósito y enlaza a `00-GUIDE/CONTEXT.md` como primera lectura obligatoria.

**Archivos involucrados:** `docs/README.md`

**Detalle:**
- Título y propósito del hub
- Mapa de navegación con enlaces a cada sección
- Enlace directo a `00-GUIDE/CONTEXT.md` como "LEER PRIMERO"
- Enlaces a `ALIADAS.md` y `CHEATSHEET.md`

---

### Paso 2 — Archivos raíz (`ALIADAS.md` y `CHEATSHEET.md`)
Crear los dos archivos complementarios en la raíz de `docs/`.

**Archivos involucrados:** `docs/ALIADAS.md`, `docs/CHEATSHEET.md`

**Detalle:**
- `ALIADAS.md`: Lista de skills disponibles, qué problema resuelve cada uno, cuándo cargarlos
- `CHEATSHEET.md`: Comandos bun, sveltekit, tailwind v4, git, estructura de proyecto, convenciones de código

---

### Paso 3 — Guía de contexto (`docs/00-GUIDE/`)
Crear la carpeta de guía principal con todos sus archivos. Es la sección que el agente debe leer primero.

**Archivos involucrados:**
- `docs/00-GUIDE/README.md` — Presentación de la guía
- `docs/00-GUIDE/CONTEXT.md` — Contexto del proyecto: stack, estado, estructura, fuentes de verdad
- `docs/00-GUIDE/NAVIGATION.md` — GPS: qué leer según la tarea (mínimo 3 tareas)
- `docs/00-GUIDE/WORKFLOW.md` — Ciclo Spec → Code → Verify
- `docs/00-GUIDE/STACK-PATTERNS.md` — Reglas obligatorias del stack (SvelteKit 5 + Tailwind v4 + DaisyUI v5)
- `docs/00-GUIDE/LECCIONES-APRENDIDAS/README.md` — Índice de lecciones
- `docs/00-GUIDE/LECCIONES-APRENDIDAS/*.md` — Una lección por archivo (formato: `YYYY-MM-DD-TITULO.md`)

**Detalle:**
- CONTEXT.md debe incluir stack tecnológico, estado actual, estructura de carpetas, y referencias a DESIGN.md
- NAVIGATION.md debe cubrir: "crear una página", "modificar diseño", "añadir feature" como mínimo
- WORKFLOW.md define: el agente recibe spec → lee docs relevantes → implementa → verifica → archiva
- Las lecciones son **archivos individuales** dentro de la carpeta `LECCIONES-APRENDIDAS/`, cada una con fecha en el nombre. El README.md de esa carpeta funciona como índice. Esto permite ir directo a la lección específica sin leer un markdown gigante.

---

### Paso 4 — Visión del proyecto (`docs/01-PROJECT/`)
Crear la carpeta con la visión general, roadmap y changelog.

**Archivos involucrados:**
- `docs/01-PROJECT/README.md` — Visión general del proyecto
- `docs/01-PROJECT/VISION.md` — Propósito y objetivos de largo plazo
- `docs/01-PROJECT/ROADMAP.md` — Hitos planificados
- `docs/01-PROJECT/CHANGELOG.md` — Bitácora cronológica

**Detalle:**
- CHANGELOG.md registra esta creación como primer cambio con fecha, qué cambió, por qué, archivos afectados
- VISION.md describe el propósito del portafolio Vanchi
- ROADMAP.md enumera los hitos planificados (o pendientes de definir)

---

### Paso 5 — Frontend (`docs/02-FRONTEND/`)
Crear la carpeta de documentación del frontend.

**Archivos involucrados:** `docs/02-FRONTEND/README.md`

**Detalle:**
- README.md explica qué contiene (rutas, componentes, patrones UI)
- Lista las rutas existentes del proyecto
- Menciona los componentes principales
- Referencia a DESIGN.md para tokens visuales

---

### Paso 6 — Arquitectura (`docs/04-ARCHITECTURE/`)
Crear la carpeta de decisiones arquitectónicas.

**Archivos involucrados:**
- `docs/04-ARCHITECTURE/README.md`
- `docs/04-ARCHITECTURE/OVERVIEW.md`
- `docs/04-ARCHITECTURE/DATA-FLOW.md`
- `docs/04-ARCHITECTURE/ADR.md`

**Detalle:**
- OVERVIEW.md: Diagrama textual del sistema (SvelteKit SSR + endpoints server-side + Vercel deployment)
- DATA-FLOW.md: Cómo fluyen los datos (page data → server endpoints → componentes)
- ADR.md: Architecture Decision Records (primera entrada: por qué SvelteKit + Tailwind + DaisyUI)

---

### Paso 7 — Setup (`docs/05-SETUP/`)
Crear la carpeta de configuración y desarrollo local.

**Archivos involucrados:**
- `docs/05-SETUP/README.md`
- `docs/05-SETUP/LOCAL-DEV.md`
- `docs/05-SETUP/ENV.md`
- `docs/05-SETUP/INTEGRATIONS.md`

**Detalle:**
- LOCAL-DEV.md: clonar, bun install, bun dev, construir, deploy
- ENV.md: variables de entorno necesarias
- INTEGRATIONS.md: Vercel, servicios externos

---

### Paso 8 — Reglas de negocio (`docs/06-BUSINESS-RULES/`)
Crear la carpeta de reglas de dominio y principios.

**Archivos involucrados:**
- `docs/06-BUSINESS-RULES/README.md`
- `docs/06-BUSINESS-RULES/CORE-PRINCIPLES.md`

**Detalle:**
- CORE-PRINCIPLES.md: KISS, Single Responsibility, mobile-first, lg:-only breakpoint, dark-mode only

---

### Paso 9 — Design System (`docs/07-DESIGN/`)
Crear la carpeta que referencia al DESIGN.md raíz.

**Archivos involucrados:** `docs/07-DESIGN/README.md`

**Detalle:**
- README.md explica que el source of truth es `DESIGN.md` en la raíz
- Extrae los tokens clave (colores, tipografía, elevación) como referencia rápida
- Enlaza al archivo original

---

### Paso 10 — Verificación final
Recorrer toda la estructura y verificar enlaces, cobertura y consistencia.

**Archivos involucrados:** Todos

**Detalle:**
- Verificar que todos los enlaces relativos funcionan
- Confirmar que CONTEXT.md es la primera lectura y está enlazado desde README.md
- Confirmar que NAVIGATION.md cubre al menos 3 tareas
- Verificar que cada README de carpeta explica qué contiene y cuándo leerlo
- Verificar que todos los archivos están en MAYÚSCULA (excepto README.md)
- Mover esta spec a `tasks/archived/`

---

## 5. Checklist de cierre

- [ ] Todos los pasos (1-10) completados
- [ ] Criterios de verificación cumplidos
- [ ] Mover `todo-docs-hub.md` a `tasks/archived/`
- [ ] Registrar creación del hub en `docs/01-PROJECT/CHANGELOG.md`

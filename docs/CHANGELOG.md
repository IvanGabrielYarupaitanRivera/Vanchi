# 📜 CHANGELOG — Historial de cambios

> Registro cronológico de cambios significativos en el proyecto.

## ✍️ Cómo agregar una entrada

Copia y pega este bloque al inicio de la lista (después de esta sección) y complétalo:

```markdown
## YYYY-MM-DD

**Qué cambió:** [Descripción breve del cambio]

**Por qué:** [Razón del cambio]

**Archivos afectados:**
- `ruta/al/archivo` — [Propósito]
```

---

## Formato de cada entrada

| Campo | Qué escribir |
|-------|-------------|
| **Qué cambió** | Descripción en 1 línea, presente simple |
| **Por qué** | Contexto: problema que resolvía o decisión que se tomó |
| **Archivos afectados** | Lista de archivos con ruta relativa desde la raíz del proyecto. Incluir `tasks/*` si la spec se archivó |

---

## 2026-06-04

**Qué cambió:** Agregado proyecto Molaric al portafolio.

**Por qué:** Se necesitaba mostrar el proyecto más reciente del autor: un agente IA para clínicas dentales. Molaric reemplazó a MediRoosevelt en la sección destacada del home y se agregó como caso de estudio completo.

**Archivos afectados:**
- `src/lib/components/home/FeaturedProjects.svelte` — Molaric 1°, ENCAP 2°, Junin360 3°
- `src/lib/constants/projects.ts` — Molaric como id:1 con link y video
- `src/lib/data/projects/molaric.ts` — Caso de estudio con stack real, galería de 7 imágenes, logos tecnológicos
- `src/lib/data/projects/index.ts` — Molaric registrado en projectsData
- `src/routes/sitemap.xml/+server.ts` — slug molaric agregado
- `src/lib/assets/icons/technologies/GoogleCalendarLogo.svelte` — Nuevo logo
- `src/lib/assets/icons/technologies/DeepgramLogo.svelte` — Nuevo logo
- `tasks/archived/todo-molaric-project.md` — Spec archivada

---

## 2026-06-04

**Qué cambió:** Archivada la especificación TASK-001 (hub de documentación `docs/`).

**Por qué:** El hub fue completado con 27 archivos, 0 broken links, mapa de relaciones, quickstart agéntico, y todas las correcciones de coherencia aplicadas.

**Archivos afectados:**
- `tasks/archived/todo-docs-hub.md` — Spec archivada

---

## 2026-06-04

**Qué cambió:** Creación del hub de documentación `docs/` con estructura completa.

**Por qué:** La documentación estaba dispersa (solo `DESIGN.md` + `README.md` genérico). Se necesitaba un hub estructurado para que el agente pi y desarrolladores humanos accedan rápido al contexto del proyecto.

**Archivos afectados:**
- `docs/README.md` — Portal de entrada
- `docs/ALIADAS.md` — Skills y aliados IA
- `docs/CHEATSHEET.md` — Referencia rápida
- `docs/00-GUIDE/` — Guía principal (CONTEXT, NAVIGATION, WORKFLOW, STACK-PATTERNS, LECCIONES-APRENDIDAS)
- `docs/01-PROJECT/` — Visión, roadmap y changelog
- `tasks/todo-docs-hub.md` — Especificación completada

---

## 2026-06-04

**Qué cambió:** Creación de la carpeta `tasks/` como brazo operativo de especificaciones.

**Por qué:** Se necesitaba un lugar para documentar especificaciones con pasos secuenciales, separado de la documentación permanente.

**Archivos afectados:**
- `tasks/README.md` — Propósito de la carpeta
- `tasks/todo-TEMPLATE.md` — Template para nuevas specs
- `tasks/todo-docs-hub.md` — Primera especificación
- `tasks/archived/` — Subcarpeta para specs completadas

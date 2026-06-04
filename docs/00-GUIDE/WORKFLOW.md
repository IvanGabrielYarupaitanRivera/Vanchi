# 🔄 WORKFLOW — Ciclo Spec → Code → Verify

> El flujo de trabajo estándar para cualquier tarea en Vanchi.

---

## Fase 1: Spec (Especificación)

Antes de escribir código, se crea una especificación en `tasks/`.

**Pasos:**
1. Usar el template [`/tasks/todo-TEMPLATE.md`](../../tasks/todo-TEMPLATE.md)
2. Definir: **Objetivo** → **Contexto** → **Criterios de verificación** → **Pasos secuenciales**
3. Nombrar el archivo: `todo-nombre-descriptivo.md`
4. Estado: `Pendiente`

---

## Fase 2: Code (Implementación)

El agente consulta la spec y los docs relevantes.

**Pasos:**
1. Leer [`CONTEXT.md`](./CONTEXT.md) si no se ha hecho
2. Leer [`NAVIGATION.md`](./NAVIGATION.md) para saber qué docs cargar
3. Cargar skills relevantes (ver [`ALIADAS.md`](../ALIADAS.md))
4. Implementar siguiendo los pasos de la spec
5. Marcar cada paso como completado en la spec

---

## Fase 3: Verify (Verificación)

Validar que todo funciona.

**Pasos:**
1. Ejecutar `bun run check` (type-check + lint)
2. Ejecutar `bun run build` (build de producción)
3. Verificar visualmente en `bun dev`
4. Confirmar criterios de la spec
5. Si todo OK → mover spec a `tasks/archived/`

---

## Diagrama

```
┌──────────┐     ┌──────────┐     ┌──────────┐
│   SPEC   │ ──► │   CODE   │ ──► │  VERIFY  │
│ tasks/   │     │ src/     │     │ check +  │
│ *.md     │     │ docs/    │     │ build    │
└──────────┘     └──────────┘     └──────────┘
      │                              │
      │                              ▼
      │                        ┌──────────┐
      └────────────────────────►│ ARCHIVE  │
                                │ tasks/   │
                                │ archived/│
                                └──────────┘
```

---

## Reglas

- No saltarse la fase **Spec** para cambios significativos
- Las specs completadas **nunca se borran**, se archivan
- Cada cambio significativo se registra en [`CHANGELOG.md`](../CHANGELOG.md)
- Si algo falla en Verify, se vuelve a Code

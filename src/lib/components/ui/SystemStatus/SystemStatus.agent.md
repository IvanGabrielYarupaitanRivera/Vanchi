# 🤖 AGENT RULES: SystemStatus.svelte

**PROPÓSITO:** Renderizar el dot indicador de estado (phosphor green). Es el ÚNICO componente autorizado para usar `bg-accent` o `vanchi-agent-dot`.

**PROPS:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `status` | `'active' \| 'idle' \| 'error'` | `'active'` | Estado del sistema |
| `label` | `string \| undefined` | `undefined` | Texto opcional al lado del dot |

**COMPORTAMIENTO:**
- Sin `label`: solo el dot de 6px
- Con `label`: dot + texto separados por 8px, todo en `text-secondary uppercase`

**ANTI-PATRONES (NO HACER):**
- ❌ NO usar `bg-accent` o `bg-[#00C288]` fuera de este componente.
- ❌ NO modificar el tamaño del dot (`w-1.5 h-1.5` es fijo, usa `vanchi-agent-dot`).
- ❌ NO agregar `shadow`, `blur`, `glow` o `ring` al dot.
- ❌ NO usar este componente para decorar elementos que no sean indicadores de estado.

**EJEMPLOS:**

```svelte
<!-- Solo dot -->
<SystemStatus status="active" />

<!-- Dot + label -->
<SystemStatus status="active" label="SYSTEM // ONLINE" />

<!-- Error -->
<SystemStatus status="error" label="SYSTEM // ERROR" />
```

# 🤖 REGLAS DE EJECUCION PARA AGENTE: SystemStatus.svelte

Componente indicador de estado del sistema. Unico componente autorizado para usar `vanchi-agent-dot` con `bg-accent`.
Debe **importarse**, nunca recrearse.

## 📐 Interfaz de Tipos (Props del Sistema)

```typescript
type SystemStatusValue = 'active' | 'idle' | 'error';

interface SystemStatusProps {
  status?: SystemStatusValue;  // default: 'active'
  label?: string;              // texto opcional al lado del dot
}
```

## 📊 Comportamiento

| Prop `label` | Output |
|---|---|
| `undefined` | Solo dot de 6px |
| `"SYSTEM // ONLINE"` | Dot + texto en `text-secondary uppercase` |

## ❌ ANTI-PATRONES (Prohibiciones Inquebrantables)

* **Phosphor Green Restringido:** NO usar `bg-accent` o `bg-[#00C288]` en ningun otro componente.
  Este es el UNICO lugar autorizado.
* **Tamano Fijo:** NO modificar el tamano del dot. `vanchi-agent-dot` = 6px (`w-1.5 h-1.5`).
* **Sin Efectos:** NO agregar `shadow`, `blur`, `glow` o `ring` al dot.
* **Solo Estado:** NO usar este componente para decorar elementos que no sean indicadores de estado.

## 💻 Patrones de Composicion Correctos

```svelte
<script lang="ts">
  import SystemStatus from '$lib/components/ui/SystemStatus/SystemStatus.svelte';
</script>

<!-- Solo dot -->
<SystemStatus status="active" />

<!-- Dot + label -->
<SystemStatus status="active" label="SYSTEM // ONLINE" />

<!-- Error -->
<SystemStatus status="error" label="SYSTEM // FALLO" />
```

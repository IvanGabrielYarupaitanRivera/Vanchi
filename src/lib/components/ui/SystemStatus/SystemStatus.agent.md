# 🤖 REGLAS DE EJECUCION PARA AGENTE: SystemStatus.svelte

Componente indicador de estado del sistema. Unico componente autorizado para usar `status-accent` (phosphor green).
Debe **importarse**, nunca recrearse.

## 📐 Interfaz de Tipos

```typescript
type SystemStatusValue = 'active' | 'idle' | 'error';

interface SystemStatusProps {
  status?: SystemStatusValue;  // default: 'active'
  label?: string;
}
```

## 📊 Comportamiento

| status | Dot | Label color |
|---|---|---|
| `active` | `status-accent animate-pulse` (verde) | `text-base-content` (alto contraste) |
| `idle` | `status-secondary` (gris) | `text-secondary` (muted) |
| `error` | `status-error` (rojo) | `text-base-content` (alto contraste) |

## ❌ ANTI-PATRONES

* NO usar `bg-accent` o `bg-[#00C288]` fuera de este componente.
* NO agregar `shadow`, `blur`, `glow` o `ring` al dot.
* NO usar para decorar elementos que no sean indicadores de estado.

## 💻 Ejemplos

```svelte
<script lang="ts">
  import SystemStatus from '$lib/components/ui/SystemStatus/SystemStatus.svelte';
</script>

<!-- Activo -->
<SystemStatus status="active" label="SYSTEM // ONLINE" />

<!-- Inactivo -->
<SystemStatus status="idle" label="SYSTEM // IDLE" />

<!-- Error -->
<SystemStatus status="error" label="SYSTEM // ERROR" />

<!-- Solo dot -->
<SystemStatus status="active" />
```

# 🤖 REGLAS DE EJECUCION PARA AGENTE: CommandAction.svelte

Boton/link CTA con 4 niveles de estilo. Debe **importarse**, nunca recrearse.

Renderiza `<a>` si se pasa `href`, `<button>` si se pasa `onclick`. Nunca ambos.

## 📐 Interfaz de Tipos

```typescript
type ActionLevel = 'primary' | 'outline-primary' | 'ghost' | 'secondary';

interface CommandActionProps {
  level?: ActionLevel;      // default: 'primary'
  label: string;
  href?: string;             // Renderiza <a>. Prioridad sobre onclick.
  onclick?: () => void;      // Renderiza <button>
  icon?: Component;          // Lucide icon opcional
}
```

## 📊 Comportamiento

| level | Clase DaisyUI | Pinta | Uso tipico |
|---|---|---|---|
| `primary` | `btn btn-primary uppercase` | Chalk/charcoal | CTA principal |
| `outline-primary` | `btn btn-outline btn-primary uppercase` | Borde chalk | CTA secundario |
| `ghost` | `btn btn-ghost text-base-content uppercase` | Sin borde | Accion sutil |
| `secondary` | `btn btn-neutral uppercase` | Gris oscuro | CTA secundario relleno |

## ❌ ANTI-PATRONES

* NO pasar colores fijos o clases de Tailwind. Usar solo los 4 niveles.
* NO modificar el uppercase. El componente lo fuerza.
* NO pasar `href` y `onclick` juntos. `href` tiene prioridad.
* NO usar `onclick` para navegacion interna. Usar `href` con `resolve()`.

## 💻 Ejemplos

### Como link (navegacion)
```svelte
<script lang="ts">
  import { resolve } from '$app/paths';
  import CommandAction from '$lib/components/ui/CommandAction/CommandAction.svelte';
  import { ArrowUpRight } from '@lucide/svelte';
</script>

<CommandAction level="primary" label="Automatizar" href={resolve('/(main)/contacto')} />
<CommandAction level="ghost" label="Ver todos" href={resolve('/(main)/proyectos')} icon={ArrowUpRight} />
```

### Como boton (accion)
```svelte
<CommandAction level="primary" label="Automatizar" onclick={() => {}} />
<CommandAction level="primary" label="Automatizar" icon={ArrowUpRight} onclick={() => {}} />
<CommandAction level="outline-primary" label="Ver casos" onclick={() => {}} />
<CommandAction level="ghost" label="Cancelar" onclick={() => {}} />
<CommandAction level="secondary" label="Neutral" onclick={() => {}} />
```

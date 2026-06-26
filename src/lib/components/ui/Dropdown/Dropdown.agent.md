# 🤖 REGLAS DE EJECUCION PARA AGENTE: Dropdown.svelte

Lista colapsable de items. Cada item es un acordeón independiente activado por `input[type=checkbox]` de DaisyUI.
Debe **importarse**, nunca recrearse manualmente.

## 📐 Interfaz de Tipos

```typescript
interface DropdownItem {
  title: string;    // Texto del encabezado (collapse-title)
  content: string;  // Texto del contenido colapsado (collapse-content)
}

interface DropdownProps {
  items: readonly DropdownItem[];
  with_borders?: boolean;  // default: true. true = bordes completos, false = solo borde inferior
  class?: string;           // Clases extra (opcional)
}
```

## 📊 Comportamiento

| Prop | Default | Descripción |
|---|---|---|
| `items` | — (requerido) | Array de `{ title, content }`. Cada item es un collapse independiente |
| `with_borders` | `true` | `true` = cada item tiene borde completo (border). `false` = solo borde inferior (border-b) |
| `class` | `""` | Clases adicionales al contenedor `.space-y-px` |

## 📋 Reglas de uso

1. **Siempre pasar `items`.** Es el único prop obligatorio.
2. **`with_borders={true}`** es el estilo por defecto. Úsalo en secciones FAQ o listados independientes.
3. **`with_borders={false}`** para lists sin separación lateral (borde solo abajo). Útil dentro de un contenedor existente.
4. El componente **no incluye** `vanchi-eyebrow`, título ni sección wrapper. Eso lo maneja `SectionLayout`.
5. Compatible con `SectionLayout` (especialmente `variant="secondary"` de una columna).

## ❌ ANTI-PATRONES

- NO copiar `div.collapse.collapse-arrow.border.border-base-300.bg-base-200` manualmente. Importar Dropdown.
- NO pasar el contenido como HTML plano. `content` es texto plano.
- NO usar Dropdown para contenido extenso (más de 3 párrafos). Para eso usa una página dedicada.
- NO anidar Dropdown dentro de otro Dropdown.
- NO hardcodear colores o borders manuales.

## 💻 Ejemplos

### FAQ con SectionLayout
```svelte
<script lang="ts">
  import SectionLayout from '$lib/components/ui/SectionLayout/SectionLayout.svelte';
  import Dropdown from '$lib/components/ui/Dropdown/Dropdown.svelte';
</script>

<SectionLayout variant="secondary" number="03" label="FAQ">
  <Dropdown
    items={[
      { title: "¿Cómo contratar una consultoría?", content: "Completa el formulario de contacto..." },
      { title: "¿Cuánto dura un proyecto típico?", content: "Depende del alcance..." }
    ]}
  />
</SectionLayout>
```

### Sin bordes laterales (solo borde inferior)
```svelte
<div class="vanchi-container p-6 rounded">
  <Dropdown
    with_borders={false}
    items={[
      { title: "Requisitos técnicos", content: "Node.js 18+, Bun runtime..." },
      { title: "Stack recomendado", content: "SvelteKit, Convex, Tailwind..." }
    ]}
  />
</div>
```

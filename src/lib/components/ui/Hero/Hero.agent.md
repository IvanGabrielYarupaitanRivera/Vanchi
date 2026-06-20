# 🤖 AGENT RULES: Hero.svelte

**PROPÓSITO:** Renderizar el encabezado de una ruta según su profundidad (primary / secondary / tertiary).

**PROPS:**

| Prop | Type | Default | Requerido | Descripción |
|---|---|---|---|---|
| `level` | `'primary' \| 'secondary' \| 'tertiary'` | `'secondary'` | No | Nivel de profundidad visual |
| `title` | `string` | — | **Sí** | Título del hero |
| `subtitle` | `string \| undefined` | `undefined` | No | Texto secundario |
| `action_label` | `string \| undefined` | `undefined` | No | Texto del botón CTA |
| `action_onclick` | `(() => void) \| undefined` | `undefined` | No | Callback de navegación |
| `status_active` | `boolean` | `false` | No | Muestra SystemStatus (solo primary) |
| `italic_word` | `string \| undefined` | `undefined` | No | Palabra en itálica dentro del title (solo primary/secondary) |

**COMPORTAMIENTO POR NIVEL:**

| Nivel | Altura | SystemStatus | CTA | italic_word | subtitle |
|---|---|---|---|---|---|
| `primary` | `min-h-[90dvh]` | ✅ Arriba | ✅ Chalk abajo | ✅ En newline | ✅ Abajo |
| `secondary` | `min-h-[90dvh]` | ❌ Ignorado | ✅ Ghost derecha | ✅ Al lado | ✅ Derecha |
| `tertiary` | `min-h-0 py-12` | ❌ Ignorado | ❌ Ignorado | ❌ Ignorado | ✅ Como metadata |

**ANTI-PATRONES (NO HACER):**
- ❌ NUNCA pasar colores fijos (hex, rgb, tailwind colors). Usar tokens: `base-content`, `base-100`, `secondary`, etc.
- ❌ NUNCA `rounded-full`, `rounded-lg`, `rounded-xl`. El componente usa radius 4px implícito.
- ❌ Si `level="tertiary"`, NO pasar `action_label`, `action_onclick` ni `status_active`. Se ignoran.
- ❌ No inyectar HTML crudo en `title`. Usar `italic_word` para palabras en itálica.
- ❌ NO modificar el `min-h`. Está fijo por nivel.
- ❌ `action_onclick` espera un callback. El caller debe usar `goto(resolve(...))` internamente.

**EJEMPLOS:**

```svelte
<script lang="ts">
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';
</script>

<!-- Primary — Home -->
<Hero
  level="primary"
  title="Tu empresa debería funcionar sola"
  subtitle="Construyo agentes de IA que trabajan en background."
  action_label="Empezar"
  action_onclick={() => goto(resolve('/(main)/contacto'))}
  status_active={true}
  italic_word="sola"
/>

<!-- Secondary — Servicios -->
<Hero
  level="secondary"
  title="Servicios"
  subtitle="Automatización de procesos para empresas en Junín."
  action_label="Ver casos"
  action_onclick={() => goto(resolve('/(main)/proyectos'))}
/>

<!-- Tertiary — Política de privacidad -->
<Hero
  level="tertiary"
  title="/ legal / privacidad"
  subtitle="Actualizado: 2026"
/>
```

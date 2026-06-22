# 🤖 REGLAS DE EJECUCION PARA AGENTE: Hero.svelte

Este componente encapsula las cabeceras estructurales de todas las rutas del portafolio Vanchi.
Actua bajo el esquema **Dual-Layer Component Architecture**.

Tienes estrictamente **prohibido** reescribir este marcado o alterar sus clases globales.
Debes **importarlo y parametrizarlo**.

## 📐 Interfaz de Tipos (Props del Sistema)

```typescript
type HeroLevel = 'primary' | 'secondary' | 'tertiary';

interface HeroProps {
  level: HeroLevel;
  title: string;
  subtitle?: string;
  italic_word?: string;
  action_label?: string;
  action_onclick?: () => void;
  action_secondary_label?: string;       // solo primary
  action_secondary_onclick?: () => void;  // solo primary
  status_active?: boolean;
}
```

## 📊 Comportamiento por Nivel

| Nivel | Espaciado | SystemStatus | Botones | italic_word | subtitle |
|---|---|---|---|---|---|
| `primary` | `py-32` | ✅ Arriba | ✅ Primario + Secundario | ✅ En titulo | ✅ Abajo /60 |
| `secondary` | `py-20` | ❌ Ignorado | ✅ Solo primario (ghost) | ✅ En titulo | ✅ Derecha /60 |
| `tertiary` | `py-8` | ❌ Ignorado | ❌ Ignorado | ❌ Ignorado | ✅ Metadata derecha |

## ❌ ANTI-PATRONES

* NO pasar colores fijos. Usar solo tokens DaisyUI.
* NO `rounded-full`, `rounded-lg`, `rounded-xl`.
* Si `level="tertiary"`, NO pasar action_label, action_onclick ni status_active.
* Si `level="secondary"`, NO pasar action_secondary_label ni status_active.
* NO usar `{@html}` para italicas. Usar `italic_word`.
* `action_href` no existe. Usar `action_onclick` con `goto(resolve(...))`.

## 💻 Ejemplos

### Primary — Home
```svelte
<script lang="ts">
  import Hero from '$lib/components/ui/Hero/Hero.svelte';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';
</script>

<Hero
  level="primary"
  title="Tu empresa deberia funcionar sola"
  italic_word="sola"
  subtitle="Despliego agentes de IA que resuelven objetivos de negocio."
  action_label="Automatizar mi organizacion"
  action_onclick={() => goto(resolve('/(main)/contacto'))}
  action_secondary_label="Iniciar consulta con agente"
  action_secondary_onclick={() => goto(resolve('/(chat)/chat'))}
  status_active={true}
/>
```

### Secondary — Seccion
```svelte
<Hero
  level="secondary"
  title="Servicios"
  italic_word="IA"
  subtitle="Automatizacion de procesos para empresas en Junin."
  action_label="Ver casos"
  action_onclick={() => goto(resolve('/(main)/proyectos'))}
/>
```

### Tertiary — Legal
```svelte
<Hero
  level="tertiary"
  title="vanchi.pro / politicas de privacidad"
  subtitle="Ultima revision: Junio 2026"
/>
```

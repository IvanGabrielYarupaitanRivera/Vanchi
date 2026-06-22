# 🤖 REGLAS DE EJECUCION PARA AGENTE: Hero.svelte

Componente que encapsula las cabeceras estructurales de todas las rutas.
Actua bajo el esquema **Dual-Layer Component Architecture**.

Tienes estrictamente **prohibido** reescribir este marcado o alterar sus clases globales.
Debes **importarlo y parametrizarlo**.

## 🎨 Diseño visual (solo nivel primary)

El nivel `primary` incluye:
- **Fondo:** Retícula de ingeniería 40×40 + puntos 2px cada 40px (SVG inline, `background-image`)
- **Esquinas:** L-brackets en `border-secondary` en top-left y bottom-left del header
- **Sin borde izquierdo continuo.** Las esquinas son independientes.
- **bg-base-100** (fondo sólido, sin textura en niveles secondary/tertiary)

## 📐 Interfaz de Tipos

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

| Nivel | Altura | SystemStatus | Botones | italic_word | subtitle |
|---|---|---|---|---|---|
| `primary` | `py-32 lg:py-48` | ✅ Arriba | ✅ `btn-primary` + `btn-outline` | ✅ En título | ✅ Abajo |
| `secondary` | `py-20 lg:py-32` | ❌ Ignorado | ✅ Solo `btn-outline` | ✅ En título | ✅ Derecha |
| `tertiary` | `py-8 lg:py-12` | ❌ Ignorado | ❌ Ignorado | ❌ Ignorado | ✅ Metadata derecha |

## ❌ ANTI-PATRONES

* NO pasar colores fijos. Usar solo tokens DaisyUI.
* NO `rounded-full`, `rounded-lg`, `rounded-xl`.
* Si `level="tertiary"`, NO pasar `action_label`, `action_onclick` ni `status_active`.
* Si `level="secondary"`, NO pasar `action_secondary_label` ni `status_active`.
* NO usar `{@html}` para itálicas. Usar `italic_word`.
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
  title="Tu empresa debería funcionar sola"
  italic_word="sola"
  subtitle="Despliego agentes de IA que resuelven objetivos de negocio."
  action_label="Automatizar mi organización"
  action_onclick={() => goto(resolve('/(main)/contacto'))}
  action_secondary_label="Iniciar consulta con agente"
  action_secondary_onclick={() => goto(resolve('/(chat)/chat'))}
  status_active={true}
/>
```

### Secondary — Sección
```svelte
<Hero
  level="secondary"
  title="Servicios"
  italic_word="IA"
  subtitle="Automatización de procesos para empresas en Junín."
  action_label="Ver casos"
  action_onclick={() => goto(resolve('/(main)/proyectos'))}
/>
```

### Tertiary — Legal
```svelte
<Hero
  level="tertiary"
  title="vanchi.pro / políticas de privacidad"
  subtitle="Última revisión: Junio 2026"
/>
```

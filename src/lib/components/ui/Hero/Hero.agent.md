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
  status_active?: boolean;
}
```

## 📊 Comportamiento por Nivel

| Nivel | Altura | SystemStatus | CTA | italic_word | subtitle |
|---|---|---|---|---|---|
| `primary` | `py-24` | ✅ Arriba | ✅ Chalk | ✅ En titulo | ✅ Abajo |
| `secondary` | `py-16` | ❌ Ignorado | ✅ Ghost derecha | ✅ En titulo | ✅ Derecha |
| `tertiary` | `py-8` | ❌ Ignorado | ❌ Ignorado | ❌ Ignorado | ✅ Metadata derecha |

## ❌ ANTI-PATRONES DE CONTEXTO (Prohibiciones Inquebrantables)

* **Cero Estilos Propios:** No intentes pasar clases utilitarias de Tailwind como `bg-zinc-900`,
  `shadow-2xl` o `rounded-xl`. El componente fuerza `bg-base-100` y `border-base-300` nativamente.
* **Restriccion de Botones:** En `level="tertiary"`, las props `action_label`, `action_onclick`
  y `status_active` se omiten. No las declares.
* **Tipografia Protegida:** El componente mapea `.vanchi-display` (serif) para H1 y `font-mono`
  (JetBrains Mono) para bloques secundarios.
* **Inyeccion Limpia:** Nunca uses `{@html}` para inyectar italicas. Pasa la palabra exacta
  via `italic_word`. El componente usa `$derived.by()` para segmentar el titulo.

## 💻 Patrones de Composicion Correctos

### Caso 1: Ruta Raiz (`src/routes/(main)/+page.svelte`)

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
  subtitle="Despliego agentes de IA que resuelven objetivos de negocio de extremo a extremo."
  action_label="Automatizar mi organizacion"
  action_onclick={() => goto(resolve('/(main)/contacto'))}
  status_active={true}
/>
```

### Caso 2: Paginas de Seccion (`src/routes/(main)/sectores/salud/+page.svelte`)

```svelte
<script lang="ts">
  import Hero from '$lib/components/ui/Hero/Hero.svelte';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';
</script>

<Hero
  level="secondary"
  title="Optimizacion de sistemas clinicos"
  italic_word="clinicos"
  subtitle="Resolucion de cuellos de botella en admision mediante agentes autonomos."
  action_label="Ver Casos de Exito"
  action_onclick={() => goto(resolve('/(main)/proyectos'))}
/>
```

### Caso 3: Documento Legal (`src/routes/(main)/politica-de-privacidad/+page.svelte`)

```svelte
<script lang="ts">
  import Hero from '$lib/components/ui/Hero/Hero.svelte';
</script>

<Hero
  level="tertiary"
  title="vanchi.pro / politicas de privacidad"
  subtitle="Ultima revision: Junio 2026"
/>
```

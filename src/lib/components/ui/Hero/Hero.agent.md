# 🤖 REGLAS DE EJECUCION PARA AGENTE: Hero.svelte

Componente que encapsula las cabeceras estructurales de todas las rutas.
Actua bajo el esquema **Dual-Layer Component Architecture**.

Debes **importarlo y parametrizarlo**. Prohibido reescribir el marcado.

## 🎨 Diseño visual

Todos los niveles excepto tertiary incluyen:
- Fondo: reticula 40x40 + puntos 2px/40px (SVG inline, background-image)
- Esquinas L en border-secondary en las 4 puntas del header
- Sin bordes laterales continuos

## 📐 Interfaz de Tipos

```typescript
type HeroLevel = 'primary' | 'secondary' | 'profile' | 'tertiary';

interface HeroProps {
  level: HeroLevel;
  title: string;
  subtitle?: string;
  italic_word?: string;
  action_label?: string;
  action_onclick?: () => void;
  action_secondary_label?: string;
  action_secondary_onclick?: () => void;
  status_active?: boolean;        // solo primary
  image?: string;                  // solo profile
  image_alt?: string;              // solo profile
  image_caption?: string;          // solo profile
  children?: Snippet;              // solo profile (metadata chips)
}
```

## 📊 Comportamiento por Nivel

| Nivel | Altura | SystemStatus | Imagen | Botones | italic_word |
|---|---|---|---|---|---|
| `primary` | `py-32 lg:py-48` | Si arriba | No | primary + outline-primary | Si |
| `secondary` | `py-24 lg:py-40` | No | No | primary + outline-primary | Si |
| `profile` | `py-32 lg:py-48` | No | Si (derecha) | primary + outline-primary | Si |
| `tertiary` | `py-8 lg:py-12` | No | No | No | No |

## ❌ ANTI-PATRONES

* NO pasar colores fijos. Usar solo tokens DaisyUI.
* NO `rounded-full`, `rounded-lg`, `rounded-xl`.
* Si `level="tertiary"`, NO pasar action_label, action_onclick, status_active ni image.
* NO usar `{@html}` para italicas. Usar `italic_word`.
* Usar `action_onclick` con `goto(resolve(...))`.

## 💻 Ejemplos

### Primary — Home
```svelte
<Hero level="primary" title="Tu empresa deberia funcionar sola"
  italic_word="sola" subtitle="..."
  action_label="Automatizar" action_onclick={() => goto(resolve('/(main)/contacto'))}
  action_secondary_label="Consultar" action_secondary_onclick={() => goto(resolve('/(chat)/chat'))}
  status_active={true} />
```

### Secondary — Seccion
```svelte
<Hero level="secondary" title="Servicios"
  subtitle="Automatizacion de procesos."
  action_label="Ver casos" action_onclick={() => goto(resolve('/(main)/proyectos'))} />
```

### Profile — Pagina personal
```svelte
<Hero level="profile" title="Ivan Gabriel Yarupaitan Rivera"
  subtitle="Ingeniero de Sistemas..."
  action_label="LinkedIn" action_onclick={() => window.open('https://linkedin.com/...')}
  action_secondary_label="Proyectos" action_secondary_onclick={() => goto(resolve('/(main)/proyectos'))}
  image={ivan} image_alt="Ivan" image_caption="Ivan // Huancayo">
  {#snippet children()}
    <div class="flex flex-wrap gap-4 font-mono text-sm text-base-content/50">
      <span>Huancayo, Peru</span>
      <span>Disponible ahora</span>
      <span>Full-Stack & IA</span>
    </div>
  {/snippet}
</Hero>
```

### Tertiary — Legal
```svelte
<Hero level="tertiary" title="vanchi.pro / politicas de privacidad"
  subtitle="Ultima revision: Junio 2026" />
```

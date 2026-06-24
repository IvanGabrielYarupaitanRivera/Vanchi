# 🤖 REGLAS DE EJECUCION PARA AGENTE: SectionLayout.svelte

Esqueleto unificado de seccion. Reemplaza el patron `section > container > eyebrow + grid` que se repite en todo el proyecto.
Debe **importarse**, nunca recrearse manualmente.

## 📐 Interfaz de Tipos

```typescript
type SectionVariant = 'primary' | 'secondary';

interface SectionLayoutProps {
  variant?: SectionVariant;   // default: 'primary'
  number: string;              // "01", "02", "A", etc.
  label: string;               // "EVIDENCIA", "PROYECTOS", etc.
  title?: string;              // Solo primary. Texto antes del italic_word
  italic_word?: string;        // Palabra en cursiva (segunda linea con <br>)
  description?: string;        // Solo primary. Parrafo explicativo
  children: Snippet;           // Contenido (der en primary, unica columna en secondary)
  children_left?: Snippet;     // Contenido extra bajo descripcion en columna izq (solo primary)
}
```

## 📊 Comportamiento por Variant

| Variant | Layout | Titulo | Descripcion | Uso |
|---|---|---|---|---|
| `primary` | Grid 5/7 (izq/der) | `vanchi-display` H2 + `italic_word` | `text-base-content/60` + `children_left` | Home, landing |
| `secondary` | Una columna | No | No | Sub-paginas, secciones menores |

## 📋 Reglas de uso

1. **Siempre pasar `number` y `label`.** Son obligatorios.
2. **`variant="primary"`** espera `title` e `italic_word`. Si no se pasa `italic_word`, el `<br />` igual se genera pero sin italica.
3. **`variant="secondary"`** ignora `title`, `italic_word` y `description` si se pasan.
4. El contenido va dentro via Snippet `{#snippet children()}` o directamente como children.
5. Compatible con `DataBlock`, `IndexList`, `GridTwo` y cualquier otro componente adentro.

## ❌ ANTI-PATRONES

* NO copiar `section > div.max-w-5xl > div.flex.items-center.gap-2.5` manualmente. Importar SectionLayout.
* NO modificar `py-40`, `gap-16`, `lg:gap-24`. Son fijos del componente.
* NO agregar otro `border-t` extra. El componente ya lo incluye.
* NO pasar colores fijos o clases de Tailwind manuales en el contenedor.

## 💻 Ejemplos

### Primary — Home
```svelte
<script lang="ts">
  import SectionLayout from '$lib/components/ui/SectionLayout/SectionLayout.svelte';
</script>

<SectionLayout
  variant="primary"
  number="01"
  label="EVIDENCIA"
  title="Seis proyectos pagados por clientes reales"
  italic_word="pagados"
  description="Gobierno Regional de Junin, Universidad Roosevelt..."
>
  <DataBlock level="compact" hover={true}>
    <span class="...">Contenido</span>
  </DataBlock>
</SectionLayout>
```

### Primary con children_left
```svelte
<SectionLayout
  variant="primary"
  number="04"
  label="AUTOR"
  title="Ivan Yarupaitan Rivera"
  italic_word="Rivera"
  description="Especialista en inteligencia artificial..."
>
  {#snippet children_left()}
    <a href={resolve('/(main)/ivan-yarupaitan-rivera')} class="mt-6 ...">
      Conocer mi trayectoria →
    </a>
  {/snippet}
  <DataBlock level="compact">
    ...
  </DataBlock>
</SectionLayout>
```

### Secondary — Sub-pagina
```svelte
<SectionLayout variant="secondary" number="03" label="FAQ">
  <div class="space-y-px">
    <!-- contenido de una columna -->
  </div>
</SectionLayout>
```

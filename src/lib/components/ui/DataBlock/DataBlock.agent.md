# 🤖 REGLAS DE EJECUCION PARA AGENTE: DataBlock.svelte

Contenedor universal de contenido. Reemplaza TODAS las variaciones de "card" en el proyecto.
Debe **importarse**, nunca recrearse manualmente el patron `bg-base-200 border border-base-300`.

## 📐 Interfaz de Tipos

```typescript
type DataBlockLevel = 'default' | 'compact' | 'elevated';

interface DataBlockProps {
  level?: DataBlockLevel;   // default: 'default'
  padding?: boolean;        // default: true. false = contenido sin padding interno
  hover?: boolean;          // default: false. Agrega hover:-translate-y-0.5 + hover:border-base-content
  children: Snippet;        // Contenido del bloque
}
```

## 📊 Comportamiento por Nivel

| Nivel | Padding | Fondo | Uso |
|---|---|---|---|
| `default` | `p-8 lg:p-10` | `bg-base-200` | Cards estandar, ~80% de los casos |
| `compact` | `p-6 lg:p-8` | `bg-base-200` | Cards en grids densos, sub-items |
| `elevated` | `p-8 lg:p-10` | `bg-neutral` | Solo 1 por pagina (destacar seccion) |

## 📋 Reglas de uso

1. **DataBlock es un contenedor.** El contenido va dentro via Snippet.
2. **Cuando es un link**, envuelve el `DataBlock` dentro de un `<a>` o coloca el `<a>` dentro del children. El DataBlock no renderiza `<a>` por si mismo.
3. **Usa `padding={false}`** cuando necesites que el contenido controle su propio padding (ej. imagenes, grids internos).
4. **Usa `hover={true}`** solo cuando el DataBlock sea clickeable o represente una accion de navegacion.

## ❌ ANTI-PATRONES

* NO copiar `bg-base-200 border border-base-300 p-8 lg:p-10` manualmente. Importar DataBlock.
* NO usar `bg-base-100` ni `bg-base-300` como fondo de cards.
* NO agregar `rounded-full`, `rounded-lg`, `rounded-xl`, `shadow`, `blur` o `backdrop-filter`.
* NO modificar el padding desde clases externas. Usar la prop `padding`.
* NO anidar DataBlocks (un DataBlock dentro de otro).
* NO usar `level="elevated"` mas de una vez por pagina.

## 💻 Ejemplos

### Default basico
```svelte
<script lang="ts">
  import DataBlock from '$lib/components/ui/DataBlock/DataBlock.svelte';
</script>

<DataBlock>
  <p class="font-mono text-sm text-base-content/80">Contenido del bloque</p>
</DataBlock>
```

### Compact con hover (link clickeable)
```svelte
<a href={resolve('/(main)/servicios/[servicio]', { servicio: 'agentes-ia' })} class="block">
  <DataBlock level="compact" hover={true}>
    <p class="font-mono text-sm text-base-content">Agentes IA</p>
    <p class="font-mono text-xs text-base-content/60">Agentes autonomos 24/7</p>
  </DataBlock>
</a>
```

### Elevated (destacar, solo 1 por pagina)
```svelte
<DataBlock level="elevated">
  <h2 class="vanchi-display text-3xl">Seccion destacada</h2>
  <p class="font-mono text-sm text-base-content/80">Este bloque tiene fondo neutral.</p>
</DataBlock>
```

### Sin padding (para contenido visual)
```svelte
<DataBlock padding={false}>
  <img src="/path/to/image.jpg" alt="..." class="w-full" />
</DataBlock>
```

# 🧠 Vanchi UI — Sistema de Componentes de Doble Capa

> **¿Qué es esto?** Una biblioteca de componentes Svelte 5 diseñada bajo la **Arquitectura de Doble Capa (Dual-Layer)**:
> - **Capa 1 (Componentes):** Contenedores estrictos que encapsulan las reglas visuales de The Invisible Ledger. SE IMPORTAN.
> - **Capa 2 (Snippets):** El agente inyecta contenido personalizado usando `{#snippet}` de Svelte 5.
>
> **Filosofía:** No confiar en que el agente recuerde reglas visuales. Forzarlas desde el componente.

---

## 📋 ¿Por qué esta arquitectura?

| Enfoque | Problema |
|---|---|
| ❌ Copiar y adaptar el código en cada página | 12 fuentes de verdad. Cambiar un padding = modificar 12 archivos. |
| ❌ Componentes tradicionales con 50 props | Rígidos, limitan la variabilidad visual |
| ✅ **Doble Capa (importar + snippets)** | Reglas forzadas + contenido flexible |

---

## 🎯 Reglas globales (forzadas por los componentes)

Estas reglas están **encapsuladas en los componentes**. El agente NO puede romperlas aunque quiera:

- ✅ Dark mode solo. Superficies sólidas (`bg-base-100`, `bg-base-200`).
- ✅ Tipografía: JetBrains Mono para TODO. Newsreader solo vía `vanchi-display`.
- ✅ Separación: solo bordes 1px `border-base-300`. Sin sombras.
- ✅ border-radius: máximo 4px (`rounded`). Sin `rounded-full`.
- ✅ Sin gold, sin gradientes, sin glass, sin blur, sin backdrop-filter.
- ✅ Phosphor green solo como dot de 6px vía `SystemStatus`.
- ✅ Motion mínimo: `duration-100`, `hover:-translate-y-0.5`.
- ✅ Composición asimétrica. Nunca 3 elementos iguales en fila.
- ✅ Solo tokens DaisyUI (`base-content`, `secondary`, `accent`, etc.). Sin colores fijos.

---

## 📦 Inventario de componentes

| Componente | Propósito | Niveles | Snippets |
|---|---|---|---|
| `Hero/` | Encabezado de expediente | `primary`, `secondary`, `tertiary` | Contenido vía props |
| `SystemStatus/` | Dot indicador de estado | `active`, `idle`, `error` | — |
| `DataBlock/` | Contenedor universal | `default`, `compact`, `elevated` | `header`, `children`, `footer` |

---

## 🔍 Cómo usar un componente (para el agente)

```
1. LEO el .agent.md del componente
2. IMPORTO el componente desde $lib/components/ui/<Componente>/<Componente>.svelte
3. USO snippets ({#snippet}) cuando necesito inyectar contenido personalizado
4. NUNCA reescribo las reglas visuales (bordes, fondos, tipografía)
```

```svelte
<!-- ✅ CORRECTO: Importar + snippets -->
<script lang="ts">
  import Hero from '$lib/components/ui/Hero/Hero.svelte';
</script>

<Hero level="primary" title="..." subtitle="..." />

<!-- ❌ INCORRECTO: No copiar el HTML del Hero manualmente -->
<section class="flex min-h-[90dvh] ...">  <!-- NO -->
```

---

## 📐 Niveles de profundidad

| Nivel | Cuándo | Rutas |
|---|---|---|
| `primary` | Landing principal | `/` (Home) |
| `secondary` | Páginas de sección | `/servicios`, `/sectores`, `/proyectos`, etc. |
| `tertiary` | Sub-páginas, legales | Políticas, detalles |

---

## 📁 Estructura

```
src/lib/components/ui/
├── README.md
├── Hero/
│   ├── Hero.svelte        ← IMPORTABLE. Contenedor estricto.
│   └── Hero.agent.md      ← Reglas para el agente.
├── SystemStatus/
│   ├── SystemStatus.svelte
│   └── SystemStatus.agent.md
├── DataBlock/
│   ├── DataBlock.svelte    ← (próximo) Con snippets header/children/footer
│   └── DataBlock.agent.md
└── ...
```

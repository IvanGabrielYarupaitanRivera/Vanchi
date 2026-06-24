<script lang="ts">
	/**
	 * @component DataBlock.svelte
	 * @description Contenedor universal que reemplaza todas las variaciones de "card" en el proyecto.
	 *
	 * Niveles:
	 * - default:  border base-300, bg-base-200, p-8 lg:p-10
	 * - compact:  border base-300, bg-base-200, p-6 lg:p-8
	 * - elevated: border base-300, bg-neutral,  p-8 lg:p-10  (solo 1 por pagina)
	 *
	 * hover=true agrega:
	 *   group transition-all duration-100 hover:-translate-y-0.5 hover:border-base-content
	 *
	 * ANTI-PATRONES:
	 * - NO usar bg-base-100 ni bg-base-300 como fondo directo.
	 * - NO agregar rounded-full, rounded-lg, shadow, blur o backdrop-filter.
	 * - NO modificar el padding manualmente desde fuera (usar padding prop).
	 * - NO anidar DataBlocks.
	 */

	import type { Snippet } from 'svelte';

	type DataBlockLevel = 'default' | 'compact' | 'elevated';

	let {
		level = 'default' as DataBlockLevel,
		padding = true,
		hover = false,
		children
	}: {
		level?: DataBlockLevel;
		padding?: boolean;
		hover?: boolean;
		children: Snippet;
	} = $props();

	const base = 'card border border-base-300';

	const bg = $derived(level === 'elevated' ? 'bg-neutral' : 'bg-base-200');

	const pad = $derived(
		!padding
			? ''
			: level === 'compact'
				? 'p-6 lg:p-8'
				: 'p-8 lg:p-10'
	);

	const fx = $derived(
		hover
			? 'group transition-all duration-100 hover:-translate-y-0.5 hover:border-base-content'
			: ''
	);

	const containerClass = $derived([base, bg, pad, fx].filter(Boolean).join(' '));
</script>

<div class={containerClass}>
	{@render children()}
</div>

<script lang="ts">
	/**
	 * @component DataBlock.svelte
	 * @description Contenedor universal que reemplaza todas las variaciones de "card" en el proyecto.
	 *
	 * Niveles:
	 * - default: border base-300, bg-base-200, p-8 lg:p-10
	 * - compact: border base-300, bg-base-200, p-6 lg:p-8
	 * - elevated: border base-300, bg-neutral, p-8 lg:p-10 (solo 1 por pagina)
	 *
	 * ANTI-PATRONES:
	 * - NO usar bg-base-100 ni bg-base-300 como fondo directo.
	 * - NO agregar rounded-full, rounded-lg, shadow, blur o backdrop-filter.
	 * - NO modificar el padding manualmente desde fuera (usar padding prop).
	 * - NO anidar DataBlocks (un DataBlock dentro de otro pierde la semantica de contenedor).
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

	const containerClass = $derived.by(() => {
		const classes = ['card', 'border', 'border-base-300'];

		// Background segun nivel
		classes.push(level === 'elevated' ? 'bg-neutral' : 'bg-base-200');

		// Padding segun nivel y flag
		if (padding) {
			if (level === 'compact') {
				classes.push('p-6', 'lg:p-8');
			} else {
				classes.push('p-8', 'lg:p-10');
			}
		}

		// Hover effects
		if (hover) {
			classes.push('transition-all', 'duration-100', 'hover:-translate-y-0.5', 'hover:border-base-content');
		}

		return classes.join(' ');
	});
</script>

<div class={containerClass}>
	{@render children()}
</div>

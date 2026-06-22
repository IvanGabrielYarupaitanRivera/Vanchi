<script lang="ts">
	/**
	 * @component CommandAction.svelte
	 * @description Boton CTA con variantes de estilo.
	 *
	 * Niveles:
	 * - primary: btn-primary (chalk-on-charcoal, filled)
	 * - outline-primary: btn-outline btn-primary (borde chalk)
	 * - ghost: btn-ghost text-base-content (sin borde)
	 * - secondary: btn-neutral (gris oscuro, filled)
	 *
	 * ANTI-PATRONES:
	 * - NO pasar colores fijos. Usar solo los niveles definidos.
	 * - NO modificar el uppercase. El componente lo fuerza.
	 */

	import type { Component } from 'svelte';

	type ActionLevel = 'primary' | 'outline-primary' | 'ghost' | 'secondary';

	let {
		level = 'primary' as ActionLevel,
		label,
		onclick,
		icon: Icon
	}: {
		level?: ActionLevel;
		label: string;
		onclick?: () => void;
		icon?: Component;
	} = $props();

	const btnClass = $derived(
		level === 'primary'
			? 'btn btn-primary uppercase'
			: level === 'outline-primary'
				? 'btn btn-outline btn-primary uppercase'
				: level === 'ghost'
					? 'btn btn-ghost text-base-content uppercase'
					: 'btn btn-neutral uppercase'
	);
</script>

<button {onclick} type="button" class={btnClass}>
	{#if Icon}
		<Icon class="h-4 w-4"></Icon>
	{/if}
	{label}
</button>

<script lang="ts">
	/**
	 * @component CommandAction.svelte
	 * @description CTA button/link con variantes de estilo.
	 *
	 * Renderiza <a> si recibe href, <button> si recibe onclick.
	 * Nunca ambos. Si se pasan ambos, href tiene prioridad.
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
		href,
		onclick,
		icon: Icon,
		target,
		rel
	}: {
		level?: ActionLevel;
		label: string;
		href?: string;
		onclick?: () => void;
		icon?: Component;
		target?: string;
		rel?: string;
	} = $props();

	const isExternal = $derived(href?.startsWith('http'));

	const resolvedTarget = $derived(target ?? (isExternal ? '_blank' : undefined));

	const resolvedRel = $derived(
		rel ?? (isExternal ? 'external noopener noreferrer' : undefined)
	);

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

{#if href}
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a {href} target={resolvedTarget} rel={resolvedRel} class={btnClass}>
		{#if Icon}
			<Icon class="h-4 w-4" />
		{/if}
		{label}
	</a>
{:else}
	<button {onclick} type="button" class={btnClass}>
		{#if Icon}
			<Icon class="h-4 w-4" />
		{/if}
		{label}
	</button>
{/if}

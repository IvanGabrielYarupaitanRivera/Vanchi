<script lang="ts">
	/**
	 * @component SectionLayout.svelte
	 * @description Esqueleto unificado para secciones del portafolio.
	 *
	 * Variants:
	 * - primary:   Eyebrow + grid 5/7 con titulo/descripcion a la izq
	 * - secondary: Eyebrow + contenido de una columna
	 *
	 * ANTI-PATRONES:
	 * - NO usar fuera de una seccion con vanchi-hairline border-t.
	 * - NO pasar colores fijos (usa solo tokens DaisyUI).
	 * - NO modificar el padding de la seccion manualmente.
	 * - NO agregar titulo ni descripcion si variant="secondary".
	 */

	import type { Snippet } from 'svelte';

	type SectionVariant = 'primary' | 'secondary';

	let {
		variant = 'primary' as SectionVariant,
		number,
		label,
		title,
		italic_word,
		description,
		children,
		children_left
	}: {
		variant?: SectionVariant;
		number: string;
		label: string;
		title?: string;
		italic_word?: string;
		description?: string;
		children: Snippet;
		children_left?: Snippet;
	} = $props();
</script>

<section class="w-full border-t vanchi-hairline py-40">
	<div class="mx-auto max-w-5xl px-4">
		<!-- Eyebrow con dot (siempre presente) -->
		<div class="mb-16 flex items-center gap-2.5">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">{number} // {label}</span>
		</div>

		{#if variant === 'primary'}
			<div class="grid gap-16 lg:grid-cols-12 lg:gap-24">
				<div class="lg:col-span-5">
					{#if title}
						<h2 class="vanchi-display text-3xl font-normal lg:text-5xl">
							{title}<br />
							{#if italic_word}
								<span class="italic">{italic_word}</span>
							{/if}
						</h2>
					{/if}
					{#if description}
						<p class="mt-8 font-mono text-sm leading-relaxed text-base-content/60">{description}</p>
					{/if}
					{#if children_left}
						{@render children_left()}
					{/if}
				</div>
				<div class="lg:col-span-7">
					{@render children()}
				</div>
			</div>
		{:else}
			{@render children()}
		{/if}
	</div>
</section>

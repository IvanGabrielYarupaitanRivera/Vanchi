<script lang="ts">
	/**
	 * @component Dropdown.svelte
	 * @description Lista colapsable de items (preguntas, conceptos, metadatos).
	 * Usa DaisyUI collapse + input[type=checkbox] para toggle independiente por item.
	 *
	 * ANTI-PATRONES:
	 * - NO usar fuera de un SectionLayout o contenedor con espaciado vertical.
	 * - NO pasar colores fijos (usa solo tokens DaisyUI).
	 * - NO anidar Dropdown dentro de Dropdown.
	 * - NO mezclar with/without_borders en una misma instancia.
	 * - NO usar para contenido extenso (párrafos de 3+ líneas máx).
	 */

	interface DropdownItem {
		title: string;
		content: string;
	}

	let {
		items,
		with_borders = true,
		class: className = ''
	}: {
		items: readonly DropdownItem[];
		with_borders?: boolean;
		class?: string;
	} = $props();
</script>

<div class="space-y-px {className}">
	{#each items as item (item.title)}
		<div
			class="collapse collapse-arrow {with_borders ? 'border border-base-300' : 'border-b border-base-300'} bg-base-200 rounded"
		>
			<input type="checkbox" />
			<div class="collapse-title font-mono text-sm font-medium text-base-content">
				{item.title}
			</div>
			<div class="collapse-content">
				<p class="font-mono text-sm leading-relaxed text-base-content/70">{item.content}</p>
			</div>
		</div>
	{/each}
</div>

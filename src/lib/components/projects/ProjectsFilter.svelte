<script lang="ts">
	import { ListFilter } from '@lucide/svelte';

	let { categories, activeCategory, onCategoryChange } = $props<{
		categories: string[];
		activeCategory: string;
		onCategoryChange: (category: string) => void;
	}>();

	function selectCategory(category: string) {
		if (category !== activeCategory) onCategoryChange(category);
	}
</script>

<nav aria-label="Filtro de proyectos" class="flex flex-col items-center gap-4">
	<div class="flex items-center gap-2 text-base-content/70">
		<ListFilter size={16} class="text-primary" />
		<span class="text-xs font-bold tracking-widest uppercase">Filtrar por categoría</span>
	</div>

	<div class="flex w-full flex-wrap justify-center gap-2">
		{#each categories as category (category)}
			<button
				type="button"
				class="btn btn-sm"
				class:btn-primary={activeCategory === category}
				class:btn-neutral={activeCategory !== category}
				aria-pressed={activeCategory === category}
				onclick={() => selectCategory(category)}
			>
				{category}
			</button>
		{/each}
	</div>
</nav>
|

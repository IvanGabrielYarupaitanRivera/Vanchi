<script lang="ts">
	import { ListFilter } from '@lucide/svelte';

	let { categories, activeCategory, onCategoryChange } = $props<{
		categories: { name: string; count: number }[];
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
		{#each categories as { name, count } (name)}
			{@const isActive = activeCategory === name}
			<button
				type="button"
				class="group btn transition-all duration-300 ease-out btn-sm
                {isActive ? 'btn-primary' : ''}"
				aria-pressed={isActive}
				onclick={() => selectCategory(name)}
			>
				<span class="text-xs">{name}</span>

				<span class="badge badge-ghost badge-xs">
					{count}
				</span>
			</button>
		{/each}
	</div>
</nav>

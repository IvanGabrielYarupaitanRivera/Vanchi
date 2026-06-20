<script lang="ts">
	import { resolve } from '$app/paths';
	import { SvelteMap } from 'svelte/reactivity';

	export interface ProjectItem {
		id: number;
		title: string;
		category: string;
		description: string;
		tags: string[];
		slug: string;
		date: string;
	}

	let { projects }: { projects: readonly ProjectItem[] } = $props();

	let selectedCategory = $state<string | undefined>(undefined);

	const categories = $derived.by(() => {
		const all = new Set(projects.map((p) => p.category));
		return ['Todos', ...all];
	});

	const filtered = $derived(
		!selectedCategory || selectedCategory === 'Todos'
			? projects
			: projects.filter((p) => p.category === selectedCategory)
	);

	const counts = $derived.by(() => {
		const map = new SvelteMap<string, number>();
		for (const p of projects) {
			map.set(p.category, (map.get(p.category) ?? 0) + 1);
		}
		return map;
	});
</script>

<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">01 // CASOS DE EXITO</span>
		</div>

		<div class="mb-12 flex flex-wrap gap-6 font-mono text-sm text-base-content/50">
			<span>{projects.length} casos de exito</span>
			<span>{categories.length - 1} categorias</span>
			<span>{new Set(projects.flatMap((p) => p.tags)).size} tecnologias</span>
			<span>Metodologia GaaS</span>
		</div>

		<div class="mb-10 flex flex-wrap gap-1">
			<button
				onclick={() => (selectedCategory = undefined)}
				class="px-3 py-1.5 font-mono text-xs border duration-100 {selectedCategory === undefined || selectedCategory === 'Todos' ? 'border-base-content text-base-content' : 'border-base-300 text-base-content/50 hover:border-base-content hover:text-base-content'}"
			>
				Todos ({projects.length})
			</button>
			{#each categories as cat (cat)}
				{@const isActive = cat === selectedCategory}
				{#if cat !== 'Todos'}
					<button
						onclick={() => (selectedCategory = cat)}
						class="px-3 py-1.5 font-mono text-xs border duration-100 {isActive ? 'border-base-content text-base-content' : 'border-base-300 text-base-content/50 hover:border-base-content hover:text-base-content'}"
					>
						{cat} ({counts.get(cat) ?? 0})
					</button>
				{/if}
			{/each}
		</div>

		{#if filtered.length === 0}
			<p class="font-mono text-sm text-base-content/40">No hay proyectos en esta categoria.</p>
		{:else}
			{@const first = filtered[0]}
			{@const rest = filtered.slice(1)}

			<a
				href={resolve('/(main)/proyectos/[projectId]', { projectId: first.slug })}
				class="card bg-base-200 border border-base-300 p-8 transition-all duration-100 hover:-translate-y-0.5 hover:border-base-content group lg:p-10 mb-px"
			>
				<div class="flex items-start gap-8">
					<div class="grow">
						<span class="mb-3 block font-mono text-xs tracking-[0.15em] text-secondary">
							{first.category.toUpperCase()}
						</span>
						<h2 class="vanchi-display mb-4 text-3xl font-normal lg:text-5xl">
							{first.title}
						</h2>
						<p class="font-mono text-sm leading-relaxed text-base-content/60 mb-4">
							{first.description}
						</p>
						<div class="flex flex-wrap gap-2">
							{#each first.tags as tag (tag)}
								<span class="border border-base-300 px-2 py-0.5 font-mono text-[10px] text-base-content/40">{tag}</span>
							{/each}
						</div>
					</div>
					<div class="hidden shrink-0 flex-col items-end justify-between lg:flex">
						<span class="font-mono text-xs text-base-content/30">{first.date}</span>
						<span class="font-mono text-sm text-base-content transition-transform duration-100 group-hover:translate-x-1">→</span>
					</div>
				</div>
			</a>

			<div class="grid grid-cols-1 gap-px lg:grid-cols-2">
				{#each rest as project (project.id)}
					<a
						href={resolve('/(main)/proyectos/[projectId]', { projectId: project.slug })}
						class="card bg-base-200 border border-base-300 p-6 transition-all duration-100 hover:-translate-y-0.5 hover:border-base-content group lg:p-8"
					>
						<div class="flex items-start justify-between gap-4 mb-4">
							<span class="font-mono text-xs tracking-[0.15em] text-secondary">
								{project.category.toUpperCase()}
							</span>
							<span class="font-mono text-[10px] text-base-content/30">{project.date}</span>
						</div>

						<h2 class="vanchi-display mb-3 text-3xl font-normal lg:text-5xl">
							{project.title}
						</h2>
						<p class="font-mono text-sm leading-relaxed text-base-content/60 mb-4 line-clamp-3">
							{project.description}
						</p>
						<div class="flex flex-wrap gap-2">
							{#each project.tags as tag (tag)}
								<span class="border border-base-300 px-2 py-0.5 font-mono text-[10px] text-base-content/40">{tag}</span>
							{/each}
						</div>
						<span class="mt-4 inline-block font-mono text-sm text-base-content transition-transform duration-100 group-hover:translate-x-1">→</span>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</section>

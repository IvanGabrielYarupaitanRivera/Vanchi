<script lang="ts">
	import { useQuery } from 'convex-svelte';
	import { api } from '$convex/_generated/api';
	import { resolve } from '$app/paths';
	import { Plus, X } from '@lucide/svelte';
	import { CATEGORIAS, SUBCATEGORIAS } from '$convex/entidades/documentosV2/literals';

	let catFiltro = $state<typeof CATEGORIAS[number] | undefined>(undefined);
	let subFiltro = $state<typeof SUBCATEGORIAS[number] | undefined>(undefined);

	const query = useQuery(api.entidades.documentosV2.queries.buscar,
		() => ({ categoria: catFiltro, subcategoria: subFiltro })
	);

	const totalQuery = useQuery(api.entidades.documentosV2.queries.listar, {});

	function limpiar() {
		catFiltro = undefined;
		subFiltro = undefined;
	}

	const hayFiltro = $derived(catFiltro !== undefined || subFiltro !== undefined);
</script>

<svelte:head>
	<title>Documentos — Admin Vanchi</title>
</svelte:head>

<div class="mx-auto max-w-5xl px-4 py-16">
	<!-- Header -->
	<div class="mb-8 flex items-center justify-between">
		<div>
			<div class="flex items-center gap-2.5 mb-4">
				<span class="vanchi-agent-dot animate-pulse"></span>
				<span class="vanchi-eyebrow">ADMIN // DOCUMENTOS</span>
			</div>
			<p class="font-mono text-sm text-base-content/50">
				{totalQuery.data?.length ?? '...'} documentos
				{#if hayFiltro}
					— {query.data?.length ?? '...'} filtrados
				{/if}
			</p>
		</div>
		<a
			href={resolve('/(main)/admin/(protegido)/documentos/crear')}
			class="btn min-h-0 h-9 border border-base-content bg-base-content px-3 font-mono text-xs font-bold uppercase tracking-wider text-base-100 duration-100 hover:bg-base-content/90"
		>
			<Plus class="h-3.5 w-3.5" />
			Nuevo
		</a>
	</div>

	<!-- Filtros -->
	<div class="mb-8 flex flex-wrap items-end gap-4">
		<div>
			<span class="mb-1.5 block font-mono text-xs tracking-[0.12em] text-secondary uppercase">Categoría</span>
			<div class="flex flex-wrap gap-1">
				<button
					onclick={() => (catFiltro = undefined)}
					class="px-3 py-1.5 font-mono text-xs border duration-100 {catFiltro === undefined ? 'border-base-content text-base-content' : 'border-base-300 text-base-content/50 hover:border-base-content hover:text-base-content'}"
				>
					Todas
				</button>
				{#each CATEGORIAS as cat (cat)}
					<button
						onclick={() => (catFiltro = cat)}
						class="px-3 py-1.5 font-mono text-xs border duration-100 {catFiltro === cat ? 'border-base-content text-base-content' : 'border-base-300 text-base-content/50 hover:border-base-content hover:text-base-content'}"
					>
						{cat}
					</button>
				{/each}
			</div>
		</div>

		<div>
			<span class="mb-1.5 block font-mono text-xs tracking-[0.12em] text-secondary uppercase">Subcategoría</span>
			<div class="flex flex-wrap gap-1">
				<button
					onclick={() => (subFiltro = undefined)}
					class="px-3 py-1.5 font-mono text-xs border duration-100 {subFiltro === undefined ? 'border-base-content text-base-content' : 'border-base-300 text-base-content/50 hover:border-base-content hover:text-base-content'}"
				>
					Todas
				</button>
				{#each SUBCATEGORIAS as sub (sub)}
					<button
						onclick={() => (subFiltro = sub)}
						class="px-3 py-1.5 font-mono text-xs border duration-100 {subFiltro === sub ? 'border-base-content text-base-content' : 'border-base-300 text-base-content/50 hover:border-base-content hover:text-base-content'}"
					>
						{sub}
					</button>
				{/each}
			</div>
		</div>

		{#if hayFiltro}
			<button
				onclick={limpiar}
				class="btn btn-ghost min-h-0 h-8 px-3 font-mono text-xs border border-base-300 text-base-content/50 duration-100 hover:bg-base-300 hover:text-base-content"
			>
				<X class="h-3 w-3" />
				Limpiar
			</button>
		{/if}
	</div>

	<!-- Lista -->
	{#if query.isLoading}
		<p class="font-mono text-sm text-base-content/40">Cargando documentos...</p>
	{:else if query.error}
		<p class="font-mono text-sm text-error">Error: {query.error.toString()}</p>
	{:else if query.data.length === 0}
		<div class="border border-base-300 bg-base-200 p-8">
			<p class="font-mono text-sm text-base-content/50">
				{hayFiltro ? 'No hay documentos con esos filtros.' : 'No hay documentos.'}
			</p>
			{#if !hayFiltro}
				<a
					href={resolve('/(main)/admin/(protegido)/documentos/crear')}
					class="btn btn-ghost mt-4 min-h-0 h-9 border border-base-300 px-3 font-mono text-xs font-bold uppercase tracking-wider text-base-content/80 duration-100 hover:bg-base-300 hover:text-base-content"
				>
					Crear el primero
				</a>
			{/if}
		</div>
	{:else}
		<div class="flex flex-col gap-px">
			{#each query.data as doc (doc._id)}
				<a
					href={resolve('/(main)/admin/(protegido)/documentos/[id]', { id: doc._id })}
					class="border border-base-300 bg-base-200 p-5 transition-all duration-100 hover:-translate-y-0.5 hover:border-base-content"
				>
					<div class="flex items-start justify-between gap-4">
						<div class="min-w-0">
							<h3 class="font-mono text-sm font-medium text-base-content truncate">
								{doc.titulo}
							</h3>
							<div class="mt-2 flex flex-wrap items-center gap-3">
								<span class="font-mono text-xs text-secondary">{doc.categoria}</span>
								{#if doc.subcategoria}
									<span class="font-mono text-xs text-base-content/40">/</span>
									<span class="font-mono text-xs text-base-content/40">{doc.subcategoria}</span>
								{/if}
							</div>
						</div>
						<div class="shrink-0 font-mono text-xs text-base-content/30">
							{new Date(doc._creationTime).toLocaleDateString('es-PE', {
								year: 'numeric',
								month: 'short',
								day: 'numeric'
							})}
						</div>
					</div>
					{#if doc.etiquetas.length > 0}
						<div class="mt-3 flex flex-wrap gap-2">
							{#each doc.etiquetas as etiqueta (etiqueta)}
								<span class="border border-base-300 px-2 py-0.5 font-mono text-[10px] text-base-content/40">
									{etiqueta}
								</span>
							{/each}
						</div>
					{/if}
				</a>
			{/each}
		</div>
	{/if}
</div>

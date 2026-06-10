<script lang="ts">
	import { useQuery } from 'convex-svelte';
	import { api } from '$convex/_generated/api';
	import { resolve } from '$app/paths';

	const documentosQuery = useQuery(api.entidades.documentosV2.queries.listar, {});
</script>

<svelte:head>
	<title>Documentos — Vanchi Admin</title>
</svelte:head>

<div class="mx-auto max-w-5xl px-4 py-8">
	<div class="mb-8 flex items-center justify-between">
		<div>
			<h1 class="text-2xl font-bold text-base-content">Documentos</h1>
			<p class="text-sm text-base-content/40">Gestiona la base de conocimiento del asistente</p>
		</div>
		<a
			href={resolve('/(main)/admin/(protegido)/documentos/crear')}
			class="btn btn-primary btn-sm"
		>
			+ Nuevo documento
		</a>
	</div>

	{#if documentosQuery.isLoading}
		<p class="text-sm text-base-content/40">Cargando...</p>
	{:else if documentosQuery.error}
		<p class="text-sm text-red-400">Error al cargar documentos</p>
	{:else if documentosQuery.data.length === 0}
		<div class="rounded-2xl border border-white/10 bg-base-100/60 p-8 text-center">
			<p class="text-sm text-base-content/40">No hay documentos todavía.</p>
			<a
				href={resolve('/(main)/admin/(protegido)/documentos/crear')}
				class="btn btn-primary btn-sm mt-4"
			>
				Crear el primero
			</a>
		</div>
	{:else}
		<div class="space-y-3">
			{#each documentosQuery.data as doc (doc._id)}
				<a
					href={resolve('/(main)/admin/(protegido)/documentos/[id]', { id: doc._id })}
					class="block rounded-2xl border border-white/10 bg-base-100/60 p-4 transition-all hover:border-primary/30 hover:bg-base-100/80"
				>
					<div class="flex items-center justify-between">
						<div>
							<h3 class="font-bold text-base-content">{doc.titulo}</h3>
							<p class="mt-1 text-xs text-base-content/40">
								<span class="rounded-md bg-primary/20 px-2 py-0.5 text-primary">{doc.categoria}</span>
								{#if doc.subcategoria}
									<span class="ml-2 rounded-md bg-base-200 px-2 py-0.5 text-base-content/60">{doc.subcategoria}</span>
								{/if}
							</p>
						</div>
						<div class="text-xs text-base-content/30">
							{new Date(doc._creationTime).toLocaleDateString()}
						</div>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</div>

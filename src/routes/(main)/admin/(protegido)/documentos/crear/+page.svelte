<script lang="ts">
	import { useConvexClient } from 'convex-svelte';
	import { api } from '$convex/_generated/api';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	const convex = useConvexClient();

	let titulo = $state('');
	let categoria = $state('sobre-mi');
	let subcategoria = $state('');
	let contenido = $state('');
	let url = $state('');
	let error = $state('');
	let saving = $state(false);

	const ALL_ETIQUETAS = [
		'sveltekit', 'convex', 'tailwindcss', 'typescript', 'astro', 'openrouter',
		'vercel-ai-gateway', 'whatsapp', 'deepgram', 'livekit', 'supabase', 'n8n',
		'gemini-api', 'google-calendar', 'better-auth', 'netlify', 'lit',
		'molaric', 'encap', 'junin360', 'mediroosevelt', 'farmape', 'obstetraconecta',
		'diapis', 'colegio-educere', 'peralta-asociados',
		'experiencia', 'desarrollo-web', 'agentes-ia', 'precios',
		'redes-sociales', 'soluciones-legales', 'rutas', 'asistente', 'waas'
	];

	let etiquetasSeleccionadas = $state<string[]>([]);

	const categorias = ['sobre-mi', 'stack', 'servicio', 'precios', 'proyecto', 'legal'] as const;
	const subcategorias = ['frontend', 'backend', 'ia', 'salud', 'educacion', 'legal', 'web', 'agentes', 'waas', 'personal'] as const;

	function toggleEtiqueta(e: string) {
		if (etiquetasSeleccionadas.includes(e)) {
			etiquetasSeleccionadas = etiquetasSeleccionadas.filter((x) => x !== e);
		} else {
			etiquetasSeleccionadas = [...etiquetasSeleccionadas, e];
		}
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (saving) return;

		const password = localStorage.getItem('admin_password');
		if (!password) {
			goto(resolve('/(main)/admin/login'));
			return;
		}

		saving = true;
		error = '';

		try {
			await convex.mutation(api.entidades.documentosV2.mutations.crear, {
				password,
				titulo,
				categoria: categoria as 'sobre-mi' | 'stack' | 'servicio' | 'precios' | 'proyecto' | 'legal',
				subcategoria: (subcategoria || undefined) as 'frontend' | 'backend' | 'ia' | 'salud' | 'educacion' | 'legal' | 'web' | 'agentes' | 'waas' | undefined,
				contenido,
				url: url || undefined,
				etiquetas: etiquetasSeleccionadas as ('sveltekit' | 'convex' | 'tailwindcss' | 'typescript' | 'astro' | 'openrouter' | 'vercel-ai-gateway' | 'whatsapp' | 'deepgram' | 'livekit' | 'supabase' | 'n8n' | 'gemini-api' | 'google-calendar' | 'better-auth' | 'netlify' | 'lit' | 'molaric' | 'encap' | 'junin360' | 'mediroosevelt' | 'farmape' | 'obstetraconecta' | 'diapis' | 'colegio-educere' | 'peralta-asociados' | 'experiencia' | 'desarrollo-web' | 'agentes-ia' | 'precios' | 'redes-sociales' | 'soluciones-legales' | 'rutas' | 'asistente' | 'waas')[],
			});
			goto(resolve('/(main)/admin/(protegido)/documentos'));
		} catch (err) {
			error = err instanceof Error ? err.message : 'Error al crear el documento';
			saving = false;
		}
	}
</script>

<svelte:head>
	<title>Crear documento — Vanchi Admin</title>
</svelte:head>

<div class="mx-auto max-w-3xl px-4 py-8">
	<div class="mb-8">
		<a href={resolve('/(main)/admin/(protegido)/documentos')} class="text-xs text-base-content/40 hover:text-base-content/60">&larr; Volver</a>
		<h1 class="mt-2 text-2xl font-bold text-base-content">Nuevo documento</h1>
	</div>

	<form onsubmit={handleSubmit} class="space-y-6">
		<!-- Título -->
		<label class="block">
			<span class="mb-1 block text-xs font-bold text-base-content/60 uppercase">Título</span>
			<input
				type="text"
				bind:value={titulo}
				required
				class="input w-full"
			/>
		</label>

		<!-- Categoría -->
		<label class="block">
			<span class="mb-1 block text-xs font-bold text-base-content/60 uppercase">Categoría</span>
			<select bind:value={categoria} class="select w-full">
				{#each categorias as cat (cat)}
					<option value={cat}>{cat}</option>
				{/each}
			</select>
		</label>

		<!-- Subcategoría -->
		<label class="block">
			<span class="mb-1 block text-xs font-bold text-base-content/60 uppercase">Subcategoría (opcional)</span>
			<select bind:value={subcategoria} class="select w-full">
				<option value="">— Sin subcategoría —</option>
				{#each subcategorias as sub (sub)}
					<option value={sub}>{sub}</option>
				{/each}
			</select>
		</label>

		<!-- Contenido -->
		<label class="block">
			<span class="mb-1 block text-xs font-bold text-base-content/60 uppercase">Contenido (Markdown)</span>
			<textarea
				bind:value={contenido}
				required
				rows="10"
				class="textarea w-full"
			></textarea>
		</label>

		<!-- URL -->
		<label class="block">
			<span class="mb-1 block text-xs font-bold text-base-content/60 uppercase">URL (opcional)</span>
			<input
				type="url"
				bind:value={url}
				placeholder="https://..."
				class="input w-full"
			/>
		</label>

		<!-- Etiquetas -->
		<fieldset class="fieldset">
			<legend class="fieldset-legend">Etiquetas</legend>
			<div class="flex flex-wrap gap-2">
				{#each ALL_ETIQUETAS as etq (etq)}
					<button
						type="button"
						onclick={() => toggleEtiqueta(etq)}
						class="rounded-lg px-3 py-1 text-xs transition-all {etiquetasSeleccionadas.includes(etq) ? 'bg-primary text-base-100' : 'border border-white/10 bg-base-200/50 text-base-content/60 hover:border-primary/30'}"
					>
						{etq}
					</button>
				{/each}
			</div>
		</fieldset>

		{#if error}
			<p class="text-xs font-semibold text-red-400">{error}</p>
		{/if}

		<button
			type="submit"
			disabled={saving}
			class="btn btn-primary w-full"
		>
			{saving ? 'Guardando...' : 'Crear documento'}
		</button>
	</form>
</div>

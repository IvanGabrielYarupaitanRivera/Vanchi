<script lang="ts">
	/**
	 * @component Hero.svelte
	 * @description Encabezado de expediente con 3 niveles de profundidad.
	 *
	 * ANTI-PATRONES RESTRICTOS (Capa Fisica Inmutable):
	 * - NO alterar paddings, colores de fondo o bordes con clases arbitrarias.
	 * - NO usar gradientes, glassmorphism, sombras (shadow-*) ni border-radius > 4px.
	 * - NO usar animaciones fluidas (fade, fly, scale); solo duration-100 en hovers.
	 * - NO inyectar emojis ni iconos decorativos fuera de CTAs aprobados.
	 */

	import SystemStatus from '../SystemStatus/SystemStatus.svelte';

	export type HeroLevel = 'primary' | 'secondary' | 'tertiary';

	export interface HeroProps {
		/** Nivel de jerarquia estructural segun la ruta */
		level: HeroLevel;
		/** Titulo textual */
		title: string;
		/** Subtitulo descriptivo mono-espaciado */
		subtitle?: string;
		/** Palabra exacta dentro del titulo que recibira italica */
		italic_word?: string;
		/** Etiqueta para el boton de accion primario */
		action_label?: string;
		/** Callback para el boton primario */
		action_onclick?: () => void;
		/** Etiqueta para el boton de accion secundario (solo primary) */
		action_secondary_label?: string;
		/** Callback para el boton secundario (solo primary) */
		action_secondary_onclick?: () => void;
		/** Estado del indicador de sistema (exclusivo de primary) */
		status_active?: boolean;
	}

	let {
		level,
		title,
		subtitle,
		italic_word,
		action_label,
		action_onclick,
		action_secondary_label,
		action_secondary_onclick,
		status_active = false
	}: HeroProps = $props();

	const segments = $derived.by(() => {
		if (!italic_word || !title.includes(italic_word)) {
			return { before: title, match: '', after: '' };
		}
		const index = title.indexOf(italic_word);
		return {
			before: title.slice(0, index),
			match: italic_word,
			after: title.slice(index + italic_word.length)
		};
	});
</script>

<header class="w-full border-b border-base-300 bg-base-100 font-mono text-base-content selection:bg-accent selection:text-base-100">

	{#if level === 'primary'}
		<div class="mx-auto flex max-w-5xl flex-col items-start gap-10 border-l-2 border-base-300 px-6 py-32 md:px-12">
			<SystemStatus status={status_active ? 'active' : 'idle'} label="SYSTEM // ONLINE" />

			<h1 class="max-w-4xl vanchi-display text-5xl leading-[1.1] tracking-tight text-base-content lg:text-7xl">
				{segments.before}<span class="font-serif text-base-content italic">{segments.match}</span>{segments.after}
			</h1>

			{#if subtitle}
				<p class="max-w-2xl text-sm leading-relaxed text-base-content/60 md:text-base">
					{subtitle}
				</p>
			{/if}

			<div class="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
				{#if action_label && action_onclick}
					<button
						onclick={action_onclick}
						type="button"
						class="btn btn-primary h-10 min-h-0 px-5 font-mono text-xs font-bold tracking-wider uppercase duration-100"
					>
						{action_label} &rarr;
					</button>
				{/if}
				{#if action_secondary_label && action_secondary_onclick}
					<button
						onclick={action_secondary_onclick}
						type="button"
						class="btn btn-ghost h-10 min-h-0 border border-base-300 px-5 font-mono text-xs font-bold tracking-wider text-base-content/80 uppercase duration-100 hover:bg-base-300 hover:text-base-content"
					>
						{action_secondary_label}
					</button>
				{/if}
			</div>
		</div>

	{:else if level === 'secondary'}
		<div class="mx-auto grid max-w-5xl grid-cols-1 items-end gap-8 border-x border-base-300 bg-base-100 px-6 py-20 md:grid-cols-12 md:px-12">
			<div class="flex flex-col gap-4 md:col-span-7">
				<h1 class="vanchi-display text-3xl tracking-tight text-base-content lg:text-5xl">
					{segments.before}<span class="font-serif text-base-content italic">{segments.match}</span>{segments.after}
				</h1>
			</div>

			{#if subtitle}
				<div class="pb-1 md:col-span-5">
					<p class="border-l border-base-300 pl-4 text-xs leading-relaxed text-base-content/60">
						{subtitle}
					</p>
					{#if action_label && action_onclick}
						<button
							onclick={action_onclick}
							type="button"
							class="btn btn-ghost mt-6 h-9 min-h-0 border border-base-300 px-4 font-mono text-xs font-bold tracking-wider text-base-content/80 uppercase duration-100 hover:bg-base-300 hover:text-base-content"
						>
							[ {action_label} ]
						</button>
					{/if}
				</div>
			{/if}
		</div>

	{:else}
		<div class="mx-auto flex w-full max-w-5xl flex-col gap-4 border-x border-base-300 bg-base-100 px-6 py-8 sm:flex-row sm:items-center sm:justify-between md:px-12">
			<h1 class="font-mono text-sm font-bold tracking-widest text-base-content uppercase lg:text-base">
				// {title}
			</h1>
			{#if subtitle}
				<span class="font-mono text-xs tracking-wider text-base-content/50 uppercase sm:text-right">
					{subtitle}
				</span>
			{/if}
		</div>
	{/if}
</header>

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

<script lang="ts">
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
		/** Etiqueta para el boton de accion */
		action_label?: string;
		/** Callback para delegar navegacion via goto() al llamador */
		action_onclick?: () => void;
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
		status_active = false
	}: HeroProps = $props();

	// Segmentacion del titulo para aislar la italica sin evaluar HTML crudo
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

<header class="w-full bg-base-100 border-b border-base-300 text-base-content font-mono selection:bg-accent selection:text-base-100">

	{#if level === 'primary'}
		<div class="max-w-5xl mx-auto py-24 px-6 md:px-12 border-l border-base-300 flex flex-col items-start gap-10">
			<SystemStatus status={status_active ? 'active' : 'idle'} label="SYSTEM // ONLINE" />

			<h1 class="vanchi-display text-5xl lg:text-7xl leading-[1.1] tracking-tight text-base-content max-w-4xl">
				{segments.before}<span class="font-serif italic text-base-content">{segments.match}</span>{segments.after}
			</h1>

			{#if subtitle}
				<p class="text-sm md:text-base leading-relaxed text-base-content/70 max-w-2xl">
					{subtitle}
				</p>
			{/if}

			{#if action_label && action_onclick}
				<button
					onclick={action_onclick}
					type="button"
					class="bg-base-content text-base-100 font-bold text-xs uppercase tracking-wider px-6 py-4 border border-base-content hover:bg-base-content/90 duration-100 cursor-pointer"
				>
					{action_label} &rarr;
				</button>
			{/if}
		</div>

	{:else if level === 'secondary'}
		<div class="max-w-5xl mx-auto py-16 px-6 md:px-12 border-x border-base-300 grid grid-cols-1 md:grid-cols-12 gap-8 items-end bg-base-100">
			<div class="md:col-span-7 flex flex-col gap-4">
				<h1 class="vanchi-display text-4xl lg:text-5xl text-base-content tracking-tight">
					{segments.before}<span class="font-serif italic text-base-content">{segments.match}</span>{segments.after}
				</h1>
			</div>

			{#if subtitle}
				<div class="md:col-span-5 pb-1">
					<p class="text-xs leading-relaxed text-base-content/70 border-l border-base-300 pl-4">
						{subtitle}
					</p>
					{#if action_label && action_onclick}
						<button
							onclick={action_onclick}
							type="button"
							class="mt-6 px-4 py-2 text-xs uppercase tracking-wider text-base-content bg-transparent border border-base-300 hover:bg-base-200 duration-100 cursor-pointer"
						>
							[ {action_label} ]
						</button>
					{/if}
				</div>
			{/if}
		</div>

	{:else}
		<div class="max-w-5xl mx-auto py-8 px-6 md:px-12 border-x border-base-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-base-100 w-full">
			<h1 class="font-mono text-sm lg:text-base font-bold text-base-content uppercase tracking-widest">
				// {title}
			</h1>
			{#if subtitle}
				<span class="font-mono text-xs text-base-content/50 uppercase tracking-wider sm:text-right">
					{subtitle}
				</span>
			{/if}
		</div>
	{/if}
</header>

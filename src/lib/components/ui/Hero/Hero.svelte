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
	import CommandAction from '../CommandAction/CommandAction.svelte';

	export type HeroLevel = 'primary' | 'secondary' | 'tertiary';

	export interface HeroProps {
		level: HeroLevel;
		title: string;
		subtitle?: string;
		italic_word?: string;
		action_label?: string;
		action_onclick?: () => void;
		action_secondary_label?: string;
		action_secondary_onclick?: () => void;
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

<header class="relative w-full border-b border-base-300 bg-base-100 font-mono text-base-content selection:bg-accent selection:text-base-100">

	{#if level === 'primary'}
		<div class="pointer-events-none absolute inset-0" style="background-image: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23242B33' stroke-width='1' opacity='0.4'/%3E%3C/svg%3E&quot;), url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='2' fill='%23242B33' opacity='0.25'/%3E%3C/svg%3E&quot;);" aria-hidden="true"></div>
		<div class="pointer-events-none absolute top-0 left-0 h-5 w-5 border-l-2 border-t-2 border-secondary" aria-hidden="true"></div>
		<div class="pointer-events-none absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-secondary" aria-hidden="true"></div>

		<div class="relative mx-auto flex max-w-5xl flex-col items-start gap-10 px-6 py-32 md:px-12 lg:py-48">
			<SystemStatus status={status_active ? 'active' : 'idle'} label="SYSTEM // ONLINE" />

			<h1 class="max-w-4xl vanchi-display text-5xl text-base-content lg:text-7xl">
				{segments.before}<span class="font-serif text-base-content italic">{segments.match}</span>{segments.after}
			</h1>

			{#if subtitle}
				<p class="max-w-2xl text-sm leading-relaxed text-base-content/60 md:text-base">
					{subtitle}
				</p>
			{/if}

			<div class="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
				{#if action_label && action_onclick}
					<CommandAction level="primary" label={action_label} onclick={action_onclick} />
				{/if}
				{#if action_secondary_label && action_secondary_onclick}
					<CommandAction level="outline-primary" label={action_secondary_label} onclick={action_secondary_onclick} />
				{/if}
			</div>
		</div>

	{:else if level === 'secondary'}
		<div class="mx-auto grid max-w-5xl grid-cols-1 items-end gap-8 border-x border-base-300 bg-base-100 px-6 py-20 md:grid-cols-12 md:px-12 lg:py-32">
			<div class="flex flex-col gap-4 md:col-span-7">
				<h1 class="vanchi-display text-3xl text-base-content lg:text-5xl">
					{segments.before}<span class="font-serif text-base-content italic">{segments.match}</span>{segments.after}
				</h1>
			</div>

			{#if subtitle}
				<div class="pb-1 md:col-span-5">
					<p class="border-l border-base-300 pl-4 text-sm leading-relaxed text-base-content/60">
						{subtitle}
					</p>
					{#if action_label && action_onclick}
						<CommandAction level="outline-primary" label={action_label} onclick={action_onclick} />
					{/if}
				</div>
			{/if}
		</div>

	{:else}
		<div class="mx-auto flex w-full max-w-5xl flex-col gap-4 border-x border-base-300 bg-base-100 px-6 py-8 sm:flex-row sm:items-center sm:justify-between md:px-12 lg:py-12">
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

<script lang="ts">
	/**
	 * Hero.svelte
	 *
	 * Encabezado de expediente con 3 niveles de profundidad.
	 * NUNCA pasar colores fijos. Usar solo tokens DaisyUI.
	 *
	 * Para navegación, pasar `action_onclick` en vez de href.
	 * El caller decide si usa goto(), resolve() o window.location.
	 */

	import SystemStatus from '../SystemStatus/SystemStatus.svelte';

	type Level = 'primary' | 'secondary' | 'tertiary';

	let {
		level = 'secondary' as Level,
		title,
		subtitle,
		action_label,
		action_onclick,
		status_active = false,
		italic_word
	}: {
		level?: Level;
		title: string;
		subtitle?: string;
		action_label?: string;
		action_onclick?: () => void;
		status_active?: boolean;
		italic_word?: string;
	} = $props();
</script>

<section class="flex min-h-[90dvh] items-center vanchi-hairline {level === 'tertiary' ? 'min-h-0 py-12' : ''}">
	<div class="mx-auto w-full max-w-5xl px-4">

		{#if level === 'primary'}
			{#if status_active}
				<div class="mb-10">
					<SystemStatus status="active" label="SYSTEM // ONLINE" />
				</div>
			{/if}

			<h1 class="vanchi-display mb-10 text-5xl leading-[1.05] font-normal lg:text-7xl">
				{title.split(italic_word ?? '___NONE___').join('')}
				{#if italic_word}
					<br /><span class="italic">{italic_word}</span>
				{/if}
			</h1>

			{#if subtitle}
				<p class="max-w-xl text-base leading-relaxed text-base-content/70 lg:text-lg">
					{subtitle}
				</p>
			{/if}

			{#if action_label && action_onclick}
				<div class="mt-12">
					<button
						onclick={action_onclick}
						class="btn min-h-0 h-10 border border-base-content bg-base-content px-5 font-mono text-xs font-bold uppercase tracking-wider text-base-100 duration-100 hover:bg-base-content/90"
					>
						{action_label} →
					</button>
				</div>
			{/if}

		{:else if level === 'secondary'}
			<div class="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
				<div class="lg:col-span-7">
					<h1 class="vanchi-display mb-6 text-5xl leading-[1.05] font-normal lg:text-7xl">
						{title.split(italic_word ?? '___NONE___').join('')}
						{#if italic_word}
							<span class="italic"> {italic_word}</span>
						{/if}
					</h1>
				</div>

				<div class="lg:col-span-5">
					{#if subtitle}
						<p class="font-mono text-sm leading-relaxed text-base-content/60 lg:text-base">
							{subtitle}
						</p>
					{/if}
					{#if action_label && action_onclick}
						<button
							onclick={action_onclick}
							class="btn btn-ghost mt-6 min-h-0 h-9 border border-base-300 px-4 font-mono text-xs font-bold uppercase tracking-wider text-base-content/80 duration-100 hover:bg-base-300 hover:text-base-content"
						>
							[ {action_label} ]
						</button>
					{/if}
				</div>
			</div>

		{:else}
			<div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
				<h1 class="font-mono text-sm font-bold text-base-content/60 uppercase tracking-[0.15em]">
					// {title}
				</h1>
				{#if subtitle}
					<span class="font-mono text-xs text-base-content/40">
						{subtitle}
					</span>
				{/if}
			</div>
		{/if}

	</div>
</section>

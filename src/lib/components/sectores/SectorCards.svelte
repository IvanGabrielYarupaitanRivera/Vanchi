<script lang="ts">
	import { resolve } from '$app/paths';
	import { Stethoscope, Scale, GraduationCap } from '@lucide/svelte';

	export interface Intervention {
		id: string;
		name: string;
		client: string;
	}

	export interface Sector {
		slug: string;
		id: string;
		label: string;
		title: string;
		pain: string;
		activeCount: string;
		interventions: readonly Intervention[];
	}

	let { sectors }: { sectors: readonly Sector[] } = $props();
</script>

{#snippet sectorIcon(slug: string)}
	{#if slug === 'salud'}
		<Stethoscope class="h-full w-full" stroke-width="1" aria-hidden="true" />
	{:else if slug === 'legal'}
		<Scale class="h-full w-full" stroke-width="1" aria-hidden="true" />
	{:else if slug === 'educacion'}
		<GraduationCap class="h-full w-full" stroke-width="1" aria-hidden="true" />
	{/if}
{/snippet}

<section class="w-full border-t vanchi-hairline py-40">
	<div class="mx-auto max-w-5xl px-4">
		<!-- Cabecera de archivo -->
		<div class="flex items-center gap-2.5 pb-4 mb-16 vanchi-hairline border-b">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">01 // SECTORES</span>
		</div>

		<!-- Matriz de datos — el fichero -->
		<div class="flex flex-col gap-px overflow-hidden border border-base-300 bg-base-300">
			<!-- EXPEDIENTE 01: SALUD (Full Width) -->
			{#each sectors as sector, i (sector.slug)}
				{#if i === 0}
					<a
						href={resolve('/(main)/sectores/[sector]', { sector: sector.slug })}
						class="group card border-0 bg-base-200 p-8 transition-all duration-100 hover:-translate-y-0.5 hover:bg-base-200 lg:p-10"
					>
						<div class="grid gap-8 lg:grid-cols-3">
							<!-- Metadata del sector -->
							<div class="flex flex-col gap-6">
								<span class="font-mono text-xs font-medium tracking-[0.15em] text-secondary">
									EXPEDIENTE {sector.id} // {sector.label.toUpperCase()}
								</span>
								<div class="flex items-center gap-2">
									<span class="vanchi-agent-dot animate-pulse"></span>
									<span
										class="font-mono text-[10px] font-medium tracking-[0.2em] text-accent uppercase"
									>
										{sector.activeCount}
									</span>
								</div>
								<div
									class="mt-auto h-6 w-6 text-base-content/25 transition-colors duration-100 group-hover:text-base-content/45"
								>
									{@render sectorIcon(sector.slug)}
								</div>
							</div>

							<!-- Contenido principal -->
							<div class="flex flex-col lg:col-span-2">
								<h2 class="mb-4 vanchi-display text-3xl font-normal lg:text-5xl">
									{sector.title}
								</h2>
								<p class="mb-8 max-w-lg font-mono text-sm leading-relaxed text-base-content/60">
									{sector.pain}
								</p>

								<!-- Sub-índice de intervenciones -->
								<div class="space-y-3 border-t border-base-300 pt-4">
									{#each sector.interventions as item (item.id)}
										<div class="flex flex-wrap justify-between gap-x-6 gap-y-1 font-mono text-xs">
											<span class="text-base-content/80">{item.id} // {item.name}</span>
											<span
												class="text-base-content/50 transition-colors duration-100 group-hover:text-base-content/80"
												>{item.client}</span
											>
										</div>
									{/each}
								</div>
							</div>

							<!-- Flecha -->
							<span
								class="hidden font-mono text-lg text-base-content/60 opacity-0 transition-opacity duration-100 group-hover:opacity-100 lg:inline"
							>
								→
							</span>
						</div>
					</a>
				{/if}
			{/each}

			<!-- Sub-matriz 50/50: Legal + Educación -->
			<div class="grid grid-cols-1 gap-px lg:grid-cols-4">
				{#each sectors as sector, i (sector.slug)}
					{#if i === 1}
						<a
							href={resolve('/(main)/sectores/[sector]', { sector: sector.slug })}
							class="group card border-0 bg-base-200 p-6 transition-all duration-100 hover:-translate-y-0.5 lg:col-span-2 lg:p-8"
						>
							<div class="mb-8 flex items-start justify-between gap-4">
								<div class="flex items-center gap-2">
									<span class="vanchi-agent-dot animate-pulse"></span>
									<span
										class="font-mono text-[10px] font-medium tracking-[0.2em] text-accent uppercase"
									>
										{sector.activeCount}
									</span>
								</div>
								<div
									class="h-5 w-5 text-base-content/25 transition-colors duration-100 group-hover:text-base-content/45"
								>
									{@render sectorIcon(sector.slug)}
								</div>
							</div>
							<span class="font-mono text-xs font-medium tracking-[0.15em] text-secondary">
								EXPEDIENTE {sector.id} // {sector.label.toUpperCase()}
							</span>
							<h2 class="mt-2 mb-3 vanchi-display text-3xl font-normal lg:text-5xl">
								{sector.title}
							</h2>
							<p class="mb-6 font-mono text-sm leading-relaxed text-base-content/60">
								{sector.pain}
							</p>
							<!-- Sub-índice -->
							<div class="space-y-2 border-t border-base-300 pt-3">
								{#each sector.interventions as item (item.id)}
									<div class="flex flex-wrap justify-between gap-x-4 gap-y-1 font-mono text-xs">
										<span class="text-base-content/80">{item.id} // {item.name}</span>
										<span
											class="text-base-content/50 transition-colors duration-100 group-hover:text-base-content/80"
											>{item.client}</span
										>
									</div>
								{/each}
							</div>
							<span
								class="mt-4 inline-block font-mono text-sm text-base-content/60 opacity-0 transition-opacity duration-100 group-hover:opacity-100"
							>
								→
							</span>
						</a>
					{/if}
					{#if i === 2}
						<a
							href={resolve('/(main)/sectores/[sector]', { sector: sector.slug })}
							class="group card col-span-2 border-0 bg-base-200 p-6 transition-all duration-100 hover:-translate-y-0.5 lg:p-8"
						>
							<div class="mb-8 flex items-start justify-between gap-4">
								<div class="flex items-center gap-2">
									<span class="vanchi-agent-dot animate-pulse"></span>
									<span
										class="font-mono text-[10px] font-medium tracking-[0.2em] text-accent uppercase"
									>
										{sector.activeCount}
									</span>
								</div>
								<div
									class="h-5 w-5 text-base-content/25 transition-colors duration-100 group-hover:text-base-content/45"
								>
									{@render sectorIcon(sector.slug)}
								</div>
							</div>
							<span class="font-mono text-xs font-medium tracking-[0.15em] text-secondary">
								EXPEDIENTE {sector.id} // {sector.label.toUpperCase()}
							</span>
							<h2 class="mt-2 mb-3 vanchi-display text-3xl font-normal lg:text-5xl">
								{sector.title}
							</h2>
							<p class="mb-6 font-mono text-sm leading-relaxed text-base-content/60">
								{sector.pain}
							</p>
							<div class="space-y-2 border-t border-base-300 pt-3">
								{#each sector.interventions as item (item.id)}
									<div class="flex flex-wrap justify-between gap-x-4 gap-y-1 font-mono text-xs">
										<span class="text-base-content/80">{item.id} // {item.name}</span>
										<span
											class="text-base-content/50 transition-colors duration-100 group-hover:text-base-content/80"
											>{item.client}</span
										>
									</div>
								{/each}
							</div>
							<span
								class="mt-4 inline-block font-mono text-sm text-base-content/60 opacity-0 transition-opacity duration-100 group-hover:opacity-100"
							>
								→
							</span>
						</a>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>

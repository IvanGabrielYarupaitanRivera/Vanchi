<script lang="ts">
	import { resolve } from '$app/paths';
	import { Bot, Workflow, Lightbulb, Sparkles } from '@lucide/svelte';

	export interface Service {
		slug: string;
		id: string;
		title: string;
		pain: string;
		desc: string;
		proof: string;
	}

	let { services }: { services: readonly Service[] } = $props();
</script>

{#snippet serviceIcon(slug: string)}
	{#if slug === 'agentes-ia'}
		<Bot class="h-full w-full" stroke-width="1" aria-hidden="true" />
	{:else if slug === 'automatizacion'}
		<Workflow class="h-full w-full" stroke-width="1" aria-hidden="true" />
	{:else if slug === 'consultoria'}
		<Lightbulb class="h-full w-full" stroke-width="1" aria-hidden="true" />
	{/if}
{/snippet}

<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">01 // SERVICIOS</span>
		</div>

		<div class="flex flex-col gap-px">
			<!-- Card dominante: Agentes IA (full-width) -->
			{#each services as service, i (service.slug)}
				{#if i === 0}
					<a
						href={resolve('/(main)/servicios/[servicio]', { servicio: service.slug })}
						class="card bg-base-200 border border-base-300 p-8 transition-all duration-100 hover:-translate-y-0.5 hover:border-base-content group lg:p-10"
					>
						<div class="flex items-start gap-8">
							<div class="grow">
								<span class="mb-4 block font-mono text-xs font-medium tracking-[0.15em] text-secondary">
									{service.id} // {service.title.toUpperCase()}
								</span>
								<h2 class="vanchi-display mb-4 text-3xl font-normal lg:text-5xl">
									{service.title}
								</h2>
								<p class="mb-4 max-w-xl font-mono text-sm leading-relaxed text-base-content/80">
									<span class="text-base-content">{service.pain}</span>
								</p>
								<p class="max-w-xl font-mono text-sm leading-relaxed text-base-content/60">
									{service.desc}
								</p>
								<p class="mt-4 font-mono text-xs text-secondary">
									{#if i === 0 && service.slug === 'agentes-ia'}
										Caso real: ENCAP <Sparkles class="inline h-3 w-3 text-accent/60" aria-hidden="true" /> — Tutor AI 24/7 con 95% de satisfaccion.
									{:else}
										{service.proof}
									{/if}
								</p>
							</div>

							<div class="hidden shrink-0 lg:flex lg:flex-col lg:items-end lg:gap-4">
								<div class="h-16 w-16 text-base-content/10 transition-colors duration-100 group-hover:text-base-content/20">
									{@render serviceIcon(service.slug)}
								</div>
								<span class="font-mono text-sm text-base-content transition-transform duration-100 group-hover:translate-x-1">→</span>
							</div>
						</div>
					</a>
				{/if}
			{/each}

			<!-- Sub-grid 50/50: Automatización + Consultoría -->
			<div class="mt-px grid grid-cols-1 gap-px lg:grid-cols-2">
				{#each services as service, i (service.slug)}
					{#if i >= 1}
						<a
							href={resolve('/(main)/servicios/[servicio]', { servicio: service.slug })}
							class="card bg-base-200 border border-base-300 p-6 transition-all duration-100 hover:-translate-y-0.5 hover:border-base-content group lg:p-8"
						>
							<div class="flex items-start justify-between gap-4 mb-6">
								<span class="font-mono text-xs font-medium tracking-[0.15em] text-secondary">
									{service.id} // {service.title.toUpperCase()}
								</span>
								<div class="h-5 w-5 text-base-content/25 transition-colors duration-100 group-hover:text-base-content/45">
									{@render serviceIcon(service.slug)}
								</div>
							</div>

							<h2 class="vanchi-display mb-3 text-3xl font-normal lg:text-5xl">
								{service.title}
							</h2>
							<p class="mb-3 font-mono text-sm leading-relaxed text-base-content/80">
								<span class="text-base-content">{service.pain}</span>
							</p>
							<p class="mb-4 font-mono text-sm leading-relaxed text-base-content/60">
								{service.desc}
							</p>
							<p class="font-mono text-xs text-secondary">{service.proof}</p>

							<span class="mt-4 inline-block font-mono text-sm text-base-content transition-transform duration-100 group-hover:translate-x-1">→</span>
						</a>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>

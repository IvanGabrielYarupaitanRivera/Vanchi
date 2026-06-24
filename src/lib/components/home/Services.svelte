<script lang="ts">
	import { resolve } from '$app/paths';
	import { ArrowUpRight, Bot, Lightbulb, Workflow } from '@lucide/svelte';
	import CommandAction from '$lib/components/ui/CommandAction/CommandAction.svelte';
	import DataBlock from '$lib/components/ui/DataBlock/DataBlock.svelte';
	import SectionLayout from '$lib/components/ui/SectionLayout/SectionLayout.svelte';

	const pains = [
		{
			id: 'A',
			pain: '¿Tu personal pierde horas en tareas repetitivas?',
			solve: 'Agentes de IA que responden, agendan y procesan sin intervención humana.',
			servicio: 'agentes-ia'
		},
		{
			id: 'B',
			pain: '¿Tus sistemas actuales no se comunican entre sí?',
			solve: 'Automatización que conecta tus herramientas para que trabajen solas.',
			servicio: 'automatizacion'
		},
		{
			id: 'C',
			pain: '¿No sabes por dónde empezar?',
			solve: 'Consultoría sin costo. Análisis de tu operación y hoja de ruta concreta.',
			servicio: 'consultoria'
		}
	] as const;
</script>

{#snippet serviceIcon(slug: string)}
	{#if slug === 'agentes-ia'}
		<Bot class="h-full w-full" stroke-width="1" aria-hidden="true" />
	{:else if slug === 'automatizacion'}
		<Workflow class="h-full w-full" stroke-width="1" aria-hidden="true" />
	{:else}
		<Lightbulb class="h-full w-full" stroke-width="1" aria-hidden="true" />
	{/if}
{/snippet}

<SectionLayout
	variant="primary"
	number="03"
	label="SERVICIOS"
	title="Deja de operar software"
	italic_word="software"
	description="No vendo licencias. Construyo agentes que reciben un objetivo y lo ejecutan solos. Automatización de procesos para empresas en Junín. Cada solución empieza con un problema concreto de tu operación."
>
	<div class="flex flex-col gap-px">
		{#each pains as pain (pain.id)}
			<a href={resolve('/(main)/servicios/[servicio]', { servicio: pain.servicio })} class="block">
				<DataBlock level="compact" hover={true}>
					<div class="flex items-start justify-between gap-4">
						<div class="grow">
							<span class="mb-3 block font-mono text-xs font-medium tracking-[0.15em] text-secondary">[{pain.id}]</span>
							<p class="font-mono text-sm font-medium text-base-content">{pain.pain}</p>
							<p class="mt-2 font-mono text-sm leading-relaxed text-base-content/60">{pain.solve}</p>
							<span class="mt-3 inline-block font-mono text-xs text-base-content transition-transform duration-100 group-hover:translate-x-1">→</span>
						</div>
						<div class="hidden shrink-0 lg:block">
							<div class="h-5 w-5 text-base-content/20 transition-colors duration-100 group-hover:text-base-content/40">
								{@render serviceIcon(pain.servicio)}
							</div>
						</div>
					</div>
				</DataBlock>
			</a>
		{/each}
	</div>

	<div class="mt-10">
		<CommandAction level="primary" label="Ver todos los servicios"
			href={resolve('/(main)/servicios')}
			icon={ArrowUpRight} />
	</div>
</SectionLayout>

<script lang="ts">
	import { resolve } from '$app/paths';
	import { ArrowUpRight, Sparkles } from '@lucide/svelte';
	import CommandAction from '$lib/components/ui/CommandAction/CommandAction.svelte';
	import DataBlock from '$lib/components/ui/DataBlock/DataBlock.svelte';
	import SectionLayout from '$lib/components/ui/SectionLayout/SectionLayout.svelte';

	const projects = [
		{
			slug: 'encap' as const,
			id: '01',
			client: 'ENCAP',
			name: 'Tutor AI 24/7 para plataforma educativa',
			result: '95% satisfacción. 80% menos tiempo de respuesta. En producción activa.',
			featured: true
		},
		{
			slug: 'junin360' as const,
			id: '02',
			client: 'Gobierno Regional de Junín',
			name: 'Sistema de gestión de informes de control',
			result: '50% reducción en tiempo de gestión. Notificaciones WhatsApp y email.',
			featured: false
		},
		{
			slug: 'molaric' as const,
			id: '03',
			client: 'Molaric',
			name: 'Agente IA para clínicas dentales vía WhatsApp',
			result: 'El fracaso comercial que más me enseñó sobre agentes autónomos.',
			featured: false
		}
	] as const;
</script>

<SectionLayout
	variant="primary"
	number="02"
	label="PROYECTOS"
	title="Tres expedientes de clientes reales"
	italic_word="reales"
	description="Cada proyecto es un sistema que funciona en producción. Ninguno es un demo ni un ejercicio académico."
>
	<div class="flex flex-col gap-px">
		{#each projects as project (project.slug)}
			<a href={resolve('/(main)/proyectos/[projectId]', { projectId: project.slug })} class="block">
				<DataBlock level="compact" hover={true}>
					<div class="flex items-start justify-between gap-6">
						<div>
							<span
								class="mb-3 block font-mono text-xs font-medium tracking-[0.15em] text-secondary"
							>
								EXPEDIENTE {project.id} // {project.client.toUpperCase()}
								{#if project.featured}
									<Sparkles class="ml-1.5 inline h-3 w-3 text-accent/60" aria-hidden="true" />
								{/if}
							</span>
							<p class="font-mono text-sm font-medium text-base-content">{project.name}</p>
							<p class="mt-1 max-w-md font-mono text-xs leading-relaxed text-base-content/60">
								{project.result}
							</p>
						</div>
						<span
							class="hidden shrink-0 font-mono text-sm text-base-content transition-transform duration-100 group-hover:translate-x-1 lg:inline"
							>Ver caso →</span
						>
					</div>
				</DataBlock>
			</a>
		{/each}
	</div>

	<div class="mt-10">
		<CommandAction
			level="primary"
			label="Ver todos los proyectos"
			href={resolve('/(main)/proyectos')}
			icon={ArrowUpRight}
		/>
	</div>
</SectionLayout>

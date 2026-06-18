<script lang="ts">
	import { resolve } from '$app/paths';
	import { Sparkles } from '@lucide/svelte';

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

<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">02 // PROYECTOS</span>
		</div>

		<div class="flex flex-col gap-px">
			{#each projects as project (project.slug)}
				<a
					href={resolve('/(main)/proyectos/[projectId]', { projectId: project.slug })}
					class="card bg-base-200 border border-base-300 p-6 transition-all duration-100 hover:-translate-y-0.5 hover:border-base-content group lg:p-8"
				>
					<div class="flex items-start justify-between gap-6">
						<div>
							<span class="mb-3 block font-mono text-xs font-medium tracking-[0.15em] text-secondary">
								EXPEDIENTE {project.id} // {project.client.toUpperCase()}
								{#if project.featured}
									<Sparkles class="inline ml-1.5 h-3 w-3 text-accent/60" aria-hidden="true" />
								{/if}
							</span>
							<p class="font-mono text-sm font-medium text-base-content">{project.name}</p>
							<p class="mt-1 max-w-md font-mono text-xs leading-relaxed text-base-content/60">{project.result}</p>
						</div>
						<span class="hidden shrink-0 font-mono text-sm text-base-content transition-transform duration-100 group-hover:translate-x-1 lg:inline">Ver caso →</span>
					</div>
				</a>
			{/each}
		</div>

		<div class="mt-10">
			<a
				href={resolve('/(main)/proyectos')}
				class="btn btn-ghost border border-base-300 font-mono text-sm hover:border-base-content"
			>
				Ver todos los proyectos →
			</a>
		</div>
	</div>
</section>

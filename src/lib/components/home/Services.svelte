<script lang="ts">
	import { resolve } from '$app/paths';

	const pains = [
		{
			id: 'A',
			pain: '¿Tu personal pierde horas en tareas repetitivas?',
			solve: 'Agentes de IA que responden, agendan y procesan sin intervención humana.',
			href: resolve('/(main)/servicios')
		},
		{
			id: 'B',
			pain: '¿Tus sistemas actuales no se comunican entre sí?',
			solve: 'Automatización que conecta tus herramientas para que trabajen solas.',
			href: resolve('/(main)/servicios')
		},
		{
			id: 'C',
			pain: '¿No sabes por dónde empezar?',
			solve: 'Consultoría sin costo. Análisis de tu operación y hoja de ruta concreta.',
			href: resolve('/(main)/servicios')
		}
	] as const;
</script>

<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">03 // SERVICIOS</span>
		</div>

		<div class="grid gap-16 lg:grid-cols-12 lg:gap-24">
			<div class="lg:col-span-5">
				<h2 class="vanchi-display text-3xl font-normal lg:text-5xl">
					Dejá de operar<br />
					<span class="italic">software</span>
				</h2>
				<p class="mt-8 font-mono text-sm leading-relaxed text-base-content/60">
					No vendo licencias. Construyo agentes que reciben un objetivo y lo ejecutan
					solos. Cada solución empieza con un problema concreto de tu operación.
				</p>
			</div>

			<div class="lg:col-span-7">
				<div class="flex flex-col gap-6">
					{#each pains as pain (pain.id)}
						<a href={pain.href} class="card bg-base-200 border border-base-300 p-6 transition-all duration-100 hover:-translate-y-0.5 hover:border-base-content group lg:p-8">
							<span class="mb-3 block font-mono text-xs font-medium tracking-[0.15em] text-secondary">[{pain.id}]</span>
							<p class="font-mono text-sm font-medium text-base-content">{pain.pain}</p>
							<p class="mt-2 font-mono text-sm leading-relaxed text-base-content/60">{pain.solve}</p>
							<span class="mt-3 inline-block font-mono text-xs text-base-content transition-transform duration-100 group-hover:translate-x-1">→</span>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

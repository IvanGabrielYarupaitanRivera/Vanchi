<script lang="ts">
	import { resolve } from '$app/paths';

	export interface ConsultingProject {
		slug: string;
		client: string;
		name: string;
		result: string;
	}

	let { projects }: { projects: readonly ConsultingProject[] } = $props();
</script>

<!-- Cómo funciona la consultoría -->
<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">01 // CÓMO FUNCIONA</span>
		</div>

		<div class="flex flex-col gap-px">
			<div class="bg-base-200 border border-base-300 p-8 lg:p-10">
				<div class="flex items-start gap-8">
					<span class="hidden shrink-0 font-mono text-xs tracking-[0.15em] text-base-content/80 lg:block">00</span>
					<div>
						<span class="mb-2 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Gratuito — Conversación inicial</span>
						<p class="font-mono text-sm leading-relaxed text-base-content/70 max-w-2xl">
							Sin costo. Sin compromiso. Sin presentación de ventas. Me contás cómo opera
							tu negocio, qué procesos te frustran, qué te gustaría automatizar. Yo te
							digo si tiene sentido o no.
						</p>
					</div>
				</div>
			</div>
			<div class="bg-base-200 border border-base-300 p-8 lg:p-10">
				<div class="flex items-start gap-8">
					<span class="hidden shrink-0 font-mono text-xs tracking-[0.15em] text-base-content/80 lg:block">01</span>
					<div>
						<span class="mb-2 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Análisis de operación</span>
						<p class="font-mono text-sm leading-relaxed text-base-content/70 max-w-2xl">
							Mapeo tus procesos actuales. Identifico tareas repetitivas, cuellos de 
							botella, herramientas incomunicadas. Priorizo por impacto vs esfuerzo.
						</p>
					</div>
				</div>
			</div>
			<div class="bg-base-200 border border-base-300 p-8 lg:p-10">
				<div class="flex items-start gap-8">
					<span class="hidden shrink-0 font-mono text-xs tracking-[0.15em] text-base-content/80 lg:block">02</span>
					<div>
						<span class="mb-2 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Hoja de ruta</span>
						<p class="font-mono text-sm leading-relaxed text-base-content/70 max-w-2xl">
							Te entrego un plan concreto: qué automatizar, con qué herramientas, en 
							cuánto tiempo, cuánto cuesta. Sin tecnicismos. Sin PowerPoint. 
							Un documento de una página.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Cuándo contratar consultoría -->
<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">02 // ¿NECESITAS CONSULTORÍA?</span>
		</div>

		<div class="grid grid-cols-1 gap-px lg:grid-cols-2">
			<div class="bg-base-200 border border-base-300 p-8 lg:p-10">
				<h2 class="vanchi-display mb-4 text-3xl font-normal lg:text-5xl">
					Sí, si
				</h2>
				<ul class="space-y-3 font-mono text-sm text-base-content/70">
					<li class="flex items-start gap-2">
						<span class="text-base-content/40">→</span>
						<span>No sabés qué procesos se pueden automatizar</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-base-content/40">→</span>
						<span>Probaste herramientas SaaS y no resolvieron nada</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-base-content/40">→</span>
						<span>Tu equipo pasa más tiempo operando software que haciendo su trabajo</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-base-content/40">→</span>
						<span>Necesitás un presupuesto real antes de decidir</span>
					</li>
				</ul>
			</div>
			<div class="bg-base-200 border border-base-300 p-8 lg:p-10">
				<h2 class="vanchi-display mb-4 text-3xl font-normal lg:text-5xl">
					No, si
				</h2>
				<ul class="space-y-3 font-mono text-sm text-base-content/70">
					<li class="flex items-start gap-2">
						<span class="text-base-content/40">→</span>
						<span>Ya sabés exactamente qué necesitas</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-base-content/40">→</span>
						<span>Querés ir directo a implementación</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-base-content/40">→</span>
						<span>Tu proceso está claro, solo necesitás que lo construya</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Casos de consultoría -->
<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">03 // CASOS REALES</span>
		</div>

		{#each projects as project (project.slug)}
			<a
				href={resolve('/(main)/proyectos/[projectId]', { projectId: project.slug })}
				class="card bg-base-200 border border-base-300 p-8 transition-all duration-100 hover:-translate-y-0.5 hover:border-base-content group lg:p-10 mb-px"
			>
				<div class="flex items-start gap-8">
					<div class="grow">
						<span class="mb-3 block font-mono text-xs tracking-[0.15em] text-secondary">
							{project.client.toUpperCase()}
						</span>
						<h2 class="vanchi-display mb-4 text-3xl font-normal lg:text-5xl">
							{project.name}
						</h2>
						<p class="font-mono text-sm leading-relaxed text-base-content/60">
							{project.result}
						</p>
					</div>
					<div class="hidden shrink-0 items-end lg:flex">
						<span class="font-mono text-sm text-base-content transition-transform duration-100 group-hover:translate-x-1">→</span>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>

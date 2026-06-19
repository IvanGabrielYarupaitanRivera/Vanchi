<script lang="ts">
	import { resolve } from '$app/paths';

	export interface AutomationProject {
		slug: string;
		client: string;
		name: string;
		result: string;
	}

	let { projects }: { projects: readonly AutomationProject[] } = $props();
</script>

<!-- Qué automatizamos -->
<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">01 // QUÉ AUTOMATIZAMOS</span>
		</div>

		<div class="grid grid-cols-1 gap-px lg:grid-cols-2">
			<div class="bg-base-200 border border-base-300 p-8 lg:p-10">
				<h2 class="vanchi-display mb-4 text-3xl font-normal lg:text-5xl">
					Flujos de comunicación
				</h2>
				<p class="font-mono text-sm leading-relaxed text-base-content/70">
					Un cliente envía un mensaje por WhatsApp → el sistema verifica disponibilidad →
					agenda en Google Calendar → envía confirmación → notifica 24h antes.
					Sin intervención humana.
				</p>
			</div>
			<div class="bg-base-200 border border-base-300 p-8 lg:p-10">
				<h2 class="vanchi-display mb-4 text-3xl font-normal lg:text-5xl">
					Procesos administrativos
				</h2>
				<p class="font-mono text-sm leading-relaxed text-base-content/70">
					Un informe ingresa al sistema → se asigna automáticamente al responsable →
					se notifica por WhatsApp y correo → se genera un PDF con los datos →
					se registra en la base de datos.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Cómo funciona -->
<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">02 // CÓMO FUNCIONA</span>
		</div>

		<div class="flex flex-col gap-px">
			<div class="bg-base-200 border border-base-300 p-8 lg:p-10">
				<div class="flex items-start gap-8">
					<span class="hidden shrink-0 font-mono text-xs tracking-[0.15em] text-base-content/80 lg:block">01</span>
					<div>
						<span class="mb-2 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Mapeo de procesos</span>
						<p class="font-mono text-sm leading-relaxed text-base-content/70 max-w-2xl">
							Identifico cada paso de tu operación actual. Qué herramientas usás, quién
							interviene, qué dispara cada acción, dónde están los cuellos de botella.
						</p>
					</div>
				</div>
			</div>
			<div class="bg-base-200 border border-base-300 p-8 lg:p-10">
				<div class="flex items-start gap-8">
					<span class="hidden shrink-0 font-mono text-xs tracking-[0.15em] text-base-content/80 lg:block">02</span>
					<div>
						<span class="mb-2 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Orquestación</span>
						<p class="font-mono text-sm leading-relaxed text-base-content/70 max-w-2xl">
							Conecto las herramientas mediante APIs y agentes. Cada acción dispara la
							siguiente. No reemplazo tus sistemas actuales, los integro.
						</p>
					</div>
				</div>
			</div>
			<div class="bg-base-200 border border-base-300 p-8 lg:p-10">
				<div class="flex items-start gap-8">
					<span class="hidden shrink-0 font-mono text-xs tracking-[0.15em] text-base-content/80 lg:block">03</span>
					<div>
						<span class="mb-2 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Ejecución autónoma</span>
						<p class="font-mono text-sm leading-relaxed text-base-content/70 max-w-2xl">
							Los flujos corren solos. Sin supervisión. Sin clics. Si algo falla,
							el sistema lo registra y lo reporta. Vos solo intervenís cuando
							decidís cambiar las reglas.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Casos reales -->
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

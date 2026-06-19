<script lang="ts">
	import { resolve } from '$app/paths';

	export interface AgentProject {
		slug: string;
		client: string;
		name: string;
		result: string;
	}

	let { projects }: { projects: readonly AgentProject[] } = $props();
</script>

<!-- Qué es un agente IA -->
<section class="w-full border-t vanchi-hairline py-40">
	<div class="mx-auto max-w-5xl px-4">
		<div class="mb-16 flex items-center gap-2.5">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">01 // QUÉ ES UN AGENTE IA</span>
		</div>

		<div class="grid grid-cols-1 gap-px lg:grid-cols-2">
			<div class="border border-base-300 bg-base-200 p-8 lg:p-10">
				<h2 class="mb-4 vanchi-display text-3xl font-normal lg:text-5xl">No es un chatbot</h2>
				<p class="font-mono text-sm leading-relaxed text-base-content/70">
					Un chatbot responde lo que le preguntás. Un agente GaaS recibe un objetivo, razona los
					pasos necesarios, ejecuta actions sobre tus herramientas y reporta el resultado. Sin
					supervisión constante. Implementado para empresas en Huancayo, Junín y
					Perú.
				</p>
			</div>
			<div class="border border-base-300 bg-base-200 p-8 lg:p-10">
				<h2 class="mb-4 vanchi-display text-3xl font-normal lg:text-5xl">Goal-oriented</h2>
				<p class="font-mono text-sm leading-relaxed text-base-content/70">
					Definís el objetivo. El agente decide cómo llegar. Si encuentra un obstáculo, busca
					alternativas. Si necesita más datos, los solicita. Si completa la tarea, lo reporta. No
					necesita instrucciones paso a paso.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Cómo funciona -->
<section class="w-full border-t vanchi-hairline py-40">
	<div class="mx-auto max-w-5xl px-4">
		<div class="mb-16 flex items-center gap-2.5">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">02 // CÓMO FUNCIONA</span>
		</div>

		<div class="flex flex-col gap-px">
			<div class="border border-base-300 bg-base-200 p-8 lg:p-10">
				<div class="flex items-start gap-8">
					<span
						class="hidden shrink-0 font-mono text-xs tracking-[0.15em] text-base-content/80 lg:block"
						>01</span
					>
					<div>
						<span class="mb-2 block font-mono text-xs tracking-[0.15em] text-secondary uppercase"
							>Diagnóstico</span
						>
						<p class="max-w-2xl font-mono text-sm leading-relaxed text-base-content/70">
							Analizo tu operación actual. Identifico procesos repetitivos, cuellos de botella y
							tareas que un agente de IA puede ejecutar sin intervención humana.
						</p>
					</div>
				</div>
			</div>
			<div class="border border-base-300 bg-base-200 p-8 lg:p-10">
				<div class="flex items-start gap-8">
					<span
						class="hidden shrink-0 font-mono text-xs tracking-[0.15em] text-base-content/80 lg:block"
						>02</span
					>
					<div>
						<span class="mb-2 block font-mono text-xs tracking-[0.15em] text-secondary uppercase"
							>Construcción</span
						>
						<p class="max-w-2xl font-mono text-sm leading-relaxed text-base-content/70">
							Implemento el agente con las herramientas que ya usás: WhatsApp, correo, Google
							Calendar, base de datos, APIs. El agente se conecta a tus sistemas existentes, no los
							reemplaza.
						</p>
					</div>
				</div>
			</div>
			<div class="border border-base-300 bg-base-200 p-8 lg:p-10">
				<div class="flex items-start gap-8">
					<span
						class="hidden shrink-0 font-mono text-xs tracking-[0.15em] text-base-content/80 lg:block"
						>03</span
					>
					<div>
						<span class="mb-2 block font-mono text-xs tracking-[0.15em] text-secondary uppercase"
							>Ejecución autónoma</span
						>
						<p class="max-w-2xl font-mono text-sm leading-relaxed text-base-content/70">
							El agente opera 24/7. Responde clientes, agenda citas, procesa formularios, envía
							notificaciones. Vos solo supervisás. El agente hace el trabajo.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Casos reales -->
<section class="w-full border-t vanchi-hairline py-40">
	<div class="mx-auto max-w-5xl px-4">
		<div class="mb-16 flex items-center gap-2.5">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">03 // CASOS REALES</span>
		</div>

		{#each projects as project (project.slug)}
			<a
				href={resolve('/(main)/proyectos/[projectId]', { projectId: project.slug })}
				class="group card mb-px border border-base-300 bg-base-200 p-8 transition-all duration-100 hover:-translate-y-0.5 hover:border-base-content lg:p-10"
			>
				<div class="flex items-start gap-8">
					<div class="grow">
						<span class="mb-3 block font-mono text-xs tracking-[0.15em] text-secondary">
							{project.client.toUpperCase()}
						</span>
						<h2 class="mb-4 vanchi-display text-3xl font-normal lg:text-5xl">
							{project.name}
						</h2>
						<p class="font-mono text-sm leading-relaxed text-base-content/60">
							{project.result}
						</p>
					</div>
					<div class="hidden shrink-0 items-end lg:flex">
						<span
							class="font-mono text-sm text-base-content transition-transform duration-100 group-hover:translate-x-1"
							>→</span
						>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>

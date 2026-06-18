<script lang="ts">
	import { resolve } from '$app/paths';

	export interface LegalProject {
		slug: string;
		id: string;
		name: string;
		client: string;
		result: string;
	}

	let { projects }: { projects: readonly LegalProject[] } = $props();
</script>

<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">01 // DOLOR DEL SECTOR</span>
		</div>

		<div class="grid gap-16 lg:grid-cols-12 lg:gap-24">
			<div class="lg:col-span-5">
				<h2 class="vanchi-display text-3xl font-normal lg:text-5xl mb-8">
					Miles de folios,<br />
					<span class="italic">cero</span> indexación
				</h2>
				<p class="font-mono text-sm leading-relaxed text-base-content/60">
					Tus abogados saben de leyes. Pero pasan más tiempo buscando papeles que
					construyendo estrategia. El software tradicional te da un repositorio. Un agente
					te da <span class="text-base-content/80">un asistente que lee por vos</span>.
				</p>
			</div>
			<div class="lg:col-span-7">
				<div class="flex flex-col gap-6">
					<div class="card bg-base-200 border border-base-300 p-6 lg:p-8">
						<span class="mb-3 block font-mono text-xs font-medium tracking-[0.15em] text-secondary">[A]</span>
						<p class="font-mono text-sm leading-relaxed text-base-content/80">
							<span class="text-base-content">Búsqueda manual de información.</span> Encontrar un
							dato específico entre miles de folios digitales y físicos consume horas que tus
							abogados no tienen.
						</p>
					</div>
					<div class="card bg-base-200 border border-base-300 p-6 lg:p-8">
						<span class="mb-3 block font-mono text-xs font-medium tracking-[0.15em] text-secondary">[B]</span>
						<p class="font-mono text-sm leading-relaxed text-base-content/80">
							<span class="text-base-content">Plazos que vencen sin alerta.</span> Sin un sistema
							que monitoree automáticamente cada fecha límite, un plazo procesal vencido es
							un caso perdido.
						</p>
					</div>
					<div class="card bg-base-200 border border-base-300 p-6 lg:p-8">
						<span class="mb-3 block font-mono text-xs font-medium tracking-[0.15em] text-secondary">[C]</span>
						<p class="font-mono text-sm leading-relaxed text-base-content/80">
							<span class="text-base-content">Notificaciones desconectadas.</span> Los responsables
							de cada informe no reciben alertas a tiempo. El seguimiento depende de que alguien
							recuerde revisar el sistema.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">02 // CÓMO GaaS LO RESUELVE</span>
		</div>

		<div class="grid gap-16 lg:grid-cols-12 lg:gap-24">
			<div class="lg:col-span-5">
				<h2 class="vanchi-display text-3xl font-normal lg:text-5xl">
					Un agente que<br />
					<span class="italic">no duerme</span>
				</h2>
				<p class="mt-8 font-mono text-sm leading-relaxed text-base-content/60">
					Indexa expedientes automáticamente. Notifica vencimientos por WhatsApp y email.
					Genera PDFs de seguimiento sin intervención humana. El agente trabaja en background
					mientras tus abogados se concentran en lo que importa: la estrategia legal.
				</p>
			</div>

			<div class="lg:col-span-7">
				<div class="flex flex-col gap-px">
					{#each projects as project, i (project.slug)}
						<a
							href={resolve('/(main)/proyectos/[projectId]', { projectId: project.slug })}
							class="card bg-base-200 border border-base-300 p-6 transition-all duration-100 hover:-translate-y-0.5 hover:border-base-content group lg:p-8"
						>
							<div class="flex items-start justify-between gap-6">
								<div>
									<span class="mb-3 block font-mono text-xs font-medium tracking-[0.15em] text-secondary">
										EXPEDIENTE {project.id} // {project.client.toUpperCase()}
									</span>
									<p class="font-mono text-sm font-medium text-base-content">{project.name}</p>
									<p class="mt-1 max-w-md font-mono text-xs leading-relaxed text-base-content/60">
										{project.result}
									</p>
								</div>
								<span class="hidden shrink-0 font-mono text-sm text-base-content transition-transform duration-100 group-hover:translate-x-1 lg:inline">
									Ver caso →
								</span>
							</div>
						</a>
					{/each}
				</div>

				<div class="mt-8 flex flex-wrap items-center gap-6">
					<a
						href="https://api.whatsapp.com/send/?phone=51985942670&text=Hola%20Ivan,%20quiero%20automatizar%20la%20gestion%20de%20expedientes%20de%20mi%20estudio."
						target="_blank"
						rel="external noopener noreferrer"
						class="btn border-0 bg-base-content font-mono text-sm text-base-100 hover:opacity-90"
					>
						Consultar por WhatsApp →
					</a>
					<p class="font-mono text-xs text-secondary">Respuesta en menos de 24 horas.</p>
				</div>
			</div>
		</div>
	</div>
</section>

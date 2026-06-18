<script lang="ts">
	import { resolve } from '$app/paths';

	export interface HealthProject {
		slug: string;
		id: string;
		name: string;
		client: string;
		result: string;
	}

	let { projects }: { projects: readonly HealthProject[] } = $props();
</script>

<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">01 // DOLOR DEL SECTOR</span>
		</div>

		<!-- Asimétrico: texto 5 cols + vacío 7 cols -->
		<div class="grid gap-16 lg:grid-cols-12 lg:gap-24">
			<div class="lg:col-span-5">
				<h2 class="vanchi-display text-3xl font-normal lg:text-5xl mb-8">
					El problema no es<br />
					<span class="italic">la tecnología</span>
				</h2>
				<p class="font-mono text-sm leading-relaxed text-base-content/60">
					Tus sistemas funcionan. Tu personal está capacitado. Pero cuando un paciente no confirma,
					cuando un administrativo pasa 4 horas al día llamando por teléfono, cuando el inventario
					farmacéutico se actualiza a mano... no es un problema de esfuerzo. Es un problema de
					<span class="text-base-content/80">diseño del proceso</span>.
				</p>
			</div>
			<div class="lg:col-span-7">
				<div class="flex flex-col gap-6">
					<div class="card bg-base-200 border border-base-300 p-6 lg:p-8">
						<span class="mb-3 block font-mono text-xs font-medium tracking-[0.15em] text-secondary">[A]</span>
						<p class="font-mono text-sm leading-relaxed text-base-content/80">
							<span class="text-base-content">Ausentismo de pacientes.</span> Entre el 20% y 30% de las citas
							médicas programadas resultan en inasistencia. Cada cita perdida es una hora facturable
							que no se recupera.
						</p>
					</div>
					<div class="card bg-base-200 border border-base-300 p-6 lg:p-8">
						<span class="mb-3 block font-mono text-xs font-medium tracking-[0.15em] text-secondary">[B]</span>
						<p class="font-mono text-sm leading-relaxed text-base-content/80">
							<span class="text-base-content">Sobrecarga administrativa.</span> El personal dedica horas
							a confirmar citas, actualizar calendarios y responder consultas repetitivas por teléfono.
							Tiempo que debería estar en atención al paciente.
						</p>
					</div>
					<div class="card bg-base-200 border border-base-300 p-6 lg:p-8">
						<span class="mb-3 block font-mono text-xs font-medium tracking-[0.15em] text-secondary">[C]</span>
						<p class="font-mono text-sm leading-relaxed text-base-content/80">
							<span class="text-base-content">Pacientes sin respuesta fuera de horario.</span> Tu clínica
							cierra a las 6pm. Tus pacientes buscan agendar a las 9pm. Sin un canal 24/7, perdés
							cada consulta que llega después del horario laboral.
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
					Agentes que<br />
					<span class="italic">trabajan</span> solos
				</h2>
				<p class="mt-8 font-mono text-sm leading-relaxed text-base-content/60">
					Un agente de IA no es un SaaS que tu personal tiene que operar. Es software que ejecuta
					sin que nadie le dé clic. Confirmar citas, consultar disponibilidad en Google Calendar,
					responder dudas frecuentes... todo ocurre en background mientras tu equipo atiende pacientes.
				</p>
			</div>

			<div class="lg:col-span-7">
				<div class="flex flex-col gap-px">
					<!-- Proyectos indexados -->
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
						href="https://api.whatsapp.com/send/?phone=51985942670&text=Hola%20Ivan,%20quiero%20automatizar%20la%20gestion%20de%20citas%20de%20mi%20clinica."
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

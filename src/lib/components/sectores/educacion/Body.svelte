<script lang="ts">
	import { resolve } from '$app/paths';

	export interface EducationProject {
		slug: string;
		id: string;
		name: string;
		client: string;
		result: string;
	}

	let { projects }: { projects: readonly EducationProject[] } = $props();
</script>

<section class="w-full border-t vanchi-hairline py-40">
	<div class="mx-auto max-w-5xl px-4">
		<div class="mb-16 flex items-center gap-2.5">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">01 // DOLOR DEL SECTOR</span>
		</div>

		<div class="grid gap-16 lg:grid-cols-12 lg:gap-24">
			<div class="lg:col-span-5">
				<h2 class="mb-8 vanchi-display text-3xl font-normal lg:text-5xl">
					Docentes saturados,<br />
					<span class="italic">alumnos</span> esperando
				</h2>
				<p class="font-mono text-sm leading-relaxed text-base-content/60">
					Tus docentes quieren enseñar. Pero repiten la misma respuesta 50 veces al día. Un agente
					no reemplaza al docente. Lo libera de lo repetitivo para que haga
					<span class="text-base-content/80">lo que solo un humano puede hacer</span>.
				</p>
			</div>
			<div class="lg:col-span-7">
				<div class="flex flex-col gap-6">
					<div class="card border border-base-300 bg-base-200 p-6 lg:p-8">
						<span class="mb-3 block font-mono text-xs font-medium tracking-[0.15em] text-secondary"
							>[A]</span
						>
						<p class="font-mono text-sm leading-relaxed text-base-content/80">
							<span class="text-base-content">Consultas repetitivas sin respuesta.</span> Alumnos con
							dudas fuera de horario, docentes repitiendo la misma explicación decenas de veces. Un agente
							disponible 24/7 absorbe esa carga.
						</p>
					</div>
					<div class="card border border-base-300 bg-base-200 p-6 lg:p-8">
						<span class="mb-3 block font-mono text-xs font-medium tracking-[0.15em] text-secondary"
							>[B]</span
						>
						<p class="font-mono text-sm leading-relaxed text-base-content/80">
							<span class="text-base-content">Carga administrativa que entierra la pedagogía.</span>
							Llenar planillas, actualizar registros, enviar comunicados. Tareas que un agente puede
							ejecutar mientras el equipo se concentra en los alumnos.
						</p>
					</div>
					<div class="card border border-base-300 bg-base-200 p-6 lg:p-8">
						<span class="mb-3 block font-mono text-xs font-medium tracking-[0.15em] text-secondary"
							>[C]</span
						>
						<p class="font-mono text-sm leading-relaxed text-base-content/80">
							<span class="text-base-content">Falta de feedback inmediato.</span> Sin datos en tiempo
							real sobre la comprensión de los alumnos, el docente ajusta a ciegas. Un agente genera
							y corrige preguntas automáticamente, mostrando quién necesita ayuda.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="w-full border-t vanchi-hairline py-40">
	<div class="mx-auto max-w-5xl px-4">
		<div class="mb-16 flex items-center gap-2.5">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">02 // CÓMO GaaS LO RESUELVE</span>
		</div>

		<div class="grid gap-16 lg:grid-cols-12 lg:gap-24">
			<div class="lg:col-span-5">
				<h2 class="vanchi-display text-3xl font-normal lg:text-5xl">
					Agentes que<br />
					<span class="italic">enseñan</span> solos
				</h2>
				<p class="mt-8 font-mono text-sm leading-relaxed text-base-content/60">
					Un tutor IA que responde dudas académicas con conocimiento específico de cada curso. Una
					plataforma que genera preguntas automáticamente desde el contenido de la clase. Un sitio
					web que gestiona admisiones sin intervención manual. Todo funcionando mientras tus
					docentes hacen lo que mejor saben: enseñar.
				</p>
			</div>

			<div class="lg:col-span-7">
				<div class="flex flex-col gap-px">
					{#each projects as project (project.slug)}
						<a
							href={resolve('/(main)/proyectos/[projectId]', { projectId: project.slug })}
							class="group card border border-base-300 bg-base-200 p-6 transition-all duration-100 hover:-translate-y-0.5 hover:border-base-content lg:p-8"
						>
							<div class="flex items-start justify-between gap-6">
								<div>
									<span
										class="mb-3 block font-mono text-xs font-medium tracking-[0.15em] text-secondary"
									>
										EXPEDIENTE {project.id} // {project.client.toUpperCase()}
									</span>
									<p class="font-mono text-sm font-medium text-base-content">{project.name}</p>
									<p class="mt-1 max-w-md font-mono text-xs leading-relaxed text-base-content/60">
										{project.result}
									</p>
								</div>
								<span
									class="hidden shrink-0 font-mono text-sm text-base-content transition-transform duration-100 group-hover:translate-x-1 lg:inline"
								>
									Ver caso →
								</span>
							</div>
						</a>
					{/each}
				</div>

				<div class="mt-8 flex flex-wrap items-center gap-6">
					<a
						href="https://api.whatsapp.com/send/?phone=51985942670&text=Hola%20Ivan,%20quiero%20automatizar%20procesos%20en%20mi%20institucion%20educativa."
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

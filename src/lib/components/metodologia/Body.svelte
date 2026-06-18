<script lang="ts">
	import { resolve } from '$app/paths';
	import { Sparkles } from '@lucide/svelte';

	const characteristics = [
		{
			id: '01',
			name: 'Outcome-Based',
			desc: 'Facturación por métricas de éxito, no por licencias ni horas. Si el agente no resuelve el problema, no pagas.'
		},
		{
			id: '02',
			name: 'Goal-Driven',
			desc: 'Recibe un objetivo global y genera subpasos dinámicamente. Sin árboles de decisión predefinidos.'
		},
		{
			id: '03',
			name: 'Reasoning Loop',
			desc: 'Bucle de evaluación continua. Analiza contexto, desglosa problemas y corrige su rumbo automáticamente.'
		},
		{
			id: '04',
			name: 'Tool Use',
			desc: 'Ejecuta funciones, mutaciones y APIs de terceros de forma autónoma. Lee y escribe sin que nadie toque nada.'
		},
		{
			id: '05',
			name: 'Persistent Memory',
			desc: 'Indexación persistente de interacciones previas. Hereda contexto sin reentrenar ni resetear.'
		},
		{
			id: '06',
			name: 'Self-Improvement',
			desc: 'Optimiza sus propios prompts basándose en logs de ejecuciones pasadas. Cada iteración es mejor que la anterior.'
		},
		{
			id: '07',
			name: 'Multi-Agent',
			desc: 'Agentes especializados que heredan estados y se transfieren subtareas. Orquestación, no monolito.'
		},
		{
			id: '08',
			name: 'Proactive Interaction',
			desc: 'Guiado por eventos de fondo. Inicia flujos ante anomalías sin esperar que un humano haga clic.'
		},
		{
			id: '09',
			name: 'Guardrails & Alignment',
			desc: 'Tipado estricto del lado servidor como escudo de seguridad. Cada acción validada antes de ejecutarse.'
		},
		{
			id: '10',
			name: 'Human-in-the-Loop',
			desc: 'Flujos que pausan ejecución para confirmación humana en decisiones críticas. Nunca pierdes el control.'
		}
	] as const;
</script>

<!-- Sección 1: El problema -->
<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">01 // EL PROBLEMA</span>
		</div>

		<div class="grid gap-16 lg:grid-cols-12 lg:gap-24">
			<div class="lg:col-span-5">
				<h2 class="vanchi-display text-3xl font-normal lg:text-5xl mb-8">
					SaaS te da<br />
					<span class="italic">herramientas</span>
				</h2>
				<p class="font-mono text-sm leading-relaxed text-base-content/60">
					Pero no te da resultados. Compras el software, capacitas a tu equipo, y aún así
					todo depende de que alguien opere el sistema. El valor no está en la licencia.
					Está en <span class="text-base-content/80">lo que el software hace solo</span>.
				</p>
			</div>
			<div class="lg:col-span-7">
				<div class="flex flex-col gap-6">
					<div class="card bg-base-200 border border-base-300 p-6 lg:p-8">
						<span class="mb-3 block font-mono text-xs font-medium tracking-[0.15em] text-secondary">SaaS</span>
						<p class="font-mono text-sm leading-relaxed text-base-content/80">
							<span class="text-base-content">Software as a Service.</span> Pagás una licencia mensual.
							El software está ahí. Pero necesita que un humano lo opere. Que alguien haga clic, configure,
							revise. El valor depende de la intervención humana constante.
						</p>
					</div>
					<div class="card bg-base-200 border border-base-300 p-6 lg:p-8">
						<span class="mb-3 block font-mono text-xs font-medium tracking-[0.15em] text-secondary">GaaS</span>
						<p class="font-mono text-sm leading-relaxed text-base-content/80">
							<span class="text-base-content">Generative Agent as a Service.</span> Pagás por resultados.
							El agente recibe un objetivo, razona, usa herramientas, ejecuta y reporta. Sin que nadie
							tenga que operarlo. El valor está en lo que se completa, no en la licencia.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Sección 2: Las 10 características -->
<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">02 // CARACTERÍSTICAS</span>
		</div>

		<div class="grid gap-16 lg:grid-cols-12 lg:gap-24">
			<div class="lg:col-span-5">
				<h2 class="vanchi-display text-3xl font-normal lg:text-5xl mb-8">
					Diez reglas<br />
					<span class="italic">no negociables</span>
				</h2>
				<p class="mt-8 font-mono text-sm leading-relaxed text-base-content/60">
					No son marketing. Son restricciones de ingeniería. Cada agente que construyo debe
					cumplir estas diez características. Si no las cumple, no es GaaS.
				</p>
			</div>

			<div class="lg:col-span-7">
				<div class="flex flex-col gap-px">
					{#each characteristics as char (char.id)}
						<div class="card bg-base-200 border border-base-300 p-6 lg:p-8">
							<div class="flex items-start gap-6">
								<span class="shrink-0 font-mono text-xs font-medium tracking-[0.15em] text-secondary tabular-nums">
									{char.id}
								</span>
								<div>
									<p class="font-mono text-sm font-medium text-base-content">{char.name}</p>
									<p class="mt-1 font-mono text-xs leading-relaxed text-base-content/60">{char.desc}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Sección 3: Evidencia real -->
<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">03 // EVIDENCIA</span>
		</div>

		<div class="grid gap-16 lg:grid-cols-12 lg:gap-24">
			<div class="lg:col-span-5">
				<h2 class="vanchi-display text-3xl font-normal lg:text-5xl mb-8">
					Un éxito y<br />
					<span class="italic">un fracaso</span>
				</h2>
				<p class="font-mono text-sm leading-relaxed text-base-content/60">
					Teoría sin práctica es humo. Acá tienes las dos caras de GaaS: el proyecto que
					funciona en producción y el que me enseñó más de lo que cualquier curso podría.
				</p>
			</div>
			<div class="lg:col-span-7">
				<div class="flex flex-col gap-6">
					<a
						href={resolve('/(main)/proyectos/[projectId]', { projectId: 'encap' })}
						class="card bg-base-200 border border-base-300 p-6 transition-all duration-100 hover:-translate-y-0.5 hover:border-base-content group lg:p-8"
					>
						<span class="mb-3 block font-mono text-xs font-medium tracking-[0.15em] text-secondary">CASO DE ÉXITO</span>
						<p class="mb-2 font-mono text-sm font-medium text-base-content">ENCAP <Sparkles class="inline h-3 w-3 text-accent/60" aria-hidden="true" /> — Tutor AI 24/7</p>
						<p class="max-w-md font-mono text-xs leading-relaxed text-base-content/60">
							Agente conversacional que resuelve dudas académicas de estudiantes sin un docente
							conectado. 95% de satisfacción. Cliente real, en producción, facturado.
						</p>
						<span class="mt-3 inline-block font-mono text-xs text-base-content transition-transform duration-100 group-hover:translate-x-1">Ver caso →</span>
					</a>

					<a
						href={resolve('/(main)/proyectos/[projectId]', { projectId: 'molaric' })}
						class="card bg-base-200 border border-base-300 p-6 transition-all duration-100 hover:-translate-y-0.5 hover:border-base-content group lg:p-8"
					>
						<span class="mb-3 block font-mono text-xs font-medium tracking-[0.15em] text-secondary">CASO DE APRENDIZAJE</span>
						<p class="mb-2 font-mono text-sm font-medium text-base-content">Molaric — El fracaso que definió GaaS</p>
						<p class="max-w-md font-mono text-xs leading-relaxed text-base-content/60">
							Agente IA para clínicas dentales vía WhatsApp. No consiguió clientes, pero fue donde
							entendí que un agente puede reemplazar procesos humanos completos. Técnicamente impecable,
							comercialmente un fracaso. Y el proyecto que más me enseñó.
						</p>
						<span class="mt-3 inline-block font-mono text-xs text-base-content transition-transform duration-100 group-hover:translate-x-1">Ver caso →</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

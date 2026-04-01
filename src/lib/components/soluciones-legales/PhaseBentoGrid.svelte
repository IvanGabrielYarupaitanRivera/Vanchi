<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Layout, Users, Database, Workflow, Bot } from '@lucide/svelte';

	// Fases del plan
	const phases = [
		{
			id: '01',
			title: 'Presencia Élite',
			desc: 'Diseño de un sitio web inmersivo que proyecte la autoridad y prestigio de tu firma legal.',
			icon: Layout,
			className: 'md:col-span-2 lg:col-span-2'
		},
		{
			id: '02',
			title: 'Captación',
			desc: 'Embudos de conversión automatizados para filtrar y agendar prospectos de alto valor.',
			icon: Users,
			className: 'md:col-span-1 lg:col-span-2'
		},
		{
			id: '03',
			title: 'Sistema Interno',
			desc: 'Desarrollo de una plataforma centralizada a medida para administrar expedientes y clientes.',
			icon: Database,
			className: 'md:col-span-1 lg:col-span-2'
		},
		{
			id: '04',
			title: 'Automatización',
			desc: 'Digitalización de flujos repetitivos y generación automática de documentos jurídicos.',
			icon: Workflow,
			className: 'md:col-span-1 lg:col-span-3'
		},
		{
			id: '05',
			title: 'Agentes de IA',
			desc: 'Integración de asistentes autónomos para atención 24/7 y análisis inteligente de casos.',
			icon: Bot,
			className: 'md:col-span-1 lg:col-span-3'
		}
	];
</script>

<!-- ── Bento Grid: Fases del plan ── -->
<section class="w-full">
	<div class="container mx-auto px-4">
		<div
			in:fly={{ y: 60, duration: 1200, delay: 900 }}
			class="relative z-10 mt-16 w-full max-w-6xl px-4 pb-24"
		>
			<div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 lg:gap-6">
				{#each phases as phase (phase.id)}
					<div
						class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-base-100/60 p-6 shadow-2xl backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(197,160,89,0.15)] lg:p-8 {phase.className}"
					>
						<!-- Gradient sutíl en hover -->
						<div
							class="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>

						<div class="relative z-10 flex items-start justify-between">
							<!-- Número grande / Identificador -->
							<span
								class="text-3xl font-bold text-white/5 transition-colors duration-300 group-hover:text-primary/20 lg:text-5xl"
							>
								{phase.id}
							</span>

							<!-- Icono -->
							<div
								class="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/20"
							>
								<svelte:component
									this={phase.icon}
									class="h-6 w-6 text-primary"
									strokeWidth={1.5}
								/>
							</div>
						</div>

						<div class="relative z-10 mt-12 lg:mt-16">
							<h3 class="mb-2 text-xl font-bold text-base-content md:text-2xl">
								{phase.title}
							</h3>
							<p class="text-sm leading-relaxed text-base-content/60 md:text-base">
								{phase.desc}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

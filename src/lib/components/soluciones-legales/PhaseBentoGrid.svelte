<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Layout, Users, Database, Workflow, Bot } from '@lucide/svelte';

	// Fases del plan
	const phases = [
		{
			id: '01',
			title: 'El Despertar',
			desc: 'Tu firma tiene una presencia online que da confianza desde el primer vistazo.',
			icon: Layout,
			className: 'md:col-span-2 lg:col-span-2'
		},
		{
			id: '02',
			title: 'La Transformación',
			desc: 'Los clientes se agendan solos. Tú solo llegas a la reunión.',
			icon: Users,
			className: 'md:col-span-1 lg:col-span-2'
		},
		{
			id: '03',
			title: 'Sincronía Total',
			desc: 'Todos tus expedientes, clientes y documentos en un solo lugar, ordenados.',
			icon: Database,
			className: 'md:col-span-1 lg:col-span-2'
		},
		{
			id: '04',
			title: 'Bienvenido a la IA',
			desc: 'Los documentos y escritos repetitivos se generan solos. Tú te enfocas en lo importante.',
			icon: Workflow,
			className: 'md:col-span-1 lg:col-span-3'
		},
		{
			id: '05',
			title: 'Mente Maestra',
			desc: 'Un asistente inteligente atiende consultas, busca jurisprudencia y analiza casos por ti.',
			icon: Bot,
			className: 'md:col-span-1 lg:col-span-3'
		}
	];
</script>

<!-- ── Bento Grid: Fases del plan ── -->
<section class="relative z-10 -mt-32 w-full lg:-mt-32">
	<div in:fly={{ y: 60, duration: 1200, delay: 900 }} class="mx-auto w-full max-w-6xl px-4">
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
							<svelte:component this={phase.icon} class="h-6 w-6 text-primary" strokeWidth={1.5} />
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
</section>

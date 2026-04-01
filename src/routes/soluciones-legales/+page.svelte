<script lang="ts">
	import { resolve } from '$app/paths';
	import { ArrowRight, ArrowUpRight, Shield, Globe, Cpu, Scale, Sparkles } from '@lucide/svelte';
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/soluciones-legales/Hero.svelte';
	import PhaseBentoGrid from '$lib/components/soluciones-legales/PhaseBentoGrid.svelte';

	const cards = [
		{
			id: '01',
			title: 'Auditoría',
			desc: 'Análisis profundo de la infraestructura actual del estudio.'
		},
		{ id: '02', title: 'Procesos', desc: 'Optimización y mapeo de flujos de trabajo repetitivos.' },
		{ id: '03', title: 'Adopción', desc: 'Implementación de IA y herramientas de gestión.' },
		{ id: '04', title: 'Escalado', desc: 'Estrategias de captación de clientes de alto valor.' }
	];

	const features = [
		{
			id: '01',
			title: 'Gestión Documental Inteligente',
			subtitle: 'Data Harmonization',
			desc: 'Convierte archivos fragmentados en datasets estructurados y listos para IA.',
			img: 'https://picsum.photos/400/300?random=1'
		},
		{
			id: '02',
			title: 'Modelos Predictivos',
			subtitle: 'Predictive Intelligence',
			desc: 'Modelos entrenados para predecir tendencias en resoluciones.',
			img: 'https://picsum.photos/400/300?random=2'
		},
		{
			id: '03',
			title: 'Capa de Automatización',
			subtitle: 'Decision Automation',
			desc: 'Redacción automatizada integrada directamente en el flujo.',
			img: 'https://picsum.photos/400/300?random=3'
		}
	];
</script>

<SEO
	title="Legal Tech | Vanchi"
	description="Construimos Inteligencia Artificial para firmas modernas."
	keywords="Legal, IA, Automatizacion"
	url="https://vanchi.pro/soluciones-legales"
/>

<Hero />
<PhaseBentoGrid />

<!-- 2. The Gap / Executive Summary -->
<section id="explore" class="relative border-t border-white/5 bg-base-100/50 py-24">
	<div class="container mx-auto px-6">
		<div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
			<div class="flex flex-col justify-center lg:col-span-5">
				<div class="mb-4 inline-block">
					<span class="text-sm font-bold tracking-widest text-primary uppercase"
						>Executive Summary</span
					>
				</div>
				<h2 class="mb-8 text-4xl leading-tight font-bold tracking-tight md:text-5xl">
					La Brecha <br />
					<span class="font-serif text-base-content/50 italic">Tecnológica</span>
				</h2>

				<!-- Highlight Quote/Metric -->
				<div class="mb-10 flex items-start gap-5 border-l-2 border-primary/30 py-2 pl-6">
					<p class="font-serif text-4xl font-black text-primary italic">78%</p>
					<p class="text-sm leading-relaxed text-base-content/60">
						de firmas reportan la adopción de tecnología como su prioridad top.
					</p>
				</div>

				<p class="mb-8 text-base leading-loose text-base-content/70">
					Las organizaciones enfrentan barreras como sistemas fragmentados, falta de experiencia y
					métricas de ROI inciertas. La revolución digital está aquí, pero pocos extraen su
					verdadero valor.
				</p>
			</div>

			<!-- Image overlap with card -->
			<div
				class="group relative h-125 w-full overflow-hidden rounded-4xl border border-white/10 bg-base-200/50 md:h-150 lg:col-span-7"
			>
				<img
					src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80"
					alt="Resumen Legal"
					class="h-full w-full object-cover opacity-60 mix-blend-luminosity grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
				/>
				<div class="absolute inset-0 bg-base-100/30"></div>

				<!-- Floating Stat Card (Bottom Left overlapping) -->
				<div
					class="absolute bottom-8 left-8 w-64 rounded-2xl border border-white/10 bg-base-100/90 p-8 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 md:bottom-12 md:left-12 md:w-80"
				>
					<Sparkles size={24} class="mb-4 text-primary" />
					<p class="mb-1 text-[0.65rem] font-black tracking-widest text-base-content/50 uppercase">
						Impacto Real
					</p>
					<p class="mb-3 font-serif text-5xl font-bold text-base-content italic">26%</p>
					<p class="text-sm leading-relaxed text-base-content/70">
						logran implementar IA a escala de forma exitosa.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- 3. Strategic Grid (Cards 01 02 03 04) based on Business Proposal -->
<section class="relative py-32">
	<div class="absolute inset-0 border-y border-white/5 bg-base-200/30"></div>

	<div class="relative z-10 container mx-auto px-6">
		<div class="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
			<div>
				<h2 class="mb-2 text-4xl font-bold tracking-tight md:text-5xl">
					Propuesta <br />
					<span class="font-serif text-primary italic">Crecimiento 2026</span>
				</h2>
			</div>
			<p class="max-w-sm text-sm leading-relaxed text-base-content/60 md:text-right">
				Framework diseñado para resultados tangibles y escalabilidad operativa sin fricción desde el
				primer día.
			</p>
		</div>

		<!-- Using unique key in each loop as per svelte/require-each-key -->
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each cards as card (card.id)}
				<article
					class="group relative flex h-80 flex-col overflow-hidden rounded-2xl border border-white/10 bg-base-100/80 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(197,160,89,0.1)]"
				>
					<!-- Top -->
					<div
						class="flex h-[55%] flex-col justify-end bg-linear-to-b from-transparent to-base-200/50 p-8 transition-colors duration-500 group-hover:bg-primary/5"
					>
						<h3 class="mb-2 text-xl font-bold text-base-content">{card.title}</h3>
						<p class="text-xs leading-relaxed text-base-content/60">{card.desc}</p>
					</div>
					<!-- Bottom Massive Text -->
					<div
						class="relative flex h-[45%] flex-col justify-end overflow-hidden border-t border-white/5 bg-base-300/50 p-8"
					>
						<span
							class="absolute -right-2 -bottom-6 text-8xl font-black tracking-tighter text-base-content/5 transition-colors duration-500 group-hover:text-primary/10"
							>{card.id}</span
						>
						<!-- Small CTA Icon -->
						<div
							class="relative z-10 w-fit rounded-full border border-white/10 bg-base-100 p-3 transition-colors duration-300 group-hover:border-primary group-hover:bg-primary"
						>
							<ArrowUpRight size={20} class="text-base-content/50 group-hover:text-base-100" />
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- 4. Architecture Layer (Based on Vern slide 3) -->
<section class="relative overflow-hidden py-32">
	<!-- Decorative faint spheres -->
	<div
		class="pointer-events-none absolute top-1/2 left-1/2 h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 opacity-50"
	></div>
	<div
		class="pointer-events-none absolute top-1/2 left-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 opacity-50"
	></div>

	<div class="relative z-10 container mx-auto px-6">
		<h2 class="mb-20 text-center text-4xl font-bold tracking-tight md:text-6xl">
			Arquitectura del <span class="font-serif text-primary italic">Producto</span>
		</h2>

		<!-- 3 Layer Stack -->
		<div class="mx-auto grid max-w-5xl grid-cols-1 items-center gap-6 lg:grid-cols-3">
			<!-- Layer 1 -->
			<div class="flex h-full flex-col">
				<div
					class="h-full rounded-3xl border border-white/10 bg-base-200/60 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/30"
				>
					<Globe size={32} class="mb-6 text-base-content/40" />
					<h3 class="mb-3 text-xl font-bold">Data Core</h3>
					<p class="text-sm leading-relaxed text-base-content/60">
						Recolecta y estructura la información legal dispersa en repositorios, ERPs y
						comunicaciones del cliente.
					</p>
				</div>
			</div>

			<!-- Layer 2 (Highlighted focus) -->
			<div class="relative z-10 flex h-full flex-col lg:-mt-12">
				<div
					class="group flex h-full flex-col justify-center rounded-3xl border border-primary/30 bg-base-100 p-10 shadow-[0_0_40px_rgba(197,160,89,0.15)]"
				>
					<div class="mb-6 flex items-center gap-3">
						<Cpu size={32} class="text-primary transition-transform group-hover:scale-110" />
					</div>
					<h3 class="mb-4 font-serif text-2xl font-bold text-primary italic">Intelligence Layer</h3>
					<p class="text-sm leading-relaxed text-base-content/70">
						Modelos híbridos entrenados para clasificar, entender y anticipar las necesidades
						procesales con extrema precisión.
					</p>
				</div>
			</div>

			<!-- Layer 3 -->
			<div class="flex h-full flex-col lg:mt-12">
				<div
					class="h-full rounded-3xl border border-white/10 bg-base-200/60 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/30"
				>
					<Shield size={32} class="mb-6 text-base-content/40" />
					<h3 class="mb-3 text-xl font-bold">Execution Layer</h3>
					<p class="text-sm leading-relaxed text-base-content/60">
						Integración impecable en el flujo de trabajo mediante dashboards ejecutivos o
						automatizaciones a sistemas de terceros.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- 5. Product Overview Grid (Based on Vern Slide 4) -->
<section class="relative border-t border-white/5 py-24">
	<div class="container mx-auto px-6">
		<div class="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
			<div>
				<span class="mb-4 block text-sm font-bold tracking-widest text-primary uppercase"
					>Plataforma</span
				>
				<h2 class="text-4xl leading-tight font-bold md:text-5xl">
					El Ecosistema <br />
					<span class="font-serif text-base-content/40 italic">Incluye:</span>
				</h2>
			</div>
			<!-- Subtle inline box for context -->
			<div
				class="flex max-w-md items-start gap-4 rounded-2xl border border-white/5 bg-base-200/50 p-6"
			>
				<Scale size={24} class="mt-1 shrink-0 text-primary" />
				<p class="text-sm leading-relaxed text-base-content/70">
					Proporcionamos un stack integrado diseñado específicamente para firmas modernas. Un
					ecosistema que unifica data, predictibilidad y ejecución.
				</p>
			</div>
		</div>

		<!-- Card Grid -->
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			{#each features as feat (feat.id)}
				<article
					class="group overflow-hidden rounded-4xl border border-white/10 bg-base-200/40 transition-colors duration-500 hover:border-primary/20 hover:bg-base-200/70"
				>
					<!-- Top Image Mask -->
					<div class="relative h-48 overflow-hidden">
						<img
							src={feat.img}
							alt={feat.title}
							class="h-full w-full object-cover opacity-50 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
						/>
						<div class="absolute inset-0 bg-linear-to-t from-base-200/90 to-transparent"></div>

						<div
							class="absolute top-6 left-6 rounded-full border border-white/10 bg-base-100/80 px-3 py-1 backdrop-blur-md"
						>
							<span class="text-sm font-bold text-primary">{feat.id}</span>
						</div>
					</div>
					<!-- Bottom Details -->
					<div class="p-8 pt-2">
						<p
							class="mb-2 text-[0.65rem] font-black tracking-[0.2em] text-base-content/40 uppercase"
						>
							{feat.subtitle}
						</p>
						<h3 class="mb-3 text-xl font-bold text-base-content/90">{feat.title}</h3>
						<p class="mb-6 text-sm leading-relaxed text-base-content/60">{feat.desc}</p>

						<!-- Clean CTA Link -->
						<a
							href={resolve('/#contacto')}
							class="inline-flex items-center gap-1 text-xs font-bold tracking-widest text-primary uppercase transition-all hover:gap-2"
						>
							Conectar <ArrowRight size={14} />
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

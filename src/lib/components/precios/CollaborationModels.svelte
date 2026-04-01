<script lang="ts">
	import {
		ArrowDown,
		Check,
		ArrowUpRight,
		Search,
		LayoutGrid,
		Bot,
		Database,
		ShieldCheck
	} from '@lucide/svelte';
	import { fly } from 'svelte/transition';
	import { resolve } from '$app/paths';
	import bgPricing from '$lib/assets/images/pricing/bg-pricing.webp';

	const addons = [
		{
			title: 'Módulo SEO',
			price: '+ S/ 20',
			period: '/mes',
			desc: 'Posicionamiento en Google. Aparece cuando tus clientes te buscan.',
			icon: Search
		},
		{
			title: 'Módulo Catálogo',
			price: '+ S/ 50',
			period: '/mes',
			desc: 'Muestra hasta 50 productos con galerías y detalles dinámicos.',
			icon: LayoutGrid
		},
		{
			title: 'Asistente IA',
			price: '+ S/ 100',
			period: '/mes',
			desc: 'IA entrenada que responde dudas y atiende 24/7 en tu web.',
			icon: Bot
		},
		{
			title: 'Sistema interno',
			price: '+ S/ 200',
			period: '/mes',
			desc: 'Intranet, reportes y control total para administrar tu negocio.',
			icon: Database
		}
	];
</script>

<section class="relative -mt-24 flex min-h-screen w-full items-center justify-center">
	<enhanced:img
		src={bgPricing}
		alt="Fondo Hero de la Página de Precios"
		fetchpriority="high"
		loading="eager"
		class="absolute inset-0 h-full w-full mask-r-from-80% mask-b-from-50% mask-l-from-80% object-cover object-center opacity-10"
	/>

	<div class="relative hero-content z-10 text-center text-base-content">
		<div class="max-w-4xl">
			<!-- Badge: Magic Border Effect -->
			<div
				in:fly={{ y: 30, duration: 1000, delay: 200 }}
				class="relative mb-8 inline-flex overflow-hidden rounded-full p-px"
			>
				<span
					class="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#C5A059_50%,transparent_100%)]"
				></span>
				<div
					class="inline-flex h-full w-full items-center gap-2 rounded-full bg-base-100/90 px-4 py-1.5 backdrop-blur-3xl"
				>
					<div class="inline-grid *:[grid-area:1/1]">
						<div class="status animate-ping status-primary"></div>
						<div class="status status-primary"></div>
					</div>
					<span class="flex gap-1 text-xs font-medium tracking-widest text-base-content uppercase">
						Suscripción Evolutiva
					</span>
				</div>
			</div>

			<!-- H1: Mezcla de Sans (Tech) y Serif (Lujo) -->
			<h1
				in:fly={{ y: 30, duration: 1000, delay: 400 }}
				class="mb-8 text-5xl font-bold lg:text-7xl"
			>
				Inversión
				<br />
				<span
					class="bg-linear-to-r from-primary via-yellow-200 to-primary bg-clip-text px-1 font-serif text-transparent italic"
				>
					Inteligente.
				</span>
			</h1>

			<p
				in:fly={{ y: 30, duration: 1000, delay: 600 }}
				class="mx-auto mb-10 max-w-2xl px-4 text-sm text-pretty text-base-content/80 lg:text-lg"
			>
				Deja de comprar software costoso. Contrata un socio tecnológico. Una suscripción predecible
				que crece al mismo ritmo que tu negocio, sin fricciones ni letras pequeñas.
			</p>

			<!-- Botón Scroll Down -->
			<div in:fly={{ y: 30, duration: 1000, delay: 800 }}>
				<a
					href={resolve('/precios#services-table')}
					class="group btn shadow-[0_0_20px_rgba(197,160,89,0.3)] btn-primary hover:shadow-[0_0_30px_rgba(197,160,89,0.5)]"
					aria-label="Ver modelo de suscripción"
				>
					<span>Ver Modelo de Suscripción</span>
					<ArrowDown
						size={20}
						class="transition-transform duration-300 group-hover:translate-y-1"
					/>
				</a>
			</div>
		</div>
	</div>
</section>

<section class="w-full py-20 lg:py-32" id="services-table">
	<div class="container mx-auto px-4">
		<!-- Header de Sección -->
		<div class="mb-16 text-center">
			<h2 in:fly={{ y: 30, duration: 800, delay: 200 }} class="mb-4 text-3xl font-bold lg:text-5xl">
				El plan
				<span
					class="bg-linear-to-r from-primary via-yellow-200 to-primary bg-clip-text font-serif text-transparent italic"
				>
					Socio Tecnológico.
				</span>
			</h2>
			<p
				in:fly={{ y: 30, duration: 800, delay: 400 }}
				class="mx-auto max-w-2xl text-base text-base-content/60 lg:text-lg"
			>
				Ten tu web profesional hoy por menos de lo que cuesta un menú al mes. Todo cubierto,
				mantenido y optimizado para que tú te enfoques en vender.
			</p>
		</div>

		<!-- Plan Base Principal -->
		<div class="mx-auto mb-20 max-w-md" in:fly={{ y: 30, duration: 800, delay: 500 }}>
			<div
				class="relative overflow-hidden rounded-3xl border border-primary/30 bg-base-100/60 p-8 shadow-[0_0_40px_rgba(197,160,89,0.1)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(197,160,89,0.2)] lg:p-10"
			>
				<!-- Highlight background radial -->
				<div
					class="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/20 blur-[80px]"
				></div>

				<div class="mb-6 flex flex-col gap-2">
					<span
						class="inline-block self-start rounded-full bg-primary/10 px-4 py-1 text-xs font-bold tracking-wider text-primary uppercase"
						>Plan de entrada</span
					>
					<h3 class="font-serif text-3xl font-bold">Base Sólida</h3>
				</div>

				<div class="mb-6 flex items-end gap-2 border-b border-white/10 pb-6">
					<span class="text-5xl font-bold">S/ 30</span>
					<span class="mb-1 text-base-content/60">/ mes</span>
				</div>

				<ul class="mb-8 space-y-4">
					<li class="flex items-start gap-3">
						<Check size={20} class="mt-0.5 text-primary" />
						<span class="text-base-content/80"
							><strong>Landing Page Pro</strong> diseñada para convertir</span
						>
					</li>
					<li class="flex items-start gap-3">
						<Check size={20} class="mt-0.5 text-primary" />
						<span class="text-base-content/80"
							><strong>Hosting ultrarrápido</strong> global (sin caídas)</span
						>
					</li>
					<li class="flex items-start gap-3">
						<Check size={20} class="mt-0.5 text-primary" />
						<span class="text-base-content/80"
							><strong>Certificado SSL</strong> seguro incluido</span
						>
					</li>
					<li class="flex items-start gap-3">
						<Check size={20} class="mt-0.5 text-primary" />
						<span class="text-base-content/80"
							><strong>Botón WhatsApp</strong> y formulario base</span
						>
					</li>
				</ul>

				<div
					class="mb-6 rounded-xl border border-white/5 bg-base-200/50 p-4 text-sm text-base-content/70"
				>
					Suscripción SaaS. Conoce las políticas de permanencia, gestión de propiedad, liberación de
					código y garantías contractuales en nuestro documento legal.
					<div class="mt-3">
						<a
							href={resolve('/condiciones-del-servicio')}
							class="inline-flex items-center gap-1.5 font-medium text-primary transition-colors hover:underline"
						>
							<ShieldCheck size={16} />
							Ver Condiciones del Servicio
						</a>
					</div>
				</div>

				<a
					href="https://api.whatsapp.com/send/?phone=51985942670&text=%C2%A1Hola!%20Estoy%20interesado%20en%20el%20plan%20Socio%20Tecnol%C3%B3gico."
					target="_blank"
					rel="external noopener noreferrer"
					class="group btn w-full btn-primary"
					aria-label="Contactar por WhatsApp para el plan Socio Tecnológico"
				>
					Comenzar ahora
					<ArrowUpRight
						size={18}
						class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
					/>
				</a>
			</div>
		</div>

		<!-- Sección de Evolución -->
		<div class="border-t border-white/10 pt-10">
			<div class="mb-12 text-center" in:fly={{ y: 20, duration: 800, delay: 200 }}>
				<h3 class="mb-4 font-serif text-2xl font-bold text-base-content italic lg:text-4xl">
					Añade lo que necesites,
					<span class="text-primary">cuando lo necesites.</span>
				</h3>
				<p class="mx-auto max-w-2xl text-base-content/60">
					Si tu negocio evoluciona, tu tecnología también. No pagues rediseños enteros: simplemente
					activa el módulo que requieres y ajustamos tu tarifa mensual.
				</p>
			</div>

			<div
				class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
				in:fly={{ y: 30, duration: 800, delay: 400 }}
			>
				{#each addons as addon (addon.title)}
					<div
						class="group relative flex flex-col rounded-2xl border border-white/10 bg-base-100/40 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-base-100/60 hover:shadow-[0_0_20px_rgba(197,160,89,0.1)]"
					>
						<div
							class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-base-200 text-primary transition-colors group-hover:bg-primary/20"
						>
							<addon.icon size={24} />
						</div>

						<h4 class="mb-2 text-lg font-bold">{addon.title}</h4>
						<p class="mb-6 flex-1 text-sm leading-relaxed text-base-content/60">{addon.desc}</p>

						<div class="mt-auto flex items-end gap-1 border-t border-white/5 pt-4">
							<span class="text-xl font-bold text-primary">{addon.price}</span>
							<span class="mb-0.5 text-xs text-base-content/50">{addon.period}</span>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<script lang="ts">
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import {
		ArrowUpRight,
		Bot,
		Zap,
		Building2
	} from '@lucide/svelte';

	const agentPlans = [
		{
			tier: 'Esencial',
			price: 'USD 2,000 – 4,000',
			desc: 'Un agente, una herramienta, un canal. Ideal para automatizar un proceso puntual.',
			features: [
				'Agente autónomo con 1 herramienta (WhatsApp, Google Calendar, etc.)',
				'1 canal de entrada/salida',
				'Dashboard de supervisión básico',
				'Soporte 30 días post-entrega',
				'Pago en 4 hitos de resultado'
			],
			icon: Bot,
			highlight: false
		},
		{
			tier: 'Profesional',
			price: 'USD 4,000 – 8,000',
			desc: 'Multi-herramienta, multi-canal. Para empresas que necesitan automatizar varios procesos conectados.',
			features: [
				'Agente con hasta 3 herramientas integradas',
				'WhatsApp + Web como canales',
				'Dashboard de auditoría completo',
				'Memoria persistente (contexto entre sesiones)',
				'Soporte 60 días post-entrega',
				'Pago en 5 hitos de resultado'
			],
			icon: Zap,
			highlight: true
		},
		{
			tier: 'Enterprise',
			price: 'USD 8,000 – 15,000+',
			desc: 'Orquestación multi-agente. Para operaciones complejas con múltiples flujos autónomos.',
			features: [
				'Orquestación de múltiples agentes especializados',
				'Workflows duraderos y event-driven',
				'Integración con sistemas externos (APIs, bases de datos)',
				'Human-in-the-Loop para decisiones críticas',
				'Soporte 90 días post-entrega',
				'Pago en 6 hitos de resultado'
			],
			icon: Building2,
			highlight: false
		}
	];

	const faqItems = [
		{
			question: '¿Por qué no hay un precio fijo?',
			answer:
				'Porque cada agente se construye para un problema específico. Un agente que solo agenda citas no es lo mismo que uno que gestiona expedientes legales completos. Prefiero darte un rango realista y ajustarlo cuando entienda tu caso. La transparencia genera más confianza que un número inventado.'
		},
		{
			question: '¿Cómo funciona el pago por hitos?',
			answer:
				'Dividimos el proyecto en fases con resultados medibles. Solo pagás cuando cada fase está funcionando. Por ejemplo: Hito 1 = agente responde WhatsApp (30%), Hito 2 = agente agenda citas solo (30%), Hito 3 = dashboard de control (20%), Hito 4 = 30 días estable (20%). Nunca pagás todo por adelantado.'
		},
		{
			question: '¿Cuánto tarda implementar un agente?',
			answer:
				'Un agente simple: 2 a 4 semanas. Un agente con múltiples herramientas: 4 a 8 semanas. Orquestación multi-agente: 8 a 12 semanas. El tiempo real depende de la complejidad de tus procesos actuales y de qué tan rápido podamos definir los hitos de resultado juntos.'
		},
		{
			question: '¿Y si mi empresa es chica? ¿Hay algo más accesible?',
			answer:
				'Sí. Tengo un plan de entrada para negocios que necesitan presencia digital primero: una landing page profesional desde S/ 30 al mes con hosting, SSL y mantenimiento. Es el punto de partida. Cuando necesites automatizar, escalás a un agente. Podés verlo en la sección de abajo.'
		},
		{
			question: '¿Qué pasa si el agente se equivoca?',
			answer:
				'Todos los agentes incluyen un dashboard de supervisión humana. El agente trabaja solo, pero vos podés auditar cada decisión. En los planes Profesional y Enterprise incluyo Human-in-the-Loop: el agente se pausa y te consulta antes de ejecutar decisiones críticas. Nunca perdés el control.'
		}
	] as const;

	const faqStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqItems.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer
			}
		}))
	};

	const softwareAppStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Vanchi — Agentes de IA (GaaS)',
		applicationCategory: 'AIApplication',
		description:
			'Agentes de inteligencia artificial autónomos para empresas. Implementación de GaaS (Generative Agent as a Service) con precios outcome-based. Agentes desde USD 2,000 hasta USD 15,000+.',
		offers: [
			{
				'@type': 'Offer',
				name: 'Agente Esencial',
				price: '2000',
				priceCurrency: 'USD',
				availability: 'https://schema.org/InStock'
			},
			{
				'@type': 'Offer',
				name: 'Agente Profesional',
				price: '4000',
				priceCurrency: 'USD',
				availability: 'https://schema.org/InStock'
			},
			{
				'@type': 'Offer',
				name: 'Agente Enterprise',
				price: '8000',
				priceCurrency: 'USD',
				availability: 'https://schema.org/InStock'
			}
		],
		provider: {
			'@type': 'Person',
			'@id': 'https://www.vanchi.pro/#person',
			name: 'Ivan Yarupaitan'
		},
		areaServed: {
			'@type': 'Country',
			name: 'Perú'
		}
	};

	const faqStructuredDataJson = JSON.stringify(faqStructuredData).replace(/</g, '\\u003c');
	const softwareAppStructuredDataJson = JSON.stringify(softwareAppStructuredData).replace(/</g, '\\u003c');
	const author = 'Ivan Yarupaitan Rivera';
</script>

<SEO
	title="Cuánto cuesta implementar Inteligencia Artificial en tu empresa | Vanchi"
	description="Agentes de IA autónomos desde USD 2,000 hasta USD 15,000+. Precios transparentes con pago por hitos de resultado, no por horas. Sin costos ocultos."
	keywords="cuanto cuesta implementar inteligencia artificial, precio de agente virtual para empresa, costo de automatizar procesos con ia, implementar ia peru precio, agente ia para pymes costo"
	url="https://www.vanchi.pro/precios"
/>

<svelte:head>
	<svelte:element this={'script'} type="application/ld+json">
		{softwareAppStructuredDataJson}
	</svelte:element>
	<svelte:element this={'script'} type="application/ld+json">
		{faqStructuredDataJson}
	</svelte:element>
</svelte:head>

<!-- ===== HERO ===== -->
<section class="hero py-20 lg:py-28">
	<div class="hero-content text-center">
		<div class="max-w-3xl">
			<span class="badge badge-ghost mb-6">Precios transparentes</span>
			<h1 class="mb-6 text-4xl font-bold lg:text-6xl">
				¿Cuánto cuesta implementar
				<span class="bg-linear-to-r from-primary via-yellow-200 to-primary bg-clip-text font-serif text-transparent italic">
					Inteligencia Artificial
				</span>
				en tu empresa?
			</h1>
			<p class="text-lg text-base-content/70">
				Precios transparentes. Pagás por resultados, no por horas.
				Sin costos ocultos, sin letras chicas.
			</p>
		</div>
	</div>
</section>

<!-- ===== 3 PLANES ===== -->
<section class="w-full pb-20 lg:pb-32" aria-labelledby="plans-heading">
	<div class="container mx-auto px-4">
		<h2 id="plans-heading" class="mb-4 text-center text-3xl font-bold lg:text-4xl">
			Agentes de IA
		</h2>
		<p class="mb-12 text-center text-base-content/60">
			Tres niveles. Una misma filosofía: el software trabaja solo.
		</p>

		<div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
			{#each agentPlans as plan (plan.tier)}
				<div class="card border border-white/10 bg-base-100/40 backdrop-blur-sm {plan.highlight ? 'border-primary/40 bg-base-100/60 shadow-[0_0_30px_rgba(197,160,89,0.1)]' : ''}">
					<div class="card-body">
						{#if plan.highlight}
							<span class="badge badge-primary absolute -top-3 left-1/2 -translate-x-1/2">Más demandado</span>
						{/if}

						<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
							<plan.icon size={24} />
						</div>

						<h3 class="card-title">{plan.tier}</h3>
						<p class="text-sm text-base-content/60">{plan.desc}</p>

						<div class="my-4 border-b border-white/10 pb-4">
							<span class="text-2xl font-bold text-primary">{plan.price}</span>
						</div>

						<ul class="mb-6 flex-1 space-y-3">
							{#each plan.features as feature (feature)}
								<li class="flex items-start gap-2 text-sm text-base-content/80">
									<svg class="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									{feature}
								</li>
							{/each}
						</ul>

						<div class="card-actions">
							<a
								href="https://api.whatsapp.com/send/?phone=51985942670&text=Hola%20Ivan,%20quiero%20informaci%C3%B3n%20sobre%20los%20agentes%20de%20IA."
								target="_blank"
								rel="external noopener noreferrer"
								class="btn w-full {plan.highlight ? 'btn-primary' : 'btn-ghost border border-white/10'}"
							>
								Consultar por WhatsApp
								<ArrowUpRight size={16} />
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ===== CÓMO FUNCIONA ===== -->
<section class="w-full border-t border-white/10 py-16 lg:py-24" aria-labelledby="how-heading">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-3xl text-center">
			<h2 id="how-heading" class="mb-4 text-3xl font-bold lg:text-4xl">
				Pagás por
				<span class="bg-linear-to-r from-primary via-yellow-200 to-primary bg-clip-text font-serif text-transparent italic">resultados</span>,
				no por horas
			</h2>
			<p class="mb-12 text-base-content/70">
				Cada proyecto se divide en hitos con resultados medibles.
				Solo pagás cuando cada fase está funcionando.
			</p>
		</div>

		<div class="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
			<div class="card bg-base-200/40 border border-white/10">
				<div class="card-body">
					<h3 class="card-title">Ejemplo: agente de gestión de citas</h3>
					<ol class="list-decimal space-y-2 pl-4 text-sm text-base-content/70">
						<li>Agente responde WhatsApp y consulta Google Calendar <span class="text-base-content/40">(30%)</span></li>
						<li>Agente agenda, reprograma y confirma citas solo <span class="text-base-content/40">(30%)</span></li>
						<li>Dashboard de supervisión para el humano <span class="text-base-content/40">(20%)</span></li>
						<li>30 días de operación estable con métricas <span class="text-base-content/40">(20%)</span></li>
					</ol>
				</div>
			</div>

			<div class="card bg-base-200/40 border border-white/10">
				<div class="card-body">
					<h3 class="card-title">Sin riesgos ocultos</h3>
					<ul class="space-y-3 text-sm text-base-content/70">
						<li class="flex gap-2">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							Nunca pagás el 100% por adelantado.
						</li>
						<li class="flex gap-2">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							Si un hito no cumple lo acordado, no avanza hasta resolverlo.
						</li>
						<li class="flex gap-2">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							El código y las integraciones son tuyos. Sin vendor lock-in.
						</li>
						<li class="flex gap-2">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							Métricas acordadas por escrito antes de empezar.
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ===== FAQ ===== -->
<section class="w-full border-t border-white/10 py-16 lg:py-24" aria-labelledby="faq-heading">
	<div class="container mx-auto px-4">
		<div class="mx-auto mb-10 max-w-3xl text-center">
			<h2 id="faq-heading" class="mb-3 text-3xl font-bold lg:text-4xl">
				Preguntas frecuentes
			</h2>
			<p class="text-base-content/60">Respuestas directas. Sin letra chica.</p>
		</div>

		<div class="mx-auto max-w-3xl space-y-3">
			{#each faqItems as item (item.question)}
				<div class="collapse collapse-arrow border border-white/10 bg-base-200/40">
					<input type="checkbox" />
					<div class="collapse-title font-semibold text-base-content">{item.question}</div>
					<div class="collapse-content">
						<p class="text-sm leading-relaxed text-base-content/70">{item.answer}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ===== PLAN DE ENTRADA (secundario) ===== -->
<section class="w-full border-t border-white/10 py-16 lg:py-24" aria-labelledby="entry-heading">
	<div class="container mx-auto px-4">
		<div class="mx-auto mb-10 max-w-3xl text-center">
			<span class="badge badge-ghost mb-4">También disponible</span>
			<h2 id="entry-heading" class="mb-3 text-2xl font-bold lg:text-3xl">
				Plan de entrada: presencia digital
			</h2>
			<p class="text-base-content/60">
				Si tu negocio todavía no tiene web o necesitás empezar con algo más accesible.
			</p>
		</div>

		<div class="mx-auto max-w-sm">
			<div class="card bg-base-100/40 border border-white/10 backdrop-blur-sm">
				<div class="card-body">
					<h3 class="card-title">Landing Page Profesional</h3>
					<p class="text-sm text-base-content/60">Listo para vender. Sin configuraciones técnicas.</p>
					<div class="my-4">
						<span class="text-3xl font-bold">S/ 30</span>
						<span class="text-base-content/60">/ mes</span>
					</div>
					<ul class="mb-6 space-y-3 text-sm text-base-content/70">
						<li class="flex gap-2">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							Landing page profesional
						</li>
						<li class="flex gap-2">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							Hosting + SSL incluido
						</li>
						<li class="flex gap-2">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							Botón de WhatsApp
						</li>
						<li class="flex gap-2">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							Mantenimiento técnico
						</li>
					</ul>
					<div class="card-actions">
						<a
							href="https://api.whatsapp.com/send/?phone=51985942670&text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20el%20plan%20de%20entrada."
							target="_blank"
							rel="external noopener noreferrer"
							class="btn btn-ghost w-full border border-white/10"
						>
							Consultar
							<ArrowUpRight size={16} />
						</a>
					</div>
					<p class="mt-4 text-center text-xs text-base-content/40">
						Compromiso mínimo 12 meses. El dominio es tuyo.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ===== FOOTER ===== -->
<section class="w-full border-t border-white/10 py-12">
	<div class="container mx-auto px-4 text-center">
		<div class="flex flex-wrap justify-center gap-3">
			<a href={resolve('/(main)/proyectos')} class="btn btn-ghost border border-white/10">Ver proyectos</a>
			<a href="/proyectos/encap" class="btn btn-ghost border border-white/10">Caso ENCAP</a>
			<a href={resolve('/(main)/ivan-yarupaitan-rivera')} class="btn btn-ghost border border-white/10">Sobre mí</a>
		</div>
		<p class="mt-6 text-xs text-base-content/40">Autor: {author}</p>
	</div>
</section>

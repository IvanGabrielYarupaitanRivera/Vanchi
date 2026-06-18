<script lang="ts">
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';

	const tiers = [
		{
			num: '01',
			name: 'Esencial',
			price: 'S/ 2,000 – 4,000',
			desc: 'Un agente, una herramienta, un canal. Ideal para automatizar un proceso puntual.',
			features: [
				'Agente autónomo con 1 herramienta (WhatsApp, Google Calendar, etc.)',
				'1 canal de entrada/salida',
				'Dashboard de supervisión básico',
				'Soporte 30 días post-entrega',
				'Pago en 4 hitos de resultado'
			]
		},
		{
			num: '02',
			name: 'Profesional',
			price: 'S/ 4,000 – 8,000',
			desc: 'Multi-herramienta, multi-canal. Para empresas que necesitan automatizar varios procesos conectados.',
			features: [
				'Agente con hasta 3 herramientas integradas',
				'WhatsApp + Web como canales',
				'Dashboard de auditoría completo',
				'Memoria persistente (contexto entre sesiones)',
				'Soporte 60 días post-entrega',
				'Pago en 5 hitos de resultado'
			]
		},
		{
			num: '03',
			name: 'Enterprise',
			price: 'S/ 8,000 – 15,000+',
			desc: 'Orquestación multi-agente. Para operaciones complejas con múltiples flujos autónomos.',
			features: [
				'Orquestación de múltiples agentes especializados',
				'Workflows duraderos y event-driven',
				'Integración con sistemas externos (APIs, bases de datos)',
				'Human-in-the-Loop para decisiones críticas',
				'Soporte 90 días post-entrega',
				'Pago en 6 hitos de resultado'
			]
		}
	];

	const faqItems = [
		{
			question: '¿Por qué no hay un precio fijo?',
			answer:
				'Cada agente se construye para un problema específico. Un agente que solo agenda citas no es lo mismo que uno que gestiona expedientes legales completos. Prefiero darte un rango realista y ajustarlo cuando entienda tu caso. La transparencia genera más confianza que un número inventado.'
		},
		{
			question: '¿Cómo funciona el pago por hitos?',
			answer:
				'Dividimos el proyecto en fases con resultados medibles. Solo pagas cuando cada fase está funcionando. Por ejemplo: Hito 1 = agente responde WhatsApp (30%), Hito 2 = agente agenda citas solo (30%), Hito 3 = dashboard de control (20%), Hito 4 = 30 días estable (20%). Nunca pagas todo por adelantado.'
		},
		{
			question: '¿Cuánto tarda implementar un agente?',
			answer:
				'Un agente simple: 2 a 4 semanas. Un agente con múltiples herramientas: 4 a 8 semanas. Orquestación multi-agente: 8 a 12 semanas. El tiempo real depende de la complejidad de tus procesos actuales y de qué tan rápido podamos definir los hitos de resultado juntos.'
		},
		{
			question: '¿Y si mi empresa es chica? ¿Hay algo más accesible?',
			answer:
				'Sí. Tengo un plan de entrada para negocios que necesitan presencia digital primero: una landing page profesional desde S/ 30 al mes con hosting, SSL y mantenimiento. Es el punto de partida. Cuando necesites automatizar, escalas a un agente.'
		},
		{
			question: '¿Qué pasa si el agente se equivoca?',
			answer:
				'Todos los agentes incluyen un dashboard de supervisión humana. El agente trabaja solo, pero puedes auditar cada decisión. En los planes Profesional y Enterprise incluyo Human-in-the-Loop: el agente se pausa y te consulta antes de ejecutar decisiones críticas. Nunca pierdes el control.'
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
			'Agentes de inteligencia artificial autónomos para empresas. Implementación de GaaS (Generative Agent as a Service) con precios outcome-based. Agentes desde S/ 2,000 hasta S/ 15,000+.',
		offers: [
			{ '@type': 'Offer', name: 'Agente Esencial', price: '2000', priceCurrency: 'PEN', availability: 'https://schema.org/InStock' },
			{ '@type': 'Offer', name: 'Agente Profesional', price: '4000', priceCurrency: 'PEN', availability: 'https://schema.org/InStock' },
			{ '@type': 'Offer', name: 'Agente Enterprise', price: '8000', priceCurrency: 'PEN', availability: 'https://schema.org/InStock' }
		],
		provider: { '@type': 'Person', '@id': 'https://www.vanchi.pro/#person', name: 'Ivan Yarupaitan' },
		areaServed: { '@type': 'Country', name: 'Perú' }
	};

	const faqStructuredDataJson = JSON.stringify(faqStructuredData).replace(/</g, '\\u003c');
	const softwareAppStructuredDataJson = JSON.stringify(softwareAppStructuredData).replace(/</g, '\\u003c');
	const author = 'Ivan Yarupaitan Rivera';
	const whatsappUrl = 'https://api.whatsapp.com/send/?phone=51985942670&text=Hola,%20quiero%20informacion%20sobre%20los%20agentes%20de%20IA.';
</script>

<SEO
	title="Cuánto cuesta implementar Inteligencia Artificial en tu empresa | Vanchi"
	description="Agentes de IA autónomos desde S/ 2,000 hasta S/ 15,000+. Precios transparentes con pago por hitos de resultado, no por horas. Sin costos ocultos."
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
<section class="flex min-h-[90dvh] items-center">
	<div class="w-full max-w-5xl mx-auto px-4">
		<div class="mb-10 flex items-center gap-2.5">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">PRECIOS · 2026</span>
		</div>
		<h1 class="vanchi-display mb-10 text-5xl font-normal leading-[1.05] lg:text-7xl">
			Cuánto cuesta implementar<br />
			<span class="italic">Inteligencia Artificial</span><br />
			en tu empresa
		</h1>
		<p class="max-w-xl text-base leading-relaxed text-base-content/70 lg:text-lg">
			Tres rangos. Pago por hitos de resultado. Sin costos ocultos, sin letras chicas.
			Cada agente se construye para resolver un problema concreto de tu negocio.
		</p>
	</div>
</section>

<!-- ===== PRICE SHEET ===== -->
<section class="w-full py-40">
	<div class="max-w-5xl mx-auto px-4">
		<p class="vanchi-eyebrow mb-16">AGENTES DE IA</p>

		{#each tiers as tier, i (tier.num)}
			<article class="grid gap-10 py-16 vanchi-hairline {i === 0 ? 'border-t' : 'border-t'} lg:grid-cols-[280px_1fr] lg:gap-24">
				<div>
					<p class="mb-3 font-mono text-xs font-medium tracking-[0.15em] text-secondary">{tier.num}</p>
					<h2 class="vanchi-display text-4xl font-normal lg:text-5xl">{tier.name}</h2>
					<p class="vanchi-display mt-6 text-2xl font-normal text-base-content/80 tabular-nums lg:text-3xl">
						{tier.price}
					</p>
				</div>

				<div>
					<p class="mb-10 max-w-prose text-sm leading-relaxed text-base-content/60">
						{tier.desc}
					</p>
					<ul class="space-y-4 font-mono text-sm leading-relaxed text-base-content/80">
						{#each tier.features as feature (feature)}
							<li class="flex items-start gap-3">
								<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-base-content/30"></span>
								<span>{feature}</span>
							</li>
						{/each}
					</ul>
				</div>
			</article>
		{/each}

		<div class="mt-16 flex flex-wrap items-center gap-6">
			<a
				href={whatsappUrl}
				target="_blank"
				rel="external noopener noreferrer"
				class="btn border-0 bg-base-content font-mono text-sm text-base-100 hover:opacity-90"
			>
				Consultar por WhatsApp →
			</a>
			<p class="font-mono text-xs text-secondary">Respuesta en menos de 24 horas.</p>
		</div>
	</div>
</section>

<!-- ===== PAYMENT MODEL ===== -->
<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<p class="vanchi-eyebrow mb-16">MODELO DE PAGO</p>

		<div class="grid gap-16 lg:grid-cols-2 lg:gap-24">
			<div>
				<h2 class="vanchi-display text-3xl font-normal leading-tight lg:text-5xl">
					Pagas por<br />
					<span class="italic">resultados</span>,<br />
					no por horas
				</h2>
				<p class="mt-8 max-w-prose text-sm leading-relaxed text-base-content/60">
					Cada proyecto se divide en hitos con resultados medibles.
					Solo pagas cuando cada fase está funcionando.
					Nunca el 100% por adelantado.
				</p>
			</div>

			<div class="vanchi-container p-8 lg:p-10">
				<p class="mb-8 font-mono text-xs font-medium tracking-[0.15em] text-secondary">
					EJEMPLO · AGENTE DE CITAS
				</p>
				<ol class="space-y-6 font-mono text-sm">
					<li class="flex gap-4">
						<span class="w-8 shrink-0 text-base-content/30 tabular-nums">01</span>
						<span class="text-base-content/80">
							Agente responde WhatsApp y consulta Google Calendar
							<span class="ml-2 text-secondary">30%</span>
						</span>
					</li>
					<li class="flex gap-4">
						<span class="w-8 shrink-0 text-base-content/30 tabular-nums">02</span>
						<span class="text-base-content/80">
							Agente agenda, reprograma y confirma citas solo
							<span class="ml-2 text-secondary">30%</span>
						</span>
					</li>
					<li class="flex gap-4">
						<span class="w-8 shrink-0 text-base-content/30 tabular-nums">03</span>
						<span class="text-base-content/80">
							Dashboard de supervisión para el humano
							<span class="ml-2 text-secondary">20%</span>
						</span>
					</li>
					<li class="flex gap-4">
						<span class="w-8 shrink-0 text-base-content/30 tabular-nums">04</span>
						<span class="text-base-content/80">
							30 días de operación estable con métricas
							<span class="ml-2 text-secondary">20%</span>
						</span>
					</li>
				</ol>
			</div>
		</div>
	</div>
</section>

<!-- ===== FAQ ===== -->
<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<p class="vanchi-eyebrow mb-16">FAQ</p>
		<h2 class="vanchi-display mb-16 text-3xl font-normal lg:text-5xl">
			Preguntas<br /><span class="italic">frecuentes</span>
		</h2>

		<div class="space-y-px">
			{#each faqItems as item (item.question)}
				<div class="collapse collapse-arrow vanchi-container">
					<input type="checkbox" />
					<div class="collapse-title font-mono text-sm font-medium text-base-content">{item.question}</div>
					<div class="collapse-content">
						<p class="font-mono text-sm leading-relaxed text-base-content/70">{item.answer}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ===== ENTRY PLAN ===== -->
<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<p class="vanchi-eyebrow mb-16">TAMBIÉN DISPONIBLE</p>

		<div class="grid gap-16 lg:grid-cols-2 lg:gap-24">
			<div>
				<h2 class="vanchi-display text-3xl font-normal leading-tight lg:text-5xl">
					Plan de<br /><span class="italic">entrada</span>
				</h2>
				<p class="mt-8 max-w-prose text-sm leading-relaxed text-base-content/60">
					Si tu negocio todavía no tiene web o necesitas empezar con algo más accesible.
					Una landing page profesional, lista para vender.
				</p>
			</div>

			<div class="vanchi-container p-8 lg:p-10">
				<p class="mb-2 font-mono text-xs font-medium tracking-[0.15em] text-secondary">
					LANDING PAGE PROFESIONAL
				</p>
				<p class="vanchi-display text-4xl font-normal tabular-nums">
					S/ 30<span class="ml-2 font-mono text-base text-base-content/40">/ mes</span>
				</p>
				<p class="mt-3 font-mono text-xs text-secondary">
					Compromiso mínimo 12 meses. El dominio es tuyo.
				</p>

				<ul class="my-10 space-y-4 font-mono text-sm text-base-content/70">
					<li class="flex items-start gap-3">
						<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-base-content/30"></span>
						<span>Landing page profesional</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-base-content/30"></span>
						<span>Hosting + SSL incluido</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-base-content/30"></span>
						<span>Botón de WhatsApp</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-base-content/30"></span>
						<span>Mantenimiento técnico</span>
					</li>
				</ul>

				<a
					href="https://api.whatsapp.com/send/?phone=51985942670&text=Hola,%20quiero%20informacion%20sobre%20el%20plan%20de%20entrada."
					target="_blank"
					rel="external noopener noreferrer"
					class="btn btn-ghost border border-base-300 font-mono text-sm hover:border-base-content"
				>
					Consultar →
				</a>
			</div>
		</div>
	</div>
</section>

<!-- ===== FOOTER ===== -->
<footer class="w-full py-16 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
			<a href={resolve('/(main)/proyectos')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Proyectos</a>
			<a href={resolve('/(main)/proyectos/[projectId]', { projectId: 'encap' })} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Caso ENCAP</a>
			<a href={resolve('/(main)/ivan-yarupaitan-rivera')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Sobre mí</a>
		</div>
		<p class="mt-8 font-mono text-xs text-secondary">{author}</p>
	</div>
</footer>

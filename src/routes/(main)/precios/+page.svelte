<script lang="ts">
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';

	const faqItems = [
		{
			question: '¿Por qué no hay un precio fijo?',
			answer:
				'Cada agente se construye para un problema específico. Un agente que solo agenda citas no es lo mismo que uno que gestiona expedientes legales completos. Prefiero darte un rango realista y ajustarlo cuando entienda tu caso. La transparencia genera más confianza que un número inventado.'
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
				'Sí. Tengo un plan de entrada para negocios que necesitan presencia digital primero: una landing page profesional desde S/ 30 al mes con hosting, SSL y mantenimiento. Es el punto de partida. Cuando necesites automatizar, escalás a un agente.'
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
<section class="flex min-h-[90dvh] items-center">
	<div class="w-full max-w-5xl mx-auto px-4">
		<p class="vanchi-eyebrow mb-8">PRICING</p>
		<h1 class="vanchi-display mb-8 text-5xl font-normal lg:text-7xl">
			Cuánto cuesta implementar<br />
			<span class="italic">Inteligencia Artificial</span><br />
			en tu empresa
		</h1>
		<p class="max-w-prose text-base text-base-content/70 lg:text-lg">
			Tres rangos. Pago por hitos de resultado. Sin costos ocultos, sin letras chicas.
			Cada agente se construye para resolver un problema concreto.
		</p>
	</div>
</section>

<!-- ===== AGENTE ESENCIAL ===== -->
<section class="w-full py-40">
	<div class="container mx-auto max-w-5xl px-4">
		<div class="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
			<div>
				<h3 class="mb-1 font-mono text-sm font-medium uppercase tracking-[0.15em] text-secondary">01</h3>
				<p class="mb-6 font-mono text-3xl font-medium text-base-content">Esencial</p>
				<p class="mb-8 font-mono text-2xl text-base-content/80">USD 2,000 – 4,000</p>
				<p class="max-w-xs text-sm leading-relaxed text-base-content/60">
					Un agente, una herramienta, un canal. Ideal para automatizar un proceso puntual.
				</p>
			</div>
			<div class="vanchi-container p-8">
				<ul class="space-y-6 font-mono text-sm leading-relaxed text-base-content/80">
					<li class="flex items-start gap-3">
						<span class="vanchi-agent-dot mt-1.5 shrink-0"></span>
						<span>Agente autónomo con 1 herramienta (WhatsApp, Google Calendar, etc.)</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="vanchi-agent-dot mt-1.5 shrink-0"></span>
						<span>1 canal de entrada/salida</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="vanchi-agent-dot mt-1.5 shrink-0"></span>
						<span>Dashboard de supervisión básico</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="vanchi-agent-dot mt-1.5 shrink-0"></span>
						<span>Soporte 30 días post-entrega</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="vanchi-agent-dot mt-1.5 shrink-0"></span>
						<span>Pago en 4 hitos de resultado</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- ===== AGENTE PROFESIONAL ===== -->
<section class="w-full py-40 vanchi-hairline border-t">
	<div class="container mx-auto max-w-5xl px-4">
		<div class="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
			<div>
				<h3 class="mb-1 font-mono text-sm font-medium uppercase tracking-[0.15em] text-secondary">02</h3>
				<p class="mb-6 font-mono text-3xl font-medium text-base-content">Profesional</p>
				<p class="mb-8 font-mono text-2xl text-base-content/80">USD 4,000 – 8,000</p>
				<p class="max-w-xs text-sm leading-relaxed text-base-content/60">
					Multi-herramienta, multi-canal. Para empresas que necesitan automatizar varios procesos conectados.
				</p>
			</div>
			<div class="vanchi-container p-8">
				<ul class="space-y-6 font-mono text-sm leading-relaxed text-base-content/80">
					<li class="flex items-start gap-3">
						<span class="vanchi-agent-dot mt-1.5 shrink-0"></span>
						<span>Agente con hasta 3 herramientas integradas</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="vanchi-agent-dot mt-1.5 shrink-0"></span>
						<span>WhatsApp + Web como canales</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="vanchi-agent-dot mt-1.5 shrink-0"></span>
						<span>Dashboard de auditoría completo</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="vanchi-agent-dot mt-1.5 shrink-0"></span>
						<span>Memoria persistente (contexto entre sesiones)</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="vanchi-agent-dot mt-1.5 shrink-0"></span>
						<span>Soporte 60 días post-entrega</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="vanchi-agent-dot mt-1.5 shrink-0"></span>
						<span>Pago en 5 hitos de resultado</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- ===== AGENTE ENTERPRISE ===== -->
<section class="w-full py-40 vanchi-hairline border-t">
	<div class="container mx-auto max-w-5xl px-4">
		<div class="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
			<div>
				<h3 class="mb-1 font-mono text-sm font-medium uppercase tracking-[0.15em] text-secondary">03</h3>
				<p class="mb-6 font-mono text-3xl font-medium text-base-content">Enterprise</p>
				<p class="mb-8 font-mono text-2xl text-base-content/80">USD 8,000 – 15,000+</p>
				<p class="max-w-xs text-sm leading-relaxed text-base-content/60">
					Orquestación multi-agente. Para operaciones complejas con múltiples flujos autónomos.
				</p>
			</div>
			<div class="vanchi-container p-8">
				<ul class="space-y-6 font-mono text-sm leading-relaxed text-base-content/80">
					<li class="flex items-start gap-3">
						<span class="vanchi-agent-dot mt-1.5 shrink-0"></span>
						<span>Orquestación de múltiples agentes especializados</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="vanchi-agent-dot mt-1.5 shrink-0"></span>
						<span>Workflows duraderos y event-driven</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="vanchi-agent-dot mt-1.5 shrink-0"></span>
						<span>Integración con sistemas externos (APIs, bases de datos)</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="vanchi-agent-dot mt-1.5 shrink-0"></span>
						<span>Human-in-the-Loop para decisiones críticas</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="vanchi-agent-dot mt-1.5 shrink-0"></span>
						<span>Soporte 90 días post-entrega</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="vanchi-agent-dot mt-1.5 shrink-0"></span>
						<span>Pago en 6 hitos de resultado</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- ===== CÓMO FUNCIONA ===== -->
<section class="w-full py-40 vanchi-hairline border-t">
	<div class="container mx-auto max-w-5xl px-4">
		<p class="vanchi-eyebrow mb-8">PAYMENT MODEL</p>
		<div class="grid gap-12 lg:grid-cols-2 lg:gap-24">
			<div>
				<h2 class="vanchi-display mb-6 text-3xl font-normal lg:text-5xl">
					Pagás por<br /><span class="italic">resultados</span>,<br />no por horas
				</h2>
				<p class="max-w-prose text-sm leading-relaxed text-base-content/60">
					Cada proyecto se divide en hitos con resultados medibles.
					Solo pagás cuando cada fase está funcionando. Nunca el 100% por adelantado.
				</p>
			</div>
			<div class="vanchi-container p-8">
				<h3 class="mb-6 font-mono text-xs font-medium uppercase tracking-[0.15em] text-secondary">Ejemplo</h3>
				<ol class="space-y-5 font-mono text-sm leading-relaxed">
					<li class="flex gap-3 text-base-content/80">
						<span class="font-medium text-base-content/40 tabular-nums">1.</span>
						<span>Agente responde WhatsApp y consulta Google Calendar <span class="text-secondary">30%</span></span>
					</li>
					<li class="flex gap-3 text-base-content/80">
						<span class="font-medium text-base-content/40 tabular-nums">2.</span>
						<span>Agente agenda, reprograma y confirma citas solo <span class="text-secondary">30%</span></span>
					</li>
					<li class="flex gap-3 text-base-content/80">
						<span class="font-medium text-base-content/40 tabular-nums">3.</span>
						<span>Dashboard de supervisión para el humano <span class="text-secondary">20%</span></span>
					</li>
					<li class="flex gap-3 text-base-content/80">
						<span class="font-medium text-base-content/40 tabular-nums">4.</span>
						<span>30 días de operación estable con métricas <span class="text-secondary">20%</span></span>
					</li>
				</ol>
			</div>
		</div>
	</div>
</section>

<!-- ===== FAQ ===== -->
<section class="w-full py-40 vanchi-hairline border-t">
	<div class="container mx-auto max-w-5xl px-4">
		<p class="vanchi-eyebrow mb-8">FAQ</p>
		<h2 class="vanchi-display mb-16 text-3xl font-normal lg:text-5xl">
			Preguntas<br /><span class="italic">frecuentes</span>
		</h2>

		<div class="space-y-1">
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
	<div class="container mx-auto max-w-5xl px-4">
		<p class="vanchi-eyebrow mb-8">ALSO AVAILABLE</p>
		<div class="grid gap-12 lg:grid-cols-2 lg:gap-24">
			<div>
				<h2 class="vanchi-display mb-6 text-3xl font-normal lg:text-5xl">
					Plan de<br /><span class="italic">entrada</span>
				</h2>
				<p class="max-w-prose text-sm leading-relaxed text-base-content/60">
					Si tu negocio todavía no tiene web o necesitás empezar con algo más accesible.
				</p>
			</div>
			<div class="vanchi-container p-8">
				<p class="mb-2 font-mono text-xs font-medium uppercase tracking-[0.15em] text-secondary">Landing Page Profesional</p>
				<p class="mb-1 font-mono text-3xl font-medium text-base-content">S/ 30 <span class="text-base text-base-content/40">/ mes</span></p>
				<p class="mb-8 font-mono text-xs text-base-content/40">Compromiso mínimo 12 meses. El dominio es tuyo.</p>

				<ul class="mb-10 space-y-4 font-mono text-sm text-base-content/70">
					<li class="flex items-start gap-3">
						<span class="vanchi-agent-dot mt-1.5 shrink-0"></span>
						<span>Landing page profesional</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="vanchi-agent-dot mt-1.5 shrink-0"></span>
						<span>Hosting + SSL incluido</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="vanchi-agent-dot mt-1.5 shrink-0"></span>
						<span>Botón de WhatsApp</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="vanchi-agent-dot mt-1.5 shrink-0"></span>
						<span>Mantenimiento técnico</span>
					</li>
				</ul>

				<a
					href="https://api.whatsapp.com/send/?phone=51985942670&text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20el%20plan%20de%20entrada."
					target="_blank"
					rel="external noopener noreferrer"
					class="btn btn-ghost border border-base-300 font-mono text-sm"
				>
					Consultar →
				</a>
			</div>
		</div>
	</div>
</section>

<!-- ===== FOOTER ===== -->
<footer class="w-full py-16 vanchi-hairline border-t">
	<div class="container mx-auto max-w-5xl px-4">
		<div class="flex flex-wrap gap-4 font-mono text-sm">
			<a href={resolve('/(main)/proyectos')} class="text-base-content/60 hover:text-base-content transition-colors duration-150">Proyectos</a>
			<a href={resolve('/(main)/proyectos/[projectId]', { projectId: 'encap' })} class="text-base-content/60 hover:text-base-content transition-colors duration-150">Caso ENCAP</a>
			<a href={resolve('/(main)/ivan-yarupaitan-rivera')} class="text-base-content/60 hover:text-base-content transition-colors duration-150">Sobre mí</a>
		</div>
		<p class="mt-8 font-mono text-xs text-secondary">{author}</p>
	</div>
</footer>

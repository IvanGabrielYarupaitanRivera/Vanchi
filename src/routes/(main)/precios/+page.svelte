<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/ui/Hero/Hero.svelte';
	import PriceSheet from '$lib/components/precios/PriceSheet.svelte';
	import PaymentModel from '$lib/components/precios/PaymentModel.svelte';
	import Faq from '$lib/components/precios/Faq.svelte';
	import EntryPlan from '$lib/components/precios/EntryPlan.svelte';
	import PageFooter from '$lib/components/precios/Footer.svelte';

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
			{
				'@type': 'Offer',
				name: 'Agente Esencial',
				price: '2000',
				priceCurrency: 'PEN',
				availability: 'https://schema.org/InStock'
			},
			{
				'@type': 'Offer',
				name: 'Agente Profesional',
				price: '4000',
				priceCurrency: 'PEN',
				availability: 'https://schema.org/InStock'
			},
			{
				'@type': 'Offer',
				name: 'Agente Enterprise',
				price: '8000',
				priceCurrency: 'PEN',
				availability: 'https://schema.org/InStock'
			}
		],
		provider: {
			'@type': 'Person',
			'@id': 'https://www.vanchi.pro/#person',
			name: 'Ivan Yarupaitan'
		},
		areaServed: { '@type': 'Country', name: 'Perú' }
	};

	const faqStructuredDataJson = JSON.stringify(faqStructuredData).replace(/</g, '\\u003c');
	const softwareAppStructuredDataJson = JSON.stringify(softwareAppStructuredData).replace(
		/</g,
		'\\u003c'
	);
	const author = 'Ivan Yarupaitan Rivera';
	const whatsappUrl =
		'https://api.whatsapp.com/send/?phone=51985942670&text=Hola,%20quiero%20informacion%20sobre%20los%20agentes%20de%20IA.';
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

<Hero
	level="secondary"
	title="Cuanto cuesta implementar Inteligencia Artificial en tu empresa"
	subtitle="Tres rangos. Pago por hitos de resultado. Sin costos ocultos, sin letras chicas. Cada agente se construye para resolver un problema concreto de tu negocio."
	action_label="Conversemos"
	action_onclick={() => goto(resolve('/(main)/contacto'))}
/>

<PriceSheet {tiers} {whatsappUrl} />

<PaymentModel />

<Faq items={faqItems} />

<EntryPlan />

<PageFooter {author}>
	<a
		href={resolve('/(main)/proyectos')}
		class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Proyectos</a
	>
	<a
		href={resolve('/(main)/proyectos/[projectId]', { projectId: 'encap' })}
		class="text-base-content/60 transition-colors duration-150 hover:text-base-content"
		>Caso ENCAP</a
	>
	<a
		href={resolve('/(main)/ivan-yarupaitan-rivera')}
		class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Sobre mí</a
	>
</PageFooter>

<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import CollaborationModels from '$lib/components/precios/CollaborationModels.svelte';

	const serviceStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Socio Tecnológico (WaaS)',
		description:
			'Servicio de desarrollo web por suscripción mensual con plan base y módulos escalables de SEO, catálogo, sistema interno e IA.',
		provider: {
			'@type': 'Person',
			'@id': 'https://vanchi.pro/#person'
		},
		areaServed: {
			'@type': 'Country',
			name: 'Perú'
		},
		offers: {
			'@type': 'Offer',
			name: 'Plan Base Sólida',
			price: '30',
			priceCurrency: 'PEN',
			availability: 'https://schema.org/InStock',
			url: 'https://vanchi.pro/precios'
		}
	};

	const faqItems = [
		{
			question: '¿Qué incluye el plan base de S/ 30?',
			answer:
				'Incluye Landing Page Pro, hosting, certificado SSL, botón de WhatsApp y mantenimiento técnico básico para mantener la web activa y segura.'
		},
		{
			question: '¿Hay permanencia mínima?',
			answer:
				'Sí. El plan funciona bajo un compromiso mínimo de 12 meses para amortizar el desarrollo inicial sin cobro de implementación al inicio.'
		},
		{
			question: '¿Qué pasa si necesito más funcionalidades?',
			answer:
				'Puedes activar módulos adicionales como SEO, catálogo, asistente IA o sistema interno. En lugar de un cobro único, se ajusta la mensualidad.'
		},
		{
			question: '¿El dominio es mío?',
			answer:
				'Sí. El dominio pertenece al cliente. Puedes comprarlo directamente o delegar la gestión técnica, siempre a tu nombre.'
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

	const serviceStructuredDataJson = JSON.stringify(serviceStructuredData).replace(/</g, '\\u003c');
	const faqStructuredDataJson = JSON.stringify(faqStructuredData).replace(/</g, '\\u003c');
</script>

<SEO
	title="Precios de Desarrollo Web por Suscripción | Vanchi"
	description="Activa tu plan Socio Tecnológico desde S/ 30 al mes. Modelo WaaS con landing profesional, hosting, SSL, soporte y módulos escalables como SEO, catálogo, sistema interno e IA."
	keywords="waas peru, desarrollo web por suscripción, socio tecnológico, landing page mensual, precios desarrollo web peru, plan web s/30, mantenimiento web y hosting"
	url="https://vanchi.pro/precios"
/>

<svelte:head>
	<svelte:element this={'script'} type="application/ld+json">
		{serviceStructuredDataJson}
	</svelte:element>
	<svelte:element this={'script'} type="application/ld+json">
		{faqStructuredDataJson}
	</svelte:element>
</svelte:head>

<CollaborationModels />

<section
	class="w-full border-t border-white/10 py-20 lg:py-28"
	aria-labelledby="faq-pricing-heading"
>
	<div class="container mx-auto px-4">
		<div class="mx-auto mb-10 max-w-3xl text-center">
			<h2 id="faq-pricing-heading" class="mb-3 text-3xl font-bold lg:text-5xl">
				Preguntas frecuentes sobre
				<span
					class="bg-linear-to-r from-primary via-yellow-200 to-primary bg-clip-text font-serif text-transparent italic"
				>
					WaaS
				</span>
			</h2>
			<p class="text-base text-base-content/65 lg:text-lg">
				Respuestas directas para tomar decisiones rápidas sobre tu plan Socio Tecnológico.
			</p>
		</div>

		<div class="mx-auto flex max-w-4xl flex-col gap-4">
			{#each faqItems as item (item.question)}
				<details
					class="group rounded-2xl border border-white/10 bg-base-200/50 p-5 transition-all duration-300 open:border-primary/30 open:bg-base-200/70"
				>
					<summary class="cursor-pointer list-none text-base font-semibold text-base-content">
						{item.question}
					</summary>
					<p class="mt-3 leading-loose text-base-content/70">{item.answer}</p>
				</details>
			{/each}
		</div>
	</div>
</section>

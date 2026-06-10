<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/soluciones-legales/Hero.svelte';
	import PhaseBentoGrid from '$lib/components/soluciones-legales/PhaseBentoGrid.svelte';
	import PhaseDetails from '$lib/components/soluciones-legales/PhaseDetails.svelte';
	import TrustAndFaq from '$lib/components/soluciones-legales/TrustAndFaq.svelte';

	const legalPageUrl = 'https://www.vanchi.pro/soluciones-legales';

	const legalStructuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebPage',
				'@id': `${legalPageUrl}#webpage`,
				url: legalPageUrl,
				name: 'Legal Tech para estudios jurídicos | Vanchi Legal',
				description:
					'Soluciones Legal Tech por fases: web profesional, automatización, sistema interno, IA y agentes inteligentes para estudios jurídicos.',
				inLanguage: 'es-PE',
				isPartOf: {
					'@id': 'https://www.vanchi.pro/#website'
				}
			},
			{
				'@type': 'Service',
				'@id': `${legalPageUrl}#service`,
				name: 'Vanchi Legal: Modernización tecnológica para estudios jurídicos',
				description:
					'Implementación por fases para despachos legales: presencia digital, automatizaciones, sistema interno, IA y agentes.',
				provider: {
					'@type': 'Organization',
					name: 'Vanchi',
					url: 'https://www.vanchi.pro'
				},
				areaServed: {
					'@type': 'Country',
					name: 'Perú'
				},
				offers: {
					'@type': 'Offer',
					price: '30',
					priceCurrency: 'PEN',
					description: 'Entrada desde S/ 30/mes en la fase inicial.'
				}
			},
			{
				'@type': 'FAQPage',
				'@id': `${legalPageUrl}#faq`,
				mainEntity: [
					{
						'@type': 'Question',
						name: '¿Es difícil de usar?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'No. Se diseña para que el equipo legal lo use con facilidad desde el primer día, con acompañamiento inicial.'
						}
					},
					{
						'@type': 'Question',
						name: '¿Necesito instalar algo?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'Generalmente no. El acceso es web y móvil, sin instalaciones complejas.'
						}
					},
					{
						'@type': 'Question',
						name: '¿Qué pasa si ya tengo una web?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'Se puede mejorar por fases o integrar con nuevos módulos sin empezar desde cero.'
						}
					}
				]
			}
		]
	};

	const legalStructuredDataJson = JSON.stringify(legalStructuredData).replace(/</g, '\\u003c');
</script>

<SEO
	title="Legal Tech para Estudios Jurídicos en Perú | Vanchi Legal"
	description="Moderniza tu estudio jurídico por fases: web profesional, automatización, sistema interno, IA y agentes. Empieza desde S/ 30/mes."
	keywords="legal tech peru, software para abogados, automatizacion para estudios juridicos, ia para abogados, sistema para despacho legal, vanchi legal"
	url={legalPageUrl}
/>

<svelte:head>
	<meta name="geo.region" content="PE" />
	<meta name="geo.placename" content="Perú" />
	<svelte:element this={'script'} type="application/ld+json">
		{legalStructuredDataJson}
	</svelte:element>
</svelte:head>

<Hero />

<PhaseBentoGrid />

<!-- Detalles flexibles modo "Addon" por fases -->
<PhaseDetails />

<!-- Confianza, comparativa y FAQ para cierre de objeciones -->
<TrustAndFaq />

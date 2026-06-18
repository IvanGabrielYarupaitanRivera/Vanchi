<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import SocialProof from '$lib/components/home/SocialProof.svelte';
	import FeaturedProjects from '$lib/components/home/FeaturedProjects.svelte';
	import Services from '$lib/components/home/Services.svelte';
	import AboutMe from '$lib/components/home/AboutMe.svelte';
	import WhatsappContact from '$lib/components/home/WhatsappContact.svelte';

	const personStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		'@id': 'https://www.vanchi.pro/#person',
		name: 'Ivan Yarupaitan Rivera',
		url: 'https://www.vanchi.pro',
		sameAs: [
			'https://github.com/IvanGabrielYarupaitanRivera',
			'https://linkedin.com/in/ivan-yarupaitan-rivera',
			'https://youtube.com/@VanchiDev',
			'https://instagram.com/vanchi.dev'
		],
		jobTitle: 'Especialista en Inteligencia Artificial',
		worksFor: {
			'@type': 'Organization',
			'@id': 'https://www.vanchi.pro/#organization',
			name: 'Vanchi',
			url: 'https://www.vanchi.pro'
		},
		knowsAbout: [
			'Generative Agent as a Service',
			'Automatización de procesos con IA',
			'Desarrollo de agentes autónomos'
		]
	};

	const organizationStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'@id': 'https://www.vanchi.pro/#organization',
		name: 'Vanchi',
		url: 'https://www.vanchi.pro',
		founder: { '@id': 'https://www.vanchi.pro/#person' },
		areaServed: { '@type': 'Country', name: 'Perú' }
	};

	const personJson = JSON.stringify(personStructuredData).replace(/</g, '\\u003c');
	const orgJson = JSON.stringify(organizationStructuredData).replace(/</g, '\\u003c');
</script>

<SEO
	title="Automatizo procesos de mi empresa — Agentes de IA autónomos | Vanchi"
	description="Tu empresa debería funcionar sola. Construyo agentes de inteligencia artificial que trabajan en background. Desarrollo de IA en Huancayo, Junín y Perú. Metodología GaaS."
	keywords="automatizo procesos de mi empresa, desarrollador de ia huancayo, automatizacion de procesos junin, quien hace agentes inteligentes en huancayo, empresa de ia en junin, ivan yarupaitan, vanchi"
	url="https://www.vanchi.pro/"
/>

<svelte:head>
	<svelte:element this={'script'} type="application/ld+json">
		{personJson}
	</svelte:element>
	<svelte:element this={'script'} type="application/ld+json">
		{orgJson}
	</svelte:element>
</svelte:head>

<Hero />
<SocialProof />
<FeaturedProjects />
<Services />
<AboutMe />
<WhatsappContact />

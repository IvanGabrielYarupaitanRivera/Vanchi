<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/ui/Hero/Hero.svelte';
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

	const gaasStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		'@id': 'https://www.vanchi.pro/#gaas',
		name: 'Generative Agent as a Service',
		description: 'Metodología de software autónomo donde los agentes de IA trabajan en background sin intervención humana.',
		author: { '@id': 'https://www.vanchi.pro/#person' },
		offers: {
			'@type': 'Offer',
			areaServed: { '@type': 'Country', name: 'Perú' }
		}
	};

	const personJson = JSON.stringify(personStructuredData).replace(/</g, '\\u003c');
	const orgJson = JSON.stringify(organizationStructuredData).replace(/</g, '\\u003c');
	const gaasJson = JSON.stringify(gaasStructuredData).replace(/</g, '\\u003c');
</script>

<SEO
	title="Automatizo procesos con Agentes de IA autonomos | Vanchi"
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
	<svelte:element this={'script'} type="application/ld+json">
		{gaasJson}
	</svelte:element>
</svelte:head>

<Hero
	level="primary"
	title="Tu empresa debería funcionar sola"
	subtitle="Construyo agentes de IA que trabajan en background. Tú defines el objetivo, el agente lo ejecuta."
	action_label="Automatizar mi organización"
	action_onclick={() => goto(resolve('/(main)/contacto'))}
	action_secondary_label="Iniciar consulta con agente"
	action_secondary_onclick={() => goto(resolve('/(chat)/chat'))}
	status_active={true}
	italic_word="sola"
/>
<SocialProof />
<FeaturedProjects />
<Services />
<AboutMe />
<WhatsappContact />

<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/ivan-yarupaitan-rivera/Hero.svelte';
	import Story from '$lib/components/ivan-yarupaitan-rivera/Story.svelte';
	import Stack from '$lib/components/ivan-yarupaitan-rivera/Stack.svelte';
	import Cta from '$lib/components/ivan-yarupaitan-rivera/Cta.svelte';
	import PageFooter from '$lib/components/ivan-yarupaitan-rivera/Footer.svelte';

	const skills = [
		'SvelteKit', 'TypeScript', 'Tailwind CSS', 'DaisyUI', 'Convex',
		'Supabase', 'Bun', 'Astro', 'Gemini AI', 'n8n', 'Vercel', 'Netlify'
	];

	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'ProfilePage',
				'@id': 'https://www.vanchi.pro/ivan-yarupaitan-rivera#profile',
				url: 'https://www.vanchi.pro/ivan-yarupaitan-rivera',
				name: 'Ivan Gabriel Yarupaitan Rivera',
				description:
					'Ingeniero de Sistemas y Computacion. Construyo productos digitales que unen ingenieria robusta, inteligencia artificial y diseno editorial.',
				isPartOf: {
					'@id': 'https://www.vanchi.pro/#website'
				},
				mainEntity: {
					'@id': 'https://www.vanchi.pro/#person'
				}
			},
			{
				'@type': 'Person',
				'@id': 'https://www.vanchi.pro/#person',
				name: 'Ivan Gabriel Yarupaitan Rivera',
				givenName: 'Ivan Gabriel',
				familyName: 'Yarupaitan Rivera',
				alternateName: ['Ivan Yarupaitan Rivera', 'Vanchi'],
				url: 'https://www.vanchi.pro/ivan-yarupaitan-rivera',
				mainEntityOfPage: {
					'@id': 'https://www.vanchi.pro/ivan-yarupaitan-rivera#profile'
				},
				description:
					'Ingeniero de Sistemas y Computacion especializado en SvelteKit, TypeScript e integracion de inteligencia artificial.',
				jobTitle: 'Ingeniero de Sistemas y Computacion',
				knowsLanguage: ['es', 'en'],
				nationality: {
					'@type': 'Country',
					name: 'Peru'
				},
				homeLocation: {
					'@type': 'Place',
					name: 'Huancayo, Peru'
				},
				sameAs: [
					'https://www.linkedin.com/in/ivan-yarupaitan-rivera/',
					'https://github.com/IvanGabrielYarupaitanRivera'
				],
				knowsAbout: skills
			}
		]
	};

	const structuredDataJson = JSON.stringify(structuredData).replace(/</g, '\\u003c');
</script>

<SEO
	title="Ivan Gabriel Yarupaitan Rivera — Ingeniero de Sistemas"
	description="Ingeniero de Sistemas y Computacion en Huancayo, Peru. Especializado en construir agentes de IA autonomos con metodologia GaaS. SvelteKit, TypeScript, Convex."
	keywords="Ivan Gabriel Yarupaitan Rivera, desarrollador de ia en huancayo, ingeniero de sistemas peru, especialista en agentes de ia, vanchi founder"
	type="profile"
	url="https://www.vanchi.pro/ivan-yarupaitan-rivera"
/>

<svelte:head>
	<svelte:element this={'script'} type="application/ld+json">
		{structuredDataJson}
	</svelte:element>
</svelte:head>

<Hero />
<Story />
<Stack />
<Cta />
<PageFooter />

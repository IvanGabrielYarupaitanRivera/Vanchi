<script lang="ts">
	import Hero from '$lib/components/home/Hero.svelte';
	import SocialProof from '$lib/components/home/SocialProof.svelte';
	import FeaturedProjects from '$lib/components/home/FeaturedProjects.svelte';
	import Services from '$lib/components/home/Services.svelte';
	import AboutMe from '$lib/components/home/AboutMe.svelte';
	import WhatsappContact from '$lib/components/home/WhatsappContact.svelte';
	import SEO from '$lib/components/SEO.svelte';

	let selectedService = $state('');

	const onSelectService = (service: string) => {
		selectedService = service;
	};
</script>

<SEO
	title="Desarrollo Web, IA y WaaS en Perú | Vanchi"
	description="Creamos presencia digital premium, sistemas web e inteligencia artificial para marcas y estudios en Perú. Empieza con modelo WaaS desde S/ 30/mes."
	keywords="desarrollo web peru, waas peru, inteligencia artificial para negocios, socio tecnológico, sveltekit, automatización"
	url="https://www.vanchi.pro/"
/>

<Hero />
<SocialProof />
<FeaturedProjects />
<Services {onSelectService} />
<AboutMe />
<WhatsappContact {selectedService} />

<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/ui/Hero/Hero.svelte';
	import Canales from '$lib/components/contacto/Canales.svelte';
	import Expectativas from '$lib/components/contacto/Expectativas.svelte';
	import Redes from '$lib/components/contacto/Redes.svelte';
	import PageFooter from '$lib/components/contacto/Footer.svelte';

	const contactStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Ivan Yarupaitan Rivera',
		url: 'https://www.vanchi.pro',
		sameAs: [
			'https://github.com/IvanGabrielYarupaitanRivera',
			'https://linkedin.com/in/ivan-yarupaitan-rivera',
			'https://youtube.com/@VanchiDev',
			'https://instagram.com/vanchi.dev',
			'https://tiktok.com/@vanchi.dev',
			'https://x.com/Vanchi_Dev',
			'https://facebook.com/vanchi.dev'
		],
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'sales',
			availableLanguage: ['es', 'en'],
			telephone: '+51985942670',
			url: 'https://www.vanchi.pro/contacto'
		}
	};

	const contactStructuredDataJson = JSON.stringify(contactStructuredData).replace(/</g, '\\u003c');
	const author = 'Ivan Yarupaitan Rivera';
	const whatsappUrl = 'https://api.whatsapp.com/send/?phone=51985942670&text=Hola%20Ivan,%20me%20gustaria%20conversar%20sobre%20un%20proyecto.';
	const email = 'ivangyr321@gmail.com';
</script>

<SEO
	title="Contactar a un especialista en Inteligencia Artificial en Peru | Vanchi"
	description="Quieres implementar IA en tu empresa? Escribeme por WhatsApp o email. Respondo en menos de 24 horas. Sin formularios largos, sin friccion."
	keywords="contratar especialista inteligencia artificial peru, consultoria ia peru, desarrollador de agentes inteligentes contacto, programador ia huancayo contacto"
	url="https://www.vanchi.pro/contacto"
/>

<svelte:head>
	<svelte:element this={'script'} type="application/ld+json">
		{contactStructuredDataJson}
	</svelte:element>
</svelte:head>

<Hero
	level="secondary"
	title="Contratar a un especialista en Inteligencia Artificial"
	subtitle="Escribeme por WhatsApp o email. Sin formularios largos, sin friccion. Respondo en menos de 24 horas."
	action_label="Escribeme"
	action_onclick={() => goto(resolve("/(main)/contacto"))}
/>

<Canales {whatsappUrl} {email} />

<Expectativas />

<Redes />

<PageFooter {author}>
	<a href={resolve('/(main)/precios')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Precios</a>
	<a href={resolve('/(main)/proyectos')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Proyectos</a>
	<a href={resolve('/(main)/proyectos/[projectId]', { projectId: 'encap' })} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Caso ENCAP</a>
	<a href={resolve('/(main)/ivan-yarupaitan-rivera')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Sobre mi</a>
</PageFooter>

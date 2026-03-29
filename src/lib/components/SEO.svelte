<script lang="ts">
	import { page } from '$app/state';

	interface SEOProps {
		title?: string;
		description?: string;
		keywords?: string;
		author?: string;
		type?: 'website' | 'profile' | 'article';
		image?: string;
		url?: string;
		siteName?: string;
		twitterSite?: string;
		twitterCreator?: string;
		locale?: 'es_ES' | 'en_US' | string;
		noindex?: boolean;
		nofollow?: boolean;
		ogImageWidth?: number;
		ogImageHeight?: number;
	}

	const SITE_URL = 'https://vanchi.pro';

	let {
		title = 'Vanchi — Desarrollo de Sistemas e Integración de Inteligencia Artificial',
		description = 'Vanchi es un ingeniero de sistemas especializado en desarrollo web, inteligencia artificial y diseño UI/UX. Con un enfoque en soluciones innovadoras y de alta calidad, Vanchi ofrece servicios personalizados para llevar tu proyecto al siguiente nivel.',
		keywords = 'ingeniería de sistemas, desarrollo web, sveltekit, inteligencia artificial, diseño ui/ux, vanchi, portafolio, typescript, full stack, programador',
		author = 'Vanchi',
		type = 'website',
		image = 'https://vanchi.pro/images/og-image.webp',
		url = `${SITE_URL}${page.url.pathname}`,
		siteName = 'Vanchi',
		twitterSite = '',
		twitterCreator = '',
		locale = 'es_ES',
		noindex = false,
		nofollow = false,
		ogImageWidth = 1200,
		ogImageHeight = 1200
	}: SEOProps = $props();

	// Construir el robots content
	const robotsContent = $derived(
		[noindex ? 'noindex' : 'index', nofollow ? 'nofollow' : 'follow'].join(', ')
	);

	const canonicalUrl = $derived(url.split('#')[0].split('?')[0]);

	// Datos estructurados JSON-LD: Usamos @graph para conectar Persona y Sitio Web
	const structuredData = $derived({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': `${SITE_URL}/#person`,
				name: 'Ivan',
				alternateName: 'Vanchi',
				description: description,
				url: `${SITE_URL}/ivan-yarupaitan-rivera`,
				image: image,
				jobTitle: 'Ingeniero de Sistemas',
				sameAs: [
					'https://www.linkedin.com/in/ivan-yarupaitan-rivera/',
					'https://github.com/IvanGabrielYarupaitanRivera'
				],
				knowsAbout: [
					'SvelteKit',
					'TypeScript',
					'Artificial Intelligence',
					'UI/UX Design',
					'Tailwind CSS'
				]
			},
			{
				'@type': 'WebSite',
				'@id': `${SITE_URL}/#website`,
				url: SITE_URL,
				name: siteName,
				description: description,
				publisher: {
					'@id': `${SITE_URL}/#person`
				},
				inLanguage: locale
			}
		]
	});

	const structuredDataJson = $derived(JSON.stringify(structuredData).replace(/</g, '\\u003c'));
</script>

<svelte:head>
	<!-- Título -->
	<title>{title}</title>

	<!-- Meta tags básicos -->
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content={author} />
	<meta name="robots" content={robotsContent} />
	<meta name="googlebot" content={robotsContent} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:image:width" content={String(ogImageWidth)} />
	<meta property="og:image:height" content={String(ogImageHeight)} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:locale" content={locale} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	{#if twitterSite}
		<meta name="twitter:site" content={twitterSite} />
	{/if}
	{#if twitterCreator}
		<meta name="twitter:creator" content={twitterCreator} />
	{/if}

	<!-- Canonical URL -->
	<link rel="canonical" href={canonicalUrl} />

	<!-- Manifest para PWA -->
	<link rel="manifest" href="/manifest.json" />

	<!-- Datos estructurados JSON-LD -->
	<svelte:element this={'script'} type="application/ld+json">
		{structuredDataJson}
	</svelte:element>
</svelte:head>

<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	interface SEOProps {
		title?: string;
		description?: string;
		keywords?: string;
		author?: string;
		type?: 'website' | 'profile' | 'article';
		image?: string;
		url?: string;
		siteName?: string;
		locale?: 'es_ES' | 'en_US' | string;
		noindex?: boolean;
		nofollow?: boolean;
		ogImageWidth?: number;
		ogImageHeight?: number;
	}

	let {
		title = 'Vanchi — Desarrollo de Sistemas',
		description = 'Portafolio de Ivan Yarupaitan Rivera. Ingeniero de Sistemas especializado en Inteligencia Artificial, desarrollo web moderno con SvelteKit y diseño de interfaces de alto impacto.',
		keywords = 'ingeniería de sistemas, desarrollo web, sveltekit, inteligencia artificial, diseño ui/ux, vanchi, portafolio, typescript, full stack, programador',
		author = 'Vanchi',
		type = 'website',
		image = 'https://vanchi.pro/images/og-image.webp',
		url = 'https://vanchi.pro/',
		siteName = 'Vanchi',
		locale = 'es_ES',
		noindex = false,
		nofollow = false,
		ogImageWidth = 1200,
		ogImageHeight = 1200
	}: SEOProps = $props();

	// Construir el robots content
	const robotsContent = [
		...(noindex ? ['noindex'] : ['index']),
		...(nofollow ? ['nofollow'] : ['follow'])
	].join(', ');

	// Asegurar slash final en canonical
	if (!url.endsWith('/')) url = url + '/';

	// Datos estructurados JSON-LD para Portafolio Personal (Person)
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Ivan',
		alternateName: 'Vanchi',
		description,
		url,
		image,
		jobTitle: 'Ingeniero de Sistemas',
		knowsAbout: [
			'SvelteKit',
			'TypeScript',
			'Artificial Intelligence',
			'UI/UX Design',
			'Tailwind CSS'
		],
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': url
		}
	};
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
	<meta property="og:url" content={url} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:locale" content={locale} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:site" content={siteName} />
	<meta name="twitter:creator" content={author} />

	<!-- Canonical URL -->
	<link rel="canonical" href={url} />

	<!-- Datos estructurados JSON-LD -->
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}

	<!-- Favicon y iconos -->
	<link rel="icon" href={favicon} type="image/svg+xml" />
	<link rel="apple-touch-icon" href={favicon} />
	<meta name="theme-color" content="#D3A329" />
</svelte:head>

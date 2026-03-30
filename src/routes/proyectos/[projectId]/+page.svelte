<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/projects/project/Hero.svelte';
	import Context from '$lib/components/projects/project/Context.svelte';
	import Role from '$lib/components/projects/project/Role.svelte';
	import Research from '$lib/components/projects/project/Research.svelte';
	import Solution from '$lib/components/projects/project/Solution.svelte';
	import UI from '$lib/components/projects/project/UI.svelte';
	import Tech from '$lib/components/projects/project/Tech.svelte';
	import Results from '$lib/components/projects/project/Results.svelte';
	import Assets from '$lib/components/projects/project/Assets.svelte';

	let { data } = $props();
	let { project } = $derived(data);

	const ogImage = $derived(project.meta.ogImage?.src ?? 'https://vanchi.pro/images/og-image.webp');
	const projectUrl = $derived(`https://vanchi.pro/proyectos/${project.id}`);

	const breadcrumbStructuredData = $derived({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Inicio',
				item: 'https://vanchi.pro/'
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: 'Proyectos',
				item: 'https://vanchi.pro/proyectos'
			},
			{
				'@type': 'ListItem',
				position: 3,
				name: project.meta.title,
				item: projectUrl
			}
		]
	});

	const breadcrumbStructuredDataJson = $derived(
		JSON.stringify(breadcrumbStructuredData).replace(/</g, '\\u003c')
	);
</script>

<SEO
	title={`${project.meta.title} | Vanchi`}
	description={project.meta.description}
	keywords={project.meta.keywords.join(', ')}
	url={projectUrl}
	image={ogImage}
/>

<svelte:head>
	<svelte:element this={'script'} type="application/ld+json">
		{breadcrumbStructuredDataJson}
	</svelte:element>
</svelte:head>

<Hero meta={project.meta} />
<Context context={project.context} />
<Role myRole={project.myRole} />
<Research research={project.research} />
<Solution solution={project.solution} />
<UI ui={project.ui} />
<Tech tech={project.tech} />
<Results results={project.results} />
<Assets assets={project.assets} />

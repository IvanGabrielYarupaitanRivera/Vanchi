<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/projects/project/Hero.svelte';
	import { resolve } from '$app/paths';
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

	const ogImage = $derived(
		project.meta.ogImage?.src ?? 'https://www.vanchi.pro/images/og-image.webp'
	);
	const projectUrl = $derived(`https://www.vanchi.pro/proyectos/${project.id}`);

	const breadcrumbStructuredData = $derived({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Inicio',
				item: 'https://www.vanchi.pro/'
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: 'Proyectos',
				item: 'https://www.vanchi.pro/proyectos'
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

	const caseStudySummary = $derived({
		problem: project.context.problem,
		solution: project.solution.concept,
		stack: project.meta.stack.join(' · '),
		result:
			project.results.metrics.length > 0
				? project.results.metrics.map((metric) => `${metric.value} ${metric.label}`).join(' · ')
				: project.results.feedback
	});
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

<section class="w-full py-12 lg:py-16" aria-labelledby="case-study-summary-heading">
	<div class="container mx-auto px-4">
		<div class="mb-8 flex flex-wrap items-center justify-between gap-3">
			<h2 id="case-study-summary-heading" class="text-3xl font-bold lg:text-4xl">
				Resumen citable
			</h2>
			<div class="flex flex-wrap gap-2 text-sm text-base-content/60">
				<span class="rounded-full border border-white/10 bg-base-200/40 px-3 py-1"
					>Autor: Ivan Yarupaitan Rivera</span
				>
				<span class="rounded-full border border-white/10 bg-base-200/40 px-3 py-1"
					>Actualizado: {project.meta.date}</span
				>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
			<article class="rounded-2xl border border-white/10 bg-base-200/40 p-5">
				<h3 class="mb-2 text-lg font-semibold text-primary">Problema</h3>
				<p class="leading-loose text-base-content/70">{caseStudySummary.problem}</p>
			</article>
			<article class="rounded-2xl border border-white/10 bg-base-200/40 p-5">
				<h3 class="mb-2 text-lg font-semibold text-primary">Solución</h3>
				<p class="leading-loose text-base-content/70">{caseStudySummary.solution}</p>
			</article>
			<article class="rounded-2xl border border-white/10 bg-base-200/40 p-5">
				<h3 class="mb-2 text-lg font-semibold text-primary">Stack</h3>
				<p class="leading-loose text-base-content/70">{caseStudySummary.stack}</p>
			</article>
			<article class="rounded-2xl border border-white/10 bg-base-200/40 p-5">
				<h3 class="mb-2 text-lg font-semibold text-primary">Resultado</h3>
				<p class="leading-loose text-base-content/70">{caseStudySummary.result}</p>
			</article>
		</div>

		<nav class="mt-6 flex flex-wrap gap-3" aria-label="Navegación de cierre">
			<a href={resolve('/proyectos')} class="btn">Ver más casos</a>
			<a href={resolve('/precios')} class="btn">Ver precios</a>
			<a href={resolve('/ivan-yarupaitan-rivera')} class="btn">Sobre el autor</a>
		</nav>
	</div>
</section>

<Context context={project.context} />
<Role myRole={project.myRole} />
<Research research={project.research} />
<Solution solution={project.solution} />
<UI ui={project.ui} />
<Tech tech={project.tech} />
<Results results={project.results} />
<Assets assets={project.assets} />

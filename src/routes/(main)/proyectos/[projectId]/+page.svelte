<script lang="ts">
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/ui/Hero/Hero.svelte';
	import Context from '$lib/components/proyectos/project/Context.svelte';
	import Role from '$lib/components/proyectos/project/Role.svelte';
	import Research from '$lib/components/proyectos/project/Research.svelte';
	import Solution from '$lib/components/proyectos/project/Solution.svelte';
	import UI from '$lib/components/proyectos/project/UI.svelte';
	import Tech from '$lib/components/proyectos/project/Tech.svelte';
	import Results from '$lib/components/proyectos/project/Results.svelte';
	import Assets from '$lib/components/proyectos/project/Assets.svelte';

	let { data } = $props();
	let { project } = $derived(data);

	const ogImage = $derived(
		project.meta.ogImage?.src ?? 'https://www.vanchi.pro/images/og-image.webp'
	);
	const projectUrl = $derived(`https://www.vanchi.pro/proyectos/${project.id}`);

	const structuredData = $derived({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.vanchi.pro/' },
			{
				'@type': 'ListItem',
				position: 2,
				name: 'Proyectos',
				item: 'https://www.vanchi.pro/proyectos'
			},
			{ '@type': 'ListItem', position: 3, name: project.meta.title, item: projectUrl }
		]
	});

	const structuredDataJson = $derived(JSON.stringify(structuredData).replace(/</g, '\\u003c'));

	const summary = $derived({
		problem: project.context.problem,
		solution: project.solution.concept,
		stack: project.meta.stack.join(' \u00B7 '),
		result:
			project.results.metrics.length > 0
				? project.results.metrics
						.map((m: { value: string; label: string }) => `${m.value} ${m.label}`)
						.join(' \u00B7 ')
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
		{structuredDataJson}
	</svelte:element>
</svelte:head>

<Hero level="secondary" title={project.meta.title} subtitle={project.meta.tagline}>
	<div class="flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm text-base-content/50">
		<span>{project.meta.role}</span>
		<span>{project.meta.date}</span>
	</div>
</Hero>

<!-- Resumen citable -->
<section class="w-full border-t vanchi-hairline py-40">
	<div class="mx-auto max-w-5xl px-4">
		<div class="mb-16 flex items-center gap-2.5">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">RESUMEN</span>
		</div>

		<div class="grid grid-cols-1 gap-px lg:grid-cols-2">
			<div class="border border-base-300 bg-base-200 p-6 lg:p-8">
				<span class="mb-3 block font-mono text-xs tracking-[0.12em] text-secondary uppercase"
					>Problema</span
				>
				<p class="font-mono text-sm leading-relaxed text-base-content/70">{summary.problem}</p>
			</div>
			<div class="border border-base-300 bg-base-200 p-6 lg:p-8">
				<span class="mb-3 block font-mono text-xs tracking-[0.12em] text-secondary uppercase"
					>Solución</span
				>
				<p class="font-mono text-sm leading-relaxed text-base-content/70">{summary.solution}</p>
			</div>
			<div class="border border-base-300 bg-base-200 p-6 lg:p-8">
				<span class="mb-3 block font-mono text-xs tracking-[0.12em] text-secondary uppercase"
					>Stack</span
				>
				<p class="font-mono text-sm leading-relaxed text-base-content/70">{summary.stack}</p>
			</div>
			<div class="border border-base-300 bg-base-200 p-6 lg:p-8">
				<span class="mb-3 block font-mono text-xs tracking-[0.12em] text-secondary uppercase"
					>Resultado</span
				>
				<p class="font-mono text-sm leading-relaxed text-base-content/70">{summary.result}</p>
			</div>
		</div>

		<div class="mt-8 flex flex-wrap gap-3">
			<a
				href={resolve('/(main)/proyectos')}
				class="btn h-9 min-h-0 border border-base-300 px-3 font-mono text-xs font-bold tracking-wider text-base-content/80 uppercase btn-ghost duration-100 hover:bg-base-300 hover:text-base-content"
			>
				← Todos los proyectos
			</a>
			{#if project.id === 'encap' || project.id === 'molaric'}
				<a
					href={resolve('/(main)/metodologia')}
					class="btn h-9 min-h-0 border border-base-300 px-3 font-mono text-xs font-bold tracking-wider text-base-content/80 uppercase duration-100 hover:bg-base-300 hover:text-base-content"
				>
					Entender GaaS →
				</a>
			{/if}
			<a
				href={resolve('/(main)/contacto')}
				class="btn h-9 min-h-0 border border-base-content bg-base-content px-3 font-mono text-xs font-bold tracking-wider text-base-100 uppercase duration-100 hover:bg-base-content/90"
			>
				Proponer proyecto →
			</a>
		</div>
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

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

	let { data } = $props();
	let { project } = $derived(data);
</script>

<SEO
	title={`${project.meta.title} | Vanchi`}
	description={project.meta.description}
	keywords={project.meta.keywords.join(', ')}
	url={`https://vanchi.pro/proyectos/${project.id}`}
	image={project.meta.ogImage?.src}
/>

<Hero meta={project.meta} />
<Context context={project.context} />
<Role myRole={project.myRole} />
<Research research={project.research} />
<Solution solution={project.solution} />
<UI ui={project.ui} />
<Tech tech={project.tech} />
<Results results={project.results} />

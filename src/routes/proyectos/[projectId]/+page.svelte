<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/projects/project/Hero.svelte';
	import Context from '$lib/components/projects/project/Context.svelte';
	import Role from '$lib/components/projects/project/Role.svelte';
	import Research from '$lib/components/projects/project/Research.svelte';
	import Solution from '$lib/components/projects/project/Solution.svelte';

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

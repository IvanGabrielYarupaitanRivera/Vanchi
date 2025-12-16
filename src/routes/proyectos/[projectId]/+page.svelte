<script lang="ts">
	import Hero from '$lib/components/projects/project/Hero.svelte';
	import SEO from '$lib/components/SEO.svelte';

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

<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/soluciones-legales/Hero.svelte';
	import PhaseBentoGrid from '$lib/components/soluciones-legales/PhaseBentoGrid.svelte';
	import PhaseDetails from '$lib/components/soluciones-legales/PhaseDetails.svelte';
</script>

<SEO
	title="Legal Tech | Vanchi"
	description="Construimos Inteligencia Artificial para firmas modernas."
	keywords="Legal, IA, Automatizacion"
	url="https://vanchi.pro/soluciones-legales"
/>

<Hero />

<PhaseBentoGrid />

<!-- Detalles flexibles modo "Addon" por fases -->
<PhaseDetails />

<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';

	const servicio: string = page.params.servicio ?? '';

	const labels: Record<string, string> = {
		'agentes-ia': 'Agentes IA',
		automatizacion: 'Automatización',
		consultoria: 'Consultoría'
	};

	const label = labels[servicio] ?? 'Servicio';
</script>

<SEO
	title={`${label} para empresas en Huancayo y Perú | Vanchi`}
	description={`Implementación de ${label.toLowerCase()} con metodología GaaS. Agentes de IA autónomos orientados a resultados para empresas en Junín y Perú.`}
	keywords={`${label.toLowerCase()} ia huancayo, servicio de ${label.toLowerCase()} peru, contratar ${label.toLowerCase()} junin`}
	url={`${base}/servicios/${servicio}`}
/>

<section class="flex min-h-[90dvh] items-center">
	<div class="mx-auto w-full max-w-5xl px-4">
		<div class="mb-10 flex items-center gap-2.5">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">SERVICIOS · {label.toUpperCase()}</span>
		</div>
		<h1 class="mb-10 vanchi-display text-5xl leading-[1.05] font-normal lg:text-7xl">
			{label}<br />
			<span class="italic">inteligente</span><br />
			para tu empresa
		</h1>
		<p class="max-w-xl text-base leading-relaxed text-base-content/70 lg:text-lg">
			Implementación de {label.toLowerCase()} con metodología GaaS. Orientado a resultados
			concretos para empresas en Huancayo, Junín y Perú.
		</p>
	</div>
</section>

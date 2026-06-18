<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';

	const sector: string = page.params.sector ?? '';

	const sectorLabels: Record<string, string> = {
		salud: 'Salud',
		legal: 'Legal',
		educacion: 'Educación'
	};

	const label = sectorLabels[sector] ?? 'Sector';
</script>

<SEO
	title={`Automatización con IA para el sector ${label} en Perú | Vanchi`}
	description={`Agentes de IA para el sector ${label.toLowerCase()}. Reducí costos operativos con automatización inteligente orientada a resultados en Huancayo, Junín y Perú.`}
	keywords={`ia sector ${sector} huancayo, automatizar ${sector} con ia junin, agente virtual ${sector} peru`}
	url={`${base}/sectores/${sector}`}
/>

<section class="flex min-h-[90dvh] items-center">
	<div class="mx-auto w-full max-w-5xl px-4">
		<div class="mb-10 flex items-center gap-2.5">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">SECTORES · {label.toUpperCase()}</span>
		</div>
		<h1 class="mb-10 vanchi-display text-5xl leading-[1.05] font-normal lg:text-7xl">
			Automatización<br />
			<span class="italic">inteligente</span><br />
			para el sector {label.toLowerCase()}
		</h1>
		<p class="max-w-xl text-base leading-relaxed text-base-content/70 lg:text-lg">
			Implementación de agentes de IA con metodología GaaS. Orientado a resultados concretos
			para empresas y profesionales del sector {label.toLowerCase()} en Perú.
		</p>
	</div>
</section>

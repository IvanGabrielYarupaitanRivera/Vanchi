<script lang="ts">
	import { resolve } from '$app/paths';
	import { ArrowUpRight } from '@lucide/svelte';
	import CommandAction from '$lib/components/ui/CommandAction/CommandAction.svelte';
	import DataBlock from '$lib/components/ui/DataBlock/DataBlock.svelte';
	import SectionLayout from '$lib/components/ui/SectionLayout/SectionLayout.svelte';
</script>

<SectionLayout
	variant="primary"
	number="04"
	label="AUTOR"
	title="Ivan Yarupaitan Rivera"
	italic_word="Rivera"
	description="Especialista en inteligencia artificial y automatización de procesos. Desarrollador de IA en Huancayo. Ingeniero de Sistemas por la Universidad Roosevelt. Construyo agentes autónomos para empresas en Junín y Perú."
>
	<div class="flex flex-col gap-px">
		<DataBlock level="compact" hover={true}>
			<span class="mb-3 block font-mono text-xs font-medium tracking-[0.15em] text-secondary"
				>FILOSOFÍA</span
			>
			<p class="font-mono text-sm leading-relaxed text-base-content/80">
				El software no debería necesitarte para funcionar. Cada agente que construyo recibe un
				objetivo, razona, usa herramientas y reporta resultados. Sin que nadie tenga que hacer clic.
			</p>
		</DataBlock>
		<a href={resolve('/(main)/metodologia')} class="block">
			<DataBlock level="compact" hover={true}>
				<span class="mb-3 block font-mono text-xs font-medium tracking-[0.15em] text-secondary"
					>MÉTODO</span
				>
				<p class="font-mono text-sm leading-relaxed text-base-content/80">
					GaaS — Generative Agent as a Service. No es SaaS. Es software que trabaja solo. Diez
					características de ingeniería que todo agente debe cumplir para considerarse autónomo.
				</p>
				<span
					class="mt-3 inline-block font-mono text-xs text-base-content transition-transform duration-100 group-hover:translate-x-1"
					>Ver metodología →</span
				>
			</DataBlock>
		</a>
	</div>

	<div class="mt-10">
		<CommandAction
			level="primary"
			label="Conocer mi trayectoria"
			href={resolve('/(main)/ivan-yarupaitan-rivera')}
			icon={ArrowUpRight}
		/>
	</div>
</SectionLayout>

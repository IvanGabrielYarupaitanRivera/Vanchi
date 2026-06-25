<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import CommandAction from '$lib/components/ui/CommandAction/CommandAction.svelte';
	import DataBlock from '$lib/components/ui/DataBlock/DataBlock.svelte';
	import SectionLayout from '$lib/components/ui/SectionLayout/SectionLayout.svelte';
</script>

<SectionLayout
	variant="primary"
	number="01"
	label="EVIDENCIA"
	title="Seis proyectos pagados por clientes reales"
	italic_word="pagados"
	description="Gobierno Regional de Junín, Universidad Roosevelt, ENCAP, colegios y estudios jurídicos. Empresa de IA en Junín con resultados comprobables. No son ejercicios. Son sistemas que funcionan en producción."
>
	<div class="flex flex-col gap-px">
		<DataBlock level="compact" hover={true}>
			<div class="flex items-start justify-between gap-4">
				<div>
					<span class="mb-2 block font-mono text-xs font-medium tracking-[0.15em] text-secondary"
						>Gobierno Regional de Junín</span
					>
					<p class="font-mono text-sm text-base-content/80">
						Gestión de informes de control con notificaciones automáticas
					</p>
				</div>
				<div class="hidden shrink-0 lg:block">
					<CommandAction
						level="secondary"
						label="Visitar"
						href="https://www.regionjunin.gob.pe/index.php"
						icon={ArrowUpRight}
					/>
				</div>
			</div>
		</DataBlock>
		<DataBlock level="compact" hover={true}>
			<div class="flex items-start justify-between gap-4">
				<div>
					<span class="mb-2 block font-mono text-xs font-medium tracking-[0.15em] text-secondary"
						>Universidad Roosevelt</span
					>
					<p class="font-mono text-sm text-base-content/80">
						3 plataformas con IA para Medicina, Farmacia y Obstetricia
					</p>
				</div>
				<div class="hidden shrink-0 lg:block">
					<CommandAction
						level="secondary"
						label="Visitar"
						href="https://www.uroosevelt.edu.pe/portal/"
						icon={ArrowUpRight}
					/>
				</div>
			</div>
		</DataBlock>
		<DataBlock level="compact" hover={true}>
			<div class="flex items-start justify-between gap-4">
				<div>
					<span class="mb-2 block font-mono text-xs font-medium tracking-[0.15em] text-secondary"
						>ENCAP</span
					>
					<p class="font-mono text-sm text-base-content/80">
						Tutor AI 24/7 con 95% de satisfacción estudiantil
					</p>
				</div>
				<div class="hidden shrink-0 lg:block">
					<CommandAction
						level="secondary"
						label="Visitar"
						href="https://www.encap.edu.pe/"
						icon={ArrowUpRight}
					/>
				</div>
			</div>
		</DataBlock>
	</div>
</SectionLayout>

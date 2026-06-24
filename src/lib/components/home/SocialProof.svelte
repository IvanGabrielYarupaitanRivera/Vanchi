<script lang="ts">
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
			<span class="mb-2 block font-mono text-xs font-medium tracking-[0.15em] text-secondary"
				>Gobierno Regional de Junín</span
			>
			<p class="font-mono text-sm text-base-content/80">
				Gestión de informes de control con notificaciones automáticas
			</p>
		</DataBlock>
		<DataBlock level="compact" hover={true}>
			<span class="mb-2 block font-mono text-xs font-medium tracking-[0.15em] text-secondary"
				>Universidad Roosevelt</span
			>
			<p class="font-mono text-sm text-base-content/80">
				3 plataformas con IA para Medicina, Farmacia y Obstetricia
			</p>
		</DataBlock>
		<DataBlock level="compact" hover={true}>
			<span class="mb-2 block font-mono text-xs font-medium tracking-[0.15em] text-secondary"
				>ENCAP</span
			>
			<p class="font-mono text-sm text-base-content/80">
				Tutor AI 24/7 con 95% de satisfacción estudiantil
			</p>
		</DataBlock>
	</div>
</SectionLayout>

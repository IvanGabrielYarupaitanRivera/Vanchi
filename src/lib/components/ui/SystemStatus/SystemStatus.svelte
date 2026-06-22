<script lang="ts">
	/**
	 * @component SystemStatus.svelte
	 * @description Indicador de estado del sistema usando DaisyUI status component.
	 * Unico componente autorizado para usar status-accent (phosphor green).
	 *
	 * ANTI-PATRONES RESTRICTOS:
	 * - NO usar bg-accent o bg-[#00C288] fuera de este componente.
	 * - NO agregar shadow, blur, glow o ring al dot.
	 * - NO usar para decorar elementos que no sean indicadores de estado.
	 */

	export type SystemStatusValue = 'active' | 'idle' | 'error';

	export interface SystemStatusProps {
		status?: SystemStatusValue;
		label?: string;
	}

	let {
		status = 'active' as SystemStatusValue,
		label
	}: SystemStatusProps = $props();

	const colorClass = $derived(
		status === 'active'
			? 'status-accent animate-pulse'
			: status === 'error'
				? 'status-error'
				: 'status-secondary'
	);
</script>

{#if label}
	<span class="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-secondary uppercase">
		<span class="status {colorClass}"></span>
		{label}
	</span>
{:else}
	<span class="status {colorClass} inline-block"></span>
{/if}

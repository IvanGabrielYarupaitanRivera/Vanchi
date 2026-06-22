<script lang="ts">
	/**
	 * @component SystemStatus.svelte
	 * @description Indicador de estado del sistema usando DaisyUI status component.
	 * Unico componente autorizado para usar status-accent (phosphor green).
	 *
	 * S6 Design:
	 * - Active/error: text-base-content (alto contraste)
	 * - Idle: text-secondary (muted)
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

	const dotClass = $derived(
		status === 'active'
			? 'status-accent animate-pulse'
			: status === 'error'
				? 'status-error'
				: 'status-secondary'
	);

	const textClass = $derived(
		status === 'idle' ? 'text-secondary' : 'text-base-content'
	);
</script>

{#if label}
	<span class="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase {textClass}">
		<span class="status {dotClass}"></span>
		{label}
	</span>
{:else}
	<span class="status {dotClass} inline-block"></span>
{/if}

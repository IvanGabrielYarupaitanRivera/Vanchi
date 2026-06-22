/**
 * @component SystemStatus.svelte
 * @description Indicador de estado del sistema. Es el UNICO componente autorizado
 * para usar `bg-accent` (phosphor green). Dot de 6px fijo.
 *
 * ANTI-PATRONES RESTRICTOS:
 * - ❌ NO usar bg-accent o bg-[#00C288] fuera de este componente.
 * - ❌ NO modificar el tamano del dot (vanchi-agent-dot = 6px fijo).
 * - ❌ NO agregar shadow, blur, glow o ring al dot.
 * - ❌ NO usar para decorar elementos que no sean indicadores de estado.
 */

<script lang="ts">
	export type SystemStatusValue = 'active' | 'idle' | 'error';

	export interface SystemStatusProps {
		/** Estado del sistema: active (verde pulse), idle (gris), error (rojo) */
		status?: SystemStatusValue;
		/** Texto opcional al lado del dot. Ej: "SYSTEM // ONLINE" */
		label?: string;
	}

	let {
		status = 'active' as SystemStatusValue,
		label
	}: SystemStatusProps = $props();

	const dotClass = $derived(
		status === 'active'
			? 'bg-accent animate-pulse'
			: status === 'error'
				? 'bg-error'
				: 'bg-secondary'
	);
</script>

{#if label}
	<span class="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-secondary uppercase">
		<span class="vanchi-agent-dot {dotClass}"></span>
		{label}
	</span>
{:else}
	<span class="vanchi-agent-dot {dotClass} inline-block"></span>
{/if}

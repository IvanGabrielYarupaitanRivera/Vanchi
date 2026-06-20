<script lang="ts">
	/**
	 * SystemStatus.svelte
	 *
	 * Único componente autorizado para el dot phosphor green (#00C288 / accent).
	 * 6px fijo. Sin glow, sin shadow, sin blur.
	 *
	 * Uso:
	 *   <SystemStatus status="active" label="SYSTEM // ONLINE" />
	 */

	type Status = 'active' | 'idle' | 'error';

	let {
		status = 'active' as Status,
		label
	}: {
		status?: Status;
		label?: string;
	} = $props();

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

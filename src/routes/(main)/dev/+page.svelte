<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Dev — Laboratorio | Vanchi</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="min-h-screen bg-base-100">
	<div class="mx-auto max-w-5xl px-4 py-16">
		<div class="mb-4 flex items-center gap-2.5">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">DEV // LABORATORIO</span>
		</div>
		<p class="mb-12 font-mono text-sm text-base-content/40">
			Seleccioná un componente para ver sus variaciones.
		</p>

		<div class="flex flex-col gap-px">
			<a
				href={resolve('/(main)/dev/heroes')}
				class="border border-base-300 bg-base-200 p-6 transition-all duration-100 hover:-translate-y-0.5 hover:border-base-content"
			>
				<h2 class="vanchi-display text-3xl font-normal">Hero</h2>
				<p class="mt-2 font-mono text-sm text-base-content/60">
					X1 — Reticula, puntos, esquinas secondary. Version definitiva.
				</p>
				<span class="mt-3 inline-block font-mono text-xs text-secondary">/dev/heroes →</span>
			</a>

			<a
				href={resolve('/(main)/dev/system-status')}
				class="border border-base-300 bg-base-200 p-6 transition-all duration-100 hover:-translate-y-0.5 hover:border-base-content"
			>
				<h2 class="vanchi-display text-3xl font-normal">SystemStatus</h2>
				<p class="mt-2 font-mono text-sm text-base-content/60">
					S1 y S2 ganadores. Nuevas variaciones: mixto, lowercase, separador.
				</p>
				<span class="mt-3 inline-block font-mono text-xs text-secondary">/dev/system-status →</span>
			</a>
		</div>
	</div>
</div>

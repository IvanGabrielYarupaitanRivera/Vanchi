<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section class="flex min-h-[90dvh] items-center">
	<div class="mx-auto w-full max-w-5xl px-4">
		<div class="mb-10 flex items-center gap-2.5">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">VANCHI · 2026</span>
		</div>

		<h1 class="mb-6 vanchi-display text-5xl leading-[1.05] font-normal lg:text-7xl">
			Tu empresa debería<br />
			<span class="italic">funcionar</span> sola
		</h1>

		<p class="mb-16 max-w-xl text-base leading-relaxed text-base-content/70 lg:text-lg">
			Construyo agentes de IA que trabajan en background. Tú defines el objetivo,
			el agente lo ejecuta. Sin dashboards, sin manuales, sin intervención humana constante.
		</p>

		<div class="flex flex-wrap gap-4">
			<a
				href={resolve('/(main)/contacto')}
				class="btn border-0 bg-base-content font-mono text-sm text-base-100 hover:opacity-90"
			>
				Automatizar mi empresa →
			</a>
			<a
				href={resolve('/(chat)/chat')}
				class="btn btn-ghost border border-base-300 font-mono text-sm hover:border-base-content"
			>
				Hablar con el agente
			</a>
		</div>
	</div>
</section>

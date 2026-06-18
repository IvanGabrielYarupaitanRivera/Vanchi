<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section class="flex min-h-[90dvh] items-center">
	<div class="mx-auto w-full max-w-5xl px-4">
		<div class="flex flex-col items-start gap-12 border-l border-base-300 pl-6 md:pl-12">
			<div class="flex items-center gap-3">
				<span class="vanchi-agent-dot animate-pulse"></span>
				<span class="vanchi-eyebrow">VANCHI · SYSTEMS ARCHIVE · 2026</span>
			</div>

			<h1 class="vanchi-display text-5xl leading-[1.1] font-normal lg:text-7xl max-w-4xl">
				Tu empresa debería<br />
				<span class="italic">funcionar</span> sola.
			</h1>

			<p class="max-w-2xl font-mono text-sm leading-relaxed text-base-content/60 lg:text-base">
				Despliego agentes de IA que resuelven objetivos de negocio de extremo a extremo.
				Diseño sistemas donde automatizo procesos de mi empresa asociada con ejecución
				autónoma en background.
			</p>

			<div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
				<a
					href={resolve('/(main)/contacto')}
					class="btn border-0 bg-base-content font-mono text-xs uppercase font-medium tracking-wider text-base-100 hover:opacity-90 transition-all duration-100 hover:-translate-y-0.5"
				>
					Automatizar mi organización →
				</a>

				<a
					href={resolve('/(chat)/chat')}
					class="btn btn-ghost border border-base-300 font-mono text-xs uppercase font-medium tracking-wider transition-all duration-100 hover:border-base-content hover:-translate-y-0.5"
				>
					Iniciar consulta con agente
				</a>
			</div>
		</div>
	</div>
</section>

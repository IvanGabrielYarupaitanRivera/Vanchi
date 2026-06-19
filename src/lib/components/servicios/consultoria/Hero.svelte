<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section class="flex min-h-[90dvh] items-center">
	<div class="mx-auto w-full max-w-5xl px-4">
		<div class="mb-10 flex items-center gap-2.5">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">03 // CONSULTORÍA</span>
		</div>
		<h1 class="mb-10 vanchi-display text-5xl leading-[1.05] font-normal lg:text-7xl">
			Sabes que necesitas<br />
			automatizar. No sabes<br />
			por dónde <span class="italic">empezar</span>
		</h1>
		<p class="max-w-xl text-base leading-relaxed text-base-content/70 lg:text-lg">
			Analizo tu operación actual, identifico los procesos que más tiempo consumen y
			te entrego una hoja de ruta concreta: qué automatizar primero, con qué herramientas
			y en cuánto tiempo. Metodología GaaS. Sin humo. Sin compromiso.
		</p>
		<div class="mt-12 flex flex-wrap gap-4">
			<a
				href={resolve('/(main)/contacto')}
				class="btn min-h-0 h-10 border border-base-content bg-base-content px-5 font-mono text-xs font-bold uppercase tracking-wider text-base-100 duration-100 hover:bg-base-content/90"
			>
				Agendar consulta gratuita →
			</a>
			<a
				href={resolve('/(main)/metodologia')}
				class="btn btn-ghost min-h-0 h-10 border border-base-300 px-5 font-mono text-xs font-bold uppercase tracking-wider text-base-content/80 duration-100 hover:bg-base-300 hover:text-base-content"
			>
				Conocer la metodología GaaS
			</a>
		</div>
	</div>
</section>

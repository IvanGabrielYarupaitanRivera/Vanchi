<script lang="ts">
	import { resolve } from '$app/paths';

	let { total }: { total: number } = $props();
</script>

<section class="flex min-h-[90dvh] items-center">
	<div class="mx-auto w-full max-w-5xl px-4">
		<div class="mb-10 flex items-center gap-2.5">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">PROYECTOS</span>
		</div>
		<h1 class="mb-10 vanchi-display text-5xl leading-[1.05] font-normal lg:text-7xl">
			Casos de éxito en<br />
			automatización<br />
			con <span class="italic">IA</span>
		</h1>
		<p class="max-w-xl text-base leading-relaxed text-base-content/70 lg:text-lg">
			{total} proyectos reales de agentes de IA, automatización de procesos y desarrollo web.
			Implementación GaaS para empresas en salud, legal y educación en Huancayo, Junín y Perú.
			Cada caso resuelve un problema concreto de negocio. Sin humo.
		</p>
		<div class="mt-12 flex flex-wrap gap-4">
			<a
				href={resolve('/(main)/contacto')}
				class="btn min-h-0 h-10 border border-base-content bg-base-content px-5 font-mono text-xs font-bold uppercase tracking-wider text-base-100 duration-100 hover:bg-base-content/90"
			>
				Proponer un proyecto →
			</a>
			<a
				href={resolve('/(main)/servicios')}
				class="btn btn-ghost min-h-0 h-10 border border-base-300 px-5 font-mono text-xs font-bold uppercase tracking-wider text-base-content/80 duration-100 hover:bg-base-300 hover:text-base-content"
			>
				Ver servicios
			</a>
		</div>
	</div>
</section>

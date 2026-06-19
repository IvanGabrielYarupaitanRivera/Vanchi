<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section class="flex min-h-[90dvh] items-center">
	<div class="mx-auto w-full max-w-5xl px-4">
		<div class="mb-10 flex items-center gap-2.5">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">02 // AUTOMATIZACIÓN</span>
		</div>
		<h1 class="mb-10 vanchi-display text-5xl leading-[1.05] font-normal lg:text-7xl">
			Tus herramientas no se hablan.<br />
			Tus procesos se <span class="italic">atoran</span>
		</h1>
		<p class="max-w-xl text-base leading-relaxed text-base-content/70 lg:text-lg">
			Conecto tus sistemas existentes para que trabajen solos. WhatsApp, Google Calendar,
			correo electrónico, base de datos, APIs. Todo orquestado para que un disparo
			en cualquier canal active el flujo completo.
		</p>
		<div class="mt-12 flex flex-wrap gap-4">
			<a
				href={resolve('/(main)/contacto')}
				class="btn min-h-0 h-10 border border-base-content bg-base-content px-5 font-mono text-xs font-bold uppercase tracking-wider text-base-100 duration-100 hover:bg-base-content/90"
			>
				Automatizar mi proceso →
			</a>
			<a
				href={resolve('/(main)/sectores')}
				class="btn btn-ghost min-h-0 h-10 border border-base-300 px-5 font-mono text-xs font-bold uppercase tracking-wider text-base-content/80 duration-100 hover:bg-base-300 hover:text-base-content"
			>
				Ver casos por sector
			</a>
		</div>
	</div>
</section>

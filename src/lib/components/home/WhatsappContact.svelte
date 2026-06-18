<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">05 // CONTACTO</span>
		</div>

		<div class="card bg-base-200 border border-base-300 p-8 transition-all duration-100 hover:border-base-content group lg:p-10">
			<h2 class="vanchi-display mb-6 text-3xl font-normal lg:text-5xl">
				Comencemos con una<br />
				<span class="italic">conversación</span> directa
			</h2>
			<p class="mb-10 max-w-xl font-mono text-sm leading-relaxed text-base-content/60">
				La forma más rápida de hablar de tu proyecto es por WhatsApp. Escribime contándome
				qué quieres automatizar y te respondo con preguntas concretas, no con un pitch.
			</p>

			<div class="flex flex-wrap items-center gap-6">
				<a
					href="https://api.whatsapp.com/send/?phone=51985942670&text=Hola%20Ivan,%20vengo%20de%20tu%20portafolio.%20Quiero%20automatizar%20procesos%20de%20mi%20empresa."
					target="_blank"
					rel="external noopener noreferrer"
					class="btn border-0 bg-base-content font-mono text-sm text-base-100 hover:opacity-90"
				>
					Abrir conversación →
				</a>
				<a
					href={resolve('/(main)/contacto')}
					class="btn btn-ghost border border-base-300 font-mono text-sm hover:border-base-content"
				>
					Más formas de contacto
				</a>
			</div>
		</div>
	</div>
</section>

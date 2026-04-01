<script lang="ts">
	import { resolve } from '$app/paths';
	import { ScrollText } from '@lucide/svelte';

	const faqs = [
		{
			id: 'uso',
			question: '¿Es difícil de usar?',
			answer:
				'No. El sistema se diseña para que tú y tu equipo lo usen con facilidad desde el primer día. Además, incluimos acompañamiento inicial para que todo quede claro.'
		},
		{
			id: 'instalacion',
			question: '¿Necesito instalar algo?',
			answer:
				'En la mayoría de casos, no. Funciona desde el navegador y celular, por lo que puedes trabajar sin instalaciones complejas.'
		},
		{
			id: 'web-existente',
			question: '¿Qué pasa si ya tengo una web?',
			answer:
				'Perfecto. Podemos mejorarla por fases o conectarla con los nuevos módulos, sin empezar de cero si no hace falta.'
		}
	] as const;
</script>

<div class="space-y-6">
	<!-- FAQ accordion -->
	<div
		class="rounded-3xl border border-white/10 bg-base-100/60 p-8 shadow-2xl backdrop-blur-lg lg:p-12"
	>
		<div class="mb-8 lg:w-2/3">
			<span class="mb-2 block text-sm font-bold tracking-widest text-primary uppercase"
				>Resolvemos tus dudas</span
			>
			<h3 class="mb-4 text-3xl leading-tight font-bold lg:text-4xl">
				Todo lo que necesitas saber, <br />
				<span class="font-serif text-base-content/50 italic">antes de decidir.</span>
			</h3>
		</div>

		<div class="space-y-3">
			{#each faqs as faq, i (faq.id)}
				<div
					class="collapse-arrow collapse rounded-2xl border border-white/10 bg-base-200/40 transition-all duration-300 hover:border-primary/25"
				>
					<input type="radio" name="faq-legal" />
					<div class="collapse-title flex items-center gap-4 py-5">
						<span class="shrink-0 font-mono text-sm font-bold text-primary/40 tabular-nums"
							>0{i + 1}</span
						>
						<span class="text-base font-semibold text-base-content">{faq.question}</span>
					</div>
					<div class="collapse-content pl-10">
						<p class="pb-2 text-sm leading-loose text-base-content/65">{faq.answer}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Legal note -->
	<div class="flex items-center justify-center gap-2 py-2 text-center">
		<ScrollText class="shrink-0 text-base-content/30" size={14} aria-hidden="true" />
		<p class="text-sm text-base-content/40">
			Al contratar, aceptas nuestras
			<a
				href={resolve('/condiciones-del-servicio')}
				class="text-primary/60 underline underline-offset-2 transition-colors duration-300 hover:text-primary"
			>
				Condiciones del Servicio
			</a>.
		</p>
	</div>
</div>

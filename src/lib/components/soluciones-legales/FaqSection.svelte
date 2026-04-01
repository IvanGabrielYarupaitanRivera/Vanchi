<script lang="ts">
	import { HelpCircleIcon } from '@lucide/svelte';

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
		<div class="mb-8 flex items-center gap-4">
			<div class="rounded-2xl bg-primary/10 p-3 ring-1 ring-primary/20">
				<HelpCircleIcon class="text-primary" size={28} />
			</div>
			<div>
				<h3 class="text-2xl font-bold text-base-content lg:text-3xl">Preguntas Frecuentes</h3>
				<p class="mt-0.5 text-sm text-base-content/50">Las dudas más comunes, respondidas.</p>
			</div>
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
</div>

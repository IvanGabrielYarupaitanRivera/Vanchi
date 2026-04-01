<script lang="ts">
	import { Files } from '@lucide/svelte';

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

	<!-- Bloque de cierre -->
	<div
		class="relative overflow-hidden rounded-3xl border border-primary/20 bg-base-100/60 px-8 py-14 text-center shadow-2xl backdrop-blur-lg lg:px-16"
	>
		<div
			class="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent"
		></div>

		<div
			class="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20"
		>
			<Files class="text-primary" size={20} />
		</div>

		<p class="mx-auto max-w-2xl text-xl leading-loose text-base-content/75 lg:text-2xl">
			No somos una agencia de marketing, somos el
			<strong
				class="bg-linear-to-r from-primary via-yellow-200 to-primary bg-clip-text font-bold text-transparent"
				>brazo tecnológico</strong
			> de tu estudio jurídico.
		</p>

		<p class="mt-6 text-sm font-bold tracking-[0.2em] text-primary/50 uppercase">
			— Vanchi Legal &nbsp;·&nbsp; Ingeniería real para abogados de élite
		</p>
	</div>
</div>

<script lang="ts">
	import { resolve } from '$app/paths';
	import { ScrollText } from '@lucide/svelte';
	import Dropdown from '$lib/components/ui/Dropdown/Dropdown.svelte';

	const faqs = [
		{
			id: 'uso',
			question: '01  ¿Es difícil de usar?',
			answer:
				'No. El sistema se diseña para que tú y tu equipo lo usen con facilidad desde el primer día. Además, incluimos acompañamiento inicial para que todo quede claro.'
		},
		{
			id: 'instalacion',
			question: '02  ¿Necesito instalar algo?',
			answer:
				'En la mayoría de casos, no. Funciona desde el navegador y celular, por lo que puedes trabajar sin instalaciones complejas.'
		},
		{
			id: 'web-existente',
			question: '03  ¿Qué pasa si ya tengo una web?',
			answer:
				'Perfecto. Podemos mejorarla por fases o conectarla con los nuevos módulos, sin empezar de cero si no hace falta.'
		}
	] as const;
</script>

<div class="vanchi-container rounded p-6 lg:p-8">
	<div class="mb-8">
		<span class="vanchi-eyebrow">Resolvemos tus dudas</span>
		<h3 class="mt-2 vanchi-display text-2xl font-normal lg:text-4xl">
			Todo lo que necesitas saber,<br />
			<span class="italic">antes de decidir.</span>
		</h3>
	</div>

	<Dropdown
		items={faqs.map((faq) => ({ title: faq.question, content: faq.answer }))}
	/>

	<div class="mt-6 flex items-center justify-center gap-2 py-2 text-center">
		<ScrollText
			class="hidden shrink-0 text-base-content/30 lg:block"
			size={14}
			aria-hidden="true"
		/>
		<p class="text-sm text-base-content/40">
			Al contratar, aceptas nuestras
			<a
				href={resolve('/(main)/condiciones-del-servicio')}
				class="text-base-content/60 underline underline-offset-2 transition-colors duration-150 hover:text-base-content"
			>
				Condiciones del Servicio
			</a>.
		</p>
	</div>
</div>

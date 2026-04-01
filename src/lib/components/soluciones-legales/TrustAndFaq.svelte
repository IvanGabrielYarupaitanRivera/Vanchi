<script lang="ts">
	import {
		ShieldCheck,
		SearchCheck,
		Clock3,
		Bot,
		Smartphone,
		Files,
		HelpCircle
	} from '@lucide/svelte';

	const comparisonRows = [
		{
			id: 'search',
			label: 'Búsqueda jurídica',
			tradicional: 'Búsqueda manual de 2 horas entre documentos y fuentes dispersas.',
			moderno: 'Búsqueda en segundos con ayuda de IA y resultados ordenados.'
		},
		{
			id: 'response',
			label: 'Atención al cliente',
			tradicional: 'Respuestas lentas y dependencia del horario de oficina.',
			moderno: 'Atención 24/7 para consultas frecuentes y mejor tiempo de respuesta.'
		},
		{
			id: 'access',
			label: 'Acceso a la información',
			tradicional: 'Dependencia de archivos físicos y búsquedas manuales.',
			moderno: 'Oficina en el bolsillo: expedientes y avances desde cualquier lugar.'
		}
	] as const;

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

<section class="relative z-10 w-full py-24">
	<div class="mx-auto w-full max-w-6xl px-4">
		<div class="mb-10">
			<span class="mb-2 block text-sm font-bold tracking-widest text-primary uppercase"
				>Confianza para decidir</span
			>
			<h2 class="text-4xl font-bold text-base-content lg:text-5xl">
				Tecnología clara, segura y pensada para abogados.
			</h2>
		</div>

		<div
			class="mb-10 rounded-3xl border border-primary/20 bg-base-100/60 p-8 shadow-2xl backdrop-blur-lg"
		>
			<div class="mb-4 flex items-center gap-3">
				<ShieldCheck class="text-primary" size={26} />
				<h3 class="text-2xl font-bold text-base-content">Seguridad y Privacidad</h3>
			</div>
			<p class="leading-loose text-base-content/80">
				Tus datos están blindados. Encriptación de nivel bancario y cumplimiento con la Ley de
				Protección de Datos Personales.
			</p>
		</div>

		<div
			class="mb-10 rounded-3xl border border-white/10 bg-base-100/60 p-8 shadow-2xl backdrop-blur-lg"
		>
			<div class="mb-6 flex items-center gap-3">
				<SearchCheck class="text-primary" size={26} />
				<h3 class="text-2xl font-bold text-base-content">Antes vs. Después</h3>
			</div>

			<div class="overflow-x-auto">
				<table class="table w-full">
					<thead>
						<tr>
							<th class="text-xs tracking-widest text-base-content/40 uppercase">Aspecto</th>
							<th class="text-xs tracking-widest text-base-content/40 uppercase">Tradicional</th>
							<th class="text-xs tracking-widest text-primary uppercase">Moderno</th>
						</tr>
					</thead>
					<tbody>
						{#each comparisonRows as row (row.id)}
							<tr>
								<td class="font-semibold text-base-content">{row.label}</td>
								<td class="text-sm text-base-content/70">{row.tradicional}</td>
								<td class="text-sm text-base-content/90">{row.moderno}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>

			<div class="mt-6 grid grid-cols-1 gap-3 lg:grid-cols-3">
				<div class="rounded-xl border border-white/10 bg-base-200/50 p-4">
					<div class="mb-2 flex items-center gap-2 text-primary"><Clock3 size={18} />Tiempo</div>
					<p class="text-sm text-base-content/70">
						Menos tareas manuales, más tiempo para estrategia legal.
					</p>
				</div>
				<div class="rounded-xl border border-white/10 bg-base-200/50 p-4">
					<div class="mb-2 flex items-center gap-2 text-primary"><Bot size={18} />Atención</div>
					<p class="text-sm text-base-content/70">
						Respuestas frecuentes sin esperar al horario de oficina.
					</p>
				</div>
				<div class="rounded-xl border border-white/10 bg-base-200/50 p-4">
					<div class="mb-2 flex items-center gap-2 text-primary">
						<Smartphone size={18} />Acceso
					</div>
					<p class="text-sm text-base-content/70">
						Información del estudio disponible desde el celular.
					</p>
				</div>
			</div>
		</div>

		<div
			class="mb-10 rounded-3xl border border-white/10 bg-base-100/60 p-8 shadow-2xl backdrop-blur-lg"
		>
			<div class="mb-6 flex items-center gap-3">
				<HelpCircle class="text-primary" size={26} />
				<h3 class="text-2xl font-bold text-base-content">Preguntas Frecuentes</h3>
			</div>

			<div class="space-y-3">
				{#each faqs as faq (faq.id)}
					<div class="collapse-arrow collapse rounded-2xl border border-white/10 bg-base-200/40">
						<input type="radio" name="faq-legal" />
						<div class="collapse-title text-base font-semibold text-base-content">
							{faq.question}
						</div>
						<div class="collapse-content">
							<p class="text-sm leading-loose text-base-content/70">{faq.answer}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div
			class="rounded-3xl border border-primary/20 bg-base-100/60 p-8 text-center shadow-2xl backdrop-blur-lg"
		>
			<div
				class="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-bold tracking-widest text-primary uppercase ring-1 ring-primary/30"
			>
				<Files size={14} />
				Cierre
			</div>
			<p class="mx-auto max-w-3xl text-lg leading-loose text-base-content/80 lg:text-xl">
				<strong class="text-primary">Vanchi Legal:</strong> No somos una agencia de marketing, somos
				el brazo tecnológico de tu estudio jurídico. Ingeniería real para abogados de élite.
			</p>
		</div>
	</div>
</section>

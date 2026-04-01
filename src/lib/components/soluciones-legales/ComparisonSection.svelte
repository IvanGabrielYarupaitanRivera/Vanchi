<script lang="ts">
	import { SearchCheck, X, Check, Clock3, Bot, Smartphone } from '@lucide/svelte';

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

	const benefitCards = [
		{
			id: 'time',
			icon: Clock3,
			label: 'Tiempo',
			desc: 'Menos tareas manuales, más horas para estrategia legal.'
		},
		{
			id: 'attention',
			icon: Bot,
			label: 'Atención',
			desc: 'Respuestas automáticas sin depender del horario de oficina.'
		},
		{
			id: 'access',
			icon: Smartphone,
			label: 'Acceso',
			desc: 'Información del estudio desde cualquier dispositivo.'
		}
	] as const;
</script>

<div
	class="rounded-3xl border border-white/10 bg-base-100/60 p-8 shadow-2xl backdrop-blur-lg lg:p-12"
>
	<div class="mb-8 flex items-center gap-4">
		<div class="rounded-2xl bg-primary/10 p-3 ring-1 ring-primary/20">
			<SearchCheck class="text-primary" size={28} />
		</div>
		<div>
			<h3 class="text-2xl font-bold text-base-content lg:text-3xl">Antes vs. Después</h3>
			<p class="mt-0.5 text-sm text-base-content/50">La diferencia en la práctica diaria</p>
		</div>
	</div>

	<!-- Column headers (desktop only) -->
	<div class="mb-4 hidden grid-cols-2 gap-px px-1 lg:grid">
		<p class="px-5 text-xs font-bold tracking-widest text-base-content/30 uppercase">Tradicional</p>
		<p class="px-5 text-xs font-bold tracking-widest text-primary/60 uppercase">Con Vanchi Legal</p>
	</div>

	<!-- Comparison rows -->
	<div class="space-y-3">
		{#each comparisonRows as row (row.id)}
			<div class="overflow-hidden rounded-2xl border border-white/10">
				<!-- Row label -->
				<div class="border-b border-white/5 bg-base-300/30 px-5 py-2.5">
					<span class="text-xs font-bold tracking-widest text-base-content/35 uppercase"
						>{row.label}</span
					>
				</div>
				<!-- Two-column content -->
				<div class="grid grid-cols-1 lg:grid-cols-2">
					<div class="flex items-start gap-3 bg-base-200/20 p-5">
						<X class="mt-0.5 shrink-0 text-error/50" size={15} />
						<p class="text-sm leading-relaxed text-base-content/55">{row.tradicional}</p>
					</div>
					<div
						class="flex items-start gap-3 border-t border-white/5 bg-primary/5 p-5 lg:border-t-0 lg:border-l"
					>
						<Check class="mt-0.5 shrink-0 text-primary" size={15} />
						<p class="text-sm leading-relaxed text-base-content/90">{row.moderno}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Benefit cards -->
	<div class="mt-8 grid grid-cols-1 gap-3 lg:grid-cols-3">
		{#each benefitCards as card (card.id)}
			{@const Icon = card.icon}
			<div
				class="rounded-xl border border-white/10 bg-base-200/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(197,160,89,0.10)]"
			>
				<div class="mb-3 flex items-center gap-2">
					<div class="rounded-lg bg-primary/10 p-1.5">
						<Icon class="text-primary" size={16} />
					</div>
					<span class="text-sm font-bold text-base-content">{card.label}</span>
				</div>
				<p class="text-sm leading-relaxed text-base-content/60">{card.desc}</p>
			</div>
		{/each}
	</div>
</div>

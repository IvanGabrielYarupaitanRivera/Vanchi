<script lang="ts">
	interface Props {
		onSelect: (text: string) => void;
	}

	let { onSelect = () => {} }: Props = $props();

	const suggestions = [
		'¿Qué proyectos reales has hecho?',
		'¿Cómo funciona la metodología GaaS?',
		'¿Cuánto cuesta implementar un agente de IA?'
	];
</script>

<div class="flex flex-col items-center text-center">
	<h2 class="vanchi-display text-2xl text-base-content sm:text-3xl sm:leading-tight">
		Habla con el agente
	</h2>
	<p class="mt-3 max-w-md text-sm leading-relaxed text-base-content/50">
		No hay un embudo de ventas acá. Preguntale directamente al agente lo que quieras saber:
		proyectos, metodología, precios o si tu caso tiene sentido. No hay truco.
	</p>
	<div class="mt-8 space-y-2">
		<p class="text-xs tracking-wider text-base-content/30 uppercase">Preguntale al agente</p>
		{#each suggestions as s (s)}
			<button
				class="block w-full cursor-pointer border-b border-base-300 py-2 text-left font-mono text-sm text-base-content/70 transition-colors duration-100 hover:text-base-content"
				onclick={() => onSelect(s)}
			>
				{s}
			</button>
		{/each}
	</div>
</div>

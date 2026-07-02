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
	<h1 class="vanchi-display text-2xl text-base-content sm:text-3xl sm:leading-tight">
		Hablá con el agente. Sin demo armada, sin truco.
	</h1>
	<p class="mt-3 max-w-md text-sm leading-relaxed text-base-content/50">
		Este agente conoce mis proyectos reales, la metodología GaaS, los precios y los sectores
		en los que trabajo. Sabe de ENCAP, Molaric, Junín360 y cada caso real. Preguntale lo que
		quieras: no es una demo armada con respuestas prefabricadas.
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

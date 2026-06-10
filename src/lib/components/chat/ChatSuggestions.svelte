<script lang="ts">
	interface Props {
		onSelect: (text: string) => void;
	}

	let { onSelect = () => {} }: Props = $props();

	const suggestions = [
		'¿Qué tipo de proyectos has hecho?',
		'¿Puedes construir un CRM o sistema web?',
		'¿Cuánto cuesta un proyecto con Vanchi?'
	];
</script>

<div class="flex flex-col items-center text-center">
	<h2 class="font-display text-2xl text-base-content sm:text-3xl sm:leading-tight">
		¿Qué información buscas?
	</h2>
	<p class="mt-3 max-w-md text-sm leading-relaxed text-base-content/50">
		Soy el asistente de <span class="text-primary">Vanchi</span>. Pregúntame sobre
		proyectos, tecnologías, servicios o cualquier cosa que Ivan pueda hacer por ti.
	</p>
	<div class="mt-8 space-y-2">
		<p class="text-xs tracking-wider text-base-content/30 uppercase">Sugerencias</p>
		{#each suggestions as s (s)}
			<button
				class="block w-full cursor-pointer border-b border-white/5 py-2 text-left text-sm text-base-content/70 transition-all duration-300 hover:border-primary hover:text-base-content"
				onclick={() => onSelect(s)}
			>
				{s}
			</button>
		{/each}
	</div>
</div>

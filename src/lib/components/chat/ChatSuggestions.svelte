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

<div class="flex flex-col justify-center py-12">
	<p class="text-sm leading-relaxed text-base-content/60">
		Soy el asistente de <span class="text-primary">Vanchi</span>. Estoy aquí para ayudarte a
		entender mejor lo que Ivan hace, ha hecho y puede hacer por ti.
	</p>
	<div class="space-y-2 pt-6">
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

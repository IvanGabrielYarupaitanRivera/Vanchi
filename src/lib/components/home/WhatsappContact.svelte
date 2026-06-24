<script lang="ts">
	import { resolve } from '$app/paths';
	import { MessageCircle, ArrowUpRight } from '@lucide/svelte';
	import CommandAction from '$lib/components/ui/CommandAction/CommandAction.svelte';
	import DataBlock from '$lib/components/ui/DataBlock/DataBlock.svelte';
	import SectionLayout from '$lib/components/ui/SectionLayout/SectionLayout.svelte';
</script>

<SectionLayout
	variant="primary"
	number="05"
	label="CONTACTO"
	title="Comencemos con una conversación directa"
	italic_word="conversación"
	description="La forma más rápida de hablar de tu proyecto es por WhatsApp. Escribime contándome qué quieres automatizar y te respondo con preguntas concretas, no con un pitch."
>
	<DataBlock hover={true}>
		<div class="flex flex-wrap items-center gap-6">
			<CommandAction
				level="primary"
				label="Abrir conversación"
				href="https://api.whatsapp.com/send/?phone=51985942670&text=Hola%20Ivan,%20vengo%20de%20tu%20portafolio.%20Quiero%20automatizar%20procesos%20de%20mi%20empresa."
				target="_blank"
				rel="external noopener noreferrer"
				icon={MessageCircle}
			/>
			<CommandAction
				level="outline-primary"
				label="Más formas de contacto"
				href={resolve('/(main)/contacto')}
				icon={ArrowUpRight}
			/>
		</div>
	</DataBlock>
</SectionLayout>

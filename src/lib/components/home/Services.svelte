<script lang="ts">
	import { fly } from 'svelte/transition';
	import CardService from './CardService.svelte';
	import { SERVICES } from '$lib/constants/services';

	let { onSelectService }: { onSelectService: (title: string) => void } = $props();
</script>

<section class="w-full py-20 lg:py-32" id="servicios">
	<div class="container mx-auto px-4">
		<!-- Header de Sección -->
		<div class="mb-8 text-center">
			<p
				in:fly={{ y: 30, duration: 800, delay: 100 }}
				class="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/8 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-primary uppercase"
			>
				Soluciones activables dentro de WaaS
			</p>
			<h2 in:fly={{ y: 30, duration: 800, delay: 200 }} class="mb-4 text-3xl font-bold lg:text-5xl">
				Soluciones que puedes
				<span
					class="bg-linear-to-r from-primary via-primary to-primary bg-clip-text font-serif text-transparent italic"
				>
					escalar.
				</span>
			</h2>
			<p
				in:fly={{ y: 30, duration: 800, delay: 400 }}
				class="mx-auto max-w-3xl text-base text-base-content/60 lg:text-lg"
			>
				Estas soluciones no compiten con el plan principal: lo fortalecen. Con
				<span class="font-semibold text-base-content">WaaS</span> empiezas con una base sólida y, según
				tu etapa, activas capacidades como SEO, IA, catálogo o sistemas internos sin entrar en un proceso
				de cotización confuso desde el primer clic.
			</p>
		</div>

		<!-- Grid de Servicios -->
		<div class="grid grid-cols-1 gap-8 py-8 lg:grid-cols-2">
			{#each SERVICES as service, i (service.id)}
				<CardService {service} {i} {onSelectService} />
			{/each}
		</div>
	</div>
</section>

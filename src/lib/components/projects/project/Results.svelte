<script lang="ts">
	import { CheckCheckIcon, CircleCheck, Lightbulb } from '@lucide/svelte';
	import { fly } from 'svelte/transition';

	interface Metrics {
		value: string;
		label: string;
	}

	interface Results {
		metrics: Metrics[];
		feedback: string;
	}

	let { results }: { results: Results } = $props();
</script>

<section class="w-full py-20 lg:py-32">
	<div class="container mx-auto px-4">
		<!-- Header de Sección -->
		<div class="mb-8 text-center">
			<div in:fly={{ y: 30, duration: 800, delay: 200 }} class="mb-4 badge badge-soft">
				<CheckCheckIcon size={14} />
				Resultados
			</div>
			<h2
				in:fly={{ y: 30, duration: 1000, delay: 400 }}
				class="mb-4 text-3xl font-bold lg:text-5xl"
			>
				Los <span class="font-serif text-primary italic">Resultados</span>
			</h2>
		</div>
	</div>
</section>

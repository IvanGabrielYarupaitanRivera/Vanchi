<script lang="ts">
	import { CheckCheckIcon } from '@lucide/svelte';
	import { fly } from 'svelte/transition';

	interface Solution {
		concept: string;
		decisions: string[];
	}

	let { solution }: { solution: Solution } = $props();
</script>

<section class="w-full py-20 lg:py-32">
	<div class="container mx-auto px-4">
		<!-- Header de Sección -->
		<div class="mb-8 text-center">
			<div in:fly={{ y: 30, duration: 800, delay: 200 }} class="mb-4 badge badge-soft">
				<CheckCheckIcon size={14} />
				Solución Propuesta
			</div>
			<h2
				in:fly={{ y: 30, duration: 1000, delay: 400 }}
				class="mb-4 text-3xl font-bold lg:text-5xl"
			>
				La <span class="font-serif text-primary italic">Solución</span>
			</h2>
		</div>

		<div class="flex flex-col gap-8">
			<!-- Card: Concepto de la Solución -->
			<article
				in:fly={{ y: 40, duration: 1000, delay: 600 }}
				class="group card border border-white/5 bg-base-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
			>
				<div class="card-body p-8"></div>
			</article>
		</div>
	</div>
</section>

<script lang="ts">
	import {
		ChartBarIncreasing,
		CheckCheckIcon,
		CircleCheck,
		CircleUserRound,
		Lightbulb,
		MemoryStick
	} from '@lucide/svelte';
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

		<div class="flex flex-col gap-8">
			<!-- Card: Métricas de los resultados -->
			<article
				in:fly={{ y: 40, duration: 1000, delay: 600 }}
				class="group card border border-white/5 bg-base-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
			>
				<div class="card-body p-8">
					<div class="mb-4 flex items-center gap-3">
						<ChartBarIncreasing size={24} class="text-primary" />
						<h4 class="text-sm font-bold tracking-widest uppercase">Métricas</h4>
					</div>

					<div
						class="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:divide-x lg:divide-white/10"
					>
						{#each results.metrics as metric}
							<div class="flex flex-col items-center justify-center gap-6 px-4">
								<span class="font-serif text-5xl font-bold text-success lg:text-6xl">
									{metric.value}
								</span>
								<span class="text-xs text-base-content/60 uppercase lg:text-sm">
									{metric.label}
								</span>
							</div>
						{/each}
					</div>
				</div>
			</article>

			<!-- Card: Feedback -->
			<article
				in:fly={{ y: 40, duration: 1000, delay: 600 }}
				class="group card border border-white/5 bg-base-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
			>
				<div class="card-body p-8">
					<div class="mb-4 flex items-center gap-3">
						<CircleUserRound size={24} class="text-primary" />
						<h4 class="text-sm font-bold tracking-widest uppercase">Feedback</h4>
					</div>

					<blockquote
						class="border-l-4 border-primary pl-6 text-xl leading-loose text-base-content/90 italic lg:text-2xl"
					>
						"{results.feedback}"
					</blockquote>
				</div>
			</article>
		</div>
	</div>
</section>

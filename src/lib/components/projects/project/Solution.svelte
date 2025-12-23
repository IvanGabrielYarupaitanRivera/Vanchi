<script lang="ts">
	import { CheckCheckIcon, CircleCheck, Lightbulb } from '@lucide/svelte';
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
				<div class="card-body p-8">
					<div class="mb-4 flex items-center gap-3">
						<Lightbulb size={24} class="text-primary" />
						<h4 class="text-sm font-bold tracking-widest uppercase">Concepto</h4>
					</div>

					<p class="text-lg text-pretty text-base-content/80">
						{solution.concept}
					</p>
				</div>
			</article>

			<!-- Card: Decisiones de Diseño -->
			<article
				in:fly={{ y: 40, duration: 1000, delay: 600 }}
				class="group card border border-white/5 bg-base-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
			>
				<div class="card-body p-8">
					<div class="mb-4 flex items-center gap-3">
						<CircleCheck size={24} class="text-primary" />
						<h4 class="text-sm font-bold tracking-widest uppercase">Decisiones de Diseño</h4>
					</div>

					<ul class="grid gap-6 lg:grid-cols-3">
						{#each solution.decisions as decision, i}
							<li
								class="group card border border-white/5 bg-white/5 p-6 transition-colors duration-500 hover:border-primary/30 hover:bg-white/10"
							>
								<div class="flex items-center gap-4">
									<span class="badge h-8 w-8 rounded-full text-xs font-bold badge-primary">
										{String(i + 1).padStart(2, '0')}
									</span>
									<p class="text-sm leading-loose text-base-content/70 lg:text-base">
										{decision}
									</p>
								</div>
							</li>
						{/each}
					</ul>
				</div>
			</article>
		</div>
	</div>
</section>

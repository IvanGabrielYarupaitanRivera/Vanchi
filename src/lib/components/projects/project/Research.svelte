<script lang="ts">
	import { Search, Lightbulb, CircleCheck } from '@lucide/svelte';
	import { fly } from 'svelte/transition';

	interface Research {
		methods: string[];
		findings: { title: string; desc: string }[];
		insight: string;
	}

	let { research }: { research: Research } = $props();
</script>

<section class="w-full py-20 lg:py-32">
	<div class="container mx-auto px-4">
		<!-- Header de Sección -->
		<div class="mb-8 text-center">
			<div in:fly={{ y: 30, duration: 800, delay: 200 }} class="mb-4 badge badge-soft">
				<Search size={14} />
				Investigación
			</div>
			<h2
				in:fly={{ y: 30, duration: 1000, delay: 400 }}
				class="mb-4 text-3xl font-bold lg:text-5xl"
			>
				Descubriendo el
				<span class="font-serif text-primary italic"> Problema Real </span>
			</h2>
		</div>

		<div class="flex flex-col gap-8">
			<!-- Card: Métodos de Investigación -->
			<article
				in:fly={{ y: 40, duration: 1000, delay: 600 }}
				class="group card border border-white/5 bg-base-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
			>
				<div class="card-body p-8">
					<div class="mb-4 flex items-center gap-3">
						<CircleCheck size={24} class="text-primary" />
						<h4 class="text-sm font-bold tracking-widest uppercase">Métodos Aplicados</h4>
					</div>

					<ul class="grid gap-6 lg:grid-cols-3">
						{#each research.methods as method, i}
							<li
								class="group card border border-white/5 bg-white/5 p-6 transition-colors duration-500 hover:border-primary/30 hover:bg-white/10"
							>
								<div class="flex items-center gap-4">
									<span class="badge h-8 w-8 rounded-full text-xs font-bold badge-primary">
										{String(i + 1).padStart(2, '0')}
									</span>
									<p class="text-sm leading-loose text-base-content/70 lg:text-base">
										{method}
									</p>
								</div>
							</li>
						{/each}
					</ul>
				</div>
			</article>

			<!-- Card: Hallazgos Clave -->
			<article
				in:fly={{ y: 40, duration: 1000, delay: 600 }}
				class="group card border border-white/5 bg-base-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
			>
				<div class="card-body p-8">
					<div class="mb-4 flex items-center gap-3">
						<Lightbulb size={24} class="text-primary" />
						<h4 class="text-sm font-bold tracking-widest uppercase">Hallazgos Clave</h4>
					</div>

					<div class="grid gap-6 lg:grid-cols-2">
						{#each research.findings as finding, i}
							<div
								in:fly={{ y: 20, duration: 800, delay: 1000 + i * 100 }}
								class="card border border-white/5 bg-white/5 p-6 transition-all duration-300 ease-out hover:border-primary/20 hover:bg-white/10"
							>
								<h4 class="mb-3 flex items-center gap-2 font-bold text-primary">
									<span class="text-lg">{finding.title}</span>
								</h4>
								<p class="text-sm leading-loose text-base-content/70">
									{finding.desc}
								</p>
							</div>
						{/each}
					</div>
				</div>
			</article>

			<!-- Card: Insight Final (Golden Highlight) -->
			<article
				in:fly={{ y: 40, duration: 1000, delay: 600 }}
				class="group card border border-white/5 bg-base-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
			>
				<div class="card-body p-8">
					<div class="mb-4 flex items-center gap-3">
						<Lightbulb size={24} class="text-primary" />
						<h4 class="text-sm font-bold tracking-widest uppercase">Insight Principal</h4>
					</div>

					<blockquote
						class="border-l-4 border-primary pl-6 text-xl leading-loose text-base-content/90 italic lg:text-2xl"
					>
						"{research.insight}"
					</blockquote>
				</div>
			</article>
		</div>
	</div>
</section>

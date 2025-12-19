<script lang="ts">
	import { fly } from 'svelte/transition';
	import { CircleAlert, Building2, ShieldAlert } from '@lucide/svelte';

	interface Context {
		client: string;
		logo: string;
		problem: string;
		constraints: string[];
	}

	let { context }: { context: Context } = $props();
</script>

<section class="w-full py-20 lg:py-32">
	<div class="container mx-auto px-4">
		<!-- Header de Sección -->
		<div class="mb-8 text-center">
			<div in:fly={{ y: 30, duration: 800, delay: 200 }} class="mb-4 badge badge-soft">
				<CircleAlert size={14} />
				Contexto del Proyecto
			</div>
			<h2
				in:fly={{ y: 30, duration: 1000, delay: 400 }}
				class="mb-4 text-3xl font-bold lg:text-5xl"
			>
				El <span class="font-serif text-primary italic">Desafío</span>
			</h2>
		</div>

		<div class="flex flex-col gap-8">
			<!-- Card: El Problema -->
			<article
				in:fly={{ y: 40, duration: 1000, delay: 600 }}
				class="group card border border-white/5 bg-base-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
			>
				<div class="card-body p-8">
					<div class="flex flex-col items-center justify-between gap-6 lg:flex-row">
						<div class="flex items-center gap-6">
							<div
								class="flex h-14 w-auto items-center justify-center grayscale transition-all duration-500 group-hover:grayscale-0"
							>
								<enhanced:img
									src={context.logo}
									alt={`Logo de ${context.client}`}
									class="h-full w-full object-contain"
								/>
							</div>
							<div>
								<p class="text-xs font-bold tracking-widest text-primary/60 uppercase">Cliente</p>
								<h3 class="text-xl font-bold text-pretty text-base-content lg:text-2xl">
									{context.client}
								</h3>
							</div>
						</div>
					</div>

					<div class="divider"></div>

					<h4 class="mb-2 text-sm font-bold tracking-widest text-primary/60 uppercase">
						Problema Principal
					</h4>
					<p class=" text-base text-pretty text-base-content/80 lg:text-xl">
						{context.problem}
					</p>
				</div>
			</article>

			<!-- Card: Restricciones -->
			<article
				in:fly={{ y: 40, duration: 1000, delay: 800 }}
				class="card border border-white/10 bg-base-100/40 backdrop-blur-md transition-all duration-300 hover:border-primary/20"
			>
				<div class="card-body p-8 lg:p-12">
					<div class="mb-8 flex items-center gap-3">
						<Building2 size={24} class="text-primary" />
						<h4 class="text-sm font-bold tracking-widest uppercase">Restricciones del Entorno</h4>
					</div>

					<ul class="grid gap-4 lg:grid-cols-3">
						{#each context.constraints as constraint, i}
							<li
								class="flex flex-col gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 transition-colors hover:bg-white/10"
							>
								<span class="badge badge-sm font-bold badge-primary">{i + 1}</span>
								<p class="text-sm leading-relaxed text-base-content/70">
									{constraint}
								</p>
							</li>
						{/each}
					</ul>
				</div>
			</article>
		</div>
	</div>
</section>

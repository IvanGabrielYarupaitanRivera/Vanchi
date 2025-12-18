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

		<div class="grid gap-12 lg:grid-cols-5 lg:gap-16">
			<!-- Left Column: Client & Problem -->
			<div in:fly={{ x: -30, duration: 1000, delay: 600 }} class="lg:col-span-3">
				<!-- Client Card -->
				<div
					class="group mb-8 overflow-hidden rounded-2xl border border-white/10 bg-base-100/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-primary/30"
				>
					<div class="mb-6 flex items-center gap-4">
						<div
							class="flex h-16 w-16 items-center justify-center rounded-xl bg-white/5 p-3 transition-transform duration-300 group-hover:scale-110"
						>
							<enhanced:img
								src={context.logo}
								alt={`Logo de ${context.client}`}
								class="h-full w-full object-contain"
							/>
						</div>
						<div>
							<dt class="mb-1 text-xs tracking-wider text-base-content/50 uppercase">Cliente</dt>
							<dd class="text-xl font-bold text-base-content lg:text-2xl">
								{context.client}
							</dd>
						</div>
					</div>

					<div
						class="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent"
					></div>

					<div class="mt-6">
						<dt
							class="mb-3 flex items-center gap-2 text-sm font-bold tracking-widest text-primary uppercase"
						>
							<ShieldAlert size={16} />
							Problema Principal
						</dt>
						<dd class="text-lg leading-loose text-base-content/80">
							{context.problem}
						</dd>
					</div>
				</div>
			</div>

			<!-- Right Column: Constraints -->
			<aside in:fly={{ x: 30, duration: 1000, delay: 800 }} class="lg:col-span-2">
				<div
					class="sticky top-8 rounded-2xl border border-white/10 bg-linear-to-br from-base-100/60 to-base-100/20 p-6 backdrop-blur-xl lg:p-8"
				>
					<h3
						class="mb-6 flex items-center gap-2 text-sm font-bold tracking-widest text-base-content/70 uppercase"
					>
						<Building2 size={16} class="text-primary" />
						Restricciones
					</h3>

					<ul class="space-y-4">
						{#each context.constraints as constraint, i}
							<li
								in:fly={{ y: 20, duration: 800, delay: 1000 + i * 100 }}
								class="group flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-4 transition-all duration-300 hover:border-primary/20 hover:bg-white/10"
							>
								<span
									class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary"
								>
									{i + 1}
								</span>
								<span class="leading-relaxed text-base-content/80">
									{constraint}
								</span>
							</li>
						{/each}
					</ul>
				</div>
			</aside>
		</div>
	</div>
</section>

<script lang="ts">
	import { CircleAlert, Layers, User } from '@lucide/svelte';
	import { fly } from 'svelte/transition';

	interface MyRole {
		description: string;
		deliverables: string[];
	}

	let { myRole }: { myRole: MyRole } = $props();
</script>

<section class="w-full py-20 lg:py-32">
	<div class="container mx-auto px-4">
		<!-- Header de Sección -->
		<div class="mb-8 text-center">
			<div in:fly={{ y: 30, duration: 800, delay: 200 }} class="mb-4 badge badge-soft">
				<CircleAlert size={14} />
				Mi Rol
			</div>
			<h2
				in:fly={{ y: 30, duration: 1000, delay: 400 }}
				class="mb-4 text-3xl font-bold lg:text-5xl"
			>
				El Rol
				<span class="font-serif text-primary italic"> Desempeñado </span>
			</h2>
		</div>

		<article class="flex flex-col gap-8">
			<article
				in:fly={{ y: 40, duration: 1000, delay: 600 }}
				class="card border border-white/5 bg-base-300 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
			>
				<div class="card-body p-8">
					<div class="mb-4 flex items-center gap-3">
						<User size={24} class="text-primary" />
						<h4 class="text-sm font-bold tracking-widest uppercase">Descripción del Rol</h4>
					</div>
					<p class="text-lg text-pretty text-base-content/80">
						{myRole.description}
					</p>
				</div>
			</article>

			<article
				in:fly={{ y: 40, duration: 1000, delay: 600 }}
				class="card border border-white/5 bg-base-300 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(211,163,41,0.15)]"
			>
				<div class="card-body p-8">
					{#if myRole.deliverables.length > 0}
						<div class="mb-4 flex items-center gap-3">
							<Layers size={24} class="text-primary" />
							<h4 class="text-sm font-bold tracking-widest uppercase">Entregables del Rol</h4>
						</div>

						<!-- Grid de Entregables (Luxury Cards) -->
						<ul
							id="deliverables-list"
							aria-labelledby="deliverables-heading"
							class="grid gap-6
						lg:grid-cols-2"
						>
							{#each myRole.deliverables as deliverable, i}
								<li
									in:fly={{ y: 20, duration: 800, delay: 800 + i * 100 }}
									class="group card border border-white/5 bg-white/5 p-6 transition-colors duration-500 hover:border-primary/30 hover:bg-white/10"
								>
									<div class="flex items-start gap-4">
										<!-- Número Badge -->
										<span class="badge h-8 w-8 rounded-full text-xs font-bold badge-primary">
											{String(i + 1).padStart(2, '0')}
										</span>

										<!-- Texto del Entregable -->
										<p class="text-sm leading-loose text-base-content/70 lg:text-base">
											{deliverable}
										</p>
									</div>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			</article>
		</article>
	</div>
</section>

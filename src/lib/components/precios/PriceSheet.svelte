<script lang="ts">
	import type { Component } from '@lucide/svelte';

	interface Tier {
		num: string;
		name: string;
		price: string;
		desc: string;
		features: string[];
		icon?: Component;
		highlight?: boolean;
	}

	let { tiers, whatsappUrl }: { tiers: Tier[]; whatsappUrl: string } = $props();
</script>

<section class="w-full py-40">
	<div class="max-w-5xl mx-auto px-4">
		<p class="vanchi-eyebrow mb-16">AGENTES DE IA</p>

		{#each tiers as tier, i (tier.num)}
			<article class="grid gap-10 py-16 vanchi-hairline {i === 0 ? 'border-t' : 'border-t'} lg:grid-cols-[280px_1fr] lg:gap-24">
				<div>
					<p class="mb-3 font-mono text-xs font-medium tracking-[0.15em] text-secondary">{tier.num}</p>
					<h2 class="vanchi-display text-4xl font-normal lg:text-5xl">{tier.name}</h2>
					<p class="vanchi-display mt-6 text-2xl font-normal text-base-content/80 tabular-nums lg:text-3xl">
						{tier.price}
					</p>
				</div>

				<div>
					<p class="mb-10 max-w-prose text-sm leading-relaxed text-base-content/60">
						{tier.desc}
					</p>
					<ul class="space-y-4 font-mono text-sm leading-relaxed text-base-content/80">
						{#each tier.features as feature (feature)}
							<li class="flex items-start gap-3">
								<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-base-content/30"></span>
								<span>{feature}</span>
							</li>
						{/each}
					</ul>
				</div>
			</article>
		{/each}

		<div class="mt-16 flex flex-wrap items-center gap-6">
			<a
				href={whatsappUrl}
				target="_blank"
				rel="external noopener noreferrer"
				class="btn border-0 bg-base-content font-mono text-sm text-base-100 hover:opacity-90"
			>
				Consultar por WhatsApp →
			</a>
			<p class="font-mono text-xs text-secondary">Respuesta en menos de 24 horas.</p>
		</div>
	</div>
</section>

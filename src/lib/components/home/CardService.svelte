<script lang="ts">
	import { ArrowRight, Sparkles } from '@lucide/svelte';
	import { fly } from 'svelte/transition';

	type Service = {
		id: number;
		title: string;
		description: string;
	};

	let { service, i }: { service: Service; i: number } = $props();
</script>

<article
	in:fly={{ y: 30, duration: 800, delay: 200 + i * 100 }}
	class="group relative h-[650px] w-full overflow-hidden rounded-4xl border border-white/10 bg-base-100 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(197,160,89,0.1)]"
>
	<!-- 1. Top Glow (Ambient Light Source) -->
	<div
		class="pointer-events-none absolute -top-24 left-1/2 h-[300px] w-[120%] -translate-x-1/2 rounded-full bg-primary/20 blur-[80px] transition-opacity duration-500 group-hover:bg-primary/30"
	></div>

	<!-- 2. Content Section (Top) -->
	<div class="relative z-20 flex flex-col items-center px-8 pt-12 text-center">
		<h3 class="mb-4 text-3xl font-bold text-white lg:text-4xl">
			{service.title}
		</h3>
		<p class="max-w-sm text-base leading-loose text-base-content/70">
			{service.description}
		</p>

		<!-- Tech Badge (Floating UI Element like image) -->
		<div class="relative mt-8">
			<div
				class="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-primary backdrop-blur-md transition-colors group-hover:border-primary/30 group-hover:bg-primary/10"
			>
				<Sparkles size={14} />
				<span>Vanchi System</span>
			</div>

			<!-- Decorative Lines (Connecting badge to model) -->
			<svg
				class="absolute top-full left-1/2 h-16 w-64 -translate-x-1/2 text-white/10"
				viewBox="0 0 256 64"
				fill="none"
				stroke="currentColor"
			>
				<path d="M128 0 V20 M128 20 H40 V64 M128 20 H216 V64" stroke-width="1" />
				<circle cx="128" cy="0" r="2" fill="currentColor" class="text-primary" />
			</svg>
		</div>
	</div>

	<!-- 3. 3D Model Container (Bottom) -->
	<div class="absolute top-[40%] right-0 bottom-0 left-0 z-10 flex items-end justify-center pb-12">
		<!-- Placeholder Visual -->
		<div
			class="relative flex h-full w-full items-center justify-center transition-transform duration-700 group-hover:scale-105"
		>
			<!-- Radial Glow behind model -->
			<div
				class="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[60px]"
			></div>

			<!-- Text Placeholder for 3D Model -->
			<div class="relative z-10 rounded-xl border border-dashed border-white/10 p-8 text-center">
				<span class="block text-sm font-medium text-white/40">Modelo 3D Aquí</span>
				<span class="text-xs text-white/20">(Speedometer / Abstract Shape)</span>
			</div>
		</div>
	</div>

	<!-- 4. Bottom Action (Hover Reveal) -->
	<div
		class="absolute right-8 bottom-8 z-30 flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
	>
		<span class="text-sm font-bold text-primary">Explorar</span>
		<div class="rounded-full bg-primary/10 p-2 text-primary">
			<ArrowRight size={16} />
		</div>
	</div>

	<!-- Glass Overlay Texture -->
	<div class="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]"></div>
</article>
<div class="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]"></div>

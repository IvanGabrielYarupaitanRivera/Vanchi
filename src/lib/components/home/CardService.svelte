<script lang="ts">
	import { ArrowRight, Sparkles } from '@lucide/svelte';
	import { fly } from 'svelte/transition';

	type Service = {
		id: number;
		title: string;
		description: string;
		image?: string;
	};

	let { service, i }: { service: Service; i: number } = $props();
</script>

<article
	in:fly={{ y: 30, duration: 800, delay: 200 + i * 100 }}
	class="group relative h-[500px] w-full overflow-hidden rounded-[2.5rem] bg-[#050505] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_80px_-20px_rgba(197,160,89,0.15)]"
>
	<!-- 1. Image Background (Top Area) -->
	<div class="absolute inset-x-0 top-0 h-[60%] overflow-hidden">
		<!-- Overlay Gradient (Sutil tinte dorado) -->
		<div
			class="absolute inset-0 z-10 bg-primary/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0"
		></div>

		<img
			src={service.image}
			alt={service.title}
			class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
		/>

		<!-- Top Badge (Floating) -->
		<div class="absolute top-6 right-6 z-20">
			<div
				class="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[10px] font-bold tracking-widest text-white uppercase backdrop-blur-md"
			>
				<Sparkles size={10} class="text-primary" />
				<span>Vanchi</span>
			</div>
		</div>
	</div>

	<!-- 2. Content Card (Bottom Area with "Tab" effect) -->
	<!-- rounded-tr-[3.5rem] crea el efecto de "Pestaña de Carpeta" asimétrica -->
	<div
		class="absolute right-0 bottom-0 left-0 flex h-[50%] flex-col justify-between rounded-tr-[3.5rem] border-t border-r border-white/5 bg-[#080808] p-8 transition-all duration-500 group-hover:h-[55%]"
	>
		<!-- Top Content -->
		<div class="flex flex-col gap-3 pr-4">
			<span class="text-[10px] font-bold tracking-widest text-primary/60 uppercase">
				Solución Digital
			</span>
			<h3
				class="font-serif text-3xl leading-none font-medium text-white transition-colors group-hover:text-primary"
			>
				{service.title}
			</h3>
			<p class="line-clamp-2 text-sm leading-loose text-white/50">
				{service.description}
			</p>
		</div>

		<!-- Footer Info -->
		<div class="flex items-end justify-between border-t border-white/5 pt-4">
			<div class="flex flex-col">
				<span class="font-serif text-3xl font-bold text-white/20">0{service.id}</span>
				<span class="text-[10px] text-white/30">Service ID</span>
			</div>

			<div
				class="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-all duration-300 group-hover:scale-110 hover:bg-primary hover:text-black"
			>
				<ArrowRight size={18} />
			</div>
		</div>
	</div>
</article>

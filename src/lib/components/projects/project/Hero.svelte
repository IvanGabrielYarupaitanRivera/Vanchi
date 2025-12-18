<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Calendar, Layers, User } from '@lucide/svelte';

	let { meta } = $props();
</script>

<section class="relative -mt-24 flex min-h-screen w-full items-center justify-center">
	<enhanced:img
		src={meta.bgHero.src}
		alt={meta.bgHero.alt}
		fetchpriority="high"
		loading="eager"
		class="absolute inset-0 h-full w-full mask-r-from-80% mask-b-from-50% mask-l-from-80% object-cover object-center opacity-10"
	/>

	<div class="relative hero-content z-10 text-center text-base-content">
		<div class="max-w-4xl">
			<!-- 1. Badge: Tech Pill -->
			<div in:fly={{ y: 20, duration: 1000, delay: 200 }} class="mb-8 flex justify-center">
				<div
					class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest text-primary uppercase backdrop-blur-md"
				>
					<span class="relative flex h-2 w-2">
						<span
							class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"
						></span>
						<span class="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
					</span>
					Case Study
				</div>
			</div>

			<!-- 2. Title: Luxury Gradient & Serif -->
			<h1
				in:fly={{ y: 30, duration: 1000, delay: 400 }}
				class="mb-8 font-serif text-5xl leading-tight font-bold tracking-tight lg:text-8xl"
			>
				<span
					class="bg-linear-to-r from-primary via-primary to-primary bg-clip-text text-transparent"
				>
					{meta.title}
				</span>
			</h1>

			<!-- 3. Tagline: Clean & Readable -->
			<p
				in:fly={{ y: 30, duration: 1000, delay: 600 }}
				class="mx-auto mb-16 max-w-2xl text-lg leading-relaxed text-base-content/70 lg:text-xl"
			>
				{meta.tagline}
			</p>

			<!-- 4. Meta HUD: Glassmorphism Panel -->
			<div
				in:fly={{ y: 40, duration: 1000, delay: 800 }}
				class="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-base-100/40 shadow-2xl backdrop-blur-xl"
			>
				<dl
					class="grid grid-cols-1 divide-y divide-white/5 lg:grid-cols-2 lg:divide-x lg:divide-y-0"
				>
					<!-- Item 1: Role -->
					<div
						class="group flex flex-col items-center gap-3 p-6 transition-colors hover:bg-white/5"
					>
						<dt
							class="flex items-center gap-2 text-xs font-bold tracking-widest text-primary/80 uppercase"
						>
							<User size={14} /> Rol
						</dt>
						<dd class="text-center text-sm font-medium text-base-content/90">
							{meta.role}
						</dd>
					</div>

					<!-- Item 2: Date -->
					<div
						class="group flex flex-col items-center gap-3 p-6 transition-colors hover:bg-white/5"
					>
						<dt
							class="flex items-center gap-2 text-xs font-bold tracking-widest text-primary/80 uppercase"
						>
							<Calendar size={14} /> Fecha
						</dt>
						<dd class="text-center text-sm font-medium text-base-content/90">
							{meta.date}
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
</section>

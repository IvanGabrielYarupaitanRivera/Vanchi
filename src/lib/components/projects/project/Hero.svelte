<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Calendar, User } from '@lucide/svelte';

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
			<div
				in:fly={{ y: 30, duration: 1000, delay: 200 }}
				class="relative mb-8 inline-flex overflow-hidden rounded-full p-px"
			>
				<span
					class="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#C5A059_50%,transparent_100%)]"
				></span>

				<div
					class="inline-flex h-full w-full items-center gap-2 rounded-full bg-base-100/90 px-4 py-1.5 backdrop-blur-3xl"
				>
					<div class="inline-grid *:[grid-area:1/1]">
						<div class="status animate-ping status-primary"></div>
						<div class="status status-primary"></div>
					</div>
					<span class="flex gap-1 text-xs font-medium tracking-widest text-base-content uppercase">
						Caso de Estudio
					</span>
				</div>
			</div>

			<!-- 2. Title: Luxury Gradient & Serif -->
			<h1
				in:fly={{ y: 30, duration: 1000, delay: 400 }}
				class="mb-8 font-serif text-5xl font-bold lg:text-7xl"
			>
				<span class="text-accent">
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

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
			<!-- Title: Serif & Gradient -->
			<h1
				in:fly={{ y: 30, duration: 1000, delay: 400 }}
				class="mb-8 font-serif text-5xl font-bold text-primary lg:text-7xl"
			>
				{meta.title}
			</h1>

			<!-- Tagline -->
			<p
				in:fly={{ y: 30, duration: 1000, delay: 600 }}
				class="mx-auto mb-10 max-w-2xl px-4 text-sm text-pretty text-base-content/80 lg:text-lg"
			>
				{meta.tagline}
			</p>

			<!-- Meta Grid -->
			<section
				in:fly={{ y: 30, duration: 1000, delay: 800 }}
				aria-labelledby="project-meta-heading"
				class="mx-auto mb-16 max-w-4xl border-t border-white/10 pt-8 text-sm"
			>
				<h2 id="project-meta-heading" class="sr-only">Detalles del proyecto</h2>

				<dl class="grid grid-cols-1 gap-6 lg:grid-cols-3">
					<div class="flex flex-col items-center gap-2">
						<dt
							class="flex items-center gap-2 text-xs tracking-wider text-base-content/40 uppercase"
						>
							<User size={14} /> Rol
						</dt>
						<dd class="text-sm font-medium text-base-content">{meta.role}</dd>
					</div>

					<div
						class="flex flex-col items-center gap-2 border-y border-white/5 py-4 lg:border-x lg:border-y-0 lg:border-white/10 lg:py-0"
					>
						<dt
							class="flex items-center gap-2 text-xs tracking-wider text-base-content/40 uppercase"
						>
							<Calendar size={14} /> Fecha
						</dt>
						<dd class="text-sm font-medium text-base-content">{meta.date}</dd>
					</div>

					<div class="flex flex-col items-center gap-2">
						<dt
							class="flex items-center gap-2 text-xs tracking-wider text-base-content/40 uppercase"
						>
							<Layers size={14} /> Stack Principal
						</dt>
						<dd class="text-sm font-medium text-base-content">
							{meta.stack.slice(0, 3).join(', ')}
						</dd>
					</div>
				</dl>
			</section>
		</div>
	</div>
</section>

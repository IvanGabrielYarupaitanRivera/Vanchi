<script lang="ts">
	import { resolve } from '$app/paths';
	import { MapPin, Calendar, Code, ArrowUpRight } from '@lucide/svelte';
	import ivan from '$lib/assets/images/ivan.webp';

	const edad = ((birth) => {
		const today = new Date();
		let age = today.getFullYear() - birth.getFullYear();
		const m = today.getMonth() - birth.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
		return age;
	})(new Date(2002, 0, 10));
</script>

<section class="flex min-h-[90dvh] items-center">
	<div class="mx-auto w-full max-w-5xl px-4">
		<div class="mb-10 flex items-center gap-2.5">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">01 // PERFIL</span>
		</div>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
			<!-- Columna texto -->
			<div class="lg:col-span-7">
				<h1 class="mb-8 vanchi-display text-5xl leading-[1.05] font-normal lg:text-7xl">
					Ivan Gabriel<br />
					Yarupaitan Rivera
				</h1>
				<p class="max-w-xl text-base leading-relaxed text-base-content/70 lg:text-lg">
					Ingeniero de Sistemas y Computación, {edad} años, desde Perú. Especializado en construir productos
					digitales que unen ingeniería robusta, inteligencia artificial y diseño editorial.
				</p>

				<!-- Metadatos -->
				<div
					class="mt-8 mb-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm text-base-content/50"
				>
					<span class="flex items-center gap-1.5">
						<MapPin class="h-3.5 w-3.5 text-base-content/30" />
						Huancayo, Perú
					</span>
					<span class="flex items-center gap-1.5">
						<Calendar class="h-3.5 w-3.5 text-base-content/30" />
						Disponible ahora
					</span>
					<span class="flex items-center gap-1.5">
						<Code class="h-3.5 w-3.5 text-base-content/30" />
						Full-Stack & IA
					</span>
				</div>

				<!-- CTAs -->
				<div class="flex flex-wrap gap-4">
					<a
						href="https://www.linkedin.com/in/ivan-yarupaitan-rivera/"
						target="_blank"
						rel="external noopener noreferrer"
						class="btn h-10 min-h-0 border border-base-content bg-base-content px-5 font-mono text-xs font-bold tracking-wider text-base-100 uppercase duration-100 hover:bg-base-content/90"
					>
						LinkedIn
						<ArrowUpRight class="h-3.5 w-3.5" />
					</a>
					<a
						href={resolve('/(main)/proyectos')}
						class="btn h-10 min-h-0 border border-base-300 px-5 font-mono text-xs font-bold tracking-wider text-base-content/80 uppercase btn-ghost duration-100 hover:bg-base-300 hover:text-base-content"
					>
						Proyectos →
					</a>
				</div>
			</div>

			<!-- Columna foto -->
			<div class="lg:col-span-4 lg:col-start-9">
				<div class="overflow-hidden border border-base-300 bg-base-200">
					<enhanced:img
						src={ivan}
						alt="Ivan Gabriel Yarupaitan Rivera — Ingeniero de Sistemas"
						class="aspect-3/4 w-full object-cover"
					/>
				</div>
				<p class="mt-2 font-mono text-xs text-secondary">Ivan Yarupaitan // Huancayo, Perú</p>
			</div>
		</div>
	</div>
</section>

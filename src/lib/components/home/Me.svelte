<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Code, Cpu, Globe, Zap } from '@lucide/svelte';
	import ivan from '$lib/assets/images/ivan.webp';

	const birthday = new Date(2002, 1, 10);
	const edad = Math.floor((new Date().getTime() - birthday.getTime()) / 3.15576e10);

	const skills = [
		{ name: 'SvelteKit', icon: Globe },
		{ name: 'TypeScript', icon: Code },
		{ name: 'Convex', icon: Cpu },
		{ name: 'Bun', icon: Zap }
	];
</script>

<section class="relative w-full py-24 lg:py-32" id="about-me">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
			<!-- Columna Izquierda: The Portal (Foto) -->
			<div
				class="group relative lg:col-span-5 lg:col-start-2"
				in:fly={{ y: 30, duration: 800, delay: 200 }}
			>
				<!-- Marco Offset Decorativo (Dorado sutil) -->
				<div
					class="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-primary/20 lg:translate-x-4 lg:translate-y-4"
				></div>

				<!-- Contenedor Imagen -->
				<div
					class="relative overflow-hidden rounded-2xl bg-base-200 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(211,163,41,0.15)] lg:grayscale lg:group-hover:grayscale-0"
				>
					<img
						src={ivan}
						alt="Iván - Ingeniero de Sistemas"
						class="aspect-3/4 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
					/>
				</div>

				<!-- Glass Card Flotante (Detalle Premium) -->
				<div
					class="absolute right-4 bottom-4 max-w-[180px] rounded-xl border border-white/10 bg-base-100/80 p-4 shadow-2xl backdrop-blur-xl transition-transform duration-500 lg:-right-6 lg:-bottom-6 lg:max-w-[220px] lg:p-5 lg:group-hover:-translate-y-2"
				>
					<div class="mb-2 flex items-center gap-3 lg:mb-3">
						<span class="text-xs font-bold tracking-wider text-primary/60 uppercase">Enfoque</span>
					</div>
					<p class="font-serif text-base leading-tight font-medium lg:text-lg">
						Ingeniería de precisión para la era digital.
					</p>
				</div>
			</div>

			<!-- Columna Derecha: Narrativa -->
			<div class="lg:col-span-6 lg:pl-12" in:fly={{ y: 30, duration: 800, delay: 400 }}>
				<!-- Etiqueta -->
				<div class="mb-6 flex items-center gap-2 text-primary/80">
					<span class="h-px w-8 bg-primary/50"></span>
					<span class="text-sm font-bold tracking-widest uppercase">Perfil</span>
				</div>

				<!-- Hook Editorial -->
				<h2 class="mb-8 font-serif text-4xl leading-tight lg:text-5xl">
					Transformando código complejo en <span class="text-primary italic"
						>soluciones de negocio</span
					> elegantes.
				</h2>

				<!-- Cuerpo -->
				<div class="space-y-6 font-sans text-sm text-base-content/70 lg:text-base">
					<p>
						Hola, soy Iván. A mis {edad} años, opero en la intersección entre la ingeniería de software
						robusta y el diseño de interfaces inmersivas. No solo escribo código; arquitecto ecosistemas
						digitales que escalan.
					</p>
					<p>
						Mi metodología combina la lógica estricta de un Ingeniero de Sistemas con la visión
						estética de un diseñador moderno. Me especializo en crear aplicaciones que no solo
						funcionan rápido, sino que se sienten vivas y elevan el valor de tu marca.
					</p>
				</div>

				<!-- Tech DNA (Skills Minimalistas) -->
				<div class="mt-10">
					<h4 class="mb-4 text-xs font-bold tracking-widest text-base-content/40 uppercase">
						Tech DNA
					</h4>
					<div class="flex flex-wrap gap-3">
						{#each skills as skill}
							<div
								class="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-2 text-sm transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
							>
								<skill.icon size={14} />
								<span>{skill.name}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

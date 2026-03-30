<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { resolve } from '$app/paths';
	import { ArrowUpRight, Linkedin, MapPin, Calendar, Code } from '@lucide/svelte';

	import SEO from '$lib/components/SEO.svelte';
	import ivan from '$lib/assets/images/ivan.webp';

	// Tech logos
	import SvelteKitLogo from '$lib/assets/icons/technologies/SvelteKitLogo.svelte';
	import TypeScriptLogo from '$lib/assets/icons/technologies/TypeScriptLogo.svelte';
	import DaisyLogo from '$lib/assets/icons/technologies/DaisyLogo.svelte';
	import ConvexLogo from '$lib/assets/icons/technologies/ConvexLogo.svelte';
	import SupabaseLogo from '$lib/assets/icons/technologies/SupabaseLogo.svelte';
	import BunLogo from '$lib/assets/icons/technologies/BunLogo.svelte';
	import TailwindLogo from '$lib/assets/icons/technologies/TailwindLogo.svelte';
	import AstroLogo from '$lib/assets/icons/technologies/AstroLogo.svelte';
	import GeminiIALogo from '$lib/assets/icons/technologies/GeminiIALogo.svelte';
	import N8nLogo from '$lib/assets/icons/technologies/N8nLogo.svelte';
	import VercelLogo from '$lib/assets/icons/technologies/VercelLogo.svelte';
	import NetlifyLogo from '$lib/assets/icons/technologies/NetlifyLogo.svelte';

	// Edad calculada dinámicamente
	const edad = $derived.by(() => {
		const birth = new Date(2002, 0, 10);
		const today = new Date();
		let age = today.getFullYear() - birth.getFullYear();
		const m = today.getMonth() - birth.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
		return age;
	});

	const skills = [
		{ name: 'SvelteKit', icon: SvelteKitLogo },
		{ name: 'TypeScript', icon: TypeScriptLogo },
		{ name: 'Tailwind CSS', icon: TailwindLogo },
		{ name: 'DaisyUI', icon: DaisyLogo },
		{ name: 'Convex', icon: ConvexLogo },
		{ name: 'Supabase', icon: SupabaseLogo },
		{ name: 'Bun', icon: BunLogo },
		{ name: 'Astro', icon: AstroLogo },
		{ name: 'Gemini AI', icon: GeminiIALogo },
		{ name: 'n8n', icon: N8nLogo },
		{ name: 'Vercel', icon: VercelLogo },
		{ name: 'Netlify', icon: NetlifyLogo }
	];

	const profileStructuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'ProfilePage',
				'@id': 'https://www.vanchi.pro/ivan-yarupaitan-rivera#profile',
				url: 'https://www.vanchi.pro/ivan-yarupaitan-rivera',
				name: 'Ivan Gabriel Yarupaitan Rivera',
				description:
					'Ingeniero de Sistemas y Computación. Construyo productos digitales que combinan arquitectura limpia, inteligencia artificial y diseño de alto impacto.',
				isPartOf: {
					'@id': 'https://www.vanchi.pro/#website'
				},
				mainEntity: {
					'@id': 'https://www.vanchi.pro/#person'
				}
			},
			{
				'@type': 'Person',
				'@id': 'https://www.vanchi.pro/#person',
				name: 'Ivan Gabriel Yarupaitan Rivera',
				givenName: 'Ivan Gabriel',
				familyName: 'Yarupaitan Rivera',
				alternateName: ['Ivan Yarupaitan Rivera', 'Vanchi'],
				url: 'https://www.vanchi.pro/ivan-yarupaitan-rivera',
				mainEntityOfPage: {
					'@id': 'https://www.vanchi.pro/ivan-yarupaitan-rivera#profile'
				},
				description:
					'Ingeniero de Sistemas y Computación especializado en SvelteKit, TypeScript e integración de inteligencia artificial.',
				jobTitle: 'Ingeniero de Sistemas y Computación',
				knowsLanguage: ['es', 'en'],
				nationality: {
					'@type': 'Country',
					name: 'Perú'
				},
				homeLocation: {
					'@type': 'Place',
					name: 'Huancayo, Perú'
				},
				sameAs: [
					'https://www.linkedin.com/in/ivan-yarupaitan-rivera/',
					'https://github.com/IvanGabrielYarupaitanRivera'
				],
				knowsAbout: skills.map((skill) => skill.name)
			}
		]
	};

	const profileStructuredDataJson = JSON.stringify(profileStructuredData).replace(/</g, '\\u003c');
</script>

<SEO
	title="Ivan Gabriel Yarupaitan Rivera"
	description="Ingeniero de Sistemas y Computación. Construyo productos digitales que combinan arquitectura limpia, inteligencia artificial y diseño de alto impacto."
	keywords="Ivan Gabriel Yarupaitan Rivera, ingeniero de sistemas, SvelteKit, inteligencia artificial, desarrollo web, portafolio personal"
	type="profile"
	url="https://www.vanchi.pro/ivan-yarupaitan-rivera"
/>

<svelte:head>
	<svelte:element this={'script'} type="application/ld+json">
		{profileStructuredDataJson}
	</svelte:element>
</svelte:head>

<main class="min-h-screen">
	<!-- ====================== -->
	<!-- HERO PERSONAL          -->
	<!-- ====================== -->
	<section
		class="relative w-full overflow-hidden py-24 lg:py-36"
		aria-label="Presentación personal"
	>
		<!-- Gradient ambiental de fondo -->
		<div
			class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(197,160,89,0.06),transparent)]"
			aria-hidden="true"
		></div>

		<div class="relative container mx-auto px-4">
			<div class="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
				<!-- Columna Texto -->
				<div class="lg:col-span-7" in:fly={{ y: 40, duration: 900, delay: 100 }}>
					<!-- Etiqueta de sección -->
					<div class="mb-6 flex items-center gap-3 text-primary/70">
						<span class="h-px w-10 bg-primary/50"></span>
						<span class="text-xs font-bold tracking-widest uppercase">Perfil</span>
					</div>

					<!-- Headline principal -->
					<h1 class="mb-6 leading-tight">
						<span class="block font-serif text-5xl font-bold text-base-content italic lg:text-7xl">
							Soy Ivan.
						</span>
						<span
							class="block bg-linear-to-r from-primary via-yellow-300 to-primary bg-clip-text pb-2 font-serif text-3xl font-bold text-transparent italic lg:text-5xl"
						>
							Construyo lo que imaginas.
						</span>
					</h1>

					<!-- Descripción personal -->
					<p class="mb-4 max-w-xl text-base text-base-content/70 lg:text-lg">
						Ingeniero de Sistemas y Computación, {edad} años, desde Perú. Me especializo en crear productos
						digitales que unen ingeniería robusta, inteligencia artificial y diseño que enamora.
					</p>

					<!-- Chips de contexto -->
					<div class="mb-10 flex flex-wrap items-center gap-3 text-sm text-base-content/50">
						<span class="flex items-center gap-1.5">
							<MapPin size={14} class="text-primary/60" />
							Perú
						</span>
						<span class="h-1 w-1 rounded-full bg-base-content/20"></span>
						<span class="flex items-center gap-1.5">
							<Calendar size={14} class="text-primary/60" />
							Disponible ahora
						</span>
						<span class="h-1 w-1 rounded-full bg-base-content/20"></span>
						<span class="flex items-center gap-1.5">
							<Code size={14} class="text-primary/60" />
							Full-Stack & AI
						</span>
					</div>

					<!-- CTAs -->
					<div class="flex flex-wrap gap-4">
						<a
							href="https://www.linkedin.com/in/ivan-yarupaitan-rivera/"
							target="_blank"
							rel="external noopener noreferrer"
							class="btn transition-all duration-300 btn-primary hover:-translate-y-1"
						>
							Ver perfil en LinkedIn
						</a>
						<a
							href={resolve('/proyectos')}
							class="btn transition-all duration-300 btn-neutral hover:-translate-y-1"
						>
							Ver mis proyectos
						</a>
					</div>
				</div>

				<!-- Columna Foto -->
				<div
					class="group relative lg:col-span-4 lg:col-start-9"
					in:fly={{ y: 40, duration: 900, delay: 300 }}
				>
					<!-- Marco offset dorado -->
					<div
						class="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-primary/20 lg:translate-x-4 lg:translate-y-4"
						aria-hidden="true"
					></div>

					<!-- Foto -->
					<div
						class="relative overflow-hidden rounded-2xl bg-base-200 grayscale transition-all duration-700 group-hover:shadow-[0_0_40px_rgba(197,160,89,0.15)] group-hover:grayscale-0"
					>
						<enhanced:img
							src={ivan}
							alt="Ivan Gabriel Yarupaitan Rivera — Ingeniero de Sistemas"
							class="aspect-3/4 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
						/>
					</div>

					<!-- Glass badge flotante -->
					<div
						class="absolute -bottom-4 -left-4 rounded-xl border border-white/10 bg-base-100/80 px-5 py-4 shadow-2xl backdrop-blur-xl lg:-bottom-6 lg:-left-6"
						in:fade={{ duration: 600, delay: 800 }}
					>
						<p class="text-xs font-bold tracking-wider text-primary/60 uppercase">Filosofía</p>
						<p class="mt-1 font-serif text-sm leading-snug font-medium lg:text-base">
							Código limpio,<br />impacto real.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ====================== -->
	<!-- MI HISTORIA            -->
	<!-- ====================== -->
	<section class="w-full py-20 lg:py-28" aria-labelledby="historia-heading">
		<div class="container mx-auto px-4">
			<div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
				<!-- Label lateral -->
				<div class="lg:col-span-3 lg:col-start-2">
					<div
						class="sticky top-28 flex items-start gap-4 lg:flex-col"
						in:fly={{ y: 20, duration: 700, delay: 100 }}
					>
						<div>
							<h2
								id="historia-heading"
								class="font-serif text-2xl font-bold text-base-content italic lg:text-3xl"
							>
								Mi historia
							</h2>
							<p class="mt-1 text-xs font-bold tracking-widest text-primary/60 uppercase">
								El porqué
							</p>
						</div>
					</div>
				</div>

				<!-- Contenido editorial -->
				<div
					class="space-y-8 text-base leading-loose text-base-content/70 lg:col-span-6"
					in:fly={{ y: 30, duration: 800, delay: 200 }}
				>
					<p>
						Todo comenzó observando la brecha entre la tecnología y el ciudadano: <em
							class="font-medium text-base-content/90 not-italic"
							>¿por qué los sistemas del Estado, que deberían servirnos, son tan difíciles de
							entender?</em
						> Esa frustración con la burocracia digital me llevó a la Ingeniería de Sistemas, donde descubrí
						que el orden no es un accidente, sino una decisión de diseño.
					</p>

					<p>
						Nací en <strong>Huancavelica</strong> y hoy resido en Huancayo. Aunque mi curiosidad por
						las computadoras empezó con los videojuegos, mi verdadera vocación despertó en la
						universidad, frente a un <strong>bloc de notas</strong> escribiendo mi primer "Hola Mundo"
						en HTML. Ahí entendí el poder de la lógica: la satisfacción de que una instrucción precisa
						genere un resultado exacto y ordenado.
					</p>

					<!-- Cita destacada -->
					<blockquote
						class="border-l-2 border-primary/50 pl-6 font-serif text-xl font-medium text-base-content/90 italic lg:text-2xl"
					>
						"No busco la complejidad por ego; busco la robustez a través de la arquitectura DDD y la
						simplicidad de la filosofía KISS."
					</blockquote>

					<p>
						Para mí, un sistema que "dura" es aquel que respeta la <span
							class="font-medium text-primary">responsabilidad única</span
						>. Hoy, mi enfoque está en la intersección de la ingeniería de software y la IA
						avanzada. No solo uso agentes de programación como VS Code de forma intensiva, sino que
						estoy sumergido en el desafío de construir <strong>agentes de IA de alto nivel</strong>,
						capaces de razonar con la profundidad de herramientas como OpenClaw.
					</p>

					<p>
						Creo que debajo de un producto que parece inevitablemente simple para el usuario, debe
						existir una ingeniería rigurosa y sobre todo, transparente.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ====================== -->
	<!-- STACK & SKILLS         -->
	<!-- ====================== -->
	<section
		class="w-full border-y border-white/5 bg-base-200/30 py-20 lg:py-28"
		aria-labelledby="stack-heading"
	>
		<div class="container mx-auto px-4">
			<div class="mb-12 text-center" in:fly={{ y: 20, duration: 700, delay: 100 }}>
				<span class="text-xs font-bold tracking-widest text-primary/70 uppercase">
					Herramientas de trabajo
				</span>
				<h2
					id="stack-heading"
					class="mt-3 font-serif text-3xl font-bold text-base-content italic lg:text-4xl"
				>
					Tech DNA
				</h2>
				<p class="mx-auto mt-4 max-w-lg text-sm text-base-content/50 lg:text-base">
					El stack que uso para construir productos que importan. Sin modas pasajeras — solo
					tecnología probada en producción.
				</p>
			</div>

			<div
				class="flex flex-wrap justify-center gap-2"
				in:fly={{ y: 30, duration: 800, delay: 200 }}
			>
				{#each skills as skill (skill.name)}
					<div class="badge py-4 badge-md">
						<skill.icon size={20} />
						<span class="ml-1.5 text-sm font-medium">{skill.name}</span>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ====================== -->
	<!-- CTA FINAL              -->
	<!-- ====================== -->
	<section class="w-full py-24 lg:py-32" aria-label="Llamada a la acción">
		<div class="container mx-auto px-4 text-center" in:fly={{ y: 30, duration: 800, delay: 100 }}>
			<span class="text-xs font-bold tracking-widest text-primary/70 uppercase">¿Conectamos?</span>
			<h2 class="mx-auto mt-4 max-w-xl font-serif text-3xl font-bold italic lg:text-5xl">
				Siempre abierto a
				<span
					class="bg-linear-to-r from-primary via-yellow-200 to-primary bg-clip-text text-transparent"
				>
					nuevas conversaciones.
				</span>
			</h2>
			<p class="mx-auto mt-6 max-w-md text-base leading-loose text-base-content/60">
				Si buscas a alguien que se tome en serio tu proyecto tanto como tú, estoy a un mensaje de
				distancia.
			</p>

			<div class="mt-10 flex flex-wrap justify-center gap-4">
				<a
					href="https://www.linkedin.com/in/ivan-yarupaitan-rivera/"
					target="_blank"
					rel="external noopener noreferrer"
					class="btn transition-all duration-300 btn-lg btn-primary hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(197,160,89,0.3)]"
				>
					<Linkedin size={18} />
					Conectar en LinkedIn
				</a>
				<a
					href={resolve('/#contacto')}
					class="btn transition-all duration-300 btn-lg hover:-translate-y-1"
				>
					Enviar mensaje
					<ArrowUpRight size={18} />
				</a>
			</div>
		</div>
	</section>
</main>

<script lang="ts">
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';

	const whatsappUrl = 'https://api.whatsapp.com/send/?phone=51985942670&text=Hola%20Ivan,%20me%20gustaria%20conversar%20sobre%20un%20proyecto.';

	const contactStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Ivan Yarupaitan Rivera',
		url: 'https://www.vanchi.pro',
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'sales',
			availableLanguage: ['es', 'en'],
			telephone: '+51985942670',
			url: 'https://www.vanchi.pro/contacto'
		}
	};

	const contactStructuredDataJson = JSON.stringify(contactStructuredData).replace(/</g, '\\u003c');
	const email = 'ivan@vanchi.pro';
	const author = 'Ivan Yarupaitan Rivera';
</script>

<SEO
	title="Contactar a un especialista en Inteligencia Artificial en Perú | Vanchi"
	description="¿Querés implementar IA en tu empresa? Escribime por WhatsApp o email. Respondo en menos de 24 horas. Sin formularios largos, sin fricción."
	keywords="contratar especialista inteligencia artificial peru, consultoria ia peru, desarrollador de agentes inteligentes contacto, programador ia huancayo contacto"
	url="https://www.vanchi.pro/contacto"
/>

<svelte:head>
	<svelte:element this={'script'} type="application/ld+json">
		{contactStructuredDataJson}
	</svelte:element>
</svelte:head>

<!-- ===== HERO ===== -->
<section class="flex min-h-[85dvh] items-center">
	<div class="w-full max-w-5xl mx-auto px-4">
		<div class="mb-10 flex items-center gap-2.5">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">CONTACTO · 2026</span>
		</div>
		<h1 class="vanchi-display mb-16 text-5xl font-normal leading-[1.05] lg:text-7xl">
			Contratar a un<br />
			<span class="italic">especialista</span><br />
			en Inteligencia Artificial
		</h1>
	</div>
</section>

<!-- ===== CANALES ===== -->
<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<p class="vanchi-eyebrow mb-16">CANALES</p>

		<div class="grid gap-16 lg:grid-cols-2 lg:gap-24">
			<!-- WhatsApp -->
			<div>
				<h2 class="vanchi-display mb-8 text-3xl font-normal lg:text-4xl">
					<span class="italic">WhatsApp</span>
				</h2>
				<p class="mb-8 max-w-prose text-sm leading-relaxed text-base-content/60">
					El canal más directo. Escribime contándome qué querés automatizar y te respondo con preguntas concretas, no con un pitch genérico.
				</p>

				<a
					href={whatsappUrl}
					target="_blank"
					rel="external noopener noreferrer"
					class="btn border-0 bg-base-content font-mono text-sm text-base-100 hover:opacity-90"
				>
					Abrir conversación →
				</a>
			</div>

			<!-- Email -->
			<div>
				<h2 class="vanchi-display mb-8 text-3xl font-normal lg:text-4xl">
					<span class="italic">Email</span>
				</h2>
				<p class="mb-8 max-w-prose text-sm leading-relaxed text-base-content/60">
					Si preferís escribir con más detalle. Adjuntá contexto, ejemplos o lo que tengas. Mientras más sepa, mejor puedo responderte.
				</p>

				<div class="vanchi-container p-8">
					<p class="font-mono text-sm text-base-content/80">{email}</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ===== EXPECTATIVAS ===== -->
<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<p class="vanchi-eyebrow mb-16">QUÉ ESPERAR</p>

		<div class="grid gap-6 lg:grid-cols-3">
			<div class="vanchi-container p-8">
				<p class="mb-3 font-mono text-xs font-medium tracking-[0.15em] text-secondary">01</p>
				<p class="font-mono text-sm leading-relaxed text-base-content/80">
					Respondo en menos de <span class="text-base-content">24 horas</span>. Si es fin de semana, el lunes a primera hora.
				</p>
			</div>

			<div class="vanchi-container p-8">
				<p class="mb-3 font-mono text-xs font-medium tracking-[0.15em] text-secondary">02</p>
				<p class="font-mono text-sm leading-relaxed text-base-content/80">
					Te hago <span class="text-base-content">preguntas</span>, no un pitch. Necesito entender tu problema antes de hablar de soluciones.
				</p>
			</div>

			<div class="vanchi-container p-8">
				<p class="mb-3 font-mono text-xs font-medium tracking-[0.15em] text-secondary">03</p>
				<p class="font-mono text-sm leading-relaxed text-base-content/80">
					Si hay fit, armamos una <span class="text-base-content">videollamada</span>. Sin presión, sin compromiso.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- ===== FOOTER ===== -->
<footer class="w-full py-16 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
			<a href={resolve('/(main)/precios')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Precios</a>
			<a href={resolve('/(main)/proyectos')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Proyectos</a>
			<a href={resolve('/(main)/proyectos/[projectId]', { projectId: 'encap' })} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Caso ENCAP</a>
			<a href={resolve('/(main)/ivan-yarupaitan-rivera')} class="text-base-content/60 transition-colors duration-150 hover:text-base-content">Sobre mí</a>
		</div>
		<p class="mt-8 font-mono text-xs text-secondary">{author}</p>
	</div>
</footer>

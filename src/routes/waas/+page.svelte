<script lang="ts">
	import { resolve } from '$app/paths';
	import { ArrowUpRight, CheckCircle2, ShieldCheck, Database } from '@lucide/svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { projectsData } from '$lib/data/projects';

	const updatedAt = '30 de marzo de 2026';
	const author = 'Ivan Yarupaitan Rivera';
	const publishedCases = Object.keys(projectsData).length;

	const qas = [
		{
			q: '¿Qué es WaaS en Vanchi?',
			a: 'WaaS significa Website as a Service. En lugar de pagar una web con un único monto alto, contratas un servicio mensual que incluye infraestructura, mantenimiento y evolución funcional.'
		},
		{
			q: '¿Qué incluye el plan base?',
			a: 'Incluye landing page profesional, hosting, SSL, botón de WhatsApp y soporte técnico base. Desde ahí puedes activar módulos según crecimiento real del negocio.'
		},
		{
			q: '¿Cómo crece el servicio?',
			a: 'Con módulos escalables: SEO, catálogo, asistente IA o sistema interno. No se rehace todo; se suma capacidad y se ajusta la mensualidad de forma transparente.'
		},
		{
			q: '¿Es útil para negocios en Perú?',
			a: 'Sí. Está diseñado para pymes y marcas en Perú que necesitan presencia digital profesional sin asumir una inversión inicial alta.'
		}
	] as const;
</script>

<SEO
	title="WaaS en Perú: Modelo Socio Tecnológico | Vanchi"
	description="Conoce el modelo WaaS de Vanchi: web por suscripción mensual, módulos escalables, soporte continuo y enfoque comercial para negocios en Perú."
	keywords="waas peru, website as a service peru, socio tecnológico, desarrollo web por suscripción, servicio web mensual"
	url="https://www.vanchi.pro/waas"
/>

<main class="min-h-screen py-24 lg:py-32">
	<section class="w-full">
		<div class="container mx-auto px-4">
			<div class="mx-auto max-w-4xl text-center">
				<span class="mb-4 badge badge-soft">Modelo de trabajo</span>
				<h1 class="text-4xl font-bold lg:text-6xl">
					WaaS para crecimiento real en
					<span
						class="bg-linear-to-r from-primary via-yellow-200 to-primary bg-clip-text font-serif text-transparent italic"
					>
						Perú
					</span>
				</h1>
				<p class="mx-auto mt-6 max-w-3xl text-base leading-loose text-base-content/70 lg:text-lg">
					No vendemos páginas aisladas. Construimos un sistema web que vive, evoluciona y se alinea
					con tus objetivos comerciales cada mes.
				</p>

				<div class="mt-8 flex flex-wrap justify-center gap-3 text-sm text-base-content/60">
					<span class="rounded-full border border-white/10 bg-base-200/60 px-3 py-1"
						>Autor: {author}</span
					>
					<span class="rounded-full border border-white/10 bg-base-200/60 px-3 py-1"
						>Actualizado: {updatedAt}</span
					>
				</div>
			</div>
		</div>
	</section>

	<section class="w-full py-16 lg:py-20" aria-labelledby="waas-benefits">
		<div class="container mx-auto px-4">
			<h2 id="waas-benefits" class="mb-8 text-center text-3xl font-bold lg:text-5xl">
				Por qué este modelo funciona
			</h2>
			<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
				<article class="rounded-2xl border border-white/10 bg-base-200/40 p-6 backdrop-blur-sm">
					<CheckCircle2 class="mb-3 text-primary" size={22} />
					<h3 class="mb-2 text-xl font-semibold">Menor fricción de compra</h3>
					<p class="leading-loose text-base-content/70">
						Entrar con mensualidad es más viable para pequeñas y medianas empresas que un pago único
						alto.
					</p>
				</article>
				<article class="rounded-2xl border border-white/10 bg-base-200/40 p-6 backdrop-blur-sm">
					<Database class="mb-3 text-primary" size={22} />
					<h3 class="mb-2 text-xl font-semibold">Evolución modular</h3>
					<p class="leading-loose text-base-content/70">
						Activas capacidades según demanda: SEO, catálogo, IA o sistemas internos.
					</p>
				</article>
				<article class="rounded-2xl border border-white/10 bg-base-200/40 p-6 backdrop-blur-sm">
					<ShieldCheck class="mb-3 text-primary" size={22} />
					<h3 class="mb-2 text-xl font-semibold">Riesgo controlado</h3>
					<p class="leading-loose text-base-content/70">
						Términos públicos, alcance claro y continuidad técnica para proteger ambas partes.
					</p>
				</article>
			</div>
		</div>
	</section>

	<section class="w-full border-y border-white/10 py-16 lg:py-20" aria-labelledby="waas-qa">
		<div class="container mx-auto px-4">
			<h2 id="waas-qa" class="mb-8 text-center text-3xl font-bold lg:text-5xl">Q&A directo</h2>
			<div class="mx-auto flex max-w-4xl flex-col gap-4">
				{#each qas as item (item.q)}
					<details
						class="rounded-2xl border border-white/10 bg-base-200/50 p-5 open:border-primary/30"
					>
						<summary class="cursor-pointer list-none text-base font-semibold text-base-content">
							{item.q}
						</summary>
						<p class="mt-3 leading-loose text-base-content/70">{item.a}</p>
					</details>
				{/each}
			</div>
		</div>
	</section>

	<section class="w-full py-16 lg:py-20" aria-labelledby="waas-proof">
		<div class="container mx-auto px-4">
			<div
				class="mx-auto max-w-4xl rounded-3xl border border-primary/20 bg-base-200/40 p-8 text-center backdrop-blur-sm lg:p-10"
			>
				<h2 id="waas-proof" class="mb-4 text-3xl font-bold lg:text-4xl">Pruebas de confianza</h2>
				<p class="mx-auto mb-8 max-w-2xl leading-loose text-base-content/70">
					Modelo validado con evidencia pública: casos publicados, términos transparentes y perfil
					profesional verificable.
				</p>
				<div class="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
					<div class="rounded-xl border border-white/10 bg-base-100/40 p-4">
						<p class="text-2xl font-bold text-primary">{publishedCases}</p>
						<p class="text-sm text-base-content/65">casos de estudio públicos</p>
					</div>
					<div class="rounded-xl border border-white/10 bg-base-100/40 p-4">
						<p class="text-2xl font-bold text-primary">1</p>
						<p class="text-sm text-base-content/65">acuerdo legal publicado</p>
					</div>
					<div class="rounded-xl border border-white/10 bg-base-100/40 p-4">
						<p class="text-2xl font-bold text-primary">100%</p>
						<p class="text-sm text-base-content/65">stack visible y verificable</p>
					</div>
				</div>
				<div class="flex flex-wrap justify-center gap-4">
					<a href={resolve('/precios')} class="btn btn-primary">
						Ver precios
						<ArrowUpRight size={16} />
					</a>
					<a href={resolve('/proyectos')} class="btn">Ver proyectos</a>
				</div>
			</div>
		</div>
	</section>
</main>

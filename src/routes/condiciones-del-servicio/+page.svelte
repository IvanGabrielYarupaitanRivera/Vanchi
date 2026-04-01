<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import { resolve } from '$app/paths';
	import { ArrowLeft, FileText } from '@lucide/svelte';

	const updatedAt = '31 de marzo de 2026';
	const legalOwner = 'Ivan Yarupaitan Rivera';
	const legalRuc = '10710480031';
	const legalEmail = 'ivangyr321@gmail.com';

	const termsSections = [
		{
			title: '01. Objeto del servicio',
			content: [
				'Estas condiciones regulan la relación entre Vanchi y el cliente para la prestación del servicio Socio Tecnológico (WaaS).',
				'El servicio consiste en diseño, desarrollo, mantenimiento y evolución de activos digitales bajo suscripción.'
			]
		},
		{
			title: '02. Alcance del servicio',
			content: [
				'El alcance específico de cada plan se define en la propuesta comercial aceptada por el cliente.',
				'Solicitudes fuera del alcance inicial se evalúan como ampliaciones, módulos o reajustes de tarifa.'
			]
		},
		{
			title: '03. Pagos y modalidad de suscripción',
			content: [
				'El servicio opera bajo pago recurrente según la frecuencia acordada. El incumplimiento de pago puede activar suspensión temporal.',
				'Los importes y fechas de facturación se detallan en la propuesta o acuerdo comercial vigente.'
			]
		},
		{
			title: '04. Permanencia, suspensión y terminación',
			content: [
				'La relación comercial puede incluir plazos mínimos de permanencia según la modalidad contratada.',
				'Si existe mora o incumplimiento grave, Vanchi podrá suspender parcial o totalmente el servicio hasta regularización.',
				'La terminación anticipada puede generar cargos pendientes definidos contractualmente.'
			]
		},
		{
			title: '05. Soporte y niveles de atención',
			content: [
				'El soporte cubre incidencias operativas y ajustes contemplados en el plan activo.',
				'Los tiempos de respuesta son referenciales y dependen de la criticidad del incidente y del canal de contacto.'
			]
		},
		{
			title: '06. Propiedad intelectual y código fuente',
			content: [
				'Los derechos de propiedad intelectual se rigen por el acuerdo comercial aceptado por las partes.',
				'Cuando aplique, la liberación de código y entrega de repositorios se realiza bajo condiciones y costos previamente definidos.'
			]
		},
		{
			title: '07. Limitación de responsabilidad',
			content: [
				'Vanchi no garantiza ausencia absoluta de interrupciones, errores de terceros o contingencias externas a su control razonable.',
				'La responsabilidad se limita al marco legal aplicable y a lo expresamente pactado en el servicio contratado.'
			]
		},
		{
			title: '08. Protección de datos y confidencialidad',
			content: [
				'El tratamiento de datos personales se rige por la Política de Privacidad vigente.',
				'Las partes se comprometen a usar la información compartida de forma confidencial y conforme a la finalidad del servicio.'
			]
		},
		{
			title: '09. Modificaciones de estas condiciones',
			content: [
				'Vanchi puede actualizar estas condiciones para reflejar cambios legales, operativos o del modelo de servicio.',
				`Las versiones actualizadas se publicarán en este sitio y entrarán en vigencia desde su fecha de publicación (${updatedAt}).`
			]
		},
		{
			title: '10. Contacto legal',
			content: [
				`Titular: ${legalOwner} — RUC: ${legalRuc}.`,
				`Para consultas legales o contractuales puedes escribir a ${legalEmail}.`
			]
		}
	] as const;
</script>

<SEO
	title="Condiciones del Servicio | Vanchi"
	description="Condiciones generales del servicio Socio Tecnológico (WaaS): alcance, pagos, soporte, propiedad intelectual, responsabilidad y terminación."
	url="https://www.vanchi.pro/condiciones-del-servicio"
/>

<main class="min-h-screen py-24 lg:py-32">
	<div class="container mx-auto max-w-4xl px-4">
		<a
			href={resolve('/precios')}
			class="mb-8 inline-flex items-center gap-2 text-sm text-base-content/60 transition-colors hover:text-primary"
		>
			<ArrowLeft size={16} />
			Volver a Precios
		</a>

		<header class="mb-16 border-b border-white/10 pb-10">
			<div
				class="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 text-primary"
			>
				<FileText size={32} />
			</div>
			<h1 class="mb-4 font-serif text-4xl font-bold tracking-tight text-base-content lg:text-5xl">
				Condiciones del <span
					class="bg-linear-to-r from-primary via-yellow-200 to-primary bg-clip-text text-transparent italic"
					>Servicio</span
				>
			</h1>
			<p class="text-lg text-base-content/70">
				Este documento define las reglas de colaboración comercial y técnica entre Vanchi y sus
				clientes bajo el modelo de agencia tecnológica con servicio principal Socio Tecnológico
				(WaaS).
			</p>
			<div class="mt-5 flex flex-wrap gap-2 text-sm text-base-content/60">
				<span class="rounded-full border border-white/10 bg-base-200/40 px-3 py-1">
					Titular: {legalOwner}
				</span>
				<span class="rounded-full border border-white/10 bg-base-200/40 px-3 py-1">
					RUC: {legalRuc}
				</span>
				<span class="rounded-full border border-white/10 bg-base-200/40 px-3 py-1">
					Actualizado: {updatedAt}
				</span>
			</div>
		</header>

		<article
			class="prose-invert prose-p:text-base-content/70 prose-headings:text-base-content prose-headings:font-serif prose max-w-none space-y-12"
		>
			{#each termsSections as section (section.title)}
				<section
					class="rounded-2xl border border-white/5 bg-base-200/30 p-6 transition-colors duration-300 hover:border-primary/20 lg:p-8"
				>
					<h2 class="text-2xl font-bold">{section.title}</h2>
					<div class="mt-4 space-y-4">
						{#each section.content as paragraph (paragraph)}
							<p>{paragraph}</p>
						{/each}
					</div>
				</section>
			{/each}
		</article>

		<div class="mt-16 border-t border-white/10 pt-10 text-center">
			<div class="flex flex-wrap justify-center gap-3">
				<a href={resolve('/precios')} class="btn">Ver planes y precios</a>
				<a href={resolve('/waas')} class="btn">Ver modelo WaaS</a>
				<a href={resolve('/politica-de-privacidad')} class="btn">Ver política de privacidad</a>
				<a href={resolve('/eliminacion-de-datos-de-usuario')} class="btn"
					>Proceso de eliminación de datos</a
				>
			</div>
		</div>
	</div>
</main>

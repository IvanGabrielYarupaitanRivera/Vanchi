<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import { resolve } from '$app/paths';
	import { ArrowLeft, ShieldCheck } from '@lucide/svelte';

	const updatedAt = '31 de marzo de 2026';
	const legalOwner = 'Ivan Yarupaitan Rivera';
	const legalRuc = '10710480031';
	const legalEmail = 'ivangyr321@gmail.com';

	const policySections = [
		{
			title: '01. Responsable del tratamiento',
			content: [
				`El responsable del tratamiento de datos personales es ${legalOwner}, identificado con RUC ${legalRuc}.`,
				`Para consultas sobre privacidad y ejercicio de derechos, puedes escribir a ${legalEmail}.`,
				'Esta política aplica al sitio web, formularios de contacto y canales comerciales asociados al servicio Socio Tecnológico (WaaS).'
			]
		},
		{
			title: '02. Datos que recopilamos',
			content: [
				'Podemos recopilar datos de identificación y contacto cuando completas formularios, solicitas una propuesta o escribes por canales comerciales (como correo y WhatsApp).',
				'También recopilamos datos técnicos mínimos necesarios para seguridad y operación del sitio, como dirección IP, tipo de dispositivo, navegador y registros de acceso.'
			]
		},
		{
			title: '03. Finalidades del tratamiento',
			content: [
				'Usamos tus datos para responder consultas, preparar propuestas comerciales, coordinar reuniones, brindar soporte y gestionar la relación precontractual o contractual.',
				'No utilizamos tus datos para finalidades incompatibles con la prestación del servicio ni vendemos bases de datos a terceros.'
			]
		},
		{
			title: '04. Base legal',
			content: [
				'La base legal principal es tu consentimiento al enviarnos datos por formularios o canales de contacto.',
				'En algunos casos también aplicamos interés legítimo para atender solicitudes comerciales y operar el servicio de forma segura y continua.'
			]
		},
		{
			title: '05. Conservación de datos',
			content: [
				'Toda solicitud comercial se conserva por un plazo referencial de 12 meses para seguimiento de atención, auditoría interna y continuidad de la conversación comercial.',
				'Podemos conservar información por más tiempo cuando exista obligación legal, defensa ante reclamos o cumplimiento contractual vigente.'
			]
		},
		{
			title: '06. Proveedores y plataformas de terceros',
			content: [
				'Para operar como agencia tecnológica utilizamos plataformas de infraestructura, mensajería y servicios técnicos de terceros. Estas plataformas actúan como encargados del tratamiento según corresponda.',
				'Cuando usamos canales de Meta/WhatsApp, el tratamiento también puede quedar sujeto a las políticas de esas plataformas.'
			]
		},
		{
			title: '07. Derechos ARCO',
			content: [
				'Puedes solicitar acceso, rectificación, cancelación u oposición sobre tus datos personales (derechos ARCO).',
				`Para ejercerlos, envía una solicitud a ${legalEmail} indicando tu identificación y el derecho que deseas ejercer.`
			]
		},
		{
			title: '08. Seguridad',
			content: [
				'Aplicamos medidas técnicas y organizativas razonables para proteger los datos frente a accesos no autorizados, pérdida, alteración o uso indebido.',
				'Ningún sistema es absolutamente infalible, pero mantenemos prácticas de mejora continua en seguridad y operación.'
			]
		},
		{
			title: '09. Cookies y tecnologías similares',
			content: [
				'Actualmente usamos únicamente cookies técnicas mínimas necesarias para el funcionamiento del sitio web y su seguridad.',
				'En caso de incorporar cookies analíticas o publicitarias en el futuro, esta política será actualizada para reflejarlo con transparencia.'
			]
		},
		{
			title: '10. Cambios de esta política',
			content: [
				'Podemos actualizar esta política cuando cambie la normativa aplicable, la forma de prestar el servicio o la infraestructura tecnológica utilizada.',
				`La versión vigente se identifica por su fecha de actualización: ${updatedAt}.`
			]
		}
	] as const;
</script>

<SEO
	title="Política de Privacidad | Vanchi"
	description="Conoce cómo Vanchi recopila, usa y protege los datos personales en su servicio de Socio Tecnológico (WaaS)."
	url="https://www.vanchi.pro/politica-de-privacidad"
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
				<ShieldCheck size={32} />
			</div>
			<h1 class="mb-4 font-serif text-4xl font-bold tracking-tight text-base-content lg:text-5xl">
				Política de <span
					class="bg-linear-to-r from-primary via-yellow-200 to-primary bg-clip-text text-transparent italic"
					>Privacidad</span
				>
			</h1>
			<p class="text-lg text-base-content/70">
				En Vanchi operamos como agencia tecnológica bajo el modelo Socio Tecnológico (WaaS). Esta
				política explica cómo tratamos los datos personales con enfoque de transparencia y
				responsabilidad.
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
			{#each policySections as section (section.title)}
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
				<a href={resolve('/condiciones-del-servicio')} class="btn">Ver condiciones del servicio</a>
				<a href={resolve('/eliminacion-de-datos-de-usuario')} class="btn"
					>Solicitar eliminación de datos</a
				>
			</div>
		</div>
	</div>
</main>

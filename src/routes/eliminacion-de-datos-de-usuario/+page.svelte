<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import { resolve } from '$app/paths';
	import { ArrowLeft, Trash2 } from '@lucide/svelte';

	const updatedAt = '31 de marzo de 2026';
	const legalOwner = 'Ivan Yarupaitan Rivera';
	const legalRuc = '10710480031';
	const legalEmail = 'ivangyr321@gmail.com';
	const responseWindow = 'hasta 15 días hábiles';

	const removalSteps = [
		{
			title: '01. Canal oficial de solicitud',
			content: [
				`Para solicitar la eliminación de datos personales debes escribir al correo ${legalEmail}.`,
				'No procesamos solicitudes de eliminación por canales informales que no permitan verificar identidad y trazabilidad.'
			]
		},
		{
			title: '02. Validación de identidad',
			content: [
				'Para proteger tus datos, validaremos que quien solicita la eliminación sea el titular o su representante autorizado.',
				'Podremos solicitar información adicional mínima para confirmar identidad antes de ejecutar cualquier acción.'
			]
		},
		{
			title: '03. Datos que pueden eliminarse',
			content: [
				'Se pueden eliminar datos de contacto y comunicación comercial gestionados directamente por Vanchi, siempre que no exista obligación legal o contractual de conservación.',
				'También se podrán anonimizar registros cuando técnicamente sea la opción más segura para preservar integridad operativa.'
			]
		},
		{
			title: '04. Plazo de atención',
			content: [
				`El plazo referencial de atención es ${responseWindow}, contado desde la validación completa de la solicitud.`,
				'Si el caso requiere revisión adicional, te informaremos oportunamente con el estado y motivo de la ampliación.'
			]
		},
		{
			title: '05. Excepciones legales y contractuales',
			content: [
				'Podremos conservar datos cuando exista obligación legal, prevención de fraude, defensa ante reclamos o contrato vigente que exija custodia mínima de información.',
				'En esos casos, limitaremos el tratamiento al mínimo necesario y por el tiempo estrictamente requerido.'
			]
		},
		{
			title: '06. Constancia de cierre',
			content: [
				'Una vez concluido el proceso, enviaremos constancia de atención por el mismo canal de solicitud.',
				'La constancia indicará si los datos fueron eliminados, anonimizados o conservados por causal legal específica.'
			]
		},
		{
			title: '07. Datos del responsable',
			content: [
				`Responsable: ${legalOwner} (RUC ${legalRuc}).`,
				`Contacto oficial para eliminación y privacidad: ${legalEmail}.`
			]
		}
	] as const;
</script>

<SEO
	title="Eliminación de Datos de Usuario | Vanchi"
	description="Procedimiento para solicitar eliminación de datos personales: canal oficial, validación de identidad, plazos, excepciones y constancia de cierre."
	url="https://www.vanchi.pro/eliminacion-de-datos-de-usuario"
/>

<main class="min-h-screen py-24 lg:py-32">
	<div class="container mx-auto max-w-4xl px-4">
		<a
			href="https://www.vanchi.pro/politica-de-privacidad"
			class="mb-8 inline-flex items-center gap-2 text-sm text-base-content/60 transition-colors hover:text-primary"
		>
			<ArrowLeft size={16} />
			Volver a Política de Privacidad
		</a>

		<header class="mb-16 border-b border-white/10 pb-10">
			<div
				class="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 text-primary"
			>
				<Trash2 size={32} />
			</div>
			<h1 class="mb-4 font-serif text-4xl font-bold tracking-tight text-base-content lg:text-5xl">
				Eliminación de <span
					class="bg-linear-to-r from-primary via-yellow-200 to-primary bg-clip-text text-transparent italic"
					>Datos de Usuario</span
				>
			</h1>
			<p class="text-lg text-base-content/70">
				Este procedimiento explica cómo solicitar la eliminación de datos personales tratados por
				Vanchi en el marco de su servicio como agencia tecnológica.
			</p>
			<div class="mt-5 flex flex-wrap gap-2 text-sm text-base-content/60">
				<span class="rounded-full border border-white/10 bg-base-200/40 px-3 py-1">
					Titular: {legalOwner}
				</span>
				<span class="rounded-full border border-white/10 bg-base-200/40 px-3 py-1">
					RUC: {legalRuc}
				</span>
				<span class="rounded-full border border-white/10 bg-base-200/40 px-3 py-1">
					Plazo de atención: {responseWindow}
				</span>
				<span class="rounded-full border border-white/10 bg-base-200/40 px-3 py-1">
					Actualizado: {updatedAt}
				</span>
			</div>
		</header>

		<article
			class="prose-invert prose-p:text-base-content/70 prose-headings:text-base-content prose-headings:font-serif prose max-w-none space-y-12"
		>
			{#each removalSteps as section (section.title)}
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
				<a href="https://www.vanchi.pro/politica-de-privacidad" class="btn"
					>Ver política de privacidad</a
				>
				<a href="https://www.vanchi.pro/condiciones-del-servicio" class="btn"
					>Ver condiciones del servicio</a
				>
				<a href={resolve('/waas')} class="btn">Ver modelo WaaS</a>
			</div>
			<p class="mx-auto mt-6 max-w-2xl text-sm leading-loose text-base-content/60">
				Para iniciar una solicitud, escríbenos a <strong>{legalEmail}</strong> con el asunto “Eliminación
				de datos” y los datos de identificación necesarios para validar titularidad.
			</p>
		</div>
	</div>
</main>

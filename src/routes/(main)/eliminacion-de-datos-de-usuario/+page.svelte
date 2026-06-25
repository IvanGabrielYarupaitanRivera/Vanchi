<script lang="ts">
	import { resolve } from '$app/paths';
	import { ArrowLeft, ArrowUpRight } from '@lucide/svelte';
	import SEO from '$lib/components/SEO.svelte';
	import SectionLayout from '$lib/components/ui/SectionLayout/SectionLayout.svelte';
	import DataBlock from '$lib/components/ui/DataBlock/DataBlock.svelte';
	import CommandAction from '$lib/components/ui/CommandAction/CommandAction.svelte';

	const updatedAt = '24 de junio de 2026';
	const effectiveFrom = '1 de julio de 2026';
	const documentVersion = 'v2.0';
	const legalCompany = 'VANCHI CORPORATION E.I.R.L.';
	const legalRuc = '20615874591';
	const legalOwner = 'Ivan Yarupaitan Rivera';
	const legalEmail = 'ivangyr321@gmail.com';
	const legalAddress =
		'Cal. Las Estrellas Nro. 153, Urb. Los Eucaliptos, Huancayo, Junín, Perú';
	const responseWindow = 'hasta 15 días hábiles';

	const group1 = [
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
				'La validación mínima requiere correo registrado y documento firmado de identificación del solicitante antes de ejecutar cualquier acción.'
			]
		}
	] as const;

	const group2 = [
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
		}
	] as const;

	const group3 = [
		{
			title: '05. Excepciones legales y contractuales',
			content: [
				'Podremos conservar datos cuando exista obligación legal, prevención de fraude, defensa ante reclamos o contrato vigente que exija custodia mínima de información.',
				'También pueden conservarse temporalmente registros técnicos en respaldos de seguridad hasta por 30 días post-cierre del servicio.',
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
			title: '07. Alcance técnico de la eliminación',
			content: [
				'La eliminación aplica a datos en entornos activos administrados por Vanchi y a respaldos según la ventana técnica vigente de 30 días.',
				'Si existiera restauración operativa dentro de esa ventana, se reejecutará el proceso de eliminación para mantener consistencia.'
			]
		},
		{
			title: '08. Datos del responsable',
			content: [
				`${legalCompany} — RUC: ${legalRuc}.`,
				`Titular: ${legalOwner}.`,
				`Domicilio fiscal: ${legalAddress}.`,
				`Contacto oficial para eliminación y privacidad: ${legalEmail}.`
			]
		}
	] as const;
</script>

<SEO
	title="Eliminación de Datos de Usuario | Vanchi"
	description="Procedimiento para solicitar eliminación de datos personales en VANCHI CORPORATION E.I.R.L. (RUC 20615874591): canal oficial, validación de identidad, plazos, excepciones y constancia de cierre."
	url="https://www.vanchi.pro/eliminacion-de-datos-de-usuario"
/>

<main>
	<div class="mx-auto max-w-5xl px-4">
		<!-- Cabecera del documento -->
		<div class="py-24 lg:py-32">
			<a
				href={resolve('/(main)/politica-de-privacidad')}
				class="inline-flex items-center gap-2 font-mono text-sm text-base-content/60 transition-colors hover:text-base-content"
			>
				<ArrowLeft size={14} />
				Volver a Política de Privacidad
			</a>

			<header class="mt-10 border-b border-base-300 pb-10">
				<h1 class="vanchi-display text-5xl text-base-content lg:text-7xl">
					Eliminación de <span class="italic">Datos de Usuario</span>
				</h1>
				<p class="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-base-content/60">
					Este procedimiento explica cómo solicitar la eliminación de datos personales tratados por
					Vanchi en el marco de su servicio como agencia tecnológica.
				</p>
				<div class="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs tracking-[0.15em] text-secondary uppercase">
					<span>{legalCompany}</span>
					<span>RUC: {legalRuc}</span>
					<span>v.{documentVersion}</span>
					<span>Vigente: {effectiveFrom}</span>
					<span>Plazo: {responseWindow}</span>
					<span>Actualizado: {updatedAt}</span>
				</div>
			</header>
		</div>
	</div>

	<!-- Grupo 1: Solicitud -->
	<SectionLayout variant="secondary" number="01" label="SOLICITUD">
		<div class="flex flex-col gap-px">
			{#each group1 as section (section.title)}
				<DataBlock level="compact">
					<h2 class="vanchi-eyebrow mb-4">{section.title}</h2>
					<div class="space-y-4 font-mono text-sm leading-relaxed text-base-content/80">
						{#each section.content as paragraph (paragraph)}
							<p>{paragraph}</p>
						{/each}
					</div>
				</DataBlock>
			{/each}
		</div>
	</SectionLayout>

	<!-- Grupo 2: Ejecución -->
	<SectionLayout variant="secondary" number="02" label="EJECUCIÓN">
		<div class="flex flex-col gap-px">
			{#each group2 as section (section.title)}
				<DataBlock level="compact">
					<h2 class="vanchi-eyebrow mb-4">{section.title}</h2>
					<div class="space-y-4 font-mono text-sm leading-relaxed text-base-content/80">
						{#each section.content as paragraph (paragraph)}
							<p>{paragraph}</p>
						{/each}
					</div>
				</DataBlock>
			{/each}
		</div>
	</SectionLayout>

	<!-- Grupo 3: Excepciones y Alcance -->
	<SectionLayout variant="secondary" number="03" label="EXCEPCIONES Y ALCANCE">
		<div class="flex flex-col gap-px">
			{#each group3 as section (section.title)}
				<DataBlock level="compact">
					<h2 class="vanchi-eyebrow mb-4">{section.title}</h2>
					<div class="space-y-4 font-mono text-sm leading-relaxed text-base-content/80">
						{#each section.content as paragraph (paragraph)}
							<p>{paragraph}</p>
						{/each}
					</div>
				</DataBlock>
			{/each}
		</div>
	</SectionLayout>

	<!-- Footer links -->
	<div class="mx-auto max-w-5xl border-t border-base-300 px-4 py-16">
		<div class="flex flex-wrap justify-center gap-3">
			<CommandAction level="ghost" label="Ver planes y precios" href={resolve('/(main)/precios')} icon={ArrowUpRight} />
			<CommandAction level="ghost" label="Metodología GaaS" href={resolve('/(main)/metodologia')} icon={ArrowUpRight} />
			<CommandAction level="ghost" label="Política de privacidad" href={resolve('/(main)/politica-de-privacidad')} icon={ArrowUpRight} />
			<CommandAction level="ghost" label="Condiciones del servicio" href={resolve('/(main)/condiciones-del-servicio')} icon={ArrowUpRight} />
		</div>
		<p class="mx-auto mt-8 max-w-2xl text-center font-mono text-xs leading-relaxed text-base-content/60">
			Para iniciar una solicitud, escríbenos a <strong class="text-base-content">{legalEmail}</strong> con el asunto "Eliminación
			de datos" y adjunta correo registrado + documento firmado para validar titularidad.
		</p>
	</div>
</main>

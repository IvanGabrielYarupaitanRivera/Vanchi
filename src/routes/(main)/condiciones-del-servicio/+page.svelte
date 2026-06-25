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

	const directQnA = [
		{
			question: '¿El cliente compra el código con la mensualidad?',
			answer:
				'No. La mensualidad cubre derecho de uso, mantenimiento y continuidad del servicio. El código puede liberarse mediante la cuota de liberación definida en el acuerdo.'
		},
		{
			question: '¿Qué sucede si hay cancelación antes de 12 meses?',
			answer:
				'Se aplica penalidad contractual equivalente al 50% de las mensualidades restantes, como recuperación parcial de la inversión inicial de desarrollo.'
		},
		{
			question: '¿El dominio pertenece al cliente?',
			answer:
				'Sí. El dominio es del cliente y puede gestionarlo directamente o delegar la compra técnica, siempre a su nombre.'
		},
		{
			question: '¿Cómo se escalan nuevas funcionalidades?',
			answer:
				'Con módulos adicionales que ajustan la mensualidad total. Este enfoque evita rehacer el proyecto desde cero y permite crecimiento progresivo.'
		}
	] as const;

	const termsFaqStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: directQnA.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer
			}
		}))
	};

	const termsFaqStructuredDataJson = JSON.stringify(termsFaqStructuredData).replace(
		/</g,
		'\\u003c'
	);

	const sectionsGroup1 = [
		{
			title: '01. El modelo de suscripción (GaaS)',
			content: [
				'El cliente entiende que no está comprando un software a perpetuidad de un solo pago, sino contratando un derecho de uso mensual.',
				'El código fuente, la lógica del sistema y la infraestructura base son propiedad de Vanchi durante la vigencia de la suscripción.',
				'El pago mensual garantiza continuidad del servicio, mantenimiento técnico y soporte operativo según el plan contratado.'
			]
		},
		{
			title: '02. Compromiso de permanencia (12 meses)',
			content: [
				'Para reducir el costo inicial de arquitectura y diseño, el cliente asume una permanencia mínima de doce (12) meses consecutivos.',
				'Si el cliente cancela antes de cumplir ese período, se aplica una penalidad equivalente al 50% de las mensualidades restantes.'
			]
		},
		{
			title: '03. Propiedad del dominio',
			content: [
				'El dominio oficial del proyecto es propiedad del cliente en todo momento.',
				'La renovación del dominio corre por cuenta del cliente y puede gestionarse directamente o delegarse técnicamente a Vanchi, siempre a nombre del cliente.',
				'Si el servicio se cancela, el cliente mantiene control total del dominio; el dominio no implica transferencia automática del código del sistema.'
			]
		},
		{
			title: '04. Cuota de liberación',
			content: [
				'El cliente puede solicitar la liberación del código bajo una cuota de liberación definida en el acuerdo comercial.',
				'Como referencia, la cuota base para landing pages es S/ 600; para sistemas más complejos se cotiza según volumen de código y datos.',
				'Luego de la liberación y entrega de repositorios, el cliente asume costos y operación de hosting, SSL y mantenimiento técnico.'
			]
		}
	] as const;

	const sectionsGroup2 = [
		{
			title: '05. Suspensión por falta de pago',
			content: [
				'La facturación debe atenderse en las fechas acordadas para mantener continuidad operativa.',
				'Con 5 días de retraso puede aplicarse suspensión temporal del servicio.',
				'Con 30 días de retraso y sin comunicación activa puede ejecutarse baja remota, sin eximir de deudas contractuales vigentes.',
				'Tras terminación del servicio, los respaldos técnicos se conservan por 30 días y luego se eliminan de forma permanente.'
			]
		},
		{
			title: '06. Actualizaciones, modificaciones y módulos',
			content: [
				'La mensualidad incluye mantenimiento preventivo y ajustes menores contemplados en el plan.',
				'Se consideran ajustes menores cambios puntuales de texto, correcciones visuales y ajustes simples dentro de la estructura existente.',
				'Cambios estructurales, nuevas páginas, integraciones externas o funcionalidades inéditas se consideran módulos adicionales y pueden ajustar la tarifa mensual.',
				'Este modelo permite escalar progresivamente sin rehacer el proyecto desde cero.'
			]
		},
		{
			title: '07. SLA y niveles de respuesta',
			content: [
				'Para incidencias críticas, el tiempo referencial de primera respuesta es de hasta 12 horas.',
				'Para soporte estándar y solicitudes no críticas, el tiempo referencial de respuesta es de 24 a 48 horas.',
				'Estos tiempos no aplican en casos de fuerza mayor, caídas de terceros o eventos fuera del control razonable de Vanchi.'
			]
		}
	] as const;

	const sectionsGroup3 = [
		{
			title: '08. Limitación de responsabilidad',
			content: [
				'Vanchi no garantiza ausencia absoluta de interrupciones, errores de terceros o contingencias externas a su control razonable.',
				'La responsabilidad se limita al marco legal aplicable y a lo expresamente pactado en el servicio contratado.'
			]
		},
		{
			title: '09. Protección de datos y confidencialidad',
			content: [
				'El tratamiento de datos personales se rige por la Política de Privacidad vigente.',
				'Las partes se comprometen a usar la información compartida de forma confidencial y conforme a la finalidad del servicio.'
			]
		},
		{
			title: '10. Jurisdicción y resolución de disputas',
			content: [
				'Estas condiciones se interpretan y ejecutan conforme a las leyes de la República del Perú.',
				'Para cualquier controversia, las partes se someten a la competencia de los juzgados de Huancayo, Junín.',
				`Los reclamos formales deben enviarse a ${legalEmail}; Vanchi responderá en un plazo referencial de hasta 5 días hábiles.`
			]
		},
		{
			title: '11. Modificaciones de estas condiciones',
			content: [
				'Vanchi puede actualizar estas condiciones para reflejar cambios legales, operativos o del modelo de servicio.',
				`Las versiones actualizadas se publicarán en este sitio y entrarán en vigencia desde su fecha de publicación (${updatedAt}).`
			]
		},
		{
			title: '12. Contacto legal',
			content: [
				`${legalCompany} — RUC: ${legalRuc}.`,
				`Titular: ${legalOwner}.`,
				`Domicilio fiscal: ${legalAddress}.`,
				`Para consultas legales o contractuales puedes escribir a ${legalEmail}.`
			]
		}
	] as const;
</script>

<SEO
	title="Condiciones del Servicio | Vanchi"
	description="Condiciones generales del servicio Socio Tecnológico (GaaS): alcance, pagos, soporte, propiedad intelectual, responsabilidad y terminación. VANCHI CORPORATION E.I.R.L. RUC 20615874591."
	url="https://www.vanchi.pro/condiciones-del-servicio"
/>

<svelte:head>
	<svelte:element this={'script'} type="application/ld+json">
		{termsFaqStructuredDataJson}
	</svelte:element>
</svelte:head>

<main>
	<div class="mx-auto max-w-5xl px-4">
		<!-- Cabecera del documento -->
		<div class="py-24 lg:py-32">
			<a
				href={resolve('/(main)/precios')}
				class="inline-flex items-center gap-2 font-mono text-sm text-base-content/60 transition-colors hover:text-base-content"
			>
				<ArrowLeft size={14} />
				Volver a Precios
			</a>

			<header class="mt-10 border-b border-base-300 pb-10">
				<h1 class="vanchi-display text-5xl text-base-content lg:text-7xl">
					Condiciones del <span class="italic">Servicio</span>
				</h1>
				<p class="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-base-content/60">
					Este documento define las reglas de colaboración comercial y técnica entre Vanchi y sus
					clientes bajo el modelo de agencia tecnológica con servicio principal Socio Tecnológico
					(GaaS).
				</p>
				<div class="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs tracking-[0.15em] text-secondary uppercase">
					<span>{legalCompany}</span>
					<span>RUC: {legalRuc}</span>
					<span>v.{documentVersion}</span>
					<span>Vigente: {effectiveFrom}</span>
					<span>Actualizado: {updatedAt}</span>
				</div>
			</header>
		</div>
	</div>

	<!-- Grupo 1: Términos del Servicio -->
	<SectionLayout variant="secondary" number="01" label="TÉRMINOS DEL SERVICIO">
		<div class="flex flex-col gap-px">
			{#each sectionsGroup1 as section (section.title)}
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

	<!-- Grupo 2: Operación y Soporte -->
	<SectionLayout variant="secondary" number="02" label="OPERACIÓN Y SOPORTE">
		<div class="flex flex-col gap-px">
			{#each sectionsGroup2 as section (section.title)}
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

	<!-- Grupo 3: Marco Legal -->
	<SectionLayout variant="secondary" number="03" label="MARCO LEGAL">
		<div class="flex flex-col gap-px">
			{#each sectionsGroup3 as section (section.title)}
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

	<!-- Grupo 4: Preguntas Frecuentes -->
	<SectionLayout variant="secondary" number="04" label="PREGUNTAS FRECUENTES">
		<div class="flex flex-col gap-px">
			{#each directQnA as item (item.question)}
				<details class="border border-base-300 bg-base-200 p-6 open:border-base-content lg:p-8">
					<summary class="cursor-pointer font-mono text-sm font-medium text-base-content">
						{item.question}
					</summary>
					<p class="mt-4 font-mono text-sm leading-relaxed text-base-content/60">
						{item.answer}
					</p>
				</details>
			{/each}
		</div>
	</SectionLayout>

	<!-- Footer links -->
	<div class="mx-auto max-w-5xl border-t border-base-300 px-4 py-16">
		<div class="flex flex-wrap justify-center gap-3">
			<CommandAction level="ghost" label="Ver planes y precios" href={resolve('/(main)/precios')} icon={ArrowUpRight} />
			<CommandAction level="ghost" label="Metodología GaaS" href={resolve('/(main)/metodologia')} icon={ArrowUpRight} />
			<CommandAction level="ghost" label="Política de privacidad" href={resolve('/(main)/politica-de-privacidad')} icon={ArrowUpRight} />
			<CommandAction level="ghost" label="Eliminación de datos" href={resolve('/(main)/eliminacion-de-datos-de-usuario')} icon={ArrowUpRight} />
		</div>
	</div>
</main>

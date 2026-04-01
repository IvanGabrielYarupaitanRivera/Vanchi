<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import { resolve } from '$app/paths';
	import { ArrowLeft, FileText } from '@lucide/svelte';

	const updatedAt = '31 de marzo de 2026';
	const effectiveFrom = '1 de abril de 2026';
	const documentVersion = 'v1.1';
	const legalOwner = 'Ivan Yarupaitan Rivera';
	const legalRuc = '10710480031';
	const legalEmail = 'ivangyr321@gmail.com';

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

	const termsSections = [
		{
			title: '01. El Modelo de Suscripción (SaaS)',
			content: [
				'El cliente entiende que no está comprando un software a perpetuidad de un solo pago, sino contratando un derecho de uso mensual.',
				'El código fuente, la lógica del sistema y la infraestructura base son propiedad de Vanchi durante la vigencia de la suscripción.',
				'El pago mensual garantiza continuidad del servicio, mantenimiento técnico y soporte operativo según el plan contratado.'
			]
		},
		{
			title: '02. Compromiso de Permanencia (12 meses)',
			content: [
				'Para reducir el costo inicial de arquitectura y diseño, el cliente asume una permanencia mínima de doce (12) meses consecutivos.',
				'Si el cliente cancela antes de cumplir ese periodo, se aplica una penalidad equivalente al 50% de las mensualidades restantes.'
			]
		},
		{
			title: '03. Propiedad del Dominio (La Identidad)',
			content: [
				'El dominio oficial del proyecto es propiedad del cliente en todo momento.',
				'La renovación del dominio corre por cuenta del cliente y puede gestionarse directamente o delegarse técnicamente a Vanchi, siempre a nombre del cliente.',
				'Si el servicio se cancela, el cliente mantiene control total del dominio; el dominio no implica transferencia automática del código del sistema.'
			]
		},
		{
			title: '04. Cuota de Liberación (si se requiere el código)',
			content: [
				'El cliente puede solicitar la liberación del código bajo una cuota de liberación definida en el acuerdo comercial.',
				'Como referencia, la cuota base para landing pages es S/ 600; para sistemas más complejos se cotiza según volumen de código y datos.',
				'Luego de la liberación y entrega de repositorios, el cliente asume costos y operación de hosting, SSL y mantenimiento técnico.'
			]
		},
		{
			title: '05. Suspensión por Falta de Pago',
			content: [
				'La facturación debe atenderse en las fechas acordadas para mantener continuidad operativa.',
				'Con 5 días de retraso puede aplicarse suspensión temporal del servicio.',
				'Con 30 días de retraso y sin comunicación activa puede ejecutarse baja remota, sin eximir de deudas contractuales vigentes.',
				'Tras terminación del servicio, los respaldos técnicos se conservan por 30 días y luego se eliminan de forma permanente.'
			]
		},
		{
			title: '06. Actualizaciones, Modificaciones y Módulos',
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
		},
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
					Versión: {documentVersion}
				</span>
				<span class="rounded-full border border-white/10 bg-base-200/40 px-3 py-1">
					Vigente desde: {effectiveFrom}
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

		<section class="mt-16" aria-labelledby="legal-qa">
			<h2 id="legal-qa" class="mb-6 text-3xl font-bold lg:text-4xl">Q&A directo</h2>
			<div class="flex flex-col gap-4">
				{#each directQnA as item (item.question)}
					<details
						class="rounded-2xl border border-white/10 bg-base-200/40 p-5 open:border-primary/30"
					>
						<summary class="cursor-pointer list-none text-base font-semibold text-base-content">
							{item.question}
						</summary>
						<p class="mt-3 leading-loose text-base-content/70">{item.answer}</p>
					</details>
				{/each}
			</div>
		</section>

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

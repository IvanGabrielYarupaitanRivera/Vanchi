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

	const group1 = [
		{
			title: '01. Responsable del tratamiento',
			content: [
				`El responsable del tratamiento de datos personales es ${legalCompany}, identificado con RUC ${legalRuc}, representada por ${legalOwner}.`,
				`Para consultas sobre privacidad y ejercicio de derechos, puedes escribir a ${legalEmail}.`,
				'Esta política aplica al sitio web, formularios de contacto y canales comerciales asociados al servicio Socio Tecnológico (GaaS).'
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
		}
	] as const;

	const group2 = [
		{
			title: '05. Conservación de datos',
			content: [
				'Toda solicitud comercial de leads no clientes se conserva por un plazo referencial de 12 meses para seguimiento de atención y continuidad comercial.',
				'Los registros técnicos y de seguridad se conservan solo por el tiempo razonablemente necesario para operación, prevención de fraude y trazabilidad.',
				'Podemos conservar información por más tiempo cuando exista obligación legal, defensa ante reclamos o cumplimiento contractual vigente.'
			]
		},
		{
			title: '06. Proveedores y plataformas de terceros',
			content: [
				'Para operar como agencia tecnológica usamos subencargados por categorías: infraestructura en la nube, mensajería, analítica, correo transaccional y herramientas de soporte.',
				'No publicamos listado nominal en esta página por seguridad operativa, pero podemos informar categorías y finalidad de tratamiento cuando corresponda.',
				'Cuando usamos canales de Meta/WhatsApp, el tratamiento también puede quedar sujeto a las políticas de esas plataformas.'
			]
		},
		{
			title: '07. Transferencias internacionales',
			content: [
				'Algunos servicios de terceros pueden implicar transferencia internacional de datos bajo estándares contractuales y medidas razonables de seguridad.',
				'En todos los casos aplicamos criterios de minimización, necesidad y proporcionalidad para reducir exposición de datos personales.'
			]
		}
	] as const;

	const group3 = [
		{
			title: '08. Derechos ARCO',
			content: [
				'Puedes solicitar acceso, rectificación, cancelación u oposición sobre tus datos personales (derechos ARCO).',
				`Para ejercerlos, envía una solicitud a ${legalEmail} indicando tu identificación y el derecho que deseas ejercer.`
			]
		},
		{
			title: '09. Seguridad',
			content: [
				'Aplicamos medidas técnicas y organizativas razonables para proteger los datos frente a accesos no autorizados, pérdida, alteración o uso indebido.',
				'Ningún sistema es absolutamente infalible, pero mantenemos prácticas de mejora continua en seguridad y operación.'
			]
		},
		{
			title: '10. Cookies y tecnologías similares',
			content: [
				'Actualmente usamos únicamente cookies técnicas mínimas necesarias para el funcionamiento del sitio web y su seguridad.',
				'En caso de incorporar cookies analíticas o publicitarias en el futuro, esta política será actualizada para reflejarlo con transparencia.'
			]
		},
		{
			title: '11. Cambios de esta política',
			content: [
				'Podemos actualizar esta política cuando cambie la normativa aplicable, la forma de prestar el servicio o la infraestructura tecnológica utilizada.',
				`La versión vigente se identifica por su fecha de actualización: ${updatedAt}.`
			]
		}
	] as const;
</script>

<SEO
	title="Política de Privacidad | Vanchi"
	description="Conoce cómo VANCHI CORPORATION E.I.R.L. (RUC 20615874591) recopila, usa y protege los datos personales en su servicio de Socio Tecnológico (GaaS)."
	url="https://www.vanchi.pro/politica-de-privacidad"
/>

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
					Política de <span class="italic">Privacidad</span>
				</h1>
				<p class="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-base-content/60">
					En Vanchi operamos como agencia tecnológica bajo el modelo Socio Tecnológico (GaaS). Esta
					política explica cómo tratamos los datos personales con enfoque de transparencia y
					responsabilidad.
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

	<!-- Grupo 1: Tratamiento de Datos -->
	<SectionLayout variant="secondary" number="01" label="TRATAMIENTO DE DATOS">
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

	<!-- Grupo 2: Gestión de Datos -->
	<SectionLayout variant="secondary" number="02" label="GESTIÓN DE DATOS">
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

	<!-- Grupo 3: Derechos y Seguridad -->
	<SectionLayout variant="secondary" number="03" label="DERECHOS Y SEGURIDAD">
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
			<CommandAction
				level="ghost"
				label="Ver planes y precios"
				href={resolve('/(main)/precios')}
				icon={ArrowUpRight}
			/>
			<CommandAction
				level="ghost"
				label="Metodología GaaS"
				href={resolve('/(main)/metodologia')}
				icon={ArrowUpRight}
			/>
			<CommandAction
				level="ghost"
				label="Condiciones del servicio"
				href={resolve('/(main)/condiciones-del-servicio')}
				icon={ArrowUpRight}
			/>
			<CommandAction
				level="ghost"
				label="Eliminación de datos"
				href={resolve('/(main)/eliminacion-de-datos-de-usuario')}
				icon={ArrowUpRight}
			/>
		</div>
	</div>
</main>

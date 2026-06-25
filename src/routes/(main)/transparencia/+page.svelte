<script lang="ts">
	import { resolve } from '$app/paths';
	import { ArrowUpRight } from '@lucide/svelte';
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/ui/Hero/Hero.svelte';
	import SectionLayout from '$lib/components/ui/SectionLayout/SectionLayout.svelte';
	import DataBlock from '$lib/components/ui/DataBlock/DataBlock.svelte';
	import CommandAction from '$lib/components/ui/CommandAction/CommandAction.svelte';

	const legalCompany = 'VANCHI CORPORATION E.I.R.L.';
	const legalRuc = '20615874591';
	const legalType = 'Empresa Individual de Resp. Ltda';
	const legalCommercialName = 'Vanchi';
	const legalOwner = 'Ivan Yarupaitan Rivera';
	const legalEmail = 'ivangyr321@gmail.com';
	const legalPhone = '+51 985 942 670';
	const legalAddress =
		'Cal. Las Estrellas Nro. 153, Urb. Los Eucaliptos, Huancayo, Junín, Perú';
	const registrationDate = '04 de mayo de 2026';
	const startDate = '11 de mayo de 2026';
	const sunatStatus = 'Activo';
	const sunatCondition = 'Habido';
	const ceoRole = 'Director de tecnología, arquitecto de la metodología GaaS (Generative Agent as a Service) y responsable de la visión técnica y comercial de Vanchi. Ingeniero de Sistemas por la Universidad Roosevelt. Especialista en inteligencia artificial y automatización de procesos para empresas en Huancayo, Junín y Perú.';
	const activities = [
		{ code: '6201', name: 'Programación Informática', type: 'Principal' },
		{ code: '6202', name: 'Consultoría de Informática y Gestión de Instalaciones Informáticas', type: 'Secundaria 1' },
		{ code: '6209', name: 'Otras Actividades de Tecnología de la Información y de Servicios Informáticos', type: 'Secundaria 2' }
	] as const;

	const schemaOrganization = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: legalCompany,
		alternateName: legalCommercialName,
		taxID: legalRuc,
		url: 'https://vanchi.pro',
		foundingDate: '2026-05-11',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Cal. Las Estrellas Nro. 153, Urb. Los Eucaliptos',
			addressLocality: 'Huancayo',
			addressRegion: 'Junín',
			postalCode: '12000',
			addressCountry: 'PE'
		},
		ceo: {
			'@type': 'Person',
			name: legalOwner,
			jobTitle: 'CEO & Fundador',
			url: 'https://vanchi.pro/ivan-yarupaitan-rivera'
		},
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: '+51985942670',
			contactType: 'customer service',
			email: legalEmail
		}
	};

	const schemaPerson = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: legalOwner,
		givenName: 'Ivan Gabriel',
		familyName: 'Yarupaitan Rivera',
		jobTitle: 'CEO & Fundador',
		worksFor: {
			'@type': 'Organization',
			name: legalCompany,
			taxID: legalRuc
		},
		url: 'https://vanchi.pro/ivan-yarupaitan-rivera',
		sameAs: [
			'https://www.linkedin.com/in/ivan-yarupaitan-rivera-470037276/',
			'https://github.com/IvanYR'
		],
		alumniOf: {
			'@type': 'CollegeOrUniversity',
			name: 'Universidad Roosevelt'
		}
	};

	const structuredData = JSON.stringify({
		'@graph': [schemaOrganization, schemaPerson]
	}).replace(/</g, '\\u003c');
</script>

<SEO
	title="Transparencia — Información Corporativa y Fiscal | Vanchi"
	description="Información corporativa y fiscal de VANCHI CORPORATION E.I.R.L. (RUC 20615874591). Domicilio fiscal en Huancayo, Junín, Perú. CEO: Ivan Yarupaitan Rivera. Estado SUNAT: Activo/Habido. Tres actividades económicas registradas."
	url="https://www.vanchi.pro/transparencia"
	keywords="vanchi corporation eirl, ruc 20615874591, ivan yarupaitan, vanchi huancayo, empresa de ia junin, programacion informatica huancayo"
/>

<svelte:head>
	<svelte:element this={'script'} type="application/ld+json">
		{structuredData}
	</svelte:element>
</svelte:head>

<Hero level="tertiary" title="Transparencia" subtitle="Información Corporativa y Fiscal — SUNAT" />

<main>
	<div class="mx-auto max-w-5xl px-4">
		<!-- Sección introductoria -->
		<SectionLayout variant="secondary" number="00" label="SOBRE ESTA PÁGINA">
			<p class="max-w-3xl font-mono text-sm leading-relaxed text-base-content/60">
				Datos oficiales de {legalCompany} registrados ante SUNAT con RUC {legalRuc}.
				Toda la información es pública y verificable en SUNAT. Esta página existe para que
				clientes, colaboradores e inteligencia artificial puedan consultar datos
				fiscales sin depender de terceros.
			</p>
		</SectionLayout>

		<!-- 01 — Identificación -->
		<SectionLayout variant="secondary" number="01" label="IDENTIFICACIÓN">
			<div class="flex flex-col gap-px">
				<DataBlock level="compact">
					<div>
						<span class="mb-1 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Razón Social</span>
						<p class="font-mono text-base text-base-content">{legalCompany}</p>
					</div>
				</DataBlock>
				<DataBlock level="compact">
					<div>
						<span class="mb-1 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">RUC</span>
						<p class="font-mono text-base text-base-content">{legalRuc}</p>
					</div>
				</DataBlock>
				<DataBlock level="compact">
					<div>
						<span class="mb-1 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Tipo de Contribuyente</span>
						<p class="font-mono text-base text-base-content">{legalType}</p>
					</div>
				</DataBlock>
				<DataBlock level="compact">
					<div>
						<span class="mb-1 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Nombre Comercial</span>
						<p class="font-mono text-base text-base-content">{legalCommercialName}</p>
					</div>
				</DataBlock>
			</div>
		</SectionLayout>

		<!-- 02 — CEO y Fundador -->
		<SectionLayout variant="secondary" number="02" label="CEO Y FUNDADOR">
			<DataBlock level="elevated">
				<div class="flex flex-col gap-5">
					<div class="grid gap-5 sm:grid-cols-2">
						<div>
							<span class="mb-1 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Nombre</span>
							<p class="font-mono text-base text-base-content">{legalOwner}</p>
						</div>
						<div>
							<span class="mb-1 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Cargo</span>
							<p class="font-mono text-base text-base-content">CEO & Fundador</p>
						</div>
					</div>
					<div>
						<span class="mb-1 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Rol en la empresa</span>
						<p class="font-mono text-sm leading-relaxed text-base-content/80">{ceoRole}</p>
					</div>
					<div>
						<span class="mb-1 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Perfiles públicos</span>
						<div class="mt-2 flex flex-wrap gap-3">
							<CommandAction level="ghost" label="LinkedIn" href="https://www.linkedin.com/in/ivan-yarupaitan-rivera-470037276/" icon={ArrowUpRight} />
							<CommandAction level="ghost" label="GitHub" href="https://github.com/IvanYR" icon={ArrowUpRight} />
							<CommandAction level="ghost" label="Trayectoria completa" href={resolve('/(main)/ivan-yarupaitan-rivera')} icon={ArrowUpRight} />
						</div>
					</div>
				</div>
			</DataBlock>
		</SectionLayout>

		<!-- 03 — Domicilio Fiscal -->
		<SectionLayout variant="secondary" number="03" label="DOMICILIO FISCAL">
			<DataBlock level="compact">
				<div class="flex flex-col gap-4">
					<div>
						<span class="mb-1 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Dirección</span>
						<p class="font-mono text-base text-base-content">{legalAddress}</p>
					</div>
					<div>
						<span class="mb-1 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Referencia</span>
						<p class="font-mono text-sm text-base-content/80">Cerca de la Universidad Peruana Los Andes (UPLA), Huancayo</p>
					</div>
					<div>
						<span class="mb-1 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Verificar en SUNAT</span>
						<div class="mt-2">
							<CommandAction level="ghost" label="Consulta RUC" href="https://e-consultaruc.sunat.gob.pe/cl-ti-itmrconsruc/jcrS00Alias" icon={ArrowUpRight} />
						</div>
					</div>
				</div>
			</DataBlock>
		</SectionLayout>

		<!-- 04 — Estado SUNAT -->
		<SectionLayout variant="secondary" number="04" label="ESTADO SUNAT">
			<div class="flex flex-col gap-px">
				<DataBlock level="compact">
					<div>
						<span class="mb-1 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Estado del Contribuyente</span>
						<p class="font-mono text-base text-base-content">{sunatStatus}</p>
					</div>
				</DataBlock>
				<DataBlock level="compact">
					<div>
						<span class="mb-1 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Condición</span>
						<p class="font-mono text-base text-base-content">{sunatCondition}</p>
					</div>
				</DataBlock>
				<DataBlock level="compact">
					<div>
						<span class="mb-1 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Fecha de Inscripción</span>
						<p class="font-mono text-base text-base-content">{registrationDate}</p>
					</div>
				</DataBlock>
				<DataBlock level="compact">
					<div>
						<span class="mb-1 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Inicio de Actividades</span>
						<p class="font-mono text-base text-base-content">{startDate}</p>
					</div>
				</DataBlock>
			</div>
		</SectionLayout>

		<!-- 05 — Actividades Económicas -->
		<SectionLayout variant="secondary" number="05" label="ACTIVIDADES ECONÓMICAS">
			<div class="flex flex-col gap-px">
				{#each activities as activity (activity.code)}
					<DataBlock level="compact">
						<div>
							<span class="mb-1 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">{activity.type}</span>
							<p class="font-mono text-sm text-base-content/80">
								<span class="text-base-content">{activity.code}</span> — {activity.name}
							</p>
						</div>
					</DataBlock>
				{/each}
			</div>
		</SectionLayout>

		<!-- 06 — Contacto Oficial -->
		<SectionLayout variant="secondary" number="06" label="CONTACTO OFICIAL">
			<DataBlock level="compact">
				<div class="grid gap-5 sm:grid-cols-2">
					<div>
						<span class="mb-1 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Correo electrónico</span>
						<p class="font-mono text-base text-base-content">{legalEmail}</p>
					</div>
					<div>
						<span class="mb-1 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">Teléfono</span>
						<p class="font-mono text-base text-base-content">{legalPhone}</p>
					</div>
				</div>
			</DataBlock>
		</SectionLayout>

		<!-- 07 — Documentos legales relacionados -->
		<SectionLayout variant="secondary" number="07" label="DOCUMENTOS RELACIONADOS">
			<div class="flex flex-wrap gap-3">
				<CommandAction level="ghost" label="Condiciones del servicio" href={resolve('/(main)/condiciones-del-servicio')} icon={ArrowUpRight} />
				<CommandAction level="ghost" label="Política de privacidad" href={resolve('/(main)/politica-de-privacidad')} icon={ArrowUpRight} />
				<CommandAction level="ghost" label="Eliminación de datos" href={resolve('/(main)/eliminacion-de-datos-de-usuario')} icon={ArrowUpRight} />
				<CommandAction level="ghost" label="Metodología GaaS" href={resolve('/(main)/metodologia')} icon={ArrowUpRight} />
			</div>
		</SectionLayout>
	</div>
</main>

<script lang="ts">
	import { Plus } from '@lucide/svelte';
	import { fade } from 'svelte/transition';

	let activeTab = $state(0);

	const phaseDetails = [
		{
			id: '01',
			title: 'Fase 1: El Despertar',
			shortTitle: 'Fase 1',
			description:
				'Una página web profesional que refleja el nivel real de tu firma. Primera impresión que genera confianza y hace que los clientes quieran contactarte antes incluso de leer tu bio.',
			core: 'Página web rápida y elegante, optimizada para aparecer en Google, que se ve perfecta desde el celular.',
			addons: [
				'Sección de artículos donde puedes publicar contenido de tu área',
				'Botón de pago para cobrar consultas o servicios online',
				'Chat en vivo para responder dudas al instante desde tu web'
			]
		},
		{
			id: '02',
			title: 'Fase 2: La Transformación',
			shortTitle: 'Fase 2',
			description:
				'Tu firma empieza a trabajar sola para conseguir y agendar cliente. Un prospecto llega, completa un formulario, recibe confirmación y queda agendado — todo sin que tú muevas un dedo.',
			core: 'Formulario de contacto inteligente, calendario de citas online y notificaciones automáticas por WhatsApp o correo cuando alguien agenda.',
			addons: [
				'Zona privada donde el prospecto puede subir documentos antes de la reunión',
				'Calculadora de honorarios para que el cliente tenga una idea del costo antes de llamar',
				'Enlace personalizado para que clientes actuales recomienden tu firma'
			]
		},
		{
			id: '03',
			title: 'Fase 3: Sincronía Total',
			shortTitle: 'Fase 3',
			description:
				'Todo tu estudio en un solo lugar. Expedientes, comunicaciones y documentos centralizados para que tú y tu equipo siempre estén en la misma página, sin perder nada.',
			core: 'Sistema de gestión de clientes y expedientes hecho a medida, con historial completo, área privada para que cada cliente vea el avance de su caso.',
			addons: [
				'Conexión con tu sistema de facturación para emitir recibos desde el mismo lugar',
				'Firma de documentos de forma digital con validez legal',
				'Aplicación en el celular para que tus clientes consulten su expediente cuando quieran'
			]
		},
		{
			id: '04',
			title: 'Fase 4: Bienvenido a la IA',
			shortTitle: 'Fase 4',
			description:
				'Las tareas repetitivas desaparecen. Documentos que antes tomaban horas ahora se generan en segundos, y tu bandeja de entrada se organiza sola por tipo de caso.',
			core: 'Generación automática de contratos y escritos estándar, organización automática del correo por materia y urgencia, recordatorios de vencimientos sin intervención manual.',
			addons: [
				'Herramienta que extrae los datos clave de cualquier PDF de sentencia en segundos',
				'Redacción automática del primer borrador de escritos según el tipo de caso',
				'Alertas automáticas antes de que venza un plazo procesal importante'
			]
		},
		{
			id: '05',
			title: 'Fase 5: Mente Maestra',
			shortTitle: 'Fase 5',
			description:
				'Tu firma nunca duerme. Un asistente inteligente atiende consultas de tus clientes a cualquier hora, busca jurisprudencia en segundos y te ayuda a preparar estrategias de caso.',
			core: 'Asistente virtual entrenado con el conocimiento de tu área legal, disponible 24/7 para responder preguntas frecuentes y orientar a tus clientes.',
			addons: [
				'Asistente que escribe exactamente como tú, con tu estilo y tono profesional',
				'Buscador inteligente que encuentra jurisprudencia y normativa relevante en segundos',
				'Análisis de casos similares para ayudarte a definir la mejor estrategia legal'
			]
		}
	];
</script>

<section class="relative z-10 w-full py-24">
	<div class="mx-auto w-full max-w-6xl px-4">
		<!-- Introducción a la flexibilidad -->
		<div class="mb-16 md:w-2/3">
			<span class="mb-2 block text-sm font-bold tracking-widest text-primary uppercase"
				>Tu Evolución a Medida</span
			>
			<h2 class="mb-6 text-4xl leading-tight font-bold md:text-5xl">
				Construye tu ecosistema, <br />
				<span class="font-serif text-base-content/50 italic">a tu propio ritmo.</span>
			</h2>
			<p class="text-base leading-loose text-base-content/70">
				Este framework <strong>no es un camino estricto ni un paquete rígido</strong>. Es un entorno
				totalmente flexible. Visualízalo como niveles de evolución donde cada fase desbloquea un
				nuevo "superpoder" para tu estudio. Puedes empezar en la fase que necesites y sumar
				<span
					class="inline-flex items-center gap-1 rounded-md bg-primary/20 px-2 py-0.5 text-xs font-bold text-primary ring-1 ring-primary/30"
					>Add-ons</span
				> a la carta.
			</p>
		</div>

		<!-- Tabs DaisyUI -->
		<div
			role="tablist"
			class="tabs-bordered no-scrollbar mb-8 tabs overflow-x-auto pb-1 tabs-lg whitespace-nowrap"
		>
			{#each phaseDetails as phase, i (phase.id)}
				<button
					role="tab"
					class="tab text-base font-bold transition-all {activeTab === i
						? 'tab-active border-primary! text-primary'
						: 'text-base-content/40 hover:text-base-content/80'}"
					onclick={() => (activeTab = i)}
				>
					{phase.shortTitle}
				</button>
			{/each}
		</div>

		<!-- Content Area -->
		<div
			class="relative overflow-hidden rounded-3xl border border-white/10 bg-base-100/60 p-8 shadow-2xl backdrop-blur-lg md:p-12"
		>
			<!-- Efecto de brillo -->
			<div
				class="absolute top-0 -right-32 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-[80px]"
			></div>

			{#key activeTab}
				<div
					in:fade={{ duration: 400 }}
					class="relative z-10 grid w-full grid-cols-1 gap-12 lg:grid-cols-2"
				>
					<!-- Info Principal -->
					<div class="flex flex-col justify-center">
						<span class="mb-2 block text-6xl leading-none font-black text-white/5"
							>{phaseDetails[activeTab].id}</span
						>
						<h3 class="mb-4 text-3xl font-bold text-base-content">
							{phaseDetails[activeTab].title}
						</h3>
						<p class="mb-8 text-base leading-relaxed text-base-content/70">
							{phaseDetails[activeTab].description}
						</p>

						<!-- Core module abstract -->
						<div class="rounded-2xl border border-white/5 bg-base-200/50 p-6 backdrop-blur-sm">
							<h4 class="mb-2 text-xs font-bold tracking-widest text-primary uppercase">
								Módulo Base
							</h4>
							<p class="text-sm leading-relaxed text-base-content/80">
								{phaseDetails[activeTab].core}
							</p>
						</div>
					</div>

					<!-- Add-ons -->
					<div class="flex flex-col justify-center">
						<h4 class="mb-6 flex items-center gap-2 text-xl font-bold text-base-content">
							<Plus size={24} class="text-primary" />
							Add-ons Disponibles
						</h4>
						<p class="mb-6 text-sm text-base-content/50">
							Personaliza y potencia esta fase integrando características específicas que resuelvan
							las particularidades de tu firma legal.
						</p>

						<ul class="flex flex-col gap-3">
							{#each phaseDetails[activeTab].addons as addon (addon)}
								<li
									class="group flex items-center gap-4 rounded-xl border border-white/5 bg-base-100/40 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-base-100/80 hover:shadow-lg hover:shadow-primary/5"
								>
									<div
										class="h-2 w-2 rounded-full bg-primary/50 shadow-[0_0_8px_rgba(197,160,89,0.8)] transition-all group-hover:scale-125 group-hover:bg-primary"
									></div>
									<span class="text-sm font-medium text-base-content/90">{addon}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/key}
		</div>
	</div>
</section>

<style>
	/* Esconder scrollbar horizontal para los tabs en mobile */
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.no-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>

<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import { resolve } from '$app/paths';
	import { ArrowLeft, ShieldCheck } from '@lucide/svelte';
</script>

<SEO
	title="Términos y Condiciones del Servicio | Vanchi"
	description="Acuerdo de servicio, modalidades de suscripción y reglas generales de colaboración tecnológica con Vanchi."
/>

<main class="min-h-screen py-24 lg:py-32">
	<div class="container mx-auto max-w-4xl px-4">
		<!-- Botón Volver -->
		<a
			href={resolve('/precios')}
			class="mb-8 inline-flex items-center gap-2 text-sm text-base-content/60 transition-colors hover:text-primary"
		>
			<ArrowLeft size={16} />
			Volver a Precios
		</a>

		<!-- Cabecera -->
		<header class="mb-16 border-b border-white/10 pb-10">
			<div
				class="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 text-primary"
			>
				<ShieldCheck size={32} />
			</div>
			<h1 class="mb-4 font-serif text-4xl font-bold tracking-tight text-base-content lg:text-5xl">
				Términos y <span
					class="bg-linear-to-r from-primary via-yellow-200 to-primary bg-clip-text text-transparent italic"
					>Condiciones</span
				> del Servicio (WaaS)
			</h1>
			<p class="text-lg text-base-content/70">
				Al contratar el servicio de suscripción mensual de Vanchi (Socio Tecnológico), el Cliente
				acepta los siguientes puntos del acuerdo.
			</p>
		</header>

		<!-- Contenido Legal -->
		<article
			class="prose-invert prose-p:text-base-content/70 prose-headings:text-base-content prose-headings:font-serif prose max-w-none space-y-12"
		>
			<section
				class="rounded-2xl border border-white/5 bg-base-200/30 p-6 transition-colors duration-300 hover:border-primary/20 lg:p-8"
			>
				<h2 class="flex items-center gap-3 text-2xl font-bold">
					<span class="font-sans text-xl text-primary">01.</span> El Modelo de Suscripción (SaaS)
				</h2>
				<div class="mt-4 space-y-4">
					<p>
						El cliente entiende que no está comprando un software a perpetuidad de un solo pago,
						sino contratando un <strong>Derecho de Uso mensual</strong>.
					</p>
					<ul class="list-disc space-y-2 pl-5 text-base-content/70">
						<li>
							El código fuente, la lógica del sistema y la infraestructura (hosting, servidores,
							bases de datos base) son propiedad exclusiva del Desarrollador durante la vigencia de
							la suscripción.
						</li>
						<li>
							El pago mensual garantiza que la web/sistema esté activo, estructurado, asegurado,
							actualizado y con soporte técnico básico.
						</li>
					</ul>
				</div>
			</section>

			<section
				class="rounded-2xl border border-white/5 bg-base-200/30 p-6 transition-colors duration-300 hover:border-primary/20 lg:p-8"
			>
				<h2 class="flex items-center gap-3 text-2xl font-bold">
					<span class="font-sans text-xl text-primary">02.</span> Compromiso de Permanencia (12 meses)
				</h2>
				<div class="mt-4 space-y-4">
					<p>
						Para eliminar el alto costo inicial de desarrollo y diseño (que normalmente ascendería a
						tarifas elevadas por proyecto a medida), el Cliente se compromete a mantener la
						suscripción del servicio contratado por un <strong
							>periodo mínimo de doce (12) meses consecutivos</strong
						>.
					</p>
					<div class="rounded-lg border-l-2 border-warning bg-base-300/50 p-4 text-sm">
						<strong class="mb-1 block text-warning">Cancelación Anticipada:</strong>
						Si el Cliente decide cancelar el servicio antes de cumplir con el ciclo de 12 meses, deberá
						abonar el 50% del total de las mensualidades restantes como penalidad por rescisión de contrato
						y recuperación de los costos de arquitectura de software y diseño invertidos inicialmente.
					</div>
				</div>
			</section>

			<section
				class="rounded-2xl border border-white/5 bg-base-200/30 p-6 transition-colors duration-300 hover:border-primary/20 lg:p-8"
			>
				<h2 class="flex items-center gap-3 text-2xl font-bold">
					<span class="font-sans text-xl text-primary">03.</span> Propiedad del Dominio (La Identidad)
				</h2>
				<div class="mt-4 space-y-4">
					<p>
						El nombre de dominio oficial de la empresa (ejemplo: <em>www.tunegocio.com</em>) es en
						todo momento <strong>propiedad del Cliente</strong>.
					</p>
					<ul class="list-disc space-y-2 pl-5 text-base-content/70">
						<li>
							<strong>Costo:</strong> El pago de la renovación del dominio corre exclusivamente por cuenta
							del Cliente y se factura con frecuencia anual.
						</li>
						<li>
							<strong>Gestión:</strong> El Cliente es libre de adquirir este dominio usando su propia
							plataforma de preferencia, o puede depositar el monto exacto de compra al Desarrollador
							para que este realice el registro en su nombre, delegando la configuración técnica.
						</li>
						<li>
							<strong>Independencia:</strong> En el escenario en el que el servicio sea cancelado (cumpliendo
							o rescindiendo la permanencia), el Cliente mantiene absoluto control sobre su dominio.
							Los archivos de sistema de la página no se exportan con el dominio.
						</li>
					</ul>
				</div>
			</section>

			<section
				class="rounded-2xl border border-white/5 bg-base-200/30 p-6 transition-colors duration-300 hover:border-primary/20 lg:p-8"
			>
				<h2 class="flex items-center gap-3 text-2xl font-bold">
					<span class="font-sans text-xl text-primary">04.</span> Cuota de Liberación (Si requiere el
					código)
				</h2>
				<div class="mt-4 space-y-4">
					<p>
						Nos enorgullece establecer la política de puertas abiertas: Si al finalizar el contrato,
						o en cualquier punto del mismo, el Cliente decide convertirse en el dueño absoluto del
						código fuente para migrarlo hacia el equipo de desarrollo de su empresa o servidores
						personales, es completamente libre de hacerlo bajo una tarifa de emancipación:
					</p>
					<ul class="list-disc space-y-2 pl-5 text-base-content/70">
						<li>Ocurrirá el pago exclusivo de una <strong>Cuota de Liberación</strong>.</li>
						<li>
							El monto base de dicha cuota se establece en <strong>S/ 600</strong> para el formato de
							Landing Pages. Para ecosistemas más complejos o Sistemas Internos, esta cuota se cotizará
							según volumen transaccional de código y bases de datos.
						</li>
						<li>
							Una vez abonada la cuota, el Desarrollador empaquetará y entregará los repositorios de
							archivos. A partir de ese momento explícito, el Cliente asume íntegramente sus propios
							costos de alojamiento (hosting), gestión SSL, y procesos de mantenimiento técnico.
						</li>
					</ul>
				</div>
			</section>

			<section
				class="rounded-2xl border border-white/5 bg-base-200/30 p-6 transition-colors duration-300 hover:border-primary/20 lg:p-8"
			>
				<h2 class="flex items-center gap-3 text-2xl font-bold">
					<span class="font-sans text-xl text-primary">05.</span> Suspensión por Falta de Pago
				</h2>
				<div class="mt-4 space-y-4">
					<p>
						La estabilidad, visibilidad y seguridad del sistema web dependen íntimamente del abono
						puntual del servicio por suscripción.
					</p>
					<ul class="list-none space-y-3">
						<li class="flex items-start gap-2">
							<div class="mt-2 h-2 w-2 rounded-full bg-base-content/40"></div>
							<span
								>El reporte de cobro y abono debe procesarse los días de facturación fijados (ej:
								día 01 de cada mes).</span
							>
						</li>
						<li class="flex items-start gap-2">
							<div class="mt-2 h-2 w-2 rounded-full bg-warning/80"></div>
							<span
								>Al manifestar <strong>5 días de retraso</strong> en el pago, el sistema digital automatizado
								suspenderá los accesos e impedirá el tráfico. Se sustituirá la web por una pantalla estática
								de "Servicio en Mantenimiento".</span
							>
						</li>
						<li class="flex items-start gap-2">
							<div class="mt-2 h-2 w-2 rounded-full bg-error/80"></div>
							<span
								>Al incurrir en un estado de abandono con <strong>30 días de retraso</strong> y sin comunicación
								activa, se procederá formalmente a la baja remota del servicio. Además de la eliminación
								permanente de base de datos y repositorios de activos adjuntos, debe aclararse que esta
								cancelación severa no exime al Cliente de la deuda estipulada en el contrato de permanencia
								(punto 2).</span
							>
						</li>
					</ul>
				</div>
			</section>

			<section
				class="rounded-2xl border border-white/5 bg-base-200/30 p-6 transition-colors duration-300 hover:border-primary/20 lg:p-8"
			>
				<h2 class="flex items-center gap-3 text-2xl font-bold">
					<span class="font-sans text-xl text-primary">06.</span> Actualizaciones, Modificaciones y Módulos
				</h2>
				<div class="mt-4 space-y-4">
					<p>
						Buscamos acompañar continuamente el ciclo de vida natural de la comunicación del
						servicio del Cliente.
					</p>
					<ul class="list-disc space-y-2 pl-5 text-base-content/70">
						<li>
							La mensualidad del plan contratado incluye el mantenimiento preventivo y técnico
							exhaustivo (asegurando el 99.9% del tiempo de actividad de la página).
						</li>
						<li>
							Modificaciones visuales o de comunicación menores (reemplazo de textos pequeños,
							cambiar o actualizar una fotografía estática) se encuentran cubiertas, respetando un
							límite de <strong>una (1) solicitud de cambio al mes</strong>.
						</li>
						<li>
							Cualquier rediseño drástico estructural, petición de nuevas páginas adicionales,
							desarrollo de funciones inéditas o adición explícita de "Módulos" (Por ej: Agregar
							tienda o Asistente IA) no representarán un cobro violento de desarrollo externo, sino
							un <strong>Ajuste de la Tarifa de Renovación</strong> mensual (+ S/ Add-on). Esto mantendrá
							las mismas condiciones de permanencia con el nuevo techo base acordado.
						</li>
					</ul>
				</div>
			</section>
		</article>

		<div class="mt-16 border-t border-white/10 pt-10 text-center">
			<a href={resolve('/precios')} class="btn btn-wide btn-outline"> Regresar a Precios </a>
		</div>
	</div>
</main>

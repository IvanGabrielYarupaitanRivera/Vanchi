<script lang="ts">
	import { fly } from 'svelte/transition';
	import { MessageCircle } from '@lucide/svelte';

	const phoneNumber = '51985942670';
	let name = $state('');

	const serviceOptions = [
		'Inteligencia Artificial',
		'Desarrollo de Sistemas',
		'Sitios Web de Alto Impacto',
		'Infraestructura y Soporte'
	] as const;

	type ServiceOption = (typeof serviceOptions)[number];
	let selectedService = $state<ServiceOption | ''>('');
	let problem = $state('');

	const whatsappMessage = $derived(`¡Hola, Iván!
        Estoy contactándote desde tu portafolio web.
        Me interesa tu servicio de: *${selectedService}*.
        Mi nombre es: *${name}*.
        Quiero una solución para: ${problem}

        Espero tu respuesta.`);

	const whatsappUrl = $derived(
		`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`
	);
</script>

<section id="contacto" class="relative py-16 lg:py-36" aria-label="Contacto por WhatsApp">
	<div class="relative container mx-auto px-4">
		<div class="mx-auto max-w-3xl">
			<article
				in:fly={{ y: 30, duration: 800, delay: 200 }}
				class="card rounded-2xl border border-white/5 bg-base-300/50 shadow-2xl backdrop-blur-lg"
			>
				<div class="card-body items-center gap-8 p-8 text-center lg:p-12">
					<header class="space-y-4">
						<h2 class="text-3xl font-bold lg:text-5xl">
							Comencemos con una conversación
							<span
								class="bg-linear-to-r from-primary via-primary to-primary bg-clip-text font-serif text-transparent italic"
							>
								directa.
							</span>
						</h2>

						<p class="mx-auto max-w-xl text-base text-base-content/60">
							La forma más rápida de hablar de tu proyecto es por WhatsApp. Completa lo esencial y
							abre una consulta. Te responderé en menos de 12 horas.
						</p>
					</header>

					<form class="w-full max-w-xl text-left" aria-label="Formulario de contacto rápido">
						<div class="space-y-5">
							<fieldset class="fieldset w-full">
								<legend class="fieldset-legend">¿Cuál es tu nombre?</legend>
								<label class="input w-full rounded-xl">
									<input
										id="name"
										name="name"
										autocomplete="name"
										type="text"
										placeholder="Juan Pérez"
										bind:value={name}
										required
									/>
								</label>
								<p class="label text-base-content/50">Para personalizar el primer mensaje.</p>
							</fieldset>

							<fieldset class="fieldset w-full">
								<legend class="fieldset-legend">Servicio</legend>
								<select
									id="services"
									name="services"
									class="select w-full rounded-xl"
									title="Selecciona el servicio que estás buscando"
									bind:value={selectedService}
									required
								>
									<option value="" disabled>Selecciona</option>
									{#each serviceOptions as service}
										<option value={service}>{service}</option>
									{/each}
								</select>
								<p class="label text-base-content/50">
									Me ayuda a enfocarme en la solución correcta.
								</p>
							</fieldset>

							<fieldset class="fieldset w-full">
								<legend class="fieldset-legend">Describe tu necesidad</legend>
								<textarea
									id="problem"
									name="problem"
									class="textarea w-full rounded-xl"
									rows={4}
									placeholder="Ej: necesito automatizar reportes, integrar IA, mejorar conversiones..."
									bind:value={problem}
									required
								></textarea>
								<p class="label text-base-content/50">Un resumen de 2–3 líneas es suficiente.</p>
							</fieldset>
						</div>

						<div class="mt-8 card-actions justify-center">
							<a
								href={whatsappUrl}
								target="_blank"
								rel="noreferrer"
								aria-label="Enviar WhatsApp a Iván con mensaje precargado"
								class="btn w-full transition-all duration-300 ease-out btn-lg btn-primary hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(211,163,41,0.15)] lg:w-auto"
							>
								<span>Enviar WhatsApp</span>
								<MessageCircle size={16} />
							</a>
						</div>
					</form>

					<footer class="text-center">
						<p class="text-xs leading-loose text-base-content/40">
							Se abrirá WhatsApp con un mensaje precargado usando tus respuestas.
						</p>
					</footer>
				</div>
			</article>
		</div>
	</div>
</section>

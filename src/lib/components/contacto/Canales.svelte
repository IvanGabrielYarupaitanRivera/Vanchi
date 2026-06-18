<script lang="ts">
	let { whatsappUrl, email }: { whatsappUrl: string; email: string } = $props();
</script>

<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<p class="vanchi-eyebrow mb-16">CANALES</p>

		<div class="grid gap-16 lg:grid-cols-2 lg:gap-24">
			<div>
				<h2 class="vanchi-display mb-8 text-3xl font-normal lg:text-4xl">
					<span class="italic">WhatsApp</span>
				</h2>
				<p class="mb-8 max-w-prose text-sm leading-relaxed text-base-content/60">
					El canal mas directo. Escribeme contandome que quieres automatizar y te respondo con preguntas concretas, no con un pitch generico.
				</p>

				<a
					href={whatsappUrl}
					target="_blank"
					rel="external noopener noreferrer"
					class="btn border-0 bg-base-content font-mono text-sm text-base-100 hover:opacity-90"
				>
					Abrir conversacion →
				</a>
			</div>

			<div>
				<h2 class="vanchi-display mb-8 text-3xl font-normal lg:text-4xl">
					<span class="italic">Email</span>
				</h2>
				<p class="mb-8 max-w-prose text-sm leading-relaxed text-base-content/60">
					Si prefieres escribir con mas detalle. Adjunta contexto, ejemplos o lo que tengas. Mientras mas sepa, mejor puedo responderte.
				</p>

				<div class="card bg-base-200 border border-base-300 p-8">
					<p class="font-mono text-sm text-base-content/80">{email}</p>
				</div>
			</div>
		</div>
	</div>
</section>

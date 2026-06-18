<script lang="ts">
	let { whatsappUrl, email }: { whatsappUrl: string; email: string } = $props();
</script>

<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<p class="vanchi-eyebrow mb-16">01 // CANALES</p>

		<div class="grid gap-6 lg:grid-cols-12">
			<!-- WhatsApp — canal principal -->
			<a
				href={whatsappUrl}
				target="_blank"
				rel="external noopener noreferrer"
				class="card bg-base-200 border border-base-300 p-8 transition-all duration-100 hover:-translate-y-0.5 hover:border-base-content group lg:col-span-7 lg:p-10"
			>
				<div class="mb-8 flex items-center gap-2.5">
					<span class="vanchi-agent-dot animate-pulse"></span>
					<span class="font-mono text-xs font-medium tracking-[0.15em] text-secondary">
						CANAL PRINCIPAL · RESPONDO HOY
					</span>
				</div>

				<h2 class="vanchi-display mb-6 text-3xl font-normal lg:text-5xl">
					<span class="italic">WhatsApp</span>
				</h2>

				<p class="mb-10 max-w-md text-sm leading-relaxed text-base-content/60">
					El canal más directo. Escríbeme contándome qué quieres automatizar y te respondo con
					preguntas concretas, no con un pitch genérico.
				</p>

				<div class="flex items-center justify-between border-t border-base-300 pt-6">
					<span class="font-mono text-sm text-base-content/80">Abrir conversación</span>
					<span class="font-mono text-sm text-base-content transition-transform duration-200 group-hover:translate-x-1">
						→
					</span>
				</div>
			</a>

			<!-- Email — alternativa -->
			<a
				href={`mailto:${email}`}
				class="card bg-base-200 border border-base-300 p-8 transition-all duration-100 hover:-translate-y-0.5 hover:border-base-content group flex flex-col lg:col-span-5 lg:p-10"
			>
				<div class="mb-8 flex items-center gap-2.5">
					<span class="font-mono text-xs font-medium tracking-[0.15em] text-secondary">
						ALTERNATIVA · CONTEXTO LARGO
					</span>
				</div>

				<h2 class="vanchi-display mb-6 text-3xl font-normal lg:text-5xl">
					<span class="italic">Email</span>
				</h2>

				<p class="mb-10 max-w-md text-sm leading-relaxed text-base-content/60">
					Si prefieres escribir con más detalle. Adjunta contexto, ejemplos o lo que tengas.
				</p>

				<div class="mt-auto flex items-center justify-between border-t border-base-300 pt-6">
					<span class="font-mono text-xs text-base-content/80 break-all">{email}</span>
					<span class="ml-4 shrink-0 font-mono text-sm text-base-content transition-transform duration-200 group-hover:translate-x-1">
						→
					</span>
				</div>
			</a>
		</div>
	</div>
</section>

<script lang="ts">
	import { resolve } from '$app/paths';
	import { Linkedin, ArrowUpRight } from '@lucide/svelte';
</script>

<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">04 // CONECTEMOS</span>
		</div>

		<p class="mb-8 font-mono text-sm text-base-content/70 max-w-xl">
			Si buscas a alguien que se tome en serio tu proyecto tanto como tú, estoy a un mensaje de distancia.
		</p>

		<div class="flex flex-wrap gap-4">
			<a
				href="https://www.linkedin.com/in/ivan-yarupaitan-rivera/"
				target="_blank"
				rel="external noopener noreferrer"
				class="btn min-h-0 h-10 border border-base-content bg-base-content px-5 font-mono text-xs font-bold uppercase tracking-wider text-base-100 duration-100 hover:bg-base-content/90"
			>
				<Linkedin class="h-3.5 w-3.5" />
				LinkedIn
			</a>
			<a
				href={resolve('/(main)/contacto')}
				class="btn btn-ghost min-h-0 h-10 border border-base-300 px-5 font-mono text-xs font-bold uppercase tracking-wider text-base-content/80 duration-100 hover:bg-base-300 hover:text-base-content"
			>
				Contacto →
				<ArrowUpRight class="h-3.5 w-3.5" />
			</a>
		</div>
	</div>
</section>

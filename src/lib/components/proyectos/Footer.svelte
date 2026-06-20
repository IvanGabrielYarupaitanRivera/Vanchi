<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<footer class="w-full py-16 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="border border-base-300 bg-base-200 p-8 lg:p-10">
			<span class="mb-2 block font-mono text-xs tracking-[0.15em] text-secondary uppercase">¿Tienes un proyecto en mente?</span>
			<p class="font-mono text-sm leading-relaxed text-base-content/70 max-w-xl mb-6">
				Contame qué necesitas y te digo si tengo sentido abordarlo. Sin compromiso.
			</p>
			<a
				href={resolve('/(main)/contacto')}
				class="btn min-h-0 h-10 border border-base-content bg-base-content px-5 font-mono text-xs font-bold uppercase tracking-wider text-base-100 duration-100 hover:bg-base-content/90"
			>
				Conversemos →
			</a>
		</div>
		<div class="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
			<a href={resolve('/(main)/servicios')} class="link link-hover text-base-content/60">Servicios</a>
			<a href={resolve('/(main)/sectores')} class="link link-hover text-base-content/60">Sectores</a>
			<a href={resolve('/(main)/precios')} class="link link-hover text-base-content/60">Precios</a>
			<a href={resolve('/(main)/contacto')} class="link link-hover text-base-content/60">Contacto</a>
		</div>
		<p class="mt-8 font-mono text-xs text-secondary">Ivan Yarupaitan Rivera</p>
	</div>
</footer>

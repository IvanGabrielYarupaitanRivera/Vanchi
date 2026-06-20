<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<footer class="w-full py-16 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
			<a href={resolve('/(main)/metodologia')} class="link link-hover text-base-content/60">Metodología</a>
			<a href={resolve('/(main)/servicios')} class="link link-hover text-base-content/60">Servicios</a>
			<a href={resolve('/(main)/proyectos')} class="link link-hover text-base-content/60">Proyectos</a>
			<a href={resolve('/(main)/contacto')} class="link link-hover text-base-content/60">Contacto</a>
		</div>
		<p class="mt-8 font-mono text-xs text-secondary">Ivan Yarupaitan Rivera</p>
	</div>
</footer>

<script lang="ts">
	import { resolve } from '$app/paths';

	const year = new Date().getFullYear();
</script>

<footer class="w-full bg-base-200 vanchi-hairline border-t font-mono text-xs text-base-content/50">
	<!-- Matriz de enlaces -->
	<div class="footer grid-cols-1 md:grid-cols-2 gap-0 max-w-5xl mx-auto border-x border-base-300">
		<!-- Columna 1: Índice del sistema -->
		<nav class="flex flex-col gap-2 p-8 border-b md:border-b-0 md:border-r border-base-300 w-full min-h-[160px]">
			<span class="footer-title text-base-content font-bold mb-2 uppercase tracking-[0.12em]">
				// INDEX.SRC
			</span>
			<div class="grid grid-cols-2 gap-x-4 gap-y-2 max-w-xs">
				<a href={resolve('/(main)/servicios')} class="link link-hover text-base-content/60">01. Servicios</a>
				<a href={resolve('/(main)/proyectos')} class="link link-hover text-base-content/60">04. Proyectos</a>
				<a href={resolve('/(main)/metodologia')} class="link link-hover text-base-content/60">02. Metodología</a>
				<a href={resolve('/(main)/precios')} class="link link-hover text-base-content/60">05. Precios</a>
				<a href={resolve('/(main)/sectores')} class="link link-hover text-base-content/60">03. Sectores</a>
				<a href={resolve('/(main)/contacto')} class="link link-hover text-base-content/60">06. Contacto</a>
			</div>
		</nav>

		<!-- Columna 2: Protocolos legales -->
		<nav class="flex flex-col gap-2 p-8 border-b md:border-b-0 border-base-300 w-full min-h-[160px]">
			<span class="footer-title text-base-content font-bold mb-2 uppercase tracking-[0.12em]">
				// LEGAL.PRT
			</span>
			<a href={resolve('/politica-de-privacidad')} class="link link-hover text-base-content/60">Política de Privacidad</a>
			<a href={resolve('/condiciones-del-servicio')} class="link link-hover text-base-content/60">Condiciones del Servicio</a>
			<a href={resolve('/eliminacion-de-datos-de-usuario')} class="link link-hover text-base-content/60">Eliminación de Datos</a>
		</nav>
	</div>

	<!-- Registro de propiedad y E-E-A-T -->
	<div class="border-t border-base-300">
		<div class="max-w-5xl mx-auto border-x border-base-300 p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[11px] tracking-wider">
			<div class="flex flex-col gap-1">
				<span class="text-base-content/70 font-bold uppercase">Ivan Gabriel Yarupaitan Rivera</span>
				<span class="text-base-content/40">&copy; {year} Vanchi. Todos los derechos reservados.</span>
			</div>

			<div class="flex items-center gap-3 border border-base-300 p-3 bg-base-100 w-full md:w-auto">
				<span class="vanchi-agent-dot animate-pulse"></span>
				<span class="uppercase text-base-content/40">
					Jurisdicción: Huancayo, Junín, Perú // Deploy: Active
				</span>
			</div>
		</div>
	</div>
</footer>

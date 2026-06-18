<script lang="ts">
	import { resolve } from '$app/paths';

	const year = new Date().getFullYear();
</script>

<footer class="w-full border-t vanchi-hairline bg-base-200 font-mono text-xs text-base-content/50">
	<!-- Matriz de enlaces -->
	<div class="mx-auto footer max-w-5xl grid-cols-1 gap-0 border-x border-base-300 md:grid-cols-2">
		<!-- Columna 1: Índice del sistema -->
		<nav
			class="flex min-h-40 w-full flex-col gap-2 border-b border-base-300 p-8 md:border-r md:border-b-0"
		>
			<span class="footer-title mb-2 font-bold tracking-[0.12em] text-base-content uppercase">
				// INDEX.SRC
			</span>
			<div class="grid max-w-xs grid-cols-2 gap-x-4 gap-y-2">
				<a href={resolve('/(main)/servicios')} class="link text-base-content/60 link-hover"
					>01. Servicios</a
				>
				<a href={resolve('/(main)/proyectos')} class="link text-base-content/60 link-hover"
					>04. Proyectos</a
				>
				<a href={resolve('/(main)/metodologia')} class="link text-base-content/60 link-hover"
					>02. Metodología</a
				>
				<a href={resolve('/(main)/precios')} class="link text-base-content/60 link-hover"
					>05. Precios</a
				>
				<a href={resolve('/(main)/sectores')} class="link text-base-content/60 link-hover"
					>03. Sectores</a
				>
				<a href={resolve('/(main)/contacto')} class="link text-base-content/60 link-hover"
					>06. Contacto</a
				>
			</div>
		</nav>

		<!-- Columna 2: Protocolos legales -->
		<nav class="flex min-h-40 w-full flex-col gap-2 border-b border-base-300 p-8 md:border-b-0">
			<span class="footer-title mb-2 font-bold tracking-[0.12em] text-base-content uppercase">
				// LEGAL.PRT
			</span>
			<a href={resolve('/politica-de-privacidad')} class="link text-base-content/60 link-hover"
				>Política de Privacidad</a
			>
			<a href={resolve('/condiciones-del-servicio')} class="link text-base-content/60 link-hover"
				>Condiciones del Servicio</a
			>
			<a
				href={resolve('/eliminacion-de-datos-de-usuario')}
				class="link text-base-content/60 link-hover">Eliminación de Datos</a
			>
		</nav>
	</div>

	<!-- Registro de propiedad y E-E-A-T -->
	<div class="border-t border-base-300">
		<div
			class="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 border-x border-base-300 p-8 text-[11px] tracking-wider md:flex-row md:items-center"
		>
			<div class="flex flex-col gap-1">
				<span class="font-bold text-base-content/70 uppercase">Ivan Gabriel Yarupaitan Rivera</span>
				<span class="text-base-content/40"
					>&copy; {year} Vanchi. Todos los derechos reservados.</span
				>
			</div>

			<div class="flex w-full items-center gap-3 border border-base-300 bg-base-100 p-3 md:w-auto">
				<span class="vanchi-agent-dot animate-pulse"></span>
				<span class="text-base-content/40 uppercase">
					Jurisdicción: Huancayo, Junín, Perú // Deploy: Active
				</span>
			</div>
		</div>
	</div>
</footer>

<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { Sparkles } from '@lucide/svelte';
	import icon from '$lib/assets/icons/icon.svg';

	let mobileOpen = $state(false);
</script>

<header class="sticky top-0 z-50 w-full border-b vanchi-hairline bg-base-200 font-mono text-xs">
	<div class="navbar mx-auto min-h-14 max-w-5xl px-4">
		<!-- START: Logo + dot -->
		<div class="navbar-start gap-3">
			<a
				href={resolve('/')}
				class="flex items-center gap-3 font-bold tracking-wider text-base-content duration-100 hover:opacity-80"
			>
				<enhanced:img src={icon} alt="Vanchi" class="h-6 w-6" />
				<span class="hidden sm:inline">VANCHI</span>
			</a>
			<span class="vanchi-agent-dot animate-pulse" title="Active"></span>
		</div>

		<!-- CENTER: Nav — visible solo lg+ -->
		<div class="navbar-center hidden lg:flex">
			<nav class="flex items-center gap-6 tracking-[0.12em] uppercase">
				<a
					href={resolve('/')}
					class="transition-opacity duration-100 {page.url.pathname === '/'
						? 'font-bold text-base-content'
						: 'text-base-content/60 hover:text-base-content'}"
				>
					Inicio
				</a>
				<a
					href={resolve('/(main)/servicios')}
					class="transition-opacity duration-100 {page.url.pathname.startsWith('/servicios')
						? 'font-bold text-base-content'
						: 'text-base-content/60 hover:text-base-content'}"
				>
					Servicios
				</a>
				<a
					href={resolve('/(main)/proyectos')}
					class="transition-opacity duration-100 {page.url.pathname.startsWith('/proyectos')
						? 'font-bold text-base-content'
						: 'text-base-content/60 hover:text-base-content'}"
				>
					Proyectos
				</a>
				<a
					href={resolve('/(main)/sectores')}
					class="transition-opacity duration-100 {page.url.pathname.startsWith('/sectores')
						? 'font-bold text-base-content'
						: 'text-base-content/60 hover:text-base-content'}"
				>
					Sectores
				</a>
				<a
					href={resolve('/(main)/precios')}
					class="transition-opacity duration-100 {page.url.pathname.startsWith('/precios')
						? 'font-bold text-base-content'
						: 'text-base-content/60 hover:text-base-content'}"
				>
					Precios
				</a>
			</nav>
		</div>

		<!-- END: Botones + hamburguesa -->
		<div class="navbar-end gap-2">
			<a
				href={resolve('/(chat)/chat')}
				class="btn hidden h-9 min-h-0 border border-base-300 bg-transparent px-3 font-mono text-xs font-bold tracking-wider text-base-content/80 uppercase btn-ghost duration-100 hover:bg-base-300 hover:text-base-content lg:inline-flex"
			>
				<Sparkles class="mr-1 h-3 w-3" />
				Chat
			</a>

			<a
				href={resolve('/(main)/contacto')}
				class="btn hidden h-9 min-h-0 border border-base-content bg-base-content px-3 font-mono text-xs font-bold tracking-wider text-base-100 uppercase duration-100 hover:bg-base-content/90 lg:inline-flex"
			>
				Contacto →
			</a>

			<button
				class="btn h-9 min-h-0 w-9 border border-base-300 p-0 text-base-content btn-ghost lg:hidden"
				onclick={() => (mobileOpen = !mobileOpen)}
				aria-label="Toggle Menu"
			>
				<span class="font-mono text-sm">{mobileOpen ? '[X]' : '[=]'}</span>
			</button>
		</div>
	</div>

	{#if mobileOpen}
		<div
			class="flex w-full flex-col gap-6 border-t border-base-300 bg-base-200 px-6 py-8 lg:hidden"
		>
			<nav class="flex flex-col gap-4 text-sm tracking-[0.12em] uppercase">
				<a
					href={resolve('/')}
					class={page.url.pathname === '/' ? 'font-bold text-base-content' : 'text-base-content/60'}
					onclick={() => (mobileOpen = false)}
				>
					Inicio
				</a>
				<a
					href={resolve('/(main)/servicios')}
					class={page.url.pathname.startsWith('/servicios')
						? 'font-bold text-base-content'
						: 'text-base-content/60'}
					onclick={() => (mobileOpen = false)}
				>
					Servicios
				</a>
				<a
					href={resolve('/(main)/proyectos')}
					class={page.url.pathname.startsWith('/proyectos')
						? 'font-bold text-base-content'
						: 'text-base-content/60'}
					onclick={() => (mobileOpen = false)}
				>
					Proyectos
				</a>
				<a
					href={resolve('/(main)/sectores')}
					class={page.url.pathname.startsWith('/sectores')
						? 'font-bold text-base-content'
						: 'text-base-content/60'}
					onclick={() => (mobileOpen = false)}
				>
					Sectores
				</a>
				<a
					href={resolve('/(main)/precios')}
					class={page.url.pathname.startsWith('/precios')
						? 'font-bold text-base-content'
						: 'text-base-content/60'}
					onclick={() => (mobileOpen = false)}
				>
					Precios
				</a>
				<a
					href={resolve('/(main)/contacto')}
					class={page.url.pathname.startsWith('/contacto')
						? 'font-bold text-base-content'
						: 'text-base-content/60'}
					onclick={() => (mobileOpen = false)}
				>
					Contacto
				</a>
			</nav>
		</div>
	{/if}
</header>

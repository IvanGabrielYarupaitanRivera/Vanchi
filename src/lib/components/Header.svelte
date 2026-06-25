<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { ArrowUpRight, Menu, Sparkles, X } from '@lucide/svelte';
	import { blur, fly } from 'svelte/transition';
	import icon from '$lib/assets/icons/icon.svg';
	import CommandAction from '$lib/components/ui/CommandAction/CommandAction.svelte';

	let mobileOpen = $state(false);
</script>

<header class="sticky top-0 z-50 w-full border-b vanchi-hairline bg-base-200 font-mono text-xs">
	<div class="navbar mx-auto min-h-14 max-w-5xl px-4">
		<!-- START: Logo + dot -->
		<div class="navbar-start gap-3">
			<a
				href={resolve('/')}
				class="flex items-center gap-3 font-bold tracking-wider text-base-content duration-100 hover:opacity-80"
				aria-label="Vanchi Home"
			>
				<enhanced:img src={icon} alt="Vanchi" class="h-6" />
			</a>
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
			<div class="hidden lg:block">
				<CommandAction
					size="sm"
					level="outline-primary"
					icon={Sparkles}
					label="Chat"
					href={resolve('/(chat)/chat')}
				/>
			</div>

			<div class="hidden lg:block">
				<CommandAction
					size="sm"
					level="primary"
					icon={ArrowUpRight}
					label="Contacto"
					href={resolve('/(main)/contacto')}
				/>
			</div>

			<button
				class="btn h-9 min-h-0 w-9 border border-base-300 p-0 text-base-content btn-ghost lg:hidden"
				onclick={() => (mobileOpen = !mobileOpen)}
				aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
			>
				{#if mobileOpen}
					<X class="h-4 w-4" />
				{:else}
					<Menu class="h-4 w-4" />
				{/if}
			</button>
		</div>
	</div>

	{#if mobileOpen}
		<div
			class="fixed inset-x-0 top-14 bottom-0 z-40 bg-base-100/10 backdrop-blur-lg lg:hidden"
			role="presentation"
			transition:blur={{ duration: 100 }}
			onclick={() => (mobileOpen = false)}
		></div>

		<div
			class="absolute top-full right-0 left-0 z-50 flex w-full flex-col gap-6 border-t border-base-300 bg-base-200 px-6 py-8 lg:hidden"
			transition:fly={{ y: -20, duration: 200 }}
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

			<div class="flex flex-col gap-2 [&_.btn]:w-full">
				<CommandAction
					level="outline-primary"
					icon={Sparkles}
					label="Hablar con el agente"
					onclick={() => {
						mobileOpen = false;
						goto(resolve('/(chat)/chat'));
					}}
				/>
				<CommandAction
					level="primary"
					icon={ArrowUpRight}
					label="Contacto"
					onclick={() => {
						mobileOpen = false;
						goto(resolve('/(main)/contacto'));
					}}
				/>
			</div>
		</div>
	{/if}
</header>

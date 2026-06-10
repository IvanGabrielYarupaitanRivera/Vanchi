<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { Box, ArrowUpRight, Menu, House, Code, X, Sparkles } from '@lucide/svelte';
	import icon from '$lib/assets/icons/icon.svg';
	import vanchi from '$lib/assets/icons/vanchi.svg';
	import type { Component } from 'svelte';
	import type { IconProps } from '@lucide/svelte';
	import { fade, fly } from 'svelte/transition';

	type NavHref = '/' | '/#servicios' | '/proyectos';
	type NavItem = { href: NavHref; label: string; icon: Component<IconProps> };

	const navItems: NavItem[] = [
		{ href: '/', label: 'Inicio', icon: House },
		{ href: '/#servicios', label: 'Soluciones', icon: Box },
		{ href: '/proyectos', label: 'Proyectos', icon: Code }
	];

	const isNavItemActive = (href: NavHref) => {
		if (href === '/') {
			return page.url.pathname === '/' && page.url.hash === '';
		}
		if (href === '/#servicios') {
			return page.url.pathname === '/' && page.url.hash === '#servicios';
		}
		return page.url.pathname === href;
	};

	let open = $state(false);
</script>

<header class="sticky top-2 z-50 px-4 lg:top-4">
	<nav
		class="navbar mx-auto max-w-5xl rounded-full border border-white/10 bg-base-300/70 p-2 shadow-lg backdrop-blur-xs transition-all duration-300"
	>
		<div class="ml-2 navbar-start">
			<a href={resolve('/')} aria-label="Ir al inicio">
				<enhanced:img src={icon} alt="Vanchi Logo" class="h-9" draggable="false" />
			</a>
		</div>

		<div class="navbar-center hidden lg:flex">
			<ul class="flex gap-6">
				{#each navItems as item (item.href)}
					{@const isActive = isNavItemActive(item.href)}
					<li>
						<a
							href={resolve(item.href)}
							class="rounded-full px-4 py-2 text-sm transition-all hover:bg-neutral hover:text-primary
							{isActive ? 'bg-white/10 text-white' : 'text-base-content/80'}"
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="navbar-end gap-2">
			<a href="/chat" class="btn hidden btn-primary lg:flex">
				Asistente
				<Sparkles size={16} />
			</a>

			<a href={"/#contacto"} class="btn hidden btn-primary lg:flex">
				<span>Contacto</span>
				<ArrowUpRight size={16} />
			</a>

			<button
				class="btn btn-circle btn-ghost lg:hidden"
				onclick={() => (open = !open)}
				aria-label="Abrir menú"
			>
				<Menu size={24} />
			</button>
		</div>
	</nav>
</header>

{#if open}
	<div
		class="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm lg:hidden"
		role="button"
		tabindex="0"
		aria-label="Cerrar menú"
		onclick={() => (open = false)}
		onkeydown={(e) => e.key === 'Escape' && (open = false)}
		transition:fade={{ duration: 200 }}
	></div>

	<aside
		class="fixed top-0 right-0 z-70 h-full w-3/4 border-l border-white/10 bg-base-200 lg:hidden"
		transition:fly={{ x: 300, duration: 300 }}
	>
		<div class="flex h-full flex-col p-6">
			<header class="flex items-center justify-between">
				<enhanced:img src={vanchi} class="h-8" alt="Vanchi" />
				<button
					class="btn btn-circle btn-ghost btn-sm"
					onclick={() => (open = false)}
					aria-label="Cerrar menú"
				>
					<X size={20} />
				</button>
			</header>

			<div class="divider"></div>

			<a
				href="/chat"
				class="flex w-full items-center justify-between rounded-xl border border-primary/20 bg-linear-to-r from-primary/5 to-transparent px-4 py-3 text-left transition-all active:scale-[0.98]"
				onclick={() => (open = false)}
			>
				<div class="flex items-center gap-3">
					<Sparkles size={20} class="text-primary" />
					<span class="text-sm font-medium text-base-content/90">Asistente IA</span>
				</div>
				<ArrowUpRight size={16} class="text-base-content/30" />
			</a>

			<div class="divider"></div>

			<nav class="flex-1">
				<ul class="flex flex-col gap-2">
					{#each navItems as item (item.href)}
						{@const isActive = isNavItemActive(item.href)}
						<li>
							<a
								href={resolve(item.href)}
								class="flex items-center text-base font-medium {isActive
									? 'text-primary'
									: 'text-base-content/80'}"
								onclick={() => (open = false)}
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<div class="divider"></div>

			<div class="mt-auto">
				<a
					href={"/#contacto"}
					class="btn w-full btn-primary"
					onclick={() => (open = false)}
				>
					Empezar Proyecto
					<ArrowUpRight size={16} />
				</a>
			</div>
		</div>
	</aside>
{/if}

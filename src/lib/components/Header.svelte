<script lang="ts">
	import {
		Box,
		FileText,
		Layers,
		ArrowUpRight,
		Menu,
		House,
		File,
		Code,
		DollarSign,
		X
	} from '@lucide/svelte';
	import icon from '$lib/assets/icons/icon.svg';
	import vanchi from '$lib/assets/icons/vanchi.svg';
	import type { IconProps } from '@lucide/svelte';
	import type { Component } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	type NavItem = { href: string; label: string; icon: Component<IconProps> };

	const navItems: NavItem[] = [
		{ href: '/', label: 'Inicio', icon: House },
		{ href: '/services', label: 'Servicios', icon: Box },
		{ href: '/pricing', label: 'Precios', icon: DollarSign },
		{ href: '/proyectos', label: 'Proyectos', icon: Code }
	];

	let open = $state(false);
</script>

<header class="sticky top-6 z-50 px-4">
	<nav
		class="navbar mx-auto max-w-6xl rounded-full border border-white/10 bg-base-300/60 p-4 backdrop-blur-lg transition-all duration-300"
	>
		<!-- Left: Brand / Logo -->
		<div class="navbar-start">
			<a href="/" class="group flex cursor-pointer items-center gap-2" draggable="false">
				<!-- Logo Icon  -->
				<img src={icon} alt="Vanchi Logo" class="h-12" draggable="false" />
				<!-- Logo Text -->
				<img src={vanchi} alt="Vanchi Logo Text" class="hidden h-6 lg:block" draggable="false" />
			</a>
		</div>

		<!-- Center: Navigation Links (Desktop) -->
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal gap-2">
				{#each navItems as item}
					<li class="transition-transform duration-300 hover:-translate-y-0.5">
						<a href={item.href} class="btn" style="--size: 3rem; --btn-p: 0.5rem;">
							<div class="rounded-full bg-accent p-2">
								<item.icon size={16} class="text-accent-content" />
							</div>
							<span class="pr-1">{item.label}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Right: CTA & Mobile Menu -->
		<div class="navbar-end">
			<!-- CTA Button -->
			<a
				href="/contacto"
				class="btn hidden transition-transform duration-300 btn-primary hover:-translate-y-0.5 lg:flex"
				style="--size: 3rem; --btn-p: 0.5rem;"
			>
				<div class="rounded-full bg-base-100 p-2">
					<ArrowUpRight size={16} class="text-base-content" />
				</div>
				<span class="pr-1">Contacto</span>
			</a>

			<!-- Mobile Dropdown (Visible only on small screens) -->
			<button
				class="btn btn-primary lg:hidden"
				style="--size: 3rem; --btn-p: 0.5rem;"
				onclick={() => (open = !open)}
				aria-label="Abrir menú de navegación móvil"
			>
				<div class="rounded-full bg-base-100 p-2">
					<Menu size={16} class="text-base-content" />
				</div>
				<span class="pr-1"> Menú </span>
			</button>
		</div>
	</nav>
</header>

<!-- Menú móvil: panel que entra desde la derecha -->
{#if open}
	<!-- overlay -->
	<div
		class="fixed inset-0 z-60 bg-base-300/50 backdrop-blur-sm lg:hidden"
		aria-hidden="true"
		onclick={() => (open = false)}
		transition:fade={{ duration: 200 }}
	></div>

	<!-- panel -->
	<aside
		id="mobile-menu"
		class="fixed top-0 right-0 z-70 h-full w-full max-w-2/3 rounded-l-2xl bg-base-100 lg:hidden"
		transition:fly={{ x: 300 }}
	>
		<div class="flex h-full flex-col">
			<header
				class="flex items-center justify-between border-b border-secondary/50 px-4 py-4 shadow-sm"
			>
				<h2 class="font-semibold">Menú</h2>
				<button
					type="button"
					class="btn btn-primary"
					style="--size: 2rem; --btn-p: 0.5rem;"
					onclick={() => (open = false)}
					aria-label="Cerrar menú de navegación"
				>
					<X size={16} />
				</button>
			</header>

			<nav class="my-4 flex-1 overflow-auto">
				<ul class="flex flex-col gap-3">
					{#each navItems as item}
						<li class="transition-transform duration-300 hover:-translate-y-0.5">
							<a href={item.href} class="btn" style="--size: 3rem; --btn-p: 0.5rem;">
								<div class="rounded-full bg-accent p-2">
									<item.icon size={16} class="text-accent-content" />
								</div>
								<span class="pr-1 text-sm">{item.label}</span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<footer class="px-4 py-4 text-xs text-gray-500">
				<img src={vanchi} class="h-6" alt="Vanchi Logo Text" />
			</footer>
		</div>
	</aside>
{/if}

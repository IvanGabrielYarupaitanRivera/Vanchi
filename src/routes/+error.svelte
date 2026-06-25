<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import SystemStatus from '$lib/components/ui/SystemStatus/SystemStatus.svelte';
	import CommandAction from '$lib/components/ui/CommandAction/CommandAction.svelte';

	const errorCode = $derived(page.status);
	const errorMessage = $derived(page.error?.message ?? 'Algo salió mal');
	const isNotFound = $derived(errorCode === 404);
</script>

<SEO
	title={`${errorCode} — Error | Vanchi`}
	description="Página de error del portafolio Vanchi. La página que buscas no está disponible."
	noindex={true}
	nofollow={true}
/>

<section class="flex min-h-screen w-full items-center justify-center">
	<article class="max-w-3xl text-center text-base-content">
		<div class="px-4">
			<!-- Badge: código de error via SystemStatus -->
			<div class="vanchi-container mb-12 inline-flex items-center gap-2 rounded px-3 py-1.5">
				<SystemStatus status="error" label="Error {errorCode}" />
			</div>

			<!-- H1: mensaje principal -->
			<h1 class="vanchi-display mb-8 text-5xl lg:text-7xl">
				{#if isNotFound}
					Página<br />
					<span class="italic">no encontrada</span>
				{:else}
					Error del<br />
					<span class="italic">servidor</span>
				{/if}
			</h1>

			<!-- Descripción -->
			<p class="vanchi-reading mx-auto mb-12 px-4 text-sm lg:text-base">
				{#if isNotFound}
					La página que buscas no existe o ha sido movida. Verifica la URL o regresa al inicio para
					explorar el portafolio.
				{:else}
					{errorMessage}. Intenta recargar la página o vuelve al inicio.
				{/if}
			</p>

			<!-- CTA via CommandAction -->
			<nav aria-label="Opciones de navegación">
				<CommandAction level="primary" label="Ir al Inicio" href={resolve('/')} />
			</nav>
		</div>
	</article>
</section>

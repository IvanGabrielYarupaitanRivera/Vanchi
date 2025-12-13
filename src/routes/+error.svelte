<script lang="ts">
	import { page } from '$app/state';
	import SEO from '$lib/components/SEO.svelte';
	import { Home, ArrowLeft, House, Mouse, ChevronsRight } from '@lucide/svelte';
	import { fly, fade } from 'svelte/transition';
	import bgError from '$lib/assets/images/bg-error.webp';

	const errorCode = $derived(page.status);
	const errorMessage = $derived(page.error?.message ?? 'Algo salió mal');
	const isNotFound = $derived(errorCode === 404);
</script>

<SEO
	title={`${errorCode} — Error | Vanchi`}
	description="Página de error de mi portafolio de Vanchi. Lo sentimos, la página que buscas no está disponible."
	noindex={true}
	nofollow={true}
/>

<section class="relative -mt-24 flex min-h-screen w-full items-center justify-center">
	<!-- Fondo con máscara -->
	<div
		class="absolute inset-0 h-full w-full mask-r-from-80% mask-b-from-50% mask-l-from-80% bg-cover bg-center opacity-30"
		style="background-image: url({bgError});"
	></div>

	<article class="relative hero-content z-10 max-w-3xl text-center text-base-content">
		<div class="max-w-4xl">
			<!-- Badge de Error -->
			<div
				in:fly={{ y: 30, duration: 1000, delay: 200 }}
				class="relative mb-8 inline-flex overflow-hidden rounded-full p-px"
			>
				<span
					class="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#C5A059_50%,transparent_100%)]"
				></span>
				<div
					class="inline-flex h-full w-full items-center gap-2 rounded-full bg-base-100/90 px-4 py-1.5 backdrop-blur-3xl"
				>
					<div class="inline-grid *:[grid-area:1/1]">
						<div class="status animate-ping status-error"></div>
						<div class="status status-error"></div>
					</div>
					<span class="flex gap-1 text-xs font-medium tracking-widest text-base-content uppercase">
						Error {errorCode}
					</span>
				</div>
			</div>

			<!-- H1: Código de Error -->
			<h1
				in:fly={{ y: 30, duration: 1000, delay: 400 }}
				class="mb-10 text-5xl font-bold lg:text-7xl"
			>
				{#if isNotFound}
					Página
					<span
						class="bg-linear-to-r from-primary via-primary to-primary bg-clip-text px-1 font-serif text-transparent italic"
					>
						no encontrada
					</span>
				{:else}
					Error del
					<span
						class="bg-linear-to-r from-primary via-primary to-primary bg-clip-text px-1 font-serif text-transparent italic"
					>
						servidor
					</span>
				{/if}
			</h1>

			<!-- Descripción -->
			<p
				in:fly={{ y: 30, duration: 1000, delay: 600 }}
				class="mx-auto mb-10 max-w-2xl px-4 text-sm text-pretty text-base-content/80 lg:text-lg"
			>
				{#if isNotFound}
					La página que buscas no existe o ha sido movida. Verifica la URL o regresa al inicio para
					explorar el portafolio.
				{:else}
					{errorMessage}. Intenta recargar la página o vuelve al inicio.
				{/if}
			</p>

			<!-- Botones de Acción -->
			<nav in:fly={{ y: 30, duration: 1000, delay: 800 }} aria-label="Opciones de navegación">
				<ul class="flex flex-col items-center justify-center gap-4 lg:flex-row" role="list">
					<li role="listitem">
						<a
							href="/"
							type="button"
							class="btn transition-all duration-300 btn-primary hover:-translate-y-1"
							aria-label="Volver al inicio"
						>
							Ir al Inicio
							<ChevronsRight size={18} aria-hidden="true" />
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</article>
</section>

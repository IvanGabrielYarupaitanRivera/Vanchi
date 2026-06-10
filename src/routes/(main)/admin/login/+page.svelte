<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	let { form }: { form: { admin_token?: string; error?: string } | undefined } = $props();

	// Guardar contraseña en localStorage y redirigir
	$effect(() => {
		if (form?.admin_token) {
			try {
				localStorage.setItem('admin_password', form.admin_token);
			} catch { /* incógnito */ }
			goto(resolve('/(main)/admin/(protegido)/documentos'));
		}
	});
</script>

<svelte:head>
	<title>Acceso administrativo — Vanchi</title>
</svelte:head>

<div class="flex min-h-screen items-center justify-center bg-base-300 px-4">
	<form
		method="POST"
		use:enhance
		class="w-full max-w-sm rounded-2xl border border-white/10 bg-base-100/60 p-6 shadow-2xl backdrop-blur-lg"
	>
		<h2 class="mb-1 text-xl font-bold text-base-content">Acceso administrativo</h2>
		<p class="mb-6 text-sm text-base-content/40">Ingresa la clave para gestionar documentos</p>

		<div class="space-y-4">
			<input
				type="password"
				name="password"
				placeholder="Clave maestra"
				class="w-full rounded-xl border border-white/10 bg-base-200 px-4 py-2.5 text-sm text-base-content outline-none transition-all placeholder:text-base-content/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
				required
			/>

			{#if form?.error}
				<p class="text-xs font-semibold text-red-400">{form.error}</p>
			{/if}

			<button
				type="submit"
				class="w-full rounded-xl bg-primary py-2.5 text-sm font-bold text-base-100 transition-all hover:bg-primary/80"
			>
				Verificar y entrar
			</button>
		</div>
	</form>
</div>

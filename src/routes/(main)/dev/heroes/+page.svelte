<script lang="ts">
	import Hero from '$lib/components/ui/Hero/Hero.svelte';
</script>

<svelte:head>
	<title>Dev — Hero X1 | Vanchi</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="min-h-screen bg-base-100">
	<div class="mx-auto max-w-5xl px-4 py-8">
		<div class="mb-4 flex items-center gap-2.5">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">DEV // HERO X1</span>
		</div>
		<p class="mb-12 font-mono text-sm text-base-content/40">
			Hero definitivo. Reticula + puntos + esquinas secondary.
		</p>
	</div>

	<section class="border-t border-base-300">
		<Hero
			level="primary"
			title="Hero X1 — Título de prueba"
			subtitle="Reticula 40x40 + puntos 2px/40px + esquinas secondary en el borde."
			action_label="Acción"
			action_onclick={() => {}}
			action_secondary_label="Secundaria"
			action_secondary_onclick={() => {}}
			status_active={true}
			italic_word="prueba"
		/>
	</section>
</div>

<script lang="ts">
	import { ArrowUpRight, Send } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Dev — CommandAction | Vanchi</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="min-h-screen bg-base-100">
	<div class="max-w-5xl mx-auto px-4 py-8">
		<div class="flex items-center gap-2.5 mb-4">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">DEV // COMMAND ACTION</span>
		</div>
		<p class="font-mono text-sm text-base-content/40 mb-12">
			Ganadores: primary (filled, outline, ghost) + secondary neutral filled.
		</p>
	</div>

	<section class="border-t border-base-300">
		<div class="max-w-5xl mx-auto px-4 py-8">
			<span class="font-mono text-xs text-base-content/30 uppercase tracking-wider">Variantes ganadoras</span>
			<div class="mt-6 flex flex-col gap-6 font-mono text-xs uppercase">
				<div class="flex flex-wrap items-center gap-4">
					<span class="w-28 text-base-content/40">Primary filled</span>
					<button type="button" class="btn btn-primary">ACCION</button>
					<button type="button" class="btn btn-primary"><ArrowUpRight class="h-4 w-4" /> ACCION</button>
				</div>
				<div class="flex flex-wrap items-center gap-4">
					<span class="w-28 text-base-content/40">Primary outline</span>
					<button type="button" class="btn btn-outline btn-primary">ACCION</button>
					<button type="button" class="btn btn-outline btn-primary"><ArrowUpRight class="h-4 w-4" /> ACCION</button>
				</div>
				<div class="flex flex-wrap items-center gap-4">
					<span class="w-28 text-base-content/40">Primary ghost</span>
					<button type="button" class="btn btn-ghost text-base-content">ACCION</button>
					<button type="button" class="btn btn-ghost text-base-content"><ArrowUpRight class="h-4 w-4" /> ACCION</button>
				</div>
				<div class="flex flex-wrap items-center gap-4">
					<span class="w-28 text-base-content/40">Secondary neutral</span>
					<button type="button" class="btn btn-neutral">ACCION</button>
					<button type="button" class="btn btn-neutral"><Send class="h-4 w-4" /> ACCION</button>
				</div>
			</div>
		</div>
	</section>
</div>

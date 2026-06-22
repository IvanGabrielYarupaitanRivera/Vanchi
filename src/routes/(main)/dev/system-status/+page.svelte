<svelte:head>
	<title>Dev — SystemStatus | Vanchi</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="min-h-screen bg-base-100">
	<div class="mx-auto max-w-5xl px-4 py-8">
		<div class="mb-4 flex items-center gap-2.5">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">DEV // SYSTEM STATUS</span>
		</div>
		<p class="font-mono text-sm text-base-content/40">S6 — Version final en el componente.</p>
	</div>

	<section class="border-t border-base-300">
		<div class="mx-auto max-w-5xl px-4 py-8">
			<span class="font-mono text-xs tracking-wider text-base-content/30 uppercase"
				>S6 — SystemStatus definitivo</span
			>
			<div class="mt-6 flex flex-col gap-4 font-mono text-xs tracking-[0.15em] uppercase">
				<span class="inline-flex items-center gap-2 text-base-content">
					<span class="status animate-pulse status-accent"></span>
					SYSTEM // ONLINE
				</span>
				<span class="inline-flex items-center gap-2 text-secondary">
					<span class="status status-secondary"></span>
					SYSTEM // IDLE
				</span>
				<span class="inline-flex items-center gap-2 text-base-content">
					<span class="status status-error"></span>
					SYSTEM // ERROR
				</span>
			</div>
		</div>
	</section>
</div>

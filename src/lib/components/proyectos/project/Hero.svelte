<script lang="ts">
	let { meta }: { meta: {
		title: string;
		tagline: string;
		role: string;
		date: string;
	} } = $props();
</script>

<section class="flex min-h-[90dvh] items-center">
	<div class="mx-auto w-full max-w-5xl px-4">
		<div class="mb-10 flex items-center gap-2.5">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">CASO DE ESTUDIO</span>
		</div>
		<h1 class="mb-6 vanchi-display text-5xl leading-[1.05] font-normal lg:text-7xl">
			{meta.title}
		</h1>
		<p class="max-w-xl text-base leading-relaxed text-base-content/70 lg:text-lg mb-10">
			{meta.tagline}
		</p>
		<div class="flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm text-base-content/50">
			<span>{meta.role}</span>
			<span>{meta.date}</span>
		</div>
	</div>
</section>

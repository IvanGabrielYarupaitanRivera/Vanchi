<script lang="ts">
	const socials = [
		{ name: 'GitHub', url: 'https://github.com/IvanGabrielYarupaitanRivera' },
		{ name: 'LinkedIn', url: 'https://linkedin.com/in/ivan-yarupaitan-rivera' },
		{ name: 'YouTube', url: 'https://youtube.com/@VanchiDev' },
		{ name: 'Instagram', url: 'https://instagram.com/vanchi.dev' },
		{ name: 'TikTok', url: 'https://tiktok.com/@vanchi.dev' },
		{ name: 'X (Twitter)', url: 'https://x.com/Vanchi_Dev' },
		{ name: 'Facebook', url: 'https://facebook.com/vanchi.dev' }
	];
</script>

<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<p class="vanchi-eyebrow mb-16">REDES</p>

		<div class="grid gap-6 lg:grid-cols-2 lg:gap-24">
			<div>
				<h2 class="vanchi-display mb-8 text-3xl font-normal lg:text-5xl">
					<span class="italic">Conecta</span><br />conmigo
				</h2>
				<p class="max-w-prose text-sm leading-relaxed text-base-content/60">
					Encontrame en redes. Comparto lo que construyo, lo que aprendo y lo que viene.
				</p>
			</div>

			<div class="space-y-px">
				{#each socials as social (social.name)}
					<a
						href={social.url}
						target="_blank"
						rel="external noopener noreferrer"
						class="card bg-base-200 border border-base-300 flex items-center justify-between px-6 py-4 transition-colors duration-150 hover:border-base-content"
					>
						<span class="font-mono text-sm text-base-content/80">{social.name}</span>
						<span class="font-mono text-xs text-secondary">→</span>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<script lang="ts">
	import SvelteKitLogo from '$lib/assets/icons/technologies/SvelteKitLogo.svelte';
	import TypeScriptLogo from '$lib/assets/icons/technologies/TypeScriptLogo.svelte';
	import DaisyLogo from '$lib/assets/icons/technologies/DaisyLogo.svelte';
	import ConvexLogo from '$lib/assets/icons/technologies/ConvexLogo.svelte';
	import SupabaseLogo from '$lib/assets/icons/technologies/SupabaseLogo.svelte';
	import BunLogo from '$lib/assets/icons/technologies/BunLogo.svelte';
	import TailwindLogo from '$lib/assets/icons/technologies/TailwindLogo.svelte';
	import AstroLogo from '$lib/assets/icons/technologies/AstroLogo.svelte';
	import GeminiIALogo from '$lib/assets/icons/technologies/GeminiIALogo.svelte';
	import N8nLogo from '$lib/assets/icons/technologies/N8nLogo.svelte';
	import VercelLogo from '$lib/assets/icons/technologies/VercelLogo.svelte';
	import NetlifyLogo from '$lib/assets/icons/technologies/NetlifyLogo.svelte';

	const skills = [
		{ name: 'SvelteKit', icon: SvelteKitLogo },
		{ name: 'TypeScript', icon: TypeScriptLogo },
		{ name: 'Tailwind CSS', icon: TailwindLogo },
		{ name: 'DaisyUI', icon: DaisyLogo },
		{ name: 'Convex', icon: ConvexLogo },
		{ name: 'Supabase', icon: SupabaseLogo },
		{ name: 'Bun', icon: BunLogo },
		{ name: 'Astro', icon: AstroLogo },
		{ name: 'Gemini AI', icon: GeminiIALogo },
		{ name: 'n8n', icon: N8nLogo },
		{ name: 'Vercel', icon: VercelLogo },
		{ name: 'Netlify', icon: NetlifyLogo }
	];
</script>

<section class="w-full py-40 vanchi-hairline border-t">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex items-center gap-2.5 mb-16">
			<span class="vanchi-agent-dot animate-pulse"></span>
			<span class="vanchi-eyebrow">03 // HERRAMIENTAS</span>
		</div>

		<div class="flex flex-wrap gap-2">
			{#each skills as skill (skill.name)}
				<div class="border border-base-300 bg-base-200 flex items-center gap-2 p-3">
					<div class="h-4 w-4 text-base-content/60">
						<skill.icon size={16} />
					</div>
					<span class="font-mono text-xs text-base-content/80">{skill.name}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

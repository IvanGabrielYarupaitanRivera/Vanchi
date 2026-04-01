<script lang="ts">
	import { ShieldCheck, Lock, FileText, Database } from '@lucide/svelte';

	const features = [
		{
			id: 'encrypt',
			icon: Lock,
			label: 'Cifrado bancario',
			desc: 'Datos protegidos con AES-256 en tránsito y en reposo.'
		},
		{
			id: 'lpdp',
			icon: FileText,
			label: 'Cumplimiento LPDP',
			desc: 'Alineado con la Ley de Protección de Datos Personales del Perú.'
		},
		{
			id: 'backup',
			icon: Database,
			label: 'Backups automáticos',
			desc: 'Copias de seguridad diarias, sin intervención manual.'
		}
	] as const;
</script>

<div
	class="relative overflow-hidden rounded-3xl border border-primary/20 bg-base-100/60 p-8 shadow-2xl backdrop-blur-lg lg:p-12"
>
	<!-- Background glow -->
	<div
		class="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
	></div>
	<div
		class="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-primary/3 blur-2xl"
	></div>

	<div class="relative flex flex-col gap-10 lg:flex-row lg:items-center">
		<!-- Content -->
		<div class="flex-1">
			<div class="mb-8">
				<span class="mb-2 block text-sm font-bold tracking-widest text-primary uppercase"
					>Seguridad</span
				>
				<h3 class="mb-4 text-3xl leading-tight font-bold lg:text-4xl">
					Tus datos, blindados. <br />
					<span class="font-serif text-base-content/50 italic">desde el primer día.</span>
				</h3>
				<p class="max-w-xl leading-loose text-base-content/70">
					Arquitectura diseñada para cumplir con los estándares más exigentes del sector legal
					peruano. Encriptación de nivel bancario y cumplimiento con la <strong
						>Ley de Protección de Datos Personales</strong
					>.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-3 lg:grid-cols-3">
				{#each features as feature (feature.id)}
					{@const Icon = feature.icon}
					<div
						class="rounded-xl border border-white/10 bg-base-200/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(197,160,89,0.10)]"
					>
						<Icon class="mb-3 text-primary" size={20} />
						<p class="text-sm font-semibold text-base-content">{feature.label}</p>
						<p class="mt-1 text-xs leading-relaxed text-base-content/55">{feature.desc}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Decorative shield -->
		<div class="hidden shrink-0 lg:flex lg:items-center lg:justify-center">
			<div
				class="relative flex h-44 w-44 items-center justify-center rounded-full bg-primary/5 ring-1 ring-primary/15"
			>
				<div class="absolute inset-0 animate-pulse rounded-full bg-primary/5 blur-xl"></div>
				<ShieldCheck class="relative text-primary/25" size={88} strokeWidth={0.8} />
			</div>
		</div>
	</div>
</div>

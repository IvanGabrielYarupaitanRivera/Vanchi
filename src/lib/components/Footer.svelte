<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import vanchi from '$lib/assets/icons/vanchi.svg';
	import GithubLogo from '$lib/assets/icons/network/GithubLogo.svelte';
	import LinkedInLogo from '$lib/assets/icons/network/LinkedInLogo.svelte';
	import WhatsAppLogo from '$lib/assets/icons/network/WhatsAppLogo.svelte';
	import GmailLogo from '$lib/assets/icons/network/GmailLogo.svelte';
	import FacebookLogo from '$lib/assets/icons/network/FacebookLogo.svelte';

	const year = new Date().getFullYear();
	type FooterLinkHref = '/#servicios' | '/#about-me' | '/#contacto';

	const links: { label: string; href: FooterLinkHref }[] = [
		{ label: 'Servicios', href: '/#servicios' },
		{ label: 'Sobre mí', href: '/#about-me' },
		{ label: 'Contacto', href: '/#contacto' }
	];

	// TODO: reemplaza con tus URLs reales
	const socials = [
		{ label: 'GitHub', href: 'https://github.com/IvanGabrielYarupaitanRivera', icon: GithubLogo },
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/ivan-yarupaitan-rivera/',
			icon: LinkedInLogo
		},
		{
			label: 'Facebook',
			href: 'https://www.facebook.com/vanchi.desarrollador',
			icon: FacebookLogo
		},
		{ label: 'WhatsApp', href: 'https://wa.me/985942670', icon: WhatsAppLogo },
		{ label: 'Email', href: 'mailto:ivangyr321@gmail.com', icon: GmailLogo }
	];
</script>

<footer class="relative border-t border-white/10 bg-base-300" aria-label="Footer">
	<div class="container mx-auto px-4 py-10">
		<div
			class="footer grid grid-cols-1 gap-10 rounded-2xl border border-white/10 bg-base-100 p-8 shadow-2xl lg:grid-cols-3 lg:p-10"
		>
			<aside class="space-y-4">
				<a href={resolve('/')} aria-label="Ir al inicio">
					<enhanced:img src={vanchi} alt="Vanchi Logo" class="h-8" />
				</a>

				<p class="max-w-md text-base-content/70">
					Ingeniería de software y diseño digital de alto impacto. Sistemas elegantes, rápidos y
					listos para escalar.
				</p>

				<a href={resolve('/#contacto')} class="btn btn-primary">
					Comenzar una consulta
					<ArrowUpRight size={16} />
				</a>
			</aside>

			<nav aria-label="Navegación del sitio" class="flex w-full flex-col lg:items-center">
				<h3 class="footer-title text-base-content/70">Navegación</h3>
				<ul class="space-y-2">
					{#each links as item (item.href)}
						<li>
							<a
								class="link text-base-content/70 link-hover transition-all duration-300"
								href={resolve(item.href)}
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<nav aria-label="Redes y contacto" class="flex w-full flex-col lg:items-center">
				<h3 class="footer-title text-base-content/70">Conectar</h3>

				<div class="flex flex-wrap gap-3">
					{#each socials as s (s.label)}
						<a
							class="badge py-4 badge-md transition-all duration-300 hover:-translate-y-1 hover:bg-base-300"
							href={s.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={s.label}
							title={s.label}
						>
							<s.icon size={18} />
							<span>{s.label}</span>
						</a>
					{/each}
				</div>

				<p class="mt-6 text-sm text-base-content/50">
					Respuesta en aproximado 12 horas. Trabajo remoto y proyectos con alcance claro.
				</p>
			</nav>
		</div>

		<div
			class="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 lg:flex-row lg:items-center lg:justify-between"
		>
			<p class="text-sm text-base-content/50">© {year} Vanchi. Todos los derechos reservados.</p>
		</div>
	</div>
</footer>

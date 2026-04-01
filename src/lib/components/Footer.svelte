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
	type FooterLinkHref =
		| '/#servicios'
		| '/precios'
		| '/waas'
		| '/proyectos'
		| '/ivan-yarupaitan-rivera'
		| '/politica-de-privacidad'
		| '/condiciones-del-servicio'
		| '/eliminacion-de-datos-de-usuario'
		| '/terminos-y-condiciones'
		| '/#contacto';

	const links: { label: string; href: FooterLinkHref }[] = [
		{ label: 'Servicios', href: '/#servicios' },
		{ label: 'Precios', href: '/precios' },
		{ label: 'Modelo WaaS', href: '/waas' },
		{ label: 'Proyectos', href: '/proyectos' },
		{ label: 'Sobre mí', href: '/ivan-yarupaitan-rivera' },
		{ label: 'Privacidad', href: '/politica-de-privacidad' },
		{ label: 'Condiciones del servicio', href: '/condiciones-del-servicio' },
		{ label: 'Eliminación de datos', href: '/eliminacion-de-datos-de-usuario' },
		{ label: 'Términos', href: '/terminos-y-condiciones' },
		{ label: 'Contacto', href: '/#contacto' }
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
					<a
						class="badge py-4 badge-md transition-all duration-300 hover:-translate-y-1 hover:bg-base-300"
						href="https://github.com/IvanGabrielYarupaitanRivera"
						target="_blank"
						rel="external noopener noreferrer"
						aria-label="GitHub"
						title="GitHub"
					>
						<GithubLogo size={18} />
						<span>GitHub</span>
					</a>
					<a
						class="badge py-4 badge-md transition-all duration-300 hover:-translate-y-1 hover:bg-base-300"
						href="https://www.linkedin.com/in/ivan-yarupaitan-rivera/"
						target="_blank"
						rel="external noopener noreferrer"
						aria-label="LinkedIn"
						title="LinkedIn"
					>
						<LinkedInLogo size={18} />
						<span>LinkedIn</span>
					</a>
					<a
						class="badge py-4 badge-md transition-all duration-300 hover:-translate-y-1 hover:bg-base-300"
						href="https://www.facebook.com/vanchi.desarrollador"
						target="_blank"
						rel="external noopener noreferrer"
						aria-label="Facebook"
						title="Facebook"
					>
						<FacebookLogo size={18} />
						<span>Facebook</span>
					</a>
					<a
						class="badge py-4 badge-md transition-all duration-300 hover:-translate-y-1 hover:bg-base-300"
						href="https://wa.me/985942670"
						target="_blank"
						rel="external noopener noreferrer"
						aria-label="WhatsApp"
						title="WhatsApp"
					>
						<WhatsAppLogo size={18} />
						<span>WhatsApp</span>
					</a>
					<a
						class="badge py-4 badge-md transition-all duration-300 hover:-translate-y-1 hover:bg-base-300"
						href="mailto:ivangyr321@gmail.com"
						target="_blank"
						rel="external noopener noreferrer"
						aria-label="Email"
						title="Email"
					>
						<GmailLogo size={18} />
						<span>Email</span>
					</a>
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

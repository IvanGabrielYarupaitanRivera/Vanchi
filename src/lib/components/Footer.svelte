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
		| '/#contacto';

	const navLinks: { label: string; href: FooterLinkHref }[] = [
		{ label: 'WaaS', href: '/precios' },
		{ label: 'Soluciones', href: '/#servicios' },
		{ label: 'Proyectos', href: '/proyectos' },
		{ label: 'Metodología WaaS', href: '/waas' },
		{ label: 'Sobre mí', href: '/ivan-yarupaitan-rivera' }
	];

	const legalLinks: { label: string; href: FooterLinkHref }[] = [
		{ label: 'P. de Privacidad', href: '/politica-de-privacidad' },
		{ label: 'Condiciones', href: '/condiciones-del-servicio' },
		{ label: 'Elim. de datos', href: '/eliminacion-de-datos-de-usuario' }
	];
</script>

<footer class="relative border-t border-white/10 bg-base-300" aria-label="Footer">
	<div class="container mx-auto px-4 py-10">
		<div
			class="grid grid-cols-1 gap-12 rounded-3xl border border-white/10 bg-base-100/60 p-8 shadow-2xl backdrop-blur-lg sm:grid-cols-2 lg:grid-cols-4 lg:p-12"
		>
			<aside class="flex flex-col space-y-6">
				<a
					href={resolve('/')}
					class="w-fit transition-transform hover:scale-105"
					aria-label="Ir al inicio"
				>
					<enhanced:img src={vanchi} alt="Vanchi Logo" class="h-8" />
				</a>

				<p class="text-sm leading-relaxed text-base-content/70">
					WaaS para marcas que quieren lanzar rápido, escalar con criterio y activar nuevas
					capacidades sin reconstruir todo desde cero.
				</p>

				<a
					href={resolve('/precios')}
					class="btn w-fit shadow-[0_0_15px_rgba(197,160,89,0.15)] btn-sm btn-primary hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(197,160,89,0.3)]"
				>
					Ver plan WaaS
					<ArrowUpRight size={16} />
				</a>
			</aside>

			<nav aria-label="Explorar sitio" class="flex flex-col space-y-4">
				<h3 class="text-sm font-semibold tracking-wider text-base-content uppercase">Explorar</h3>
				<ul class="flex flex-col space-y-3">
					{#each navLinks as item (item.href)}
						<li>
							<a
								class="inline-block text-sm text-base-content/60 transition-all duration-300 hover:translate-x-1 hover:text-primary"
								href={resolve(item.href)}
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<nav aria-label="Legal" class="flex flex-col space-y-4">
				<h3 class="text-sm font-semibold tracking-wider text-base-content uppercase">Legal</h3>
				<ul class="flex flex-col space-y-3">
					{#each legalLinks as item (item.href)}
						<li>
							<a
								class="inline-block text-sm text-base-content/60 transition-all duration-300 hover:translate-x-1 hover:text-primary"
								href={resolve(item.href)}
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<nav aria-label="Redes y contacto" class="flex flex-col space-y-4">
				<h3 class="text-sm font-semibold tracking-wider text-base-content uppercase">Conectar</h3>

				<div class="flex flex-wrap gap-2">
					<a
						class="btn btn-square border border-white/5 bg-base-200/50 btn-ghost transition-all duration-300 btn-sm hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
						href="https://github.com/IvanGabrielYarupaitanRivera"
						target="_blank"
						rel="external noopener noreferrer"
						aria-label="GitHub"
					>
						<GithubLogo size={16} />
					</a>
					<a
						class="btn btn-square border border-white/5 bg-base-200/50 btn-ghost transition-all duration-300 btn-sm hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
						href="https://www.linkedin.com/in/ivan-yarupaitan-rivera/"
						target="_blank"
						rel="external noopener noreferrer"
						aria-label="LinkedIn"
					>
						<LinkedInLogo size={16} />
					</a>
					<a
						class="btn btn-square border border-white/5 bg-base-200/50 btn-ghost transition-all duration-300 btn-sm hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
						href="https://www.facebook.com/vanchi.desarrollador"
						target="_blank"
						rel="external noopener noreferrer"
						aria-label="Facebook"
					>
						<FacebookLogo size={16} />
					</a>
					<a
						class="btn btn-square border border-white/5 bg-base-200/50 btn-ghost transition-all duration-300 btn-sm hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
						href="https://wa.me/985942670"
						target="_blank"
						rel="external noopener noreferrer"
						aria-label="WhatsApp"
					>
						<WhatsAppLogo size={16} />
					</a>
					<a
						class="btn btn-square border border-white/5 bg-base-200/50 btn-ghost transition-all duration-300 btn-sm hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
						href="mailto:ivangyr321@gmail.com"
						target="_blank"
						rel="external noopener noreferrer"
						aria-label="Email"
					>
						<GmailLogo size={16} />
					</a>
				</div>

				<p class="mt-4 text-xs leading-relaxed text-base-content/40">
					Respuesta promedio en 12 horas.<br />Trabajo remoto y alcance claro.
				</p>
			</nav>
		</div>

		<div
			class="mt-8 flex flex-col items-center justify-between space-y-4 px-4 sm:flex-row sm:space-y-0"
		>
			<p class="text-xs text-base-content/40">© {year} Vanchi. Todos los derechos reservados.</p>
			<p class="flex items-center gap-1 text-xs text-base-content/40">
				Diseñado con <span class="text-primary">Profesionalismo</span>
			</p>
		</div>
	</div>
</footer>

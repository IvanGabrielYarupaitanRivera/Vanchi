import { projectsData } from '$lib/data/projects';

export const prerender = true;

export async function GET() {
	const website = 'https://www.vanchi.pro';

	const staticLastmodByPath: Record<string, string> = {
		'': '2026-04-01',
		waas: '2026-04-01',
		proyectos: '2026-03-30',
		precios: '2026-03-30',
		'soluciones-legales': '2026-04-01',
		'ivan-yarupaitan-rivera': '2026-03-30',
		'politica-de-privacidad': '2026-03-31',
		'condiciones-del-servicio': '2026-03-31',
		'eliminacion-de-datos-de-usuario': '2026-03-31'
	};

	const projectLastmodBySlug: Record<string, string> = {
		encap: '2026-01-31',
		'colegio-educere': '2025-12-31',
		diapis: '2025-10-31',
		farmape: '2025-11-30',
		junin360: '2025-09-30',
		mediroosevelt: '2025-11-30',
		obstetraconecta: '2025-11-30',
		'peralta-asociados': '2025-03-31'
	};

	// 1. Rutas estáticas fijas
	const staticPages = [
		{ path: '', priority: '1.0', changefreq: 'weekly' },
		{ path: 'waas', priority: '0.8', changefreq: 'monthly' },
		{ path: 'proyectos', priority: '0.8', changefreq: 'weekly' },
		{ path: 'precios', priority: '0.8', changefreq: 'weekly' },
		{ path: 'soluciones-legales', priority: '0.8', changefreq: 'weekly' },
		{ path: 'ivan-yarupaitan-rivera', priority: '0.6', changefreq: 'monthly' },
		{ path: 'politica-de-privacidad', priority: '0.4', changefreq: 'yearly' },
		{ path: 'condiciones-del-servicio', priority: '0.4', changefreq: 'yearly' },
		{ path: 'eliminacion-de-datos-de-usuario', priority: '0.4', changefreq: 'yearly' }
	].map((page) => ({
		...page,
		lastmod: staticLastmodByPath[page.path] ?? '2026-03-30'
	}));

	// 2. Rutas dinámicas generadas desde tus datos (Automático)
	// Usamos Object.keys para obtener los slugs ('junin360', 'peralta-asociados', etc.)
	const projectPages = Object.keys(projectsData).map((slug) => ({
		path: `proyectos/${slug}`,
		priority: '0.7',
		changefreq: 'monthly',
		lastmod: projectLastmodBySlug[slug] ?? '2025-11-30'
	}));

	// 3. Lista final combinada
	const pages = [...staticPages, ...projectPages];
	const latestLastmod = pages.reduce(
		(latest, page) => (page.lastmod > latest ? page.lastmod : latest),
		pages[0]?.lastmod ?? '2026-04-01'
	);

	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>
  ${pages
		.map((page) => {
			const location = page.path ? `${website}/${page.path}` : `${website}/`;
			return `
  <url>
		<loc>${location}</loc>
		<lastmod>${page.lastmod}</lastmod>
		<changefreq>${page.changefreq}</changefreq>
		<priority>${page.priority}</priority>
  </url>
  `;
		})
		.join('')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Last-Modified': new Date(`${latestLastmod}T00:00:00.000Z`).toUTCString()
		}
	});
}

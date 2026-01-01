import { projectsData } from '$lib/data/projects';

export const prerender = true;

export async function GET() {
	const website = 'https://www.vanchi.pro';

	// 1. Rutas estáticas fijas
	const staticPages = ['', 'proyectos', 'precios'];

	// 2. Rutas dinámicas generadas desde tus datos (Automático)
	// Usamos Object.keys para obtener los slugs ('junin360', 'peralta-asociados', etc.)
	const projectPages = Object.keys(projectsData).map((slug) => `proyectos/${slug}`);

	// 3. Lista final combinada
	const pages = [...staticPages, ...projectPages];

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
			return `
  <url>
    <loc>${website}/${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>
  `;
		})
		.join('')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}

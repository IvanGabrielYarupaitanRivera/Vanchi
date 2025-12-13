import estrella from '$lib/assets/images/services/estrella.webp';
import cursor from '$lib/assets/images/services/cursor.webp';
import pincel from '$lib/assets/images/services/pincel.webp';
import nube from '$lib/assets/images/services/nube.webp';

export type Service = {
	id: number;
	title: string;
	description: string;
	image: string;
	span?: string;
};

export const SERVICES: Service[] = [
	{
		id: 1,
		title: 'Inteligencia Artificial',
		description:
			'Implementamos herramientas de IA para automatizar tareas repetitivas, analizar grandes volúmenes de información y ayudarle a tomar mejores decisiones.',
		image: estrella,
		span: 'lg:col-span-2'
	},
	{
		id: 2,
		title: 'Desarrollo de Sistemas',
		description:
			'Construimos plataformas digitales a la medida, seguras y sencillas de usar, que organizan y controlan los procesos internos.',
		image: cursor,
		span: 'lg:col-span-1'
	},
	{
		id: 3,
		title: 'Sitios Web de Alto Impacto',
		description:
			'Creamos páginas web ultrarrápidas, diseñadas para aparecer en los primeros lugares de Google y enfocadas en convertir.',
		image: pincel,
		span: 'lg:col-span-1'
	},
	{
		id: 4,
		title: 'Infraestructura y Soporte',
		description:
			'Nos encargamos de que sus sistemas digitales funcionen siempre sin fallos, con la capacidad de crecer sin interrupciones.',
		image: nube,
		span: 'lg:col-span-2'
	}
];

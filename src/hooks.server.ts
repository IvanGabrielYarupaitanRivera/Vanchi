import type { Handle } from '@sveltejs/kit';

const CANONICAL_HOST = 'vanchi.pro';
const WWW_HOST = 'www.vanchi.pro';

export const handle: Handle = async ({ event, resolve }) => {
	const { url } = event;

	if (url.hostname === WWW_HOST) {
		const redirectUrl = new URL(url);
		redirectUrl.hostname = CANONICAL_HOST;
		return Response.redirect(redirectUrl, 301);
	}

	return resolve(event);
};

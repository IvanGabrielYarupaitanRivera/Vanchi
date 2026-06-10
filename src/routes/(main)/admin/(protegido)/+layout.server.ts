import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const session = cookies.get('admin_session');

	if (session !== 'authenticated') {
		throw redirect(307, '/(main)/admin/login');
	}

	return {};
};

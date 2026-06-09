import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { convexServer } from '$lib/server/convex';
import { api } from '$convex/_generated/api';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const password = data.get('password');

		if (!password || typeof password !== 'string') {
			return fail(400, { error: 'Contraseña requerida' });
		}

		try {
			await convexServer.action(api.admin.verificarPassword, { password });
		} catch (err) {
			console.log('Error en acción de login admin:', err);
			return fail(401, { error: 'Contraseña incorrecta' });
		}

		cookies.set('admin_session', 'authenticated', {
			path: '/admin',
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
			maxAge: 60 * 60 * 24
		});

		throw redirect(303, '/admin/documentos');
	}
};

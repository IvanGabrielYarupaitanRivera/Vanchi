/**
 * Valida que la contraseña de administrador sea correcta.
 * Lanza error si no coincide.
 */
export function validarPassword(password: string): void {
	if (password !== process.env.ADMIN_PASSWORD) {
		throw new Error("Contraseña incorrecta");
	}
}

import { action } from "./_generated/server";
import { v } from "convex/values";

/**
 * Verifica si la contraseña de administrador es correcta (para login desde frontend).
 */
export const verificarPassword = action({
	args: { password: v.string() },
	handler: async (_ctx, { password }): Promise<{ ok: boolean }> => {
		validarPassword(password);
		return { ok: true };
	},
});

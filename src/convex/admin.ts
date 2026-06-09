import { action } from "./_generated/server";
import { v } from "convex/values";

/**
 * Verifica si la contraseña de administrador es correcta.
 */
export const verificarPassword = action({
	args: { password: v.string() },
	handler: async (_ctx, { password }): Promise<{ ok: boolean }> => {
		if (password !== process.env.ADMIN_PASSWORD) {
			throw new Error("Contraseña incorrecta");
		}
		return { ok: true };
	},
});

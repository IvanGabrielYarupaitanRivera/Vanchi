import { query } from "../_generated/server";
import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";
import { listUIMessages } from "@convex-dev/agent";
import { components } from "../_generated/api";

/**
 * Obtiene los mensajes de un thread en formato listo para UI.
 */
export const listThreadMessages = query({
	args: {
		threadId: v.string(),
		paginationOpts: paginationOptsValidator,
	},
	handler: async (ctx, { threadId, paginationOpts }) => {
		const paginated = await listUIMessages(ctx, components.agent, {
			threadId,
			paginationOpts,
		});
		return paginated;
	},
});

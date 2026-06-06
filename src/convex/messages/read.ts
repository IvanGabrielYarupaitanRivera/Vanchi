import { query } from "../_generated/server";
import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";
import { vStreamArgs, listUIMessages, syncStreams } from "@convex-dev/agent";
import { components } from "../_generated/api";

/**
 * Obtiene los mensajes de un thread en formato listo para UI,
 * incluyendo deltas de streaming en tiempo real.
 */
export const listThreadMessages = query({
	args: {
		threadId: v.string(),
		paginationOpts: paginationOptsValidator,
		streamArgs: vStreamArgs,
	},
	handler: async (ctx, args) => {
		const paginated = await listUIMessages(ctx, components.agent, args);

		const streams = await syncStreams(ctx, components.agent, args);

		return { ...paginated, streams };
	},
});

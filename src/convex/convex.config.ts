import { defineApp } from "convex/server";
import { v } from "convex/values";
import agent from "@convex-dev/agent/convex.config";

const app = defineApp({
	env: {
		AI_GATEWAY_API_KEY: v.string(),
		ADMIN_PASSWORD: v.string(),
	},
});
app.use(agent);
export default app;

/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as admin from "../admin.js";
import type * as agentV2_config_config from "../agentV2/config/config.js";
import type * as agentV2_config_modelo from "../agentV2/config/modelo.js";
import type * as agentV2_config_prompt from "../agentV2/config/prompt.js";
import type * as agentV2_conversations from "../agentV2/conversations.js";
import type * as agentV2_tools_documentosV2_buscarDocumentos from "../agentV2/tools/documentosV2/buscarDocumentos.js";
import type * as agentV2_tools_index from "../agentV2/tools/index.js";
import type * as entidades_documentosV2_mutations from "../entidades/documentosV2/mutations.js";
import type * as entidades_documentosV2_queries from "../entidades/documentosV2/queries.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  admin: typeof admin;
  "agentV2/config/config": typeof agentV2_config_config;
  "agentV2/config/modelo": typeof agentV2_config_modelo;
  "agentV2/config/prompt": typeof agentV2_config_prompt;
  "agentV2/conversations": typeof agentV2_conversations;
  "agentV2/tools/documentosV2/buscarDocumentos": typeof agentV2_tools_documentosV2_buscarDocumentos;
  "agentV2/tools/index": typeof agentV2_tools_index;
  "entidades/documentosV2/mutations": typeof entidades_documentosV2_mutations;
  "entidades/documentosV2/queries": typeof entidades_documentosV2_queries;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {
  agent: import("@convex-dev/agent/_generated/component.js").ComponentApi<"agent">;
};

/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as agent_config from "../agent/config.js";
import type * as agent_conversations from "../agent/conversations.js";
import type * as agent_tools from "../agent/tools.js";
import type * as messages_read from "../messages/read.js";
import type * as rag_chunks from "../rag/chunks.js";
import type * as rag_documents from "../rag/documents.js";
import type * as rag_ingest from "../rag/ingest.js";
import type * as rag_search from "../rag/search.js";
import type * as seed from "../seed.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  "agent/config": typeof agent_config;
  "agent/conversations": typeof agent_conversations;
  "agent/tools": typeof agent_tools;
  "messages/read": typeof messages_read;
  "rag/chunks": typeof rag_chunks;
  "rag/documents": typeof rag_documents;
  "rag/ingest": typeof rag_ingest;
  "rag/search": typeof rag_search;
  seed: typeof seed;
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

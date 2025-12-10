export interface ExecResponse {
  result?: string;
  error?: string;
  id?: string;
}

// Re-export McpServerConfig from the external-mcps module for consistency
export type { McpServerConfig } from "../external-mcps/mcp_config.ts";

export interface Config {
  // Client settings
  serverUrl?: string;

  // Server settings
  port?: number;
  lootboxRoot?: string;
  lootboxDataDir?: string;
  mcpServers?: Record<string, McpServerConfig>;
}

export interface FlowState {
  file: string;
  section: number;
  loopIteration?: number; // Current iteration count for current step (if looping)
  sessionId?: string; // Session ID for grouping workflow events
}

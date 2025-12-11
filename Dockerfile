# Lootbox - MCP RPC Bridge Server
# Deno-based server for code-mode execution with MCP tools

FROM denoland/deno:alpine-2.3.1

WORKDIR /app

# Copy source code
COPY . .

# Cache dependencies
RUN deno cache src/lootbox-cli.ts

# Create directories for lootbox
RUN mkdir -p .lootbox/tools .lootbox/workflows .lootbox/scripts

# Expose WebSocket/HTTP port
EXPOSE 3000

# Run the server
CMD ["deno", "run", "--allow-all", "src/lootbox-cli.ts", "server", "--port", "3000"]

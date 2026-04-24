import { defineConfig } from "@playwright/test";

// Use a non-default port (3100) so the suite never accidentally connects
// to a dev server from a sibling project (e.g. PCC) that may already
// be bound to :3000 on the developer's machine.
const PORT = 3100;
const BASE_URL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./__tests__",
  use: {
    baseURL: BASE_URL,
  },
  webServer: {
    command: `pnpm dev --port ${PORT}`,
    url: BASE_URL,
    reuseExistingServer: true,
    timeout: 120_000,
  },
  reporter: "line",
  retries: 0,
  workers: 1,
});

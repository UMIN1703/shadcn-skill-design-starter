import { defineConfig } from "vitest/config";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    storybookTest({ configDir: path.join(dirname, ".storybook") }),
  ],
  test: {
    name: "storybook",
    browser: {
      enabled: true,
      provider: "playwright",
      headless: true,
      instances: [{ browser: "chromium" }],
    },
    setupFiles: [".storybook/vitest.setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "json-summary"],
      include: ["components/ui/**/*.{ts,tsx}"],
      exclude: ["**/*.d.ts"],
    },
  },
});

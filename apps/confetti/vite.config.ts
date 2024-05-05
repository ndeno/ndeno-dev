import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const DEV_DOMAIN = process.env.NDENO_DOMAIN || "";

export default defineConfig(({ _command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: `https://dev.${DEV_DOMAIN}/confetti`,
    define: {
      global: {},
      define: {
        "process.env.NODE_ENV": JSON.stringify("production"),
        "process.env.NDENO_DOMAIN": JSON.stringify(env.NDENO_DOMAIN),
      },
      plugins: [react()],

      resolve: {
        alias: {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
          "./runtimeConfig": "./runtimeConfig.browser",
        },
      },
    },
  };
});

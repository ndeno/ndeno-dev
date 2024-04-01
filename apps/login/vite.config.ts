import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const DEV_DOMAIN = process.env.NDENO_DOMAIN || "";

export default defineConfig(({ _command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: `https://dev.${DEV_DOMAIN}/login`,
    define: {
      global: {},
      "process.env.NDENO_DEV_PUBLIC_CLIENT_1_ID": JSON.stringify(
        env.NDENO_DEV_PUBLIC_CLIENT_1_ID
      ),
      "process.env.NDENO_DEV_USER_POOL_ID": JSON.stringify(
        env.NDENO_DEV_USER_POOL_ID
      ),
      "process.env.NDENO_DOMAIN": JSON.stringify(env.NDENO_DOMAIN),
    },
    plugins: [react()],

    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "./runtimeConfig": "./runtimeConfig.browser",
      },
    },
  };
});

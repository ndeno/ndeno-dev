import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      global: {},
      "process.env.NDENO_DEV_PUBLIC_CLIENT_1_ID": JSON.stringify(
        env.NDENO_DEV_PUBLIC_CLIENT_1_ID
      ),
      "process.env.NDENO_DEV_USER_POOL_ID": JSON.stringify(
        env.NDENO_DEV_USER_POOL_ID
      ),
      "process.env.NDENO_DOMAIN": JSON.stringify(env.NDENO_DOMAIN),
      "process.env.STAND_ALONE": JSON.stringify(env.NDENO_DOMAIN),
    },
    plugins: [react(), vanillaExtractPlugin()],

    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "./runtimeConfig": "./runtimeConfig.browser",
      },
    },
  };
});

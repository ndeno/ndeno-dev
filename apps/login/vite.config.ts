import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ _command, mode }) => {
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

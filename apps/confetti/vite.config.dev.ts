import { defineConfig, loadEnv } from "vite";
import config from "./vite.config";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    ...config,
    base: `/`,
    define: {
      global: {},
      define: {
        "process.env.NODE_ENV": JSON.stringify("development"),
        "process.env.NDENO_DOMAIN": JSON.stringify("foo.bar"),
      },
    },
  };
});

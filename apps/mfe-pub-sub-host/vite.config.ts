import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["mfe-pub-sub-dep-1"], // Exclude these from Vite's optimization since they're in the import map
  },
});

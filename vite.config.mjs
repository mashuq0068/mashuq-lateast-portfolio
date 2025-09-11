import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";

export default defineConfig({
  base: './', // ✅ Crucial for Vercel or any static host
  build: {
    outDir: "build", // ✅ or use "dist" if you prefer the default
    chunkSizeWarningLimit: 2000,
  },
  plugins: [tsconfigPaths(), react(), tagger()],
  server: {
    port: 5173,
    host: "0.0.0.0",
    strictPort: true,
  }
});

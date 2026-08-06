import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    host: true,
    port: 5173,
  },

  preview: {
    host: true,
    port: 4173,
  },

  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",

    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("react") ||
              id.includes("react-dom")
            ) {
              return "react";
            }

            if (id.includes("lucide-react")) {
              return "icons";
            }

            if (id.includes("@emailjs/browser")) {
              return "emailjs";
            }

            if (id.includes("aos")) {
              return "aos";
            }

            return "vendor";
          }
        },

        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
});
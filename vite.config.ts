import { builderDevTools } from "@builder.io/dev-tools/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
// https://vite.dev/config/

// Enable use of .env variables
import dotenv from 'dotenv';
dotenv.config();

// Get folder name from .env
const folder = process.env.VITE_DIST_BUILD;

export default defineConfig({
  base: "./",
  plugins: [react(), builderDevTools(), tailwindcss()],

  build: {
    outDir: path.resolve(__dirname, `dist/${folder}`),
    emptyOutDir: true,
    // Increase chunk size warning limit (in kbs)
    chunkSizeWarningLimit: 1000,
    // eval of Builder do not break minification
    commonjsOptions: {
      ignoreTryCatch: false,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

import { builderDevTools } from "@builder.io/dev-tools/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
// https://vite.dev/config/

export default defineConfig({
  base: "./",
  plugins: [react(), builderDevTools(), tailwindcss()],
  // Garante que o eval do Builder não quebre a minificação
  build: {
    // Garante que o eval do Builder não quebre a minificação
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

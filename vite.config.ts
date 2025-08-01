import { builderDevTools } from "@builder.io/dev-tools/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/

export default defineConfig({
  base: "./",
  plugins: [react(), builderDevTools()],
  // Garante que o eval do Builder não quebre a minificação
  build: {
    // Garante que o eval do Builder não quebre a minificação
    commonjsOptions: {
      ignoreTryCatch: false,
    },
  },
});

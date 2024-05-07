/* global process */
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // déclaration du chemin pour la mise en production
  base: process.env.NODE_ENV === "production" ? "/" : "/",

  // permet de rediriger toutes les requetes vers index.html
  server: {
    historyApiFallback: true,
  },

  // déclaration des alias pour les chemins
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@react": fileURLToPath(new URL("./src/react", import.meta.url)),
      "@redux": fileURLToPath(new URL("./src/redux", import.meta.url)),
      "@services": fileURLToPath(new URL("./src/services", import.meta.url)),
      "@config": fileURLToPath(new URL("./src/config.js", import.meta.url)),
      "@apiConfig": fileURLToPath(
        new URL("./src/apiConfig.js", import.meta.url)
      ),
      "@pictureConfig": fileURLToPath(
        new URL("./src/pictureConfig", import.meta.url)
      ),
    },
  },
});

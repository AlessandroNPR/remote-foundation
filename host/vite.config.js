import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { fileURLToPath, URL } from 'node:url'
import remoteFile from '/Users/night/Desktop/file.js'
import path from 'path';
// https://vitejs.dev/config/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isDev = false;
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: isDev
          ? {} // Non caricare remoti in sviluppo
          : {
            remoteApp: remoteFile, // Usato in produzione
          },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "remoteApp": isDev
          ? path.resolve(__dirname, "F:\\GITHUB\\remote\\src") // Importa direttamente i moduli durante lo sviluppo
          : "remoteApp/assets/remoteEntry.js", // Usa federazione in produzione
    }
  },
});
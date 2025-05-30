import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: 'remoteApp',
  plugins: [
    react(),
    federation({
      name: "remoteApp",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button",
        "./Components": "./src/Components/index.jsx"
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5001,
    watch: {
      usePolling: true
    }
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
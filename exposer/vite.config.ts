import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import packageJson from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "exposer_app",
      filename: "remoteEntry.js",
      exposes: {
        "./ButtonEx": "./src/components/ButtonEx.tsx",
        "./RoutesApp": "./routes/RoutesApp.tsx",
      },
      shared: {
        "react": {
          version: packageJson.dependencies.react,
        },
        "react-dom": {
          version: packageJson.dependencies["react-dom"],
        },
        "react-router-dom": {
          version: packageJson.dependencies["react-router-dom"],
        },
        "react-redux": {
          version: packageJson.dependencies["react-redux"],
        },
      },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    outDir: "dist",
    rollupOptions: {
      output: {
        format: "esm",
        entryFileNames: "[name].js",
        chunkFileNames: "assets/[name].js",
      },
    },
  },
});

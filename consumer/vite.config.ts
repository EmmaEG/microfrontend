import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import packageJson from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        exposer_app: "http://localhost:5174/assets/remoteEntry.js",
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
    modulePreload: false,
  },
});

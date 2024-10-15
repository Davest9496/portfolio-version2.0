import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
  outDir: "dist",
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/_variables.scss";
          @import "./src/styles/_mixins.scss";
          @import "./src/styles/_typography.scss";
          @import "bootstrap/scss/bootstrap";
        `,
        includePaths: ["node_modules", path.resolve(__dirname, "src/styles")],
      },
    },
  },
  server: {
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
});

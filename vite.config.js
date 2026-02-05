import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: './',
  root: "src",
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        bilder: resolve(__dirname, "src/bilder.html"),
        process: resolve(__dirname, "src/process.html")
      }
    }
  }
});

import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: '/labb3-CSS-Preproccesorer/',
  build: {
    outDir: "docs",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        sass: resolve(__dirname, "src/sass.html")
      }
    }
  }
});

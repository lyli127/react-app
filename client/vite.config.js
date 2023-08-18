import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.js",
  },
  // top-level-await supported by most browsers since Sept 2021
  //https://caniuse.com/?search=top%20level%20await
  esbuild: {
    supported: {
      "top-level-await": true,
    },
  },
});

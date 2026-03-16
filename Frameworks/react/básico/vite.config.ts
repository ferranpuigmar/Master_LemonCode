import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [checker({ typescript: true }), react()],
  resolve: {
    alias: {
      "@src": resolve(__dirname, "src"),
      "@core": resolve(__dirname, "src/core"),
    },
  }
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "https://serob111.github.io/serob-fs-dev.com/assets/Gauge.png",
  plugins: [react()],
  publicDir: "public"
});


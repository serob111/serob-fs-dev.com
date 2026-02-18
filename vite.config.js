import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/serob-fs-dev.com/",
  plugins: [react()],
  publicDir: "public"
});


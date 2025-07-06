import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/03-react-movies/",
  plugins: [react()],
});

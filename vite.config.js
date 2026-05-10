import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For a personal GitHub Pages repo named <username>.github.io, base should be "/".
// For a project repo such as "my-homepage", set GITHUB_PAGES_BASE="/my-homepage/" in the workflow.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES_BASE || "/",
});

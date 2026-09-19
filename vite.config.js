import { defineConfig } from "vite";
import { resolve } from "node:path";

const pages = [
  "index",
  "about",
  "services",
  "topics",
  "testimonials",
  "contact",
  "404",
];

export default defineConfig(({ command, mode }) => ({
  // Dev (`vite`) uses `/`. Production build + `vite preview` use the GitHub Pages project path.
  base: command === "serve" && mode !== "production" ? "/" : "/mcchord-inc/",
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((name) => [
          name === "index" ? "main" : name,
          resolve(__dirname, `${name}.html`),
        ]),
      ),
    },
  },
}));

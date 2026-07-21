import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://nexah.de",
  output: "static",
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
});

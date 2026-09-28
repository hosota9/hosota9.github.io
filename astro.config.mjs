// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://otsukare-papa.com",

    image: {
        layout: "constrained",
    },

    integrations: [sitemap()],
});

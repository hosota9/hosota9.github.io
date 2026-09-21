import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blogCollection = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
    schema: z.object({
        title: z.string(),
        category: z.string(),
        description: z.string(),
        postdate: z.date(),
        postimg: z.object({
            src: z.string(),
            alt: z.string(),
        }),
    }),
});

export const collections = {
    blog: blogCollection,
};

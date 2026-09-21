import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blogCollection = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            category: z.string(),
            description: z.string(),
            pubdate: z.date(),
            postimg: image(),
        }),
});

export const collections = {
    blog: blogCollection,
};

import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    categories: z.array(z.string()).default([]),
    image: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

export default defineConfig({
  collections: [posts],
});

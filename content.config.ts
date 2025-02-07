import { defineCollection, defineContentConfig } from "@nuxt/content";
import { object, z } from "zod";

export default defineContentConfig({
  collections: {
    test: defineCollection({
      type: "page",
      source: "test/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        // friends: z.array(object({ name: z.string(), link: z.string() })),
      }),
    }),
    data: defineCollection({
      type: "data",
      source: "data/*.json",
      schema: z.object({
        title: z.string(),
        members: z.array(object({ name: z.string(), link: z.string() })),
      }),
    }),
  },
});

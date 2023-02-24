import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        // Transform string to Date object
        pubDate: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
        updatedDate: z
            .string()
            .optional()
            .transform((str) => (str ? new Date(str) : undefined)),
        category: z.string(),
        image: z.object(
            {
                src: z.string(),
                alt: z.string()
            }
        )
    }),
});

export const collections = { blog };
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    role: z.string().optional(),
    year: z.number().optional(),
    category: z.enum(['film', 'interactive', 'brand']),
    thumbnail: z.string().optional(),
    featured: z.boolean().default(false),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string().optional(),
        })
      )
      .optional(),
    order: z.number().default(0),
  }),
});

export const collections = { projects };

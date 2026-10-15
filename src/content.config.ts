import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    slug: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    categorySlugs: z.array(z.string()).default([]),
    excerpt: z.string().optional(),
    author: z.string().optional(),
    pinned: z.boolean().optional(),
  }),
});

export const collections = { articles };

// Category display names — used for labels and meta
export const CATEGORIES = {
  fashion: 'Fashion & Apparel',
  beauty: 'Beauty & Personal Care',
  home: 'Home & Living',
  tech: 'Electronics & Consumer Tech',
  outdoor: 'Sports, Outdoors & Fitness',
} as const;

// Category accent colors — for pills and chips
export const CATEGORY_COLORS = {
  fashion: '#a48bb5',   // soft lilac
  beauty: '#d49ba3',    // blush rose
  home: '#9eb29a',      // sage
  tech: '#7a8aa0',      // dusk blue
  outdoor: '#c8893f',   // warm bronze
} as const;
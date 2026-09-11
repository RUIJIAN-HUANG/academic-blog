import { defineCollection, z } from 'astro:content';

const localizedText = z.string().min(1);

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: localizedText,
    titleZh: localizedText,
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    summary: localizedText,
    summaryZh: localizedText,
    category: localizedText,
    categoryZh: localizedText,
    tags: z.array(localizedText).default([]),
    draft: z.boolean().default(false),
    math: z.boolean().default(false),
    featured: z.boolean().default(false),
    sample: z.boolean().default(false),
    readingTime: z.number().int().positive().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: localizedText,
    titleZh: localizedText,
    summary: localizedText,
    summaryZh: localizedText,
    status: localizedText,
    statusZh: localizedText,
    stack: z.array(localizedText).default([]),
    github: z.string().url().nullable().default(null),
    demo: z.string().url().nullable().default(null),
    image: z.string().nullable().default(null),
    relatedPapers: z.array(localizedText).default([]),
    outcomes: z.array(localizedText).default([]),
    featured: z.boolean().default(false),
    sample: z.boolean().default(false),
  }),
});

const papers = defineCollection({
  type: 'content',
  schema: z.object({
    title: localizedText,
    titleZh: localizedText,
    authors: z.array(localizedText).min(1),
    year: z.number().int().min(1900).max(2100),
    venue: localizedText,
    type: z.enum(['Paper', 'Preprint', 'Reading note']),
    doi: z.string().url().nullable().default(null),
    arxiv: z.string().url().nullable().default(null),
    pdf: z.string().url().nullable().default(null),
    abstract: localizedText,
    abstractZh: localizedText,
    keywords: z.array(localizedText).default([]),
    bibtex: localizedText,
    featured: z.boolean().default(false),
    sample: z.boolean().default(false),
  }),
});

export const collections = { blog, projects, papers };

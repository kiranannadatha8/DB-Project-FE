import { z } from "zod";

export const publicationSchema = z.object({
  publication_id: z.number(),
  title: z.string(),
  year: z.number(),
  type: z.string(),
  summary: z.string(),
});

export const authorSchema = z.object({
  author_id: z.number(),
  author: z.string(),
});

export type Publications = z.infer<typeof publicationSchema>;
export type Authors = z.infer<typeof authorSchema>;

import { z } from "zod";

export const BookSchema = z.object({
  key: z.string(),
  title: z.string(),
  author_name: z.array(z.string()).optional(),
  ratings_average: z.number().optional(),
  first_publish_year: z.number().optional(),
  cover_i: z.number().optional(),
  subject: z.array(z.string()).optional(),
});

export const BookSearchResponseSchema = z.object({
  docs: z.array(BookSchema),
});

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

export type Book = z.infer<typeof BookSchema>;
export type BookSearchResponse = z.infer<typeof BookSearchResponseSchema>;

const AuthorSchema = z.object({
  author: z.object({
    key: z.string(),
  }),
});

export const BookDetailsSchema = z.object({
  key: z.string(),
  title: z.string(),
  first_publish_date: z.string().optional(),
  first_publish_year: z.string().optional(),

  description: z.union([
    z.string().optional(),
    z
      .object({
        type: z.string(),
        value: z.string(),
      })
      .optional(),
  ]),
  covers: z.array(z.number()).optional(),
  authors: z.array(AuthorSchema).optional(),
});

export type BookDetails = z.infer<typeof BookDetailsSchema>;

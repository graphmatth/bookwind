import { z } from "zod";
import { BookSchema, BookSearchResponseSchema } from "@/schemas/bookSchema";
import { AuthorSchema } from "@/schemas/authorSchema";

export type Book = z.infer<typeof BookSchema>;
export type BookSearchResponse = z.infer<typeof BookSearchResponseSchema>;

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

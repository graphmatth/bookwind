import { z } from "zod";

export const AuthorResponseSchema = z.object({
  name: z.string(),
});

export const AuthorSchema = z.object({
  author: z.object({
    key: z.string(),
  }),
});

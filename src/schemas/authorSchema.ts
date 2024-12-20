import { z } from "zod";

export const AuthorResponseSchema = z.object({
  name: z.string(),
});

import { z } from "zod";

export const contactFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  email: z.string().email("Invalid email address"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

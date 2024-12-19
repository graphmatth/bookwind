import { z } from "zod";
import { contactFormSchema } from "@/schemas/contactSchema";

export type ContactFormData = z.infer<typeof contactFormSchema>;

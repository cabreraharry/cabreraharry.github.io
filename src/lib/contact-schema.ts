import { z } from "zod";

/** Shared by the client form (validation) and the API route (server check). */
export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  subject: z.string().trim().max(150).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please enter a message (at least 10 characters).")
    .max(5000),
  /** Honeypot — must stay empty; bots that fill it are rejected server-side. */
  company: z.string().max(0).optional(),
});

export type ContactValues = z.infer<typeof contactSchema>;

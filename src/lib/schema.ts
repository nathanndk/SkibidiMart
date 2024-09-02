import { z } from "zod";

export const schemaSignIn = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

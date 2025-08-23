import { z } from "zod";

export const verifyEmailSchema = z.object({
  verificationCode: z.string().length(6),
});

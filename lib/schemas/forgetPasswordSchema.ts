import z from "zod";
import { email } from ".";

export const forgetPasswordSchema = z.object({
  email,
});

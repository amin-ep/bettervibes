import z from "zod";
import { password } from ".";

export const recoverPasswordSchema = z
  .object({
    password,
    passwordConfirm: password,
    recoverId: z.string(),
  })
  .superRefine((schema, ctx) => {
    if (schema.password !== schema.passwordConfirm) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords are not same",
        path: ["passwordConfirm"],
      });
    }
  });

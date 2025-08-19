import { z } from "zod";
import { email, firstName, lastName, password, username } from ".";

const signupSchema = z
  .object({
    firstName: firstName.optional(),
    lastName: lastName.optional(),
    email,
    password,
    passwordConfirm: password,
    username,
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

export { signupSchema };

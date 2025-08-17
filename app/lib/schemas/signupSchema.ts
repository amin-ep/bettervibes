import { z } from "zod";
import { email, firstName, lastName, password } from ".";

const signupSchema = z.object({
  firstName,
  lastName,
  email,
  password,
  passwordConfirm: password,
});

export { signupSchema };

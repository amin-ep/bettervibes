import { z } from "zod";
import { email, password } from ".";

export const loginSchema = z.object({
  email,
  password,
});

import z from "zod";
import { password } from ".";

export const changePasswordSchema = z.object({
  password,
  currentPassword: password,
});

import z from "zod";
import { email } from ".";

export const editEmailSchema = z.object({
  candidateEmail: email,
});

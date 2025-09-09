import z from "zod";
import { firstName, lastName, username } from ".";

export const updateMeSchema = z.object({
  firstName: z.union([firstName, z.literal("")]).optional(),
  lastName: z.union([lastName, z.literal("")]).optional(),
  username: username.optional(),
  imageUrl: z
    .custom<File | undefined | string>(
      (file) => {
        if (!file) {
          return true;
        }
        if (typeof file != "string") {
          return (file as File).type.startsWith("image/");
        } else {
          return true;
        }
      },
      {
        error: "Invalid image type",
      },
    )
    .optional(),
});

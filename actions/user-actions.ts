"use server";

import api, { onError } from "@/lib/api";
import { getAuthToken } from "@/lib/api/authorization";
import { updateMeSchema } from "@/lib/schemas/updateMeSchema";
import { AxiosResponse } from "axios";
import { revalidatePath } from "next/cache";
import z from "zod";

export async function updateMe(data: FormData) {
  try {
    const token = await getAuthToken();

    const res: AxiosResponse<{
      status: string;
      data: {
        user: User;
      };
    }> = await api.patch(`/user/updateMe`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status == 200) {
      revalidatePath("/account", "layout");
      return {
        status: "success",
        data: res.data.data.user,
      };
    }
  } catch (err) {
    return onError(err);
  }
}

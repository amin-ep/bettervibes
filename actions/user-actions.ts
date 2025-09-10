"use server";

import api, { onError } from "@/lib/api";
import { getAuthToken } from "@/lib/api/authorization";
import { changePasswordSchema } from "@/lib/schemas/changePasswordSchema";
import { editEmailSchema } from "@/lib/schemas/editEmailSchema";
import { updateMeSchema } from "@/lib/schemas/updateMeSchema";
import { verifyEmailSchema } from "@/lib/schemas/verifyEmailSchema";
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

export async function changePassword(
  data: z.infer<typeof changePasswordSchema>,
) {
  try {
    const authToken = await getAuthToken();
    const res: AxiosResponse<{ status: string; data: { user: User } }> =
      await api.patch("/user/updatePassword", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });

    if (res.status == 200) {
      return {
        status: "success",
        message: "Your password updated successfully!",
      };
    }
  } catch (err) {
    return onError(err);
  }
}

export async function editEmail(data: z.infer<typeof editEmailSchema>) {
  try {
    const authToken = await getAuthToken();
    console.log(data);
    const res: AxiosResponse<{ status: string; message: string }> =
      await api.post("/user/updateEmail", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });

    if (res.status == 200) {
      return {
        status: "success",
        message: res.data.message,
      };
    }
  } catch (err) {
    return onError(err);
  }
}

export async function verifyEditEmail(data: z.infer<typeof verifyEmailSchema>) {
  try {
    const authToken = await getAuthToken();
    const res: AxiosResponse<{ status: string; message: string }> =
      await api.patch("/user/updateEmailVerify", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });

    if (res.status == 200) {
      return {
        status: "success",
        message: res.data.message,
      };
    }
  } catch (err) {
    return onError(err);
  }
}

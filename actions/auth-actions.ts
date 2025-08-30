"use server";

import api, { onError } from "@/lib/api";
import { AUTH_TOKEN_EXPIRES } from "@/lib/constants";
import { forgetPasswordSchema } from "@/lib/schemas/forgetPasswordSchema";
import { loginSchema } from "@/lib/schemas/loginSchema";
import { recoverPasswordSchema } from "@/lib/schemas/recoverPasswordSchema";
import { signupSchema } from "@/lib/schemas/signupSchema";
import { verifyEmailSchema } from "@/lib/schemas/verifyEmailSchema";
import { AxiosResponse } from "axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import z from "zod";

type LoginResponse = {
  status: string;
  data: {
    user: User;
  };
  token: string;
};

type SignupResponse = {
  status: string;
  message: string;
};

type ForgetPasswordResponse = {
  status: string;
  message: string;
};

type RecoverPasswordResponse = {
  status: string;
  message: string;
};

export async function login(data: z.infer<typeof loginSchema>) {
  try {
    const res: AxiosResponse<LoginResponse, ErrorResponse> = await api.post(
      "/auth/login",
      data,
    );
    console.log(res);
    if (res?.status == 200) {
      (await cookies()).set({
        name: process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string,
        value: res?.data?.token,
        expires: AUTH_TOKEN_EXPIRES,
      });
      return {
        status: "success",
        message: `Welcome ${res.data.data.user.firstName || res.data.data.user.username}`,
      };
    }
  } catch (err) {
    return onError(err);
  }
}

export async function signup(data: Partial<z.infer<typeof signupSchema>>) {
  try {
    delete data.passwordConfirm;
    const res: AxiosResponse<SignupResponse> = await api.post(
      "/auth/register",
      data,
    );
    const signupExpires = Date.now() + 0.5 * 60 * 60 * 1000;
    if (res.status == 201) {
      (await cookies()).set(
        process.env.NEXT_PUBLIC_SIGNUP_EMAIL as string,
        data.email as string,
        {
          expires: signupExpires,
        },
      );
      return {
        status: "success",
        message: res.data.message,
      };
    }
  } catch (err) {
    return onError(err);
  }
}

export async function verifyEmail(data: z.infer<typeof verifyEmailSchema>) {
  try {
    const signupEmail = (await cookies()).get(
      process.env.NEXT_PUBLIC_SIGNUP_EMAIL as string,
    )?.value;

    const verificationData = { ...data, email: signupEmail };
    const res = await api.post("/auth/verify", verificationData);

    if (res.status == 200) {
      (await cookies()).delete(process.env.NEXT_PUBLIC_SIGNUP_EMAIL as string);
      return {
        status: "success",
        message: "Hope to have better vibes here :)",
      };
    }
  } catch (err) {
    return onError(err);
  }
}

export async function forgetPassword(
  data: z.infer<typeof forgetPasswordSchema>,
) {
  try {
    const res: AxiosResponse<ForgetPasswordResponse> = await api.post(
      `/auth/forgetPassword`,
      data,
    );

    if (res.status == 200) {
      const expires = Date.now() + 0.5 * 60 * 60 * 1000;
      (await cookies()).set(
        process.env.FORGET_PASSWORD_EMAIL as string,
        data.email,
        {
          expires: expires,
        },
      );
      return res.data;
    }
  } catch (err) {
    return onError(err);
  }
}

export async function recoverPassword(
  data: z.infer<typeof recoverPasswordSchema>,
) {
  const recoverPasswordData = { password: data.password };
  try {
    const res: AxiosResponse<RecoverPasswordResponse> = await api.patch(
      `/auth/recoverPassword/${data.recoverId}`,
      recoverPasswordData,
    );

    if (res.status == 200) {
      (await cookies()).delete(process.env.FORGET_PASSWORD_EMAIL as string);
      return res.data;
    }
  } catch (err) {
    return onError(err);
  }
}

export async function logout() {
  (await cookies()).delete(process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string);
  revalidatePath("/");
  redirect("/");
}

"use server";

import api from "@/lib/api";
import { AUTH_TOKEN_EXPIRES } from "@/lib/constants";
import { AxiosError, AxiosResponse } from "axios";
import { cookies } from "next/headers";

type LoginResponse = {
  status: string;
  data: {
    user: User;
  };
  token: string;
};

export async function login(data: { email: string; password: string }) {
  try {
    const res: AxiosResponse<LoginResponse> = await api.post(
      "/auth/login",
      data,
    );
    if (res?.status == 200) {
      console.log(res.data.token);
      (await cookies()).set({
        name: process.env.NODE_PUBLIC_JWT_SECRET_KEY as string,
        value: res?.data?.token,
        expires: AUTH_TOKEN_EXPIRES,
      });
      return {
        status: "success",
        message: "Welcome back",
      };
    }
  } catch (err) {
    const error = err as AxiosError<ErrorResponse>;
    return {
      status: "fail",
      message: error.response?.data.message || "Something went wrong",
    };
  }
}

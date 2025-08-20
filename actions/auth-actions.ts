"use server";

import axiosClient from "@/lib/api/axiosClient";
import { AxiosError, AxiosResponse } from "axios";

type LoginResponse = {
  status: string;
  data: {
    user: User;
  };
  token: string;
};

export async function login(data: { email: string; password: string }) {
  try {
    const res: AxiosResponse<LoginResponse> = await axiosClient.post(
      "/auth/login",
      data,
    );
    return res.data;
  } catch (err) {
    const error = err as AxiosError<ErrorResponse>;
    return error.response?.data.message || "Something went wrong";
  }
}

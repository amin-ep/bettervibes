"use server";

import { cookies } from "next/headers";
import { AUTH_TOKEN_EXPIRES } from "../constants";

export async function saveAuthToken(token: string) {
  (await cookies()).set({
    name: process.env.NODE_PUBLIC_JWT_SECRET_KEY as string,
    value: token,
    expires: AUTH_TOKEN_EXPIRES,
  });
}

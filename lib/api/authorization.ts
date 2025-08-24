"use server";

import { cookies } from "next/headers";
import { AUTH_TOKEN_EXPIRES } from "../constants";

export async function saveAuthToken(token: string) {
  (await cookies()).set({
    name: process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string,
    value: token,
    expires: AUTH_TOKEN_EXPIRES,
  });
}

export async function getAuthToken() {
  const cookiesStore = await cookies();
  const token = await cookiesStore.get(
    process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string,
  )?.value;
  return token ?? null;
}

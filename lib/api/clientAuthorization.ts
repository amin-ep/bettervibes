"use client";
import Cookies from "js-cookie";

export function getClientAuthToken() {
  const token = Cookies.get(process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string);
  return token ?? null;
}

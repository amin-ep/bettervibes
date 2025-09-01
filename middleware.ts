import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const authToken = request.cookies.get(
    process.env.NEXT_PUBLIC_JWT_SECRET_KEY ?? "",
  )?.value;

  const path = request.nextUrl.pathname;

  const publicRouts = [
    "/",
    "/signup",
    "/login",
    "/forget-password",
    "/recover-password",
    "/verify",
  ];

  if (publicRouts.some((route) => path.startsWith(route))) {
    return NextResponse.next();
  }

  if (!authToken) {
    return NextResponse.redirect(new URL("/", request.url));
  } else {
    return NextResponse.next();
  }
}

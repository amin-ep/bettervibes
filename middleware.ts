import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const authToken = request.cookies.get(
    process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string,
  )?.value;

  const path = request.nextUrl.pathname;

  const authRoutes = [
    "/signup",
    "/login",
    "/forget-password",
    "/recover-password",
    "/verify",
  ];

  // if (!authRoutes.some((route) => path.startsWith(route)) && !authToken) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // return NextResponse.next();
}

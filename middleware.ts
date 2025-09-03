import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const authToken = request.cookies.get(
    process.env.NEXT_PUBLIC_JWT_SECRET_KEY ?? "",
  )?.value;

  const path = request.nextUrl.pathname;

  const loggedOutRoutes = [
    "/signup",
    "/login",
    "/forget-password",
    "/recover-password",
    "/verify",
  ];

  function isLoggedOutRoutes() {
    return (
      loggedOutRoutes.some((route) => path.startsWith(route)) || path === "/"
    );
  }

  if (!authToken && isLoggedOutRoutes()) {
    return NextResponse.next();
  } else if (authToken) {
    if (isLoggedOutRoutes()) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
    return NextResponse.next();
  }
}

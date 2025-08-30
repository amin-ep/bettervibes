import LogoLink from "@/components/ui/LogoLink";
import Link from "next/link";
import React from "react";

export default function LoggedOutHeader() {
  return (
    <header className="flex items-center justify-between">
      <LogoLink variation="horizontal" />
      <nav className="flex items-center gap-2">
        {/* <Link
          href="/auth"
          className="btn btn-primary !px-2 text-xs md:!px-6 md:text-sm"
        >
          Signin | Signup
        </Link> */}
        <Link href="/login" className="btn btn-ghost">
          Login
        </Link>
        <Link href="/signup" className="btn btn-primary">
          Signup
        </Link>
      </nav>
    </header>
  );
}

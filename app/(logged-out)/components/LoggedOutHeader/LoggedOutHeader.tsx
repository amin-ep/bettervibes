import LogoLink from "@/components/ui/LogoLink";
import Link from "next/link";
import React from "react";

export default function LoggedOutHeader() {
  return (
    <header className="flex items-center justify-between">
      <LogoLink variation="horizontal" />
      <nav className="flex items-center gap-2">
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

import LogoLink from "@/components/ui/LogoLink";
import Link from "next/link";
import React from "react";

export default function LoggedOutHeader() {
  return (
    <header className="flex items-center justify-between">
      <LogoLink variation="horizontal" />
      <nav>
        <Link
          href="/auth"
          className="btn btn-primary !px-2 text-xs md:!px-6 md:text-sm"
        >
          Signin | Signup
        </Link>
      </nav>
    </header>
  );
}

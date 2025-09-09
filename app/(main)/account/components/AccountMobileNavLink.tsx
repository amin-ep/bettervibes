"use client";

import MotionLink from "@/components/motions/MotionLink";
import clsx from "clsx";
import { HTMLMotionProps } from "framer-motion";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes } from "react";

export default function AccountMobileNavLink({
  href,
  children,
  ...rest
}: {
  children: React.ReactNode;
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  HTMLMotionProps<"a">) {
  const path = usePathname();
  return (
    <MotionLink
      href={href}
      {...rest}
      className={clsx(
        "btn text-nowrap",
        path == href ? "btn-primary" : "btn-ghost",
      )}
    >
      {children}
    </MotionLink>
  );
}

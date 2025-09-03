"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import BaseLink from "next/link";
import { AnchorHTMLAttributes } from "react";

type Props = {
  children: React.ReactNode;
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  HTMLMotionProps<"a">;

function MotionLink({ children, href, ...rest }: Props) {
  const Link = motion(BaseLink);
  return (
    <Link
      href={href}
      {...rest}
      viewport={{
        once: true,
      }}
    >
      {children}
    </Link>
  );
}

export default MotionLink;

"use client";

import MotionLink from "@/components/motions/MotionLink";
import clsx from "clsx";
import { HTMLMotionProps } from "framer-motion";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes } from "react";

export default function AccountSidebarLink({
  href,
  iconString,
  children,
  ...rest
}: {
  children: React.ReactNode;
  href: string;
  iconString: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  HTMLMotionProps<"a">) {
  const path = usePathname();

  return (
    <MotionLink
      href={href}
      {...rest}
      className={clsx(
        "relative z-10 flex items-center gap-4 overflow-hidden rounded-full rounded-r-none px-4 pl-2 text-sm lg:text-base",
        path == href
          ? "after:translate-x-0"
          : "hover:text-primary after:translate-x-[100%] hover:after:translate-x-0",
        "after:bg-accent-dark after:absolute after:inset-0 after:z-5 after:w-full after:rounded-l-full after:transition",
      )}
    >
      <span
        className={clsx(
          "z-11 flex aspect-square w-8 items-center justify-center rounded-full",
          path == href && "bg-primary",
        )}
      >
        <i className={clsx(iconString, "text-2xl")}></i>
      </span>
      <span className="z-11 py-3">{children}</span>
    </MotionLink>
  );
}

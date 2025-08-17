"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

function MobileNavbarLink(props: Props) {
  const { children, className, href, ...rest } = props;
  const path = usePathname();
  return (
    <Link
      className={clsx(
        "flex items-center justify-start gap-2 rounded-md px-1 py-1.5 text-sm font-semibold",
        className,
        path === href
          ? "bg-primary cursor-default text-white"
          : "text-primary hover:bg-primary/10 bg-transparent hover:gap-4",
      )}
      href={href as string}
      {...rest}
    >
      {children}
    </Link>
  );
}

export default MobileNavbarLink;

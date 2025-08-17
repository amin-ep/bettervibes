"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

function NavLink(props: Props) {
  const { children, className, ...rest } = props;
  const path = usePathname();
  return (
    <Link
      className={clsx(
        className,
        "relative z-2 rounded-full bg-transparent px-6 py-1 text-sm transition",
        path == props.href
          ? "text-primary font-bold"
          : "text-white hover:text-neutral-300",
        "after:absolute after:inset-0 after:right-2 after:left-2 after:z-1 after:scale-0 after:rounded-full after:bg-white/10 after:transition after:duration-250 hover:after:scale-[1]",
      )}
      href={props.href as string}
      {...rest}
    >
      {children}
    </Link>
  );
}

export default NavLink;

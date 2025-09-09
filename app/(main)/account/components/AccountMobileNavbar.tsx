import { HTMLMotionProps } from "framer-motion";
import { AnchorHTMLAttributes } from "react";
import AccountMobileNavLink from "./AccountMobileNavLink";

const navItems: { href: string; title: string }[] = [
  {
    href: "/account",
    title: "Account",
  },
  {
    href: "/account/edit-profile",
    title: "Edit Your Info",
  },
  {
    href: "/account/change-password",
    title: "Change Password",
  },
  {
    href: "/account/edit-email",
    title: "Set New Email",
  },
];

export default function AccountMobileNavbar() {
  return (
    <nav className="flex w-full flex-nowrap items-center justify-start gap-2 overflow-x-auto py-2 md:hidden">
      {navItems.map((item) => (
        <AccountMobileNavLink href={item.href} key={item.href}>
          {item.title}
        </AccountMobileNavLink>
      ))}
    </nav>
  );
}

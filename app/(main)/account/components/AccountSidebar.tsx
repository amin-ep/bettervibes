import AccountSidebarLink from "./AccountSidebarLink";

const navItems: { iconString: string; href: string; title: string }[] = [
  {
    href: "/account",
    iconString: "icon-[hugeicons--identification]",
    title: "Account",
  },
  {
    href: "/account/edit-profile",
    iconString: "icon-[hugeicons--information-square]",
    title: "Edit Your Info",
  },
  {
    href: "/account/change-password",
    iconString: "icon-[hugeicons--security-password]",
    title: "Change Password",
  },
  {
    href: "/account/edit-email",
    iconString: "icon-[hugeicons--mail-at-sign-02]",
    title: "Set New Email",
  },
];

function AccountSidebar() {
  return (
    <aside className="bg-base-300 fixed hidden h-fit w-60 rounded-xl p-2 py-4 pr-0 md:block lg:w-80">
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <AccountSidebarLink
            href={item.href}
            key={item.href}
            iconString={item.iconString}
          >
            {item.title}
          </AccountSidebarLink>
        ))}
      </nav>
    </aside>
  );
}

export default AccountSidebar;

import clsx from "clsx";
import HeaderIconifyButton from "./HeaderIconifyButton";
import MobileNavbarLink from "./MobileNavbarLink";

export default function MobileNavbar() {
  const navItems: { iconClass: string; title: string; href: string }[] = [
    { iconClass: "icon-[mdi-light--home]", title: "Home", href: "/" },
    {
      iconClass: "icon-[mdi-light--music]",
      title: "Musics",
      href: "/musics",
    },
    {
      iconClass: "icon-[mdi--user]",
      title: "Contact",
      href: "/contact",
    },
    {
      iconClass: "icon-[mdi-light--information]",
      title: "About",
      href: "/about",
    },
    { iconClass: "icon-[mdi--disc]", title: "Albums", href: "/albums" },
  ];
  return (
    <>
      <div className="dropdown dropdown-end block md:hidden">
        <HeaderIconifyButton role="button" className="">
          <i className="icon-[mdi-light--menu] text-2xl"></i>
        </HeaderIconifyButton>
        <nav
          tabIndex={0}
          className="dropdown-content dropdown-se menu bg-base-100 rounded-box z-1 flex w-52 flex-col gap-1 p-2 shadow-sm"
        >
          {navItems.map((item, i) => {
            return (
              <MobileNavbarLink href={item.href} key={i}>
                <i className={clsx(item.iconClass, "text-3xl")}></i>
                <span>{item.title}</span>
              </MobileNavbarLink>
            );
          })}
        </nav>
      </div>
    </>
  );
}

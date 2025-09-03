import clsx from "clsx";
import HeaderIconifyButton from "./HeaderIconifyButton";
import MobileNavbarLink from "./MobileNavbarLink";

export default function MobileNavbar() {
  const navItems: { iconClass: string; title: string; href: string }[] = [
    { iconClass: "icon-[hugeicons--home-11]", title: "Home", href: "/" },
    {
      iconClass: "icon-[hugeicons--music-note-square-02]",
      title: "Musics",
      href: "/musics",
    },
    {
      iconClass: "icon-[hugeicons--contracts]",
      title: "Contact",
      href: "/contact",
    },
    {
      iconClass: "icon-[hugeicons--information-square]",
      title: "About",
      href: "/about",
    },
    {
      iconClass: "icon-[hugeicons--play-square]",
      title: "Albums",
      href: "/albums",
    },
  ];
  return (
    <>
      <div className="dropdown dropdown-end block md:hidden">
        <HeaderIconifyButton role="button" className="">
          <i className="icon-[mdi-light--menu] text-2xl"></i>
        </HeaderIconifyButton>
        <nav
          tabIndex={0}
          className="dropdown-content dropdown-se menu !bg-base-300 rounded-box z-1 flex w-52 flex-col gap-1 p-2 shadow-sm"
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

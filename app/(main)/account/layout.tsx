import MainContainer from "@/components/ui/MainContainer";
import AccountSidebar from "./components/AccountSidebar";
import AccountMobileNavbar from "./components/AccountMobileNavbar";
import clsx from "clsx";
export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainContainer
      className={clsx(
        "mx-auto grid max-w-312 grid-cols-1 gap-2 md:grid-cols-[auto_1fr] md:gap-4",
      )}
    >
      <div className="relative w-full md:w-60 lg:w-80">
        <AccountMobileNavbar />
        <AccountSidebar />
      </div>
      <div className="min-h-[calc(100vh-68px)]">{children}</div>
    </MainContainer>
  );
}

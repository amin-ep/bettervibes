import MainHeader from "../app/(main)/components/MainHeader/MainHeader";
import HeaderActions from "../app/(main)/components/MainHeader/HeaderActions";
import Navbar from "../app/(main)/components/MainHeader/Navbar";
import LogoLink from "../components/ui/LogoLink";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainHeader>
        <LogoLink variation="horizontal" />
        <Navbar />
        <HeaderActions />
      </MainHeader>
      <main>{children}</main>
    </>
  );
}

import Header from "../header/Header";
import HeaderActions from "../header/HeaderActions";
import Navbar from "../header/Navbar";
import LogoLink from "../ui/LogoLink";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header>
        <LogoLink variation="horizontal" />
        <Navbar />
        <HeaderActions />
      </Header>
      <main>{children}</main>
    </>
  );
}

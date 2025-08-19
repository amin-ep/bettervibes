import Header from "../components/header/Header";
import HeaderActions from "../components/header/HeaderActions";
import Navbar from "../components/header/Navbar";
import LogoLink from "../components/ui/LogoLink";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

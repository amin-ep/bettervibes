import LogoLink from "@/components/ui/LogoLink";
import HeaderActions from "./components/MainHeader/HeaderActions";
import MainHeader from "./components/MainHeader/MainHeader";
import Navbar from "./components/MainHeader/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

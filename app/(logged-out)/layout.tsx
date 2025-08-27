import React from "react";
import LoggedOutHeader from "./components/LoggedOutHeader/LoggedOutHeader";
import Container from "@/components/ui/Container";

export default function LoggedOutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container size="large">
      <LoggedOutHeader />
      <main>{children}</main>
    </Container>
  );
}

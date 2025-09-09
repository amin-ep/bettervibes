"use client";

export default function MainHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header className="fixed top-0 right-0 left-0 z-100 grid h-17 grid-cols-[auto_1fr] px-0 backdrop-blur-lg sm:px-4 md:grid-cols-3 md:px-8 lg:px-12 xl:px-16">
      {children}
    </header>
  );
}

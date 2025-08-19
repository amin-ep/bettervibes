"use client";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="grid grid-cols-[auto_1fr] px-0 sm:px-4 md:grid-cols-3 md:px-8 lg:px-12 xl:px-16">
      {children}
    </header>
  );
}

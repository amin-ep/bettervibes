import React from "react";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="from-primary to-error-content flex min-h-screen items-center justify-center bg-gradient-to-br py-10">
      <div className="rounded-xl bg-white p-2 md:p-4 lg:p-6 xl:p-8">
        {children}
      </div>
    </main>
  );
}

import React from "react";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";

export default function page() {
  return (
    <div className="flex min-h-screen items-center justify-center py-10">
      <div className="container mx-auto grid max-w-240 grid-cols-1 gap-4 rounded-xl px-2 lg:grid-cols-2 lg:gap-0">
        <div className="flex items-center justify-center rounded-xl bg-white py-4 md:py-8 lg:rounded-l-xl lg:rounded-r-none">
          <SignupForm />
        </div>
        <div className="from-primary to-error-content flex items-center justify-center rounded-xl bg-gradient-to-br py-4 md:py-8 lg:rounded-l-none lg:rounded-r-xl">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

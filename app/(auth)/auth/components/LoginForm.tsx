"use client";

import FormLayout from "@/app/components/ui/FormLayout";
import Input from "@/app/components/ui/Input";
import { loginSchema } from "@/app/lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    register,
    formState: { errors, defaultValues },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: typeof defaultValues) => {
    console.log(data);
  };
  return (
    <FormLayout
      onSubmit={handleSubmit(onSubmit)}
      className="h-full justify-between"
    >
      <FormLayout.Header className="mb-2 md:mb-4 lg:mb-6">
        <FormLayout.Logo position="center" color="white" />
        <FormLayout.Heading className="text-center text-white">
          Login Into Your Account
        </FormLayout.Heading>
      </FormLayout.Header>
      <div className="flex flex-col items-center gap-2 md:gap-3">
        <FormLayout.Control
          errorMessageColor="white"
          errorMessage={errors.email?.message}
        >
          <Input
            {...register("email")}
            iconClass="icon-[hugeicons--at]"
            type="email"
            placeholder="Email"
          />
        </FormLayout.Control>
        <FormLayout.Control
          errorMessageColor="white"
          errorMessage={errors.password?.message}
        >
          <Input
            {...register("password")}
            iconClass="icon-[hugeicons--lock-password]"
            type="password"
            placeholder="Password"
          />
        </FormLayout.Control>
        <Link
          href="/forget"
          className="btn btn-secondary hover:text-secondary hover:bg- w-full hover:bg-white"
        >
          Forget Password
        </Link>
        <FormLayout.Submit className="text-primary bg-white">
          Log In
        </FormLayout.Submit>
      </div>
    </FormLayout>
  );
}

export default LoginForm;

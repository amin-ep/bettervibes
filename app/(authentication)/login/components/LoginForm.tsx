"use client";

import { login } from "@/actions/auth-actions";
import FormLayout from "@/components/ui/FormLayout";
import Input from "@/components/ui/Input";
import { loginSchema } from "@/lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

function LoginForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    const res = await login(data);
    if (res?.status == "fail") {
      toast.error(res.message);
    } else {
      router.push("/");
    }
  };
  return (
    <FormLayout
      onSubmit={handleSubmit(onSubmit)}
      className="h-full justify-between"
    >
      <FormLayout.Header className="mb-2 md:mb-4 lg:mb-6">
        <FormLayout.Logo position="center" color="primary" />
        <FormLayout.Heading className="text-center">
          Login Into Your Account
        </FormLayout.Heading>
      </FormLayout.Header>
      <div className="flex flex-col items-center gap-2 md:gap-3">
        <FormLayout.Control errorMessage={errors.email?.message}>
          <Input
            {...register("email")}
            iconClass="icon-[hugeicons--at]"
            type="email"
            placeholder="Email"
          />
        </FormLayout.Control>
        <FormLayout.Control errorMessage={errors.password?.message}>
          <Input
            {...register("password")}
            iconClass="icon-[hugeicons--lock-password]"
            type="password"
            placeholder="Password"
          />
        </FormLayout.Control>
        <FormLayout.LinkDescription
          href="/forget"
          message="Forget your password?"
        >
          click
        </FormLayout.LinkDescription>
        <FormLayout.Submit disabled={isSubmitting}>Log In</FormLayout.Submit>
      </div>
    </FormLayout>
  );
}

export default LoginForm;

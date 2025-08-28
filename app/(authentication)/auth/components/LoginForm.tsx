"use client";

import FormLayout from "@/components/ui/FormLayout";
import Input from "@/components/ui/Input";
import { login } from "@/actions/auth-actions";
import { loginSchema } from "@/lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function LoginForm() {
  // const [isPending, startTransition] = useTransition();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    // startTransition(async () => {
    const res = await login(data);
    if (res?.status == "fail") {
      toast.error(res.message);
    } else {
      router.push("/");
    }
    // });
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
        <Link
          href="/forget"
          className="btn btn-secondary hover:text-secondary hover:bg- w-full hover:bg-white"
        >
          Forget Password
        </Link>
        <FormLayout.Submit
          disabled={isSubmitting}
          className="text-primary bg-white"
        >
          Log In
        </FormLayout.Submit>
      </div>
    </FormLayout>
  );
}

export default LoginForm;

"use client";

import { forgetPassword } from "@/actions/auth-actions";
import FormLayout from "@/components/ui/FormLayout";
import { forgetPasswordSchema } from "@/lib/schemas/forgetPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import z from "zod";

export default function ForgetPasswordForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(forgetPasswordSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof forgetPasswordSchema>) => {
    const res = await forgetPassword(data);
    if (res?.status == "success") {
      toast.success(res.message);
      router.push("/forget-password/sent");
    } else {
      toast.error(res?.message);
    }
  };
  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <FormLayout.Header className="text-center">
        <FormLayout.Logo imageVariation="vertical" />
        <FormLayout.Heading>Forget Password</FormLayout.Heading>
        <FormLayout.Text>
          Input Your Email address. we will send you a verification link
        </FormLayout.Text>
      </FormLayout.Header>
      <FormLayout.Control
        labelTitle="Email address"
        htmlFor="forget-password-email"
        errorMessage={errors.email?.message}
      >
        <FormLayout.Input
          {...register("email")}
          id="forget-password-email"
          type="email"
          placeholder="example@email.io"
        />
      </FormLayout.Control>
      <FormLayout.Submit disabled={isSubmitting}>
        Send Me Code
      </FormLayout.Submit>
    </FormLayout>
  );
}

"use client";

import FormLayout from "@/components/ui/FormLayout";
import { forgetPasswordSchema } from "@/lib/schemas/forgetPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

export default function ForgetPasswordForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(forgetPasswordSchema),
  });

  const onSubmit = (data: z.infer<typeof forgetPasswordSchema>) => {
    console.log(data);
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
      <FormLayout.Submit>Send Me Code</FormLayout.Submit>
    </FormLayout>
  );
}

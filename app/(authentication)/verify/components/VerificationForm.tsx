"use client";

import { verifyEmail } from "@/actions/auth-actions";
import FormLayout from "@/components/ui/FormLayout";
import Input from "@/components/ui/Input";
import { verifyEmailSchema } from "@/lib/schemas/verifyEmailSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

function VerificationForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(verifyEmailSchema),
  });

  async function onSubmit(data: z.infer<typeof verifyEmailSchema>) {
    const res = await verifyEmail(data);
    if (res?.status === "success") {
      toast.info(res.message);
    } else {
      toast.error(res?.message);
    }
  }
  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <FormLayout.Header>
        <FormLayout.Logo position="center" imageVariation="horizontal" />
        <FormLayout.Heading>Verify Your Email</FormLayout.Heading>
      </FormLayout.Header>
      <FormLayout.Control
        errorMessageColor="error"
        errorMessage={errors.verificationCode?.message}
        labelTitle="Code"
        htmlFor="email-verification-input"
      >
        <Input
          type="number"
          placeholder="123456"
          id="email-verification-input"
          {...register("verificationCode")}
        />
      </FormLayout.Control>
      <FormLayout.Submit disabled={isSubmitting}>Verify</FormLayout.Submit>
    </FormLayout>
  );
}

export default VerificationForm;

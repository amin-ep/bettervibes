"use client";

import FormLayout from "@/components/ui/FormLayout";
import { recoverPasswordSchema } from "@/lib/schemas/recoverPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function RecoverPasswordForm() {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(recoverPasswordSchema),
  });
  return (
    <FormLayout>
      <FormLayout.Header className="text-center">
        <FormLayout.Logo
          color="primary"
          position="center"
          imageVariation="iconic"
        />
        <FormLayout.Heading>Recover Your Password</FormLayout.Heading>
        <FormLayout.Text>Input your new password</FormLayout.Text>
      </FormLayout.Header>
      <FormLayout.Control errorMessage={errors.password?.message}>
        <FormLayout.Input
          {...register("password")}
          iconClass="icon-[hugeicons--lock-password]"
          type="password"
          placeholder="New password"
        />
      </FormLayout.Control>
      <FormLayout.Control errorMessage={errors.passwordConfirm?.message}>
        <FormLayout.Input
          {...register("passwordConfirm")}
          iconClass="icon-[hugeicons--password-validation]"
          type="password"
          placeholder="Confirm your new password"
        />
      </FormLayout.Control>
      <FormLayout.Submit>Submit</FormLayout.Submit>
    </FormLayout>
  );
}

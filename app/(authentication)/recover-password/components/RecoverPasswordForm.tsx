"use client";

import { recoverPassword } from "@/actions/auth-actions";
import FormLayout from "@/components/ui/FormLayout";
import { recoverPasswordSchema } from "@/lib/schemas/recoverPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import z from "zod";

export default function RecoverPasswordForm({
  recoverId,
}: {
  recoverId: string;
}) {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(recoverPasswordSchema),
    defaultValues: {
      recoverId: recoverId,
    },
  });

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof recoverPasswordSchema>) => {
    const res = await recoverPassword(data);
    if (res?.status == "success") {
      toast.success(res?.message);
      router.push("/login");
    } else {
      toast.error(res?.message);
    }
  };

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <FormLayout.Header className="text-center">
        <FormLayout.Logo
          color="primary"
          position="center"
          imageVariation="iconic"
        />
        <FormLayout.Heading>Recover Your Password</FormLayout.Heading>
        <FormLayout.Text>Input your new password</FormLayout.Text>
      </FormLayout.Header>
      <input type="hidden" {...register("recoverId")} />
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
      <FormLayout.Submit disabled={isSubmitting}>Submit</FormLayout.Submit>
    </FormLayout>
  );
}

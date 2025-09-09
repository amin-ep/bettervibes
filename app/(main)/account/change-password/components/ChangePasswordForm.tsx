"use client";

import FormLayout from "@/components/ui/FormLayout";
import AccountContentContainer from "../../components/AccountContentContainer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordSchema } from "@/lib/schemas/changePasswordSchema";
import { changePassword } from "@/actions/user-actions";
import z from "zod";
import { toast } from "react-toastify";

function ChangePasswordForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
  });

  async function onSubmit(data: z.infer<typeof changePasswordSchema>) {
    await changePassword(data).then((res) => {
      if (res?.status == "success") {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    });
  }
  return (
    <AccountContentContainer>
      <FormLayout onSubmit={handleSubmit(onSubmit)}>
        <FormLayout.Control
          className="text-white"
          labelTitle="Current Password"
        >
          <FormLayout.Input
            {...register("currentPassword")}
            type="password"
            className="!bg-base-100 !border-base-100 focus:!border-base-200"
          />
        </FormLayout.Control>
        <FormLayout.Control className="text-white" labelTitle="New Password">
          <FormLayout.Input
            {...register("password")}
            type="password"
            className="!bg-base-100 !border-base-100 focus:!border-base-200"
          />
        </FormLayout.Control>
        <div>
          <FormLayout.Submit
            isSubmitting={isSubmitting}
            disabled={isSubmitting}
          >
            Change Password
          </FormLayout.Submit>
        </div>
      </FormLayout>
    </AccountContentContainer>
  );
}

export default ChangePasswordForm;

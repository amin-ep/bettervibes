"use client";

import FormLayout from "@/components/ui/FormLayout";
import AccountContentContainer from "../../components/AccountContentContainer";
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editEmailSchema } from "@/lib/schemas/editEmailSchema";
import z from "zod";
import { useState } from "react";
import { verifyEmailSchema } from "@/lib/schemas/verifyEmailSchema";
import { editEmail, verifyEditEmail } from "@/actions/user-actions";
import { toast } from "react-toastify";

function EditEmailForm() {
  const [emailSent, setEmailSent] = useState(false);

  const formResolver = !emailSent ? editEmailSchema : verifyEmailSchema;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formResolver),
  });

  async function onSubmit(
    data: z.infer<typeof editEmailSchema> | z.infer<typeof verifyEmailSchema>,
  ) {
    if (!emailSent) {
      console.log(data);
      await editEmail(data as z.infer<typeof editEmailSchema>).then((res) => {
        if (res?.status == "success") {
          setEmailSent(true);
          toast.success(res.message);
        } else {
          toast.error(res?.message);
        }
      });
    } else {
      await verifyEditEmail(data as z.infer<typeof verifyEmailSchema>).then(
        (res) => {
          if (res?.status == "success") {
            reset();
            toast.success(res.message);
          } else {
            toast.error(res?.message);
          }
        },
      );
    }
  }
  return (
    <AccountContentContainer>
      <FormLayout onSubmit={handleSubmit(onSubmit)}>
        <FormLayout.Control
          errorMessage={
            (
              errors as FieldErrors<{
                email: string;
              }>
            ).email?.message
          }
          className="text-white"
          labelTitle="New Email"
        >
          <FormLayout.Input
            disabled={emailSent}
            type="email"
            {...register("candidateEmail")}
            className="!bg-base-100 !border-base-100 focus:!border-base-200"
          />
        </FormLayout.Control>
        {emailSent && (
          <FormLayout.Control
            errorMessage={
              (
                errors as FieldErrors<{
                  verificationCode: string;
                }>
              ).verificationCode?.message
            }
            labelTitle="Code"
            className="text-white"
          >
            <FormLayout.Input
              className="!bg-base-100 !border-base-100 focus:!border-base-200"
              type="number"
              {...register("verificationCode")}
            />
          </FormLayout.Control>
        )}
        <div>
          <FormLayout.Submit
            isSubmitting={isSubmitting}
            disabled={isSubmitting}
          >
            {emailSent ? "Verify" : "Send Email"}
          </FormLayout.Submit>
        </div>
      </FormLayout>
    </AccountContentContainer>
  );
}

export default EditEmailForm;

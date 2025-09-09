"use client";

import { updateMe } from "@/actions/user-actions";
import FormLayout from "@/components/ui/FormLayout";
import ImageDropzone from "@/components/ui/ImageDropzone";
import { updateMeSchema } from "@/lib/schemas/updateMeSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import z from "zod";
import AccountContentContainer from "../../components/AccountContentContainer";

export default function EditProfileForm({ userData }: { userData: User }) {
  const {
    register,
    formState: { errors, isSubmitting, isDirty },
    control,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(updateMeSchema),
    defaultValues: {
      firstName: userData.firstName,
      lastName: userData.lastName,
      username: userData.username,
      imageUrl: userData.imageUrl,
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  console.log(errors);

  async function onSubmit(data: z.infer<typeof updateMeSchema>) {
    if (!data.imageUrl || (data.imageUrl && typeof data.imageUrl == "string")) {
      delete data.imageUrl;
    }

    if (data.firstName?.length == 0) delete data.firstName;
    if (data.lastName?.length == 0) delete data.lastName;

    console.log(data);
    const formData = new FormData();

    Object.keys(data).map((key) => formData.append(key, data[key]));
    await updateMe(formData).then((res) => {
      if (res?.status === "success") {
        toast.success("Your profile updated successfully");
      } else {
        toast.error((res as ErrorResponse).message);
      }
    });
  }
  return (
    <AccountContentContainer>
      <FormLayout
        onSubmit={handleSubmit(onSubmit)}
        className="grid max-w-full grid-cols-1 gap-4 sm:grid-cols-[auto_1fr] sm:items-start"
      >
        <div className="flex items-center justify-center">
          <Controller
            control={control}
            name="imageUrl"
            render={({ field }) => (
              <ImageDropzone
                value={
                  userData.imageUrl
                    ? `${process.env.NEXT_PUBLIC_FILE_BASE_URL}/${userData.imageUrl}`
                    : null
                }
                onChange={field.onChange}
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-4">
          <FormLayout.Control
            className="text-white"
            htmlFor="update-me-username"
            labelTitle="Username"
            errorMessage={errors.username?.message}
          >
            <FormLayout.Input
              type="text"
              id="update-me-username"
              className="!bg-base-100 !border-base-100 focus:!border-base-200"
              {...register("username")}
            />
          </FormLayout.Control>
          <FormLayout.Control
            className="text-white"
            htmlFor="update-me-fname"
            labelTitle="First Name"
            errorMessage={errors.firstName?.message}
          >
            <FormLayout.Input
              className="!bg-base-100 !border-base-100 focus:!border-base-200"
              type="text"
              id="update-me-fname"
              {...register("firstName")}
            />
          </FormLayout.Control>
          <FormLayout.Control
            className="text-white"
            htmlFor="update-me-lname"
            labelTitle="Last Name"
            errorMessage={errors.lastName?.message}
          >
            <FormLayout.Input
              className="!bg-base-100 !border-base-100 focus:!border-base-200"
              type="text"
              id="update-me-lname"
              {...register("lastName")}
            />
          </FormLayout.Control>
          <FormLayout.Submit
            disabled={isSubmitting || !isDirty}
            isSubmitting={isSubmitting}
            className="w-40"
          >
            Update
          </FormLayout.Submit>
        </div>
      </FormLayout>
    </AccountContentContainer>
  );
}

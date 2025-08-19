"use client";

import FormLayout from "@/app/components/ui/FormLayout";
import Input from "@/app/components/ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/app/lib/schemas/signupSchema";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, defaultValues },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: typeof defaultValues) => {
    console.log(data);
  };

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <FormLayout.Header className="mb-2 md:mb-4 lg:mb-6">
        <FormLayout.Logo position="center" />
        <FormLayout.Heading>Create account</FormLayout.Heading>
      </FormLayout.Header>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:gap-3">
        <FormLayout.Control errorMessage={errors.firstName?.message}>
          <Input
            {...register("firstName")}
            iconClass="icon-[hugeicons--user-03]"
            type="text"
            placeholder="First Name"
          />
        </FormLayout.Control>
        <FormLayout.Control errorMessage={errors.lastName?.message}>
          <Input
            {...register("lastName")}
            iconClass="icon-[hugeicons--profile-02]"
            type="text"
            placeholder="Last Name"
          />
        </FormLayout.Control>
      </div>
      <FormLayout.Control errorMessage={errors.email?.message}>
        <Input
          {...register("email")}
          iconClass="icon-[hugeicons--at]"
          type="email"
          placeholder="Email"
        />
      </FormLayout.Control>
      <FormLayout.Control errorMessage={errors.username?.message}>
        <Input
          {...register("username")}
          iconClass="icon-[hugeicons--user-list]"
          type="text"
          placeholder="Username"
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
      <FormLayout.Control errorMessage={errors.passwordConfirm?.message}>
        <Input
          {...register("passwordConfirm")}
          iconClass="icon-[hugeicons--password-validation]"
          type="password"
          placeholder="Confirm Password"
        />
      </FormLayout.Control>
      <FormLayout.Submit>Sign Up</FormLayout.Submit>
    </FormLayout>
  );
}

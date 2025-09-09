"use client";

import { verifyEmail } from "@/actions/auth-actions";
import FormLayout from "@/components/ui/FormLayout";
import Input from "@/components/ui/Input";
import { verifyEmailSchema } from "@/lib/schemas/verifyEmailSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useTimer } from "@/hooks/useTimer";

function VerificationForm() {
  const [signupEmail, setSignupEmail] = useState("");

  const { time } = useTimer({ step: 60 });

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(verifyEmailSchema),
  });

  const router = useRouter();

  async function onSubmit(data: z.infer<typeof verifyEmailSchema>) {
    const res = await verifyEmail(data);
    if (res?.status == "success") {
      toast.info(res.message);
      router.push("/home");
    } else {
      toast.error(res?.message);
    }
  }

  useEffect(() => {
    const savedEmail = Cookies.get(
      process.env.NEXT_PUBLIC_SIGNUP_EMAIL as string,
    );
    if (!savedEmail) {
      toast.error("Code suspended!Try again");
      router.push("/auth");
    } else {
      setSignupEmail(savedEmail);
    }
  }, [router]);

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <FormLayout.Header>
        <FormLayout.Logo position="left" imageVariation="horizontal" />
        <FormLayout.Heading className="text-left">
          Verify Your Email
        </FormLayout.Heading>
        <FormLayout.Text className="text-justify">
          We have sent an email to{" "}
          <span className="font-semibold">{signupEmail}</span>
          <br />
          Please put the verification code here to verify your account
        </FormLayout.Text>
      </FormLayout.Header>
      <FormLayout.Control
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
      <FormLayout.Submit isSubmitting={isSubmitting} disabled={isSubmitting}>
        Verify
      </FormLayout.Submit>
      <div className="mt-1 text-xs md:mt-2 md:text-sm">
        {time == 0 ? (
          <button className="text-primary hover:text-secondary duration-0">
            Resend code
          </button>
        ) : (
          <span className="text-primary">
            Resend code at
            {"   "}
            <span className="font-bold">{time}</span>
          </span>
        )}
      </div>
    </FormLayout>
  );
}

export default VerificationForm;

"use client";

import FormLayout from "@/components/ui/FormLayout";
import SixDigitsInput from "@/components/ui/SixDigitsInputController";
import { useForm } from "react-hook-form";

function VerificationForm() {
  const { control } = useForm({});
  return (
    <FormLayout>
      <FormLayout.Header>
        <FormLayout.Logo position="center" imageVariation="horizontal" />
        <FormLayout.Heading>Verify Your Email</FormLayout.Heading>
      </FormLayout.Header>
      <SixDigitsInput control={control} name="verificationCode" />
      <FormLayout.Submit>Verify</FormLayout.Submit>
    </FormLayout>
  );
}

export default VerificationForm;

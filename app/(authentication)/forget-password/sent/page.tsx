import MotionHeading from "@/components/motions/MotionHeading";
import MotionParagraph from "@/components/motions/MotionParagraph";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default async function ForgetPasswordSentPage() {
  const cookieStore = await cookies();
  const forgetPasswordEmail = cookieStore.get(
    process.env.FORGET_PASSWORD_EMAIL as string,
  );

  if (!forgetPasswordEmail) {
    redirect("/forget-password");
  }
  return (
    <div className="text-center text-black">
      <MotionHeading
        className="!justify-center text-3xl text-stone-900 lg:text-4xl"
        tag="h1"
      >
        An email sent to {forgetPasswordEmail.value}
      </MotionHeading>
      <MotionParagraph className="mt-1 text-xs text-stone-900 md:mt-2 md:text-sm">
        We have sent an email to your email account. <br />
        Please checkout to start changing your password.
      </MotionParagraph>
      <Link href="/" className="btn btn-primary mt-4 text-white">
        Checkout Email
      </Link>
    </div>
  );
}

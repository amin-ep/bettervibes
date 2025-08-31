import React from "react";
import RecoverPasswordForm from "./components/RecoverPasswordForm";
import { checkRecoverId } from "@/lib/api/userApi";
import { redirect } from "next/navigation";

export default async function RecoverPage({
  params,
}: {
  params: Promise<{ recoverId: string }>;
}) {
  const { recoverId } = await params;
  const recoverIdResult = await checkRecoverId(recoverId);
  if (recoverIdResult && recoverIdResult?.status != "success") {
    redirect("/forget-password");
  } else {
    return <RecoverPasswordForm recoverId={recoverId} />;
  }
}

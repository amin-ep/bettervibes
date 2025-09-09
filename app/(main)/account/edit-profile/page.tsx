import React from "react";
import EditProfileForm from "./components/EditProfileForm";
import { cookies } from "next/headers";
import { getCurrentUser } from "@/lib/api/userApi";
import { redirect } from "next/navigation";

export default async function EditProfilePage() {
  const token = (await cookies()).get(
    process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string,
  )?.value;
  if (!token) {
    redirect("/login");
  }
  let userData: User | null = null;
  const user = await getCurrentUser(token);

  if (user) {
    if (user.status == "success") {
      userData = (user as SuccessResponse<User>).data;
    }
  }

  if (userData) return <EditProfileForm userData={userData} />;
}

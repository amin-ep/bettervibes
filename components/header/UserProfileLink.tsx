import { getAuthToken } from "@/lib/api/authorization";
import { getCurrentUser } from "@/lib/api/userApi";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

type SuccessResponse = {
  status: "success";
  data: User;
};

type ErrorResponse = {
  status: string;
  message?: string;
};

export default async function UserProfileLink() {
  let currentUser: User | null = null;
  const authToken = await getAuthToken();
  if (authToken) {
    const res: undefined | SuccessResponse | ErrorResponse =
      await getCurrentUser(authToken as string);
    if (res) {
      if ((res as SuccessResponse).status == "success") {
        currentUser = (res as SuccessResponse).data;
      } else {
        redirect("/auth");
      }
    }
  } else {
    redirect("/auth");
  }

  return (
    <Link
      href="/profile"
      className="relative flex items-center justify-between gap-2 overflow-hidden rounded-full border border-stone-200"
    >
      <span>
        {currentUser?.imageUrl ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_FILE_BASE_URL}/${currentUser.imageUrl}`}
            alt={currentUser.username}
            width={40}
            height={40}
            className="aspect-square w-10 rounded-full object-cover"
          />
        ) : (
          <span className="aspect-square items-center justify-center">
            {currentUser?.username.slice(0, 1)}
          </span>
        )}
      </span>
    </Link>
  );
}

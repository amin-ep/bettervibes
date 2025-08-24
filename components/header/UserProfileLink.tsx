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

  const userImageSrc = currentUser?.imageUrl
    ? `${process.env.NEXT_PUBLIC_FILE_BASE_URL}/${currentUser?.imageUrl}`
    : null;

  return (
    <div className="dropdown dropdown-hover dropdown-end dropdown-bottom flex items-center justify-between gap-2 rounded-full border border-stone-200">
      <span role="button">
        {userImageSrc ? (
          <Image
            src={userImageSrc}
            alt={currentUser?.username as string}
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

      <div className="dropdown-content flex min-w-80 flex-col justify-between rounded-xl bg-white p-3 text-stone-900 shadow-lg md:p-5">
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src={userImageSrc ?? "/images/user-avatar.gif"}
            width={70}
            alt={currentUser?.username as string}
            height={70}
            className="aspect-square rounded-full object-cover"
            unoptimized
          />
          <h2 className="!font-poppins text-xl font-bold">
            {currentUser?.username}
          </h2>
        </div>
        <menu className="menu w-full p-0">
          <li className="">
            <Link
              href="/account"
              className="hover:text-primary px-0 py-4 hover:pl-1"
            >
              Setting
            </Link>
          </li>
          <li className="border-t border-t-stone-300">
            <button className="hover:text-primary px-0 py-4 hover:pl-1">
              Sign Out
            </button>
          </li>
        </menu>
      </div>
    </div>
  );
}

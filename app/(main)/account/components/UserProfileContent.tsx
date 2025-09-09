import { getCurrentUser } from "@/lib/api/userApi";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AccountContentContainer from "./AccountContentContainer";
import Image from "next/image";
import { fadeDown } from "@/lib/animations/fade";

async function UserProfileContent() {
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

  console.log(userData);

  if (userData)
    return (
      <AccountContentContainer
        variants={fadeDown}
        className="grid grid-cols-1 items-center gap-2 sm:grid-cols-[auto_1fr] md:gap-4"
      >
        <div className="flex justify-center">
          <Image
            src={
              userData.imageUrl
                ? `${process.env.NEXT_PUBLIC_FILE_BASE_URL}/${userData.imageUrl}`
                : "/images/user-avatar.gif"
            }
            alt={userData.username}
            width={180}
            height={180}
            className="aspect-square w-40 rounded-full"
            unoptimized
          />
        </div>
        <div className="flex flex-col gap-1 md:gap-3">
          <Row label="First Name" value={userData?.firstName ?? "-"} />
          <Row label="Last Name" value={userData?.lastName ?? "-"} />
          <Row label="Email" value={userData.email} />
          <Row label="Username" value={userData.username} />
          <Row label="Join Since" value="12 Aug 2020" />
        </div>
      </AccountContentContainer>
    );
}

function Row({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm md:text-base">
      <p className="font-semibold">{label}: </p>
      <p>{value}</p>
    </div>
  );
}

export default UserProfileContent;

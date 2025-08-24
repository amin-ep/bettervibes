import { getAuthToken } from "@/lib/api/authorization";
import AuthLinks from "./AuthLinks";
import HeaderIconifyLinkButton from "./HeaderIconifyButton";
import MobileNavbar from "./MobileNavbar";
import UserProfileLink from "./UserProfileLink";

async function HeaderActions() {
  const isLoggedIn = await getAuthToken();

  return (
    <div className="flex w-full items-center justify-end gap-2">
      <HeaderIconifyLinkButton
        tooltipOption={{
          enabled: true,
          title: "Search",
        }}
      >
        <i className="icon-[mdi--magnify] text-2xl"></i>
      </HeaderIconifyLinkButton>
      <MobileNavbar />
      {isLoggedIn ? <UserProfileLink /> : <AuthLinks />}
    </div>
  );
}

export default HeaderActions;

import AuthLinks from "./AuthLinks";
import HeaderIconifyLinkButton from "./HeaderIconifyButton";
import MobileNavbar from "./MobileNavbar";

function HeaderActions() {
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
      <AuthLinks />
    </div>
  );
}

export default HeaderActions;

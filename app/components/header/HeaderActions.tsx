import HeaderIconifyButton from "./HeaderIconifyButton";
import MobileNavbar from "./MobileNavbar";

function HeaderActions() {
  return (
    <div className="flex items-center justify-end">
      <HeaderIconifyButton>
        <i className="icon-[mdi--magnify] text-2xl"></i>
      </HeaderIconifyButton>
      <MobileNavbar />
    </div>
  );
}

export default HeaderActions;

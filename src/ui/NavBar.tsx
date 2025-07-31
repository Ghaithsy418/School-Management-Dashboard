import { useUser } from "@/slices/userSlice";
import Avatar from "./Avatar";
import NotificationButton from "./NotificationButton";
import LanguageButton from "./LanguageButton";

function NavBar() {
  const {
    user: { role },
  } = useUser();
  return (
    <div className="col-start-2 col-end-3 flex h-full w-full items-center justify-end gap-5 border-b-1 border-b-gray-300/30 bg-gray-100/20 px-8">
      <div
        className={`flex items-center justify-center gap-3 ${role !== "dean" ? "px-5 ltr:border-r-1 ltr:border-r-gray-300 rtl:border-l-1 rtl:border-l-gray-300" : ""}`}
      >
        <NotificationButton />
        <LanguageButton />
      </div>
      {role !== "dean" && <Avatar />}
    </div>
  );
}

export default NavBar;

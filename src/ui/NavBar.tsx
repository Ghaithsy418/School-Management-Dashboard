import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import NotificationButton from "./NotificationButton";
import ThemeButton from "./ThemeButton";

function NavBar() {
  return (
    <div className="col-start-2 col-end-3 flex h-full w-full items-center justify-end gap-5 border-b-1 border-b-gray-300/30 bg-gray-100/20 px-8">
      <div className="flex items-center justify-center gap-3 border-r-1 border-r-gray-300 px-5">
        <NotificationButton />
        <ThemeButton />
      </div>
      <Link
        to="/profile"
        className="transition-all duration-300 hover:text-indigo-700"
      >
        <Avatar />
      </Link>
    </div>
  );
}

export default NavBar;

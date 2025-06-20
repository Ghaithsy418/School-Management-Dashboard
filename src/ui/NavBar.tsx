import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import ThemeButton from "./ThemeButton";
import { HiUser } from "react-icons/hi2";

function NavBar() {
  return (
    <div className="col-start-2 col-end-3 flex h-full w-full items-center justify-end gap-5 border-b-1 border-b-indigo-200/20 bg-indigo-100/20 px-8">
      <Avatar />
      <ThemeButton />
      <Link to="/profile">
        <HiUser className="h-6 w-6 text-indigo-700" />
      </Link>
    </div>
  );
}

export default NavBar;

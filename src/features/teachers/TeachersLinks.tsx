import { HiOutlineHome } from "react-icons/hi2";
import { PiStudent } from "react-icons/pi";
import NavList from "../../ui/NavList";

function TeachersLinks() {
  return <NavList buttons={buttons} role="teachers" />;
}

const buttons = [
  { title: "Dashboard", icon: <HiOutlineHome className="h-7 w-7" /> },
  { title: "Students", icon: <PiStudent className="h-7 w-7" /> },
];
export default TeachersLinks;

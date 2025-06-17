import { GiTeacher } from "react-icons/gi";
import { PiHouseLineBold, PiStudent } from "react-icons/pi";
import NavList from "../../ui/NavList";
import { HiOutlineCog8Tooth } from "react-icons/hi2";

function SupervisorsLinks() {
  return <NavList buttons={buttons} role="supervisors" />;
}

const buttons = [
  { title: "Dashboard", icon: <PiHouseLineBold className="h-7 w-7" /> },
  { title: "Students", icon: <PiStudent className="h-7 w-7" /> },
  { title: "Teachers", icon: <GiTeacher className="h-7 w-7" /> },
  { title: "Settings", icon: <HiOutlineCog8Tooth className="h-7 w-7" /> },
];

export default SupervisorsLinks;

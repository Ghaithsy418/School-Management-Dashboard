import { HiMiniEllipsisVertical } from "react-icons/hi2";
import Menus from "../../ui/Menus";
import { CgProfile } from "react-icons/cg";
import { TbTrash } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";

function StudentsTableMenus() {
  const { role } = useUser();
  return (
    <Menus>
      <Menus.Menu>
        <Menus.Toggle id="studentMenu">
          <HiMiniEllipsisVertical className="h-9 w-9 cursor-pointer rounded-full p-2 transition-all duration-300 hover:bg-slate-300" />
        </Menus.Toggle>
        <Menus.List id="studentMenu">
          <Link to={`/${role}/student/100`}>
            <Menus.Button icon={<CgProfile className="h-5 w-5" />}>
              Profile
            </Menus.Button>
          </Link>
          <Menus.Button icon={<TbTrash className="h-5 w-5" />}>
            Delete
          </Menus.Button>
        </Menus.List>
      </Menus.Menu>
    </Menus>
  );
}

export default StudentsTableMenus;

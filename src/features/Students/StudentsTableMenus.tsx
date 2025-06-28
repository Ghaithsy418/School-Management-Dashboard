import { RootState } from "@/store";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import { TbTrash } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeleteWarning from "../../ui/DeleteWarning";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";

function StudentsTableMenus({
  name,
  user_id,
}: {
  name: string;
  user_id: number;
}) {
  const role = useSelector((state: RootState) => state.user.user.role);
  const [isHover, setIsHover] = useState(false);
  return (
    <Modal>
      <Menus>
        <Menus.Menu>
          <Menus.Toggle id={name}>
            <HiMiniEllipsisVertical className="h-9 w-9 cursor-pointer rounded-full p-2 transition-all duration-300 hover:bg-slate-300" />
          </Menus.Toggle>
          <Menus.List id={name}>
            <Link to={`/${role}/student/100`}>
              <Menus.Button icon={<CgProfile className="h-5 w-5" />}>
                Profile
              </Menus.Button>
            </Link>
            {role === "dean" && (
              <Modal.Open name="delete">
                <Menus.Button icon={<TbTrash className="h-5 w-5" />}>
                  Delete
                </Menus.Button>
              </Modal.Open>
            )}
          </Menus.List>
          {role === "dean" && (
            <Modal.Window
              name="delete"
              icon={
                <MdDeleteOutline
                  className={`${isHover ? "h-9 w-9 text-red-700" : "h-8 w-8"} transition-all duration-300`}
                />
              }
            >
              <DeleteWarning setIsHover={setIsHover} user_id={user_id} />
            </Modal.Window>
          )}
        </Menus.Menu>
      </Menus>
    </Modal>
  );
}

export default StudentsTableMenus;

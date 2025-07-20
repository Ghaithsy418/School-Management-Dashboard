import { RootState } from "@/store";
import { CalendarMinus, CalendarPlus } from "lucide-react";
import { CgProfile } from "react-icons/cg";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import { TbTrash } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import DeleteUser from "../dean/DeleteUser";
import { useIncreaseAbsence } from "../supervisors/attendanceAndAbsence/useIncreaseAbsence";
import { useDecreaseAbsence } from "../supervisors/attendanceAndAbsence/useDeacreseAbsence";
import toast from "react-hot-toast";

function StudentsTableMenus({
  name,
  user_id,
}: {
  name: string;
  user_id: number;
}) {
  const role = useSelector((state: RootState) => state.user.user.role);
  const { increaseAbsenceMutation } = useIncreaseAbsence();
  const { decreaseAbsenceMutation } = useDecreaseAbsence();

  function handleIncreaseAbsence() {
    const promise = increaseAbsenceMutation({ studentId: user_id });
    toast.promise(promise, {
      loading: "Is Increasing...",
      success: "Absence Increased Successfully!",
      error: (err: Error) => err.message,
    });
  }

  function handleDecreaseAbsence() {
    const promise = decreaseAbsenceMutation({ studentId: user_id });
    toast.promise(promise, {
      loading: "Is Increasing...",
      success: "Absence Increased Successfully!",
      error: (err: Error) => err.message,
    });
  }

  return (
    <Modal>
      <Menus>
        <Menus.Menu>
          <Menus.Toggle id={name}>
            <HiMiniEllipsisVertical className="h-9 w-9 cursor-pointer rounded-full p-2 transition-all duration-300 hover:bg-slate-300" />
          </Menus.Toggle>
          <Menus.Menu>
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
              {role === "supervisor" && (
                <Menus.Button
                  onClick={handleIncreaseAbsence}
                  icon={<CalendarPlus className="h-5 w-5" />}
                >
                  Increase Absence
                </Menus.Button>
              )}
              {role === "supervisor" && (
                <Menus.Button
                  onClick={handleDecreaseAbsence}
                  icon={<CalendarMinus className="h-5 w-5" />}
                >
                  Decrease Absence
                </Menus.Button>
              )}
            </Menus.List>
          </Menus.Menu>
          {role === "dean" && (
            <Modal.Window
              name="delete"
              icon={
                <MdDeleteOutline className="h-8 w-8 transition-all duration-300" />
              }
            >
              <DeleteUser role="student" user_id={user_id} name={name} />
            </Modal.Window>
          )}
        </Menus.Menu>
      </Menus>
    </Modal>
  );
}

export default StudentsTableMenus;

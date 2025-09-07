import { RootState } from "@/store";
import { CalendarMinus, CalendarPlus } from "lucide-react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { CgProfile } from "react-icons/cg";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import { TbTrash } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import DeleteUser from "../dean/DeleteUser";
import { useDecreaseAbsence } from "../supervisors/attendanceAndAbsence/useDeacreseAbsence";
import { useIncreaseAbsence } from "../supervisors/attendanceAndAbsence/useIncreaseAbsence";

function StudentsTableMenus({
  name,
  user_id,
  student_id,
}: {
  name: string;
  user_id: number;
  student_id: number;
}) {
  const { t } = useTranslation();
  const role = useSelector((state: RootState) => state.user.user.role);
  const { increaseAbsenceMutation } = useIncreaseAbsence();
  const { decreaseAbsenceMutation } = useDecreaseAbsence();

  function handleIncreaseAbsence() {
    const promise = decreaseAbsenceMutation({ studentId: student_id });
    toast.promise(promise, {
      loading: "Is Increasing...",
      success: "Absence Increased Successfully!",
      error: (err: Error) => err.message,
    });
  }

  function handleDecreaseAbsence() {
    const promise = increaseAbsenceMutation({ studentId: student_id });
    toast.promise(promise, {
      loading: "Is Decreasing...",
      success: "Absence Decreased Successfully!",
      error: (err: Error) => err.message,
    });
  }

  return (
    <Modal>
      <Menus>
        <Menus.Menu>
          <Menus.Toggle id={name}>
            <HiMiniEllipsisVertical className="h-9 w-9 cursor-pointer rounded-full p-2 transition-all duration-300 hover:bg-slate-300 hover:dark:bg-slate-800" />
          </Menus.Toggle>
          <Menus.Menu>
            <Menus.List id={name}>
              <Link to={`/${role}/students/${user_id}`}>
                <Menus.Button icon={<CgProfile className="h-5 w-5" />}>
                  {t("menuButtons.profile")}
                </Menus.Button>
              </Link>
              {role === "dean" && (
                <Modal.Open name="delete">
                  <Menus.Button icon={<TbTrash className="h-5 w-5" />}>
                    {t("menuButtons.delete")}
                  </Menus.Button>
                </Modal.Open>
              )}
              {role === "supervisor" && (
                <>
                  <Menus.Button
                    onClick={handleIncreaseAbsence}
                    icon={<CalendarPlus className="h-5 w-5" />}
                  >
                    {t("menuButtons.increaseAbsence")}
                  </Menus.Button>
                  <Menus.Button
                    onClick={handleDecreaseAbsence}
                    icon={<CalendarMinus className="h-5 w-5" />}
                  >
                    {t("menuButtons.decreaseAbsence")}
                  </Menus.Button>
                </>
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

import Modal from "@/ui/Modal";
import { TbLogout2 } from "react-icons/tb";
import LogoutForm from "./LogoutForm";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Logout() {
  const [isHover, setIsHover] = useState(false);
  const { t } = useTranslation();
  return (
    <Modal>
      <Modal.Open name="logout">
        <button className="flex cursor-pointer items-center gap-5 rounded-lg px-4 py-2 text-rose-500 transition-all duration-300 hover:bg-rose-200/50">
          <TbLogout2 className="h-7 w-7" /> {t("sidebar.logout")}
        </button>
      </Modal.Open>
      <Modal.Window
        name="logout"
        icon={
          <TbLogout2
            className={`${isHover ? "h-9 w-9 text-red-700" : "h-8 w-8"} transition-all duration-300`}
          />
        }
      >
        <LogoutForm setIsHover={setIsHover} />
      </Modal.Window>
    </Modal>
  );
}

export default Logout;

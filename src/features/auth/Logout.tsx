import Modal from "@/ui/Modal";
import { useTranslation } from "react-i18next";
import { TbLogout2 } from "react-icons/tb";
import LogoutForm from "./LogoutForm";

function Logout() {
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
        icon={<TbLogout2 className={`h-7 w-7 transition-all duration-300`} />}
      >
        <LogoutForm />
      </Modal.Window>
    </Modal>
  );
}

export default Logout;

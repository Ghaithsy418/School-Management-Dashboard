import Button from "@/ui/Button";
import Modal from "@/ui/Modal";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import CreateClassForm from "./CreateClassForm";
import { useTranslation } from "react-i18next";

function CreateNewClass() {
  const { t } = useTranslation("classes");

  return (
    <div className="col-start-2 col-end-3 row-start-2 row-end-3 w-[28rem] place-self-center">
      <div className="flex items-center justify-around rounded-md border-1 border-gray-500/50 px-4 py-3">
        <h3 className="font-semibold">{t("main.createClassMessage")}</h3>
        <Modal>
          <Modal.Open name="createClass">
            <Button>{t("main.createButton")}</Button>
          </Modal.Open>
          <Modal.Window
            name="createClass"
            icon={
              <MdOutlineAddCircleOutline
                className={`h-8 w-8 transition-all duration-300`}
              />
            }
          >
            <CreateClassForm />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default CreateNewClass;

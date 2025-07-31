import { changeUi, clearAll, useClassesUi } from "@/slices/classesUiSlice";
import Modal from "@/ui/Modal";
import { regularOpacityVariants } from "@/utils/variants";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useGetClasses } from "../useGetClasses";
import ChooseStudentToAssign from "./ChooseStudentToAssign";
import { useTranslation } from "react-i18next";

function AssignStudentToClass() {
  const { ui } = useClassesUi();

  return (
    <div className="col-start-2 col-end-3 row-start-3 row-end-4 w-[28rem] place-self-center">
      <div className="flex items-center justify-around rounded-md border-1 border-gray-500/50 px-4 py-4">
        {ui !== "chooseClass" && ui !== "chooseStudent" && <FirstUi />}
        {ui === "chooseClass" && <SecondUi />}
        {ui === "chooseStudent" && <ThirdUi />}
      </div>
    </div>
  );
}

function FirstUi() {
  const dispatch = useDispatch();
  const { classes, isGettingClasses } = useGetClasses();
  const { t } = useTranslation("classes");

  function handleClick() {
    dispatch(clearAll());
    dispatch(changeUi("chooseClass"));
  }

  return (
    <motion.h3
      variants={regularOpacityVariants}
      initial="hidden"
      animate="visible"
      className="text-lg font-semibold"
    >
      {t("main.assignStudentMessage1")}
      {"  "}
      <button
        disabled={!classes?.length || isGettingClasses}
        onClick={handleClick}
        className="cursor-pointer text-violet-600 underline transition-all duration-300 hover:text-violet-700 disabled:cursor-not-allowed"
      >
        {t("main.assign")}
      </button>{" "}
      {t("main.assignStudentMessage2")} <span className="text-2xl">🧑‍🎓</span>
    </motion.h3>
  );
}

function SecondUi() {
  const [, setSearchParams] = useSearchParams();
  const { t } = useTranslation("classes");
  const dispatch = useDispatch();

  function handleBack() {
    dispatch(clearAll());
    setSearchParams({});
  }

  return (
    <motion.h3
      variants={regularOpacityVariants}
      initial="hidden"
      animate="visible"
      className="text-lg font-semibold text-rose-600"
    >
      {t("main.assignStudentMessage3")}{" "}
      <button
        onClick={handleBack}
        className="cursor-pointer text-violet-600 underline transition-all duration-300 hover:text-violet-700 disabled:cursor-not-allowed"
      >
        {t("main.back")}
      </button>
    </motion.h3>
  );
}

function ThirdUi() {
  const { className } = useClassesUi();
  const { t } = useTranslation("classes");

  return (
    <Modal>
      <motion.h3
        variants={regularOpacityVariants}
        initial="hidden"
        animate="visible"
        className="font-semibold text-rose-600"
      >
        {t("main.class")} ({className}) {t("main.assignStudentMessage4")}
        {"  "}
        <Modal.Open name="assignStudent">
          <button className="cursor-pointer text-violet-600 underline transition-all duration-300 hover:text-violet-700 disabled:cursor-not-allowed">
            {t("main.student")}
          </button>
        </Modal.Open>
      </motion.h3>
      <Modal.Window mode="sheet" name="assignStudent">
        <ChooseStudentToAssign />
      </Modal.Window>
    </Modal>
  );
}

export default AssignStudentToClass;

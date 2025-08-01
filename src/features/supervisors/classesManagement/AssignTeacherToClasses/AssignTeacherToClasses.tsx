import { useGetClasses } from "../useGetClasses";
import { motion } from "framer-motion";
import { regularOpacityVariants } from "@/utils/variants";
import { useSearchParams } from "react-router-dom";
import Modal from "@/ui/Modal";
import ChooseTeacherToAssign from "./ChooseTeacherToAssign";
import { changeUi, clearAll, useClassesUi } from "@/slices/classesUiSlice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

function AssignTeacherToClasses() {
  const { ui } = useClassesUi();
  return (
    <div className="col-start-2 col-end-3 row-start-4 row-end-5 w-[28rem] place-self-center">
      <div className="flex items-center justify-around rounded-md border-1 border-gray-500/50 px-4 py-4">
        {ui !== "chooseClassForTeacher" && ui !== "chooseTeacher" && (
          <FirstUi />
        )}
        {ui === "chooseClassForTeacher" && <SecondUi />}
        {ui === "chooseTeacher" && <ThirdUi />}
      </div>
    </div>
  );
}

function FirstUi() {
  const { classes, isGettingClasses } = useGetClasses();
  const dispatch = useDispatch();
  const { t } = useTranslation("classes");

  function handleClick() {
    dispatch(clearAll());
    dispatch(changeUi("chooseClassForTeacher"));
  }

  return (
    <motion.h3
      variants={regularOpacityVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-center gap-1 text-lg font-semibold"
    >
      {t("main.assignTeacherMessage")}
      <button
        disabled={!classes?.length || isGettingClasses}
        onClick={handleClick}
        className="cursor-pointer text-violet-600 underline transition-all duration-300 hover:text-violet-700 disabled:cursor-not-allowed"
      >
        {t("main.teacher")}{" "}
      </button>{" "}
      {t("main.assignTeacherMessage2")} <span className="text-2xl">👨‍🏫</span>
    </motion.h3>
  );
}

function SecondUi() {
  const { t } = useTranslation("classes");
  const dispatch = useDispatch();
  const [, setSearchParams] = useSearchParams();

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
        {t("main.class")} ({className}) {t("main.assignStudentMessage4")}{" "}
        <Modal.Open name="assignStudent">
          <button className="cursor-pointer text-violet-600 underline transition-all duration-300 hover:text-violet-700 disabled:cursor-not-allowed">
            {t("main.teacher")}
          </button>
        </Modal.Open>
      </motion.h3>
      <Modal.Window mode="sheet" name="assignStudent">
        <ChooseTeacherToAssign />
      </Modal.Window>
    </Modal>
  );
}

export default AssignTeacherToClasses;

import { useClassesUi } from "@/context/ClassesUi";
import { useGetClasses } from "../useGetClasses";
import { motion } from "framer-motion";
import { regularOpacityVariants } from "@/utils/variants";
import { useSearchParams } from "react-router-dom";
import Modal from "@/ui/Modal";
import ChooseTeacherToAssign from "./ChooseTeacherToAssign";

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
  const { dispatch } = useClassesUi();

  function handleClick() {
    dispatch({ type: "resetAll", payload: "" });
    dispatch({ type: "changeUi", payload: "chooseClassForTeacher" });
  }

  return (
    <motion.h3
      variants={regularOpacityVariants}
      initial="hidden"
      animate="visible"
      className="text-lg font-semibold"
    >
      You can just assign a{" "}
      <button
        disabled={!classes?.length || isGettingClasses}
        onClick={handleClick}
        className="cursor-pointer text-violet-600 underline transition-all duration-300 hover:text-violet-700 disabled:cursor-not-allowed"
      >
        Teacher
      </button>{" "}
      to classes <span className="text-2xl">👨‍🏫</span>
    </motion.h3>
  );
}

function SecondUi() {
  const { dispatch } = useClassesUi();
  const [, setSearchParams] = useSearchParams();

  function handleBack() {
    dispatch({ type: "resetAll", payload: "" });
    setSearchParams({});
  }

  return (
    <motion.h3
      variants={regularOpacityVariants}
      initial="hidden"
      animate="visible"
      className="text-lg font-semibold text-rose-600"
    >
      Now Choose a Class or{" "}
      <button
        onClick={handleBack}
        className="cursor-pointer text-violet-600 underline transition-all duration-300 hover:text-violet-700 disabled:cursor-not-allowed"
      >
        Back
      </button>
    </motion.h3>
  );
}

function ThirdUi() {
  const { className } = useClassesUi();

  return (
    <Modal>
      <motion.h3
        variants={regularOpacityVariants}
        initial="hidden"
        animate="visible"
        className="font-semibold text-rose-600"
      >
        Class ({className}) has been selected now choose a{" "}
        <Modal.Open name="assignStudent">
          <button className="cursor-pointer text-violet-600 underline transition-all duration-300 hover:text-violet-700 disabled:cursor-not-allowed">
            Teacher
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

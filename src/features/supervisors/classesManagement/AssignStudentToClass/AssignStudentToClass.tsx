import { changeUi, clearAll, useClassesUi } from "@/slices/classesUiSlice";
import Modal from "@/ui/Modal";
import { regularOpacityVariants } from "@/utils/variants";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useGetClasses } from "../useGetClasses";
import ChooseStudentToAssign from "./ChooseStudentToAssign";

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
      Or let's{" "}
      <button
        disabled={!classes?.length || isGettingClasses}
        onClick={handleClick}
        className="cursor-pointer text-violet-600 underline transition-all duration-300 hover:text-violet-700 disabled:cursor-not-allowed"
      >
        Assign
      </button>{" "}
      a Student to a Class <span className="text-2xl">🧑‍🎓</span>
    </motion.h3>
  );
}

function SecondUi() {
  const [, setSearchParams] = useSearchParams();
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
            Student
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

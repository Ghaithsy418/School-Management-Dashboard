import { useClassesUi } from "@/context/ClassesUi";
import Checkbox from "@/ui/Checkbox";

function ChooseClass({
  className,
  classId,
}: {
  className: string;
  classId: number;
}) {
  const { className: choosenClassName, dispatch, ui } = useClassesUi();

  const isChecked = choosenClassName === className;

  function handleChange() {
    if (!isChecked) {
      dispatch({ type: "changeClassName", payload: className });
      dispatch({ type: "changeClassId", payload: classId });

      if (ui === "chooseClass")
        dispatch({ type: "changeUi", payload: "chooseStudent" });
      if (ui === "chooseClassForTeacher")
        dispatch({ type: "changeUi", payload: "chooseTeacher" });
    } else {
      dispatch({ type: "changeClassName", payload: "" });
      dispatch({ type: "changeClassId", payload: null });
      dispatch({
        type: "changeUi",
        payload: ui.includes("chooseStudent")
          ? "chooseClass"
          : "chooseClassForTeacher",
      });
    }
  }

  return <Checkbox isChecked={isChecked} handleChange={handleChange} />;
}

export default ChooseClass;

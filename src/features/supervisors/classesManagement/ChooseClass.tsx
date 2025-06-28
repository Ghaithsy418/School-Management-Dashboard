import {
  changeClassId,
  changeClassName,
  changeUi,
  useClassesUi,
} from "@/slices/classesUiSlice";
import Checkbox from "@/ui/Checkbox";
import { useDispatch } from "react-redux";

function ChooseClass({
  className,
  classId,
}: {
  className: string;
  classId: number;
}) {
  const dispatch = useDispatch();
  const { className: choosenClassName, ui } = useClassesUi();

  const isChecked = choosenClassName === className;

  function handleChange() {
    if (!isChecked) {
      dispatch(changeClassName(className));
      dispatch(changeClassId(classId));

      if (ui === "chooseClass") dispatch(changeUi("chooseStudent"));
      if (ui === "chooseClassForTeacher") dispatch(changeUi("chooseTeacher"));
    } else {
      dispatch(changeClassName(""));
      dispatch(changeClassId(0));
      dispatch(
        changeUi(
          ui.includes("chooseStudent")
            ? "chooseClass"
            : "chooseClassForTeacher",
        ),
      );
    }
  }

  return <Checkbox isChecked={isChecked} handleChange={handleChange} />;
}

export default ChooseClass;

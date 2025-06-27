import { useClassesUi } from "@/context/ClassesUi";
import Checkbox from "@/ui/Checkbox";
import { useEffect, useState } from "react";

function ChooseClass({
  className,
  classId,
}: {
  className: string;
  classId: number;
}) {
  const { className: choosenClassName, dispatch } = useClassesUi();
  const [isChecked, setIsChecked] = useState(choosenClassName === className);

  useEffect(
    function () {
      if (choosenClassName !== "" && choosenClassName !== className)
        setIsChecked(false);
    },
    [className, choosenClassName],
  );

  function handleChange() {
    setIsChecked((c) => !c);
    if (!isChecked) dispatch({ type: "changeUi", payload: "chooseStudent" });
    if (isChecked) dispatch({ type: "changeUi", payload: "chooseClass" });
    dispatch({ type: "changeClassName", payload: className });
    dispatch({ type: "changeClassId", payload: classId });
  }

  return <Checkbox isChecked={isChecked} handleChange={handleChange} />;
}

export default ChooseClass;

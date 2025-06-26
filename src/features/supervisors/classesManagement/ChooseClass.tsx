import { useClassesUi } from "@/context/ClassesUi";
import { useEffect, useState } from "react";

function ChooseClass({ className }: { className: string }) {
  const [isChecked, setIsChecked] = useState(false);
  const { className: choosenClassName, dispatch } = useClassesUi();

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
  }

  return (
    <div>
      <label className="custom-checkbox">
        <input
          onChange={handleChange}
          checked={isChecked}
          name="dummy"
          type="checkbox"
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

export default ChooseClass;

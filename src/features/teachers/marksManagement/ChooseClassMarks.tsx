import {
  setClassId,
  setClassName,
  useMarks,
} from "@/slices/MarksManagementSlice";
import ChooseTeacherClass from "@/ui/ChooseTeacherClass";
import { useDispatch } from "react-redux";

function ChooseClassMarks() {
  const { className } = useMarks();
  const dispatch = useDispatch();

  function defineClassName(value: string) {
    const splitedValue = value.split("_");
    dispatch(setClassId(Number(splitedValue?.[0])));
    dispatch(setClassName(splitedValue?.[1]));
  }

  return (
    <ChooseTeacherClass className={className} defineClass={defineClassName} />
  );
}

export default ChooseClassMarks;

import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import AbsenceList from "./AbsenceList";
import { clearAll } from "@/slices/supervisorAttendanceSlice";

function AbsenceListLayout() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(clearAll());
  }

  return (
    <div className="flex w-full flex-col items-start justify-center gap-8">
      <button onClick={handleClick}>
        <IoIosArrowRoundBack className="h-8 w-8 cursor-pointer transition-all duration-300 hover:text-indigo-600" />
      </button>
      <div className="w-full">
        <AbsenceList />
      </div>
    </div>
  );
}

export default AbsenceListLayout;

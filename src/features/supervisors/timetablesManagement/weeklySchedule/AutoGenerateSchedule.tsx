import { pushMultiValuesToSchedule } from "@/slices/weeklyScheduleSlice";
import { MdAutoFixHigh } from "react-icons/md";
import { useDispatch } from "react-redux";

function AutoGenerateSchedule() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(pushMultiValuesToSchedule(mockData))}
      className="flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-emerald-600 px-4 py-2 text-emerald-50 transition-colors duration-300 hover:bg-emerald-700"
    >
      <MdAutoFixHigh className="h-5 w-5" /> <span>Auto Generate Schedule</span>
    </button>
  );
}

const mockData = [
  { day: "sunday", session: 1, subject: "Physics" },
  { day: "sunday", session: 2, subject: "Physics" },
  { day: "sunday", session: 3, subject: "Physics" },
  { day: "sunday", session: 4, subject: "Physics" },
  { day: "sunday", session: 5, subject: "Physics" },
  { day: "sunday", session: 6, subject: "Physics" },
  { day: "sunday", session: 7, subject: "Physics" },
  { day: "monday", session: 1, subject: "Physics" },
  { day: "monday", session: 2, subject: "Physics" },
  { day: "monday", session: 3, subject: "Physics" },
  { day: "monday", session: 4, subject: "Physics" },
  { day: "monday", session: 5, subject: "Physics" },
  { day: "monday", session: 6, subject: "Physics" },
  { day: "monday", session: 7, subject: "Physics" },
  { day: "tuesday", session: 1, subject: "Physics" },
  { day: "tuesday", session: 2, subject: "Physics" },
  { day: "tuesday", session: 3, subject: "Physics" },
  { day: "tuesday", session: 4, subject: "Physics" },
  { day: "tuesday", session: 5, subject: "Physics" },
  { day: "tuesday", session: 6, subject: "Physics" },
  { day: "tuesday", session: 7, subject: "Physics" },
  { day: "wednesday", session: 1, subject: "Physics" },
  { day: "wednesday", session: 2, subject: "Physics" },
  { day: "wednesday", session: 3, subject: "Physics" },
  { day: "wednesday", session: 4, subject: "Physics" },
  { day: "wednesday", session: 5, subject: "Physics" },
  { day: "wednesday", session: 6, subject: "Physics" },
  { day: "wednesday", session: 7, subject: "Physics" },
  { day: "thursday", session: 1, subject: "Physics" },
  { day: "thursday", session: 2, subject: "Physics" },
  { day: "thursday", session: 3, subject: "Physics" },
  { day: "thursday", session: 4, subject: "Physics" },
  { day: "thursday", session: 5, subject: "Physics" },
  { day: "thursday", session: 6, subject: "Physics" },
  { day: "thursday", session: 7, subject: "Physics" },
];

export default AutoGenerateSchedule;

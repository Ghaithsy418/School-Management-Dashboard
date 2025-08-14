import { MdOutlineEditCalendar } from "react-icons/md";

function EditSchedule() {
  return (
    <button className="flex items-center space-x-2 rounded-xl bg-emerald-500 px-6 py-3 shadow-lg transition-all duration-200 hover:bg-emerald-600 hover:shadow-emerald-500/25 disabled:cursor-not-allowed">
      <MdOutlineEditCalendar className="h-5 w-5" />
      <span>Edit Schedule</span>
    </button>
  );
}

export default EditSchedule;

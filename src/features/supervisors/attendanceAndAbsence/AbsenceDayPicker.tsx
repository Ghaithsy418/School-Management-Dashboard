import {
  setDay,
  useSupervisorAttendance,
} from "@/slices/supervisorAttendanceSlice";
import { CalendarDays } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { useDispatch } from "react-redux";
import { format, parse } from "date-fns";

function AbsenceDayPicker() {
  const { day } = useSupervisorAttendance();
  const dispatch = useDispatch();

  const selectedDate = day ? parse(day, "yyyy-MM-dd", new Date()) : undefined;

  function handleSelect(value: Date | undefined) {
    let formatedValue: string = "";
    if (value) formatedValue = format(value, "yyyy-MM-dd");

    return dispatch(setDay(formatedValue));
  }

  return (
    <div className="space-y-3">
      <label className="flex items-center space-x-2 font-semibold text-slate-700">
        <CalendarDays className="h-4 w-4 text-indigo-600" />
        <span>Date</span>
      </label>
      <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
        <DayPicker
          mode="single"
          className="w-full"
          selected={selectedDate}
          onSelect={handleSelect}
          disabled={{ after: new Date() }}
          classNames={{
            months:
              "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 p-6",
            month: "space-y-4 w-full",
            caption: "flex justify-center pt-1 relative items-center mb-6",
            caption_label: "text-xl font-bold text-slate-800",
            nav: "space-x-1 flex items-center",
            nav_button:
              "h-10 w-10 bg-slate-50 hover:bg-slate-100 p-0 rounded-full transition-all duration-200 hover:shadow-md border border-slate-200",
            nav_button_previous: "absolute left-2",
            nav_button_next: "absolute right-2",
            table: "w-full border-collapse space-y-1",
            head_row: "flex w-full justify-between mb-4",
            head_cell:
              "text-slate-600 rounded-md w-12 font-semibold text-sm uppercase tracking-wide",
            row: "flex w-full mt-2 justify-between",
            cell: "h-12 w-12 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-indigo-50 first:[&:has([aria-selected])]:rounded-l-lg last:[&:has([aria-selected])]:rounded-r-lg focus-within:relative focus-within:z-20",
            day: "h-12 w-12 p-0 font-medium aria-selected:opacity-100 rounded-lg hover:bg-slate-100 transition-all duration-200 hover:shadow-sm border border-transparent hover:border-slate-200",
            day_selected:
              "bg-indigo-600 text-white hover:bg-indigo-700 focus:bg-indigo-600 font-bold shadow-md border-indigo-600",
            day_today:
              "bg-amber-100 text-amber-900 font-bold border-amber-200 shadow-sm",
            day_outside: "text-slate-300 opacity-50",
            day_disabled: "text-slate-300 opacity-30 cursor-not-allowed",
            day_range_middle:
              "aria-selected:bg-indigo-50 aria-selected:text-slate-900",
            day_hidden: "invisible",
          }}
        />
      </div>
    </div>
  );
}

export default AbsenceDayPicker;

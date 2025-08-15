import ScheduleHeader from "@/features/supervisors/timetablesManagement/weeklySchedule/ScheduleHeader";
import ScheduleSelections from "@/features/supervisors/timetablesManagement/weeklySchedule/ScheduleSelections";
import ScheduleStatus from "@/features/supervisors/timetablesManagement/weeklySchedule/ScheduleStatus";
import { useClassInfo } from "@/slices/weeklyScheduleSlice";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ScheduleFillCell from "./ScheduleFillCell";
import ScheduleGridCreate from "./ScheduleGridCreate";
import { useGetClassWeeklySchedule } from "./useGetClassWeeklySchedule";

export default function TimeTablesLayout() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { className } = useClassInfo();
  const [isMounted, setIsMounted] = useState(false);
  const { scheduleExists } = useGetClassWeeklySchedule(className);

  useEffect(
    function () {
      setIsMounted(true);
    },
    [setIsMounted],
  );

  return (
    <div
      ref={ref}
      className="w-full rounded-md bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      <div className="overflow-hidden rounded-t-2xl bg-white/80 shadow-xl backdrop-blur-sm">
        <ScheduleHeader description="Create and manage teaching schedules" />
        <ScheduleSelections />
        <div className="px-8 py-4">{className && <ScheduleStatus />}</div>
        <ScheduleGridCreate />
        {isMounted &&
          ref.current &&
          !scheduleExists &&
          createPortal(<ScheduleFillCell />, ref.current)}
      </div>
    </div>
  );
}

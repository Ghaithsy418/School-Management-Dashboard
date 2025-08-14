import { getClassWeeklySchedule } from "@/services/apiTimeTables";
import { pushMultiValuesToSchedule } from "@/slices/weeklyScheduleSlice";
import { ScheduleTypes } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface ClassScheduleTypes {
  schedule: ScheduleTypes[];
}

export const useGetClassWeeklySchedule = function (className: string) {
  const dispatch = useDispatch();
  const { data, isLoading: isGettingSchedule } = useQuery<ClassScheduleTypes>({
    queryKey: ["weeklySchedule", className],
    queryFn: () => getClassWeeklySchedule({ className }),
  });
  const scheduleExists =
    data?.schedule?.length === 0 || data?.schedule === null ? false : true;

  useEffect(
    function () {
      if (scheduleExists)
        dispatch(pushMultiValuesToSchedule(data?.schedule || []));
    },
    [scheduleExists, dispatch, data?.schedule],
  );
  console.log(data);
  return {
    weeklySchedule: data?.schedule,
    isGettingSchedule,
    scheduleExists,
  };
};

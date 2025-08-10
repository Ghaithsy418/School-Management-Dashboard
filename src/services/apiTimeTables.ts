import { ScheduleTypes } from "@/utils/types";
import { fetcher } from "./fetcher";

export async function CreateWeeklySchedule(body: {
  classId: number;
  schedule: ScheduleTypes[];
}) {
  return fetcher({ url: "/api/createWeeklySchedule", method: "PUT", body });
}

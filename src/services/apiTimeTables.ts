import { ScheduleTypes } from "@/utils/types";
import { fetcher } from "./fetcher";

export async function CreateWeeklySchedule(body: {
  classId: number;
  schedule: ScheduleTypes[];
}) {
  return fetcher({ url: "/api/createWeeklySchedule", method: "PUT", body });
}

export async function getTeachersAndSessions(body: { className: string }) {
  if (!body.className) return null;
  return fetcher({
    url: "/api/teachersAndTheirSessions",
    method: "POST",
    body,
  });
}

export async function getClassWeeklySchedule(body: { className: string }) {
  if (!body.className) return null;
  return fetcher({ url: "/api/getClassWeeklySchcedule", method: "POST", body });
}

export async function autoGenerateWeeklySchedule(body: { className: string }) {
  return fetcher({ url: "/api/generateWeeklySchedule", method: "POST", body });
}

export async function deleteWeeklySchedule(body: { className: string }) {
  if (!body.className) return null;
  return fetcher({ url: "/api/deleteWeeklySchecdule", method: "DELETE", body });
}

export async function getTeacherWeeklySchedule() {
  return fetcher({ url: "/api/getTeacherWeeklySchedule", method: "GET" });
}

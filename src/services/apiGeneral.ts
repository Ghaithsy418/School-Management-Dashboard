import { fetcher } from "./fetcher";

export async function deanStatistics() {
  return fetcher({ url: "/api/getSpecifiedUserNums", method: "GET" });
}

export async function teacherStatistics() {
  return fetcher({ url: "/api/getTeacherWorkData", method: "GET" });
}

export async function supervisorStatistics() {
  return fetcher({ url: "/api/checkStatsForSupervisor", method: "GET" });
}

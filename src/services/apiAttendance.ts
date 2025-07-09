import { fetcher } from "./fetcher";

export async function getTeacherClasses() {
  return fetcher({ url: "/api/getTeacherClasses", method: "GET" });
}

export async function submitDailyReports() {
  return fetcher({ url: "/api/submitDailyReports", method: "POST" });
}

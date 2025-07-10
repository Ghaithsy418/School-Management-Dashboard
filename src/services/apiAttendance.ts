import { fetcher } from "./fetcher";

export async function getTeacherClasses() {
  return fetcher({ url: "/api/getTeacherClasses", method: "GET" });
}

export async function submitDailyReports() {
  return fetcher({ url: "/api/submitDailyReports", method: "POST" });
}

export async function studentsAttendanceForm(body: { className: string }) {
  return fetcher({
    url: "/api/studentsAttendanceForm",
    method: "POST",
    body: { class: body.className },
  });
}

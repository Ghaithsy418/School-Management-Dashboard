import { fetcher } from "./fetcher";

export async function getTeacherClasses() {
  return fetcher({ url: "/api/getTeacherClasses", method: "GET" });
}

export async function submitDailyReports() {
  return fetcher({ url: "/api/submitDailyReports", method: "POST" });
}

export async function studentsAttendanceForm(body: { class: string }) {
  return fetcher({
    url: "/api/studentsAttendanceForm",
    method: "POST",
    body: { class: body.class },
  });
}

export async function increaseAbsence(body: { studentId: number }) {
  return fetcher({ url: "/api/incrementStudentAbsence", method: "POST", body });
}

export async function decreaseAbsence(body: { studentId: number }) {
  return fetcher({ url: "/api/decrementStudentAbsence", method: "POST", body });
}

export async function checkStudentsAbsence(body: {
  class: string;
  date: string;
}) {
  return fetcher({
    url: "/api/checkStudentAbsenceReport",
    method: "POST",
    body,
  });
}

export async function checkStudentWarnings(body: { studentId: number }) {
  return fetcher({ url: "/api/checkStudentWarnings", method: "POST", body });
}

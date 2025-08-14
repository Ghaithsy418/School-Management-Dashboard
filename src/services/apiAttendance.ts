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

export async function submitStudentsAttendance(body: {
  session: number;
  students: { studentId: number }[];
  className: string;
}) {
  console.log(body, body.students.length === 0 ? true : false);
  return fetcher({
    url: "/api/studentsAttendanceSubmit",
    method: "POST",
    body: {
      ...body,
      fullAttendance: body.students.length === 0 ? true : false,
    },
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

export async function checkJustifications() {
  return fetcher({ url: "/api/checkJustifications", method: "GET" });
}

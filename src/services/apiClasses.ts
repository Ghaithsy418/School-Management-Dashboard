import { fetcher } from "./fetcher";

export async function showClasses() {
  return fetcher({ url: "/api/showClasses", method: "GET" });
}

export async function editClass(body: {
  studentsNum: number;
  classId: number;
  currentStudentNumber: number;
  className: string;
}) {
  return fetcher({
    url: "/api/editClass",
    method: "POST",
    body,
    errorName: "className",
  });
}

export async function createClass(body: {
  studentsNum: number;
  className: string;
}) {
  return fetcher({
    url: "/api/createClasses",
    method: "PUT",
    body: { ...body, currentStudentNumber: 0 },
  });
}

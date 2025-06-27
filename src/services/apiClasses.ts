import { fetcher } from "./fetcher";

export async function showClasses() {
  return fetcher({ url: "/api/showClasses", method: "GET" });
}

export async function editClass(body: {
  studentsNum: number;
  classId: number;
}) {
  return fetcher({
    url: "/api/editClass",
    method: "POST",
    body: { ...body, class_id: body.classId },
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

export async function getStudentsForClasses() {
  return fetcher({ url: "/api/getAllStudents", method: "GET" });
}

export async function assignStudentToClass(body: {
  studentId: number;
  classId: number;
}) {
  return fetcher({
    url: "/api/assignStudentToClass",
    method: "POST",
    body: { ...body, new_class_id: body.classId },
  });
}

export async function deleteClass(body: { classId: number }) {
  return fetcher({ url: "/api/deleteClass", method: "DELETE", body });
}

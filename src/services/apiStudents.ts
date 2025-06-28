import { fetcher } from "./fetcher";

export async function showStudents() {
  return fetcher({ url: "/api/getPaginateStudents", method: "GET" });
}

export async function showTeacherStudents() {
  return fetcher({ url: "/api/getAllTeacherStudents", method: "GET" });
}

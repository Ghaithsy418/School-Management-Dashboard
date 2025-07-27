import { fetcher } from "./fetcher";

export async function getTeachers() {
  return fetcher({ url: "/api/getAllTeachers", method: "GET" });
}

export async function getTeacher(body: { teacher_id: number }) {
  return fetcher({ url: "/api/getSpecificTeacher", method: "POST", body });
}

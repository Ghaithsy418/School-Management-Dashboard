import { fetcher } from "./fetcher";

export async function getTeachers() {
  return fetcher({ url: "/api/getAllTeachers", method: "GET" });
}

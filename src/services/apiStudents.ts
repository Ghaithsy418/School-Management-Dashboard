import { fetcher } from "./fetcher";

export async function showStudents() {
  return fetcher({ url: "/api/getPaginateStudents", method: "GET" });
}

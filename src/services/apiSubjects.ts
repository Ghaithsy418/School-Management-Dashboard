import { fetcher } from "./fetcher";

export async function showSubjects() {
  return fetcher({ url: "/api/showSubjects", method: "GET" });
}

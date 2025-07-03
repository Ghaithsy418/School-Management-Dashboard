import { fetcher } from "./fetcher";

export async function showSubjects() {
  return fetcher({ url: "/api/getAllSubjects", method: "GET" });
}

export async function createSubject(body: {
  subjectName: string;
  minMark: number;
  maxMark: number;
  grade: number;
}) {
  return fetcher({ url: "/api/createSubject", method: "PUT", body });
}

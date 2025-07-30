import { fetcher } from "./fetcher";

export async function getEmptySheet(body: {
  classId: number;
  semester: string;
  type: string;
}) {
  return fetcher({
    url: "/api/getEmptyExcelCheatForMarks",
    method: "POST",
    body: { ...body, classID: body.classId },
  });
}

export async function getMarksProfile(body: {
  student_id: number;
  semester: string;
}) {
  return fetcher({ url: "/api/getMarksProfile", method: "POST", body });
}

export async function getClassMarks(body: {
  semester: string;
  class_id: number;
}) {
  return fetcher({ url: "/api/getClassMarks", method: "POST", body });
}

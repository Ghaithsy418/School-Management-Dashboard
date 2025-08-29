import { ScheduleTypes } from "@/utils/types";
import { fetcher } from "./fetcher";
import Cookies from "js-cookie";

export async function CreateWeeklySchedule(body: {
  classId: number;
  schedule: ScheduleTypes[];
}) {
  return fetcher({
    url: "/api/createWeeklySchedule",
    method: "PUT",
    body: { classId: body.classId, schedule: body.schedule },
  });
}

export async function getTeachersAndSessions(body: { className: string }) {
  if (!body.className) return null;
  return fetcher({
    url: "/api/teachersAndTheirSessions",
    method: "POST",
    body,
  });
}

export async function getClassWeeklySchedule(body: { className: string }) {
  if (!body.className) return null;
  return fetcher({ url: "/api/getClassWeeklySchcedule", method: "POST", body });
}

export async function autoGenerateWeeklySchedule(body: { className: string }) {
  return fetcher({ url: "/api/generateWeeklySchedule", method: "POST", body });
}

export async function deleteWeeklySchedule(body: { className: string }) {
  if (!body.className) return null;
  return fetcher({ url: "/api/deleteWeeklySchecdule", method: "DELETE", body });
}

export async function getTeacherWeeklySchedule() {
  return fetcher({ url: "/api/getTeacherWeeklySchedule", method: "GET" });
}

export async function updateSchedule(body: {
  classId: number;
  schedule: ScheduleTypes[];
}) {
  return fetcher({ url: "/api/updateWeeklySchedule", method: "POST", body });
}

export async function uploadExamFile(
  body: { schedule: File; semester: string; type: string; grade: number },
  token: string,
) {
  const { grade, semester, type } = body;
  const formData = new FormData();

  formData.append("grade", String(grade));
  formData.append("type", type);
  formData.append("semester", semester.toLowerCase());

  if (body.schedule) {
    formData.append("schedule", body.schedule);
  }

  try {
    const res = await fetch(
      import.meta.env.VITE_APP_URL + "/api/uploadExamSchedule",
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      },
    );

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      if (errorData?.error === "Unauthorized") {
        Cookies.remove("token");
        Cookies.remove("userData");
        window.location.href = "/login";
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          errorData?.message || "Something went wrong with uploading the file",
        );
      }
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getExamSchedule(body: {
  grade: number;
  type: string;
  semester: string;
}) {
  return fetcher({
    url: "/api/getExamSchedule",
    method: "POST",
    body: {
      ...body,
      grade: String(body.grade),
      semester: body.semester.toLowerCase(),
    },
    accept: "application/pdf",
    pdfFile: true,
  });
}

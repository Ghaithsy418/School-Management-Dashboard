import { AddStudentTypes, TeacherSupervisorTypes } from "@/utils/types";
import { fetcher } from "./fetcher";
import Cookies from "js-cookie";
import { generatePassword } from "@/utils/generatePassword";
import { requestForToken } from "./fcm";

export async function login(body: { email: string; password: string }) {
  const fcmToken = await requestForToken();

  if (!fcmToken)
    return fetcher({
      url: "/api/login",
      method: "POST",
      body: { ...body, deviceType: "web" },
    });

  return fetcher({
    url: "/api/login",
    method: "POST",
    body: { ...body, deviceType: "web", fcmToken },
  });
}

export async function logout() {
  return fetcher({
    url: "/api/logout",
    method: "DELETE",
  });
}

export async function sendResetPassword(body: { email: string }) {
  return fetcher({
    url: "/api/sendForgetPasswordOtp",
    method: "POST",
    body,
  });
}

export async function confirmVerificationCode(body: {
  verificationCode: number;
  email: string;
}) {
  return fetcher({
    url: "/api/confirmForgetPasswordOtp",
    method: "POST",
    body: { otp: body.verificationCode, email: body.email },
  });
}

export async function newPassword(body: { password: string; email: string }) {
  return fetcher({
    url: "/api/resetPassword",
    method: "POST",
    body: { email: body.email, password: body.password },
  });
}

export async function addTeacher(body: TeacherSupervisorTypes, token: string) {
  const formData = new FormData();
  const bodyData = [
    "name",
    "middleName",
    "lastName",
    "email",
    "phoneNumber",
    "subject",
    "salary",
  ];

  bodyData.forEach((bd) => {
    if (bd as keyof TeacherSupervisorTypes)
      formData.append(bd, body[bd as keyof TeacherSupervisorTypes] as string);
  });
  formData.append("role", "teacher");
  formData.append("password", generatePassword());

  // Files
  if (body.certification?.[0]) {
    formData.append("certification", body.certification[0]);
  }
  if (body.photo?.[0]) {
    formData.append("photo", body.photo[0]);
  }

  try {
    const res = await fetch(
      import.meta.env.VITE_APP_URL + "/api/createTeacher",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
          errorData?.message || "Something went wrong with adding a Teacher",
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

export async function addSupervisor(
  body: TeacherSupervisorTypes,
  token: string,
) {
  const formData = new FormData();
  const bodyData = [
    "name",
    "middleName",
    "lastName",
    "email",
    "phoneNumber",
    "salary",
  ];

  bodyData.forEach((bd) => {
    if (body[bd as keyof TeacherSupervisorTypes]) {
      formData.append(bd, body[bd as keyof TeacherSupervisorTypes] as string);
    }
  });
  formData.append("role", "supervisor");
  formData.append("password", generatePassword());

  // Files
  if (body.certification?.[0]) {
    formData.append("certification", body.certification[0]);
  }
  if (body.photo?.[0]) {
    formData.append("photo", body.photo[0]);
  }

  try {
    const res = await fetch(
      import.meta.env.VITE_APP_URL + "/api/createSupervisor",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
          errorData?.message ||
            "Something went wrong with Adding a Supervisor!",
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

export async function addStudent(body: AddStudentTypes, token: string) {
  const formData = new FormData();
  const bodyData = [
    "name",
    "middleName",
    "lastName",
    "email",
    "phoneNumber",
    "class",
    "parentName",
    "parentMiddleName",
    "parentLastName",
    "parentPhoneNumber",
    "parentEmail",
    "parentJob",
  ];

  bodyData.forEach((bd) => {
    if (bd as keyof AddStudentTypes)
      formData.append(bd, body[bd as keyof AddStudentTypes] as string);
  });
  formData.append("role", "student");
  formData.append("password", generatePassword());
  formData.append("parentPassword", generatePassword());

  // Files
  if (body.previousCertification?.[0]) {
    formData.append("previousCertification", body.previousCertification[0]);
  }
  if (body.photo?.[0]) {
    formData.append("photo", body.photo[0]);
  }

  try {
    const res = await fetch(import.meta.env.VITE_APP_URL + "/api/createUser", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      if (errorData?.error === "Unauthorized") {
        Cookies.remove("token");
        Cookies.remove("userData");
        window.location.href = "/login";
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          errorData?.message || "Something went wrong with adding a Student",
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

export async function deleteUser(body: { user_id: number }) {
  return fetcher({ url: "/api/deleteUser", method: "DELETE", body });
}

export async function getCurrentUser() {
  return fetcher({ url: "/api/getUserInfo", method: "GET" });
}

export async function addOthers(body: TeacherSupervisorTypes, token: string) {
  const formData = new FormData();
  const bodyData = [
    "name",
    "middleName",
    "lastName",
    "email",
    "phoneNumber",
    "salary",
  ];

  bodyData.forEach((bd) => {
    if (bd as keyof TeacherSupervisorTypes)
      formData.append(bd, body[bd as keyof TeacherSupervisorTypes] as string);
  });
  formData.append("role", "other");
  formData.append("password", generatePassword());

  // Files
  if (body.certification?.[0]) {
    formData.append("certification", body.certification[0]);
  }
  if (body.photo?.[0]) {
    formData.append("photo", body.photo[0]);
  }

  try {
    const res = await fetch(import.meta.env.VITE_APP_URL + "/api/createOther", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      if (errorData?.error === "Unauthorized") {
        Cookies.remove("token");
        Cookies.remove("userData");
        window.location.href = "/login";
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          errorData?.message ||
            "Something went wrong with adding an other user",
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

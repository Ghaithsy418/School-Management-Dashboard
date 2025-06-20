import { StudentTypes, TeacherSupervisorTypes } from "@/utils/types";

export async function login(body: { email: string; password: string }) {
  const res = await fetch(import.meta.env.VITE_APP_URL + "/api/login", {
    method: "POST",
    headers,
    body: JSON.stringify({ ...body, deviceType: "web" }),
  });

  if (!res.ok) throw new Error("Something went wrong with logging in!");
  const data = await res.json();

  return data;
}

export async function logout(body: { password: string }, token: string) {
  const res = await fetch(import.meta.env.VITE_APP_URL + "/api/logout", {
    method: "DELETE",
    headers: { ...headers, Authorization: `Bearer ${token}` },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error("Something went wrong with logout!");
  const data = await res.json();

  return data;
}

export async function sendResetPassword(body: { email: string }) {
  const res = await fetch(
    import.meta.env.VITE_APP_URL + "/api/sendForgetPasswordOtp",
    {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    },
  );

  if (!res.ok)
    throw new Error(
      "Something went wrong with sending reset password request ",
    );
  const data = await res.json();

  return data;
}

export async function confirmVerificationCode(body: {
  verificationCode: number;
  email: string;
}) {
  const res = await fetch(
    import.meta.env.VITE_APP_URL + "/api/confirmForgetPasswordOtp",
    {
      method: "POST",
      headers,
      body: JSON.stringify({ otp: body.verificationCode, email: body.email }),
    },
  );

  if (!res.ok)
    throw new Error(
      "Something went wrong with confirming the verification code!",
    );
  const data = await res.json();

  return data;
}

export async function newPassword(body: { password: string; email: string }) {
  const res = await fetch(import.meta.env.VITE_APP_URL + "/api/resetPassword", {
    method: "POST",
    headers,
    body: JSON.stringify({ email: body.email, password: body.password }),
  });

  if (!res.ok)
    throw new Error("Something went wrong with setting the new password!");
  const data = await res.json();

  return data;
}

export async function addTeacher(body: TeacherSupervisorTypes, token: string) {
  const formData = new FormData();

  formData.append("name", body.name);
  formData.append("middleName", body.middleName || "");
  formData.append("lastName", body.lastName);
  formData.append("email", body.email);
  formData.append("password", body.password);
  formData.append("phoneNumber", body.phoneNumber);
  formData.append("role", "teacher");
  formData.append("subject", body.subject);
  formData.append("salary", String(body.salary));

  // Files
  if (body.certification?.[0]) {
    formData.append("certification", body.certification[0]);
  }
  if (body.photo?.[0]) {
    formData.append("photo", body.photo[0]);
  }

  const res = await fetch(import.meta.env.VITE_APP_URL + "/api/createTeacher", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) throw new Error("Something went wrong with adding the teacher!");
  const data = await res.json();

  return data;
}

export async function addSupervisor(
  body: TeacherSupervisorTypes,
  token: string,
) {
  const formData = new FormData();

  formData.append("name", body.name);
  formData.append("middleName", body.middleName || "");
  formData.append("lastName", body.lastName);
  formData.append("email", body.email);
  formData.append("password", body.password);
  formData.append("phoneNumber", body.phoneNumber);
  formData.append("role", "supervisor");
  formData.append("salary", String(body.salary));

  // Files
  if (body.certification?.[0]) {
    formData.append("certification", body.certification[0]);
  }
  if (body.photo?.[0]) {
    formData.append("photo", body.photo[0]);
  }

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

  if (!res.ok)
    throw new Error("Something went wrong with adding the supervisor!");
  const data = await res.json();

  return data;
}

export async function addStudent(body: StudentTypes, token: string) {
  const formData = new FormData();

  formData.append("name", body.name);
  formData.append("middleName", body.middleName || "");
  formData.append("lastName", body.lastName);
  formData.append("email", body.email);
  formData.append("password", body.password);
  formData.append("phoneNumber", body.phoneNumber);
  formData.append("role", "student");
  formData.append("class", body.class);
  formData.append("parentName", body.parentName);
  formData.append("parentMiddleName", body.parentMiddleName);
  formData.append("parentLastName", body.parentLastName);
  formData.append("parentPhoneNumber", body.parentPhoneNumber);
  formData.append("parentEmail", body.parentEmail);
  formData.append("parentPassword", body.parentPassword);
  formData.append("parentJob", body.parentJob);

  // Files
  if (body.previousCertification?.[0]) {
    formData.append("previousCertification", body.previousCertification[0]);
  }
  if (body.photo?.[0]) {
    formData.append("photo", body.photo[0]);
  }

  const res = await fetch(import.meta.env.VITE_APP_URL + "/api/createUser", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });

  // if (!res.ok) throw new Error("Something went wrong with adding the student!");
  const data = await res.json();
  console.log(data);
  return data;
}

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

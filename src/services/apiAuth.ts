import { AddStudentTypes, TeacherSupervisorTypes } from "@/utils/types";

export async function login(body: { email: string; password: string }) {
  try {
    const res = await fetch(import.meta.env.VITE_APP_URL + "/api/login", {
      method: "POST",
      headers,
      body: JSON.stringify({ ...body, deviceType: "web" }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message || "Something went wrong with Login!");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function logout(token: string) {
  try {
    const res = await fetch(import.meta.env.VITE_APP_URL + "/api/logout", {
      method: "DELETE",
      headers: { ...headers, Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(
        errorData?.message || "Something went wrong with Logout!",
      );
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function sendResetPassword(body: { email: string }) {
  try {
    const res = await fetch(
      import.meta.env.VITE_APP_URL + "/api/sendForgetPasswordOtp",
      {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      },
    );

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(
        errorData?.message ||
          "Something went wrong with Sending a reset password request!",
      );
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function confirmVerificationCode(body: {
  verificationCode: number;
  email: string;
}) {
  try {
    const res = await fetch(
      import.meta.env.VITE_APP_URL + "/api/confirmForgetPasswordOtp",
      {
        method: "POST",
        headers,
        body: JSON.stringify({ otp: body.verificationCode, email: body.email }),
      },
    );

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(
        errorData?.message ||
          "Something went wrong with confirming the verification code!",
      );
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function newPassword(body: { password: string; email: string }) {
  try {
    const res = await fetch(
      import.meta.env.VITE_APP_URL + "/api/resetPassword",
      {
        method: "POST",
        headers,
        body: JSON.stringify({ email: body.email, password: body.password }),
      },
    );

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(
        errorData?.message ||
          "Something went wrong with Setting a new password!",
      );
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function addTeacher(body: TeacherSupervisorTypes, token: string) {
  const formData = new FormData();
  const bodyData = [
    "name",
    "middleName",
    "lastName",
    "email",
    "password",
    "phoneNumber",
    "subject",
    "salary",
  ];

  bodyData.forEach((bd) => {
    if (bd as keyof TeacherSupervisorTypes)
      formData.append(bd, body[bd as keyof TeacherSupervisorTypes] as string);
  });
  formData.append("role", "teacher");

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
      throw new Error(
        errorData?.message || "Something went wrong with adding a Teacher",
      );
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
    "password",
    "phoneNumber",
    "salary",
  ];

  bodyData.forEach((bd) => {
    if (body[bd as keyof TeacherSupervisorTypes]) {
      formData.append(bd, body[bd as keyof TeacherSupervisorTypes] as string);
    }
  });
  formData.append("role", "supervisor");

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
      throw new Error(
        errorData?.message || "Something went wrong with Adding a Supervisor!",
      );
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
    "password",
    "phoneNumber",
    "class",
    "parentName",
    "parentMiddleName",
    "parentLastName",
    "parentPhoneNumber",
    "parentEmail",
    "parentPassword",
    "parentJob",
  ];

  bodyData.forEach((bd) => {
    if (bd as keyof AddStudentTypes)
      formData.append(bd, body[bd as keyof AddStudentTypes] as string);
  });
  formData.append("role", "student");

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
      throw new Error(
        errorData?.message || "Something went wrong with adding a Student",
      );
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

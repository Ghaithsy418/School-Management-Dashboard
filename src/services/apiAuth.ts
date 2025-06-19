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

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

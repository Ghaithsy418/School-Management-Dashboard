export async function login(body: { email: string; password: string }) {
  const res = await fetch(import.meta.env.VITE_APP_URL + "/api/login", {
    method: "POST",
    headers,
    body: JSON.stringify({ ...body, deviceType: "web" }),
  });

  if (!res.ok) throw new Error("Something went wrong with the Login!");
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
    throw new Error("Something went wrong with reseting the password!");
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
  console.log(res);
  if (!res.ok)
    throw new Error(
      "Something went wrong with confirming the Verification Code!",
    );
  const data = await res.json();

  return data;
}

export async function newPassword(body: { password: string; email: string }) {
  const res = await fetch(import.meta.env.VITE_APP_URL + "/api/resetPassword", {
    method: "POST",
    body: JSON.stringify({ email: body.email, password: body.password }),
  });

  if (!res.ok)
    throw new Error("Something went wrong with Setting new Password!");
  const data = await res.json();

  return data;
}

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

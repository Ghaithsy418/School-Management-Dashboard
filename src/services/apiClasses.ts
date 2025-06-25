export async function showClasses(token: string) {
  try {
    const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/showClasses`, {
      method: "GET",
      headers: { ...headers, Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(
        errorData?.message ||
          "Something went wrong while getting Classes data!",
      );
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function editClass(
  body: {
    studentsNum: number;
    classId: number;
    currentStudentNumber: number;
    className: string;
  },
  token: string,
) {
  try {
    const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/editClass`, {
      method: "POST",
      headers: { ...headers, Authorization: `Bearer ${token}` },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(
        errorData?.message?.className ||
          errorData?.message?.studentsNum ||
          "Something went wrong with editing the class!",
      );
    }
    const data = await res.json();
    console.log(data, res);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createClass(
  body: {
    studentsNum: number;
    className: string;
  },
  token: string,
) {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_APP_URL}/api/createClasses`,
      {
        method: "PUT",
        headers: { ...headers, Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ...body, currentStudentNumber: 0 }),
      },
    );

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(
        errorData?.message?.className ||
          errorData?.message?.studentsNum ||
          "Something went wrong with creating a class!",
      );
    }
    const data = await res.json();
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

interface StudentsGpa {
  gpa: { GPA_1: number; GPA_2: number; GPA_final: number };
}

function StudentsGpa({ gpa }: StudentsGpa) {
  return (
    <>
      <p>{gpa?.GPA_final ?? "-"}</p>
    </>
  );
}

export default StudentsGpa;

interface StudentsGpa {
  gpa: number;
}

function StudentsGpa({ gpa }: StudentsGpa) {
  return (
    <>
      <p>{gpa ?? "-"}</p>
    </>
  );
}

export default StudentsGpa;

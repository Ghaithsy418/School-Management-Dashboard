interface StudentsAbsences {
  absences_number: number;
  warnings: number;
}

function StudentsAbsences({ absences_number, warnings }: StudentsAbsences) {
  return (
    <>
      <p>{absences_number ? 5 - absences_number : 0}</p>
      <p>{warnings ? warnings : 0}</p>
    </>
  );
}

export default StudentsAbsences;

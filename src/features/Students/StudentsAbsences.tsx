interface StudentsAbsences {
  absences_number: number;
}

function StudentsAbsences({ absences_number }: StudentsAbsences) {
  return (
    <>
      <p>{absences_number ? 5 - absences_number : 0}</p>
    </>
  );
}

export default StudentsAbsences;

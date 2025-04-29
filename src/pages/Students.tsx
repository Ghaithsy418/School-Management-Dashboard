import StudentsHeader from "../features/Students/StudentsHeader";
import StudentsTable from "../features/Students/StudentsTable";

function Students() {
  return (
    <div className="flex flex-col justify-center gap-6 px-10">
      <h2 className="text-4xl font-bold">Students</h2>
      <StudentsHeader />
      <StudentsTable />
    </div>
  );
}

export default Students;

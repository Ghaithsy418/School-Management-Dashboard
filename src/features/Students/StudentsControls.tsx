import { Link } from "react-router";
import { useUser } from "../../context/UserContext";
import Filter from "../../ui/Filter";

function StudentsControls() {
  const { role } = useUser();
  return (
    <div className="flex items-center justify-center gap-5">
      <Filter options={options} />
      {role === "manager" && (
        <Link
          to="add-a-student"
          className="rounded-md bg-indigo-700 px-4 py-2 text-indigo-50 transition-all duration-300 hover:bg-indigo-800"
        >
          Add a Student
        </Link>
      )}
    </div>
  );
}

const options = [
  { title: "Sort by", value: "" },
  { title: "Ascending (A-Z)", value: "asc" },
  { title: "Descending (Z-A)", value: "desc" },
];

export default StudentsControls;

import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import AvatarGenerator from "./AvatarGenerator";

interface DataTypes {
  teacher_id: number;
  full_name: string;
  salary: number;
  email: string;
  subject?: { subject_name: string }[];
}

function Card({ data }: { data: DataTypes }) {
  const { full_name, email, subject } = data;

  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-md border-1 border-gray-300/80 px-3 py-6 shadow-md shadow-gray-300/20 transition-all duration-300 hover:shadow-xl hover:shadow-gray-300/40">
      <AvatarGenerator name={full_name} size={72} />
      <div className="flex flex-col items-center justify-center gap-1">
        <h3 className="mt-2 font-semibold text-indigo-950">{full_name}</h3>
        <p className="text-xs font-light tracking-wider text-gray-500">
          {email}
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {subject?.map((sub) => (
          <span className="rounded-md bg-green-200 px-3 py-1 text-[10px] font-bold text-green-700 capitalize">
            {sub.subject_name}
          </span>
        ))}
      </div>
      <Link
        to=""
        className="flex w-[90%] items-center justify-center gap-2 rounded-md bg-indigo-800 px-4 py-2 text-sm text-indigo-50 transition-all duration-300 hover:bg-indigo-700"
      >
        <span>
          <FaRegUser className="h-3 w-3" />
        </span>
        Profile
      </Link>
    </div>
  );
}

export default Card;

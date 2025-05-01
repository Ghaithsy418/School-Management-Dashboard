import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router";
import AvatarGenerator from "./AvatarGenerator";

function Card() {
  return (
    <div className="flex flex-col items-center justify-center gap-1 rounded-md border-1 border-gray-300/80 px-3 py-6 shadow-md shadow-gray-300/20 transition-all duration-300 hover:shadow-xl hover:shadow-gray-300/40">
      <AvatarGenerator name="ghaith" size={72} />
      <h3 className="mt-2 font-semibold text-indigo-950">Ghaith Shabakji</h3>
      <p className="mb-3 text-sm font-light tracking-wider text-gray-500">
        Teacher
      </p>
      <span className="mb-5 rounded-md bg-green-200 px-3 py-1 text-[10px] font-bold text-green-700">
        Mathematics
      </span>
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
